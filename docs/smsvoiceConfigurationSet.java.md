# `smsvoiceConfigurationSet` Submodule <a name="`smsvoiceConfigurationSet` Submodule" id="@cdktn/provider-awscc.smsvoiceConfigurationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceConfigurationSet <a name="SmsvoiceConfigurationSet" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set awscc_smsvoice_configuration_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_configuration_set.SmsvoiceConfigurationSet;

SmsvoiceConfigurationSet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .configurationSetName(java.lang.String)
//  .defaultSenderId(java.lang.String)
//  .eventDestinations(IResolvable|java.util.List<SmsvoiceConfigurationSetEventDestinations>)
//  .messageFeedbackEnabled(java.lang.Boolean|IResolvable)
//  .protectConfigurationId(java.lang.String)
//  .tags(IResolvable|java.util.List<SmsvoiceConfigurationSetTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.configurationSetName">configurationSetName</a></code> | <code>java.lang.String</code> | The name to use for the configuration set. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.defaultSenderId">defaultSenderId</a></code> | <code>java.lang.String</code> | The default sender ID to set for the ConfigurationSet. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.eventDestinations">eventDestinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>></code> | An event destination is a location where you send message events. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.messageFeedbackEnabled">messageFeedbackEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set to true to enable message feedback. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.protectConfigurationId">protectConfigurationId</a></code> | <code>java.lang.String</code> | The unique identifier for the protect configuration to be associated to the configuration set. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configurationSetName`<sup>Optional</sup> <a name="configurationSetName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.configurationSetName"></a>

- *Type:* java.lang.String

The name to use for the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#configuration_set_name SmsvoiceConfigurationSet#configuration_set_name}

---

##### `defaultSenderId`<sup>Optional</sup> <a name="defaultSenderId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.defaultSenderId"></a>

- *Type:* java.lang.String

The default sender ID to set for the ConfigurationSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#default_sender_id SmsvoiceConfigurationSet#default_sender_id}

---

##### `eventDestinations`<sup>Optional</sup> <a name="eventDestinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.eventDestinations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>>

An event destination is a location where you send message events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#event_destinations SmsvoiceConfigurationSet#event_destinations}

---

##### `messageFeedbackEnabled`<sup>Optional</sup> <a name="messageFeedbackEnabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.messageFeedbackEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set to true to enable message feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#message_feedback_enabled SmsvoiceConfigurationSet#message_feedback_enabled}

---

##### `protectConfigurationId`<sup>Optional</sup> <a name="protectConfigurationId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.protectConfigurationId"></a>

- *Type:* java.lang.String

The unique identifier for the protect configuration to be associated to the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#protect_configuration_id SmsvoiceConfigurationSet#protect_configuration_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#tags SmsvoiceConfigurationSet#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putEventDestinations">putEventDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetConfigurationSetName">resetConfigurationSetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetDefaultSenderId">resetDefaultSenderId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetEventDestinations">resetEventDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetMessageFeedbackEnabled">resetMessageFeedbackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetProtectConfigurationId">resetProtectConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEventDestinations` <a name="putEventDestinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putEventDestinations"></a>

```java
public void putEventDestinations(IResolvable|java.util.List<SmsvoiceConfigurationSetEventDestinations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putEventDestinations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SmsvoiceConfigurationSetTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>>

---

##### `resetConfigurationSetName` <a name="resetConfigurationSetName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetConfigurationSetName"></a>

```java
public void resetConfigurationSetName()
```

##### `resetDefaultSenderId` <a name="resetDefaultSenderId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetDefaultSenderId"></a>

```java
public void resetDefaultSenderId()
```

##### `resetEventDestinations` <a name="resetEventDestinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetEventDestinations"></a>

```java
public void resetEventDestinations()
```

##### `resetMessageFeedbackEnabled` <a name="resetMessageFeedbackEnabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetMessageFeedbackEnabled"></a>

```java
public void resetMessageFeedbackEnabled()
```

##### `resetProtectConfigurationId` <a name="resetProtectConfigurationId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetProtectConfigurationId"></a>

```java
public void resetProtectConfigurationId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoiceConfigurationSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isConstruct"></a>

