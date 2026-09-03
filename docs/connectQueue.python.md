# `connectQueue` Submodule <a name="`connectQueue` Submodule" id="@cdktn/provider-awscc.connectQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectQueue <a name="ConnectQueue" id="@cdktn/provider-awscc.connectQueue.ConnectQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue awscc_connect_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer"></a>

```python
from cdktn_provider_awscc import connect_queue

connectQueue.ConnectQueue(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hours_of_operation_arn: str,
  instance_arn: str,
  name: str,
  additional_email_addresses: IResolvable | typing.List[ConnectQueueAdditionalEmailAddresses] = None,
  description: str = None,
  max_contacts: typing.Union[int, float] = None,
  outbound_caller_config: ConnectQueueOutboundCallerConfig = None,
  outbound_email_config: ConnectQueueOutboundEmailConfig = None,
  quick_connect_arns: typing.List[str] = None,
  status: str = None,
  tags: IResolvable | typing.List[ConnectQueueTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.hoursOfOperationArn">hours_of_operation_arn</a></code> | <code>str</code> | The identifier for the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.additionalEmailAddresses">additional_email_addresses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>]</code> | The email addresses that agents can use when replying to or initiating email contacts. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.maxContacts">max_contacts</a></code> | <code>typing.Union[int, float]</code> | The maximum number of contacts that can be in the queue before it is considered full. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.outboundCallerConfig">outbound_caller_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a></code> | The outbound caller ID name, number, and outbound whisper flow. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.outboundEmailConfig">outbound_email_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a></code> | The outbound email address ID. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.quickConnectArns">quick_connect_arns</a></code> | <code>typing.List[str]</code> | The quick connects available to agents who are working the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.status">status</a></code> | <code>str</code> | The status of the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hours_of_operation_arn`<sup>Required</sup> <a name="hours_of_operation_arn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.hoursOfOperationArn"></a>

- *Type:* str

The identifier for the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#hours_of_operation_arn ConnectQueue#hours_of_operation_arn}

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.instanceArn"></a>

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#instance_arn ConnectQueue#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.name"></a>

- *Type:* str

The name of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#name ConnectQueue#name}

---

##### `additional_email_addresses`<sup>Optional</sup> <a name="additional_email_addresses" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.additionalEmailAddresses"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>]

The email addresses that agents can use when replying to or initiating email contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#additional_email_addresses ConnectQueue#additional_email_addresses}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.description"></a>

- *Type:* str

The description of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#description ConnectQueue#description}

---

##### `max_contacts`<sup>Optional</sup> <a name="max_contacts" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.maxContacts"></a>

- *Type:* typing.Union[int, float]

The maximum number of contacts that can be in the queue before it is considered full.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#max_contacts ConnectQueue#max_contacts}

---

##### `outbound_caller_config`<sup>Optional</sup> <a name="outbound_caller_config" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.outboundCallerConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

The outbound caller ID name, number, and outbound whisper flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#outbound_caller_config ConnectQueue#outbound_caller_config}

---

##### `outbound_email_config`<sup>Optional</sup> <a name="outbound_email_config" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.outboundEmailConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a>

The outbound email address ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#outbound_email_config ConnectQueue#outbound_email_config}

---

##### `quick_connect_arns`<sup>Optional</sup> <a name="quick_connect_arns" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.quickConnectArns"></a>

- *Type:* typing.List[str]

The quick connects available to agents who are working the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#quick_connect_arns ConnectQueue#quick_connect_arns}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.status"></a>

- *Type:* str

The status of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#status ConnectQueue#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#tags ConnectQueue#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.putAdditionalEmailAddresses">put_additional_email_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundCallerConfig">put_outbound_caller_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundEmailConfig">put_outbound_email_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetAdditionalEmailAddresses">reset_additional_email_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetMaxContacts">reset_max_contacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOutboundCallerConfig">reset_outbound_caller_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOutboundEmailConfig">reset_outbound_email_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetQuickConnectArns">reset_quick_connect_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_additional_email_addresses` <a name="put_additional_email_addresses" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putAdditionalEmailAddresses"></a>

