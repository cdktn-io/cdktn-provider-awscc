# `neptuneEventSubscription` Submodule <a name="`neptuneEventSubscription` Submodule" id="@cdktn/provider-awscc.neptuneEventSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptuneEventSubscription <a name="NeptuneEventSubscription" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_event_subscription awscc_neptune_event_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer"></a>

```python
from cdktn_provider_awscc import neptune_event_subscription

neptuneEventSubscription.NeptuneEventSubscription(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  sns_topic_arn: str,
  enabled: bool | IResolvable = None,
  event_categories: typing.List[str] = None,
  source_ids: typing.List[str] = None,
  source_type: str = None,
  subscription_name: str = None,
  tags: IResolvable | typing.List[NeptuneEventSubscriptionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the SNS topic created for event notification. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A Boolean value; |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.eventCategories">event_categories</a></code> | <code>typing.List[str]</code> | A list of event categories for a SourceType that you want to subscribe to. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.sourceIds">source_ids</a></code> | <code>typing.List[str]</code> | The list of identifiers of the event sources for which events will be returned. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.sourceType">source_type</a></code> | <code>str</code> | The type of source that will be generating the events. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.subscriptionName">subscription_name</a></code> | <code>str</code> | The name of the subscription. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags">NeptuneEventSubscriptionTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.snsTopicArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the SNS topic created for event notification.

The ARN is created by Amazon SNS when you create a topic and subscribe to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_event_subscription#sns_topic_arn NeptuneEventSubscription#sns_topic_arn}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

A Boolean value;

set to true to activate the subscription, set to false to create the subscription but not active it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_event_subscription#enabled NeptuneEventSubscription#enabled}

---

##### `event_categories`<sup>Optional</sup> <a name="event_categories" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.eventCategories"></a>

- *Type:* typing.List[str]

A list of event categories for a SourceType that you want to subscribe to.

You can see a list of the categories for a given SourceType in the Events topic in the Amazon Neptune User Guide or by using the DescribeEventCategories action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_event_subscription#event_categories NeptuneEventSubscription#event_categories}

---

##### `source_ids`<sup>Optional</sup> <a name="source_ids" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.sourceIds"></a>

- *Type:* typing.List[str]

The list of identifiers of the event sources for which events will be returned.

If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it cannot end with a hyphen or contain two consecutive hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_event_subscription#source_ids NeptuneEventSubscription#source_ids}

---

##### `source_type`<sup>Optional</sup> <a name="source_type" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.sourceType"></a>

- *Type:* str

The type of source that will be generating the events.

For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_event_subscription#source_type NeptuneEventSubscription#source_type}

---

##### `subscription_name`<sup>Optional</sup> <a name="subscription_name" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.subscriptionName"></a>

- *Type:* str

The name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_event_subscription#subscription_name NeptuneEventSubscription#subscription_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags">NeptuneEventSubscriptionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_event_subscription#tags NeptuneEventSubscription#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetEventCategories">reset_event_categories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetSourceIds">reset_source_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetSourceType">reset_source_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetSubscriptionName">reset_subscription_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NeptuneEventSubscriptionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags">NeptuneEventSubscriptionTags</a>]

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_event_categories` <a name="reset_event_categories" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetEventCategories"></a>

```python
def reset_event_categories() -> None
```

##### `reset_source_ids` <a name="reset_source_ids" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetSourceIds"></a>

```python
def reset_source_ids() -> None
```

##### `reset_source_type` <a name="reset_source_type" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetSourceType"></a>

```python
def reset_source_type() -> None
```

##### `reset_subscription_name` <a name="reset_subscription_name" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetSubscriptionName"></a>

```python
def reset_subscription_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NeptuneEventSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.isConstruct"></a>

```python
from cdktn_provider_awscc import neptune_event_subscription

neptuneEventSubscription.NeptuneEventSubscription.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.isTerraformElement"></a>

```python
from cdktn_provider_awscc import neptune_event_subscription

neptuneEventSubscription.NeptuneEventSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.isTerraformResource"></a>

```python
from cdktn_provider_awscc import neptune_event_subscription

neptuneEventSubscription.NeptuneEventSubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import neptune_event_subscription

neptuneEventSubscription.NeptuneEventSubscription.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NeptuneEventSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NeptuneEventSubscription to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NeptuneEventSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_event_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NeptuneEventSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList">NeptuneEventSubscriptionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.eventCategoriesInput">event_categories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.snsTopicArnInput">sns_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.sourceIdsInput">source_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.subscriptionNameInput">subscription_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags">NeptuneEventSubscriptionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.eventCategories">event_categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.sourceIds">source_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.subscriptionName">subscription_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.tags"></a>

```python
tags: NeptuneEventSubscriptionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList">NeptuneEventSubscriptionTagsList</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_categories_input`<sup>Optional</sup> <a name="event_categories_input" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.eventCategoriesInput"></a>