```java
import io.cdktn.providers.awscc.smsvoice_configuration_set.SmsvoiceConfigurationSet;

SmsvoiceConfigurationSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.smsvoice_configuration_set.SmsvoiceConfigurationSet;

SmsvoiceConfigurationSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.smsvoice_configuration_set.SmsvoiceConfigurationSet;

SmsvoiceConfigurationSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.smsvoice_configuration_set.SmsvoiceConfigurationSet;

SmsvoiceConfigurationSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SmsvoiceConfigurationSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SmsvoiceConfigurationSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SmsvoiceConfigurationSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SmsvoiceConfigurationSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceConfigurationSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.eventDestinations">eventDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList">SmsvoiceConfigurationSetEventDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList">SmsvoiceConfigurationSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.configurationSetNameInput">configurationSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.defaultSenderIdInput">defaultSenderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.eventDestinationsInput">eventDestinationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.messageFeedbackEnabledInput">messageFeedbackEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.protectConfigurationIdInput">protectConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.configurationSetName">configurationSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.defaultSenderId">defaultSenderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.messageFeedbackEnabled">messageFeedbackEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.protectConfigurationId">protectConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `eventDestinations`<sup>Required</sup> <a name="eventDestinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.eventDestinations"></a>

```java
public SmsvoiceConfigurationSetEventDestinationsList getEventDestinations();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList">SmsvoiceConfigurationSetEventDestinationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tags"></a>

```java
public SmsvoiceConfigurationSetTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList">SmsvoiceConfigurationSetTagsList</a>

---

##### `configurationSetNameInput`<sup>Optional</sup> <a name="configurationSetNameInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.configurationSetNameInput"></a>

```java
public java.lang.String getConfigurationSetNameInput();
```

- *Type:* java.lang.String

---

##### `defaultSenderIdInput`<sup>Optional</sup> <a name="defaultSenderIdInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.defaultSenderIdInput"></a>

```java
public java.lang.String getDefaultSenderIdInput();
```

- *Type:* java.lang.String

---

##### `eventDestinationsInput`<sup>Optional</sup> <a name="eventDestinationsInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.eventDestinationsInput"></a>

```java
public IResolvable|java.util.List<SmsvoiceConfigurationSetEventDestinations> getEventDestinationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>>

---

##### `messageFeedbackEnabledInput`<sup>Optional</sup> <a name="messageFeedbackEnabledInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.messageFeedbackEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getMessageFeedbackEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `protectConfigurationIdInput`<sup>Optional</sup> <a name="protectConfigurationIdInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.protectConfigurationIdInput"></a>

```java
public java.lang.String getProtectConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SmsvoiceConfigurationSetTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>>

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.configurationSetName"></a>

```java
public java.lang.String getConfigurationSetName();
```

- *Type:* java.lang.String

---

##### `defaultSenderId`<sup>Required</sup> <a name="defaultSenderId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.defaultSenderId"></a>

```java
public java.lang.String getDefaultSenderId();
```

- *Type:* java.lang.String

---

##### `messageFeedbackEnabled`<sup>Required</sup> <a name="messageFeedbackEnabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.messageFeedbackEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMessageFeedbackEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `protectConfigurationId`<sup>Required</sup> <a name="protectConfigurationId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.protectConfigurationId"></a>

```java
public java.lang.String getProtectConfigurationId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceConfigurationSetConfig <a name="SmsvoiceConfigurationSetConfig" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_configuration_set.SmsvoiceConfigurationSetConfig;

SmsvoiceConfigurationSetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .configurationSetName(java.lang.String)
//  .defaultSenderId(java.lang.String)
//  .eventDestinations(IResolvable|java.util.List<SmsvoiceConfigurationSetEventDestinations>)
//  .messageFeedbackEnabled(java.lang.Boolean|IResolvable)
//  .protectConfigurationId(java.lang.String)
//  .tags(IResolvable|java.util.List<SmsvoiceConfigurationSetTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.configurationSetName">configurationSetName</a></code> | <code>java.lang.String</code> | The name to use for the configuration set. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.defaultSenderId">defaultSenderId</a></code> | <code>java.lang.String</code> | The default sender ID to set for the ConfigurationSet. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.eventDestinations">eventDestinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>></code> | An event destination is a location where you send message events. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.messageFeedbackEnabled">messageFeedbackEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set to true to enable message feedback. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.protectConfigurationId">protectConfigurationId</a></code> | <code>java.lang.String</code> | The unique identifier for the protect configuration to be associated to the configuration set. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configurationSetName`<sup>Optional</sup> <a name="configurationSetName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.configurationSetName"></a>

```java
public java.lang.String getConfigurationSetName();
```

- *Type:* java.lang.String

The name to use for the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#configuration_set_name SmsvoiceConfigurationSet#configuration_set_name}

---

##### `defaultSenderId`<sup>Optional</sup> <a name="defaultSenderId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.defaultSenderId"></a>

```java
public java.lang.String getDefaultSenderId();
```

- *Type:* java.lang.String

The default sender ID to set for the ConfigurationSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#default_sender_id SmsvoiceConfigurationSet#default_sender_id}

---

##### `eventDestinations`<sup>Optional</sup> <a name="eventDestinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.eventDestinations"></a>

```java
public IResolvable|java.util.List<SmsvoiceConfigurationSetEventDestinations> getEventDestinations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>>

An event destination is a location where you send message events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#event_destinations SmsvoiceConfigurationSet#event_destinations}

---

##### `messageFeedbackEnabled`<sup>Optional</sup> <a name="messageFeedbackEnabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.messageFeedbackEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMessageFeedbackEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set to true to enable message feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#message_feedback_enabled SmsvoiceConfigurationSet#message_feedback_enabled}

---

##### `protectConfigurationId`<sup>Optional</sup> <a name="protectConfigurationId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.protectConfigurationId"></a>

```java
public java.lang.String getProtectConfigurationId();
```

- *Type:* java.lang.String

The unique identifier for the protect configuration to be associated to the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#protect_configuration_id SmsvoiceConfigurationSet#protect_configuration_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SmsvoiceConfigurationSetTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#tags SmsvoiceConfigurationSet#tags}

---

### SmsvoiceConfigurationSetEventDestinations <a name="SmsvoiceConfigurationSetEventDestinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_configuration_set.SmsvoiceConfigurationSetEventDestinations;

SmsvoiceConfigurationSetEventDestinations.builder()
//  .cloudwatchLogsDestination(SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination)
//  .enabled(java.lang.Boolean|IResolvable)
//  .eventDestinationName(java.lang.String)
//  .kinesisFirehoseDestination(SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination)
//  .matchingEventTypes(java.util.List<java.lang.String>)
//  .snsDestination(SmsvoiceConfigurationSetEventDestinationsSnsDestination)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.cloudwatchLogsDestination">cloudwatchLogsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a></code> | An object that contains IamRoleArn and LogGroupArn associated with an Amazon CloudWatch event destination. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true events will be logged. By default this is set to true. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.eventDestinationName">eventDestinationName</a></code> | <code>java.lang.String</code> | The name that identifies the event destination. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.kinesisFirehoseDestination">kinesisFirehoseDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a></code> | An object that contains IamRoleArn and DeliveryStreamArn associated with an Amazon Kinesis Firehose event destination. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.matchingEventTypes">matchingEventTypes</a></code> | <code>java.util.List<java.lang.String></code> | An array of event types that determine which events to log. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.snsDestination">snsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a></code> | An object that contains SNS TopicArn event destination. |

---

##### `cloudwatchLogsDestination`<sup>Optional</sup> <a name="cloudwatchLogsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.cloudwatchLogsDestination"></a>

```java
public SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination getCloudwatchLogsDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a>

