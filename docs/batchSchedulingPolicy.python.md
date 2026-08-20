# `batchSchedulingPolicy` Submodule <a name="`batchSchedulingPolicy` Submodule" id="@cdktn/provider-awscc.batchSchedulingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchSchedulingPolicy <a name="BatchSchedulingPolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy awscc_batch_scheduling_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  fairshare_policy: BatchSchedulingPolicyFairsharePolicy = None,
  name: str = None,
  quota_share_policy: BatchSchedulingPolicyQuotaSharePolicy = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.fairsharePolicy">fairshare_policy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a></code> | Fair Share Policy for the Job Queue. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of Scheduling Policy. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.quotaSharePolicy">quota_share_policy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a></code> | Quota Share Policy for the Job Queue. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A key-value pair to associate with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `fairshare_policy`<sup>Optional</sup> <a name="fairshare_policy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.fairsharePolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a>

Fair Share Policy for the Job Queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#fairshare_policy BatchSchedulingPolicy#fairshare_policy}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.name"></a>

- *Type:* str

Name of Scheduling Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#name BatchSchedulingPolicy#name}

---

##### `quota_share_policy`<sup>Optional</sup> <a name="quota_share_policy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.quotaSharePolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a>

Quota Share Policy for the Job Queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#quota_share_policy BatchSchedulingPolicy#quota_share_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#tags BatchSchedulingPolicy#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putFairsharePolicy">put_fairshare_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putQuotaSharePolicy">put_quota_share_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetFairsharePolicy">reset_fairshare_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetQuotaSharePolicy">reset_quota_share_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_fairshare_policy` <a name="put_fairshare_policy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putFairsharePolicy"></a>

```python
def put_fairshare_policy(
  compute_reservation: typing.Union[int, float] = None,
  share_decay_seconds: typing.Union[int, float] = None,
  share_distribution: IResolvable | typing.List[BatchSchedulingPolicyFairsharePolicyShareDistribution] = None
) -> None
```

###### `compute_reservation`<sup>Optional</sup> <a name="compute_reservation" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putFairsharePolicy.parameter.computeReservation"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}.

---

###### `share_decay_seconds`<sup>Optional</sup> <a name="share_decay_seconds" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putFairsharePolicy.parameter.shareDecaySeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}.

---

###### `share_distribution`<sup>Optional</sup> <a name="share_distribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putFairsharePolicy.parameter.shareDistribution"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>]

List of Share Attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#share_distribution BatchSchedulingPolicy#share_distribution}

---

##### `put_quota_share_policy` <a name="put_quota_share_policy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putQuotaSharePolicy"></a>

```python
def put_quota_share_policy(
  idle_resource_assignment_strategy: str = None
) -> None
```

###### `idle_resource_assignment_strategy`<sup>Optional</sup> <a name="idle_resource_assignment_strategy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putQuotaSharePolicy.parameter.idleResourceAssignmentStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#idle_resource_assignment_strategy BatchSchedulingPolicy#idle_resource_assignment_strategy}.

---

##### `reset_fairshare_policy` <a name="reset_fairshare_policy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetFairsharePolicy"></a>

```python
def reset_fairshare_policy() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_quota_share_policy` <a name="reset_quota_share_policy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetQuotaSharePolicy"></a>

```python
def reset_quota_share_policy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BatchSchedulingPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource"></a>

```python
from cdktn_provider_awscc import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BatchSchedulingPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BatchSchedulingPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BatchSchedulingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BatchSchedulingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairsharePolicy">fairshare_policy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference">BatchSchedulingPolicyFairsharePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.quotaSharePolicy">quota_share_policy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference">BatchSchedulingPolicyQuotaSharePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairsharePolicyInput">fairshare_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.quotaSharePolicyInput">quota_share_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `fairshare_policy`<sup>Required</sup> <a name="fairshare_policy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairsharePolicy"></a>

```python
fairshare_policy: BatchSchedulingPolicyFairsharePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference">BatchSchedulingPolicyFairsharePolicyOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `quota_share_policy`<sup>Required</sup> <a name="quota_share_policy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.quotaSharePolicy"></a>

```python
quota_share_policy: BatchSchedulingPolicyQuotaSharePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference">BatchSchedulingPolicyQuotaSharePolicyOutputReference</a>

---

##### `fairshare_policy_input`<sup>Optional</sup> <a name="fairshare_policy_input" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairsharePolicyInput"></a>

