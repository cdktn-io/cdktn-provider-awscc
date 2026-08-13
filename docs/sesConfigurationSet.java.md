# `sesConfigurationSet` Submodule <a name="`sesConfigurationSet` Submodule" id="@cdktn/provider-awscc.sesConfigurationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesConfigurationSet <a name="SesConfigurationSet" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set awscc_ses_configuration_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSet;

SesConfigurationSet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .archivingOptions(SesConfigurationSetArchivingOptions)
//  .deliveryOptions(SesConfigurationSetDeliveryOptions)
//  .name(java.lang.String)
//  .reputationOptions(SesConfigurationSetReputationOptions)
//  .sendingOptions(SesConfigurationSetSendingOptions)
//  .suppressionOptions(SesConfigurationSetSuppressionOptions)
//  .tags(IResolvable|java.util.List<SesConfigurationSetTags>)
//  .trackingOptions(SesConfigurationSetTrackingOptions)
//  .vdmOptions(SesConfigurationSetVdmOptions)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.archivingOptions">archivingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a></code> | An object that defines a MailManager archive that is used to preserve emails that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.deliveryOptions">deliveryOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a></code> | An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.reputationOptions">reputationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a></code> | An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.sendingOptions">sendingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a></code> | An object that defines whether or not Amazon SES can send email that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.suppressionOptions">suppressionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a></code> | An object that contains information about the suppression list preferences for your account. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>></code> | The tags (keys and values) associated with the contact list. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.trackingOptions">trackingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a></code> | An object that defines the open and click tracking options for emails that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.vdmOptions">vdmOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a></code> | An object that contains Virtual Deliverability Manager (VDM) settings for this configuration set. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `archivingOptions`<sup>Optional</sup> <a name="archivingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.archivingOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a>

An object that defines a MailManager archive that is used to preserve emails that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#archiving_options SesConfigurationSet#archiving_options}

---

##### `deliveryOptions`<sup>Optional</sup> <a name="deliveryOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.deliveryOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#delivery_options SesConfigurationSet#delivery_options}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#name SesConfigurationSet#name}

---

##### `reputationOptions`<sup>Optional</sup> <a name="reputationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.reputationOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a>

An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#reputation_options SesConfigurationSet#reputation_options}

---

##### `sendingOptions`<sup>Optional</sup> <a name="sendingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.sendingOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a>

An object that defines whether or not Amazon SES can send email that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#sending_options SesConfigurationSet#sending_options}

---

##### `suppressionOptions`<sup>Optional</sup> <a name="suppressionOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.suppressionOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a>

An object that contains information about the suppression list preferences for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#suppression_options SesConfigurationSet#suppression_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>>

The tags (keys and values) associated with the contact list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#tags SesConfigurationSet#tags}

---

##### `trackingOptions`<sup>Optional</sup> <a name="trackingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.trackingOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

An object that defines the open and click tracking options for emails that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#tracking_options SesConfigurationSet#tracking_options}

---

##### `vdmOptions`<sup>Optional</sup> <a name="vdmOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.vdmOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a>

An object that contains Virtual Deliverability Manager (VDM) settings for this configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#vdm_options SesConfigurationSet#vdm_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putArchivingOptions">putArchivingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putDeliveryOptions">putDeliveryOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putReputationOptions">putReputationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSendingOptions">putSendingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSuppressionOptions">putSuppressionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTrackingOptions">putTrackingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putVdmOptions">putVdmOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetArchivingOptions">resetArchivingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetDeliveryOptions">resetDeliveryOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetReputationOptions">resetReputationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetSendingOptions">resetSendingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetSuppressionOptions">resetSuppressionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetTrackingOptions">resetTrackingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetVdmOptions">resetVdmOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArchivingOptions` <a name="putArchivingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putArchivingOptions"></a>

