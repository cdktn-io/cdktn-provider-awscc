# `snsSubscription` Submodule <a name="`snsSubscription` Submodule" id="@cdktn/provider-awscc.snsSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsSubscription <a name="SnsSubscription" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription awscc_sns_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer"></a>

```python
from cdktn_provider_awscc import sns_subscription

snsSubscription.SnsSubscription(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  protocol: str,
  topic_arn: str,
  delivery_policy: str = None,
  endpoint: str = None,
  filter_policy: str = None,
  filter_policy_scope: str = None,
  raw_message_delivery: bool | IResolvable = None,
  redrive_policy: str = None,
  region: str = None,
  replay_policy: str = None,
  subscription_role_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | The subscription's protocol. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.topicArn">topic_arn</a></code> | <code>str</code> | The ARN of the topic to subscribe to. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.deliveryPolicy">delivery_policy</a></code> | <code>str</code> | The delivery policy JSON assigned to the subscription. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.endpoint">endpoint</a></code> | <code>str</code> | The subscription's endpoint. The endpoint value depends on the protocol that you specify. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.filterPolicy">filter_policy</a></code> | <code>str</code> | The filter policy JSON assigned to the subscription. Enables the subscriber to filter out unwanted messages. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.filterPolicyScope">filter_policy_scope</a></code> | <code>str</code> | This attribute lets you choose the filtering scope by using one of the following string value types: MessageAttributes (default) and MessageBody. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.rawMessageDelivery">raw_message_delivery</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true, enables raw message delivery. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.redrivePolicy">redrive_policy</a></code> | <code>str</code> | When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.region">region</a></code> | <code>str</code> | For cross-region subscriptions, the region in which the topic resides.If no region is specified, AWS CloudFormation uses the region of the caller as the default. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.replayPolicy">replay_policy</a></code> | <code>str</code> | Specifies whether Amazon SNS resends the notification to the subscription when a message's attribute changes. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.subscriptionRoleArn">subscription_role_arn</a></code> | <code>str</code> | This property applies only to Amazon Data Firehose delivery stream subscriptions. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.protocol"></a>

- *Type:* str

The subscription's protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#protocol SnsSubscription#protocol}

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.topicArn"></a>

- *Type:* str

The ARN of the topic to subscribe to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#topic_arn SnsSubscription#topic_arn}

---

##### `delivery_policy`<sup>Optional</sup> <a name="delivery_policy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.deliveryPolicy"></a>

- *Type:* str

The delivery policy JSON assigned to the subscription.

Enables the subscriber to define the message delivery retry strategy in the case of an HTTP/S endpoint subscribed to the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#delivery_policy SnsSubscription#delivery_policy}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.endpoint"></a>

- *Type:* str

The subscription's endpoint. The endpoint value depends on the protocol that you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#endpoint SnsSubscription#endpoint}

---

##### `filter_policy`<sup>Optional</sup> <a name="filter_policy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.filterPolicy"></a>

- *Type:* str

The filter policy JSON assigned to the subscription. Enables the subscriber to filter out unwanted messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#filter_policy SnsSubscription#filter_policy}

---

##### `filter_policy_scope`<sup>Optional</sup> <a name="filter_policy_scope" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.filterPolicyScope"></a>

- *Type:* str

This attribute lets you choose the filtering scope by using one of the following string value types: MessageAttributes (default) and MessageBody.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#filter_policy_scope SnsSubscription#filter_policy_scope}

---

##### `raw_message_delivery`<sup>Optional</sup> <a name="raw_message_delivery" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.rawMessageDelivery"></a>

- *Type:* bool | cdktn.IResolvable

When set to true, enables raw message delivery.

Raw messages don't contain any JSON formatting and can be sent to Amazon SQS and HTTP/S endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#raw_message_delivery SnsSubscription#raw_message_delivery}

---

##### `redrive_policy`<sup>Optional</sup> <a name="redrive_policy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.redrivePolicy"></a>

- *Type:* str

When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue.

Messages that can't be delivered due to client errors are held in the dead-letter queue for further analysis or reprocessing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#redrive_policy SnsSubscription#redrive_policy}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.region"></a>

- *Type:* str

For cross-region subscriptions, the region in which the topic resides.If no region is specified, AWS CloudFormation uses the region of the caller as the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#region SnsSubscription#region}

---

##### `replay_policy`<sup>Optional</sup> <a name="replay_policy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.replayPolicy"></a>

- *Type:* str

Specifies whether Amazon SNS resends the notification to the subscription when a message's attribute changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#replay_policy SnsSubscription#replay_policy}

---

##### `subscription_role_arn`<sup>Optional</sup> <a name="subscription_role_arn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.subscriptionRoleArn"></a>

- *Type:* str

This property applies only to Amazon Data Firehose delivery stream subscriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#subscription_role_arn SnsSubscription#subscription_role_arn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetDeliveryPolicy">reset_delivery_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetFilterPolicy">reset_filter_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetFilterPolicyScope">reset_filter_policy_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRawMessageDelivery">reset_raw_message_delivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRedrivePolicy">reset_redrive_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetReplayPolicy">reset_replay_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetSubscriptionRoleArn">reset_subscription_role_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_delivery_policy` <a name="reset_delivery_policy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetDeliveryPolicy"></a>

