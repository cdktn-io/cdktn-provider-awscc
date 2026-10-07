# `smsvoiceRcsAgent` Submodule <a name="`smsvoiceRcsAgent` Submodule" id="@cdktn/provider-awscc.smsvoiceRcsAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceRcsAgent <a name="SmsvoiceRcsAgent" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent awscc_smsvoice_rcs_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_rcs_agent

smsvoiceRcsAgent.SmsvoiceRcsAgent(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  deletion_protection_enabled: bool | IResolvable = None,
  opt_out_list_name: str = None,
  self_managed_opt_outs_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[SmsvoiceRcsAgentTags] = None,
  two_way_channel_arn: str = None,
  two_way_channel_role: str = None,
  two_way_enabled: bool | IResolvable = None,
  two_way_media_s3_bucket_name: str = None,
  two_way_media_s3_key_prefix: str = None,
  two_way_media_s3_role: str = None,
  two_way_rcs_events_enabled: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true the RCS agent can't be deleted. By default this is false. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.optOutListName">opt_out_list_name</a></code> | <code>str</code> | The name of the opt-out list associated with the RCS agent. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.selfManagedOptOutsEnabled">self_managed_opt_outs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true you're responsible for responding to HELP and STOP requests, and for tracking and honoring opt-out requests. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>]</code> | An array of key-value pairs to apply to the RCS agent. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayChannelArn">two_way_channel_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the two way channel where inbound messages are delivered. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayChannelRole">two_way_channel_role</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAM role for the service to assume in order to post inbound messages to the two way channel. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayEnabled">two_way_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true two-way messaging is enabled for the RCS agent. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayMediaS3BucketName">two_way_media_s3_bucket_name</a></code> | <code>str</code> | The name of the Amazon S3 bucket where inbound RCS media objects are written. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayMediaS3KeyPrefix">two_way_media_s3_key_prefix</a></code> | <code>str</code> | The key prefix used for inbound RCS media objects in the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayMediaS3Role">two_way_media_s3_role</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM role used to write inbound RCS media files to the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayRcsEventsEnabled">two_way_rcs_events_enabled</a></code> | <code>typing.List[str]</code> | The list of RCS event types enabled for two-way messaging. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* bool | cdktn.IResolvable

When set to true the RCS agent can't be deleted. By default this is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#deletion_protection_enabled SmsvoiceRcsAgent#deletion_protection_enabled}

---

##### `opt_out_list_name`<sup>Optional</sup> <a name="opt_out_list_name" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.optOutListName"></a>

- *Type:* str

The name of the opt-out list associated with the RCS agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#opt_out_list_name SmsvoiceRcsAgent#opt_out_list_name}

---

##### `self_managed_opt_outs_enabled`<sup>Optional</sup> <a name="self_managed_opt_outs_enabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.selfManagedOptOutsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

When set to true you're responsible for responding to HELP and STOP requests, and for tracking and honoring opt-out requests.

By default this is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#self_managed_opt_outs_enabled SmsvoiceRcsAgent#self_managed_opt_outs_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>]

An array of key-value pairs to apply to the RCS agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#tags SmsvoiceRcsAgent#tags}

---

##### `two_way_channel_arn`<sup>Optional</sup> <a name="two_way_channel_arn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayChannelArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the two way channel where inbound messages are delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_channel_arn SmsvoiceRcsAgent#two_way_channel_arn}

---

##### `two_way_channel_role`<sup>Optional</sup> <a name="two_way_channel_role" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayChannelRole"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an IAM role for the service to assume in order to post inbound messages to the two way channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_channel_role SmsvoiceRcsAgent#two_way_channel_role}

---

##### `two_way_enabled`<sup>Optional</sup> <a name="two_way_enabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayEnabled"></a>

- *Type:* bool | cdktn.IResolvable

When set to true two-way messaging is enabled for the RCS agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_enabled SmsvoiceRcsAgent#two_way_enabled}

---

##### `two_way_media_s3_bucket_name`<sup>Optional</sup> <a name="two_way_media_s3_bucket_name" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayMediaS3BucketName"></a>

- *Type:* str

The name of the Amazon S3 bucket where inbound RCS media objects are written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_bucket_name SmsvoiceRcsAgent#two_way_media_s3_bucket_name}

---