```python
def put_additional_email_addresses(
  value: IResolvable | typing.List[ConnectQueueAdditionalEmailAddresses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putAdditionalEmailAddresses.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>]

---

##### `put_outbound_caller_config` <a name="put_outbound_caller_config" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundCallerConfig"></a>

```python
def put_outbound_caller_config(
  outbound_caller_id_name: str = None,
  outbound_caller_id_number_arn: str = None,
  outbound_flow_arn: str = None
) -> None
```

###### `outbound_caller_id_name`<sup>Optional</sup> <a name="outbound_caller_id_name" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundCallerConfig.parameter.outboundCallerIdName"></a>

- *Type:* str

The caller ID name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#outbound_caller_id_name ConnectQueue#outbound_caller_id_name}

---

###### `outbound_caller_id_number_arn`<sup>Optional</sup> <a name="outbound_caller_id_number_arn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundCallerConfig.parameter.outboundCallerIdNumberArn"></a>

- *Type:* str

The caller ID number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#outbound_caller_id_number_arn ConnectQueue#outbound_caller_id_number_arn}

---

###### `outbound_flow_arn`<sup>Optional</sup> <a name="outbound_flow_arn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundCallerConfig.parameter.outboundFlowArn"></a>

- *Type:* str

The outbound whisper flow to be used during an outbound call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#outbound_flow_arn ConnectQueue#outbound_flow_arn}

---

##### `put_outbound_email_config` <a name="put_outbound_email_config" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundEmailConfig"></a>

```python
def put_outbound_email_config(
  outbound_email_address_id: str = None
) -> None
```

###### `outbound_email_address_id`<sup>Optional</sup> <a name="outbound_email_address_id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundEmailConfig.parameter.outboundEmailAddressId"></a>

- *Type:* str

The email address connect resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#outbound_email_address_id ConnectQueue#outbound_email_address_id}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ConnectQueueTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>]

---

##### `reset_additional_email_addresses` <a name="reset_additional_email_addresses" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetAdditionalEmailAddresses"></a>

```python
def reset_additional_email_addresses() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_max_contacts` <a name="reset_max_contacts" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetMaxContacts"></a>

```python
def reset_max_contacts() -> None
```

##### `reset_outbound_caller_config` <a name="reset_outbound_caller_config" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOutboundCallerConfig"></a>

```python
def reset_outbound_caller_config() -> None
```

##### `reset_outbound_email_config` <a name="reset_outbound_email_config" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOutboundEmailConfig"></a>

```python
def reset_outbound_email_config() -> None
```

##### `reset_quick_connect_arns` <a name="reset_quick_connect_arns" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetQuickConnectArns"></a>

```python
def reset_quick_connect_arns() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConnectQueue resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isConstruct"></a>

```python
from cdktn_provider_awscc import connect_queue

connectQueue.ConnectQueue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformElement"></a>

```python
from cdktn_provider_awscc import connect_queue

connectQueue.ConnectQueue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformResource"></a>

```python
from cdktn_provider_awscc import connect_queue

connectQueue.ConnectQueue.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import connect_queue

connectQueue.ConnectQueue.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConnectQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConnectQueue to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConnectQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.additionalEmailAddresses">additional_email_addresses</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList">ConnectQueueAdditionalEmailAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.lastModifiedRegion">last_modified_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.lastModifiedTime">last_modified_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundCallerConfig">outbound_caller_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference">ConnectQueueOutboundCallerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundEmailConfig">outbound_email_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference">ConnectQueueOutboundEmailConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.queueArn">queue_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList">ConnectQueueTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.additionalEmailAddressesInput">additional_email_addresses_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.hoursOfOperationArnInput">hours_of_operation_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.maxContactsInput">max_contacts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundCallerConfigInput">outbound_caller_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundEmailConfigInput">outbound_email_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.quickConnectArnsInput">quick_connect_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.hoursOfOperationArn">hours_of_operation_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.maxContacts">max_contacts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.quickConnectArns">quick_connect_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `additional_email_addresses`<sup>Required</sup> <a name="additional_email_addresses" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.additionalEmailAddresses"></a>

```python
additional_email_addresses: ConnectQueueAdditionalEmailAddressesList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList">ConnectQueueAdditionalEmailAddressesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_region`<sup>Required</sup> <a name="last_modified_region" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.lastModifiedRegion"></a>

```python
last_modified_region: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.lastModifiedTime"></a>

```python
last_modified_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `outbound_caller_config`<sup>Required</sup> <a name="outbound_caller_config" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundCallerConfig"></a>

```python
outbound_caller_config: ConnectQueueOutboundCallerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference">ConnectQueueOutboundCallerConfigOutputReference</a>

---

##### `outbound_email_config`<sup>Required</sup> <a name="outbound_email_config" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundEmailConfig"></a>

```python
outbound_email_config: ConnectQueueOutboundEmailConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference">ConnectQueueOutboundEmailConfigOutputReference</a>