```python
fairshare_policy_input: IResolvable | BatchSchedulingPolicyFairsharePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `quota_share_policy_input`<sup>Optional</sup> <a name="quota_share_policy_input" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.quotaSharePolicyInput"></a>

```python
quota_share_policy_input: IResolvable | BatchSchedulingPolicyQuotaSharePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BatchSchedulingPolicyConfig <a name="BatchSchedulingPolicyConfig" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  fairshare_policy: BatchSchedulingPolicyFairsharePolicy = None,
  name: str = None,
  quota_share_policy: BatchSchedulingPolicyQuotaSharePolicy = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.fairsharePolicy">fairshare_policy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a></code> | Fair Share Policy for the Job Queue. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.name">name</a></code> | <code>str</code> | Name of Scheduling Policy. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.quotaSharePolicy">quota_share_policy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a></code> | Quota Share Policy for the Job Queue. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A key-value pair to associate with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `fairshare_policy`<sup>Optional</sup> <a name="fairshare_policy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.fairsharePolicy"></a>

```python
fairshare_policy: BatchSchedulingPolicyFairsharePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a>

Fair Share Policy for the Job Queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#fairshare_policy BatchSchedulingPolicy#fairshare_policy}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of Scheduling Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#name BatchSchedulingPolicy#name}

---

##### `quota_share_policy`<sup>Optional</sup> <a name="quota_share_policy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.quotaSharePolicy"></a>

```python
quota_share_policy: BatchSchedulingPolicyQuotaSharePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a>

Quota Share Policy for the Job Queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#quota_share_policy BatchSchedulingPolicy#quota_share_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#tags BatchSchedulingPolicy#tags}

---

### BatchSchedulingPolicyFairsharePolicy <a name="BatchSchedulingPolicyFairsharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy(
  compute_reservation: typing.Union[int, float] = None,
  share_decay_seconds: typing.Union[int, float] = None,
  share_distribution: IResolvable | typing.List[BatchSchedulingPolicyFairsharePolicyShareDistribution] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.computeReservation">compute_reservation</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.shareDecaySeconds">share_decay_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.shareDistribution">share_distribution</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>]</code> | List of Share Attributes. |

---

##### `compute_reservation`<sup>Optional</sup> <a name="compute_reservation" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.computeReservation"></a>

```python
compute_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}.

---

##### `share_decay_seconds`<sup>Optional</sup> <a name="share_decay_seconds" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.shareDecaySeconds"></a>

```python
share_decay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}.

---

##### `share_distribution`<sup>Optional</sup> <a name="share_distribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.shareDistribution"></a>

```python
share_distribution: IResolvable | typing.List[BatchSchedulingPolicyFairsharePolicyShareDistribution]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>]

List of Share Attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#share_distribution BatchSchedulingPolicy#share_distribution}

---

### BatchSchedulingPolicyFairsharePolicyShareDistribution <a name="BatchSchedulingPolicyFairsharePolicyShareDistribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.Initializer"></a>

```python
from cdktn_provider_awscc import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution(
  share_identifier: str = None,
  weight_factor: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.property.shareIdentifier">share_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#share_identifier BatchSchedulingPolicy#share_identifier}. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.property.weightFactor">weight_factor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#weight_factor BatchSchedulingPolicy#weight_factor}. |

---

##### `share_identifier`<sup>Optional</sup> <a name="share_identifier" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.property.shareIdentifier"></a>

```python
share_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#share_identifier BatchSchedulingPolicy#share_identifier}.

---

##### `weight_factor`<sup>Optional</sup> <a name="weight_factor" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.property.weightFactor"></a>

```python
weight_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#weight_factor BatchSchedulingPolicy#weight_factor}.

---

### BatchSchedulingPolicyQuotaSharePolicy <a name="BatchSchedulingPolicyQuotaSharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy(
  idle_resource_assignment_strategy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy.property.idleResourceAssignmentStrategy">idle_resource_assignment_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#idle_resource_assignment_strategy BatchSchedulingPolicy#idle_resource_assignment_strategy}. |

---

##### `idle_resource_assignment_strategy`<sup>Optional</sup> <a name="idle_resource_assignment_strategy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy.property.idleResourceAssignmentStrategy"></a>

```python
idle_resource_assignment_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_scheduling_policy#idle_resource_assignment_strategy BatchSchedulingPolicy#idle_resource_assignment_strategy}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchSchedulingPolicyFairsharePolicyOutputReference <a name="BatchSchedulingPolicyFairsharePolicyOutputReference" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.putShareDistribution">put_share_distribution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetComputeReservation">reset_compute_reservation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetShareDecaySeconds">reset_share_decay_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetShareDistribution">reset_share_distribution</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_share_distribution` <a name="put_share_distribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.putShareDistribution"></a>

```python
def put_share_distribution(
  value: IResolvable | typing.List[BatchSchedulingPolicyFairsharePolicyShareDistribution]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.putShareDistribution.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>]

---

##### `reset_compute_reservation` <a name="reset_compute_reservation" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetComputeReservation"></a>

```python
def reset_compute_reservation() -> None
```

##### `reset_share_decay_seconds` <a name="reset_share_decay_seconds" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetShareDecaySeconds"></a>

```python
def reset_share_decay_seconds() -> None
```

##### `reset_share_distribution` <a name="reset_share_distribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetShareDistribution"></a>

```python
def reset_share_distribution() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistribution">share_distribution</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList">BatchSchedulingPolicyFairsharePolicyShareDistributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservationInput">compute_reservation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySecondsInput">share_decay_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistributionInput">share_distribution_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservation">compute_reservation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySeconds">share_decay_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `share_distribution`<sup>Required</sup> <a name="share_distribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistribution"></a>

```python
share_distribution: BatchSchedulingPolicyFairsharePolicyShareDistributionList
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList">BatchSchedulingPolicyFairsharePolicyShareDistributionList</a>

---

##### `compute_reservation_input`<sup>Optional</sup> <a name="compute_reservation_input" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservationInput"></a>

```python
compute_reservation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `share_decay_seconds_input`<sup>Optional</sup> <a name="share_decay_seconds_input" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySecondsInput"></a>

```python
share_decay_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `share_distribution_input`<sup>Optional</sup> <a name="share_distribution_input" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistributionInput"></a>

```python
share_distribution_input: IResolvable | typing.List[BatchSchedulingPolicyFairsharePolicyShareDistribution]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>]

