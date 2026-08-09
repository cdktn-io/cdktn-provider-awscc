# `batchQuotaShare` Submodule <a name="`batchQuotaShare` Submodule" id="@cdktn/provider-awscc.batchQuotaShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchQuotaShare <a name="BatchQuotaShare" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share awscc_batch_quota_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer"></a>

```python
from cdktn_provider_awscc import batch_quota_share

batchQuotaShare.BatchQuotaShare(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capacity_limits: IResolvable | typing.List[BatchQuotaShareCapacityLimits],
  job_queue: str,
  preemption_configuration: BatchQuotaSharePreemptionConfiguration,
  quota_share_name: str,
  resource_sharing_configuration: BatchQuotaShareResourceSharingConfiguration,
  state: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.capacityLimits">capacity_limits</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>]</code> | A list that specifies the quantity and type of compute capacity allocated to the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.jobQueue">job_queue</a></code> | <code>str</code> | The AWS Batch job queue associated with the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.preemptionConfiguration">preemption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a></code> | Specifies the preemption behavior for jobs in a quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.quotaShareName">quota_share_name</a></code> | <code>str</code> | The name of the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.resourceSharingConfiguration">resource_sharing_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a></code> | Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.state">state</a></code> | <code>str</code> | The state of the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | The tags that you apply to the quota share to help you categorize and organize your resources. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capacity_limits`<sup>Required</sup> <a name="capacity_limits" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.capacityLimits"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>]

A list that specifies the quantity and type of compute capacity allocated to the quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#capacity_limits BatchQuotaShare#capacity_limits}

---

##### `job_queue`<sup>Required</sup> <a name="job_queue" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.jobQueue"></a>

- *Type:* str

The AWS Batch job queue associated with the quota share.

This can be the job queue name or ARN. A job queue must be in the `VALID` state before you can associate it with a quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#job_queue BatchQuotaShare#job_queue}

---

##### `preemption_configuration`<sup>Required</sup> <a name="preemption_configuration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.preemptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a>

Specifies the preemption behavior for jobs in a quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#preemption_configuration BatchQuotaShare#preemption_configuration}

---

##### `quota_share_name`<sup>Required</sup> <a name="quota_share_name" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.quotaShareName"></a>

- *Type:* str

The name of the quota share.

It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#quota_share_name BatchQuotaShare#quota_share_name}

---

##### `resource_sharing_configuration`<sup>Required</sup> <a name="resource_sharing_configuration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.resourceSharingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a>

Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#resource_sharing_configuration BatchQuotaShare#resource_sharing_configuration}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.state"></a>

- *Type:* str

The state of the quota share.

If the quota share is `ENABLED`, it is able to accept jobs. If the quota share is `DISABLED`, new jobs won't be accepted but jobs already submitted can finish. The default state is `ENABLED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#state BatchQuotaShare#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

The tags that you apply to the quota share to help you categorize and organize your resources.

Each tag consists of a key and an optional value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#tags BatchQuotaShare#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putCapacityLimits">put_capacity_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putPreemptionConfiguration">put_preemption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putResourceSharingConfiguration">put_resource_sharing_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_capacity_limits` <a name="put_capacity_limits" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putCapacityLimits"></a>

```python
def put_capacity_limits(
  value: IResolvable | typing.List[BatchQuotaShareCapacityLimits]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putCapacityLimits.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>]

---

##### `put_preemption_configuration` <a name="put_preemption_configuration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putPreemptionConfiguration"></a>

```python
def put_preemption_configuration(
  in_share_preemption: str
) -> None
```

###### `in_share_preemption`<sup>Required</sup> <a name="in_share_preemption" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putPreemptionConfiguration.parameter.inSharePreemption"></a>

- *Type:* str

Specifies whether jobs within a quota share can be preempted by another, higher priority job in the same quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#in_share_preemption BatchQuotaShare#in_share_preemption}

---

##### `put_resource_sharing_configuration` <a name="put_resource_sharing_configuration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putResourceSharingConfiguration"></a>

```python
def put_resource_sharing_configuration(
  strategy: str,
  borrow_limit: typing.Union[int, float] = None
) -> None
```

###### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putResourceSharingConfiguration.parameter.strategy"></a>

- *Type:* str

The resource sharing strategy for the quota share.

The `RESERVE` strategy allows a quota share to reserve idle capacity for itself. `LEND` configures the share to lend its idle capacity to another share in need of capacity. The `LEND_AND_BORROW` strategy configures the share to borrow idle capacity from an underutilized share, as well as lend to another share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#strategy BatchQuotaShare#strategy}

---

###### `borrow_limit`<sup>Optional</sup> <a name="borrow_limit" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putResourceSharingConfiguration.parameter.borrowLimit"></a>

- *Type:* typing.Union[int, float]

The maximum percentage of additional capacity that the quota share can borrow from other shares.

`BorrowLimit` can only be applied to quota shares with a strategy of `LEND_AND_BORROW`. This value is expressed as a percentage of the quota share's configured CapacityLimits. The `BorrowLimit` is applied uniformly across all capacity units. For example, if the `BorrowLimit` is 200, the quota share can borrow up to 200% of its configured `maxCapacity` for each capacity unit. The default `BorrowLimit` is -1, which indicates unlimited borrowing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#borrow_limit BatchQuotaShare#borrow_limit}

---

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BatchQuotaShare resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isConstruct"></a>

```python
from cdktn_provider_awscc import batch_quota_share

