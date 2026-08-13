# `smsvoicePhoneNumber` Submodule <a name="`smsvoicePhoneNumber` Submodule" id="@cdktn/provider-awscc.smsvoicePhoneNumber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoicePhoneNumber <a name="SmsvoicePhoneNumber" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number awscc_smsvoice_phone_number}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_phone_number

smsvoicePhoneNumber.SmsvoicePhoneNumber(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  iso_country_code: str,
  mandatory_keywords: SmsvoicePhoneNumberMandatoryKeywords,
  number_capabilities: typing.List[str],
  number_type: str,
  deletion_protection_enabled: bool | IResolvable = None,
  optional_keywords: IResolvable | typing.List[SmsvoicePhoneNumberOptionalKeywords] = None,
  opt_out_list_name: str = None,
  self_managed_opt_outs_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[SmsvoicePhoneNumberTags] = None,
  two_way: SmsvoicePhoneNumberTwoWay = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.isoCountryCode">iso_country_code</a></code> | <code>str</code> | The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.mandatoryKeywords">mandatory_keywords</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a></code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.numberCapabilities">number_capabilities</a></code> | <code>typing.List[str]</code> | Indicates if the phone number will be used for text messages, voice messages, or both. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.numberType">number_type</a></code> | <code>str</code> | The type of phone number to request. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true the sender ID can't be deleted. By default this is set to false. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.optionalKeywords">optional_keywords</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>]</code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.optOutListName">opt_out_list_name</a></code> | <code>str</code> | The name of the OptOutList to associate with the phone number. You can use the OptOutListName or OptOutListArn. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.selfManagedOptOutsEnabled">self_managed_opt_outs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | By default this is set to false. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.twoWay">two_way</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a></code> | When you set up two-way SMS, you can receive incoming messages from your customers. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `iso_country_code`<sup>Required</sup> <a name="iso_country_code" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.isoCountryCode"></a>

- *Type:* str

The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#iso_country_code SmsvoicePhoneNumber#iso_country_code}

---

##### `mandatory_keywords`<sup>Required</sup> <a name="mandatory_keywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.mandatoryKeywords"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#mandatory_keywords SmsvoicePhoneNumber#mandatory_keywords}

---

##### `number_capabilities`<sup>Required</sup> <a name="number_capabilities" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.numberCapabilities"></a>

- *Type:* typing.List[str]

Indicates if the phone number will be used for text messages, voice messages, or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#number_capabilities SmsvoicePhoneNumber#number_capabilities}

---

##### `number_type`<sup>Required</sup> <a name="number_type" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.numberType"></a>

- *Type:* str

The type of phone number to request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#number_type SmsvoicePhoneNumber#number_type}

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* bool | cdktn.IResolvable

When set to true the sender ID can't be deleted. By default this is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#deletion_protection_enabled SmsvoicePhoneNumber#deletion_protection_enabled}

---

##### `optional_keywords`<sup>Optional</sup> <a name="optional_keywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.optionalKeywords"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>]

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#optional_keywords SmsvoicePhoneNumber#optional_keywords}

---

##### `opt_out_list_name`<sup>Optional</sup> <a name="opt_out_list_name" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.optOutListName"></a>

- *Type:* str

The name of the OptOutList to associate with the phone number. You can use the OptOutListName or OptOutListArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#opt_out_list_name SmsvoicePhoneNumber#opt_out_list_name}

---

##### `self_managed_opt_outs_enabled`<sup>Optional</sup> <a name="self_managed_opt_outs_enabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.selfManagedOptOutsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

By default this is set to false.

When an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, AWS End User Messaging SMS and Voice automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#self_managed_opt_outs_enabled SmsvoicePhoneNumber#self_managed_opt_outs_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#tags SmsvoicePhoneNumber#tags}

---

##### `two_way`<sup>Optional</sup> <a name="two_way" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.Initializer.parameter.twoWay"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a>

When you set up two-way SMS, you can receive incoming messages from your customers.

When one of your customers sends a message to your phone number, the message body is sent to an Amazon SNS topic or Amazon Connect for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#two_way SmsvoicePhoneNumber#two_way}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putMandatoryKeywords">put_mandatory_keywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putOptionalKeywords">put_optional_keywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTwoWay">put_two_way</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetDeletionProtectionEnabled">reset_deletion_protection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOptionalKeywords">reset_optional_keywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOptOutListName">reset_opt_out_list_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetSelfManagedOptOutsEnabled">reset_self_managed_opt_outs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetTwoWay">reset_two_way</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_mandatory_keywords` <a name="put_mandatory_keywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putMandatoryKeywords"></a>

```python
def put_mandatory_keywords(
  help: SmsvoicePhoneNumberMandatoryKeywordsHelp,
  stop: SmsvoicePhoneNumberMandatoryKeywordsStop
) -> None
```

###### `help`<sup>Required</sup> <a name="help" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putMandatoryKeywords.parameter.help"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#help SmsvoicePhoneNumber#help}

---

###### `stop`<sup>Required</sup> <a name="stop" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putMandatoryKeywords.parameter.stop"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#stop SmsvoicePhoneNumber#stop}

---

##### `put_optional_keywords` <a name="put_optional_keywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putOptionalKeywords"></a>

```python
def put_optional_keywords(
  value: IResolvable | typing.List[SmsvoicePhoneNumberOptionalKeywords]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putOptionalKeywords.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SmsvoicePhoneNumberTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>]

---

##### `put_two_way` <a name="put_two_way" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTwoWay"></a>

```python
def put_two_way(
  channel_arn: str = None,
  channel_role: str = None,
  enabled: bool | IResolvable = None
) -> None
```

###### `channel_arn`<sup>Optional</sup> <a name="channel_arn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTwoWay.parameter.channelArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the two way channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#channel_arn SmsvoicePhoneNumber#channel_arn}

---

###### `channel_role`<sup>Optional</sup> <a name="channel_role" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTwoWay.parameter.channelRole"></a>

- *Type:* str

An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#channel_role SmsvoicePhoneNumber#channel_role}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.putTwoWay.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

By default this is set to false.

When set to true you can receive incoming text messages from your end recipients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#enabled SmsvoicePhoneNumber#enabled}

---

##### `reset_deletion_protection_enabled` <a name="reset_deletion_protection_enabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetDeletionProtectionEnabled"></a>

```python
def reset_deletion_protection_enabled() -> None
```

##### `reset_optional_keywords` <a name="reset_optional_keywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOptionalKeywords"></a>

```python
def reset_optional_keywords() -> None
```

##### `reset_opt_out_list_name` <a name="reset_opt_out_list_name" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetOptOutListName"></a>

```python
def reset_opt_out_list_name() -> None
```

##### `reset_self_managed_opt_outs_enabled` <a name="reset_self_managed_opt_outs_enabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetSelfManagedOptOutsEnabled"></a>

```python
def reset_self_managed_opt_outs_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_two_way` <a name="reset_two_way" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.resetTwoWay"></a>

```python
def reset_two_way() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SmsvoicePhoneNumber resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isConstruct"></a>

```python
from cdktn_provider_awscc import smsvoice_phone_number

smsvoicePhoneNumber.SmsvoicePhoneNumber.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformElement"></a>

```python
from cdktn_provider_awscc import smsvoice_phone_number

smsvoicePhoneNumber.SmsvoicePhoneNumber.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformResource"></a>

```python
from cdktn_provider_awscc import smsvoice_phone_number

smsvoicePhoneNumber.SmsvoicePhoneNumber.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import smsvoice_phone_number

smsvoicePhoneNumber.SmsvoicePhoneNumber.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SmsvoicePhoneNumber resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SmsvoicePhoneNumber to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SmsvoicePhoneNumber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoicePhoneNumber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.mandatoryKeywords">mandatory_keywords</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference">SmsvoicePhoneNumberMandatoryKeywordsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optionalKeywords">optional_keywords</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList">SmsvoicePhoneNumberOptionalKeywordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.phoneNumberId">phone_number_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList">SmsvoicePhoneNumberTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.twoWay">two_way</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference">SmsvoicePhoneNumberTwoWayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.deletionProtectionEnabledInput">deletion_protection_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.isoCountryCodeInput">iso_country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.mandatoryKeywordsInput">mandatory_keywords_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberCapabilitiesInput">number_capabilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberTypeInput">number_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optionalKeywordsInput">optional_keywords_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optOutListNameInput">opt_out_list_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.selfManagedOptOutsEnabledInput">self_managed_opt_outs_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.twoWayInput">two_way_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.isoCountryCode">iso_country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberCapabilities">number_capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberType">number_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optOutListName">opt_out_list_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.selfManagedOptOutsEnabled">self_managed_opt_outs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mandatory_keywords`<sup>Required</sup> <a name="mandatory_keywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.mandatoryKeywords"></a>

```python
mandatory_keywords: SmsvoicePhoneNumberMandatoryKeywordsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference">SmsvoicePhoneNumberMandatoryKeywordsOutputReference</a>

---

##### `optional_keywords`<sup>Required</sup> <a name="optional_keywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optionalKeywords"></a>

```python
optional_keywords: SmsvoicePhoneNumberOptionalKeywordsList
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList">SmsvoicePhoneNumberOptionalKeywordsList</a>

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `phone_number_id`<sup>Required</sup> <a name="phone_number_id" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.phoneNumberId"></a>

```python
phone_number_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tags"></a>

```python
tags: SmsvoicePhoneNumberTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList">SmsvoicePhoneNumberTagsList</a>

---

##### `two_way`<sup>Required</sup> <a name="two_way" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.twoWay"></a>

```python
two_way: SmsvoicePhoneNumberTwoWayOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference">SmsvoicePhoneNumberTwoWayOutputReference</a>

---

##### `deletion_protection_enabled_input`<sup>Optional</sup> <a name="deletion_protection_enabled_input" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.deletionProtectionEnabledInput"></a>

```python
deletion_protection_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iso_country_code_input`<sup>Optional</sup> <a name="iso_country_code_input" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.isoCountryCodeInput"></a>

```python
iso_country_code_input: str
```

- *Type:* str

---

##### `mandatory_keywords_input`<sup>Optional</sup> <a name="mandatory_keywords_input" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.mandatoryKeywordsInput"></a>

```python
mandatory_keywords_input: IResolvable | SmsvoicePhoneNumberMandatoryKeywords
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a>

---

##### `number_capabilities_input`<sup>Optional</sup> <a name="number_capabilities_input" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberCapabilitiesInput"></a>

```python
number_capabilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `number_type_input`<sup>Optional</sup> <a name="number_type_input" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberTypeInput"></a>

```python
number_type_input: str
```

- *Type:* str

---

##### `optional_keywords_input`<sup>Optional</sup> <a name="optional_keywords_input" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optionalKeywordsInput"></a>

```python
optional_keywords_input: IResolvable | typing.List[SmsvoicePhoneNumberOptionalKeywords]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>]