---

##### `queue_arn`<sup>Required</sup> <a name="queue_arn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.queueArn"></a>

```python
queue_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tags"></a>

```python
tags: ConnectQueueTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList">ConnectQueueTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `additional_email_addresses_input`<sup>Optional</sup> <a name="additional_email_addresses_input" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.additionalEmailAddressesInput"></a>

```python
additional_email_addresses_input: IResolvable | typing.List[ConnectQueueAdditionalEmailAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `hours_of_operation_arn_input`<sup>Optional</sup> <a name="hours_of_operation_arn_input" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.hoursOfOperationArnInput"></a>

```python
hours_of_operation_arn_input: str
```

- *Type:* str

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `max_contacts_input`<sup>Optional</sup> <a name="max_contacts_input" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.maxContactsInput"></a>

```python
max_contacts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `outbound_caller_config_input`<sup>Optional</sup> <a name="outbound_caller_config_input" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundCallerConfigInput"></a>

```python
outbound_caller_config_input: IResolvable | ConnectQueueOutboundCallerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

---

##### `outbound_email_config_input`<sup>Optional</sup> <a name="outbound_email_config_input" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundEmailConfigInput"></a>

```python
outbound_email_config_input: IResolvable | ConnectQueueOutboundEmailConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a>

---

##### `quick_connect_arns_input`<sup>Optional</sup> <a name="quick_connect_arns_input" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.quickConnectArnsInput"></a>

```python
quick_connect_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ConnectQueueTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `hours_of_operation_arn`<sup>Required</sup> <a name="hours_of_operation_arn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.hoursOfOperationArn"></a>

```python
hours_of_operation_arn: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `max_contacts`<sup>Required</sup> <a name="max_contacts" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.maxContacts"></a>

```python
max_contacts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `quick_connect_arns`<sup>Required</sup> <a name="quick_connect_arns" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.quickConnectArns"></a>

```python
quick_connect_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectQueueAdditionalEmailAddresses <a name="ConnectQueueAdditionalEmailAddresses" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses.Initializer"></a>

```python
from cdktn_provider_awscc import connect_queue

connectQueue.ConnectQueueAdditionalEmailAddresses(
  email_address_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses.property.emailAddressArn">email_address_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the email address. |

---

##### `email_address_arn`<sup>Optional</sup> <a name="email_address_arn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses.property.emailAddressArn"></a>

```python
email_address_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#email_address_arn ConnectQueue#email_address_arn}

---

### ConnectQueueConfig <a name="ConnectQueueConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_queue

