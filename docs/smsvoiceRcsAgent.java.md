# `smsvoiceRcsAgent` Submodule <a name="`smsvoiceRcsAgent` Submodule" id="@cdktn/provider-awscc.smsvoiceRcsAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceRcsAgent <a name="SmsvoiceRcsAgent" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent awscc_smsvoice_rcs_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_rcs_agent.SmsvoiceRcsAgent;

SmsvoiceRcsAgent.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .deletionProtectionEnabled(java.lang.Boolean|IResolvable)
//  .optOutListName(java.lang.String)
//  .selfManagedOptOutsEnabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<SmsvoiceRcsAgentTags>)
//  .twoWayChannelArn(java.lang.String)
//  .twoWayChannelRole(java.lang.String)
//  .twoWayEnabled(java.lang.Boolean|IResolvable)
//  .twoWayMediaS3BucketName(java.lang.String)
//  .twoWayMediaS3KeyPrefix(java.lang.String)
//  .twoWayMediaS3Role(java.lang.String)
//  .twoWayRcsEventsEnabled(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true the RCS agent can't be deleted. By default this is false. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.optOutListName">optOutListName</a></code> | <code>java.lang.String</code> | The name of the opt-out list associated with the RCS agent. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.selfManagedOptOutsEnabled">selfManagedOptOutsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true you're responsible for responding to HELP and STOP requests, and for tracking and honoring opt-out requests. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>></code> | An array of key-value pairs to apply to the RCS agent. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayChannelArn">twoWayChannelArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the two way channel where inbound messages are delivered. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayChannelRole">twoWayChannelRole</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of an IAM role for the service to assume in order to post inbound messages to the two way channel. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayEnabled">twoWayEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true two-way messaging is enabled for the RCS agent. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayMediaS3BucketName">twoWayMediaS3BucketName</a></code> | <code>java.lang.String</code> | The name of the Amazon S3 bucket where inbound RCS media objects are written. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayMediaS3KeyPrefix">twoWayMediaS3KeyPrefix</a></code> | <code>java.lang.String</code> | The key prefix used for inbound RCS media objects in the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayMediaS3Role">twoWayMediaS3Role</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role used to write inbound RCS media files to the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayRcsEventsEnabled">twoWayRcsEventsEnabled</a></code> | <code>java.util.List<java.lang.String></code> | The list of RCS event types enabled for two-way messaging. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true the RCS agent can't be deleted. By default this is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#deletion_protection_enabled SmsvoiceRcsAgent#deletion_protection_enabled}

---

##### `optOutListName`<sup>Optional</sup> <a name="optOutListName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.optOutListName"></a>

- *Type:* java.lang.String

The name of the opt-out list associated with the RCS agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#opt_out_list_name SmsvoiceRcsAgent#opt_out_list_name}

---

##### `selfManagedOptOutsEnabled`<sup>Optional</sup> <a name="selfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.selfManagedOptOutsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true you're responsible for responding to HELP and STOP requests, and for tracking and honoring opt-out requests.

By default this is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#self_managed_opt_outs_enabled SmsvoiceRcsAgent#self_managed_opt_outs_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>>

An array of key-value pairs to apply to the RCS agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#tags SmsvoiceRcsAgent#tags}

---

##### `twoWayChannelArn`<sup>Optional</sup> <a name="twoWayChannelArn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayChannelArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the two way channel where inbound messages are delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_channel_arn SmsvoiceRcsAgent#two_way_channel_arn}

---

##### `twoWayChannelRole`<sup>Optional</sup> <a name="twoWayChannelRole" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayChannelRole"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of an IAM role for the service to assume in order to post inbound messages to the two way channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_channel_role SmsvoiceRcsAgent#two_way_channel_role}

---

##### `twoWayEnabled`<sup>Optional</sup> <a name="twoWayEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true two-way messaging is enabled for the RCS agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_enabled SmsvoiceRcsAgent#two_way_enabled}

---

##### `twoWayMediaS3BucketName`<sup>Optional</sup> <a name="twoWayMediaS3BucketName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayMediaS3BucketName"></a>

- *Type:* java.lang.String

The name of the Amazon S3 bucket where inbound RCS media objects are written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_bucket_name SmsvoiceRcsAgent#two_way_media_s3_bucket_name}

---

##### `twoWayMediaS3KeyPrefix`<sup>Optional</sup> <a name="twoWayMediaS3KeyPrefix" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayMediaS3KeyPrefix"></a>

- *Type:* java.lang.String