---

##### `opt_out_list_name_input`<sup>Optional</sup> <a name="opt_out_list_name_input" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optOutListNameInput"></a>

```python
opt_out_list_name_input: str
```

- *Type:* str

---

##### `self_managed_opt_outs_enabled_input`<sup>Optional</sup> <a name="self_managed_opt_outs_enabled_input" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.selfManagedOptOutsEnabledInput"></a>

```python
self_managed_opt_outs_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SmsvoicePhoneNumberTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>]

---

##### `two_way_input`<sup>Optional</sup> <a name="two_way_input" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.twoWayInput"></a>

```python
two_way_input: IResolvable | SmsvoicePhoneNumberTwoWay
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a>

---

##### `deletion_protection_enabled`<sup>Required</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iso_country_code`<sup>Required</sup> <a name="iso_country_code" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.isoCountryCode"></a>

```python
iso_country_code: str
```

- *Type:* str

---

##### `number_capabilities`<sup>Required</sup> <a name="number_capabilities" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberCapabilities"></a>

```python
number_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `number_type`<sup>Required</sup> <a name="number_type" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.numberType"></a>

```python
number_type: str
```

- *Type:* str

---

##### `opt_out_list_name`<sup>Required</sup> <a name="opt_out_list_name" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.optOutListName"></a>

```python
opt_out_list_name: str
```

- *Type:* str

---

##### `self_managed_opt_outs_enabled`<sup>Required</sup> <a name="self_managed_opt_outs_enabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.selfManagedOptOutsEnabled"></a>

```python
self_managed_opt_outs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumber.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoicePhoneNumberConfig <a name="SmsvoicePhoneNumberConfig" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_phone_number