batchQuotaShare.BatchQuotaShare.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformElement"></a>

```python
from cdktn_provider_awscc import batch_quota_share

batchQuotaShare.BatchQuotaShare.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformResource"></a>

```python
from cdktn_provider_awscc import batch_quota_share

batchQuotaShare.BatchQuotaShare.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import batch_quota_share

batchQuotaShare.BatchQuotaShare.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BatchQuotaShare resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BatchQuotaShare to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BatchQuotaShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BatchQuotaShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.capacityLimits">capacity_limits</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList">BatchQuotaShareCapacityLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.preemptionConfiguration">preemption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference">BatchQuotaSharePreemptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareArn">quota_share_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.resourceSharingConfiguration">resource_sharing_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference">BatchQuotaShareResourceSharingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.capacityLimitsInput">capacity_limits_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.jobQueueInput">job_queue_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.preemptionConfigurationInput">preemption_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareNameInput">quota_share_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.resourceSharingConfigurationInput">resource_sharing_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.jobQueue">job_queue</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareName">quota_share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capacity_limits`<sup>Required</sup> <a name="capacity_limits" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.capacityLimits"></a>

```python
capacity_limits: BatchQuotaShareCapacityLimitsList
```

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList">BatchQuotaShareCapacityLimitsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `preemption_configuration`<sup>Required</sup> <a name="preemption_configuration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.preemptionConfiguration"></a>

```python
preemption_configuration: BatchQuotaSharePreemptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference">BatchQuotaSharePreemptionConfigurationOutputReference</a>

---

##### `quota_share_arn`<sup>Required</sup> <a name="quota_share_arn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareArn"></a>

```python
quota_share_arn: str
```

- *Type:* str

---

##### `resource_sharing_configuration`<sup>Required</sup> <a name="resource_sharing_configuration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.resourceSharingConfiguration"></a>

```python
resource_sharing_configuration: BatchQuotaShareResourceSharingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference">BatchQuotaShareResourceSharingConfigurationOutputReference</a>

---

##### `capacity_limits_input`<sup>Optional</sup> <a name="capacity_limits_input" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.capacityLimitsInput"></a>

```python
capacity_limits_input: IResolvable | typing.List[BatchQuotaShareCapacityLimits]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>]

---

##### `job_queue_input`<sup>Optional</sup> <a name="job_queue_input" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.jobQueueInput"></a>

```python
job_queue_input: str
```

- *Type:* str

---

##### `preemption_configuration_input`<sup>Optional</sup> <a name="preemption_configuration_input" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.preemptionConfigurationInput"></a>

```python
preemption_configuration_input: IResolvable | BatchQuotaSharePreemptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a>

---

##### `quota_share_name_input`<sup>Optional</sup> <a name="quota_share_name_input" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareNameInput"></a>

```python
quota_share_name_input: str
```

- *Type:* str

---

##### `resource_sharing_configuration_input`<sup>Optional</sup> <a name="resource_sharing_configuration_input" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.resourceSharingConfigurationInput"></a>

```python
resource_sharing_configuration_input: IResolvable | BatchQuotaShareResourceSharingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a>

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `job_queue`<sup>Required</sup> <a name="job_queue" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.jobQueue"></a>

```python
job_queue: str
```

- *Type:* str

---

##### `quota_share_name`<sup>Required</sup> <a name="quota_share_name" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareName"></a>

```python
quota_share_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BatchQuotaShareCapacityLimits <a name="BatchQuotaShareCapacityLimits" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits.Initializer"></a>

```python
from cdktn_provider_awscc import batch_quota_share

