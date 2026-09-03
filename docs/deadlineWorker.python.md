# `deadlineWorker` Submodule <a name="`deadlineWorker` Submodule" id="@cdktn/provider-awscc.deadlineWorker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeadlineWorker <a name="DeadlineWorker" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/deadline_worker awscc_deadline_worker}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_worker

deadlineWorker.DeadlineWorker(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  farm_id: str,
  fleet_id: str,
  host_properties: DeadlineWorkerHostProperties = None,
  tags: IResolvable | typing.List[DeadlineWorkerTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.farmId">farm_id</a></code> | <code>str</code> | The farm ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.fleetId">fleet_id</a></code> | <code>str</code> | The fleet ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.hostProperties">host_properties</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties">DeadlineWorkerHostProperties</a></code> | The IP address and host name of the worker. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags">DeadlineWorkerTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `farm_id`<sup>Required</sup> <a name="farm_id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.farmId"></a>

- *Type:* str

The farm ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/deadline_worker#farm_id DeadlineWorker#farm_id}

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.fleetId"></a>

- *Type:* str

The fleet ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/deadline_worker#fleet_id DeadlineWorker#fleet_id}

---

##### `host_properties`<sup>Optional</sup> <a name="host_properties" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.hostProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties">DeadlineWorkerHostProperties</a>

The IP address and host name of the worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/deadline_worker#host_properties DeadlineWorker#host_properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags">DeadlineWorkerTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/deadline_worker#tags DeadlineWorker#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.putHostProperties">put_host_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.resetHostProperties">reset_host_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_host_properties` <a name="put_host_properties" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.putHostProperties"></a>

```python
def put_host_properties(
  host_name: str = None,
  ip_addresses: DeadlineWorkerHostPropertiesIpAddresses = None
) -> None
```

###### `host_name`<sup>Optional</sup> <a name="host_name" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.putHostProperties.parameter.hostName"></a>

- *Type:* str

The host name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/deadline_worker#host_name DeadlineWorker#host_name}

---

###### `ip_addresses`<sup>Optional</sup> <a name="ip_addresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.putHostProperties.parameter.ipAddresses"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses">DeadlineWorkerHostPropertiesIpAddresses</a>

The IP addresses for a host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/deadline_worker#ip_addresses DeadlineWorker#ip_addresses}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DeadlineWorkerTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags">DeadlineWorkerTags</a>]

---

##### `reset_host_properties` <a name="reset_host_properties" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.resetHostProperties"></a>

```python
def reset_host_properties() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DeadlineWorker resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.isConstruct"></a>

```python
from cdktn_provider_awscc import deadline_worker

deadlineWorker.DeadlineWorker.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.isTerraformElement"></a>

```python
from cdktn_provider_awscc import deadline_worker

deadlineWorker.DeadlineWorker.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.isTerraformResource"></a>

```python
from cdktn_provider_awscc import deadline_worker

deadlineWorker.DeadlineWorker.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import deadline_worker

deadlineWorker.DeadlineWorker.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DeadlineWorker resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DeadlineWorker to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DeadlineWorker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/deadline_worker#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DeadlineWorker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.hostProperties">host_properties</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference">DeadlineWorkerHostPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList">DeadlineWorkerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.workerId">worker_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.farmIdInput">farm_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.fleetIdInput">fleet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.hostPropertiesInput">host_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties">DeadlineWorkerHostProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags">DeadlineWorkerTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.farmId">farm_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `host_properties`<sup>Required</sup> <a name="host_properties" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.hostProperties"></a>

```python
host_properties: DeadlineWorkerHostPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference">DeadlineWorkerHostPropertiesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.tags"></a>

```python
tags: DeadlineWorkerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList">DeadlineWorkerTagsList</a>

---

##### `worker_id`<sup>Required</sup> <a name="worker_id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.workerId"></a>

```python
worker_id: str
```

- *Type:* str

---

##### `farm_id_input`<sup>Optional</sup> <a name="farm_id_input" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.farmIdInput"></a>

```python
farm_id_input: str
```

- *Type:* str

---

##### `fleet_id_input`<sup>Optional</sup> <a name="fleet_id_input" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.fleetIdInput"></a>

```python
fleet_id_input: str
```

- *Type:* str

---

##### `host_properties_input`<sup>Optional</sup> <a name="host_properties_input" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.hostPropertiesInput"></a>

```python
host_properties_input: IResolvable | DeadlineWorkerHostProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties">DeadlineWorkerHostProperties</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DeadlineWorkerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags">DeadlineWorkerTags</a>]

---

##### `farm_id`<sup>Required</sup> <a name="farm_id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.farmId"></a>

```python
farm_id: str
```

- *Type:* str

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorker.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DeadlineWorkerConfig <a name="DeadlineWorkerConfig" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_worker

deadlineWorker.DeadlineWorkerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  farm_id: str,
  fleet_id: str,
  host_properties: DeadlineWorkerHostProperties = None,
  tags: IResolvable | typing.List[DeadlineWorkerTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.farmId">farm_id</a></code> | <code>str</code> | The farm ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.fleetId">fleet_id</a></code> | <code>str</code> | The fleet ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.hostProperties">host_properties</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties">DeadlineWorkerHostProperties</a></code> | The IP address and host name of the worker. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags">DeadlineWorkerTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `farm_id`<sup>Required</sup> <a name="farm_id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.farmId"></a>

```python
farm_id: str
```

- *Type:* str

The farm ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/deadline_worker#farm_id DeadlineWorker#farm_id}

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

The fleet ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/deadline_worker#fleet_id DeadlineWorker#fleet_id}

---

##### `host_properties`<sup>Optional</sup> <a name="host_properties" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.hostProperties"></a>

```python
host_properties: DeadlineWorkerHostProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties">DeadlineWorkerHostProperties</a>

The IP address and host name of the worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/deadline_worker#host_properties DeadlineWorker#host_properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DeadlineWorkerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags">DeadlineWorkerTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/deadline_worker#tags DeadlineWorker#tags}

---

### DeadlineWorkerHostProperties <a name="DeadlineWorkerHostProperties" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_worker

deadlineWorker.DeadlineWorkerHostProperties(
  host_name: str = None,
  ip_addresses: DeadlineWorkerHostPropertiesIpAddresses = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties.property.hostName">host_name</a></code> | <code>str</code> | The host name. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties.property.ipAddresses">ip_addresses</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses">DeadlineWorkerHostPropertiesIpAddresses</a></code> | The IP addresses for a host. |

---

##### `host_name`<sup>Optional</sup> <a name="host_name" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

The host name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/deadline_worker#host_name DeadlineWorker#host_name}

---

##### `ip_addresses`<sup>Optional</sup> <a name="ip_addresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties.property.ipAddresses"></a>

```python
ip_addresses: DeadlineWorkerHostPropertiesIpAddresses
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses">DeadlineWorkerHostPropertiesIpAddresses</a>

The IP addresses for a host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/deadline_worker#ip_addresses DeadlineWorker#ip_addresses}

---

### DeadlineWorkerHostPropertiesIpAddresses <a name="DeadlineWorkerHostPropertiesIpAddresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_worker

deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses(
  ip_v4_addresses: typing.List[str] = None,
  ip_v6_addresses: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses.property.ipV4Addresses">ip_v4_addresses</a></code> | <code>typing.List[str]</code> | The IpV4 address of the network. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses.property.ipV6Addresses">ip_v6_addresses</a></code> | <code>typing.List[str]</code> | The IpV6 address for the network and node component. |

---

##### `ip_v4_addresses`<sup>Optional</sup> <a name="ip_v4_addresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses.property.ipV4Addresses"></a>

```python
ip_v4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

The IpV4 address of the network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/deadline_worker#ip_v4_addresses DeadlineWorker#ip_v4_addresses}

---

##### `ip_v6_addresses`<sup>Optional</sup> <a name="ip_v6_addresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses.property.ipV6Addresses"></a>

```python
ip_v6_addresses: typing.List[str]
```

- *Type:* typing.List[str]

The IpV6 address for the network and node component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/deadline_worker#ip_v6_addresses DeadlineWorker#ip_v6_addresses}

---

### DeadlineWorkerTags <a name="DeadlineWorkerTags" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_worker

deadlineWorker.DeadlineWorkerTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/deadline_worker#key DeadlineWorker#key}. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/deadline_worker#value DeadlineWorker#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/deadline_worker#key DeadlineWorker#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/deadline_worker#value DeadlineWorker#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DeadlineWorkerHostPropertiesIpAddressesOutputReference <a name="DeadlineWorkerHostPropertiesIpAddressesOutputReference" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_worker

deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.resetIpV4Addresses">reset_ip_v4_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.resetIpV6Addresses">reset_ip_v6_addresses</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_v4_addresses` <a name="reset_ip_v4_addresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.resetIpV4Addresses"></a>

```python
def reset_ip_v4_addresses() -> None
```

##### `reset_ip_v6_addresses` <a name="reset_ip_v6_addresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.resetIpV6Addresses"></a>

```python
def reset_ip_v6_addresses() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.ipV4AddressesInput">ip_v4_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.ipV6AddressesInput">ip_v6_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.ipV4Addresses">ip_v4_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.ipV6Addresses">ip_v6_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses">DeadlineWorkerHostPropertiesIpAddresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_v4_addresses_input`<sup>Optional</sup> <a name="ip_v4_addresses_input" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.ipV4AddressesInput"></a>

```python
ip_v4_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_v6_addresses_input`<sup>Optional</sup> <a name="ip_v6_addresses_input" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.ipV6AddressesInput"></a>

```python
ip_v6_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_v4_addresses`<sup>Required</sup> <a name="ip_v4_addresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.ipV4Addresses"></a>

```python
ip_v4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_v6_addresses`<sup>Required</sup> <a name="ip_v6_addresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.ipV6Addresses"></a>

```python
ip_v6_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineWorkerHostPropertiesIpAddresses
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses">DeadlineWorkerHostPropertiesIpAddresses</a>

---


### DeadlineWorkerHostPropertiesOutputReference <a name="DeadlineWorkerHostPropertiesOutputReference" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_worker

deadlineWorker.DeadlineWorkerHostPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.putIpAddresses">put_ip_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.resetHostName">reset_host_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.resetIpAddresses">reset_ip_addresses</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ip_addresses` <a name="put_ip_addresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.putIpAddresses"></a>

```python
def put_ip_addresses(
  ip_v4_addresses: typing.List[str] = None,
  ip_v6_addresses: typing.List[str] = None
) -> None
```

###### `ip_v4_addresses`<sup>Optional</sup> <a name="ip_v4_addresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.putIpAddresses.parameter.ipV4Addresses"></a>

- *Type:* typing.List[str]

The IpV4 address of the network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/deadline_worker#ip_v4_addresses DeadlineWorker#ip_v4_addresses}

---

###### `ip_v6_addresses`<sup>Optional</sup> <a name="ip_v6_addresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.putIpAddresses.parameter.ipV6Addresses"></a>

- *Type:* typing.List[str]

The IpV6 address for the network and node component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/deadline_worker#ip_v6_addresses DeadlineWorker#ip_v6_addresses}

---

##### `reset_host_name` <a name="reset_host_name" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.resetHostName"></a>

```python
def reset_host_name() -> None
```

##### `reset_ip_addresses` <a name="reset_ip_addresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.resetIpAddresses"></a>

```python
def reset_ip_addresses() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.ipAddresses">ip_addresses</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference">DeadlineWorkerHostPropertiesIpAddressesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.ipAddressesInput">ip_addresses_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses">DeadlineWorkerHostPropertiesIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties">DeadlineWorkerHostProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.ipAddresses"></a>

```python
ip_addresses: DeadlineWorkerHostPropertiesIpAddressesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddressesOutputReference">DeadlineWorkerHostPropertiesIpAddressesOutputReference</a>

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `ip_addresses_input`<sup>Optional</sup> <a name="ip_addresses_input" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.ipAddressesInput"></a>

```python
ip_addresses_input: IResolvable | DeadlineWorkerHostPropertiesIpAddresses
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesIpAddresses">DeadlineWorkerHostPropertiesIpAddresses</a>

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineWorkerHostProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerHostProperties">DeadlineWorkerHostProperties</a>

---


### DeadlineWorkerTagsList <a name="DeadlineWorkerTagsList" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_worker

deadlineWorker.DeadlineWorkerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DeadlineWorkerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags">DeadlineWorkerTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DeadlineWorkerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags">DeadlineWorkerTags</a>]

---


### DeadlineWorkerTagsOutputReference <a name="DeadlineWorkerTagsOutputReference" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_worker

deadlineWorker.DeadlineWorkerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags">DeadlineWorkerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineWorkerTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineWorker.DeadlineWorkerTags">DeadlineWorkerTags</a>

---



