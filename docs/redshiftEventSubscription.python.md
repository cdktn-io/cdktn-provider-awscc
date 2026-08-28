# `redshiftEventSubscription` Submodule <a name="`redshiftEventSubscription` Submodule" id="@cdktn/provider-awscc.redshiftEventSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftEventSubscription <a name="RedshiftEventSubscription" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_event_subscription awscc_redshift_event_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_event_subscription

redshiftEventSubscription.RedshiftEventSubscription(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  subscription_name: str,
  enabled: bool | IResolvable = None,
  event_categories: typing.List[str] = None,
  severity: str = None,
  sns_topic_arn: str = None,
  source_ids: typing.List[str] = None,
  source_type: str = None,
  tags: IResolvable | typing.List[RedshiftEventSubscriptionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.subscriptionName">subscription_name</a></code> | <code>str</code> | The name of the Amazon Redshift event notification subscription. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A boolean value; |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.eventCategories">event_categories</a></code> | <code>typing.List[str]</code> | Specifies the Amazon Redshift event categories to be published by the event notification subscription. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.severity">severity</a></code> | <code>str</code> | Specifies the Amazon Redshift event severity to be published by the event notification subscription. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Amazon SNS topic used to transmit the event notifications. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.sourceIds">source_ids</a></code> | <code>typing.List[str]</code> | A list of one or more identifiers of Amazon Redshift source objects. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.sourceType">source_type</a></code> | <code>str</code> | The type of source that will be generating the events. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags">RedshiftEventSubscriptionTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `subscription_name`<sup>Required</sup> <a name="subscription_name" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.subscriptionName"></a>

- *Type:* str

The name of the Amazon Redshift event notification subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_event_subscription#subscription_name RedshiftEventSubscription#subscription_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

A boolean value;

set to true to activate the subscription, and set to false to create the subscription but not activate it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_event_subscription#enabled RedshiftEventSubscription#enabled}

---

##### `event_categories`<sup>Optional</sup> <a name="event_categories" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.eventCategories"></a>

- *Type:* typing.List[str]

Specifies the Amazon Redshift event categories to be published by the event notification subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_event_subscription#event_categories RedshiftEventSubscription#event_categories}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.severity"></a>

- *Type:* str

Specifies the Amazon Redshift event severity to be published by the event notification subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_event_subscription#severity RedshiftEventSubscription#severity}

---

##### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.snsTopicArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon SNS topic used to transmit the event notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_event_subscription#sns_topic_arn RedshiftEventSubscription#sns_topic_arn}

---

##### `source_ids`<sup>Optional</sup> <a name="source_ids" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.sourceIds"></a>

- *Type:* typing.List[str]

A list of one or more identifiers of Amazon Redshift source objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_event_subscription#source_ids RedshiftEventSubscription#source_ids}

---

##### `source_type`<sup>Optional</sup> <a name="source_type" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.sourceType"></a>

- *Type:* str

The type of source that will be generating the events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_event_subscription#source_type RedshiftEventSubscription#source_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags">RedshiftEventSubscriptionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_event_subscription#tags RedshiftEventSubscription#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetEventCategories">reset_event_categories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetSeverity">reset_severity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetSnsTopicArn">reset_sns_topic_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetSourceIds">reset_source_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetSourceType">reset_source_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RedshiftEventSubscriptionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags">RedshiftEventSubscriptionTags</a>]

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_event_categories` <a name="reset_event_categories" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetEventCategories"></a>

```python
def reset_event_categories() -> None
```

##### `reset_severity` <a name="reset_severity" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetSeverity"></a>

```python
def reset_severity() -> None
```

##### `reset_sns_topic_arn` <a name="reset_sns_topic_arn" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetSnsTopicArn"></a>

```python
def reset_sns_topic_arn() -> None
```

##### `reset_source_ids` <a name="reset_source_ids" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetSourceIds"></a>

```python
def reset_source_ids() -> None
```

##### `reset_source_type` <a name="reset_source_type" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetSourceType"></a>

```python
def reset_source_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RedshiftEventSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.isConstruct"></a>

```python
from cdktn_provider_awscc import redshift_event_subscription

redshiftEventSubscription.RedshiftEventSubscription.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.isTerraformElement"></a>

```python
from cdktn_provider_awscc import redshift_event_subscription

redshiftEventSubscription.RedshiftEventSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.isTerraformResource"></a>

```python
from cdktn_provider_awscc import redshift_event_subscription

redshiftEventSubscription.RedshiftEventSubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import redshift_event_subscription

redshiftEventSubscription.RedshiftEventSubscription.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RedshiftEventSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RedshiftEventSubscription to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RedshiftEventSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_event_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftEventSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.customerAwsId">customer_aws_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.custSubscriptionId">cust_subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.eventCategoriesList">event_categories_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.sourceIdsList">source_ids_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.subscriptionCreationTime">subscription_creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList">RedshiftEventSubscriptionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.eventCategoriesInput">event_categories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.snsTopicArnInput">sns_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.sourceIdsInput">source_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.subscriptionNameInput">subscription_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags">RedshiftEventSubscriptionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.eventCategories">event_categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.sourceIds">source_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.subscriptionName">subscription_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `customer_aws_id`<sup>Required</sup> <a name="customer_aws_id" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.customerAwsId"></a>

```python
customer_aws_id: str
```

- *Type:* str

---

##### `cust_subscription_id`<sup>Required</sup> <a name="cust_subscription_id" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.custSubscriptionId"></a>

```python
cust_subscription_id: str
```

- *Type:* str

---

##### `event_categories_list`<sup>Required</sup> <a name="event_categories_list" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.eventCategoriesList"></a>

```python
event_categories_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `source_ids_list`<sup>Required</sup> <a name="source_ids_list" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.sourceIdsList"></a>

```python
source_ids_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subscription_creation_time`<sup>Required</sup> <a name="subscription_creation_time" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.subscriptionCreationTime"></a>

```python
subscription_creation_time: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.tags"></a>

```python
tags: RedshiftEventSubscriptionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList">RedshiftEventSubscriptionTagsList</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_categories_input`<sup>Optional</sup> <a name="event_categories_input" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.eventCategoriesInput"></a>

```python
event_categories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `sns_topic_arn_input`<sup>Optional</sup> <a name="sns_topic_arn_input" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.snsTopicArnInput"></a>

```python
sns_topic_arn_input: str
```

- *Type:* str

---

##### `source_ids_input`<sup>Optional</sup> <a name="source_ids_input" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.sourceIdsInput"></a>

```python
source_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `subscription_name_input`<sup>Optional</sup> <a name="subscription_name_input" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.subscriptionNameInput"></a>

```python
subscription_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RedshiftEventSubscriptionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags">RedshiftEventSubscriptionTags</a>]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_categories`<sup>Required</sup> <a name="event_categories" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.eventCategories"></a>

```python
event_categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `source_ids`<sup>Required</sup> <a name="source_ids" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.sourceIds"></a>

```python
source_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `subscription_name`<sup>Required</sup> <a name="subscription_name" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.subscriptionName"></a>

```python
subscription_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftEventSubscriptionConfig <a name="RedshiftEventSubscriptionConfig" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_event_subscription

redshiftEventSubscription.RedshiftEventSubscriptionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  subscription_name: str,
  enabled: bool | IResolvable = None,
  event_categories: typing.List[str] = None,
  severity: str = None,
  sns_topic_arn: str = None,
  source_ids: typing.List[str] = None,
  source_type: str = None,
  tags: IResolvable | typing.List[RedshiftEventSubscriptionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.subscriptionName">subscription_name</a></code> | <code>str</code> | The name of the Amazon Redshift event notification subscription. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A boolean value; |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.eventCategories">event_categories</a></code> | <code>typing.List[str]</code> | Specifies the Amazon Redshift event categories to be published by the event notification subscription. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.severity">severity</a></code> | <code>str</code> | Specifies the Amazon Redshift event severity to be published by the event notification subscription. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Amazon SNS topic used to transmit the event notifications. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.sourceIds">source_ids</a></code> | <code>typing.List[str]</code> | A list of one or more identifiers of Amazon Redshift source objects. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.sourceType">source_type</a></code> | <code>str</code> | The type of source that will be generating the events. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags">RedshiftEventSubscriptionTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `subscription_name`<sup>Required</sup> <a name="subscription_name" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.subscriptionName"></a>

```python
subscription_name: str
```

- *Type:* str

The name of the Amazon Redshift event notification subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_event_subscription#subscription_name RedshiftEventSubscription#subscription_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A boolean value;

set to true to activate the subscription, and set to false to create the subscription but not activate it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_event_subscription#enabled RedshiftEventSubscription#enabled}

---

##### `event_categories`<sup>Optional</sup> <a name="event_categories" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.eventCategories"></a>

```python
event_categories: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the Amazon Redshift event categories to be published by the event notification subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_event_subscription#event_categories RedshiftEventSubscription#event_categories}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.severity"></a>

```python
severity: str
```

- *Type:* str

Specifies the Amazon Redshift event severity to be published by the event notification subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_event_subscription#severity RedshiftEventSubscription#severity}

---

##### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon SNS topic used to transmit the event notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_event_subscription#sns_topic_arn RedshiftEventSubscription#sns_topic_arn}

---

##### `source_ids`<sup>Optional</sup> <a name="source_ids" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.sourceIds"></a>

```python
source_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of one or more identifiers of Amazon Redshift source objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_event_subscription#source_ids RedshiftEventSubscription#source_ids}

---

##### `source_type`<sup>Optional</sup> <a name="source_type" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

The type of source that will be generating the events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_event_subscription#source_type RedshiftEventSubscription#source_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RedshiftEventSubscriptionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags">RedshiftEventSubscriptionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_event_subscription#tags RedshiftEventSubscription#tags}

---

### RedshiftEventSubscriptionTags <a name="RedshiftEventSubscriptionTags" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_event_subscription

redshiftEventSubscription.RedshiftEventSubscriptionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_event_subscription#key RedshiftEventSubscription#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_event_subscription#value RedshiftEventSubscription#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftEventSubscriptionTagsList <a name="RedshiftEventSubscriptionTagsList" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_event_subscription

redshiftEventSubscription.RedshiftEventSubscriptionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftEventSubscriptionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags">RedshiftEventSubscriptionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RedshiftEventSubscriptionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags">RedshiftEventSubscriptionTags</a>]

---


### RedshiftEventSubscriptionTagsOutputReference <a name="RedshiftEventSubscriptionTagsOutputReference" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_event_subscription

redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags">RedshiftEventSubscriptionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RedshiftEventSubscriptionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags">RedshiftEventSubscriptionTags</a>

---