The key prefix used for inbound RCS media objects in the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_key_prefix SmsvoiceRcsAgent#two_way_media_s3_key_prefix}

---

##### `twoWayMediaS3Role`<sup>Optional</sup> <a name="twoWayMediaS3Role" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayMediaS3Role"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role used to write inbound RCS media files to the Amazon S3 bucket.

The role must have s3:PutObject permission on the bucket and a trust policy allowing sms-voice.amazonaws.com to assume it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_role SmsvoiceRcsAgent#two_way_media_s3_role}

---

##### `twoWayRcsEventsEnabled`<sup>Optional</sup> <a name="twoWayRcsEventsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayRcsEventsEnabled"></a>

- *Type:* java.util.List<java.lang.String>

The list of RCS event types enabled for two-way messaging.

An empty list disables all event types. The special value ALL enables all current and future event types and must be the only element if used. Requires TwoWayEnabled to be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_rcs_events_enabled SmsvoiceRcsAgent#two_way_rcs_events_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetOptOutListName">resetOptOutListName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetSelfManagedOptOutsEnabled">resetSelfManagedOptOutsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayChannelArn">resetTwoWayChannelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayChannelRole">resetTwoWayChannelRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayEnabled">resetTwoWayEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3BucketName">resetTwoWayMediaS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3KeyPrefix">resetTwoWayMediaS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3Role">resetTwoWayMediaS3Role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayRcsEventsEnabled">resetTwoWayRcsEventsEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SmsvoiceRcsAgentTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>>

---

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetDeletionProtectionEnabled"></a>

```java
public void resetDeletionProtectionEnabled()
```

##### `resetOptOutListName` <a name="resetOptOutListName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetOptOutListName"></a>

```java
public void resetOptOutListName()
```

##### `resetSelfManagedOptOutsEnabled` <a name="resetSelfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetSelfManagedOptOutsEnabled"></a>

```java
public void resetSelfManagedOptOutsEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTags"></a>

```java
public void resetTags()
```

##### `resetTwoWayChannelArn` <a name="resetTwoWayChannelArn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayChannelArn"></a>

```java
public void resetTwoWayChannelArn()
```

##### `resetTwoWayChannelRole` <a name="resetTwoWayChannelRole" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayChannelRole"></a>

```java
public void resetTwoWayChannelRole()
```

##### `resetTwoWayEnabled` <a name="resetTwoWayEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayEnabled"></a>

```java
public void resetTwoWayEnabled()
```

##### `resetTwoWayMediaS3BucketName` <a name="resetTwoWayMediaS3BucketName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3BucketName"></a>

```java
public void resetTwoWayMediaS3BucketName()
```

##### `resetTwoWayMediaS3KeyPrefix` <a name="resetTwoWayMediaS3KeyPrefix" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3KeyPrefix"></a>

```java
public void resetTwoWayMediaS3KeyPrefix()
```

##### `resetTwoWayMediaS3Role` <a name="resetTwoWayMediaS3Role" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3Role"></a>

```java
public void resetTwoWayMediaS3Role()
```

##### `resetTwoWayRcsEventsEnabled` <a name="resetTwoWayRcsEventsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayRcsEventsEnabled"></a>

```java
public void resetTwoWayRcsEventsEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoiceRcsAgent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isConstruct"></a>

```java
import io.cdktn.providers.awscc.smsvoice_rcs_agent.SmsvoiceRcsAgent;

SmsvoiceRcsAgent.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.smsvoice_rcs_agent.SmsvoiceRcsAgent;

SmsvoiceRcsAgent.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.smsvoice_rcs_agent.SmsvoiceRcsAgent;

SmsvoiceRcsAgent.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.smsvoice_rcs_agent.SmsvoiceRcsAgent;

SmsvoiceRcsAgent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SmsvoiceRcsAgent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SmsvoiceRcsAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SmsvoiceRcsAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SmsvoiceRcsAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceRcsAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.createdTimestamp">createdTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.poolId">poolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.rcsAgentArn">rcsAgentArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.rcsAgentId">rcsAgentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList">SmsvoiceRcsAgentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.testingAgent">testingAgent</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference">SmsvoiceRcsAgentTestingAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.optOutListNameInput">optOutListNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.selfManagedOptOutsEnabledInput">selfManagedOptOutsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelArnInput">twoWayChannelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelRoleInput">twoWayChannelRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayEnabledInput">twoWayEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3BucketNameInput">twoWayMediaS3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefixInput">twoWayMediaS3KeyPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3RoleInput">twoWayMediaS3RoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayRcsEventsEnabledInput">twoWayRcsEventsEnabledInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.optOutListName">optOutListName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.selfManagedOptOutsEnabled">selfManagedOptOutsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelArn">twoWayChannelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelRole">twoWayChannelRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayEnabled">twoWayEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3BucketName">twoWayMediaS3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefix">twoWayMediaS3KeyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3Role">twoWayMediaS3Role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayRcsEventsEnabled">twoWayRcsEventsEnabled</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.createdTimestamp"></a>

```java
public java.lang.String getCreatedTimestamp();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.poolId"></a>

