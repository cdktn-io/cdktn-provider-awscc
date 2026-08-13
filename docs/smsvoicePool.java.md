# `smsvoicePool` Submodule <a name="`smsvoicePool` Submodule" id="@cdktn/provider-awscc.smsvoicePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoicePool <a name="SmsvoicePool" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool awscc_smsvoice_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_pool.SmsvoicePool;

SmsvoicePool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mandatoryKeywords(SmsvoicePoolMandatoryKeywords)
    .originationIdentities(java.util.List<java.lang.String>)
//  .deletionProtectionEnabled(java.lang.Boolean|IResolvable)
//  .optionalKeywords(IResolvable|java.util.List<SmsvoicePoolOptionalKeywords>)
//  .optOutListName(java.lang.String)
//  .selfManagedOptOutsEnabled(java.lang.Boolean|IResolvable)
//  .sharedRoutesEnabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<SmsvoicePoolTags>)
//  .twoWay(SmsvoicePoolTwoWay)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.mandatoryKeywords">mandatoryKeywords</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords">SmsvoicePoolMandatoryKeywords</a></code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.originationIdentities">originationIdentities</a></code> | <code>java.util.List<java.lang.String></code> | The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn and it's IsoCountryCode. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true the pool can't be deleted. By default this is set to false. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.optionalKeywords">optionalKeywords</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords">SmsvoicePoolOptionalKeywords</a>></code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.optOutListName">optOutListName</a></code> | <code>java.lang.String</code> | The name of the OptOutList to associate with the pool. You can use the OptOutListName or OptOutListArn. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.selfManagedOptOutsEnabled">selfManagedOptOutsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | By default this is set to false. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.sharedRoutesEnabled">sharedRoutesEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether shared routes are enabled for the pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags">SmsvoicePoolTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.twoWay">twoWay</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay">SmsvoicePoolTwoWay</a></code> | When you set up two-way SMS, you can receive incoming messages from your customers. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mandatoryKeywords`<sup>Required</sup> <a name="mandatoryKeywords" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.mandatoryKeywords"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords">SmsvoicePoolMandatoryKeywords</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#mandatory_keywords SmsvoicePool#mandatory_keywords}

---

##### `originationIdentities`<sup>Required</sup> <a name="originationIdentities" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.originationIdentities"></a>

- *Type:* java.util.List<java.lang.String>

The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn and it's IsoCountryCode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#origination_identities SmsvoicePool#origination_identities}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true the pool can't be deleted. By default this is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#deletion_protection_enabled SmsvoicePool#deletion_protection_enabled}

---

##### `optionalKeywords`<sup>Optional</sup> <a name="optionalKeywords" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.optionalKeywords"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords">SmsvoicePoolOptionalKeywords</a>>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#optional_keywords SmsvoicePool#optional_keywords}

---

##### `optOutListName`<sup>Optional</sup> <a name="optOutListName" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.optOutListName"></a>

- *Type:* java.lang.String

The name of the OptOutList to associate with the pool. You can use the OptOutListName or OptOutListArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#opt_out_list_name SmsvoicePool#opt_out_list_name}

---

##### `selfManagedOptOutsEnabled`<sup>Optional</sup> <a name="selfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.selfManagedOptOutsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

By default this is set to false.

When an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, AWS End User Messaging SMS and Voice automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#self_managed_opt_outs_enabled SmsvoicePool#self_managed_opt_outs_enabled}

---

##### `sharedRoutesEnabled`<sup>Optional</sup> <a name="sharedRoutesEnabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.sharedRoutesEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether shared routes are enabled for the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#shared_routes_enabled SmsvoicePool#shared_routes_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags">SmsvoicePoolTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#tags SmsvoicePool#tags}

---

##### `twoWay`<sup>Optional</sup> <a name="twoWay" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.twoWay"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay">SmsvoicePoolTwoWay</a>

When you set up two-way SMS, you can receive incoming messages from your customers.

When one of your customers sends a message to your phone number, the message body is sent to an Amazon SNS topic or Amazon Connect for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#two_way SmsvoicePool#two_way}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putMandatoryKeywords">putMandatoryKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putOptionalKeywords">putOptionalKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putTwoWay">putTwoWay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetOptionalKeywords">resetOptionalKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetOptOutListName">resetOptOutListName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetSelfManagedOptOutsEnabled">resetSelfManagedOptOutsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetSharedRoutesEnabled">resetSharedRoutesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetTwoWay">resetTwoWay</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMandatoryKeywords` <a name="putMandatoryKeywords" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putMandatoryKeywords"></a>