batchQuotaShare.BatchQuotaShareCapacityLimits(
  capacity_unit: str,
  max_capacity: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits.property.capacityUnit">capacity_unit</a></code> | <code>str</code> | The unit of compute capacity for the capacityLimit. For example, `ml.m5.large`. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | The maximum capacity available for the quota share. |

---

##### `capacity_unit`<sup>Required</sup> <a name="capacity_unit" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits.property.capacityUnit"></a>

```python
capacity_unit: str
```

- *Type:* str

The unit of compute capacity for the capacityLimit. For example, `ml.m5.large`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#capacity_unit BatchQuotaShare#capacity_unit}

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum capacity available for the quota share.

This value represents the maximum quantity of a resource that can be allocated to jobs in the quota share without borrowing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#max_capacity BatchQuotaShare#max_capacity}

---

### BatchQuotaShareConfig <a name="BatchQuotaShareConfig" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.Initializer"></a>

```python
from cdktn_provider_awscc import batch_quota_share

batchQuotaShare.BatchQuotaShareConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capacity_limits: IResolvable | typing.List[BatchQuotaShareCapacityLimits],
  job_queue: str,
  preemption_configuration: BatchQuotaSharePreemptionConfiguration,
  quota_share_name: str,
  resource_sharing_configuration: BatchQuotaShareResourceSharingConfiguration,
  state: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.capacityLimits">capacity_limits</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>]</code> | A list that specifies the quantity and type of compute capacity allocated to the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.jobQueue">job_queue</a></code> | <code>str</code> | The AWS Batch job queue associated with the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.preemptionConfiguration">preemption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a></code> | Specifies the preemption behavior for jobs in a quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.quotaShareName">quota_share_name</a></code> | <code>str</code> | The name of the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.resourceSharingConfiguration">resource_sharing_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a></code> | Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.state">state</a></code> | <code>str</code> | The state of the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | The tags that you apply to the quota share to help you categorize and organize your resources. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capacity_limits`<sup>Required</sup> <a name="capacity_limits" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.capacityLimits"></a>

```python
capacity_limits: IResolvable | typing.List[BatchQuotaShareCapacityLimits]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>]

A list that specifies the quantity and type of compute capacity allocated to the quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#capacity_limits BatchQuotaShare#capacity_limits}

---

##### `job_queue`<sup>Required</sup> <a name="job_queue" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.jobQueue"></a>

```python
job_queue: str
```

- *Type:* str

The AWS Batch job queue associated with the quota share.

This can be the job queue name or ARN. A job queue must be in the `VALID` state before you can associate it with a quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#job_queue BatchQuotaShare#job_queue}

---

##### `preemption_configuration`<sup>Required</sup> <a name="preemption_configuration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.preemptionConfiguration"></a>

```python
preemption_configuration: BatchQuotaSharePreemptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a>

Specifies the preemption behavior for jobs in a quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#preemption_configuration BatchQuotaShare#preemption_configuration}

---

##### `quota_share_name`<sup>Required</sup> <a name="quota_share_name" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.quotaShareName"></a>

```python
quota_share_name: str
```

- *Type:* str

The name of the quota share.

It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#quota_share_name BatchQuotaShare#quota_share_name}

---

##### `resource_sharing_configuration`<sup>Required</sup> <a name="resource_sharing_configuration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.resourceSharingConfiguration"></a>

```python
resource_sharing_configuration: BatchQuotaShareResourceSharingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a>

Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#resource_sharing_configuration BatchQuotaShare#resource_sharing_configuration}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.state"></a>

```python
state: str
```

- *Type:* str

The state of the quota share.

If the quota share is `ENABLED`, it is able to accept jobs. If the quota share is `DISABLED`, new jobs won't be accepted but jobs already submitted can finish. The default state is `ENABLED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#state BatchQuotaShare#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The tags that you apply to the quota share to help you categorize and organize your resources.

Each tag consists of a key and an optional value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#tags BatchQuotaShare#tags}

---

### BatchQuotaSharePreemptionConfiguration <a name="BatchQuotaSharePreemptionConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import batch_quota_share

batchQuotaShare.BatchQuotaSharePreemptionConfiguration(
  in_share_preemption: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration.property.inSharePreemption">in_share_preemption</a></code> | <code>str</code> | Specifies whether jobs within a quota share can be preempted by another, higher priority job in the same quota share. |

---

##### `in_share_preemption`<sup>Required</sup> <a name="in_share_preemption" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration.property.inSharePreemption"></a>

```python
in_share_preemption: str
```

- *Type:* str

Specifies whether jobs within a quota share can be preempted by another, higher priority job in the same quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#in_share_preemption BatchQuotaShare#in_share_preemption}

---

### BatchQuotaShareResourceSharingConfiguration <a name="BatchQuotaShareResourceSharingConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import batch_quota_share

batchQuotaShare.BatchQuotaShareResourceSharingConfiguration(
  strategy: str,
  borrow_limit: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration.property.strategy">strategy</a></code> | <code>str</code> | The resource sharing strategy for the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration.property.borrowLimit">borrow_limit</a></code> | <code>typing.Union[int, float]</code> | The maximum percentage of additional capacity that the quota share can borrow from other shares. |

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

The resource sharing strategy for the quota share.

The `RESERVE` strategy allows a quota share to reserve idle capacity for itself. `LEND` configures the share to lend its idle capacity to another share in need of capacity. The `LEND_AND_BORROW` strategy configures the share to borrow idle capacity from an underutilized share, as well as lend to another share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#strategy BatchQuotaShare#strategy}

---

##### `borrow_limit`<sup>Optional</sup> <a name="borrow_limit" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration.property.borrowLimit"></a>

```python
borrow_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum percentage of additional capacity that the quota share can borrow from other shares.

`BorrowLimit` can only be applied to quota shares with a strategy of `LEND_AND_BORROW`. This value is expressed as a percentage of the quota share's configured CapacityLimits. The `BorrowLimit` is applied uniformly across all capacity units. For example, if the `BorrowLimit` is 200, the quota share can borrow up to 200% of its configured `maxCapacity` for each capacity unit. The default `BorrowLimit` is -1, which indicates unlimited borrowing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#borrow_limit BatchQuotaShare#borrow_limit}

---

## Classes <a name="Classes" id="Classes"></a>

### BatchQuotaShareCapacityLimitsList <a name="BatchQuotaShareCapacityLimitsList" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer"></a>

```python
from cdktn_provider_awscc import batch_quota_share

batchQuotaShare.BatchQuotaShareCapacityLimitsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchQuotaShareCapacityLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BatchQuotaShareCapacityLimits]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>]

---


### BatchQuotaShareCapacityLimitsOutputReference <a name="BatchQuotaShareCapacityLimitsOutputReference" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import batch_quota_share

batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.capacityUnitInput">capacity_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.maxCapacityInput">max_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.capacityUnit">capacity_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_unit_input`<sup>Optional</sup> <a name="capacity_unit_input" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.capacityUnitInput"></a>

```python
capacity_unit_input: str
```

- *Type:* str

---

##### `max_capacity_input`<sup>Optional</sup> <a name="max_capacity_input" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.maxCapacityInput"></a>

```python
max_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_unit`<sup>Required</sup> <a name="capacity_unit" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.capacityUnit"></a>

```python
capacity_unit: str
```

- *Type:* str

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BatchQuotaShareCapacityLimits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>

---


### BatchQuotaSharePreemptionConfigurationOutputReference <a name="BatchQuotaSharePreemptionConfigurationOutputReference" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import batch_quota_share

batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.inSharePreemptionInput">in_share_preemption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.inSharePreemption">in_share_preemption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `in_share_preemption_input`<sup>Optional</sup> <a name="in_share_preemption_input" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.inSharePreemptionInput"></a>

```python
in_share_preemption_input: str
```

- *Type:* str

---

##### `in_share_preemption`<sup>Required</sup> <a name="in_share_preemption" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.inSharePreemption"></a>

```python
in_share_preemption: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BatchQuotaSharePreemptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a>

---


### BatchQuotaShareResourceSharingConfigurationOutputReference <a name="BatchQuotaShareResourceSharingConfigurationOutputReference" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import batch_quota_share

batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.resetBorrowLimit">reset_borrow_limit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_borrow_limit` <a name="reset_borrow_limit" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.resetBorrowLimit"></a>

```python
def reset_borrow_limit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.borrowLimitInput">borrow_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.strategyInput">strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.borrowLimit">borrow_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.strategy">strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `borrow_limit_input`<sup>Optional</sup> <a name="borrow_limit_input" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.borrowLimitInput"></a>

```python
borrow_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `strategy_input`<sup>Optional</sup> <a name="strategy_input" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.strategyInput"></a>

```python
strategy_input: str
```

- *Type:* str

---

##### `borrow_limit`<sup>Required</sup> <a name="borrow_limit" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.borrowLimit"></a>

```python
borrow_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BatchQuotaShareResourceSharingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a>

---