---

##### `compute_reservation`<sup>Required</sup> <a name="compute_reservation" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservation"></a>

```python
compute_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `share_decay_seconds`<sup>Required</sup> <a name="share_decay_seconds" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySeconds"></a>

```python
share_decay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BatchSchedulingPolicyFairsharePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a>

---


### BatchSchedulingPolicyFairsharePolicyShareDistributionList <a name="BatchSchedulingPolicyFairsharePolicyShareDistributionList" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer"></a>

```python
from cdktn_provider_awscc import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BatchSchedulingPolicyFairsharePolicyShareDistribution]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>]

---


### BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference <a name="BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resetShareIdentifier">reset_share_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resetWeightFactor">reset_weight_factor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_share_identifier` <a name="reset_share_identifier" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resetShareIdentifier"></a>

```python
def reset_share_identifier() -> None
```

##### `reset_weight_factor` <a name="reset_weight_factor" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resetWeightFactor"></a>

```python
def reset_weight_factor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifierInput">share_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactorInput">weight_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifier">share_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactor">weight_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `share_identifier_input`<sup>Optional</sup> <a name="share_identifier_input" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifierInput"></a>

```python
share_identifier_input: str
```

- *Type:* str

---

##### `weight_factor_input`<sup>Optional</sup> <a name="weight_factor_input" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactorInput"></a>

```python
weight_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `share_identifier`<sup>Required</sup> <a name="share_identifier" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifier"></a>

```python
share_identifier: str
```

- *Type:* str

---

##### `weight_factor`<sup>Required</sup> <a name="weight_factor" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactor"></a>

```python
weight_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BatchSchedulingPolicyFairsharePolicyShareDistribution
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>

---


### BatchSchedulingPolicyQuotaSharePolicyOutputReference <a name="BatchSchedulingPolicyQuotaSharePolicyOutputReference" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import batch_scheduling_policy

batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resetIdleResourceAssignmentStrategy">reset_idle_resource_assignment_strategy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_idle_resource_assignment_strategy` <a name="reset_idle_resource_assignment_strategy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resetIdleResourceAssignmentStrategy"></a>

```python
def reset_idle_resource_assignment_strategy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategyInput">idle_resource_assignment_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategy">idle_resource_assignment_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idle_resource_assignment_strategy_input`<sup>Optional</sup> <a name="idle_resource_assignment_strategy_input" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategyInput"></a>

```python
idle_resource_assignment_strategy_input: str
```

- *Type:* str

---

##### `idle_resource_assignment_strategy`<sup>Required</sup> <a name="idle_resource_assignment_strategy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategy"></a>

```python
idle_resource_assignment_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BatchSchedulingPolicyQuotaSharePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a>

---