##### `two_way_media_s3_key_prefix`<sup>Optional</sup> <a name="two_way_media_s3_key_prefix" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayMediaS3KeyPrefix"></a>

- *Type:* str

The key prefix used for inbound RCS media objects in the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_key_prefix SmsvoiceRcsAgent#two_way_media_s3_key_prefix}

---

##### `two_way_media_s3_role`<sup>Optional</sup> <a name="two_way_media_s3_role" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayMediaS3Role"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the IAM role used to write inbound RCS media files to the Amazon S3 bucket.

The role must have s3:PutObject permission on the bucket and a trust policy allowing sms-voice.amazonaws.com to assume it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_role SmsvoiceRcsAgent#two_way_media_s3_role}

---

##### `two_way_rcs_events_enabled`<sup>Optional</sup> <a name="two_way_rcs_events_enabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.twoWayRcsEventsEnabled"></a>

- *Type:* typing.List[str]

The list of RCS event types enabled for two-way messaging.

An empty list disables all event types. The special value ALL enables all current and future event types and must be the only element if used. Requires TwoWayEnabled to be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_rcs_events_enabled SmsvoiceRcsAgent#two_way_rcs_events_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetDeletionProtectionEnabled">reset_deletion_protection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetOptOutListName">reset_opt_out_list_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetSelfManagedOptOutsEnabled">reset_self_managed_opt_outs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayChannelArn">reset_two_way_channel_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayChannelRole">reset_two_way_channel_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayEnabled">reset_two_way_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3BucketName">reset_two_way_media_s3_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3KeyPrefix">reset_two_way_media_s3_key_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3Role">reset_two_way_media_s3_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayRcsEventsEnabled">reset_two_way_rcs_events_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SmsvoiceRcsAgentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>]

---

##### `reset_deletion_protection_enabled` <a name="reset_deletion_protection_enabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetDeletionProtectionEnabled"></a>

```python
def reset_deletion_protection_enabled() -> None
```

##### `reset_opt_out_list_name` <a name="reset_opt_out_list_name" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetOptOutListName"></a>

```python
def reset_opt_out_list_name() -> None
```

##### `reset_self_managed_opt_outs_enabled` <a name="reset_self_managed_opt_outs_enabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetSelfManagedOptOutsEnabled"></a>

```python
def reset_self_managed_opt_outs_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_two_way_channel_arn` <a name="reset_two_way_channel_arn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayChannelArn"></a>

```python
def reset_two_way_channel_arn() -> None
```

##### `reset_two_way_channel_role` <a name="reset_two_way_channel_role" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayChannelRole"></a>

```python
def reset_two_way_channel_role() -> None
```

##### `reset_two_way_enabled` <a name="reset_two_way_enabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayEnabled"></a>

```python
def reset_two_way_enabled() -> None
```

##### `reset_two_way_media_s3_bucket_name` <a name="reset_two_way_media_s3_bucket_name" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3BucketName"></a>

```python
def reset_two_way_media_s3_bucket_name() -> None
```

##### `reset_two_way_media_s3_key_prefix` <a name="reset_two_way_media_s3_key_prefix" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3KeyPrefix"></a>

```python
def reset_two_way_media_s3_key_prefix() -> None
```

##### `reset_two_way_media_s3_role` <a name="reset_two_way_media_s3_role" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3Role"></a>

```python
def reset_two_way_media_s3_role() -> None
```

##### `reset_two_way_rcs_events_enabled` <a name="reset_two_way_rcs_events_enabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayRcsEventsEnabled"></a>

```python
def reset_two_way_rcs_events_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SmsvoiceRcsAgent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isConstruct"></a>

```python
from cdktn_provider_awscc import smsvoice_rcs_agent

smsvoiceRcsAgent.SmsvoiceRcsAgent.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformElement"></a>

```python
from cdktn_provider_awscc import smsvoice_rcs_agent

smsvoiceRcsAgent.SmsvoiceRcsAgent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformResource"></a>

```python
from cdktn_provider_awscc import smsvoice_rcs_agent

smsvoiceRcsAgent.SmsvoiceRcsAgent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import smsvoice_rcs_agent

