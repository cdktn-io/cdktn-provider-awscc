# `smsvoicePhoneNumber` Submodule <a name="`smsvoicePhoneNumber` Submodule" id="@cdktn/provider-awscc.smsvoicePhoneNumber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoicePhoneNumber <a name="SmsvoicePhoneNumber" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number awscc_smsvoice_phone_number}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_phone_number.SmsvoicePhoneNumber;

SmsvoicePhoneNumber.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .isoCountryCode(java.lang.String)
    .mandatoryKeywords(SmsvoicePhoneNumberMandatoryKeywords)
    .numberCapabilities(java.util.List<java.lang.String>)
    .numberType(java.lang.String)
//  .deletionProtectionEnabled(java.lang.Boolean|IResolvable)
//  .optionalKeywords(IResolvable|java.util.List<SmsvoicePhoneNumberOptionalKeywords>)
//  .optOutListName(java.lang.String)
//  .selfManagedOptOutsEnabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<SmsvoicePhoneNumberTags>)
//  .twoWay(SmsvoicePhoneNumberTwoWay)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.isoCountryCode">isoCountryCode</a></code> | <code>java.lang.String</code> | The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.mandatoryKeywords">mandatoryKeywords</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a></code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.numberCapabilities">numberCapabilities</a></code> | <code>java.util.List<java.lang.String></code> | Indicates if the phone number will be used for text messages, voice messages, or both. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.numberType">numberType</a></code> | <code>java.lang.String</code> | The type of phone number to request. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true the sender ID can't be deleted. By default this is set to false. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.optionalKeywords">optionalKeywords</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>></code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.optOutListName">optOutListName</a></code> | <code>java.lang.String</code> | The name of the OptOutList to associate with the phone number. You can use the OptOutListName or OptOutListArn. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.selfManagedOptOutsEnabled">selfManagedOptOutsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | By default this is set to false. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.twoWay">twoWay</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a></code> | When you set up two-way SMS, you can receive incoming messages from your customers. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `isoCountryCode`<sup>Required</sup> <a name="isoCountryCode" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.isoCountryCode"></a>

- *Type:* java.lang.String

The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#iso_country_code SmsvoicePhoneNumber#iso_country_code}

---

##### `mandatoryKeywords`<sup>Required</sup> <a name="mandatoryKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.mandatoryKeywords"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#mandatory_keywords SmsvoicePhoneNumber#mandatory_keywords}

---

##### `numberCapabilities`<sup>Required</sup> <a name="numberCapabilities" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.numberCapabilities"></a>

- *Type:* java.util.List<java.lang.String>

Indicates if the phone number will be used for text messages, voice messages, or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#number_capabilities SmsvoicePhoneNumber#number_capabilities}

---

##### `numberType`<sup>Required</sup> <a name="numberType" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.numberType"></a>

- *Type:* java.lang.String

The type of phone number to request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#number_type SmsvoicePhoneNumber#number_type}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true the sender ID can't be deleted. By default this is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#deletion_protection_enabled SmsvoicePhoneNumber#deletion_protection_enabled}

---

##### `optionalKeywords`<sup>Optional</sup> <a name="optionalKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.optionalKeywords"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#optional_keywords SmsvoicePhoneNumber#optional_keywords}

---

##### `optOutListName`<sup>Optional</sup> <a name="optOutListName" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.optOutListName"></a>

- *Type:* java.lang.String

The name of the OptOutList to associate with the phone number. You can use the OptOutListName or OptOutListArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#opt_out_list_name SmsvoicePhoneNumber#opt_out_list_name}

---

##### `selfManagedOptOutsEnabled`<sup>Optional</sup> <a name="selfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.selfManagedOptOutsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

By default this is set to false.

When an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, AWS End User Messaging SMS and Voice automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#self_managed_opt_outs_enabled SmsvoicePhoneNumber#self_managed_opt_outs_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#tags SmsvoicePhoneNumber#tags}

---

##### `twoWay`<sup>Optional</sup> <a name="twoWay" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.twoWay"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a>

When you set up two-way SMS, you can receive incoming messages from your customers.