An object that contains IamRoleArn and LogGroupArn associated with an Amazon CloudWatch event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#cloudwatch_logs_destination SmsvoiceConfigurationSet#cloudwatch_logs_destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true events will be logged. By default this is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#enabled SmsvoiceConfigurationSet#enabled}

---

##### `eventDestinationName`<sup>Optional</sup> <a name="eventDestinationName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.eventDestinationName"></a>

```java
public java.lang.String getEventDestinationName();
```

- *Type:* java.lang.String

The name that identifies the event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#event_destination_name SmsvoiceConfigurationSet#event_destination_name}

---

##### `kinesisFirehoseDestination`<sup>Optional</sup> <a name="kinesisFirehoseDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.kinesisFirehoseDestination"></a>

```java
public SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination getKinesisFirehoseDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a>

An object that contains IamRoleArn and DeliveryStreamArn associated with an Amazon Kinesis Firehose event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#kinesis_firehose_destination SmsvoiceConfigurationSet#kinesis_firehose_destination}

---

##### `matchingEventTypes`<sup>Optional</sup> <a name="matchingEventTypes" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.matchingEventTypes"></a>

```java
public java.util.List<java.lang.String> getMatchingEventTypes();
```

- *Type:* java.util.List<java.lang.String>

An array of event types that determine which events to log.

If 'ALL' is used, then AWS End User Messaging SMS and Voice logs every event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#matching_event_types SmsvoiceConfigurationSet#matching_event_types}

---

##### `snsDestination`<sup>Optional</sup> <a name="snsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.snsDestination"></a>

```java
public SmsvoiceConfigurationSetEventDestinationsSnsDestination getSnsDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a>

An object that contains SNS TopicArn event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#sns_destination SmsvoiceConfigurationSet#sns_destination}

---

### SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination <a name="SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_configuration_set.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination;

SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.builder()
//  .iamRoleArn(java.lang.String)
//  .logGroupArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | The name of the Amazon CloudWatch log group that you want to record events in. |

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#iam_role_arn SmsvoiceConfigurationSet#iam_role_arn}

---

##### `logGroupArn`<sup>Optional</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

The name of the Amazon CloudWatch log group that you want to record events in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#log_group_arn SmsvoiceConfigurationSet#log_group_arn}

---

### SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination <a name="SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_configuration_set.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination;

SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.builder()
//  .deliveryStreamArn(java.lang.String)
//  .iamRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.property.deliveryStreamArn">deliveryStreamArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the delivery stream. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination. |

---

##### `deliveryStreamArn`<sup>Optional</sup> <a name="deliveryStreamArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.property.deliveryStreamArn"></a>

```java
public java.lang.String getDeliveryStreamArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#delivery_stream_arn SmsvoiceConfigurationSet#delivery_stream_arn}

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#iam_role_arn SmsvoiceConfigurationSet#iam_role_arn}

---

### SmsvoiceConfigurationSetEventDestinationsSnsDestination <a name="SmsvoiceConfigurationSetEventDestinationsSnsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_configuration_set.SmsvoiceConfigurationSetEventDestinationsSnsDestination;

SmsvoiceConfigurationSetEventDestinationsSnsDestination.builder()
//  .topicArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to. |

---

##### `topicArn`<sup>Optional</sup> <a name="topicArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#topic_arn SmsvoiceConfigurationSet#topic_arn}

---

### SmsvoiceConfigurationSetTags <a name="SmsvoiceConfigurationSetTags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_configuration_set.SmsvoiceConfigurationSetTags;

SmsvoiceConfigurationSetTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#key SmsvoiceConfigurationSet#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_configuration_set#value SmsvoiceConfigurationSet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference <a name="SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_configuration_set.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference;

new SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resetIamRoleArn">resetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resetLogGroupArn">resetLogGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIamRoleArn` <a name="resetIamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resetIamRoleArn"></a>