smsvoiceRcsAgent.SmsvoiceRcsAgent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SmsvoiceRcsAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SmsvoiceRcsAgent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SmsvoiceRcsAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceRcsAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.poolId">pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.rcsAgentArn">rcs_agent_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.rcsAgentId">rcs_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList">SmsvoiceRcsAgentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.testingAgent">testing_agent</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference">SmsvoiceRcsAgentTestingAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.deletionProtectionEnabledInput">deletion_protection_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.optOutListNameInput">opt_out_list_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.selfManagedOptOutsEnabledInput">self_managed_opt_outs_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelArnInput">two_way_channel_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelRoleInput">two_way_channel_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayEnabledInput">two_way_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3BucketNameInput">two_way_media_s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefixInput">two_way_media_s3_key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3RoleInput">two_way_media_s3_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayRcsEventsEnabledInput">two_way_rcs_events_enabled_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.optOutListName">opt_out_list_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.selfManagedOptOutsEnabled">self_managed_opt_outs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelArn">two_way_channel_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelRole">two_way_channel_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayEnabled">two_way_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3BucketName">two_way_media_s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefix">two_way_media_s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3Role">two_way_media_s3_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayRcsEventsEnabled">two_way_rcs_events_enabled</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

---

##### `rcs_agent_arn`<sup>Required</sup> <a name="rcs_agent_arn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.rcsAgentArn"></a>

```python
rcs_agent_arn: str
```

- *Type:* str

---

##### `rcs_agent_id`<sup>Required</sup> <a name="rcs_agent_id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.rcsAgentId"></a>

```python
rcs_agent_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tags"></a>

```python
tags: SmsvoiceRcsAgentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList">SmsvoiceRcsAgentTagsList</a>

---

##### `testing_agent`<sup>Required</sup> <a name="testing_agent" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.testingAgent"></a>

```python
testing_agent: SmsvoiceRcsAgentTestingAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference">SmsvoiceRcsAgentTestingAgentOutputReference</a>

---

##### `deletion_protection_enabled_input`<sup>Optional</sup> <a name="deletion_protection_enabled_input" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.deletionProtectionEnabledInput"></a>

```python
deletion_protection_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `opt_out_list_name_input`<sup>Optional</sup> <a name="opt_out_list_name_input" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.optOutListNameInput"></a>

```python
opt_out_list_name_input: str
```

- *Type:* str

---

##### `self_managed_opt_outs_enabled_input`<sup>Optional</sup> <a name="self_managed_opt_outs_enabled_input" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.selfManagedOptOutsEnabledInput"></a>

```python
self_managed_opt_outs_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SmsvoiceRcsAgentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>]

---

##### `two_way_channel_arn_input`<sup>Optional</sup> <a name="two_way_channel_arn_input" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelArnInput"></a>

```python
two_way_channel_arn_input: str
```

- *Type:* str

---

##### `two_way_channel_role_input`<sup>Optional</sup> <a name="two_way_channel_role_input" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelRoleInput"></a>

```python
two_way_channel_role_input: str
```

- *Type:* str

---

##### `two_way_enabled_input`<sup>Optional</sup> <a name="two_way_enabled_input" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayEnabledInput"></a>

```python
two_way_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `two_way_media_s3_bucket_name_input`<sup>Optional</sup> <a name="two_way_media_s3_bucket_name_input" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3BucketNameInput"></a>

```python
two_way_media_s3_bucket_name_input: str
```

- *Type:* str

---

##### `two_way_media_s3_key_prefix_input`<sup>Optional</sup> <a name="two_way_media_s3_key_prefix_input" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefixInput"></a>

```python
two_way_media_s3_key_prefix_input: str
```

- *Type:* str

---

##### `two_way_media_s3_role_input`<sup>Optional</sup> <a name="two_way_media_s3_role_input" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3RoleInput"></a>

```python
two_way_media_s3_role_input: str
```

- *Type:* str

---

##### `two_way_rcs_events_enabled_input`<sup>Optional</sup> <a name="two_way_rcs_events_enabled_input" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayRcsEventsEnabledInput"></a>

```python
two_way_rcs_events_enabled_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_protection_enabled`<sup>Required</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `opt_out_list_name`<sup>Required</sup> <a name="opt_out_list_name" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.optOutListName"></a>

```python
opt_out_list_name: str
```

- *Type:* str

---

##### `self_managed_opt_outs_enabled`<sup>Required</sup> <a name="self_managed_opt_outs_enabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.selfManagedOptOutsEnabled"></a>