```python
def reset_delivery_policy() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_filter_policy` <a name="reset_filter_policy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetFilterPolicy"></a>

```python
def reset_filter_policy() -> None
```

##### `reset_filter_policy_scope` <a name="reset_filter_policy_scope" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetFilterPolicyScope"></a>

```python
def reset_filter_policy_scope() -> None
```

##### `reset_raw_message_delivery` <a name="reset_raw_message_delivery" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRawMessageDelivery"></a>

```python
def reset_raw_message_delivery() -> None
```

##### `reset_redrive_policy` <a name="reset_redrive_policy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRedrivePolicy"></a>

```python
def reset_redrive_policy() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_replay_policy` <a name="reset_replay_policy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetReplayPolicy"></a>

```python
def reset_replay_policy() -> None
```

##### `reset_subscription_role_arn` <a name="reset_subscription_role_arn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetSubscriptionRoleArn"></a>

```python
def reset_subscription_role_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SnsSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isConstruct"></a>

```python
from cdktn_provider_awscc import sns_subscription

snsSubscription.SnsSubscription.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sns_subscription

snsSubscription.SnsSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sns_subscription

snsSubscription.SnsSubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sns_subscription

snsSubscription.SnsSubscription.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SnsSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SnsSubscription to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SnsSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SnsSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.deliveryPolicyInput">delivery_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyInput">filter_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyScopeInput">filter_policy_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.rawMessageDeliveryInput">raw_message_delivery_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.redrivePolicyInput">redrive_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.replayPolicyInput">replay_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.subscriptionRoleArnInput">subscription_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.topicArnInput">topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.deliveryPolicy">delivery_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicy">filter_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyScope">filter_policy_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.rawMessageDelivery">raw_message_delivery</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.redrivePolicy">redrive_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.replayPolicy">replay_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.subscriptionRoleArn">subscription_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `delivery_policy_input`<sup>Optional</sup> <a name="delivery_policy_input" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.deliveryPolicyInput"></a>

```python
delivery_policy_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `filter_policy_input`<sup>Optional</sup> <a name="filter_policy_input" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyInput"></a>

```python
filter_policy_input: str
```

- *Type:* str

---

##### `filter_policy_scope_input`<sup>Optional</sup> <a name="filter_policy_scope_input" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyScopeInput"></a>

```python
filter_policy_scope_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `raw_message_delivery_input`<sup>Optional</sup> <a name="raw_message_delivery_input" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.rawMessageDeliveryInput"></a>

```python
raw_message_delivery_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `redrive_policy_input`<sup>Optional</sup> <a name="redrive_policy_input" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.redrivePolicyInput"></a>

```python
redrive_policy_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `replay_policy_input`<sup>Optional</sup> <a name="replay_policy_input" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.replayPolicyInput"></a>

```python
replay_policy_input: str
```

- *Type:* str

---

##### `subscription_role_arn_input`<sup>Optional</sup> <a name="subscription_role_arn_input" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.subscriptionRoleArnInput"></a>

```python
subscription_role_arn_input: str
```

- *Type:* str

---

##### `topic_arn_input`<sup>Optional</sup> <a name="topic_arn_input" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.topicArnInput"></a>

```python
topic_arn_input: str
```

- *Type:* str

---

##### `delivery_policy`<sup>Required</sup> <a name="delivery_policy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.deliveryPolicy"></a>

```python
delivery_policy: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `filter_policy`<sup>Required</sup> <a name="filter_policy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicy"></a>

```python
filter_policy: str
```

- *Type:* str

---

##### `filter_policy_scope`<sup>Required</sup> <a name="filter_policy_scope" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyScope"></a>

```python
filter_policy_scope: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `raw_message_delivery`<sup>Required</sup> <a name="raw_message_delivery" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.rawMessageDelivery"></a>

```python
raw_message_delivery: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `redrive_policy`<sup>Required</sup> <a name="redrive_policy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.redrivePolicy"></a>

```python
redrive_policy: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `replay_policy`<sup>Required</sup> <a name="replay_policy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.replayPolicy"></a>

```python
replay_policy: str
```

- *Type:* str

---

##### `subscription_role_arn`<sup>Required</sup> <a name="subscription_role_arn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.subscriptionRoleArn"></a>

