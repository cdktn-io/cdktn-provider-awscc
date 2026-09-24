# `mediaconvertQueue` Submodule <a name="`mediaconvertQueue` Submodule" id="@cdktn/provider-awscc.mediaconvertQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconvertQueue <a name="MediaconvertQueue" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue awscc_mediaconvert_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconvert_queue

mediaconvertQueue.MediaconvertQueue(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  concurrent_jobs: typing.Union[int, float] = None,
  description: str = None,
  maximum_concurrent_feeds: typing.Union[int, float] = None,
  name: str = None,
  pricing_plan: str = None,
  status: str = None,
  tags: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.concurrentJobs">concurrent_jobs</a></code> | <code>typing.Union[int, float]</code> | Specify the maximum number of jobs your queue can process concurrently. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the queue that you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.maximumConcurrentFeeds">maximum_concurrent_feeds</a></code> | <code>typing.Union[int, float]</code> | Specify the maximum number of Elemental Inference feeds MediaConvert can process concurrently. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the queue that you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.pricingPlan">pricing_plan</a></code> | <code>str</code> | When you use CloudFormation, you can create only on-demand queues. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.status">status</a></code> | <code>str</code> | Initial state of the queue. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.tags">tags</a></code> | <code>str</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `concurrent_jobs`<sup>Optional</sup> <a name="concurrent_jobs" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.concurrentJobs"></a>

- *Type:* typing.Union[int, float]

Specify the maximum number of jobs your queue can process concurrently.

For on-demand queues, the value you enter is constrained by your service quotas for Maximum concurrent jobs, per on-demand queue and Maximum concurrent jobs, per account. For reserved queues, specify the number of jobs you can process concurrently in your reservation plan instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#concurrent_jobs MediaconvertQueue#concurrent_jobs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.description"></a>

- *Type:* str

A description of the queue that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#description MediaconvertQueue#description}

---

##### `maximum_concurrent_feeds`<sup>Optional</sup> <a name="maximum_concurrent_feeds" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.maximumConcurrentFeeds"></a>

- *Type:* typing.Union[int, float]

Specify the maximum number of Elemental Inference feeds MediaConvert can process concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#maximum_concurrent_feeds MediaconvertQueue#maximum_concurrent_feeds}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.name"></a>

- *Type:* str

The name of the queue that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#name MediaconvertQueue#name}

---

##### `pricing_plan`<sup>Optional</sup> <a name="pricing_plan" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.pricingPlan"></a>

- *Type:* str

When you use CloudFormation, you can create only on-demand queues.

Therefore, always set PricingPlan to the value ON_DEMAND when declaring an AWS::MediaConvert::Queue in your CloudFormation template. To create a reserved queue, use the AWS Elemental MediaConvert console at https://console.aws.amazon.com/mediaconvert to set up a contract. For more information, see Working with AWS Elemental MediaConvert Queues in the AWS Elemental MediaConvert User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#pricing_plan MediaconvertQueue#pricing_plan}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.status"></a>

- *Type:* str

Initial state of the queue.

Queues can be either ACTIVE or PAUSED. If you create a paused queue, then jobs that you send to that queue won't begin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#status MediaconvertQueue#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.tags"></a>

- *Type:* str

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#tags MediaconvertQueue#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetConcurrentJobs">reset_concurrent_jobs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetMaximumConcurrentFeeds">reset_maximum_concurrent_feeds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetPricingPlan">reset_pricing_plan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_concurrent_jobs` <a name="reset_concurrent_jobs" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetConcurrentJobs"></a>

```python
def reset_concurrent_jobs() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_maximum_concurrent_feeds` <a name="reset_maximum_concurrent_feeds" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetMaximumConcurrentFeeds"></a>

```python
def reset_maximum_concurrent_feeds() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_pricing_plan` <a name="reset_pricing_plan" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetPricingPlan"></a>

```python
def reset_pricing_plan() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MediaconvertQueue resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isConstruct"></a>

```python
from cdktn_provider_awscc import mediaconvert_queue

mediaconvertQueue.MediaconvertQueue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mediaconvert_queue

mediaconvertQueue.MediaconvertQueue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mediaconvert_queue

mediaconvertQueue.MediaconvertQueue.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mediaconvert_queue

mediaconvertQueue.MediaconvertQueue.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MediaconvertQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediaconvertQueue to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediaconvertQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediaconvertQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.concurrentJobsInput">concurrent_jobs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.maximumConcurrentFeedsInput">maximum_concurrent_feeds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.pricingPlanInput">pricing_plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tagsInput">tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.concurrentJobs">concurrent_jobs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.maximumConcurrentFeeds">maximum_concurrent_feeds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.pricingPlan">pricing_plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tags">tags</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `concurrent_jobs_input`<sup>Optional</sup> <a name="concurrent_jobs_input" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.concurrentJobsInput"></a>

```python
concurrent_jobs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `maximum_concurrent_feeds_input`<sup>Optional</sup> <a name="maximum_concurrent_feeds_input" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.maximumConcurrentFeedsInput"></a>

```python
maximum_concurrent_feeds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pricing_plan_input`<sup>Optional</sup> <a name="pricing_plan_input" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.pricingPlanInput"></a>

```python
pricing_plan_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tagsInput"></a>

```python
tags_input: str
```

- *Type:* str

---

##### `concurrent_jobs`<sup>Required</sup> <a name="concurrent_jobs" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.concurrentJobs"></a>

```python
concurrent_jobs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `maximum_concurrent_feeds`<sup>Required</sup> <a name="maximum_concurrent_feeds" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.maximumConcurrentFeeds"></a>

```python
maximum_concurrent_feeds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pricing_plan`<sup>Required</sup> <a name="pricing_plan" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.pricingPlan"></a>

```python
pricing_plan: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tags"></a>

```python
tags: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconvertQueueConfig <a name="MediaconvertQueueConfig" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconvert_queue

mediaconvertQueue.MediaconvertQueueConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  concurrent_jobs: typing.Union[int, float] = None,
  description: str = None,
  maximum_concurrent_feeds: typing.Union[int, float] = None,
  name: str = None,
  pricing_plan: str = None,
  status: str = None,
  tags: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.concurrentJobs">concurrent_jobs</a></code> | <code>typing.Union[int, float]</code> | Specify the maximum number of jobs your queue can process concurrently. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.description">description</a></code> | <code>str</code> | A description of the queue that you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.maximumConcurrentFeeds">maximum_concurrent_feeds</a></code> | <code>typing.Union[int, float]</code> | Specify the maximum number of Elemental Inference feeds MediaConvert can process concurrently. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.name">name</a></code> | <code>str</code> | The name of the queue that you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.pricingPlan">pricing_plan</a></code> | <code>str</code> | When you use CloudFormation, you can create only on-demand queues. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.status">status</a></code> | <code>str</code> | Initial state of the queue. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.tags">tags</a></code> | <code>str</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `concurrent_jobs`<sup>Optional</sup> <a name="concurrent_jobs" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.concurrentJobs"></a>

```python
concurrent_jobs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specify the maximum number of jobs your queue can process concurrently.

For on-demand queues, the value you enter is constrained by your service quotas for Maximum concurrent jobs, per on-demand queue and Maximum concurrent jobs, per account. For reserved queues, specify the number of jobs you can process concurrently in your reservation plan instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#concurrent_jobs MediaconvertQueue#concurrent_jobs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the queue that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#description MediaconvertQueue#description}

---

##### `maximum_concurrent_feeds`<sup>Optional</sup> <a name="maximum_concurrent_feeds" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.maximumConcurrentFeeds"></a>

```python
maximum_concurrent_feeds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specify the maximum number of Elemental Inference feeds MediaConvert can process concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#maximum_concurrent_feeds MediaconvertQueue#maximum_concurrent_feeds}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the queue that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#name MediaconvertQueue#name}

---

##### `pricing_plan`<sup>Optional</sup> <a name="pricing_plan" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.pricingPlan"></a>

```python
pricing_plan: str
```

- *Type:* str

When you use CloudFormation, you can create only on-demand queues.

Therefore, always set PricingPlan to the value ON_DEMAND when declaring an AWS::MediaConvert::Queue in your CloudFormation template. To create a reserved queue, use the AWS Elemental MediaConvert console at https://console.aws.amazon.com/mediaconvert to set up a contract. For more information, see Working with AWS Elemental MediaConvert Queues in the AWS Elemental MediaConvert User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#pricing_plan MediaconvertQueue#pricing_plan}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Initial state of the queue.

Queues can be either ACTIVE or PAUSED. If you create a paused queue, then jobs that you send to that queue won't begin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#status MediaconvertQueue#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.tags"></a>

```python
tags: str
```

- *Type:* str

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#tags MediaconvertQueue#tags}

---