```java
public java.lang.String getPoolId();
```

- *Type:* java.lang.String

---

##### `rcsAgentArn`<sup>Required</sup> <a name="rcsAgentArn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.rcsAgentArn"></a>

```java
public java.lang.String getRcsAgentArn();
```

- *Type:* java.lang.String

---

##### `rcsAgentId`<sup>Required</sup> <a name="rcsAgentId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.rcsAgentId"></a>

```java
public java.lang.String getRcsAgentId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tags"></a>

```java
public SmsvoiceRcsAgentTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList">SmsvoiceRcsAgentTagsList</a>

---

##### `testingAgent`<sup>Required</sup> <a name="testingAgent" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.testingAgent"></a>

```java
public SmsvoiceRcsAgentTestingAgentOutputReference getTestingAgent();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference">SmsvoiceRcsAgentTestingAgentOutputReference</a>

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.deletionProtectionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `optOutListNameInput`<sup>Optional</sup> <a name="optOutListNameInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.optOutListNameInput"></a>

```java
public java.lang.String getOptOutListNameInput();
```

- *Type:* java.lang.String

---

##### `selfManagedOptOutsEnabledInput`<sup>Optional</sup> <a name="selfManagedOptOutsEnabledInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.selfManagedOptOutsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSelfManagedOptOutsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SmsvoiceRcsAgentTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>>

---

##### `twoWayChannelArnInput`<sup>Optional</sup> <a name="twoWayChannelArnInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelArnInput"></a>

```java
public java.lang.String getTwoWayChannelArnInput();
```

- *Type:* java.lang.String

---

##### `twoWayChannelRoleInput`<sup>Optional</sup> <a name="twoWayChannelRoleInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelRoleInput"></a>

```java
public java.lang.String getTwoWayChannelRoleInput();
```

- *Type:* java.lang.String

---

##### `twoWayEnabledInput`<sup>Optional</sup> <a name="twoWayEnabledInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getTwoWayEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `twoWayMediaS3BucketNameInput`<sup>Optional</sup> <a name="twoWayMediaS3BucketNameInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3BucketNameInput"></a>

```java
public java.lang.String getTwoWayMediaS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `twoWayMediaS3KeyPrefixInput`<sup>Optional</sup> <a name="twoWayMediaS3KeyPrefixInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefixInput"></a>

```java
public java.lang.String getTwoWayMediaS3KeyPrefixInput();
```

- *Type:* java.lang.String

---

##### `twoWayMediaS3RoleInput`<sup>Optional</sup> <a name="twoWayMediaS3RoleInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3RoleInput"></a>

```java
public java.lang.String getTwoWayMediaS3RoleInput();
```

- *Type:* java.lang.String

---

##### `twoWayRcsEventsEnabledInput`<sup>Optional</sup> <a name="twoWayRcsEventsEnabledInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayRcsEventsEnabledInput"></a>

```java
public java.util.List<java.lang.String> getTwoWayRcsEventsEnabledInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.deletionProtectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `optOutListName`<sup>Required</sup> <a name="optOutListName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.optOutListName"></a>

```java
public java.lang.String getOptOutListName();
```

- *Type:* java.lang.String

---

##### `selfManagedOptOutsEnabled`<sup>Required</sup> <a name="selfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.selfManagedOptOutsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSelfManagedOptOutsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `twoWayChannelArn`<sup>Required</sup> <a name="twoWayChannelArn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelArn"></a>

```java
public java.lang.String getTwoWayChannelArn();
```

- *Type:* java.lang.String

---

##### `twoWayChannelRole`<sup>Required</sup> <a name="twoWayChannelRole" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelRole"></a>

```java
public java.lang.String getTwoWayChannelRole();
```

- *Type:* java.lang.String

---

##### `twoWayEnabled`<sup>Required</sup> <a name="twoWayEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTwoWayEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `twoWayMediaS3BucketName`<sup>Required</sup> <a name="twoWayMediaS3BucketName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3BucketName"></a>

```java
public java.lang.String getTwoWayMediaS3BucketName();
```

- *Type:* java.lang.String

---

##### `twoWayMediaS3KeyPrefix`<sup>Required</sup> <a name="twoWayMediaS3KeyPrefix" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefix"></a>

```java
public java.lang.String getTwoWayMediaS3KeyPrefix();
```

- *Type:* java.lang.String

---

##### `twoWayMediaS3Role`<sup>Required</sup> <a name="twoWayMediaS3Role" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3Role"></a>

```java
public java.lang.String getTwoWayMediaS3Role();
```

- *Type:* java.lang.String

---

##### `twoWayRcsEventsEnabled`<sup>Required</sup> <a name="twoWayRcsEventsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayRcsEventsEnabled"></a>

```java
public java.util.List<java.lang.String> getTwoWayRcsEventsEnabled();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceRcsAgentConfig <a name="SmsvoiceRcsAgentConfig" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_rcs_agent.SmsvoiceRcsAgentConfig;

SmsvoiceRcsAgentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .deletionProtectionEnabled(java.lang.Boolean|IResolvable)
//  .optOutListName(java.lang.String)
//  .selfManagedOptOutsEnabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<SmsvoiceRcsAgentTags>)
//  .twoWayChannelArn(java.lang.String)
//  .twoWayChannelRole(java.lang.String)
//  .twoWayEnabled(java.lang.Boolean|IResolvable)
//  .twoWayMediaS3BucketName(java.lang.String)
//  .twoWayMediaS3KeyPrefix(java.lang.String)
//  .twoWayMediaS3Role(java.lang.String)
//  .twoWayRcsEventsEnabled(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true the RCS agent can't be deleted. By default this is false. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.optOutListName">optOutListName</a></code> | <code>java.lang.String</code> | The name of the opt-out list associated with the RCS agent. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.selfManagedOptOutsEnabled">selfManagedOptOutsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true you're responsible for responding to HELP and STOP requests, and for tracking and honoring opt-out requests. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>></code> | An array of key-value pairs to apply to the RCS agent. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayChannelArn">twoWayChannelArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the two way channel where inbound messages are delivered. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayChannelRole">twoWayChannelRole</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of an IAM role for the service to assume in order to post inbound messages to the two way channel. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayEnabled">twoWayEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true two-way messaging is enabled for the RCS agent. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3BucketName">twoWayMediaS3BucketName</a></code> | <code>java.lang.String</code> | The name of the Amazon S3 bucket where inbound RCS media objects are written. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3KeyPrefix">twoWayMediaS3KeyPrefix</a></code> | <code>java.lang.String</code> | The key prefix used for inbound RCS media objects in the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3Role">twoWayMediaS3Role</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role used to write inbound RCS media files to the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayRcsEventsEnabled">twoWayRcsEventsEnabled</a></code> | <code>java.util.List<java.lang.String></code> | The list of RCS event types enabled for two-way messaging. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.deletionProtectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true the RCS agent can't be deleted. By default this is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#deletion_protection_enabled SmsvoiceRcsAgent#deletion_protection_enabled}

---

##### `optOutListName`<sup>Optional</sup> <a name="optOutListName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.optOutListName"></a>

```java
public java.lang.String getOptOutListName();
```

- *Type:* java.lang.String

The name of the opt-out list associated with the RCS agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#opt_out_list_name SmsvoiceRcsAgent#opt_out_list_name}

---

##### `selfManagedOptOutsEnabled`<sup>Optional</sup> <a name="selfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.selfManagedOptOutsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSelfManagedOptOutsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true you're responsible for responding to HELP and STOP requests, and for tracking and honoring opt-out requests.

By default this is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#self_managed_opt_outs_enabled SmsvoiceRcsAgent#self_managed_opt_outs_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SmsvoiceRcsAgentTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>>

An array of key-value pairs to apply to the RCS agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#tags SmsvoiceRcsAgent#tags}

---

##### `twoWayChannelArn`<sup>Optional</sup> <a name="twoWayChannelArn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayChannelArn"></a>

```java
public java.lang.String getTwoWayChannelArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the two way channel where inbound messages are delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_channel_arn SmsvoiceRcsAgent#two_way_channel_arn}

---

##### `twoWayChannelRole`<sup>Optional</sup> <a name="twoWayChannelRole" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayChannelRole"></a>

```java
public java.lang.String getTwoWayChannelRole();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of an IAM role for the service to assume in order to post inbound messages to the two way channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_channel_role SmsvoiceRcsAgent#two_way_channel_role}