connectQueue.ConnectQueueConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hours_of_operation_arn: str,
  instance_arn: str,
  name: str,
  additional_email_addresses: IResolvable | typing.List[ConnectQueueAdditionalEmailAddresses] = None,
  description: str = None,
  max_contacts: typing.Union[int, float] = None,
  outbound_caller_config: ConnectQueueOutboundCallerConfig = None,
  outbound_email_config: ConnectQueueOutboundEmailConfig = None,
  quick_connect_arns: typing.List[str] = None,
  status: str = None,
  tags: IResolvable | typing.List[ConnectQueueTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.hoursOfOperationArn">hours_of_operation_arn</a></code> | <code>str</code> | The identifier for the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.name">name</a></code> | <code>str</code> | The name of the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.additionalEmailAddresses">additional_email_addresses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>]</code> | The email addresses that agents can use when replying to or initiating email contacts. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.description">description</a></code> | <code>str</code> | The description of the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.maxContacts">max_contacts</a></code> | <code>typing.Union[int, float]</code> | The maximum number of contacts that can be in the queue before it is considered full. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.outboundCallerConfig">outbound_caller_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a></code> | The outbound caller ID name, number, and outbound whisper flow. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.outboundEmailConfig">outbound_email_config</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a></code> | The outbound email address ID. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.quickConnectArns">quick_connect_arns</a></code> | <code>typing.List[str]</code> | The quick connects available to agents who are working the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.status">status</a></code> | <code>str</code> | The status of the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hours_of_operation_arn`<sup>Required</sup> <a name="hours_of_operation_arn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.hoursOfOperationArn"></a>

```python
hours_of_operation_arn: str
```

- *Type:* str

The identifier for the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#hours_of_operation_arn ConnectQueue#hours_of_operation_arn}

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#instance_arn ConnectQueue#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#name ConnectQueue#name}

---

##### `additional_email_addresses`<sup>Optional</sup> <a name="additional_email_addresses" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.additionalEmailAddresses"></a>

```python
additional_email_addresses: IResolvable | typing.List[ConnectQueueAdditionalEmailAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>]

The email addresses that agents can use when replying to or initiating email contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#additional_email_addresses ConnectQueue#additional_email_addresses}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#description ConnectQueue#description}

---

##### `max_contacts`<sup>Optional</sup> <a name="max_contacts" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.maxContacts"></a>

```python
max_contacts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of contacts that can be in the queue before it is considered full.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#max_contacts ConnectQueue#max_contacts}

---

##### `outbound_caller_config`<sup>Optional</sup> <a name="outbound_caller_config" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.outboundCallerConfig"></a>

```python
outbound_caller_config: ConnectQueueOutboundCallerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

The outbound caller ID name, number, and outbound whisper flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#outbound_caller_config ConnectQueue#outbound_caller_config}

---

##### `outbound_email_config`<sup>Optional</sup> <a name="outbound_email_config" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.outboundEmailConfig"></a>

```python
outbound_email_config: ConnectQueueOutboundEmailConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a>

The outbound email address ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#outbound_email_config ConnectQueue#outbound_email_config}

---

##### `quick_connect_arns`<sup>Optional</sup> <a name="quick_connect_arns" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.quickConnectArns"></a>

```python
quick_connect_arns: typing.List[str]
```

- *Type:* typing.List[str]

The quick connects available to agents who are working the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#quick_connect_arns ConnectQueue#quick_connect_arns}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.status"></a>

```python
status: str
```

- *Type:* str

The status of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#status ConnectQueue#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ConnectQueueTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#tags ConnectQueue#tags}

---

### ConnectQueueOutboundCallerConfig <a name="ConnectQueueOutboundCallerConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_queue

connectQueue.ConnectQueueOutboundCallerConfig(
  outbound_caller_id_name: str = None,
  outbound_caller_id_number_arn: str = None,
  outbound_flow_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdName">outbound_caller_id_name</a></code> | <code>str</code> | The caller ID name. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdNumberArn">outbound_caller_id_number_arn</a></code> | <code>str</code> | The caller ID number. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundFlowArn">outbound_flow_arn</a></code> | <code>str</code> | The outbound whisper flow to be used during an outbound call. |

---

##### `outbound_caller_id_name`<sup>Optional</sup> <a name="outbound_caller_id_name" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdName"></a>

```python
outbound_caller_id_name: str
```

- *Type:* str

The caller ID name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#outbound_caller_id_name ConnectQueue#outbound_caller_id_name}

---

##### `outbound_caller_id_number_arn`<sup>Optional</sup> <a name="outbound_caller_id_number_arn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdNumberArn"></a>

```python
outbound_caller_id_number_arn: str
```

- *Type:* str

The caller ID number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#outbound_caller_id_number_arn ConnectQueue#outbound_caller_id_number_arn}

---

##### `outbound_flow_arn`<sup>Optional</sup> <a name="outbound_flow_arn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundFlowArn"></a>

```python
outbound_flow_arn: str
```

- *Type:* str

The outbound whisper flow to be used during an outbound call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#outbound_flow_arn ConnectQueue#outbound_flow_arn}

---

### ConnectQueueOutboundEmailConfig <a name="ConnectQueueOutboundEmailConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_queue

connectQueue.ConnectQueueOutboundEmailConfig(
  outbound_email_address_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig.property.outboundEmailAddressId">outbound_email_address_id</a></code> | <code>str</code> | The email address connect resource ID. |

---

##### `outbound_email_address_id`<sup>Optional</sup> <a name="outbound_email_address_id" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig.property.outboundEmailAddressId"></a>

```python
outbound_email_address_id: str
```

- *Type:* str

The email address connect resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#outbound_email_address_id ConnectQueue#outbound_email_address_id}

---

### ConnectQueueTags <a name="ConnectQueueTags" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTags.Initializer"></a>

```python
from cdktn_provider_awscc import connect_queue

connectQueue.ConnectQueueTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#key ConnectQueue#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_queue#value ConnectQueue#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectQueueAdditionalEmailAddressesList <a name="ConnectQueueAdditionalEmailAddressesList" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_queue

connectQueue.ConnectQueueAdditionalEmailAddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectQueueAdditionalEmailAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectQueueAdditionalEmailAddresses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>]

---


### ConnectQueueAdditionalEmailAddressesOutputReference <a name="ConnectQueueAdditionalEmailAddressesOutputReference" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_queue

connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.resetEmailAddressArn">reset_email_address_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email_address_arn` <a name="reset_email_address_arn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.resetEmailAddressArn"></a>

```python
def reset_email_address_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.emailAddressArnInput">email_address_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.emailAddressArn">email_address_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_address_arn_input`<sup>Optional</sup> <a name="email_address_arn_input" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.emailAddressArnInput"></a>

```python
email_address_arn_input: str
```

- *Type:* str

---

##### `email_address_arn`<sup>Required</sup> <a name="email_address_arn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.emailAddressArn"></a>

```python
email_address_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectQueueAdditionalEmailAddresses
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>

---


### ConnectQueueOutboundCallerConfigOutputReference <a name="ConnectQueueOutboundCallerConfigOutputReference" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_queue

connectQueue.ConnectQueueOutboundCallerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdName">reset_outbound_caller_id_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdNumberArn">reset_outbound_caller_id_number_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundFlowArn">reset_outbound_flow_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_outbound_caller_id_name` <a name="reset_outbound_caller_id_name" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdName"></a>

```python
def reset_outbound_caller_id_name() -> None
```

##### `reset_outbound_caller_id_number_arn` <a name="reset_outbound_caller_id_number_arn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdNumberArn"></a>

```python
def reset_outbound_caller_id_number_arn() -> None
```

##### `reset_outbound_flow_arn` <a name="reset_outbound_flow_arn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundFlowArn"></a>

```python
def reset_outbound_flow_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNameInput">outbound_caller_id_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberArnInput">outbound_caller_id_number_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowArnInput">outbound_flow_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdName">outbound_caller_id_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberArn">outbound_caller_id_number_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowArn">outbound_flow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `outbound_caller_id_name_input`<sup>Optional</sup> <a name="outbound_caller_id_name_input" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNameInput"></a>

```python
outbound_caller_id_name_input: str
```

- *Type:* str

---

##### `outbound_caller_id_number_arn_input`<sup>Optional</sup> <a name="outbound_caller_id_number_arn_input" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberArnInput"></a>

```python
outbound_caller_id_number_arn_input: str
```

- *Type:* str

---

##### `outbound_flow_arn_input`<sup>Optional</sup> <a name="outbound_flow_arn_input" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowArnInput"></a>

```python
outbound_flow_arn_input: str
```

- *Type:* str

---

##### `outbound_caller_id_name`<sup>Required</sup> <a name="outbound_caller_id_name" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdName"></a>

```python
outbound_caller_id_name: str
```

- *Type:* str

---

##### `outbound_caller_id_number_arn`<sup>Required</sup> <a name="outbound_caller_id_number_arn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberArn"></a>

```python
outbound_caller_id_number_arn: str
```

- *Type:* str

---

##### `outbound_flow_arn`<sup>Required</sup> <a name="outbound_flow_arn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowArn"></a>

```python
outbound_flow_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectQueueOutboundCallerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

---


### ConnectQueueOutboundEmailConfigOutputReference <a name="ConnectQueueOutboundEmailConfigOutputReference" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_queue

connectQueue.ConnectQueueOutboundEmailConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.resetOutboundEmailAddressId">reset_outbound_email_address_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_outbound_email_address_id` <a name="reset_outbound_email_address_id" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.resetOutboundEmailAddressId"></a>

```python
def reset_outbound_email_address_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.outboundEmailAddressIdInput">outbound_email_address_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.outboundEmailAddressId">outbound_email_address_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `outbound_email_address_id_input`<sup>Optional</sup> <a name="outbound_email_address_id_input" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.outboundEmailAddressIdInput"></a>

```python
outbound_email_address_id_input: str
```

- *Type:* str

---

##### `outbound_email_address_id`<sup>Required</sup> <a name="outbound_email_address_id" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.outboundEmailAddressId"></a>

```python
outbound_email_address_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectQueueOutboundEmailConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a>

---


### ConnectQueueTagsList <a name="ConnectQueueTagsList" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_queue

connectQueue.ConnectQueueTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectQueueTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectQueueTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>]

---


### ConnectQueueTagsOutputReference <a name="ConnectQueueTagsOutputReference" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_queue

connectQueue.ConnectQueueTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectQueueTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>

---