```python
self_managed_opt_outs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `two_way_channel_arn`<sup>Required</sup> <a name="two_way_channel_arn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelArn"></a>

```python
two_way_channel_arn: str
```

- *Type:* str

---

##### `two_way_channel_role`<sup>Required</sup> <a name="two_way_channel_role" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelRole"></a>

```python
two_way_channel_role: str
```

- *Type:* str

---

##### `two_way_enabled`<sup>Required</sup> <a name="two_way_enabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayEnabled"></a>

```python
two_way_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `two_way_media_s3_bucket_name`<sup>Required</sup> <a name="two_way_media_s3_bucket_name" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3BucketName"></a>

```python
two_way_media_s3_bucket_name: str
```

- *Type:* str

---

##### `two_way_media_s3_key_prefix`<sup>Required</sup> <a name="two_way_media_s3_key_prefix" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefix"></a>

```python
two_way_media_s3_key_prefix: str
```

- *Type:* str

---

##### `two_way_media_s3_role`<sup>Required</sup> <a name="two_way_media_s3_role" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3Role"></a>

```python
two_way_media_s3_role: str
```

- *Type:* str

---

##### `two_way_rcs_events_enabled`<sup>Required</sup> <a name="two_way_rcs_events_enabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayRcsEventsEnabled"></a>

```python
two_way_rcs_events_enabled: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceRcsAgentConfig <a name="SmsvoiceRcsAgentConfig" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_rcs_agent

smsvoiceRcsAgent.SmsvoiceRcsAgentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  deletion_protection_enabled: bool | IResolvable = None,
  opt_out_list_name: str = None,
  self_managed_opt_outs_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[SmsvoiceRcsAgentTags] = None,
  two_way_channel_arn: str = None,
  two_way_channel_role: str = None,
  two_way_enabled: bool | IResolvable = None,
  two_way_media_s3_bucket_name: str = None,
  two_way_media_s3_key_prefix: str = None,
  two_way_media_s3_role: str = None,
  two_way_rcs_events_enabled: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true the RCS agent can't be deleted. By default this is false. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.optOutListName">opt_out_list_name</a></code> | <code>str</code> | The name of the opt-out list associated with the RCS agent. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.selfManagedOptOutsEnabled">self_managed_opt_outs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true you're responsible for responding to HELP and STOP requests, and for tracking and honoring opt-out requests. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>]</code> | An array of key-value pairs to apply to the RCS agent. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayChannelArn">two_way_channel_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the two way channel where inbound messages are delivered. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayChannelRole">two_way_channel_role</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAM role for the service to assume in order to post inbound messages to the two way channel. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayEnabled">two_way_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true two-way messaging is enabled for the RCS agent. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3BucketName">two_way_media_s3_bucket_name</a></code> | <code>str</code> | The name of the Amazon S3 bucket where inbound RCS media objects are written. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3KeyPrefix">two_way_media_s3_key_prefix</a></code> | <code>str</code> | The key prefix used for inbound RCS media objects in the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3Role">two_way_media_s3_role</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM role used to write inbound RCS media files to the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayRcsEventsEnabled">two_way_rcs_events_enabled</a></code> | <code>typing.List[str]</code> | The list of RCS event types enabled for two-way messaging. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to true the RCS agent can't be deleted. By default this is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#deletion_protection_enabled SmsvoiceRcsAgent#deletion_protection_enabled}

---

##### `opt_out_list_name`<sup>Optional</sup> <a name="opt_out_list_name" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.optOutListName"></a>

```python
opt_out_list_name: str
```

- *Type:* str

The name of the opt-out list associated with the RCS agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#opt_out_list_name SmsvoiceRcsAgent#opt_out_list_name}

---

##### `self_managed_opt_outs_enabled`<sup>Optional</sup> <a name="self_managed_opt_outs_enabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.selfManagedOptOutsEnabled"></a>

```python
self_managed_opt_outs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to true you're responsible for responding to HELP and STOP requests, and for tracking and honoring opt-out requests.

By default this is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#self_managed_opt_outs_enabled SmsvoiceRcsAgent#self_managed_opt_outs_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SmsvoiceRcsAgentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>]

An array of key-value pairs to apply to the RCS agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#tags SmsvoiceRcsAgent#tags}

---