```python
event_categories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sns_topic_arn_input`<sup>Optional</sup> <a name="sns_topic_arn_input" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.snsTopicArnInput"></a>

```python
sns_topic_arn_input: str
```

- *Type:* str

---

##### `source_ids_input`<sup>Optional</sup> <a name="source_ids_input" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.sourceIdsInput"></a>

```python
source_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `subscription_name_input`<sup>Optional</sup> <a name="subscription_name_input" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.subscriptionNameInput"></a>

```python
subscription_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NeptuneEventSubscriptionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags">NeptuneEventSubscriptionTags</a>]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_categories`<sup>Required</sup> <a name="event_categories" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.eventCategories"></a>

```python
event_categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `source_ids`<sup>Required</sup> <a name="source_ids" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.sourceIds"></a>

```python
source_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `subscription_name`<sup>Required</sup> <a name="subscription_name" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.subscriptionName"></a>

```python
subscription_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NeptuneEventSubscriptionConfig <a name="NeptuneEventSubscriptionConfig" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import neptune_event_subscription

neptuneEventSubscription.NeptuneEventSubscriptionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  sns_topic_arn: str,
  enabled: bool | IResolvable = None,
  event_categories: typing.List[str] = None,
  source_ids: typing.List[str] = None,
  source_type: str = None,
  subscription_name: str = None,
  tags: IResolvable | typing.List[NeptuneEventSubscriptionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the SNS topic created for event notification. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A Boolean value; |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.eventCategories">event_categories</a></code> | <code>typing.List[str]</code> | A list of event categories for a SourceType that you want to subscribe to. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.sourceIds">source_ids</a></code> | <code>typing.List[str]</code> | The list of identifiers of the event sources for which events will be returned. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.sourceType">source_type</a></code> | <code>str</code> | The type of source that will be generating the events. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.subscriptionName">subscription_name</a></code> | <code>str</code> | The name of the subscription. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags">NeptuneEventSubscriptionTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the SNS topic created for event notification.

The ARN is created by Amazon SNS when you create a topic and subscribe to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_event_subscription#sns_topic_arn NeptuneEventSubscription#sns_topic_arn}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A Boolean value;

set to true to activate the subscription, set to false to create the subscription but not active it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_event_subscription#enabled NeptuneEventSubscription#enabled}

---

##### `event_categories`<sup>Optional</sup> <a name="event_categories" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.eventCategories"></a>

```python
event_categories: typing.List[str]
```

- *Type:* typing.List[str]

A list of event categories for a SourceType that you want to subscribe to.

You can see a list of the categories for a given SourceType in the Events topic in the Amazon Neptune User Guide or by using the DescribeEventCategories action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_event_subscription#event_categories NeptuneEventSubscription#event_categories}

---

##### `source_ids`<sup>Optional</sup> <a name="source_ids" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.sourceIds"></a>

```python
source_ids: typing.List[str]
```

- *Type:* typing.List[str]

The list of identifiers of the event sources for which events will be returned.

If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it cannot end with a hyphen or contain two consecutive hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_event_subscription#source_ids NeptuneEventSubscription#source_ids}

---

##### `source_type`<sup>Optional</sup> <a name="source_type" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

The type of source that will be generating the events.

For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_event_subscription#source_type NeptuneEventSubscription#source_type}

---

##### `subscription_name`<sup>Optional</sup> <a name="subscription_name" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.subscriptionName"></a>

```python
subscription_name: str
```

- *Type:* str

The name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_event_subscription#subscription_name NeptuneEventSubscription#subscription_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[NeptuneEventSubscriptionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags">NeptuneEventSubscriptionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_event_subscription#tags NeptuneEventSubscription#tags}

---

### NeptuneEventSubscriptionTags <a name="NeptuneEventSubscriptionTags" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags.Initializer"></a>

```python
from cdktn_provider_awscc import neptune_event_subscription

neptuneEventSubscription.NeptuneEventSubscriptionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_event_subscription#key NeptuneEventSubscription#key}. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_event_subscription#value NeptuneEventSubscription#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_event_subscription#key NeptuneEventSubscription#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptune_event_subscription#value NeptuneEventSubscription#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NeptuneEventSubscriptionTagsList <a name="NeptuneEventSubscriptionTagsList" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import neptune_event_subscription

neptuneEventSubscription.NeptuneEventSubscriptionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NeptuneEventSubscriptionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags">NeptuneEventSubscriptionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NeptuneEventSubscriptionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags">NeptuneEventSubscriptionTags</a>]

---


### NeptuneEventSubscriptionTagsOutputReference <a name="NeptuneEventSubscriptionTagsOutputReference" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import neptune_event_subscription

neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags">NeptuneEventSubscriptionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NeptuneEventSubscriptionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags">NeptuneEventSubscriptionTags</a>

---