```java
public void putMandatoryKeywords(SmsvoicePoolMandatoryKeywords value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putMandatoryKeywords.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords">SmsvoicePoolMandatoryKeywords</a>

---

##### `putOptionalKeywords` <a name="putOptionalKeywords" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putOptionalKeywords"></a>

```java
public void putOptionalKeywords(IResolvable|java.util.List<SmsvoicePoolOptionalKeywords> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putOptionalKeywords.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords">SmsvoicePoolOptionalKeywords</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SmsvoicePoolTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags">SmsvoicePoolTags</a>>

---

##### `putTwoWay` <a name="putTwoWay" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putTwoWay"></a>

```java
public void putTwoWay(SmsvoicePoolTwoWay value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putTwoWay.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay">SmsvoicePoolTwoWay</a>

---

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetDeletionProtectionEnabled"></a>

```java
public void resetDeletionProtectionEnabled()
```

##### `resetOptionalKeywords` <a name="resetOptionalKeywords" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetOptionalKeywords"></a>

```java
public void resetOptionalKeywords()
```

##### `resetOptOutListName` <a name="resetOptOutListName" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetOptOutListName"></a>

```java
public void resetOptOutListName()
```

##### `resetSelfManagedOptOutsEnabled` <a name="resetSelfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetSelfManagedOptOutsEnabled"></a>

```java
public void resetSelfManagedOptOutsEnabled()
```

##### `resetSharedRoutesEnabled` <a name="resetSharedRoutesEnabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetSharedRoutesEnabled"></a>

```java
public void resetSharedRoutesEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetTags"></a>

```java
public void resetTags()
```

##### `resetTwoWay` <a name="resetTwoWay" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetTwoWay"></a>

```java
public void resetTwoWay()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoicePool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.isConstruct"></a>

```java
import io.cdktn.providers.awscc.smsvoice_pool.SmsvoicePool;

SmsvoicePool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.smsvoice_pool.SmsvoicePool;

SmsvoicePool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.smsvoice_pool.SmsvoicePool;

SmsvoicePool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.smsvoice_pool.SmsvoicePool;

SmsvoicePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SmsvoicePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SmsvoicePool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SmsvoicePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SmsvoicePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoicePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.mandatoryKeywords">mandatoryKeywords</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference">SmsvoicePoolMandatoryKeywordsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.optionalKeywords">optionalKeywords</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList">SmsvoicePoolOptionalKeywordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.poolId">poolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList">SmsvoicePoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.twoWay">twoWay</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference">SmsvoicePoolTwoWayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.mandatoryKeywordsInput">mandatoryKeywordsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords">SmsvoicePoolMandatoryKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.optionalKeywordsInput">optionalKeywordsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords">SmsvoicePoolOptionalKeywords</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.optOutListNameInput">optOutListNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.originationIdentitiesInput">originationIdentitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.selfManagedOptOutsEnabledInput">selfManagedOptOutsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.sharedRoutesEnabledInput">sharedRoutesEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags">SmsvoicePoolTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.twoWayInput">twoWayInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay">SmsvoicePoolTwoWay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.optOutListName">optOutListName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.originationIdentities">originationIdentities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.selfManagedOptOutsEnabled">selfManagedOptOutsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.sharedRoutesEnabled">sharedRoutesEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mandatoryKeywords`<sup>Required</sup> <a name="mandatoryKeywords" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.mandatoryKeywords"></a>

```java
public SmsvoicePoolMandatoryKeywordsOutputReference getMandatoryKeywords();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference">SmsvoicePoolMandatoryKeywordsOutputReference</a>

---

##### `optionalKeywords`<sup>Required</sup> <a name="optionalKeywords" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.optionalKeywords"></a>

```java
public SmsvoicePoolOptionalKeywordsList getOptionalKeywords();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList">SmsvoicePoolOptionalKeywordsList</a>

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.poolId"></a>

```java
public java.lang.String getPoolId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.tags"></a>

```java
public SmsvoicePoolTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList">SmsvoicePoolTagsList</a>

---

##### `twoWay`<sup>Required</sup> <a name="twoWay" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.twoWay"></a>

```java
public SmsvoicePoolTwoWayOutputReference getTwoWay();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference">SmsvoicePoolTwoWayOutputReference</a>

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.deletionProtectionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mandatoryKeywordsInput`<sup>Optional</sup> <a name="mandatoryKeywordsInput" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.mandatoryKeywordsInput"></a>

```java
public IResolvable|SmsvoicePoolMandatoryKeywords getMandatoryKeywordsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords">SmsvoicePoolMandatoryKeywords</a>

---

##### `optionalKeywordsInput`<sup>Optional</sup> <a name="optionalKeywordsInput" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.optionalKeywordsInput"></a>

```java
public IResolvable|java.util.List<SmsvoicePoolOptionalKeywords> getOptionalKeywordsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords">SmsvoicePoolOptionalKeywords</a>>

---

##### `optOutListNameInput`<sup>Optional</sup> <a name="optOutListNameInput" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.optOutListNameInput"></a>

```java
public java.lang.String getOptOutListNameInput();
```

- *Type:* java.lang.String

---

##### `originationIdentitiesInput`<sup>Optional</sup> <a name="originationIdentitiesInput" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.originationIdentitiesInput"></a>

```java
public java.util.List<java.lang.String> getOriginationIdentitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selfManagedOptOutsEnabledInput`<sup>Optional</sup> <a name="selfManagedOptOutsEnabledInput" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.selfManagedOptOutsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSelfManagedOptOutsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sharedRoutesEnabledInput`<sup>Optional</sup> <a name="sharedRoutesEnabledInput" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.sharedRoutesEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSharedRoutesEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SmsvoicePoolTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags">SmsvoicePoolTags</a>>

---

##### `twoWayInput`<sup>Optional</sup> <a name="twoWayInput" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.twoWayInput"></a>

```java
public IResolvable|SmsvoicePoolTwoWay getTwoWayInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay">SmsvoicePoolTwoWay</a>

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.deletionProtectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `optOutListName`<sup>Required</sup> <a name="optOutListName" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.optOutListName"></a>

```java
public java.lang.String getOptOutListName();
```

- *Type:* java.lang.String

---

##### `originationIdentities`<sup>Required</sup> <a name="originationIdentities" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.originationIdentities"></a>

```java
public java.util.List<java.lang.String> getOriginationIdentities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selfManagedOptOutsEnabled`<sup>Required</sup> <a name="selfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.selfManagedOptOutsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSelfManagedOptOutsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sharedRoutesEnabled`<sup>Required</sup> <a name="sharedRoutesEnabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.sharedRoutesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSharedRoutesEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoicePoolConfig <a name="SmsvoicePoolConfig" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_pool.SmsvoicePoolConfig;

SmsvoicePoolConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mandatoryKeywords(SmsvoicePoolMandatoryKeywords)
    .originationIdentities(java.util.List<java.lang.String>)
//  .deletionProtectionEnabled(java.lang.Boolean|IResolvable)
//  .optionalKeywords(IResolvable|java.util.List<SmsvoicePoolOptionalKeywords>)
//  .optOutListName(java.lang.String)
//  .selfManagedOptOutsEnabled(java.lang.Boolean|IResolvable)
//  .sharedRoutesEnabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<SmsvoicePoolTags>)
//  .twoWay(SmsvoicePoolTwoWay)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.mandatoryKeywords">mandatoryKeywords</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords">SmsvoicePoolMandatoryKeywords</a></code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.originationIdentities">originationIdentities</a></code> | <code>java.util.List<java.lang.String></code> | The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn and it's IsoCountryCode. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true the pool can't be deleted. By default this is set to false. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.optionalKeywords">optionalKeywords</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords">SmsvoicePoolOptionalKeywords</a>></code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.optOutListName">optOutListName</a></code> | <code>java.lang.String</code> | The name of the OptOutList to associate with the pool. You can use the OptOutListName or OptOutListArn. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.selfManagedOptOutsEnabled">selfManagedOptOutsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | By default this is set to false. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.sharedRoutesEnabled">sharedRoutesEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether shared routes are enabled for the pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags">SmsvoicePoolTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.twoWay">twoWay</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay">SmsvoicePoolTwoWay</a></code> | When you set up two-way SMS, you can receive incoming messages from your customers. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mandatoryKeywords`<sup>Required</sup> <a name="mandatoryKeywords" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.mandatoryKeywords"></a>

```java
public SmsvoicePoolMandatoryKeywords getMandatoryKeywords();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords">SmsvoicePoolMandatoryKeywords</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#mandatory_keywords SmsvoicePool#mandatory_keywords}

---

##### `originationIdentities`<sup>Required</sup> <a name="originationIdentities" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.originationIdentities"></a>

```java
public java.util.List<java.lang.String> getOriginationIdentities();
```

- *Type:* java.util.List<java.lang.String>

The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn and it's IsoCountryCode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#origination_identities SmsvoicePool#origination_identities}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.deletionProtectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true the pool can't be deleted. By default this is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#deletion_protection_enabled SmsvoicePool#deletion_protection_enabled}

---

##### `optionalKeywords`<sup>Optional</sup> <a name="optionalKeywords" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.optionalKeywords"></a>

```java
public IResolvable|java.util.List<SmsvoicePoolOptionalKeywords> getOptionalKeywords();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords">SmsvoicePoolOptionalKeywords</a>>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#optional_keywords SmsvoicePool#optional_keywords}

---

##### `optOutListName`<sup>Optional</sup> <a name="optOutListName" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.optOutListName"></a>

```java
public java.lang.String getOptOutListName();
```

- *Type:* java.lang.String

The name of the OptOutList to associate with the pool. You can use the OptOutListName or OptOutListArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#opt_out_list_name SmsvoicePool#opt_out_list_name}

---

##### `selfManagedOptOutsEnabled`<sup>Optional</sup> <a name="selfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.selfManagedOptOutsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSelfManagedOptOutsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

By default this is set to false.

When an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, AWS End User Messaging SMS and Voice automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#self_managed_opt_outs_enabled SmsvoicePool#self_managed_opt_outs_enabled}

---

##### `sharedRoutesEnabled`<sup>Optional</sup> <a name="sharedRoutesEnabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.sharedRoutesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSharedRoutesEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether shared routes are enabled for the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#shared_routes_enabled SmsvoicePool#shared_routes_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SmsvoicePoolTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags">SmsvoicePoolTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#tags SmsvoicePool#tags}

---

##### `twoWay`<sup>Optional</sup> <a name="twoWay" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.twoWay"></a>

```java
public SmsvoicePoolTwoWay getTwoWay();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay">SmsvoicePoolTwoWay</a>

When you set up two-way SMS, you can receive incoming messages from your customers.

When one of your customers sends a message to your phone number, the message body is sent to an Amazon SNS topic or Amazon Connect for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#two_way SmsvoicePool#two_way}

---

### SmsvoicePoolMandatoryKeywords <a name="SmsvoicePoolMandatoryKeywords" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_pool.SmsvoicePoolMandatoryKeywords;

SmsvoicePoolMandatoryKeywords.builder()
    .help(SmsvoicePoolMandatoryKeywordsHelp)
    .stop(SmsvoicePoolMandatoryKeywordsStop)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords.property.help">help</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp">SmsvoicePoolMandatoryKeywordsHelp</a></code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords.property.stop">stop</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStop">SmsvoicePoolMandatoryKeywordsStop</a></code> | A keyword is a word that you can search for on a particular phone number or pool. |

---

##### `help`<sup>Required</sup> <a name="help" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords.property.help"></a>

```java
public SmsvoicePoolMandatoryKeywordsHelp getHelp();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp">SmsvoicePoolMandatoryKeywordsHelp</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#help SmsvoicePool#help}

---

##### `stop`<sup>Required</sup> <a name="stop" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords.property.stop"></a>

```java
public SmsvoicePoolMandatoryKeywordsStop getStop();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStop">SmsvoicePoolMandatoryKeywordsStop</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#stop SmsvoicePool#stop}

---

### SmsvoicePoolMandatoryKeywordsHelp <a name="SmsvoicePoolMandatoryKeywordsHelp" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_pool.SmsvoicePoolMandatoryKeywordsHelp;

SmsvoicePoolMandatoryKeywordsHelp.builder()
    .message(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp.property.message">message</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#message SmsvoicePool#message}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#message SmsvoicePool#message}.

---

### SmsvoicePoolMandatoryKeywordsStop <a name="SmsvoicePoolMandatoryKeywordsStop" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStop"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStop.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_pool.SmsvoicePoolMandatoryKeywordsStop;

SmsvoicePoolMandatoryKeywordsStop.builder()
    .message(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStop.property.message">message</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#message SmsvoicePool#message}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStop.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#message SmsvoicePool#message}.

---

### SmsvoicePoolOptionalKeywords <a name="SmsvoicePoolOptionalKeywords" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_pool.SmsvoicePoolOptionalKeywords;

SmsvoicePoolOptionalKeywords.builder()
//  .action(java.lang.String)
//  .keyword(java.lang.String)
//  .message(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#action SmsvoicePool#action}. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords.property.keyword">keyword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#keyword SmsvoicePool#keyword}. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords.property.message">message</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#message SmsvoicePool#message}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#action SmsvoicePool#action}.

---

##### `keyword`<sup>Optional</sup> <a name="keyword" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords.property.keyword"></a>

```java
public java.lang.String getKeyword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#keyword SmsvoicePool#keyword}.

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#message SmsvoicePool#message}.

---

### SmsvoicePoolTags <a name="SmsvoicePoolTags" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_pool.SmsvoicePoolTags;

SmsvoicePoolTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#key SmsvoicePool#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#value SmsvoicePool#value}

---

### SmsvoicePoolTwoWay <a name="SmsvoicePoolTwoWay" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_pool.SmsvoicePoolTwoWay;

SmsvoicePoolTwoWay.builder()
//  .channelArn(java.lang.String)
//  .channelRole(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay.property.channelArn">channelArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the two way channel. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay.property.channelRole">channelRole</a></code> | <code>java.lang.String</code> | An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | By default this is set to false. |

---

##### `channelArn`<sup>Optional</sup> <a name="channelArn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay.property.channelArn"></a>

```java
public java.lang.String getChannelArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the two way channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#channel_arn SmsvoicePool#channel_arn}

---

##### `channelRole`<sup>Optional</sup> <a name="channelRole" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay.property.channelRole"></a>

```java
public java.lang.String getChannelRole();
```

- *Type:* java.lang.String

An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#channel_role SmsvoicePool#channel_role}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

By default this is set to false.

When set to true you can receive incoming text messages from your end recipients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_pool#enabled SmsvoicePool#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoicePoolMandatoryKeywordsHelpOutputReference <a name="SmsvoicePoolMandatoryKeywordsHelpOutputReference" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_pool.SmsvoicePoolMandatoryKeywordsHelpOutputReference;

new SmsvoicePoolMandatoryKeywordsHelpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp">SmsvoicePoolMandatoryKeywordsHelp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoicePoolMandatoryKeywordsHelp getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp">SmsvoicePoolMandatoryKeywordsHelp</a>

---


### SmsvoicePoolMandatoryKeywordsOutputReference <a name="SmsvoicePoolMandatoryKeywordsOutputReference" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_pool.SmsvoicePoolMandatoryKeywordsOutputReference;

new SmsvoicePoolMandatoryKeywordsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.putHelp">putHelp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.putStop">putStop</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHelp` <a name="putHelp" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.putHelp"></a>

```java
public void putHelp(SmsvoicePoolMandatoryKeywordsHelp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.putHelp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp">SmsvoicePoolMandatoryKeywordsHelp</a>

---

##### `putStop` <a name="putStop" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.putStop"></a>

```java
public void putStop(SmsvoicePoolMandatoryKeywordsStop value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.putStop.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStop">SmsvoicePoolMandatoryKeywordsStop</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.help">help</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference">SmsvoicePoolMandatoryKeywordsHelpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.stop">stop</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference">SmsvoicePoolMandatoryKeywordsStopOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.helpInput">helpInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp">SmsvoicePoolMandatoryKeywordsHelp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.stopInput">stopInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStop">SmsvoicePoolMandatoryKeywordsStop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords">SmsvoicePoolMandatoryKeywords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `help`<sup>Required</sup> <a name="help" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.help"></a>

```java
public SmsvoicePoolMandatoryKeywordsHelpOutputReference getHelp();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference">SmsvoicePoolMandatoryKeywordsHelpOutputReference</a>

---

##### `stop`<sup>Required</sup> <a name="stop" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.stop"></a>

```java
public SmsvoicePoolMandatoryKeywordsStopOutputReference getStop();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference">SmsvoicePoolMandatoryKeywordsStopOutputReference</a>

---

##### `helpInput`<sup>Optional</sup> <a name="helpInput" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.helpInput"></a>

```java
public IResolvable|SmsvoicePoolMandatoryKeywordsHelp getHelpInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp">SmsvoicePoolMandatoryKeywordsHelp</a>

---

##### `stopInput`<sup>Optional</sup> <a name="stopInput" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.stopInput"></a>

```java
public IResolvable|SmsvoicePoolMandatoryKeywordsStop getStopInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStop">SmsvoicePoolMandatoryKeywordsStop</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoicePoolMandatoryKeywords getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords">SmsvoicePoolMandatoryKeywords</a>

---


### SmsvoicePoolMandatoryKeywordsStopOutputReference <a name="SmsvoicePoolMandatoryKeywordsStopOutputReference" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_pool.SmsvoicePoolMandatoryKeywordsStopOutputReference;

new SmsvoicePoolMandatoryKeywordsStopOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStop">SmsvoicePoolMandatoryKeywordsStop</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoicePoolMandatoryKeywordsStop getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStop">SmsvoicePoolMandatoryKeywordsStop</a>

---


### SmsvoicePoolOptionalKeywordsList <a name="SmsvoicePoolOptionalKeywordsList" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_pool.SmsvoicePoolOptionalKeywordsList;

new SmsvoicePoolOptionalKeywordsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.get"></a>

```java
public SmsvoicePoolOptionalKeywordsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords">SmsvoicePoolOptionalKeywords</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SmsvoicePoolOptionalKeywords> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords">SmsvoicePoolOptionalKeywords</a>>

---


### SmsvoicePoolOptionalKeywordsOutputReference <a name="SmsvoicePoolOptionalKeywordsOutputReference" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_pool.SmsvoicePoolOptionalKeywordsOutputReference;

new SmsvoicePoolOptionalKeywordsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.resetKeyword">resetKeyword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.resetMessage">resetMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetKeyword` <a name="resetKeyword" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.resetKeyword"></a>

```java
public void resetKeyword()
```

##### `resetMessage` <a name="resetMessage" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.resetMessage"></a>

```java
public void resetMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.keywordInput">keywordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.keyword">keyword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords">SmsvoicePoolOptionalKeywords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `keywordInput`<sup>Optional</sup> <a name="keywordInput" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.keywordInput"></a>

```java
public java.lang.String getKeywordInput();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `keyword`<sup>Required</sup> <a name="keyword" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.keyword"></a>

```java
public java.lang.String getKeyword();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoicePoolOptionalKeywords getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords">SmsvoicePoolOptionalKeywords</a>

---


### SmsvoicePoolTagsList <a name="SmsvoicePoolTagsList" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_pool.SmsvoicePoolTagsList;

new SmsvoicePoolTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.get"></a>

```java
public SmsvoicePoolTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags">SmsvoicePoolTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SmsvoicePoolTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags">SmsvoicePoolTags</a>>

---


### SmsvoicePoolTagsOutputReference <a name="SmsvoicePoolTagsOutputReference" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_pool.SmsvoicePoolTagsOutputReference;

new SmsvoicePoolTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags">SmsvoicePoolTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoicePoolTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags">SmsvoicePoolTags</a>

---


### SmsvoicePoolTwoWayOutputReference <a name="SmsvoicePoolTwoWayOutputReference" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_pool.SmsvoicePoolTwoWayOutputReference;

new SmsvoicePoolTwoWayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.resetChannelArn">resetChannelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.resetChannelRole">resetChannelRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannelArn` <a name="resetChannelArn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.resetChannelArn"></a>

```java
public void resetChannelArn()
```

##### `resetChannelRole` <a name="resetChannelRole" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.resetChannelRole"></a>

```java
public void resetChannelRole()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.channelArnInput">channelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.channelRoleInput">channelRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.channelArn">channelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.channelRole">channelRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay">SmsvoicePoolTwoWay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channelArnInput`<sup>Optional</sup> <a name="channelArnInput" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.channelArnInput"></a>

```java
public java.lang.String getChannelArnInput();
```

- *Type:* java.lang.String

---

##### `channelRoleInput`<sup>Optional</sup> <a name="channelRoleInput" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.channelRoleInput"></a>

```java
public java.lang.String getChannelRoleInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `channelArn`<sup>Required</sup> <a name="channelArn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.channelArn"></a>

```java
public java.lang.String getChannelArn();
```

- *Type:* java.lang.String

---

##### `channelRole`<sup>Required</sup> <a name="channelRole" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.channelRole"></a>

```java
public java.lang.String getChannelRole();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoicePoolTwoWay getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay">SmsvoicePoolTwoWay</a>

---