smsvoicePhoneNumber.SmsvoicePhoneNumberConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  iso_country_code: str,
  mandatory_keywords: SmsvoicePhoneNumberMandatoryKeywords,
  number_capabilities: typing.List[str],
  number_type: str,
  deletion_protection_enabled: bool | IResolvable = None,
  optional_keywords: IResolvable | typing.List[SmsvoicePhoneNumberOptionalKeywords] = None,
  opt_out_list_name: str = None,
  self_managed_opt_outs_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[SmsvoicePhoneNumberTags] = None,
  two_way: SmsvoicePhoneNumberTwoWay = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.isoCountryCode">iso_country_code</a></code> | <code>str</code> | The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.mandatoryKeywords">mandatory_keywords</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a></code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.numberCapabilities">number_capabilities</a></code> | <code>typing.List[str]</code> | Indicates if the phone number will be used for text messages, voice messages, or both. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.numberType">number_type</a></code> | <code>str</code> | The type of phone number to request. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true the sender ID can't be deleted. By default this is set to false. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.optionalKeywords">optional_keywords</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>]</code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.optOutListName">opt_out_list_name</a></code> | <code>str</code> | The name of the OptOutList to associate with the phone number. You can use the OptOutListName or OptOutListArn. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.selfManagedOptOutsEnabled">self_managed_opt_outs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | By default this is set to false. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.twoWay">two_way</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a></code> | When you set up two-way SMS, you can receive incoming messages from your customers. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `iso_country_code`<sup>Required</sup> <a name="iso_country_code" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.isoCountryCode"></a>