```java
public void resetIamRoleArn()
```

##### `resetLogGroupArn` <a name="resetLogGroupArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resetLogGroupArn"></a>

```java
public void resetLogGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.iamRoleArnInput"></a>

```java
public java.lang.String getIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.logGroupArnInput"></a>

```java
public java.lang.String getLogGroupArnInput();
```

- *Type:* java.lang.String

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a>

---


### SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference <a name="SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_configuration_set.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference;

new SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resetDeliveryStreamArn">resetDeliveryStreamArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resetIamRoleArn">resetIamRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryStreamArn` <a name="resetDeliveryStreamArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resetDeliveryStreamArn"></a>

```java
public void resetDeliveryStreamArn()
```

##### `resetIamRoleArn` <a name="resetIamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resetIamRoleArn"></a>

```java
public void resetIamRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput">deliveryStreamArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn">deliveryStreamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deliveryStreamArnInput`<sup>Optional</sup> <a name="deliveryStreamArnInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput"></a>

```java
public java.lang.String getDeliveryStreamArnInput();
```

- *Type:* java.lang.String

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput"></a>

```java
public java.lang.String getIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `deliveryStreamArn`<sup>Required</sup> <a name="deliveryStreamArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn"></a>

```java
public java.lang.String getDeliveryStreamArn();
```

- *Type:* java.lang.String

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a>

---


### SmsvoiceConfigurationSetEventDestinationsList <a name="SmsvoiceConfigurationSetEventDestinationsList" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_configuration_set.SmsvoiceConfigurationSetEventDestinationsList;

new SmsvoiceConfigurationSetEventDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.get"></a>

```java
public SmsvoiceConfigurationSetEventDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SmsvoiceConfigurationSetEventDestinations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>>

---


### SmsvoiceConfigurationSetEventDestinationsOutputReference <a name="SmsvoiceConfigurationSetEventDestinationsOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_configuration_set.SmsvoiceConfigurationSetEventDestinationsOutputReference;

new SmsvoiceConfigurationSetEventDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putCloudwatchLogsDestination">putCloudwatchLogsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putKinesisFirehoseDestination">putKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putSnsDestination">putSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetCloudwatchLogsDestination">resetCloudwatchLogsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetEventDestinationName">resetEventDestinationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetKinesisFirehoseDestination">resetKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetMatchingEventTypes">resetMatchingEventTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetSnsDestination">resetSnsDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogsDestination` <a name="putCloudwatchLogsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putCloudwatchLogsDestination"></a>