##### `two_way_channel_arn`<sup>Optional</sup> <a name="two_way_channel_arn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayChannelArn"></a>

```python
two_way_channel_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the two way channel where inbound messages are delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_channel_arn SmsvoiceRcsAgent#two_way_channel_arn}

---

##### `two_way_channel_role`<sup>Optional</sup> <a name="two_way_channel_role" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayChannelRole"></a>

```python
two_way_channel_role: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an IAM role for the service to assume in order to post inbound messages to the two way channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_channel_role SmsvoiceRcsAgent#two_way_channel_role}

---

##### `two_way_enabled`<sup>Optional</sup> <a name="two_way_enabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayEnabled"></a>

```python
two_way_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to true two-way messaging is enabled for the RCS agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_enabled SmsvoiceRcsAgent#two_way_enabled}

---

##### `two_way_media_s3_bucket_name`<sup>Optional</sup> <a name="two_way_media_s3_bucket_name" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3BucketName"></a>

```python
two_way_media_s3_bucket_name: str
```

- *Type:* str

The name of the Amazon S3 bucket where inbound RCS media objects are written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_bucket_name SmsvoiceRcsAgent#two_way_media_s3_bucket_name}

---

##### `two_way_media_s3_key_prefix`<sup>Optional</sup> <a name="two_way_media_s3_key_prefix" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3KeyPrefix"></a>

```python
two_way_media_s3_key_prefix: str
```

- *Type:* str

The key prefix used for inbound RCS media objects in the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_key_prefix SmsvoiceRcsAgent#two_way_media_s3_key_prefix}

---

##### `two_way_media_s3_role`<sup>Optional</sup> <a name="two_way_media_s3_role" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3Role"></a>

```python
two_way_media_s3_role: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the IAM role used to write inbound RCS media files to the Amazon S3 bucket.

The role must have s3:PutObject permission on the bucket and a trust policy allowing sms-voice.amazonaws.com to assume it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_role SmsvoiceRcsAgent#two_way_media_s3_role}

---

##### `two_way_rcs_events_enabled`<sup>Optional</sup> <a name="two_way_rcs_events_enabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayRcsEventsEnabled"></a>

```python
two_way_rcs_events_enabled: typing.List[str]
```

- *Type:* typing.List[str]

The list of RCS event types enabled for two-way messaging.

An empty list disables all event types. The special value ALL enables all current and future event types and must be the only element if used. Requires TwoWayEnabled to be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_rcs_events_enabled SmsvoiceRcsAgent#two_way_rcs_events_enabled}

---

### SmsvoiceRcsAgentTags <a name="SmsvoiceRcsAgentTags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_rcs_agent

smsvoiceRcsAgent.SmsvoiceRcsAgentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#key SmsvoiceRcsAgent#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#value SmsvoiceRcsAgent#value}

---

### SmsvoiceRcsAgentTestingAgent <a name="SmsvoiceRcsAgentTestingAgent" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgent.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_rcs_agent

smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgent()
```


## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceRcsAgentTagsList <a name="SmsvoiceRcsAgentTagsList" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_rcs_agent

smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SmsvoiceRcsAgentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SmsvoiceRcsAgentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>]

---


### SmsvoiceRcsAgentTagsOutputReference <a name="SmsvoiceRcsAgentTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_rcs_agent

smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SmsvoiceRcsAgentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags">SmsvoiceRcsAgentTags</a>

---


### SmsvoiceRcsAgentTestingAgentOutputReference <a name="SmsvoiceRcsAgentTestingAgentOutputReference" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_rcs_agent

smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.registrationId">registration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentId">testing_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentStatus">testing_agent_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgent">SmsvoiceRcsAgentTestingAgent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `registration_id`<sup>Required</sup> <a name="registration_id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.registrationId"></a>

```python
registration_id: str
```

- *Type:* str

---

##### `testing_agent_id`<sup>Required</sup> <a name="testing_agent_id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentId"></a>

```python
testing_agent_id: str
```

- *Type:* str

---

##### `testing_agent_status`<sup>Required</sup> <a name="testing_agent_status" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentStatus"></a>

```python
testing_agent_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.internalValue"></a>

```python
internal_value: SmsvoiceRcsAgentTestingAgent
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgent">SmsvoiceRcsAgentTestingAgent</a>

---