```java
public void putArchivingOptions(SesConfigurationSetArchivingOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putArchivingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a>

---

##### `putDeliveryOptions` <a name="putDeliveryOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putDeliveryOptions"></a>

```java
public void putDeliveryOptions(SesConfigurationSetDeliveryOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putDeliveryOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

---

##### `putReputationOptions` <a name="putReputationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putReputationOptions"></a>

```java
public void putReputationOptions(SesConfigurationSetReputationOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putReputationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a>

---

##### `putSendingOptions` <a name="putSendingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSendingOptions"></a>

```java
public void putSendingOptions(SesConfigurationSetSendingOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSendingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a>

---

##### `putSuppressionOptions` <a name="putSuppressionOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSuppressionOptions"></a>

```java
public void putSuppressionOptions(SesConfigurationSetSuppressionOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSuppressionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SesConfigurationSetTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>>

---

##### `putTrackingOptions` <a name="putTrackingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTrackingOptions"></a>

```java
public void putTrackingOptions(SesConfigurationSetTrackingOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTrackingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

---

##### `putVdmOptions` <a name="putVdmOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putVdmOptions"></a>

```java
public void putVdmOptions(SesConfigurationSetVdmOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putVdmOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a>

---

##### `resetArchivingOptions` <a name="resetArchivingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetArchivingOptions"></a>

```java
public void resetArchivingOptions()
```

##### `resetDeliveryOptions` <a name="resetDeliveryOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetDeliveryOptions"></a>

```java
public void resetDeliveryOptions()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetName"></a>

```java
public void resetName()
```

##### `resetReputationOptions` <a name="resetReputationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetReputationOptions"></a>

```java
public void resetReputationOptions()
```

##### `resetSendingOptions` <a name="resetSendingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetSendingOptions"></a>

```java
public void resetSendingOptions()
```

##### `resetSuppressionOptions` <a name="resetSuppressionOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetSuppressionOptions"></a>

```java
public void resetSuppressionOptions()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetTags"></a>

```java
public void resetTags()
```

##### `resetTrackingOptions` <a name="resetTrackingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetTrackingOptions"></a>

```java
public void resetTrackingOptions()
```

##### `resetVdmOptions` <a name="resetVdmOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetVdmOptions"></a>

```java
public void resetVdmOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SesConfigurationSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSet;

SesConfigurationSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSet;

SesConfigurationSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSet;

SesConfigurationSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSet;

SesConfigurationSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SesConfigurationSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SesConfigurationSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SesConfigurationSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SesConfigurationSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SesConfigurationSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.archivingOptions">archivingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference">SesConfigurationSetArchivingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.deliveryOptions">deliveryOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference">SesConfigurationSetDeliveryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.reputationOptions">reputationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference">SesConfigurationSetReputationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.sendingOptions">sendingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference">SesConfigurationSetSendingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.suppressionOptions">suppressionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference">SesConfigurationSetSuppressionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList">SesConfigurationSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.trackingOptions">trackingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference">SesConfigurationSetTrackingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.vdmOptions">vdmOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference">SesConfigurationSetVdmOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.archivingOptionsInput">archivingOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.deliveryOptionsInput">deliveryOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.reputationOptionsInput">reputationOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.sendingOptionsInput">sendingOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.suppressionOptionsInput">suppressionOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.trackingOptionsInput">trackingOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.vdmOptionsInput">vdmOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `archivingOptions`<sup>Required</sup> <a name="archivingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.archivingOptions"></a>

```java
public SesConfigurationSetArchivingOptionsOutputReference getArchivingOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference">SesConfigurationSetArchivingOptionsOutputReference</a>

---

##### `deliveryOptions`<sup>Required</sup> <a name="deliveryOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.deliveryOptions"></a>

```java
public SesConfigurationSetDeliveryOptionsOutputReference getDeliveryOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference">SesConfigurationSetDeliveryOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `reputationOptions`<sup>Required</sup> <a name="reputationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.reputationOptions"></a>

```java
public SesConfigurationSetReputationOptionsOutputReference getReputationOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference">SesConfigurationSetReputationOptionsOutputReference</a>

---

##### `sendingOptions`<sup>Required</sup> <a name="sendingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.sendingOptions"></a>

```java
public SesConfigurationSetSendingOptionsOutputReference getSendingOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference">SesConfigurationSetSendingOptionsOutputReference</a>

---

##### `suppressionOptions`<sup>Required</sup> <a name="suppressionOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.suppressionOptions"></a>

```java
public SesConfigurationSetSuppressionOptionsOutputReference getSuppressionOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference">SesConfigurationSetSuppressionOptionsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tags"></a>

```java
public SesConfigurationSetTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList">SesConfigurationSetTagsList</a>

---

##### `trackingOptions`<sup>Required</sup> <a name="trackingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.trackingOptions"></a>

```java
public SesConfigurationSetTrackingOptionsOutputReference getTrackingOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference">SesConfigurationSetTrackingOptionsOutputReference</a>

---

##### `vdmOptions`<sup>Required</sup> <a name="vdmOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.vdmOptions"></a>

```java
public SesConfigurationSetVdmOptionsOutputReference getVdmOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference">SesConfigurationSetVdmOptionsOutputReference</a>

---

##### `archivingOptionsInput`<sup>Optional</sup> <a name="archivingOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.archivingOptionsInput"></a>

```java
public IResolvable|SesConfigurationSetArchivingOptions getArchivingOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a>

---

##### `deliveryOptionsInput`<sup>Optional</sup> <a name="deliveryOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.deliveryOptionsInput"></a>

```java
public IResolvable|SesConfigurationSetDeliveryOptions getDeliveryOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `reputationOptionsInput`<sup>Optional</sup> <a name="reputationOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.reputationOptionsInput"></a>

```java
public IResolvable|SesConfigurationSetReputationOptions getReputationOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a>

---

##### `sendingOptionsInput`<sup>Optional</sup> <a name="sendingOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.sendingOptionsInput"></a>

```java
public IResolvable|SesConfigurationSetSendingOptions getSendingOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a>

---

##### `suppressionOptionsInput`<sup>Optional</sup> <a name="suppressionOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.suppressionOptionsInput"></a>

```java
public IResolvable|SesConfigurationSetSuppressionOptions getSuppressionOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SesConfigurationSetTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>>

---

##### `trackingOptionsInput`<sup>Optional</sup> <a name="trackingOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.trackingOptionsInput"></a>

```java
public IResolvable|SesConfigurationSetTrackingOptions getTrackingOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

---

##### `vdmOptionsInput`<sup>Optional</sup> <a name="vdmOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.vdmOptionsInput"></a>

```java
public IResolvable|SesConfigurationSetVdmOptions getVdmOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SesConfigurationSetArchivingOptions <a name="SesConfigurationSetArchivingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetArchivingOptions;

SesConfigurationSetArchivingOptions.builder()
//  .archiveArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions.property.archiveArn">archiveArn</a></code> | <code>java.lang.String</code> | The ARN of the MailManager archive to associate with the configuration set. |

---

##### `archiveArn`<sup>Optional</sup> <a name="archiveArn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions.property.archiveArn"></a>

```java
public java.lang.String getArchiveArn();
```

- *Type:* java.lang.String

The ARN of the MailManager archive to associate with the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#archive_arn SesConfigurationSet#archive_arn}

---

### SesConfigurationSetConfig <a name="SesConfigurationSetConfig" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetConfig;

SesConfigurationSetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .archivingOptions(SesConfigurationSetArchivingOptions)
//  .deliveryOptions(SesConfigurationSetDeliveryOptions)
//  .name(java.lang.String)
//  .reputationOptions(SesConfigurationSetReputationOptions)
//  .sendingOptions(SesConfigurationSetSendingOptions)
//  .suppressionOptions(SesConfigurationSetSuppressionOptions)
//  .tags(IResolvable|java.util.List<SesConfigurationSetTags>)
//  .trackingOptions(SesConfigurationSetTrackingOptions)
//  .vdmOptions(SesConfigurationSetVdmOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.archivingOptions">archivingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a></code> | An object that defines a MailManager archive that is used to preserve emails that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.deliveryOptions">deliveryOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a></code> | An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.reputationOptions">reputationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a></code> | An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.sendingOptions">sendingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a></code> | An object that defines whether or not Amazon SES can send email that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.suppressionOptions">suppressionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a></code> | An object that contains information about the suppression list preferences for your account. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>></code> | The tags (keys and values) associated with the contact list. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.trackingOptions">trackingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a></code> | An object that defines the open and click tracking options for emails that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.vdmOptions">vdmOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a></code> | An object that contains Virtual Deliverability Manager (VDM) settings for this configuration set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `archivingOptions`<sup>Optional</sup> <a name="archivingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.archivingOptions"></a>

```java
public SesConfigurationSetArchivingOptions getArchivingOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a>

An object that defines a MailManager archive that is used to preserve emails that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#archiving_options SesConfigurationSet#archiving_options}

---

##### `deliveryOptions`<sup>Optional</sup> <a name="deliveryOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.deliveryOptions"></a>

```java
public SesConfigurationSetDeliveryOptions getDeliveryOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#delivery_options SesConfigurationSet#delivery_options}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#name SesConfigurationSet#name}

---

##### `reputationOptions`<sup>Optional</sup> <a name="reputationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.reputationOptions"></a>

```java
public SesConfigurationSetReputationOptions getReputationOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a>

An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#reputation_options SesConfigurationSet#reputation_options}

---

##### `sendingOptions`<sup>Optional</sup> <a name="sendingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.sendingOptions"></a>

```java
public SesConfigurationSetSendingOptions getSendingOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a>

An object that defines whether or not Amazon SES can send email that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#sending_options SesConfigurationSet#sending_options}

---

##### `suppressionOptions`<sup>Optional</sup> <a name="suppressionOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.suppressionOptions"></a>

```java
public SesConfigurationSetSuppressionOptions getSuppressionOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a>

An object that contains information about the suppression list preferences for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#suppression_options SesConfigurationSet#suppression_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SesConfigurationSetTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>>

The tags (keys and values) associated with the contact list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#tags SesConfigurationSet#tags}

---

##### `trackingOptions`<sup>Optional</sup> <a name="trackingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.trackingOptions"></a>

```java
public SesConfigurationSetTrackingOptions getTrackingOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

An object that defines the open and click tracking options for emails that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#tracking_options SesConfigurationSet#tracking_options}

---

##### `vdmOptions`<sup>Optional</sup> <a name="vdmOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.vdmOptions"></a>

```java
public SesConfigurationSetVdmOptions getVdmOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a>

An object that contains Virtual Deliverability Manager (VDM) settings for this configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#vdm_options SesConfigurationSet#vdm_options}

---

### SesConfigurationSetDeliveryOptions <a name="SesConfigurationSetDeliveryOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetDeliveryOptions;

SesConfigurationSetDeliveryOptions.builder()
//  .maxDeliverySeconds(java.lang.Number)
//  .sendingPoolName(java.lang.String)
//  .tlsPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.maxDeliverySeconds">maxDeliverySeconds</a></code> | <code>java.lang.Number</code> | Specifies the maximum time until which SES will retry sending emails. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.sendingPoolName">sendingPoolName</a></code> | <code>java.lang.String</code> | The name of the dedicated IP pool to associate with the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.tlsPolicy">tlsPolicy</a></code> | <code>java.lang.String</code> | Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). |

---

##### `maxDeliverySeconds`<sup>Optional</sup> <a name="maxDeliverySeconds" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.maxDeliverySeconds"></a>

```java
public java.lang.Number getMaxDeliverySeconds();
```

- *Type:* java.lang.Number

Specifies the maximum time until which SES will retry sending emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#max_delivery_seconds SesConfigurationSet#max_delivery_seconds}

---

##### `sendingPoolName`<sup>Optional</sup> <a name="sendingPoolName" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.sendingPoolName"></a>

```java
public java.lang.String getSendingPoolName();
```

- *Type:* java.lang.String

The name of the dedicated IP pool to associate with the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#sending_pool_name SesConfigurationSet#sending_pool_name}

---

##### `tlsPolicy`<sup>Optional</sup> <a name="tlsPolicy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.tlsPolicy"></a>

```java
public java.lang.String getTlsPolicy();
```

- *Type:* java.lang.String

Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).

If the value is Require , messages are only delivered if a TLS connection can be established. If the value is Optional , messages can be delivered in plain text if a TLS connection can't be established.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#tls_policy SesConfigurationSet#tls_policy}

---

### SesConfigurationSetReputationOptions <a name="SesConfigurationSetReputationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetReputationOptions;

SesConfigurationSetReputationOptions.builder()
//  .reputationMetricsEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions.property.reputationMetricsEnabled">reputationMetricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true , tracking of reputation metrics is enabled for the configuration set. |

---

##### `reputationMetricsEnabled`<sup>Optional</sup> <a name="reputationMetricsEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions.property.reputationMetricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getReputationMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true , tracking of reputation metrics is enabled for the configuration set.

If false , tracking of reputation metrics is disabled for the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#reputation_metrics_enabled SesConfigurationSet#reputation_metrics_enabled}

---

### SesConfigurationSetSendingOptions <a name="SesConfigurationSetSendingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetSendingOptions;

SesConfigurationSetSendingOptions.builder()
//  .sendingEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions.property.sendingEnabled">sendingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#sending_enabled SesConfigurationSet#sending_enabled}. |

---

##### `sendingEnabled`<sup>Optional</sup> <a name="sendingEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions.property.sendingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSendingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#sending_enabled SesConfigurationSet#sending_enabled}.

---

### SesConfigurationSetSuppressionOptions <a name="SesConfigurationSetSuppressionOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetSuppressionOptions;

SesConfigurationSetSuppressionOptions.builder()
//  .suppressedReasons(java.util.List<java.lang.String>)
//  .validationOptions(SesConfigurationSetSuppressionOptionsValidationOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions.property.suppressedReasons">suppressedReasons</a></code> | <code>java.util.List<java.lang.String></code> | A list that contains the reasons that email addresses are automatically added to the suppression list for your account. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions.property.validationOptions">validationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a></code> | An object that contains information about the validation options for your account. |

---

##### `suppressedReasons`<sup>Optional</sup> <a name="suppressedReasons" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions.property.suppressedReasons"></a>

```java
public java.util.List<java.lang.String> getSuppressedReasons();
```

- *Type:* java.util.List<java.lang.String>

A list that contains the reasons that email addresses are automatically added to the suppression list for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#suppressed_reasons SesConfigurationSet#suppressed_reasons}

---

##### `validationOptions`<sup>Optional</sup> <a name="validationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions.property.validationOptions"></a>

```java
public SesConfigurationSetSuppressionOptionsValidationOptions getValidationOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a>

An object that contains information about the validation options for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#validation_options SesConfigurationSet#validation_options}

---

### SesConfigurationSetSuppressionOptionsValidationOptions <a name="SesConfigurationSetSuppressionOptionsValidationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetSuppressionOptionsValidationOptions;

SesConfigurationSetSuppressionOptionsValidationOptions.builder()
//  .conditionThreshold(SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions.property.conditionThreshold">conditionThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a></code> | The condition threshold settings for suppression validation. |

---

##### `conditionThreshold`<sup>Optional</sup> <a name="conditionThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions.property.conditionThreshold"></a>

```java
public SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold getConditionThreshold();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a>

The condition threshold settings for suppression validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#condition_threshold SesConfigurationSet#condition_threshold}

---

### SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold <a name="SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold;

SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold.builder()
//  .conditionThresholdEnabled(java.lang.String)
//  .overallConfidenceThreshold(SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold.property.conditionThresholdEnabled">conditionThresholdEnabled</a></code> | <code>java.lang.String</code> | Whether the condition threshold is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold.property.overallConfidenceThreshold">overallConfidenceThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a></code> | The overall confidence threshold settings. |

---

##### `conditionThresholdEnabled`<sup>Optional</sup> <a name="conditionThresholdEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold.property.conditionThresholdEnabled"></a>

```java
public java.lang.String getConditionThresholdEnabled();
```

- *Type:* java.lang.String

Whether the condition threshold is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#condition_threshold_enabled SesConfigurationSet#condition_threshold_enabled}

---

##### `overallConfidenceThreshold`<sup>Optional</sup> <a name="overallConfidenceThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold.property.overallConfidenceThreshold"></a>

```java
public SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold getOverallConfidenceThreshold();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a>

The overall confidence threshold settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#overall_confidence_threshold SesConfigurationSet#overall_confidence_threshold}

---

### SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold <a name="SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold;

SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold.builder()
//  .confidenceVerdictThreshold(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold.property.confidenceVerdictThreshold">confidenceVerdictThreshold</a></code> | <code>java.lang.String</code> | The confidence verdict threshold level. |

---

##### `confidenceVerdictThreshold`<sup>Optional</sup> <a name="confidenceVerdictThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold.property.confidenceVerdictThreshold"></a>

```java
public java.lang.String getConfidenceVerdictThreshold();
```

- *Type:* java.lang.String

The confidence verdict threshold level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#confidence_verdict_threshold SesConfigurationSet#confidence_verdict_threshold}

---

### SesConfigurationSetTags <a name="SesConfigurationSetTags" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetTags;

SesConfigurationSetTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#key SesConfigurationSet#key}. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#value SesConfigurationSet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#key SesConfigurationSet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#value SesConfigurationSet#value}.

---

### SesConfigurationSetTrackingOptions <a name="SesConfigurationSetTrackingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetTrackingOptions;

SesConfigurationSetTrackingOptions.builder()
//  .customRedirectDomain(java.lang.String)
//  .httpsPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions.property.customRedirectDomain">customRedirectDomain</a></code> | <code>java.lang.String</code> | The domain to use for tracking open and click events. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions.property.httpsPolicy">httpsPolicy</a></code> | <code>java.lang.String</code> | The https policy to use for tracking open and click events. |

---

##### `customRedirectDomain`<sup>Optional</sup> <a name="customRedirectDomain" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions.property.customRedirectDomain"></a>

```java
public java.lang.String getCustomRedirectDomain();
```

- *Type:* java.lang.String

The domain to use for tracking open and click events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#custom_redirect_domain SesConfigurationSet#custom_redirect_domain}

---

##### `httpsPolicy`<sup>Optional</sup> <a name="httpsPolicy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions.property.httpsPolicy"></a>

```java
public java.lang.String getHttpsPolicy();
```

- *Type:* java.lang.String

The https policy to use for tracking open and click events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#https_policy SesConfigurationSet#https_policy}

---

### SesConfigurationSetVdmOptions <a name="SesConfigurationSetVdmOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetVdmOptions;

SesConfigurationSetVdmOptions.builder()
//  .dashboardOptions(SesConfigurationSetVdmOptionsDashboardOptions)
//  .guardianOptions(SesConfigurationSetVdmOptionsGuardianOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions.property.dashboardOptions">dashboardOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a></code> | Preferences regarding the Dashboard feature. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions.property.guardianOptions">guardianOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a></code> | Preferences regarding the Guardian feature. |

---

##### `dashboardOptions`<sup>Optional</sup> <a name="dashboardOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions.property.dashboardOptions"></a>

```java
public SesConfigurationSetVdmOptionsDashboardOptions getDashboardOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a>

Preferences regarding the Dashboard feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#dashboard_options SesConfigurationSet#dashboard_options}

---

##### `guardianOptions`<sup>Optional</sup> <a name="guardianOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions.property.guardianOptions"></a>

```java
public SesConfigurationSetVdmOptionsGuardianOptions getGuardianOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a>

Preferences regarding the Guardian feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#guardian_options SesConfigurationSet#guardian_options}

---

### SesConfigurationSetVdmOptionsDashboardOptions <a name="SesConfigurationSetVdmOptionsDashboardOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetVdmOptionsDashboardOptions;

SesConfigurationSetVdmOptionsDashboardOptions.builder()
//  .engagementMetrics(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions.property.engagementMetrics">engagementMetrics</a></code> | <code>java.lang.String</code> | Whether emails sent with this configuration set have engagement tracking enabled. |

---

##### `engagementMetrics`<sup>Optional</sup> <a name="engagementMetrics" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions.property.engagementMetrics"></a>

```java
public java.lang.String getEngagementMetrics();
```

- *Type:* java.lang.String

Whether emails sent with this configuration set have engagement tracking enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#engagement_metrics SesConfigurationSet#engagement_metrics}

---

### SesConfigurationSetVdmOptionsGuardianOptions <a name="SesConfigurationSetVdmOptionsGuardianOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetVdmOptionsGuardianOptions;

SesConfigurationSetVdmOptionsGuardianOptions.builder()
//  .optimizedSharedDelivery(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions.property.optimizedSharedDelivery">optimizedSharedDelivery</a></code> | <code>java.lang.String</code> | Whether emails sent with this configuration set have optimized delivery algorithm enabled. |

---

##### `optimizedSharedDelivery`<sup>Optional</sup> <a name="optimizedSharedDelivery" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions.property.optimizedSharedDelivery"></a>

```java
public java.lang.String getOptimizedSharedDelivery();
```

- *Type:* java.lang.String

Whether emails sent with this configuration set have optimized delivery algorithm enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#optimized_shared_delivery SesConfigurationSet#optimized_shared_delivery}

---

## Classes <a name="Classes" id="Classes"></a>

### SesConfigurationSetArchivingOptionsOutputReference <a name="SesConfigurationSetArchivingOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetArchivingOptionsOutputReference;

new SesConfigurationSetArchivingOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.resetArchiveArn">resetArchiveArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArchiveArn` <a name="resetArchiveArn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.resetArchiveArn"></a>

```java
public void resetArchiveArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.archiveArnInput">archiveArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.archiveArn">archiveArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `archiveArnInput`<sup>Optional</sup> <a name="archiveArnInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.archiveArnInput"></a>

```java
public java.lang.String getArchiveArnInput();
```

- *Type:* java.lang.String

---

##### `archiveArn`<sup>Required</sup> <a name="archiveArn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.archiveArn"></a>

```java
public java.lang.String getArchiveArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|SesConfigurationSetArchivingOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a>

---


### SesConfigurationSetDeliveryOptionsOutputReference <a name="SesConfigurationSetDeliveryOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetDeliveryOptionsOutputReference;

new SesConfigurationSetDeliveryOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetMaxDeliverySeconds">resetMaxDeliverySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetSendingPoolName">resetSendingPoolName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetTlsPolicy">resetTlsPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxDeliverySeconds` <a name="resetMaxDeliverySeconds" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetMaxDeliverySeconds"></a>

```java
public void resetMaxDeliverySeconds()
```

##### `resetSendingPoolName` <a name="resetSendingPoolName" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetSendingPoolName"></a>

```java
public void resetSendingPoolName()
```

##### `resetTlsPolicy` <a name="resetTlsPolicy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetTlsPolicy"></a>

```java
public void resetTlsPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.maxDeliverySecondsInput">maxDeliverySecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolNameInput">sendingPoolNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicyInput">tlsPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.maxDeliverySeconds">maxDeliverySeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolName">sendingPoolName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy">tlsPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxDeliverySecondsInput`<sup>Optional</sup> <a name="maxDeliverySecondsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.maxDeliverySecondsInput"></a>

```java
public java.lang.Number getMaxDeliverySecondsInput();
```

- *Type:* java.lang.Number

---

##### `sendingPoolNameInput`<sup>Optional</sup> <a name="sendingPoolNameInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolNameInput"></a>

```java
public java.lang.String getSendingPoolNameInput();
```

- *Type:* java.lang.String

---

##### `tlsPolicyInput`<sup>Optional</sup> <a name="tlsPolicyInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicyInput"></a>

```java
public java.lang.String getTlsPolicyInput();
```

- *Type:* java.lang.String

---

##### `maxDeliverySeconds`<sup>Required</sup> <a name="maxDeliverySeconds" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.maxDeliverySeconds"></a>

```java
public java.lang.Number getMaxDeliverySeconds();
```

- *Type:* java.lang.Number

---

##### `sendingPoolName`<sup>Required</sup> <a name="sendingPoolName" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolName"></a>

```java
public java.lang.String getSendingPoolName();
```

- *Type:* java.lang.String

---

##### `tlsPolicy`<sup>Required</sup> <a name="tlsPolicy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy"></a>

```java
public java.lang.String getTlsPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|SesConfigurationSetDeliveryOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

---


### SesConfigurationSetReputationOptionsOutputReference <a name="SesConfigurationSetReputationOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetReputationOptionsOutputReference;

new SesConfigurationSetReputationOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.resetReputationMetricsEnabled">resetReputationMetricsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReputationMetricsEnabled` <a name="resetReputationMetricsEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.resetReputationMetricsEnabled"></a>

```java
public void resetReputationMetricsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabledInput">reputationMetricsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabled">reputationMetricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `reputationMetricsEnabledInput`<sup>Optional</sup> <a name="reputationMetricsEnabledInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getReputationMetricsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `reputationMetricsEnabled`<sup>Required</sup> <a name="reputationMetricsEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getReputationMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|SesConfigurationSetReputationOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a>

---


### SesConfigurationSetSendingOptionsOutputReference <a name="SesConfigurationSetSendingOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetSendingOptionsOutputReference;

new SesConfigurationSetSendingOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.resetSendingEnabled">resetSendingEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSendingEnabled` <a name="resetSendingEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.resetSendingEnabled"></a>

```java
public void resetSendingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.sendingEnabledInput">sendingEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.sendingEnabled">sendingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sendingEnabledInput`<sup>Optional</sup> <a name="sendingEnabledInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.sendingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSendingEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sendingEnabled`<sup>Required</sup> <a name="sendingEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.sendingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSendingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|SesConfigurationSetSendingOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a>

---


### SesConfigurationSetSuppressionOptionsOutputReference <a name="SesConfigurationSetSuppressionOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetSuppressionOptionsOutputReference;

new SesConfigurationSetSuppressionOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.putValidationOptions">putValidationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resetSuppressedReasons">resetSuppressedReasons</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resetValidationOptions">resetValidationOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValidationOptions` <a name="putValidationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.putValidationOptions"></a>

```java
public void putValidationOptions(SesConfigurationSetSuppressionOptionsValidationOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.putValidationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a>

---

##### `resetSuppressedReasons` <a name="resetSuppressedReasons" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resetSuppressedReasons"></a>

```java
public void resetSuppressedReasons()
```

##### `resetValidationOptions` <a name="resetValidationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resetValidationOptions"></a>

```java
public void resetValidationOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.validationOptions">validationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasonsInput">suppressedReasonsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.validationOptionsInput">validationOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasons">suppressedReasons</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `validationOptions`<sup>Required</sup> <a name="validationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.validationOptions"></a>

```java
public SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference getValidationOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference</a>

---

##### `suppressedReasonsInput`<sup>Optional</sup> <a name="suppressedReasonsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasonsInput"></a>

```java
public java.util.List<java.lang.String> getSuppressedReasonsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `validationOptionsInput`<sup>Optional</sup> <a name="validationOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.validationOptionsInput"></a>

```java
public IResolvable|SesConfigurationSetSuppressionOptionsValidationOptions getValidationOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a>

---

##### `suppressedReasons`<sup>Required</sup> <a name="suppressedReasons" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasons"></a>

```java
public java.util.List<java.lang.String> getSuppressedReasons();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|SesConfigurationSetSuppressionOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a>

---


### SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference <a name="SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference;

new SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.putOverallConfidenceThreshold">putOverallConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resetConditionThresholdEnabled">resetConditionThresholdEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resetOverallConfidenceThreshold">resetOverallConfidenceThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOverallConfidenceThreshold` <a name="putOverallConfidenceThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.putOverallConfidenceThreshold"></a>

```java
public void putOverallConfidenceThreshold(SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.putOverallConfidenceThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a>

---

##### `resetConditionThresholdEnabled` <a name="resetConditionThresholdEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resetConditionThresholdEnabled"></a>

```java
public void resetConditionThresholdEnabled()
```

##### `resetOverallConfidenceThreshold` <a name="resetOverallConfidenceThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resetOverallConfidenceThreshold"></a>

```java
public void resetOverallConfidenceThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.overallConfidenceThreshold">overallConfidenceThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.conditionThresholdEnabledInput">conditionThresholdEnabledInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.overallConfidenceThresholdInput">overallConfidenceThresholdInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.conditionThresholdEnabled">conditionThresholdEnabled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `overallConfidenceThreshold`<sup>Required</sup> <a name="overallConfidenceThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.overallConfidenceThreshold"></a>

```java
public SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference getOverallConfidenceThreshold();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference</a>

---

##### `conditionThresholdEnabledInput`<sup>Optional</sup> <a name="conditionThresholdEnabledInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.conditionThresholdEnabledInput"></a>

```java
public java.lang.String getConditionThresholdEnabledInput();
```

- *Type:* java.lang.String

---

##### `overallConfidenceThresholdInput`<sup>Optional</sup> <a name="overallConfidenceThresholdInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.overallConfidenceThresholdInput"></a>

```java
public IResolvable|SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold getOverallConfidenceThresholdInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a>

---

##### `conditionThresholdEnabled`<sup>Required</sup> <a name="conditionThresholdEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.conditionThresholdEnabled"></a>

```java
public java.lang.String getConditionThresholdEnabled();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.internalValue"></a>

```java
public IResolvable|SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a>

---


### SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference <a name="SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference;

new SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resetConfidenceVerdictThreshold">resetConfidenceVerdictThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfidenceVerdictThreshold` <a name="resetConfidenceVerdictThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resetConfidenceVerdictThreshold"></a>

```java
public void resetConfidenceVerdictThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.confidenceVerdictThresholdInput">confidenceVerdictThresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.confidenceVerdictThreshold">confidenceVerdictThreshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `confidenceVerdictThresholdInput`<sup>Optional</sup> <a name="confidenceVerdictThresholdInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.confidenceVerdictThresholdInput"></a>

```java
public java.lang.String getConfidenceVerdictThresholdInput();
```

- *Type:* java.lang.String

---

##### `confidenceVerdictThreshold`<sup>Required</sup> <a name="confidenceVerdictThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.confidenceVerdictThreshold"></a>

```java
public java.lang.String getConfidenceVerdictThreshold();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.internalValue"></a>

```java
public IResolvable|SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a>

---


### SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference <a name="SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference;

new SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.putConditionThreshold">putConditionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resetConditionThreshold">resetConditionThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditionThreshold` <a name="putConditionThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.putConditionThreshold"></a>

```java
public void putConditionThreshold(SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.putConditionThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a>

---

##### `resetConditionThreshold` <a name="resetConditionThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resetConditionThreshold"></a>

```java
public void resetConditionThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.conditionThreshold">conditionThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.conditionThresholdInput">conditionThresholdInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionThreshold`<sup>Required</sup> <a name="conditionThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.conditionThreshold"></a>

```java
public SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference getConditionThreshold();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference</a>

---

##### `conditionThresholdInput`<sup>Optional</sup> <a name="conditionThresholdInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.conditionThresholdInput"></a>

```java
public IResolvable|SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold getConditionThresholdInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|SesConfigurationSetSuppressionOptionsValidationOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a>

---


### SesConfigurationSetTagsList <a name="SesConfigurationSetTagsList" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetTagsList;

new SesConfigurationSetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.get"></a>

```java
public SesConfigurationSetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SesConfigurationSetTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>>

---


### SesConfigurationSetTagsOutputReference <a name="SesConfigurationSetTagsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetTagsOutputReference;

new SesConfigurationSetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SesConfigurationSetTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>

---


### SesConfigurationSetTrackingOptionsOutputReference <a name="SesConfigurationSetTrackingOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetTrackingOptionsOutputReference;

new SesConfigurationSetTrackingOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resetCustomRedirectDomain">resetCustomRedirectDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resetHttpsPolicy">resetHttpsPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomRedirectDomain` <a name="resetCustomRedirectDomain" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resetCustomRedirectDomain"></a>

```java
public void resetCustomRedirectDomain()
```

##### `resetHttpsPolicy` <a name="resetHttpsPolicy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resetHttpsPolicy"></a>

```java
public void resetHttpsPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomainInput">customRedirectDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.httpsPolicyInput">httpsPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain">customRedirectDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.httpsPolicy">httpsPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customRedirectDomainInput`<sup>Optional</sup> <a name="customRedirectDomainInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomainInput"></a>

```java
public java.lang.String getCustomRedirectDomainInput();
```

- *Type:* java.lang.String

---

##### `httpsPolicyInput`<sup>Optional</sup> <a name="httpsPolicyInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.httpsPolicyInput"></a>

```java
public java.lang.String getHttpsPolicyInput();
```

- *Type:* java.lang.String

---

##### `customRedirectDomain`<sup>Required</sup> <a name="customRedirectDomain" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain"></a>

```java
public java.lang.String getCustomRedirectDomain();
```

- *Type:* java.lang.String

---

##### `httpsPolicy`<sup>Required</sup> <a name="httpsPolicy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.httpsPolicy"></a>

```java
public java.lang.String getHttpsPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|SesConfigurationSetTrackingOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

---


### SesConfigurationSetVdmOptionsDashboardOptionsOutputReference <a name="SesConfigurationSetVdmOptionsDashboardOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference;

new SesConfigurationSetVdmOptionsDashboardOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resetEngagementMetrics">resetEngagementMetrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEngagementMetrics` <a name="resetEngagementMetrics" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resetEngagementMetrics"></a>

```java
public void resetEngagementMetrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetricsInput">engagementMetricsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetrics">engagementMetrics</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `engagementMetricsInput`<sup>Optional</sup> <a name="engagementMetricsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetricsInput"></a>

```java
public java.lang.String getEngagementMetricsInput();
```

- *Type:* java.lang.String

---

##### `engagementMetrics`<sup>Required</sup> <a name="engagementMetrics" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetrics"></a>

```java
public java.lang.String getEngagementMetrics();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|SesConfigurationSetVdmOptionsDashboardOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a>

---


### SesConfigurationSetVdmOptionsGuardianOptionsOutputReference <a name="SesConfigurationSetVdmOptionsGuardianOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference;

new SesConfigurationSetVdmOptionsGuardianOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resetOptimizedSharedDelivery">resetOptimizedSharedDelivery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOptimizedSharedDelivery` <a name="resetOptimizedSharedDelivery" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resetOptimizedSharedDelivery"></a>

```java
public void resetOptimizedSharedDelivery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDeliveryInput">optimizedSharedDeliveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDelivery">optimizedSharedDelivery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `optimizedSharedDeliveryInput`<sup>Optional</sup> <a name="optimizedSharedDeliveryInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDeliveryInput"></a>

```java
public java.lang.String getOptimizedSharedDeliveryInput();
```

- *Type:* java.lang.String

---

##### `optimizedSharedDelivery`<sup>Required</sup> <a name="optimizedSharedDelivery" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDelivery"></a>

```java
public java.lang.String getOptimizedSharedDelivery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|SesConfigurationSetVdmOptionsGuardianOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a>

---


### SesConfigurationSetVdmOptionsOutputReference <a name="SesConfigurationSetVdmOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_configuration_set.SesConfigurationSetVdmOptionsOutputReference;

new SesConfigurationSetVdmOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putDashboardOptions">putDashboardOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putGuardianOptions">putGuardianOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resetDashboardOptions">resetDashboardOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resetGuardianOptions">resetGuardianOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDashboardOptions` <a name="putDashboardOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putDashboardOptions"></a>

```java
public void putDashboardOptions(SesConfigurationSetVdmOptionsDashboardOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putDashboardOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a>

---

##### `putGuardianOptions` <a name="putGuardianOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putGuardianOptions"></a>

```java
public void putGuardianOptions(SesConfigurationSetVdmOptionsGuardianOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putGuardianOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a>

---

##### `resetDashboardOptions` <a name="resetDashboardOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resetDashboardOptions"></a>

```java
public void resetDashboardOptions()
```

##### `resetGuardianOptions` <a name="resetGuardianOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resetGuardianOptions"></a>

```java
public void resetGuardianOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.dashboardOptions">dashboardOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference">SesConfigurationSetVdmOptionsDashboardOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.guardianOptions">guardianOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference">SesConfigurationSetVdmOptionsGuardianOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.dashboardOptionsInput">dashboardOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.guardianOptionsInput">guardianOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dashboardOptions`<sup>Required</sup> <a name="dashboardOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.dashboardOptions"></a>

```java
public SesConfigurationSetVdmOptionsDashboardOptionsOutputReference getDashboardOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference">SesConfigurationSetVdmOptionsDashboardOptionsOutputReference</a>

---

##### `guardianOptions`<sup>Required</sup> <a name="guardianOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.guardianOptions"></a>

```java
public SesConfigurationSetVdmOptionsGuardianOptionsOutputReference getGuardianOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference">SesConfigurationSetVdmOptionsGuardianOptionsOutputReference</a>

---

##### `dashboardOptionsInput`<sup>Optional</sup> <a name="dashboardOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.dashboardOptionsInput"></a>

```java
public IResolvable|SesConfigurationSetVdmOptionsDashboardOptions getDashboardOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a>

---

##### `guardianOptionsInput`<sup>Optional</sup> <a name="guardianOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.guardianOptionsInput"></a>

```java
public IResolvable|SesConfigurationSetVdmOptionsGuardianOptions getGuardianOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|SesConfigurationSetVdmOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a>

---