```python
iso_country_code: str
```

- *Type:* str

The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#iso_country_code SmsvoicePhoneNumber#iso_country_code}

---

##### `mandatory_keywords`<sup>Required</sup> <a name="mandatory_keywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.mandatoryKeywords"></a>

```python
mandatory_keywords: SmsvoicePhoneNumberMandatoryKeywords
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#mandatory_keywords SmsvoicePhoneNumber#mandatory_keywords}

---

##### `number_capabilities`<sup>Required</sup> <a name="number_capabilities" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.numberCapabilities"></a>

```python
number_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

Indicates if the phone number will be used for text messages, voice messages, or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#number_capabilities SmsvoicePhoneNumber#number_capabilities}

---

##### `number_type`<sup>Required</sup> <a name="number_type" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.numberType"></a>

```python
number_type: str
```

- *Type:* str

The type of phone number to request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#number_type SmsvoicePhoneNumber#number_type}

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to true the sender ID can't be deleted. By default this is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#deletion_protection_enabled SmsvoicePhoneNumber#deletion_protection_enabled}

---

##### `optional_keywords`<sup>Optional</sup> <a name="optional_keywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.optionalKeywords"></a>

```python
optional_keywords: IResolvable | typing.List[SmsvoicePhoneNumberOptionalKeywords]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>]

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#optional_keywords SmsvoicePhoneNumber#optional_keywords}

---

##### `opt_out_list_name`<sup>Optional</sup> <a name="opt_out_list_name" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.optOutListName"></a>

```python
opt_out_list_name: str
```

- *Type:* str

The name of the OptOutList to associate with the phone number. You can use the OptOutListName or OptOutListArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#opt_out_list_name SmsvoicePhoneNumber#opt_out_list_name}

---

##### `self_managed_opt_outs_enabled`<sup>Optional</sup> <a name="self_managed_opt_outs_enabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.selfManagedOptOutsEnabled"></a>

```python
self_managed_opt_outs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

By default this is set to false.

When an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, AWS End User Messaging SMS and Voice automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#self_managed_opt_outs_enabled SmsvoicePhoneNumber#self_managed_opt_outs_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SmsvoicePhoneNumberTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#tags SmsvoicePhoneNumber#tags}

---

##### `two_way`<sup>Optional</sup> <a name="two_way" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberConfig.property.twoWay"></a>