When one of your customers sends a message to your phone number, the message body is sent to an Amazon SNS topic or Amazon Connect for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#two_way SmsvoicePhoneNumber#two_way}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putMandatoryKeywords">putMandatoryKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putOptionalKeywords">putOptionalKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTwoWay">putTwoWay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOptionalKeywords">resetOptionalKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOptOutListName">resetOptOutListName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetSelfManagedOptOutsEnabled">resetSelfManagedOptOutsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetTwoWay">resetTwoWay</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMandatoryKeywords` <a name="putMandatoryKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putMandatoryKeywords"></a>

```java
public void putMandatoryKeywords(SmsvoicePhoneNumberMandatoryKeywords value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putMandatoryKeywords.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a>

---

##### `putOptionalKeywords` <a name="putOptionalKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putOptionalKeywords"></a>

```java
public void putOptionalKeywords(IResolvable|java.util.List<SmsvoicePhoneNumberOptionalKeywords> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putOptionalKeywords.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SmsvoicePhoneNumberTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>>

---

##### `putTwoWay` <a name="putTwoWay" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTwoWay"></a>

```java
public void putTwoWay(SmsvoicePhoneNumberTwoWay value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTwoWay.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a>

---

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetDeletionProtectionEnabled"></a>

```java
public void resetDeletionProtectionEnabled()
```

##### `resetOptionalKeywords` <a name="resetOptionalKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOptionalKeywords"></a>

```java
public void resetOptionalKeywords()
```

##### `resetOptOutListName` <a name="resetOptOutListName" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOptOutListName"></a>

```java
public void resetOptOutListName()
```

##### `resetSelfManagedOptOutsEnabled` <a name="resetSelfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetSelfManagedOptOutsEnabled"></a>

```java
public void resetSelfManagedOptOutsEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetTags"></a>

```java
public void resetTags()
```

##### `resetTwoWay` <a name="resetTwoWay" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetTwoWay"></a>

```java
public void resetTwoWay()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoicePhoneNumber resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isConstruct"></a>

```java
import io.cdktn.providers.awscc.smsvoice_phone_number.SmsvoicePhoneNumber;

SmsvoicePhoneNumber.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.smsvoice_phone_number.SmsvoicePhoneNumber;

SmsvoicePhoneNumber.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.smsvoice_phone_number.SmsvoicePhoneNumber;

SmsvoicePhoneNumber.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.smsvoice_phone_number.SmsvoicePhoneNumber;

SmsvoicePhoneNumber.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SmsvoicePhoneNumber.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SmsvoicePhoneNumber resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SmsvoicePhoneNumber to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SmsvoicePhoneNumber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoicePhoneNumber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.mandatoryKeywords">mandatoryKeywords</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference">SmsvoicePhoneNumberMandatoryKeywordsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optionalKeywords">optionalKeywords</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList">SmsvoicePhoneNumberOptionalKeywordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.phoneNumberId">phoneNumberId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList">SmsvoicePhoneNumberTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.twoWay">twoWay</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference">SmsvoicePhoneNumberTwoWayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.isoCountryCodeInput">isoCountryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.mandatoryKeywordsInput">mandatoryKeywordsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberCapabilitiesInput">numberCapabilitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberTypeInput">numberTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optionalKeywordsInput">optionalKeywordsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optOutListNameInput">optOutListNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.selfManagedOptOutsEnabledInput">selfManagedOptOutsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.twoWayInput">twoWayInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.isoCountryCode">isoCountryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberCapabilities">numberCapabilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberType">numberType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optOutListName">optOutListName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.selfManagedOptOutsEnabled">selfManagedOptOutsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mandatoryKeywords`<sup>Required</sup> <a name="mandatoryKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.mandatoryKeywords"></a>

```java
public SmsvoicePhoneNumberMandatoryKeywordsOutputReference getMandatoryKeywords();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference">SmsvoicePhoneNumberMandatoryKeywordsOutputReference</a>

---

##### `optionalKeywords`<sup>Required</sup> <a name="optionalKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optionalKeywords"></a>

```java
public SmsvoicePhoneNumberOptionalKeywordsList getOptionalKeywords();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList">SmsvoicePhoneNumberOptionalKeywordsList</a>

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `phoneNumberId`<sup>Required</sup> <a name="phoneNumberId" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.phoneNumberId"></a>

```java
public java.lang.String getPhoneNumberId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tags"></a>

```java
public SmsvoicePhoneNumberTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList">SmsvoicePhoneNumberTagsList</a>

---

##### `twoWay`<sup>Required</sup> <a name="twoWay" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.twoWay"></a>

```java
public SmsvoicePhoneNumberTwoWayOutputReference getTwoWay();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference">SmsvoicePhoneNumberTwoWayOutputReference</a>

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.deletionProtectionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isoCountryCodeInput`<sup>Optional</sup> <a name="isoCountryCodeInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.isoCountryCodeInput"></a>

```java
public java.lang.String getIsoCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `mandatoryKeywordsInput`<sup>Optional</sup> <a name="mandatoryKeywordsInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.mandatoryKeywordsInput"></a>

```java
public IResolvable|SmsvoicePhoneNumberMandatoryKeywords getMandatoryKeywordsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a>

---

##### `numberCapabilitiesInput`<sup>Optional</sup> <a name="numberCapabilitiesInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberCapabilitiesInput"></a>

```java
public java.util.List<java.lang.String> getNumberCapabilitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `numberTypeInput`<sup>Optional</sup> <a name="numberTypeInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberTypeInput"></a>

```java
public java.lang.String getNumberTypeInput();
```

- *Type:* java.lang.String

---

##### `optionalKeywordsInput`<sup>Optional</sup> <a name="optionalKeywordsInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optionalKeywordsInput"></a>

```java
public IResolvable|java.util.List<SmsvoicePhoneNumberOptionalKeywords> getOptionalKeywordsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>>

---

##### `optOutListNameInput`<sup>Optional</sup> <a name="optOutListNameInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optOutListNameInput"></a>

```java
public java.lang.String getOptOutListNameInput();
```

- *Type:* java.lang.String

---

##### `selfManagedOptOutsEnabledInput`<sup>Optional</sup> <a name="selfManagedOptOutsEnabledInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.selfManagedOptOutsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSelfManagedOptOutsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SmsvoicePhoneNumberTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>>

---

##### `twoWayInput`<sup>Optional</sup> <a name="twoWayInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.twoWayInput"></a>

```java
public IResolvable|SmsvoicePhoneNumberTwoWay getTwoWayInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a>

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.deletionProtectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isoCountryCode`<sup>Required</sup> <a name="isoCountryCode" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.isoCountryCode"></a>

```java
public java.lang.String getIsoCountryCode();
```

- *Type:* java.lang.String

---

##### `numberCapabilities`<sup>Required</sup> <a name="numberCapabilities" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberCapabilities"></a>

```java
public java.util.List<java.lang.String> getNumberCapabilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `numberType`<sup>Required</sup> <a name="numberType" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberType"></a>

```java
public java.lang.String getNumberType();
```

- *Type:* java.lang.String

---

##### `optOutListName`<sup>Required</sup> <a name="optOutListName" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optOutListName"></a>

```java
public java.lang.String getOptOutListName();
```

- *Type:* java.lang.String

---

##### `selfManagedOptOutsEnabled`<sup>Required</sup> <a name="selfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.selfManagedOptOutsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSelfManagedOptOutsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoicePhoneNumberConfig <a name="SmsvoicePhoneNumberConfig" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_phone_number.SmsvoicePhoneNumberConfig;

SmsvoicePhoneNumberConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .isoCountryCode(java.lang.String)
    .mandatoryKeywords(SmsvoicePhoneNumberMandatoryKeywords)
    .numberCapabilities(java.util.List<java.lang.String>)
    .numberType(java.lang.String)
//  .deletionProtectionEnabled(java.lang.Boolean|IResolvable)
//  .optionalKeywords(IResolvable|java.util.List<SmsvoicePhoneNumberOptionalKeywords>)
//  .optOutListName(java.lang.String)
//  .selfManagedOptOutsEnabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<SmsvoicePhoneNumberTags>)
//  .twoWay(SmsvoicePhoneNumberTwoWay)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.isoCountryCode">isoCountryCode</a></code> | <code>java.lang.String</code> | The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.mandatoryKeywords">mandatoryKeywords</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a></code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.numberCapabilities">numberCapabilities</a></code> | <code>java.util.List<java.lang.String></code> | Indicates if the phone number will be used for text messages, voice messages, or both. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.numberType">numberType</a></code> | <code>java.lang.String</code> | The type of phone number to request. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true the sender ID can't be deleted. By default this is set to false. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.optionalKeywords">optionalKeywords</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>></code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.optOutListName">optOutListName</a></code> | <code>java.lang.String</code> | The name of the OptOutList to associate with the phone number. You can use the OptOutListName or OptOutListArn. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.selfManagedOptOutsEnabled">selfManagedOptOutsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | By default this is set to false. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.twoWay">twoWay</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a></code> | When you set up two-way SMS, you can receive incoming messages from your customers. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `isoCountryCode`<sup>Required</sup> <a name="isoCountryCode" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.isoCountryCode"></a>

```java
public java.lang.String getIsoCountryCode();
```

- *Type:* java.lang.String

The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#iso_country_code SmsvoicePhoneNumber#iso_country_code}

---

##### `mandatoryKeywords`<sup>Required</sup> <a name="mandatoryKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.mandatoryKeywords"></a>

```java
public SmsvoicePhoneNumberMandatoryKeywords getMandatoryKeywords();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#mandatory_keywords SmsvoicePhoneNumber#mandatory_keywords}

---

##### `numberCapabilities`<sup>Required</sup> <a name="numberCapabilities" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.numberCapabilities"></a>

```java
public java.util.List<java.lang.String> getNumberCapabilities();
```

- *Type:* java.util.List<java.lang.String>

Indicates if the phone number will be used for text messages, voice messages, or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#number_capabilities SmsvoicePhoneNumber#number_capabilities}

---

##### `numberType`<sup>Required</sup> <a name="numberType" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.numberType"></a>

```java
public java.lang.String getNumberType();
```

- *Type:* java.lang.String

The type of phone number to request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#number_type SmsvoicePhoneNumber#number_type}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.deletionProtectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true the sender ID can't be deleted. By default this is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#deletion_protection_enabled SmsvoicePhoneNumber#deletion_protection_enabled}

---

##### `optionalKeywords`<sup>Optional</sup> <a name="optionalKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.optionalKeywords"></a>

```java
public IResolvable|java.util.List<SmsvoicePhoneNumberOptionalKeywords> getOptionalKeywords();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#optional_keywords SmsvoicePhoneNumber#optional_keywords}

---

##### `optOutListName`<sup>Optional</sup> <a name="optOutListName" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.optOutListName"></a>

```java
public java.lang.String getOptOutListName();
```

- *Type:* java.lang.String

The name of the OptOutList to associate with the phone number. You can use the OptOutListName or OptOutListArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#opt_out_list_name SmsvoicePhoneNumber#opt_out_list_name}

---

##### `selfManagedOptOutsEnabled`<sup>Optional</sup> <a name="selfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.selfManagedOptOutsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSelfManagedOptOutsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

By default this is set to false.

When an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, AWS End User Messaging SMS and Voice automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#self_managed_opt_outs_enabled SmsvoicePhoneNumber#self_managed_opt_outs_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SmsvoicePhoneNumberTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#tags SmsvoicePhoneNumber#tags}

---

##### `twoWay`<sup>Optional</sup> <a name="twoWay" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.twoWay"></a>

```java
public SmsvoicePhoneNumberTwoWay getTwoWay();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a>

When you set up two-way SMS, you can receive incoming messages from your customers.

When one of your customers sends a message to your phone number, the message body is sent to an Amazon SNS topic or Amazon Connect for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#two_way SmsvoicePhoneNumber#two_way}

---

### SmsvoicePhoneNumberMandatoryKeywords <a name="SmsvoicePhoneNumberMandatoryKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_phone_number.SmsvoicePhoneNumberMandatoryKeywords;

SmsvoicePhoneNumberMandatoryKeywords.builder()
    .help(SmsvoicePhoneNumberMandatoryKeywordsHelp)
    .stop(SmsvoicePhoneNumberMandatoryKeywordsStop)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords.property.help">help</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a></code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords.property.stop">stop</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a></code> | A keyword is a word that you can search for on a particular phone number or pool. |

---

##### `help`<sup>Required</sup> <a name="help" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords.property.help"></a>

```java
public SmsvoicePhoneNumberMandatoryKeywordsHelp getHelp();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#help SmsvoicePhoneNumber#help}

---

##### `stop`<sup>Required</sup> <a name="stop" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords.property.stop"></a>

```java
public SmsvoicePhoneNumberMandatoryKeywordsStop getStop();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#stop SmsvoicePhoneNumber#stop}

---

### SmsvoicePhoneNumberMandatoryKeywordsHelp <a name="SmsvoicePhoneNumberMandatoryKeywordsHelp" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_phone_number.SmsvoicePhoneNumberMandatoryKeywordsHelp;

SmsvoicePhoneNumberMandatoryKeywordsHelp.builder()
    .message(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp.property.message">message</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}.

---

### SmsvoicePhoneNumberMandatoryKeywordsStop <a name="SmsvoicePhoneNumberMandatoryKeywordsStop" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_phone_number.SmsvoicePhoneNumberMandatoryKeywordsStop;

SmsvoicePhoneNumberMandatoryKeywordsStop.builder()
    .message(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop.property.message">message</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}.

---

### SmsvoicePhoneNumberOptionalKeywords <a name="SmsvoicePhoneNumberOptionalKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_phone_number.SmsvoicePhoneNumberOptionalKeywords;

SmsvoicePhoneNumberOptionalKeywords.builder()
//  .action(java.lang.String)
//  .keyword(java.lang.String)
//  .message(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#action SmsvoicePhoneNumber#action}. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.keyword">keyword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#keyword SmsvoicePhoneNumber#keyword}. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.message">message</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#action SmsvoicePhoneNumber#action}.

---

##### `keyword`<sup>Optional</sup> <a name="keyword" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.keyword"></a>

```java
public java.lang.String getKeyword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#keyword SmsvoicePhoneNumber#keyword}.

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}.

---

### SmsvoicePhoneNumberTags <a name="SmsvoicePhoneNumberTags" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_phone_number.SmsvoicePhoneNumberTags;

SmsvoicePhoneNumberTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#key SmsvoicePhoneNumber#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#value SmsvoicePhoneNumber#value}

---

### SmsvoicePhoneNumberTwoWay <a name="SmsvoicePhoneNumberTwoWay" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_phone_number.SmsvoicePhoneNumberTwoWay;

SmsvoicePhoneNumberTwoWay.builder()
//  .channelArn(java.lang.String)
//  .channelRole(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.channelArn">channelArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the two way channel. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.channelRole">channelRole</a></code> | <code>java.lang.String</code> | An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | By default this is set to false. |

---

##### `channelArn`<sup>Optional</sup> <a name="channelArn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.channelArn"></a>

```java
public java.lang.String getChannelArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the two way channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#channel_arn SmsvoicePhoneNumber#channel_arn}

---

##### `channelRole`<sup>Optional</sup> <a name="channelRole" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.channelRole"></a>

```java
public java.lang.String getChannelRole();
```

- *Type:* java.lang.String

An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#channel_role SmsvoicePhoneNumber#channel_role}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

By default this is set to false.

When set to true you can receive incoming text messages from your end recipients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_phone_number#enabled SmsvoicePhoneNumber#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference <a name="SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_phone_number.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference;

new SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoicePhoneNumberMandatoryKeywordsHelp getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a>

---


### SmsvoicePhoneNumberMandatoryKeywordsOutputReference <a name="SmsvoicePhoneNumberMandatoryKeywordsOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_phone_number.SmsvoicePhoneNumberMandatoryKeywordsOutputReference;

new SmsvoicePhoneNumberMandatoryKeywordsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putHelp">putHelp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putStop">putStop</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHelp` <a name="putHelp" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putHelp"></a>

```java
public void putHelp(SmsvoicePhoneNumberMandatoryKeywordsHelp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putHelp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a>

---

##### `putStop` <a name="putStop" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putStop"></a>

```java
public void putStop(SmsvoicePhoneNumberMandatoryKeywordsStop value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putStop.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.help">help</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference">SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.stop">stop</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference">SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.helpInput">helpInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.stopInput">stopInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `help`<sup>Required</sup> <a name="help" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.help"></a>

```java
public SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference getHelp();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference">SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference</a>

---

##### `stop`<sup>Required</sup> <a name="stop" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.stop"></a>

```java
public SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference getStop();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference">SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference</a>

---

##### `helpInput`<sup>Optional</sup> <a name="helpInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.helpInput"></a>

```java
public IResolvable|SmsvoicePhoneNumberMandatoryKeywordsHelp getHelpInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a>

---

##### `stopInput`<sup>Optional</sup> <a name="stopInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.stopInput"></a>

```java
public IResolvable|SmsvoicePhoneNumberMandatoryKeywordsStop getStopInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoicePhoneNumberMandatoryKeywords getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a>

---


### SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference <a name="SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_phone_number.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference;

new SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoicePhoneNumberMandatoryKeywordsStop getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a>

---


### SmsvoicePhoneNumberOptionalKeywordsList <a name="SmsvoicePhoneNumberOptionalKeywordsList" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_phone_number.SmsvoicePhoneNumberOptionalKeywordsList;

new SmsvoicePhoneNumberOptionalKeywordsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.get"></a>

```java
public SmsvoicePhoneNumberOptionalKeywordsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SmsvoicePhoneNumberOptionalKeywords> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>>

---


### SmsvoicePhoneNumberOptionalKeywordsOutputReference <a name="SmsvoicePhoneNumberOptionalKeywordsOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_phone_number.SmsvoicePhoneNumberOptionalKeywordsOutputReference;

new SmsvoicePhoneNumberOptionalKeywordsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetKeyword">resetKeyword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetMessage">resetMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetKeyword` <a name="resetKeyword" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetKeyword"></a>

```java
public void resetKeyword()
```

##### `resetMessage` <a name="resetMessage" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetMessage"></a>

```java
public void resetMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.keywordInput">keywordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.keyword">keyword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `keywordInput`<sup>Optional</sup> <a name="keywordInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.keywordInput"></a>

```java
public java.lang.String getKeywordInput();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `keyword`<sup>Required</sup> <a name="keyword" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.keyword"></a>

```java
public java.lang.String getKeyword();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoicePhoneNumberOptionalKeywords getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>

---


### SmsvoicePhoneNumberTagsList <a name="SmsvoicePhoneNumberTagsList" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_phone_number.SmsvoicePhoneNumberTagsList;

new SmsvoicePhoneNumberTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.get"></a>

```java
public SmsvoicePhoneNumberTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SmsvoicePhoneNumberTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>>

---


### SmsvoicePhoneNumberTagsOutputReference <a name="SmsvoicePhoneNumberTagsOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_phone_number.SmsvoicePhoneNumberTagsOutputReference;

new SmsvoicePhoneNumberTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoicePhoneNumberTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>

---


### SmsvoicePhoneNumberTwoWayOutputReference <a name="SmsvoicePhoneNumberTwoWayOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_phone_number.SmsvoicePhoneNumberTwoWayOutputReference;

new SmsvoicePhoneNumberTwoWayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetChannelArn">resetChannelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetChannelRole">resetChannelRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannelArn` <a name="resetChannelArn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetChannelArn"></a>

```java
public void resetChannelArn()
```

##### `resetChannelRole` <a name="resetChannelRole" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetChannelRole"></a>

```java
public void resetChannelRole()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelArnInput">channelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelRoleInput">channelRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelArn">channelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelRole">channelRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channelArnInput`<sup>Optional</sup> <a name="channelArnInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelArnInput"></a>

```java
public java.lang.String getChannelArnInput();
```

- *Type:* java.lang.String

---

##### `channelRoleInput`<sup>Optional</sup> <a name="channelRoleInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelRoleInput"></a>

```java
public java.lang.String getChannelRoleInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `channelArn`<sup>Required</sup> <a name="channelArn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelArn"></a>

```java
public java.lang.String getChannelArn();
```

- *Type:* java.lang.String

---

##### `channelRole`<sup>Required</sup> <a name="channelRole" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelRole"></a>

```java
public java.lang.String getChannelRole();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoicePhoneNumberTwoWay getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a>

---