---

##### `twoWayEnabled`<sup>Optional</sup> <a name="twoWayEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTwoWayEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true two-way messaging is enabled for the RCS agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_enabled SmsvoiceRcsAgent#two_way_enabled}

---

##### `twoWayMediaS3BucketName`<sup>Optional</sup> <a name="twoWayMediaS3BucketName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3BucketName"></a>

```java
public java.lang.String getTwoWayMediaS3BucketName();
```

- *Type:* java.lang.String

The name of the Amazon S3 bucket where inbound RCS media objects are written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_bucket_name SmsvoiceRcsAgent#two_way_media_s3_bucket_name}

---

##### `twoWayMediaS3KeyPrefix`<sup>Optional</sup> <a name="twoWayMediaS3KeyPrefix" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3KeyPrefix"></a>

```java
public java.lang.String getTwoWayMediaS3KeyPrefix();
```

- *Type:* java.lang.String

The key prefix used for inbound RCS media objects in the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_key_prefix SmsvoiceRcsAgent#two_way_media_s3_key_prefix}

---

##### `twoWayMediaS3Role`<sup>Optional</sup> <a name="twoWayMediaS3Role" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3Role"></a>

```java
public java.lang.String getTwoWayMediaS3Role();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role used to write inbound RCS media files to the Amazon S3 bucket.

The role must have s3:PutObject permission on the bucket and a trust policy allowing sms-voice.amazonaws.com to assume it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_role SmsvoiceRcsAgent#two_way_media_s3_role}

---

##### `twoWayRcsEventsEnabled`<sup>Optional</sup> <a name="twoWayRcsEventsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayRcsEventsEnabled"></a>

```java
public java.util.List<java.lang.String> getTwoWayRcsEventsEnabled();
```

- *Type:* java.util.List<java.lang.String>

The list of RCS event types enabled for two-way messaging.

An empty list disables all event types. The special value ALL enables all current and future event types and must be the only element if used. Requires TwoWayEnabled to be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_rcs_events_enabled SmsvoiceRcsAgent#two_way_rcs_events_enabled}

---

### SmsvoiceRcsAgentTags <a name="SmsvoiceRcsAgentTags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_rcs_agent.SmsvoiceRcsAgentTags;

SmsvoiceRcsAgentTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#key SmsvoiceRcsAgent#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#value SmsvoiceRcsAgent#value}

---

### SmsvoiceRcsAgentTestingAgent <a name="SmsvoiceRcsAgentTestingAgent" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgent.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_rcs_agent.SmsvoiceRcsAgentTestingAgent;

SmsvoiceRcsAgentTestingAgent.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceRcsAgentTagsList <a name="SmsvoiceRcsAgentTagsList" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_rcs_agent.SmsvoiceRcsAgentTagsList;

new SmsvoiceRcsAgentTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.get"></a>

```java
public SmsvoiceRcsAgentTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SmsvoiceRcsAgentTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>>

---


### SmsvoiceRcsAgentTagsOutputReference <a name="SmsvoiceRcsAgentTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_rcs_agent.SmsvoiceRcsAgentTagsOutputReference;

new SmsvoiceRcsAgentTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SmsvoiceRcsAgentTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>

---


### SmsvoiceRcsAgentTestingAgentOutputReference <a name="SmsvoiceRcsAgentTestingAgentOutputReference" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.smsvoice_rcs_agent.SmsvoiceRcsAgentTestingAgentOutputReference;

new SmsvoiceRcsAgentTestingAgentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.registrationId">registrationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentId">testingAgentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentStatus">testingAgentStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgent">SmsvoiceRcsAgentTestingAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `registrationId`<sup>Required</sup> <a name="registrationId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.registrationId"></a>

```java
public java.lang.String getRegistrationId();
```

- *Type:* java.lang.String

---

##### `testingAgentId`<sup>Required</sup> <a name="testingAgentId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentId"></a>

```java
public java.lang.String getTestingAgentId();
```

- *Type:* java.lang.String

---

##### `testingAgentStatus`<sup>Required</sup> <a name="testingAgentStatus" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentStatus"></a>

```java
public java.lang.String getTestingAgentStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.internalValue"></a>

```java
public SmsvoiceRcsAgentTestingAgent getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgent">SmsvoiceRcsAgentTestingAgent</a>

---