```python
two_way: SmsvoicePhoneNumberTwoWay
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a>

When you set up two-way SMS, you can receive incoming messages from your customers.

When one of your customers sends a message to your phone number, the message body is sent to an Amazon SNS topic or Amazon Connect for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#two_way SmsvoicePhoneNumber#two_way}

---

### SmsvoicePhoneNumberMandatoryKeywords <a name="SmsvoicePhoneNumberMandatoryKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_phone_number

smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords(
  help: SmsvoicePhoneNumberMandatoryKeywordsHelp,
  stop: SmsvoicePhoneNumberMandatoryKeywordsStop
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords.property.help">help</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a></code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords.property.stop">stop</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a></code> | A keyword is a word that you can search for on a particular phone number or pool. |

---

##### `help`<sup>Required</sup> <a name="help" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords.property.help"></a>

```python
help: SmsvoicePhoneNumberMandatoryKeywordsHelp
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#help SmsvoicePhoneNumber#help}

---

##### `stop`<sup>Required</sup> <a name="stop" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords.property.stop"></a>

```python
stop: SmsvoicePhoneNumberMandatoryKeywordsStop
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#stop SmsvoicePhoneNumber#stop}

---

### SmsvoicePhoneNumberMandatoryKeywordsHelp <a name="SmsvoicePhoneNumberMandatoryKeywordsHelp" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_phone_number

smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp(
  message: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp.property.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp.property.message"></a>

```python
message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}.

---

### SmsvoicePhoneNumberMandatoryKeywordsStop <a name="SmsvoicePhoneNumberMandatoryKeywordsStop" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_phone_number

smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop(
  message: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop.property.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop.property.message"></a>

```python
message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}.

---

### SmsvoicePhoneNumberOptionalKeywords <a name="SmsvoicePhoneNumberOptionalKeywords" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_phone_number

smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords(
  action: str = None,
  keyword: str = None,
  message: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#action SmsvoicePhoneNumber#action}. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.keyword">keyword</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#keyword SmsvoicePhoneNumber#keyword}. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#action SmsvoicePhoneNumber#action}.

---

##### `keyword`<sup>Optional</sup> <a name="keyword" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.keyword"></a>

```python
keyword: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#keyword SmsvoicePhoneNumber#keyword}.

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords.property.message"></a>

```python
message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}.

---

### SmsvoicePhoneNumberTags <a name="SmsvoicePhoneNumberTags" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_phone_number

smsvoicePhoneNumber.SmsvoicePhoneNumberTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#key SmsvoicePhoneNumber#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#value SmsvoicePhoneNumber#value}

---

### SmsvoicePhoneNumberTwoWay <a name="SmsvoicePhoneNumberTwoWay" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_phone_number

smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay(
  channel_arn: str = None,
  channel_role: str = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.channelArn">channel_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the two way channel. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.channelRole">channel_role</a></code> | <code>str</code> | An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | By default this is set to false. |

---

##### `channel_arn`<sup>Optional</sup> <a name="channel_arn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.channelArn"></a>

```python
channel_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the two way channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#channel_arn SmsvoicePhoneNumber#channel_arn}

---

##### `channel_role`<sup>Optional</sup> <a name="channel_role" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.channelRole"></a>

```python
channel_role: str
```

- *Type:* str

An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#channel_role SmsvoicePhoneNumber#channel_role}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

By default this is set to false.

When set to true you can receive incoming text messages from your end recipients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#enabled SmsvoicePhoneNumber#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference <a name="SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_phone_number

smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SmsvoicePhoneNumberMandatoryKeywordsHelp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a>

---


### SmsvoicePhoneNumberMandatoryKeywordsOutputReference <a name="SmsvoicePhoneNumberMandatoryKeywordsOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_phone_number

smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putHelp">put_help</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putStop">put_stop</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_help` <a name="put_help" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putHelp"></a>

```python
def put_help(
  message: str
) -> None
```

###### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putHelp.parameter.message"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}.

---

##### `put_stop` <a name="put_stop" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putStop"></a>

```python
def put_stop(
  message: str
) -> None
```

###### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.putStop.parameter.message"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.help">help</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference">SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.stop">stop</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference">SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.helpInput">help_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.stopInput">stop_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `help`<sup>Required</sup> <a name="help" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.help"></a>

```python
help: SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference">SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference</a>

---

##### `stop`<sup>Required</sup> <a name="stop" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.stop"></a>

```python
stop: SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference">SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference</a>

---

##### `help_input`<sup>Optional</sup> <a name="help_input" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.helpInput"></a>

```python
help_input: IResolvable | SmsvoicePhoneNumberMandatoryKeywordsHelp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsHelp">SmsvoicePhoneNumberMandatoryKeywordsHelp</a>

---

##### `stop_input`<sup>Optional</sup> <a name="stop_input" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.stopInput"></a>

```python
stop_input: IResolvable | SmsvoicePhoneNumberMandatoryKeywordsStop
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SmsvoicePhoneNumberMandatoryKeywords
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywords">SmsvoicePhoneNumberMandatoryKeywords</a>

---


### SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference <a name="SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_phone_number

smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SmsvoicePhoneNumberMandatoryKeywordsStop
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberMandatoryKeywordsStop">SmsvoicePhoneNumberMandatoryKeywordsStop</a>

---


### SmsvoicePhoneNumberOptionalKeywordsList <a name="SmsvoicePhoneNumberOptionalKeywordsList" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_phone_number

smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SmsvoicePhoneNumberOptionalKeywordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SmsvoicePhoneNumberOptionalKeywords]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>]

---


### SmsvoicePhoneNumberOptionalKeywordsOutputReference <a name="SmsvoicePhoneNumberOptionalKeywordsOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_phone_number

smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetKeyword">reset_keyword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetMessage">reset_message</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_keyword` <a name="reset_keyword" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetKeyword"></a>

```python
def reset_keyword() -> None
```

##### `reset_message` <a name="reset_message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.resetMessage"></a>

```python
def reset_message() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.keywordInput">keyword_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.keyword">keyword</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `keyword_input`<sup>Optional</sup> <a name="keyword_input" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.keywordInput"></a>

```python
keyword_input: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `keyword`<sup>Required</sup> <a name="keyword" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.keyword"></a>

```python
keyword: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywordsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SmsvoicePhoneNumberOptionalKeywords
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberOptionalKeywords">SmsvoicePhoneNumberOptionalKeywords</a>

---


### SmsvoicePhoneNumberTagsList <a name="SmsvoicePhoneNumberTagsList" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_phone_number

smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SmsvoicePhoneNumberTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SmsvoicePhoneNumberTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>]

---


### SmsvoicePhoneNumberTagsOutputReference <a name="SmsvoicePhoneNumberTagsOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_phone_number

smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SmsvoicePhoneNumberTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTags">SmsvoicePhoneNumberTags</a>

---


### SmsvoicePhoneNumberTwoWayOutputReference <a name="SmsvoicePhoneNumberTwoWayOutputReference" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_phone_number

smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetChannelArn">reset_channel_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetChannelRole">reset_channel_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_channel_arn` <a name="reset_channel_arn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetChannelArn"></a>

```python
def reset_channel_arn() -> None
```

##### `reset_channel_role` <a name="reset_channel_role" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetChannelRole"></a>

```python
def reset_channel_role() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelArnInput">channel_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelRoleInput">channel_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelArn">channel_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelRole">channel_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_arn_input`<sup>Optional</sup> <a name="channel_arn_input" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelArnInput"></a>

```python
channel_arn_input: str
```

- *Type:* str

---

##### `channel_role_input`<sup>Optional</sup> <a name="channel_role_input" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelRoleInput"></a>

```python
channel_role_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `channel_arn`<sup>Required</sup> <a name="channel_arn" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelArn"></a>

```python
channel_arn: str
```

- *Type:* str

---

##### `channel_role`<sup>Required</sup> <a name="channel_role" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.channelRole"></a>

```python
channel_role: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWayOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SmsvoicePhoneNumberTwoWay
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePhoneNumber.SmsvoicePhoneNumberTwoWay">SmsvoicePhoneNumberTwoWay</a>

---