```java
public void putCloudwatchLogsDestination(SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putCloudwatchLogsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a>

---

##### `putKinesisFirehoseDestination` <a name="putKinesisFirehoseDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putKinesisFirehoseDestination"></a>

```java
public void putKinesisFirehoseDestination(SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putKinesisFirehoseDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a>

---

##### `putSnsDestination` <a name="putSnsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putSnsDestination"></a>

```java
public void putSnsDestination(SmsvoiceConfigurationSetEventDestinationsSnsDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putSnsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a>

---

##### `resetCloudwatchLogsDestination` <a name="resetCloudwatchLogsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetCloudwatchLogsDestination"></a>

```java
public void resetCloudwatchLogsDestination()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEventDestinationName` <a name="resetEventDestinationName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetEventDestinationName"></a>

```java
public void resetEventDestinationName()
```

##### `resetKinesisFirehoseDestination` <a name="resetKinesisFirehoseDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetKinesisFirehoseDestination"></a>

```java
public void resetKinesisFirehoseDestination()
```

##### `resetMatchingEventTypes` <a name="resetMatchingEventTypes" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetMatchingEventTypes"></a>

```java
public void resetMatchingEventTypes()
```

##### `resetSnsDestination` <a name="resetSnsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetSnsDestination"></a>

```java
public void resetSnsDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.cloudwatchLogsDestination">cloudwatchLogsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.kinesisFirehoseDestination">kinesisFirehoseDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.snsDestination">snsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.cloudwatchLogsDestinationInput">cloudwatchLogsDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.eventDestinationNameInput">eventDestinationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.kinesisFirehoseDestinationInput">kinesisFirehoseDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.matchingEventTypesInput">matchingEventTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.snsDestinationInput">snsDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.eventDestinationName">eventDestinationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.matchingEventTypes">matchingEventTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogsDestination`<sup>Required</sup> <a name="cloudwatchLogsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.cloudwatchLogsDestination"></a>

```java
public SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference getCloudwatchLogsDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference</a>

---

##### `kinesisFirehoseDestination`<sup>Required</sup> <a name="kinesisFirehoseDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.kinesisFirehoseDestination"></a>

```java
public SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference getKinesisFirehoseDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference</a>

---

##### `snsDestination`<sup>Required</sup> <a name="snsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.snsDestination"></a>

```java
public SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference getSnsDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference</a>

---

##### `cloudwatchLogsDestinationInput`<sup>Optional</sup> <a name="cloudwatchLogsDestinationInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.cloudwatchLogsDestinationInput"></a>

```java
public IResolvable|SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination getCloudwatchLogsDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventDestinationNameInput`<sup>Optional</sup> <a name="eventDestinationNameInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.eventDestinationNameInput"></a>

```java
public java.lang.String getEventDestinationNameInput();
```

- *Type:* java.lang.String

---

##### `kinesisFirehoseDestinationInput`<sup>Optional</sup> <a name="kinesisFirehoseDestinationInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.kinesisFirehoseDestinationInput"></a>

```java
public IResolvable|SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination getKinesisFirehoseDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a>

---

##### `matchingEventTypesInput`<sup>Optional</sup> <a name="matchingEventTypesInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.matchingEventTypesInput"></a>

```java
public java.util.List<java.lang.String> getMatchingEventTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snsDestinationInput`<sup>Optional</sup> <a name="snsDestinationInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.snsDestinationInput"></a>

```java
public IResolvable|SmsvoiceConfigurationSetEventDestinationsSnsDestination getSnsDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventDestinationName`<sup>Required</sup> <a name="eventDestinationName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.eventDestinationName"></a>

```java
public java.lang.String getEventDestinationName();
```

- *Type:* java.lang.String

---

##### `matchingEventTypes`<sup>Required</sup> <a name="matchingEventTypes" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.matchingEventTypes"></a>

```java
public java.util.List<java.lang.String> getMatchingEventTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoiceConfigurationSetEventDestinations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>

---


### SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference <a name="SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_configuration_set.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference;

new SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resetTopicArn">resetTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTopicArn` <a name="resetTopicArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resetTopicArn"></a>

```java
public void resetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.topicArnInput"></a>

```java
public java.lang.String getTopicArnInput();
```

- *Type:* java.lang.String

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoiceConfigurationSetEventDestinationsSnsDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a>

---


### SmsvoiceConfigurationSetTagsList <a name="SmsvoiceConfigurationSetTagsList" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_configuration_set.SmsvoiceConfigurationSetTagsList;

new SmsvoiceConfigurationSetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.get"></a>

```java
public SmsvoiceConfigurationSetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SmsvoiceConfigurationSetTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>>

---


### SmsvoiceConfigurationSetTagsOutputReference <a name="SmsvoiceConfigurationSetTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_configuration_set.SmsvoiceConfigurationSetTagsOutputReference;

new SmsvoiceConfigurationSetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoiceConfigurationSetTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>

---