```python
subscription_role_arn: str
```

- *Type:* str

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SnsSubscriptionConfig <a name="SnsSubscriptionConfig" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sns_subscription

snsSubscription.SnsSubscriptionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  protocol: str,
  topic_arn: str,
  delivery_policy: str = None,
  endpoint: str = None,
  filter_policy: str = None,
  filter_policy_scope: str = None,
  raw_message_delivery: bool | IResolvable = None,
  redrive_policy: str = None,
  region: str = None,
  replay_policy: str = None,
  subscription_role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.protocol">protocol</a></code> | <code>str</code> | The subscription's protocol. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.topicArn">topic_arn</a></code> | <code>str</code> | The ARN of the topic to subscribe to. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.deliveryPolicy">delivery_policy</a></code> | <code>str</code> | The delivery policy JSON assigned to the subscription. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.endpoint">endpoint</a></code> | <code>str</code> | The subscription's endpoint. The endpoint value depends on the protocol that you specify. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.filterPolicy">filter_policy</a></code> | <code>str</code> | The filter policy JSON assigned to the subscription. Enables the subscriber to filter out unwanted messages. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.filterPolicyScope">filter_policy_scope</a></code> | <code>str</code> | This attribute lets you choose the filtering scope by using one of the following string value types: MessageAttributes (default) and MessageBody. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.rawMessageDelivery">raw_message_delivery</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true, enables raw message delivery. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.redrivePolicy">redrive_policy</a></code> | <code>str</code> | When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.region">region</a></code> | <code>str</code> | For cross-region subscriptions, the region in which the topic resides.If no region is specified, AWS CloudFormation uses the region of the caller as the default. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.replayPolicy">replay_policy</a></code> | <code>str</code> | Specifies whether Amazon SNS resends the notification to the subscription when a message's attribute changes. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.subscriptionRoleArn">subscription_role_arn</a></code> | <code>str</code> | This property applies only to Amazon Data Firehose delivery stream subscriptions. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The subscription's protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#protocol SnsSubscription#protocol}

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

The ARN of the topic to subscribe to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#topic_arn SnsSubscription#topic_arn}

---

##### `delivery_policy`<sup>Optional</sup> <a name="delivery_policy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.deliveryPolicy"></a>

```python
delivery_policy: str
```

- *Type:* str

The delivery policy JSON assigned to the subscription.

Enables the subscriber to define the message delivery retry strategy in the case of an HTTP/S endpoint subscribed to the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#delivery_policy SnsSubscription#delivery_policy}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

The subscription's endpoint. The endpoint value depends on the protocol that you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#endpoint SnsSubscription#endpoint}

---

##### `filter_policy`<sup>Optional</sup> <a name="filter_policy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.filterPolicy"></a>

```python
filter_policy: str
```

- *Type:* str

The filter policy JSON assigned to the subscription. Enables the subscriber to filter out unwanted messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#filter_policy SnsSubscription#filter_policy}

---

##### `filter_policy_scope`<sup>Optional</sup> <a name="filter_policy_scope" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.filterPolicyScope"></a>

```python
filter_policy_scope: str
```

- *Type:* str

This attribute lets you choose the filtering scope by using one of the following string value types: MessageAttributes (default) and MessageBody.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#filter_policy_scope SnsSubscription#filter_policy_scope}

---

##### `raw_message_delivery`<sup>Optional</sup> <a name="raw_message_delivery" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.rawMessageDelivery"></a>

```python
raw_message_delivery: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to true, enables raw message delivery.

Raw messages don't contain any JSON formatting and can be sent to Amazon SQS and HTTP/S endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#raw_message_delivery SnsSubscription#raw_message_delivery}

---

##### `redrive_policy`<sup>Optional</sup> <a name="redrive_policy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.redrivePolicy"></a>

```python
redrive_policy: str
```

- *Type:* str

When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue.

Messages that can't be delivered due to client errors are held in the dead-letter queue for further analysis or reprocessing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#redrive_policy SnsSubscription#redrive_policy}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

For cross-region subscriptions, the region in which the topic resides.If no region is specified, AWS CloudFormation uses the region of the caller as the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#region SnsSubscription#region}

---

##### `replay_policy`<sup>Optional</sup> <a name="replay_policy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.replayPolicy"></a>

```python
replay_policy: str
```

- *Type:* str

Specifies whether Amazon SNS resends the notification to the subscription when a message's attribute changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#replay_policy SnsSubscription#replay_policy}

---

##### `subscription_role_arn`<sup>Optional</sup> <a name="subscription_role_arn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.subscriptionRoleArn"></a>

```python
subscription_role_arn: str
```

- *Type:* str

This property applies only to Amazon Data Firehose delivery stream subscriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#subscription_role_arn SnsSubscription#subscription_role_arn}

---



