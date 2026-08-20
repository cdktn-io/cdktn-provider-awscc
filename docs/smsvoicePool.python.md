# `smsvoicePool` Submodule <a name="`smsvoicePool` Submodule" id="@cdktn/provider-awscc.smsvoicePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoicePool <a name="SmsvoicePool" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool awscc_smsvoice_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_pool

smsvoicePool.SmsvoicePool(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mandatory_keywords: SmsvoicePoolMandatoryKeywords,
  origination_identities: typing.List[str],
  deletion_protection_enabled: bool | IResolvable = None,
  optional_keywords: IResolvable | typing.List[SmsvoicePoolOptionalKeywords] = None,
  opt_out_list_name: str = None,
  self_managed_opt_outs_enabled: bool | IResolvable = None,
  shared_routes_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[SmsvoicePoolTags] = None,
  two_way: SmsvoicePoolTwoWay = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.mandatoryKeywords">mandatory_keywords</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords">SmsvoicePoolMandatoryKeywords</a></code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.originationIdentities">origination_identities</a></code> | <code>typing.List[str]</code> | The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn and it's IsoCountryCode. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true the pool can't be deleted. By default this is set to false. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.optionalKeywords">optional_keywords</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords">SmsvoicePoolOptionalKeywords</a>]</code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.optOutListName">opt_out_list_name</a></code> | <code>str</code> | The name of the OptOutList to associate with the pool. You can use the OptOutListName or OptOutListArn. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.selfManagedOptOutsEnabled">self_managed_opt_outs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | By default this is set to false. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.sharedRoutesEnabled">shared_routes_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether shared routes are enabled for the pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags">SmsvoicePoolTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.twoWay">two_way</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay">SmsvoicePoolTwoWay</a></code> | When you set up two-way SMS, you can receive incoming messages from your customers. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mandatory_keywords`<sup>Required</sup> <a name="mandatory_keywords" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.mandatoryKeywords"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords">SmsvoicePoolMandatoryKeywords</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#mandatory_keywords SmsvoicePool#mandatory_keywords}

---

##### `origination_identities`<sup>Required</sup> <a name="origination_identities" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.originationIdentities"></a>

- *Type:* typing.List[str]

The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn and it's IsoCountryCode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#origination_identities SmsvoicePool#origination_identities}

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* bool | cdktn.IResolvable

When set to true the pool can't be deleted. By default this is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#deletion_protection_enabled SmsvoicePool#deletion_protection_enabled}

---

##### `optional_keywords`<sup>Optional</sup> <a name="optional_keywords" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.optionalKeywords"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords">SmsvoicePoolOptionalKeywords</a>]

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#optional_keywords SmsvoicePool#optional_keywords}

---

##### `opt_out_list_name`<sup>Optional</sup> <a name="opt_out_list_name" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.optOutListName"></a>

- *Type:* str

The name of the OptOutList to associate with the pool. You can use the OptOutListName or OptOutListArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#opt_out_list_name SmsvoicePool#opt_out_list_name}

---

##### `self_managed_opt_outs_enabled`<sup>Optional</sup> <a name="self_managed_opt_outs_enabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.selfManagedOptOutsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

By default this is set to false.

When an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, AWS End User Messaging SMS and Voice automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#self_managed_opt_outs_enabled SmsvoicePool#self_managed_opt_outs_enabled}

---

##### `shared_routes_enabled`<sup>Optional</sup> <a name="shared_routes_enabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.sharedRoutesEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether shared routes are enabled for the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#shared_routes_enabled SmsvoicePool#shared_routes_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags">SmsvoicePoolTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#tags SmsvoicePool#tags}

---

##### `two_way`<sup>Optional</sup> <a name="two_way" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.Initializer.parameter.twoWay"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay">SmsvoicePoolTwoWay</a>

When you set up two-way SMS, you can receive incoming messages from your customers.

When one of your customers sends a message to your phone number, the message body is sent to an Amazon SNS topic or Amazon Connect for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#two_way SmsvoicePool#two_way}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putMandatoryKeywords">put_mandatory_keywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putOptionalKeywords">put_optional_keywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putTwoWay">put_two_way</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetDeletionProtectionEnabled">reset_deletion_protection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetOptionalKeywords">reset_optional_keywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetOptOutListName">reset_opt_out_list_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetSelfManagedOptOutsEnabled">reset_self_managed_opt_outs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetSharedRoutesEnabled">reset_shared_routes_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetTwoWay">reset_two_way</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_mandatory_keywords` <a name="put_mandatory_keywords" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putMandatoryKeywords"></a>

```python
def put_mandatory_keywords(
  help: SmsvoicePoolMandatoryKeywordsHelp,
  stop: SmsvoicePoolMandatoryKeywordsStop
) -> None
```

###### `help`<sup>Required</sup> <a name="help" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putMandatoryKeywords.parameter.help"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp">SmsvoicePoolMandatoryKeywordsHelp</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#help SmsvoicePool#help}

---

###### `stop`<sup>Required</sup> <a name="stop" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putMandatoryKeywords.parameter.stop"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStop">SmsvoicePoolMandatoryKeywordsStop</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#stop SmsvoicePool#stop}

---

##### `put_optional_keywords` <a name="put_optional_keywords" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putOptionalKeywords"></a>

```python
def put_optional_keywords(
  value: IResolvable | typing.List[SmsvoicePoolOptionalKeywords]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putOptionalKeywords.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords">SmsvoicePoolOptionalKeywords</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SmsvoicePoolTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags">SmsvoicePoolTags</a>]

---

##### `put_two_way` <a name="put_two_way" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putTwoWay"></a>

```python
def put_two_way(
  channel_arn: str = None,
  channel_role: str = None,
  enabled: bool | IResolvable = None
) -> None
```

###### `channel_arn`<sup>Optional</sup> <a name="channel_arn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putTwoWay.parameter.channelArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the two way channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#channel_arn SmsvoicePool#channel_arn}

---

###### `channel_role`<sup>Optional</sup> <a name="channel_role" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putTwoWay.parameter.channelRole"></a>

- *Type:* str

An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#channel_role SmsvoicePool#channel_role}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.putTwoWay.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

By default this is set to false.

When set to true you can receive incoming text messages from your end recipients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#enabled SmsvoicePool#enabled}

---

##### `reset_deletion_protection_enabled` <a name="reset_deletion_protection_enabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetDeletionProtectionEnabled"></a>

```python
def reset_deletion_protection_enabled() -> None
```

##### `reset_optional_keywords` <a name="reset_optional_keywords" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetOptionalKeywords"></a>

```python
def reset_optional_keywords() -> None
```

##### `reset_opt_out_list_name` <a name="reset_opt_out_list_name" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetOptOutListName"></a>

```python
def reset_opt_out_list_name() -> None
```

##### `reset_self_managed_opt_outs_enabled` <a name="reset_self_managed_opt_outs_enabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetSelfManagedOptOutsEnabled"></a>

```python
def reset_self_managed_opt_outs_enabled() -> None
```

##### `reset_shared_routes_enabled` <a name="reset_shared_routes_enabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetSharedRoutesEnabled"></a>

```python
def reset_shared_routes_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_two_way` <a name="reset_two_way" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.resetTwoWay"></a>

```python
def reset_two_way() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SmsvoicePool resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.isConstruct"></a>

```python
from cdktn_provider_awscc import smsvoice_pool

smsvoicePool.SmsvoicePool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.isTerraformElement"></a>

```python
from cdktn_provider_awscc import smsvoice_pool

smsvoicePool.SmsvoicePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.isTerraformResource"></a>

```python
from cdktn_provider_awscc import smsvoice_pool

smsvoicePool.SmsvoicePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import smsvoice_pool

smsvoicePool.SmsvoicePool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SmsvoicePool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SmsvoicePool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SmsvoicePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoicePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.mandatoryKeywords">mandatory_keywords</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference">SmsvoicePoolMandatoryKeywordsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.optionalKeywords">optional_keywords</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList">SmsvoicePoolOptionalKeywordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.poolId">pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList">SmsvoicePoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.twoWay">two_way</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference">SmsvoicePoolTwoWayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.deletionProtectionEnabledInput">deletion_protection_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.mandatoryKeywordsInput">mandatory_keywords_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords">SmsvoicePoolMandatoryKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.optionalKeywordsInput">optional_keywords_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords">SmsvoicePoolOptionalKeywords</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.optOutListNameInput">opt_out_list_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.originationIdentitiesInput">origination_identities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.selfManagedOptOutsEnabledInput">self_managed_opt_outs_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.sharedRoutesEnabledInput">shared_routes_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags">SmsvoicePoolTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.twoWayInput">two_way_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay">SmsvoicePoolTwoWay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.optOutListName">opt_out_list_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.originationIdentities">origination_identities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.selfManagedOptOutsEnabled">self_managed_opt_outs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.sharedRoutesEnabled">shared_routes_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mandatory_keywords`<sup>Required</sup> <a name="mandatory_keywords" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.mandatoryKeywords"></a>

```python
mandatory_keywords: SmsvoicePoolMandatoryKeywordsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference">SmsvoicePoolMandatoryKeywordsOutputReference</a>

---

##### `optional_keywords`<sup>Required</sup> <a name="optional_keywords" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.optionalKeywords"></a>

```python
optional_keywords: SmsvoicePoolOptionalKeywordsList
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList">SmsvoicePoolOptionalKeywordsList</a>

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.tags"></a>

```python
tags: SmsvoicePoolTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList">SmsvoicePoolTagsList</a>

---

##### `two_way`<sup>Required</sup> <a name="two_way" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.twoWay"></a>

```python
two_way: SmsvoicePoolTwoWayOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference">SmsvoicePoolTwoWayOutputReference</a>

---

##### `deletion_protection_enabled_input`<sup>Optional</sup> <a name="deletion_protection_enabled_input" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.deletionProtectionEnabledInput"></a>

```python
deletion_protection_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mandatory_keywords_input`<sup>Optional</sup> <a name="mandatory_keywords_input" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.mandatoryKeywordsInput"></a>

```python
mandatory_keywords_input: IResolvable | SmsvoicePoolMandatoryKeywords
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords">SmsvoicePoolMandatoryKeywords</a>

---

##### `optional_keywords_input`<sup>Optional</sup> <a name="optional_keywords_input" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.optionalKeywordsInput"></a>

```python
optional_keywords_input: IResolvable | typing.List[SmsvoicePoolOptionalKeywords]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords">SmsvoicePoolOptionalKeywords</a>]

---

##### `opt_out_list_name_input`<sup>Optional</sup> <a name="opt_out_list_name_input" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.optOutListNameInput"></a>

```python
opt_out_list_name_input: str
```

- *Type:* str

---

##### `origination_identities_input`<sup>Optional</sup> <a name="origination_identities_input" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.originationIdentitiesInput"></a>

```python
origination_identities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `self_managed_opt_outs_enabled_input`<sup>Optional</sup> <a name="self_managed_opt_outs_enabled_input" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.selfManagedOptOutsEnabledInput"></a>

```python
self_managed_opt_outs_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `shared_routes_enabled_input`<sup>Optional</sup> <a name="shared_routes_enabled_input" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.sharedRoutesEnabledInput"></a>

```python
shared_routes_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SmsvoicePoolTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags">SmsvoicePoolTags</a>]

---

##### `two_way_input`<sup>Optional</sup> <a name="two_way_input" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.twoWayInput"></a>

```python
two_way_input: IResolvable | SmsvoicePoolTwoWay
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay">SmsvoicePoolTwoWay</a>

---

##### `deletion_protection_enabled`<sup>Required</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `opt_out_list_name`<sup>Required</sup> <a name="opt_out_list_name" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.optOutListName"></a>

```python
opt_out_list_name: str
```

- *Type:* str

---

##### `origination_identities`<sup>Required</sup> <a name="origination_identities" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.originationIdentities"></a>

```python
origination_identities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `self_managed_opt_outs_enabled`<sup>Required</sup> <a name="self_managed_opt_outs_enabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.selfManagedOptOutsEnabled"></a>

```python
self_managed_opt_outs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `shared_routes_enabled`<sup>Required</sup> <a name="shared_routes_enabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.sharedRoutesEnabled"></a>

```python
shared_routes_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoicePoolConfig <a name="SmsvoicePoolConfig" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_pool

smsvoicePool.SmsvoicePoolConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mandatory_keywords: SmsvoicePoolMandatoryKeywords,
  origination_identities: typing.List[str],
  deletion_protection_enabled: bool | IResolvable = None,
  optional_keywords: IResolvable | typing.List[SmsvoicePoolOptionalKeywords] = None,
  opt_out_list_name: str = None,
  self_managed_opt_outs_enabled: bool | IResolvable = None,
  shared_routes_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[SmsvoicePoolTags] = None,
  two_way: SmsvoicePoolTwoWay = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.mandatoryKeywords">mandatory_keywords</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords">SmsvoicePoolMandatoryKeywords</a></code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.originationIdentities">origination_identities</a></code> | <code>typing.List[str]</code> | The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn and it's IsoCountryCode. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true the pool can't be deleted. By default this is set to false. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.optionalKeywords">optional_keywords</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords">SmsvoicePoolOptionalKeywords</a>]</code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.optOutListName">opt_out_list_name</a></code> | <code>str</code> | The name of the OptOutList to associate with the pool. You can use the OptOutListName or OptOutListArn. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.selfManagedOptOutsEnabled">self_managed_opt_outs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | By default this is set to false. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.sharedRoutesEnabled">shared_routes_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether shared routes are enabled for the pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags">SmsvoicePoolTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.twoWay">two_way</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay">SmsvoicePoolTwoWay</a></code> | When you set up two-way SMS, you can receive incoming messages from your customers. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mandatory_keywords`<sup>Required</sup> <a name="mandatory_keywords" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.mandatoryKeywords"></a>

```python
mandatory_keywords: SmsvoicePoolMandatoryKeywords
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords">SmsvoicePoolMandatoryKeywords</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#mandatory_keywords SmsvoicePool#mandatory_keywords}

---

##### `origination_identities`<sup>Required</sup> <a name="origination_identities" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.originationIdentities"></a>

```python
origination_identities: typing.List[str]
```

- *Type:* typing.List[str]

The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn and it's IsoCountryCode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#origination_identities SmsvoicePool#origination_identities}

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to true the pool can't be deleted. By default this is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#deletion_protection_enabled SmsvoicePool#deletion_protection_enabled}

---

##### `optional_keywords`<sup>Optional</sup> <a name="optional_keywords" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.optionalKeywords"></a>

```python
optional_keywords: IResolvable | typing.List[SmsvoicePoolOptionalKeywords]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords">SmsvoicePoolOptionalKeywords</a>]

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#optional_keywords SmsvoicePool#optional_keywords}

---

##### `opt_out_list_name`<sup>Optional</sup> <a name="opt_out_list_name" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.optOutListName"></a>

```python
opt_out_list_name: str
```

- *Type:* str

The name of the OptOutList to associate with the pool. You can use the OptOutListName or OptOutListArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#opt_out_list_name SmsvoicePool#opt_out_list_name}

---

##### `self_managed_opt_outs_enabled`<sup>Optional</sup> <a name="self_managed_opt_outs_enabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.selfManagedOptOutsEnabled"></a>

```python
self_managed_opt_outs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

By default this is set to false.

When an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, AWS End User Messaging SMS and Voice automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#self_managed_opt_outs_enabled SmsvoicePool#self_managed_opt_outs_enabled}

---

##### `shared_routes_enabled`<sup>Optional</sup> <a name="shared_routes_enabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.sharedRoutesEnabled"></a>

```python
shared_routes_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether shared routes are enabled for the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#shared_routes_enabled SmsvoicePool#shared_routes_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SmsvoicePoolTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags">SmsvoicePoolTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#tags SmsvoicePool#tags}

---

##### `two_way`<sup>Optional</sup> <a name="two_way" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolConfig.property.twoWay"></a>

```python
two_way: SmsvoicePoolTwoWay
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay">SmsvoicePoolTwoWay</a>

When you set up two-way SMS, you can receive incoming messages from your customers.

When one of your customers sends a message to your phone number, the message body is sent to an Amazon SNS topic or Amazon Connect for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#two_way SmsvoicePool#two_way}

---

### SmsvoicePoolMandatoryKeywords <a name="SmsvoicePoolMandatoryKeywords" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_pool

smsvoicePool.SmsvoicePoolMandatoryKeywords(
  help: SmsvoicePoolMandatoryKeywordsHelp,
  stop: SmsvoicePoolMandatoryKeywordsStop
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords.property.help">help</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp">SmsvoicePoolMandatoryKeywordsHelp</a></code> | A keyword is a word that you can search for on a particular phone number or pool. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords.property.stop">stop</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStop">SmsvoicePoolMandatoryKeywordsStop</a></code> | A keyword is a word that you can search for on a particular phone number or pool. |

---

##### `help`<sup>Required</sup> <a name="help" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords.property.help"></a>

```python
help: SmsvoicePoolMandatoryKeywordsHelp
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp">SmsvoicePoolMandatoryKeywordsHelp</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#help SmsvoicePool#help}

---

##### `stop`<sup>Required</sup> <a name="stop" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords.property.stop"></a>

```python
stop: SmsvoicePoolMandatoryKeywordsStop
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStop">SmsvoicePoolMandatoryKeywordsStop</a>

A keyword is a word that you can search for on a particular phone number or pool.

It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#stop SmsvoicePool#stop}

---

### SmsvoicePoolMandatoryKeywordsHelp <a name="SmsvoicePoolMandatoryKeywordsHelp" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_pool

smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp(
  message: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp.property.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#message SmsvoicePool#message}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp.property.message"></a>

```python
message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#message SmsvoicePool#message}.

---

### SmsvoicePoolMandatoryKeywordsStop <a name="SmsvoicePoolMandatoryKeywordsStop" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStop"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStop.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_pool

smsvoicePool.SmsvoicePoolMandatoryKeywordsStop(
  message: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStop.property.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#message SmsvoicePool#message}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStop.property.message"></a>

```python
message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#message SmsvoicePool#message}.

---

### SmsvoicePoolOptionalKeywords <a name="SmsvoicePoolOptionalKeywords" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_pool

smsvoicePool.SmsvoicePoolOptionalKeywords(
  action: str = None,
  keyword: str = None,
  message: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#action SmsvoicePool#action}. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords.property.keyword">keyword</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#keyword SmsvoicePool#keyword}. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords.property.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#message SmsvoicePool#message}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#action SmsvoicePool#action}.

---

##### `keyword`<sup>Optional</sup> <a name="keyword" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords.property.keyword"></a>

```python
keyword: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#keyword SmsvoicePool#keyword}.

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords.property.message"></a>

```python
message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#message SmsvoicePool#message}.

---

### SmsvoicePoolTags <a name="SmsvoicePoolTags" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_pool

smsvoicePool.SmsvoicePoolTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#key SmsvoicePool#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#value SmsvoicePool#value}

---

### SmsvoicePoolTwoWay <a name="SmsvoicePoolTwoWay" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_pool

smsvoicePool.SmsvoicePoolTwoWay(
  channel_arn: str = None,
  channel_role: str = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay.property.channelArn">channel_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the two way channel. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay.property.channelRole">channel_role</a></code> | <code>str</code> | An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | By default this is set to false. |

---

##### `channel_arn`<sup>Optional</sup> <a name="channel_arn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay.property.channelArn"></a>

```python
channel_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the two way channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#channel_arn SmsvoicePool#channel_arn}

---

##### `channel_role`<sup>Optional</sup> <a name="channel_role" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay.property.channelRole"></a>

```python
channel_role: str
```

- *Type:* str

An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#channel_role SmsvoicePool#channel_role}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

By default this is set to false.

When set to true you can receive incoming text messages from your end recipients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#enabled SmsvoicePool#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoicePoolMandatoryKeywordsHelpOutputReference <a name="SmsvoicePoolMandatoryKeywordsHelpOutputReference" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_pool

smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp">SmsvoicePoolMandatoryKeywordsHelp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SmsvoicePoolMandatoryKeywordsHelp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp">SmsvoicePoolMandatoryKeywordsHelp</a>

---


### SmsvoicePoolMandatoryKeywordsOutputReference <a name="SmsvoicePoolMandatoryKeywordsOutputReference" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_pool

smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.putHelp">put_help</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.putStop">put_stop</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_help` <a name="put_help" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.putHelp"></a>

```python
def put_help(
  message: str
) -> None
```

###### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.putHelp.parameter.message"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#message SmsvoicePool#message}.

---

##### `put_stop` <a name="put_stop" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.putStop"></a>

```python
def put_stop(
  message: str
) -> None
```

###### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.putStop.parameter.message"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_pool#message SmsvoicePool#message}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.help">help</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference">SmsvoicePoolMandatoryKeywordsHelpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.stop">stop</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference">SmsvoicePoolMandatoryKeywordsStopOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.helpInput">help_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp">SmsvoicePoolMandatoryKeywordsHelp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.stopInput">stop_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStop">SmsvoicePoolMandatoryKeywordsStop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords">SmsvoicePoolMandatoryKeywords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `help`<sup>Required</sup> <a name="help" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.help"></a>

```python
help: SmsvoicePoolMandatoryKeywordsHelpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelpOutputReference">SmsvoicePoolMandatoryKeywordsHelpOutputReference</a>

---

##### `stop`<sup>Required</sup> <a name="stop" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.stop"></a>

```python
stop: SmsvoicePoolMandatoryKeywordsStopOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference">SmsvoicePoolMandatoryKeywordsStopOutputReference</a>

---

##### `help_input`<sup>Optional</sup> <a name="help_input" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.helpInput"></a>

```python
help_input: IResolvable | SmsvoicePoolMandatoryKeywordsHelp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsHelp">SmsvoicePoolMandatoryKeywordsHelp</a>

---

##### `stop_input`<sup>Optional</sup> <a name="stop_input" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.stopInput"></a>

```python
stop_input: IResolvable | SmsvoicePoolMandatoryKeywordsStop
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStop">SmsvoicePoolMandatoryKeywordsStop</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SmsvoicePoolMandatoryKeywords
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywords">SmsvoicePoolMandatoryKeywords</a>

---


### SmsvoicePoolMandatoryKeywordsStopOutputReference <a name="SmsvoicePoolMandatoryKeywordsStopOutputReference" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_pool

smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStop">SmsvoicePoolMandatoryKeywordsStop</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStopOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SmsvoicePoolMandatoryKeywordsStop
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolMandatoryKeywordsStop">SmsvoicePoolMandatoryKeywordsStop</a>

---


### SmsvoicePoolOptionalKeywordsList <a name="SmsvoicePoolOptionalKeywordsList" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_pool

smsvoicePool.SmsvoicePoolOptionalKeywordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SmsvoicePoolOptionalKeywordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords">SmsvoicePoolOptionalKeywords</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SmsvoicePoolOptionalKeywords]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords">SmsvoicePoolOptionalKeywords</a>]

---


### SmsvoicePoolOptionalKeywordsOutputReference <a name="SmsvoicePoolOptionalKeywordsOutputReference" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_pool

smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.resetKeyword">reset_keyword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.resetMessage">reset_message</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_keyword` <a name="reset_keyword" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.resetKeyword"></a>

```python
def reset_keyword() -> None
```

##### `reset_message` <a name="reset_message" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.resetMessage"></a>

```python
def reset_message() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.keywordInput">keyword_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.keyword">keyword</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords">SmsvoicePoolOptionalKeywords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `keyword_input`<sup>Optional</sup> <a name="keyword_input" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.keywordInput"></a>

```python
keyword_input: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `keyword`<sup>Required</sup> <a name="keyword" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.keyword"></a>

```python
keyword: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywordsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SmsvoicePoolOptionalKeywords
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolOptionalKeywords">SmsvoicePoolOptionalKeywords</a>

---


### SmsvoicePoolTagsList <a name="SmsvoicePoolTagsList" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_pool

smsvoicePool.SmsvoicePoolTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SmsvoicePoolTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags">SmsvoicePoolTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SmsvoicePoolTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags">SmsvoicePoolTags</a>]

---


### SmsvoicePoolTagsOutputReference <a name="SmsvoicePoolTagsOutputReference" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_pool

smsvoicePool.SmsvoicePoolTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags">SmsvoicePoolTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SmsvoicePoolTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTags">SmsvoicePoolTags</a>

---


### SmsvoicePoolTwoWayOutputReference <a name="SmsvoicePoolTwoWayOutputReference" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_pool

smsvoicePool.SmsvoicePoolTwoWayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.resetChannelArn">reset_channel_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.resetChannelRole">reset_channel_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_channel_arn` <a name="reset_channel_arn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.resetChannelArn"></a>

```python
def reset_channel_arn() -> None
```

##### `reset_channel_role` <a name="reset_channel_role" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.resetChannelRole"></a>

```python
def reset_channel_role() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.channelArnInput">channel_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.channelRoleInput">channel_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.channelArn">channel_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.channelRole">channel_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay">SmsvoicePoolTwoWay</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_arn_input`<sup>Optional</sup> <a name="channel_arn_input" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.channelArnInput"></a>

```python
channel_arn_input: str
```

- *Type:* str

---

##### `channel_role_input`<sup>Optional</sup> <a name="channel_role_input" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.channelRoleInput"></a>

```python
channel_role_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `channel_arn`<sup>Required</sup> <a name="channel_arn" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.channelArn"></a>

```python
channel_arn: str
```

- *Type:* str

---

##### `channel_role`<sup>Required</sup> <a name="channel_role" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.channelRole"></a>

```python
channel_role: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWayOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SmsvoicePoolTwoWay
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoicePool.SmsvoicePoolTwoWay">SmsvoicePoolTwoWay</a>

---



