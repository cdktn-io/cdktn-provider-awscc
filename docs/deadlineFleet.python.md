# `deadlineFleet` Submodule <a name="`deadlineFleet` Submodule" id="@cdktn/provider-awscc.deadlineFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeadlineFleet <a name="DeadlineFleet" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet awscc_deadline_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleet(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration: DeadlineFleetConfiguration,
  display_name: str,
  farm_id: str,
  max_worker_count: typing.Union[int, float],
  role_arn: str,
  description: str = None,
  host_configuration: DeadlineFleetHostConfiguration = None,
  min_worker_count: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[DeadlineFleetTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration">DeadlineFleetConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#configuration DeadlineFleet#configuration}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#display_name DeadlineFleet#display_name}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.farmId">farm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#farm_id DeadlineFleet#farm_id}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.maxWorkerCount">max_worker_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max_worker_count DeadlineFleet#max_worker_count}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#role_arn DeadlineFleet#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#description DeadlineFleet#description}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.hostConfiguration">host_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration">DeadlineFleetHostConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#host_configuration DeadlineFleet#host_configuration}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.minWorkerCount">min_worker_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min_worker_count DeadlineFleet#min_worker_count}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags">DeadlineFleetTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration">DeadlineFleetConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#configuration DeadlineFleet#configuration}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#display_name DeadlineFleet#display_name}.

---

##### `farm_id`<sup>Required</sup> <a name="farm_id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.farmId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#farm_id DeadlineFleet#farm_id}.

---

##### `max_worker_count`<sup>Required</sup> <a name="max_worker_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.maxWorkerCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max_worker_count DeadlineFleet#max_worker_count}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#role_arn DeadlineFleet#role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#description DeadlineFleet#description}.

---

##### `host_configuration`<sup>Optional</sup> <a name="host_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.hostConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration">DeadlineFleetHostConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#host_configuration DeadlineFleet#host_configuration}.

---

##### `min_worker_count`<sup>Optional</sup> <a name="min_worker_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.minWorkerCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min_worker_count DeadlineFleet#min_worker_count}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags">DeadlineFleetTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#tags DeadlineFleet#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.putHostConfiguration">put_host_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.resetHostConfiguration">reset_host_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.resetMinWorkerCount">reset_min_worker_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.putConfiguration"></a>

```python
def put_configuration(
  customer_managed: DeadlineFleetConfigurationCustomerManaged = None,
  service_managed_ec2: DeadlineFleetConfigurationServiceManagedEc2 = None
) -> None
```

###### `customer_managed`<sup>Optional</sup> <a name="customer_managed" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.putConfiguration.parameter.customerManaged"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged">DeadlineFleetConfigurationCustomerManaged</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#customer_managed DeadlineFleet#customer_managed}.

---

###### `service_managed_ec2`<sup>Optional</sup> <a name="service_managed_ec2" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.putConfiguration.parameter.serviceManagedEc2"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2">DeadlineFleetConfigurationServiceManagedEc2</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#service_managed_ec_2 DeadlineFleet#service_managed_ec_2}.

---

##### `put_host_configuration` <a name="put_host_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.putHostConfiguration"></a>

```python
def put_host_configuration(
  script_body: str = None,
  script_timeout_seconds: typing.Union[int, float] = None
) -> None
```

###### `script_body`<sup>Optional</sup> <a name="script_body" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.putHostConfiguration.parameter.scriptBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#script_body DeadlineFleet#script_body}.

---

###### `script_timeout_seconds`<sup>Optional</sup> <a name="script_timeout_seconds" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.putHostConfiguration.parameter.scriptTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#script_timeout_seconds DeadlineFleet#script_timeout_seconds}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DeadlineFleetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags">DeadlineFleetTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_host_configuration` <a name="reset_host_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.resetHostConfiguration"></a>

```python
def reset_host_configuration() -> None
```

##### `reset_min_worker_count` <a name="reset_min_worker_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.resetMinWorkerCount"></a>

```python
def reset_min_worker_count() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DeadlineFleet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.isConstruct"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.isTerraformResource"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DeadlineFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DeadlineFleet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DeadlineFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DeadlineFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.capabilities">capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference">DeadlineFleetCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference">DeadlineFleetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.hostConfiguration">host_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference">DeadlineFleetHostConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList">DeadlineFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.workerCount">worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.configurationInput">configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration">DeadlineFleetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.farmIdInput">farm_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.hostConfigurationInput">host_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration">DeadlineFleetHostConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.maxWorkerCountInput">max_worker_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.minWorkerCountInput">min_worker_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags">DeadlineFleetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.farmId">farm_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.maxWorkerCount">max_worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.minWorkerCount">min_worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.capabilities"></a>

```python
capabilities: DeadlineFleetCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference">DeadlineFleetCapabilitiesOutputReference</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.configuration"></a>

```python
configuration: DeadlineFleetConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference">DeadlineFleetConfigurationOutputReference</a>

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `host_configuration`<sup>Required</sup> <a name="host_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.hostConfiguration"></a>

```python
host_configuration: DeadlineFleetHostConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference">DeadlineFleetHostConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.tags"></a>

```python
tags: DeadlineFleetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList">DeadlineFleetTagsList</a>

---

##### `worker_count`<sup>Required</sup> <a name="worker_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.workerCount"></a>

```python
worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.configurationInput"></a>

```python
configuration_input: IResolvable | DeadlineFleetConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration">DeadlineFleetConfiguration</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `farm_id_input`<sup>Optional</sup> <a name="farm_id_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.farmIdInput"></a>

```python
farm_id_input: str
```

- *Type:* str

---

##### `host_configuration_input`<sup>Optional</sup> <a name="host_configuration_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.hostConfigurationInput"></a>

```python
host_configuration_input: IResolvable | DeadlineFleetHostConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration">DeadlineFleetHostConfiguration</a>

---

##### `max_worker_count_input`<sup>Optional</sup> <a name="max_worker_count_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.maxWorkerCountInput"></a>

```python
max_worker_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_worker_count_input`<sup>Optional</sup> <a name="min_worker_count_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.minWorkerCountInput"></a>

```python
min_worker_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DeadlineFleetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags">DeadlineFleetTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `farm_id`<sup>Required</sup> <a name="farm_id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.farmId"></a>

```python
farm_id: str
```

- *Type:* str

---

##### `max_worker_count`<sup>Required</sup> <a name="max_worker_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.maxWorkerCount"></a>

```python
max_worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_worker_count`<sup>Required</sup> <a name="min_worker_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.minWorkerCount"></a>

```python
min_worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DeadlineFleetCapabilities <a name="DeadlineFleetCapabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilities.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetCapabilities()
```


### DeadlineFleetCapabilitiesAmounts <a name="DeadlineFleetCapabilitiesAmounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmounts.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetCapabilitiesAmounts()
```


### DeadlineFleetCapabilitiesAttributes <a name="DeadlineFleetCapabilitiesAttributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetCapabilitiesAttributes()
```


### DeadlineFleetConfig <a name="DeadlineFleetConfig" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration: DeadlineFleetConfiguration,
  display_name: str,
  farm_id: str,
  max_worker_count: typing.Union[int, float],
  role_arn: str,
  description: str = None,
  host_configuration: DeadlineFleetHostConfiguration = None,
  min_worker_count: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[DeadlineFleetTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration">DeadlineFleetConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#configuration DeadlineFleet#configuration}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#display_name DeadlineFleet#display_name}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.farmId">farm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#farm_id DeadlineFleet#farm_id}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.maxWorkerCount">max_worker_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max_worker_count DeadlineFleet#max_worker_count}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#role_arn DeadlineFleet#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#description DeadlineFleet#description}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.hostConfiguration">host_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration">DeadlineFleetHostConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#host_configuration DeadlineFleet#host_configuration}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.minWorkerCount">min_worker_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min_worker_count DeadlineFleet#min_worker_count}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags">DeadlineFleetTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.configuration"></a>

```python
configuration: DeadlineFleetConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration">DeadlineFleetConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#configuration DeadlineFleet#configuration}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#display_name DeadlineFleet#display_name}.

---

##### `farm_id`<sup>Required</sup> <a name="farm_id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.farmId"></a>

```python
farm_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#farm_id DeadlineFleet#farm_id}.

---

##### `max_worker_count`<sup>Required</sup> <a name="max_worker_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.maxWorkerCount"></a>

```python
max_worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max_worker_count DeadlineFleet#max_worker_count}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#role_arn DeadlineFleet#role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#description DeadlineFleet#description}.

---

##### `host_configuration`<sup>Optional</sup> <a name="host_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.hostConfiguration"></a>

```python
host_configuration: DeadlineFleetHostConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration">DeadlineFleetHostConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#host_configuration DeadlineFleet#host_configuration}.

---

##### `min_worker_count`<sup>Optional</sup> <a name="min_worker_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.minWorkerCount"></a>

```python
min_worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min_worker_count DeadlineFleet#min_worker_count}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DeadlineFleetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags">DeadlineFleetTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#tags DeadlineFleet#tags}

---

### DeadlineFleetConfiguration <a name="DeadlineFleetConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfiguration(
  customer_managed: DeadlineFleetConfigurationCustomerManaged = None,
  service_managed_ec2: DeadlineFleetConfigurationServiceManagedEc2 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration.property.customerManaged">customer_managed</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged">DeadlineFleetConfigurationCustomerManaged</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#customer_managed DeadlineFleet#customer_managed}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration.property.serviceManagedEc2">service_managed_ec2</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2">DeadlineFleetConfigurationServiceManagedEc2</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#service_managed_ec_2 DeadlineFleet#service_managed_ec_2}. |

---

##### `customer_managed`<sup>Optional</sup> <a name="customer_managed" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration.property.customerManaged"></a>

```python
customer_managed: DeadlineFleetConfigurationCustomerManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged">DeadlineFleetConfigurationCustomerManaged</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#customer_managed DeadlineFleet#customer_managed}.

---

##### `service_managed_ec2`<sup>Optional</sup> <a name="service_managed_ec2" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration.property.serviceManagedEc2"></a>

```python
service_managed_ec2: DeadlineFleetConfigurationServiceManagedEc2
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2">DeadlineFleetConfigurationServiceManagedEc2</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#service_managed_ec_2 DeadlineFleet#service_managed_ec_2}.

---

### DeadlineFleetConfigurationCustomerManaged <a name="DeadlineFleetConfigurationCustomerManaged" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationCustomerManaged(
  auto_scaling_configuration: DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration = None,
  mode: str = None,
  storage_profile_id: str = None,
  tag_propagation_mode: str = None,
  worker_capabilities: DeadlineFleetConfigurationCustomerManagedWorkerCapabilities = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged.property.autoScalingConfiguration">auto_scaling_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration">DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#auto_scaling_configuration DeadlineFleet#auto_scaling_configuration}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#mode DeadlineFleet#mode}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged.property.storageProfileId">storage_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#storage_profile_id DeadlineFleet#storage_profile_id}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged.property.tagPropagationMode">tag_propagation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#tag_propagation_mode DeadlineFleet#tag_propagation_mode}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged.property.workerCapabilities">worker_capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities">DeadlineFleetConfigurationCustomerManagedWorkerCapabilities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#worker_capabilities DeadlineFleet#worker_capabilities}. |

---

##### `auto_scaling_configuration`<sup>Optional</sup> <a name="auto_scaling_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged.property.autoScalingConfiguration"></a>

```python
auto_scaling_configuration: DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration">DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#auto_scaling_configuration DeadlineFleet#auto_scaling_configuration}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#mode DeadlineFleet#mode}.

---

##### `storage_profile_id`<sup>Optional</sup> <a name="storage_profile_id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged.property.storageProfileId"></a>

```python
storage_profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#storage_profile_id DeadlineFleet#storage_profile_id}.

---

##### `tag_propagation_mode`<sup>Optional</sup> <a name="tag_propagation_mode" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged.property.tagPropagationMode"></a>

```python
tag_propagation_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#tag_propagation_mode DeadlineFleet#tag_propagation_mode}.

---

##### `worker_capabilities`<sup>Optional</sup> <a name="worker_capabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged.property.workerCapabilities"></a>

```python
worker_capabilities: DeadlineFleetConfigurationCustomerManagedWorkerCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities">DeadlineFleetConfigurationCustomerManagedWorkerCapabilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#worker_capabilities DeadlineFleet#worker_capabilities}.

---

### DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration <a name="DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration(
  scale_out_workers_per_minute: typing.Union[int, float] = None,
  standby_worker_count: typing.Union[int, float] = None,
  worker_idle_duration_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration.property.scaleOutWorkersPerMinute">scale_out_workers_per_minute</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#scale_out_workers_per_minute DeadlineFleet#scale_out_workers_per_minute}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration.property.standbyWorkerCount">standby_worker_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#standby_worker_count DeadlineFleet#standby_worker_count}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration.property.workerIdleDurationSeconds">worker_idle_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#worker_idle_duration_seconds DeadlineFleet#worker_idle_duration_seconds}. |

---

##### `scale_out_workers_per_minute`<sup>Optional</sup> <a name="scale_out_workers_per_minute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration.property.scaleOutWorkersPerMinute"></a>

```python
scale_out_workers_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#scale_out_workers_per_minute DeadlineFleet#scale_out_workers_per_minute}.

---

##### `standby_worker_count`<sup>Optional</sup> <a name="standby_worker_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration.property.standbyWorkerCount"></a>

```python
standby_worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#standby_worker_count DeadlineFleet#standby_worker_count}.

---

##### `worker_idle_duration_seconds`<sup>Optional</sup> <a name="worker_idle_duration_seconds" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration.property.workerIdleDurationSeconds"></a>

```python
worker_idle_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#worker_idle_duration_seconds DeadlineFleet#worker_idle_duration_seconds}.

---

### DeadlineFleetConfigurationCustomerManagedWorkerCapabilities <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities(
  accelerator_count: DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount = None,
  accelerator_total_memory_mi_b: DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB = None,
  accelerator_types: typing.List[str] = None,
  cpu_architecture_type: str = None,
  custom_amounts: IResolvable | typing.List[DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts] = None,
  custom_attributes: IResolvable | typing.List[DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes] = None,
  memory_mi_b: DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB = None,
  os_family: str = None,
  v_cpu_count: DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.acceleratorCount">accelerator_count</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#accelerator_count DeadlineFleet#accelerator_count}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.acceleratorTotalMemoryMiB">accelerator_total_memory_mi_b</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#accelerator_total_memory_mi_b DeadlineFleet#accelerator_total_memory_mi_b}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.acceleratorTypes">accelerator_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#accelerator_types DeadlineFleet#accelerator_types}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.cpuArchitectureType">cpu_architecture_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#cpu_architecture_type DeadlineFleet#cpu_architecture_type}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.customAmounts">custom_amounts</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#custom_amounts DeadlineFleet#custom_amounts}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.customAttributes">custom_attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#custom_attributes DeadlineFleet#custom_attributes}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.memoryMiB">memory_mi_b</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#memory_mi_b DeadlineFleet#memory_mi_b}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.osFamily">os_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#os_family DeadlineFleet#os_family}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.vCpuCount">v_cpu_count</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#v_cpu_count DeadlineFleet#v_cpu_count}. |

---

##### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.acceleratorCount"></a>

```python
accelerator_count: DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#accelerator_count DeadlineFleet#accelerator_count}.

---

##### `accelerator_total_memory_mi_b`<sup>Optional</sup> <a name="accelerator_total_memory_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.acceleratorTotalMemoryMiB"></a>

```python
accelerator_total_memory_mi_b: DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#accelerator_total_memory_mi_b DeadlineFleet#accelerator_total_memory_mi_b}.

---

##### `accelerator_types`<sup>Optional</sup> <a name="accelerator_types" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.acceleratorTypes"></a>

```python
accelerator_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#accelerator_types DeadlineFleet#accelerator_types}.

---

##### `cpu_architecture_type`<sup>Optional</sup> <a name="cpu_architecture_type" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.cpuArchitectureType"></a>

```python
cpu_architecture_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#cpu_architecture_type DeadlineFleet#cpu_architecture_type}.

---

##### `custom_amounts`<sup>Optional</sup> <a name="custom_amounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.customAmounts"></a>

```python
custom_amounts: IResolvable | typing.List[DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#custom_amounts DeadlineFleet#custom_amounts}.

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.customAttributes"></a>

```python
custom_attributes: IResolvable | typing.List[DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#custom_attributes DeadlineFleet#custom_attributes}.

---

##### `memory_mi_b`<sup>Optional</sup> <a name="memory_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.memoryMiB"></a>

```python
memory_mi_b: DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#memory_mi_b DeadlineFleet#memory_mi_b}.

---

##### `os_family`<sup>Optional</sup> <a name="os_family" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#os_family DeadlineFleet#os_family}.

---

##### `v_cpu_count`<sup>Optional</sup> <a name="v_cpu_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.vCpuCount"></a>

```python
v_cpu_count: DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#v_cpu_count DeadlineFleet#v_cpu_count}.

---

### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#name DeadlineFleet#name}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#name DeadlineFleet#name}.

---

### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes(
  name: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#name DeadlineFleet#name}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#values DeadlineFleet#values}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#name DeadlineFleet#name}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#values DeadlineFleet#values}.

---

### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

### DeadlineFleetConfigurationServiceManagedEc2 <a name="DeadlineFleetConfigurationServiceManagedEc2" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2(
  auto_scaling_configuration: DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration = None,
  instance_capabilities: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities = None,
  instance_market_options: DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions = None,
  persistent_volume_configuration: DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration = None,
  storage_profile_id: str = None,
  vpc_configuration: DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.autoScalingConfiguration">auto_scaling_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration">DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#auto_scaling_configuration DeadlineFleet#auto_scaling_configuration}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.instanceCapabilities">instance_capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#instance_capabilities DeadlineFleet#instance_capabilities}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.instanceMarketOptions">instance_market_options</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions">DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#instance_market_options DeadlineFleet#instance_market_options}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.persistentVolumeConfiguration">persistent_volume_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration">DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#persistent_volume_configuration DeadlineFleet#persistent_volume_configuration}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.storageProfileId">storage_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#storage_profile_id DeadlineFleet#storage_profile_id}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration">DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#vpc_configuration DeadlineFleet#vpc_configuration}. |

---

##### `auto_scaling_configuration`<sup>Optional</sup> <a name="auto_scaling_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.autoScalingConfiguration"></a>

```python
auto_scaling_configuration: DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration">DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#auto_scaling_configuration DeadlineFleet#auto_scaling_configuration}.

---

##### `instance_capabilities`<sup>Optional</sup> <a name="instance_capabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.instanceCapabilities"></a>

```python
instance_capabilities: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#instance_capabilities DeadlineFleet#instance_capabilities}.

---

##### `instance_market_options`<sup>Optional</sup> <a name="instance_market_options" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.instanceMarketOptions"></a>

```python
instance_market_options: DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions">DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#instance_market_options DeadlineFleet#instance_market_options}.

---

##### `persistent_volume_configuration`<sup>Optional</sup> <a name="persistent_volume_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.persistentVolumeConfiguration"></a>

```python
persistent_volume_configuration: DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration">DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#persistent_volume_configuration DeadlineFleet#persistent_volume_configuration}.

---

##### `storage_profile_id`<sup>Optional</sup> <a name="storage_profile_id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.storageProfileId"></a>

```python
storage_profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#storage_profile_id DeadlineFleet#storage_profile_id}.

---

##### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.vpcConfiguration"></a>

```python
vpc_configuration: DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration">DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#vpc_configuration DeadlineFleet#vpc_configuration}.

---

### DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration <a name="DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration(
  scale_out_workers_per_minute: typing.Union[int, float] = None,
  standby_worker_count: typing.Union[int, float] = None,
  worker_idle_duration_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration.property.scaleOutWorkersPerMinute">scale_out_workers_per_minute</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#scale_out_workers_per_minute DeadlineFleet#scale_out_workers_per_minute}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration.property.standbyWorkerCount">standby_worker_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#standby_worker_count DeadlineFleet#standby_worker_count}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration.property.workerIdleDurationSeconds">worker_idle_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#worker_idle_duration_seconds DeadlineFleet#worker_idle_duration_seconds}. |

---

##### `scale_out_workers_per_minute`<sup>Optional</sup> <a name="scale_out_workers_per_minute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration.property.scaleOutWorkersPerMinute"></a>

```python
scale_out_workers_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#scale_out_workers_per_minute DeadlineFleet#scale_out_workers_per_minute}.

---

##### `standby_worker_count`<sup>Optional</sup> <a name="standby_worker_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration.property.standbyWorkerCount"></a>

```python
standby_worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#standby_worker_count DeadlineFleet#standby_worker_count}.

---

##### `worker_idle_duration_seconds`<sup>Optional</sup> <a name="worker_idle_duration_seconds" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration.property.workerIdleDurationSeconds"></a>

```python
worker_idle_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#worker_idle_duration_seconds DeadlineFleet#worker_idle_duration_seconds}.

---

### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities(
  accelerator_capabilities: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities = None,
  allowed_instance_types: typing.List[str] = None,
  cpu_architecture_type: str = None,
  custom_amounts: IResolvable | typing.List[DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts] = None,
  custom_attributes: IResolvable | typing.List[DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes] = None,
  excluded_instance_types: typing.List[str] = None,
  memory_mi_b: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB = None,
  os_family: str = None,
  root_ebs_volume: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume = None,
  v_cpu_count: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.acceleratorCapabilities">accelerator_capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#accelerator_capabilities DeadlineFleet#accelerator_capabilities}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.allowedInstanceTypes">allowed_instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#allowed_instance_types DeadlineFleet#allowed_instance_types}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.cpuArchitectureType">cpu_architecture_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#cpu_architecture_type DeadlineFleet#cpu_architecture_type}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.customAmounts">custom_amounts</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#custom_amounts DeadlineFleet#custom_amounts}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.customAttributes">custom_attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#custom_attributes DeadlineFleet#custom_attributes}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.excludedInstanceTypes">excluded_instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#excluded_instance_types DeadlineFleet#excluded_instance_types}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.memoryMiB">memory_mi_b</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#memory_mi_b DeadlineFleet#memory_mi_b}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.osFamily">os_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#os_family DeadlineFleet#os_family}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.rootEbsVolume">root_ebs_volume</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#root_ebs_volume DeadlineFleet#root_ebs_volume}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.vCpuCount">v_cpu_count</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#v_cpu_count DeadlineFleet#v_cpu_count}. |

---

##### `accelerator_capabilities`<sup>Optional</sup> <a name="accelerator_capabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.acceleratorCapabilities"></a>

```python
accelerator_capabilities: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#accelerator_capabilities DeadlineFleet#accelerator_capabilities}.

---

##### `allowed_instance_types`<sup>Optional</sup> <a name="allowed_instance_types" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.allowedInstanceTypes"></a>

```python
allowed_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#allowed_instance_types DeadlineFleet#allowed_instance_types}.

---

##### `cpu_architecture_type`<sup>Optional</sup> <a name="cpu_architecture_type" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.cpuArchitectureType"></a>

```python
cpu_architecture_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#cpu_architecture_type DeadlineFleet#cpu_architecture_type}.

---

##### `custom_amounts`<sup>Optional</sup> <a name="custom_amounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.customAmounts"></a>

```python
custom_amounts: IResolvable | typing.List[DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#custom_amounts DeadlineFleet#custom_amounts}.

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.customAttributes"></a>

```python
custom_attributes: IResolvable | typing.List[DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#custom_attributes DeadlineFleet#custom_attributes}.

---

##### `excluded_instance_types`<sup>Optional</sup> <a name="excluded_instance_types" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.excludedInstanceTypes"></a>

```python
excluded_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#excluded_instance_types DeadlineFleet#excluded_instance_types}.

---

##### `memory_mi_b`<sup>Optional</sup> <a name="memory_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.memoryMiB"></a>

```python
memory_mi_b: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#memory_mi_b DeadlineFleet#memory_mi_b}.

---

##### `os_family`<sup>Optional</sup> <a name="os_family" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#os_family DeadlineFleet#os_family}.

---

##### `root_ebs_volume`<sup>Optional</sup> <a name="root_ebs_volume" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.rootEbsVolume"></a>

```python
root_ebs_volume: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#root_ebs_volume DeadlineFleet#root_ebs_volume}.

---

##### `v_cpu_count`<sup>Optional</sup> <a name="v_cpu_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.vCpuCount"></a>

```python
v_cpu_count: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#v_cpu_count DeadlineFleet#v_cpu_count}.

---

### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities(
  count: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount = None,
  selections: IResolvable | typing.List[DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities.property.count">count</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#count DeadlineFleet#count}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities.property.selections">selections</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#selections DeadlineFleet#selections}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities.property.count"></a>

```python
count: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#count DeadlineFleet#count}.

---

##### `selections`<sup>Optional</sup> <a name="selections" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities.property.selections"></a>

```python
selections: IResolvable | typing.List[DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#selections DeadlineFleet#selections}.

---

### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections(
  name: str = None,
  runtime: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#name DeadlineFleet#name}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections.property.runtime">runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#runtime DeadlineFleet#runtime}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#name DeadlineFleet#name}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#runtime DeadlineFleet#runtime}.

---

### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#name DeadlineFleet#name}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#name DeadlineFleet#name}.

---

### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes(
  name: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#name DeadlineFleet#name}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#values DeadlineFleet#values}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#name DeadlineFleet#name}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#values DeadlineFleet#values}.

---

### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume(
  iops: typing.Union[int, float] = None,
  size_gi_b: typing.Union[int, float] = None,
  throughput_mi_b: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#iops DeadlineFleet#iops}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume.property.sizeGiB">size_gi_b</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#size_gi_b DeadlineFleet#size_gi_b}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume.property.throughputMiB">throughput_mi_b</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#throughput_mi_b DeadlineFleet#throughput_mi_b}. |

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#iops DeadlineFleet#iops}.

---

##### `size_gi_b`<sup>Optional</sup> <a name="size_gi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume.property.sizeGiB"></a>

```python
size_gi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#size_gi_b DeadlineFleet#size_gi_b}.

---

##### `throughput_mi_b`<sup>Optional</sup> <a name="throughput_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume.property.throughputMiB"></a>

```python
throughput_mi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#throughput_mi_b DeadlineFleet#throughput_mi_b}.

---

### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

### DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions(
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#type DeadlineFleet#type}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#type DeadlineFleet#type}.

---

### DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration <a name="DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration(
  iops: typing.Union[int, float] = None,
  last_used_ttl_hours: typing.Union[int, float] = None,
  mount_path: str = None,
  size_gi_b: typing.Union[int, float] = None,
  throughput_mi_b: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#iops DeadlineFleet#iops}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.property.lastUsedTtlHours">last_used_ttl_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#last_used_ttl_hours DeadlineFleet#last_used_ttl_hours}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.property.mountPath">mount_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#mount_path DeadlineFleet#mount_path}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.property.sizeGiB">size_gi_b</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#size_gi_b DeadlineFleet#size_gi_b}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.property.throughputMiB">throughput_mi_b</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#throughput_mi_b DeadlineFleet#throughput_mi_b}. |

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#iops DeadlineFleet#iops}.

---

##### `last_used_ttl_hours`<sup>Optional</sup> <a name="last_used_ttl_hours" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.property.lastUsedTtlHours"></a>

```python
last_used_ttl_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#last_used_ttl_hours DeadlineFleet#last_used_ttl_hours}.

---

##### `mount_path`<sup>Optional</sup> <a name="mount_path" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#mount_path DeadlineFleet#mount_path}.

---

##### `size_gi_b`<sup>Optional</sup> <a name="size_gi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.property.sizeGiB"></a>

```python
size_gi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#size_gi_b DeadlineFleet#size_gi_b}.

---

##### `throughput_mi_b`<sup>Optional</sup> <a name="throughput_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.property.throughputMiB"></a>

```python
throughput_mi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#throughput_mi_b DeadlineFleet#throughput_mi_b}.

---

### DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration <a name="DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration(
  resource_configuration_arns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration.property.resourceConfigurationArns">resource_configuration_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#resource_configuration_arns DeadlineFleet#resource_configuration_arns}. |

---

##### `resource_configuration_arns`<sup>Optional</sup> <a name="resource_configuration_arns" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration.property.resourceConfigurationArns"></a>

```python
resource_configuration_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#resource_configuration_arns DeadlineFleet#resource_configuration_arns}.

---

### DeadlineFleetHostConfiguration <a name="DeadlineFleetHostConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetHostConfiguration(
  script_body: str = None,
  script_timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration.property.scriptBody">script_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#script_body DeadlineFleet#script_body}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration.property.scriptTimeoutSeconds">script_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#script_timeout_seconds DeadlineFleet#script_timeout_seconds}. |

---

##### `script_body`<sup>Optional</sup> <a name="script_body" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration.property.scriptBody"></a>

```python
script_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#script_body DeadlineFleet#script_body}.

---

##### `script_timeout_seconds`<sup>Optional</sup> <a name="script_timeout_seconds" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration.property.scriptTimeoutSeconds"></a>

```python
script_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#script_timeout_seconds DeadlineFleet#script_timeout_seconds}.

---

### DeadlineFleetTags <a name="DeadlineFleetTags" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#key DeadlineFleet#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#value DeadlineFleet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DeadlineFleetCapabilitiesAmountsList <a name="DeadlineFleetCapabilitiesAmountsList" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetCapabilitiesAmountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DeadlineFleetCapabilitiesAmountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DeadlineFleetCapabilitiesAmountsOutputReference <a name="DeadlineFleetCapabilitiesAmountsOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmounts">DeadlineFleetCapabilitiesAmounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.internalValue"></a>

```python
internal_value: DeadlineFleetCapabilitiesAmounts
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmounts">DeadlineFleetCapabilitiesAmounts</a>

---


### DeadlineFleetCapabilitiesAttributesList <a name="DeadlineFleetCapabilitiesAttributesList" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetCapabilitiesAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DeadlineFleetCapabilitiesAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DeadlineFleetCapabilitiesAttributesOutputReference <a name="DeadlineFleetCapabilitiesAttributesOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributes">DeadlineFleetCapabilitiesAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DeadlineFleetCapabilitiesAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributes">DeadlineFleetCapabilitiesAttributes</a>

---


### DeadlineFleetCapabilitiesOutputReference <a name="DeadlineFleetCapabilitiesOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.property.amounts">amounts</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList">DeadlineFleetCapabilitiesAmountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList">DeadlineFleetCapabilitiesAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilities">DeadlineFleetCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amounts`<sup>Required</sup> <a name="amounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.property.amounts"></a>

```python
amounts: DeadlineFleetCapabilitiesAmountsList
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList">DeadlineFleetCapabilitiesAmountsList</a>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.property.attributes"></a>

```python
attributes: DeadlineFleetCapabilitiesAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList">DeadlineFleetCapabilitiesAttributesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: DeadlineFleetCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilities">DeadlineFleetCapabilities</a>

---


### DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference <a name="DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resetScaleOutWorkersPerMinute">reset_scale_out_workers_per_minute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resetStandbyWorkerCount">reset_standby_worker_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resetWorkerIdleDurationSeconds">reset_worker_idle_duration_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scale_out_workers_per_minute` <a name="reset_scale_out_workers_per_minute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resetScaleOutWorkersPerMinute"></a>

```python
def reset_scale_out_workers_per_minute() -> None
```

##### `reset_standby_worker_count` <a name="reset_standby_worker_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resetStandbyWorkerCount"></a>

```python
def reset_standby_worker_count() -> None
```

##### `reset_worker_idle_duration_seconds` <a name="reset_worker_idle_duration_seconds" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resetWorkerIdleDurationSeconds"></a>

```python
def reset_worker_idle_duration_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinuteInput">scale_out_workers_per_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.standbyWorkerCountInput">standby_worker_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.workerIdleDurationSecondsInput">worker_idle_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinute">scale_out_workers_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.standbyWorkerCount">standby_worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.workerIdleDurationSeconds">worker_idle_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration">DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scale_out_workers_per_minute_input`<sup>Optional</sup> <a name="scale_out_workers_per_minute_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinuteInput"></a>

```python
scale_out_workers_per_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `standby_worker_count_input`<sup>Optional</sup> <a name="standby_worker_count_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.standbyWorkerCountInput"></a>

```python
standby_worker_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_idle_duration_seconds_input`<sup>Optional</sup> <a name="worker_idle_duration_seconds_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.workerIdleDurationSecondsInput"></a>

```python
worker_idle_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_workers_per_minute`<sup>Required</sup> <a name="scale_out_workers_per_minute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinute"></a>

```python
scale_out_workers_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `standby_worker_count`<sup>Required</sup> <a name="standby_worker_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.standbyWorkerCount"></a>

```python
standby_worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_idle_duration_seconds`<sup>Required</sup> <a name="worker_idle_duration_seconds" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.workerIdleDurationSeconds"></a>

```python
worker_idle_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration">DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration</a>

---


### DeadlineFleetConfigurationCustomerManagedOutputReference <a name="DeadlineFleetConfigurationCustomerManagedOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.putAutoScalingConfiguration">put_auto_scaling_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.putWorkerCapabilities">put_worker_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resetAutoScalingConfiguration">reset_auto_scaling_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resetStorageProfileId">reset_storage_profile_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resetTagPropagationMode">reset_tag_propagation_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resetWorkerCapabilities">reset_worker_capabilities</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auto_scaling_configuration` <a name="put_auto_scaling_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.putAutoScalingConfiguration"></a>

```python
def put_auto_scaling_configuration(
  scale_out_workers_per_minute: typing.Union[int, float] = None,
  standby_worker_count: typing.Union[int, float] = None,
  worker_idle_duration_seconds: typing.Union[int, float] = None
) -> None
```

###### `scale_out_workers_per_minute`<sup>Optional</sup> <a name="scale_out_workers_per_minute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.putAutoScalingConfiguration.parameter.scaleOutWorkersPerMinute"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#scale_out_workers_per_minute DeadlineFleet#scale_out_workers_per_minute}.

---

###### `standby_worker_count`<sup>Optional</sup> <a name="standby_worker_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.putAutoScalingConfiguration.parameter.standbyWorkerCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#standby_worker_count DeadlineFleet#standby_worker_count}.

---

###### `worker_idle_duration_seconds`<sup>Optional</sup> <a name="worker_idle_duration_seconds" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.putAutoScalingConfiguration.parameter.workerIdleDurationSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#worker_idle_duration_seconds DeadlineFleet#worker_idle_duration_seconds}.

---

##### `put_worker_capabilities` <a name="put_worker_capabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.putWorkerCapabilities"></a>

```python
def put_worker_capabilities(
  accelerator_count: DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount = None,
  accelerator_total_memory_mi_b: DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB = None,
  accelerator_types: typing.List[str] = None,
  cpu_architecture_type: str = None,
  custom_amounts: IResolvable | typing.List[DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts] = None,
  custom_attributes: IResolvable | typing.List[DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes] = None,
  memory_mi_b: DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB = None,
  os_family: str = None,
  v_cpu_count: DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount = None
) -> None
```

###### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.putWorkerCapabilities.parameter.acceleratorCount"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#accelerator_count DeadlineFleet#accelerator_count}.

---

###### `accelerator_total_memory_mi_b`<sup>Optional</sup> <a name="accelerator_total_memory_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.putWorkerCapabilities.parameter.acceleratorTotalMemoryMiB"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#accelerator_total_memory_mi_b DeadlineFleet#accelerator_total_memory_mi_b}.

---

###### `accelerator_types`<sup>Optional</sup> <a name="accelerator_types" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.putWorkerCapabilities.parameter.acceleratorTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#accelerator_types DeadlineFleet#accelerator_types}.

---

###### `cpu_architecture_type`<sup>Optional</sup> <a name="cpu_architecture_type" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.putWorkerCapabilities.parameter.cpuArchitectureType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#cpu_architecture_type DeadlineFleet#cpu_architecture_type}.

---

###### `custom_amounts`<sup>Optional</sup> <a name="custom_amounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.putWorkerCapabilities.parameter.customAmounts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#custom_amounts DeadlineFleet#custom_amounts}.

---

###### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.putWorkerCapabilities.parameter.customAttributes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#custom_attributes DeadlineFleet#custom_attributes}.

---

###### `memory_mi_b`<sup>Optional</sup> <a name="memory_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.putWorkerCapabilities.parameter.memoryMiB"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#memory_mi_b DeadlineFleet#memory_mi_b}.

---

###### `os_family`<sup>Optional</sup> <a name="os_family" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.putWorkerCapabilities.parameter.osFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#os_family DeadlineFleet#os_family}.

---

###### `v_cpu_count`<sup>Optional</sup> <a name="v_cpu_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.putWorkerCapabilities.parameter.vCpuCount"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#v_cpu_count DeadlineFleet#v_cpu_count}.

---

##### `reset_auto_scaling_configuration` <a name="reset_auto_scaling_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resetAutoScalingConfiguration"></a>

```python
def reset_auto_scaling_configuration() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_storage_profile_id` <a name="reset_storage_profile_id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resetStorageProfileId"></a>

```python
def reset_storage_profile_id() -> None
```

##### `reset_tag_propagation_mode` <a name="reset_tag_propagation_mode" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resetTagPropagationMode"></a>

```python
def reset_tag_propagation_mode() -> None
```

##### `reset_worker_capabilities` <a name="reset_worker_capabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resetWorkerCapabilities"></a>

```python
def reset_worker_capabilities() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.autoScalingConfiguration">auto_scaling_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference">DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.workerCapabilities">worker_capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.autoScalingConfigurationInput">auto_scaling_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration">DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.storageProfileIdInput">storage_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.tagPropagationModeInput">tag_propagation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.workerCapabilitiesInput">worker_capabilities_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities">DeadlineFleetConfigurationCustomerManagedWorkerCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.storageProfileId">storage_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.tagPropagationMode">tag_propagation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged">DeadlineFleetConfigurationCustomerManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_scaling_configuration`<sup>Required</sup> <a name="auto_scaling_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.autoScalingConfiguration"></a>

```python
auto_scaling_configuration: DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference">DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference</a>

---

##### `worker_capabilities`<sup>Required</sup> <a name="worker_capabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.workerCapabilities"></a>

```python
worker_capabilities: DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference</a>

---

##### `auto_scaling_configuration_input`<sup>Optional</sup> <a name="auto_scaling_configuration_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.autoScalingConfigurationInput"></a>

```python
auto_scaling_configuration_input: IResolvable | DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration">DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration</a>

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `storage_profile_id_input`<sup>Optional</sup> <a name="storage_profile_id_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.storageProfileIdInput"></a>

```python
storage_profile_id_input: str
```

- *Type:* str

---

##### `tag_propagation_mode_input`<sup>Optional</sup> <a name="tag_propagation_mode_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.tagPropagationModeInput"></a>

```python
tag_propagation_mode_input: str
```

- *Type:* str

---

##### `worker_capabilities_input`<sup>Optional</sup> <a name="worker_capabilities_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.workerCapabilitiesInput"></a>

```python
worker_capabilities_input: IResolvable | DeadlineFleetConfigurationCustomerManagedWorkerCapabilities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities">DeadlineFleetConfigurationCustomerManagedWorkerCapabilities</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `storage_profile_id`<sup>Required</sup> <a name="storage_profile_id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.storageProfileId"></a>

```python
storage_profile_id: str
```

- *Type:* str

---

##### `tag_propagation_mode`<sup>Required</sup> <a name="tag_propagation_mode" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.tagPropagationMode"></a>

```python
tag_propagation_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationCustomerManaged
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged">DeadlineFleetConfigurationCustomerManaged</a>

---


### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount</a>

---


### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB</a>

---


### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a>]

---


### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resetMin">reset_min</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resetMin"></a>

```python
def reset_min() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a>

---


### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a>]

---


### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a>

---


### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB</a>

---


### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putAcceleratorCount">put_accelerator_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putAcceleratorTotalMemoryMiB">put_accelerator_total_memory_mi_b</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putCustomAmounts">put_custom_amounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putCustomAttributes">put_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putMemoryMiB">put_memory_mi_b</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putVCpuCount">put_v_cpu_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetAcceleratorCount">reset_accelerator_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetAcceleratorTotalMemoryMiB">reset_accelerator_total_memory_mi_b</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetAcceleratorTypes">reset_accelerator_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetCpuArchitectureType">reset_cpu_architecture_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetCustomAmounts">reset_custom_amounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetCustomAttributes">reset_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetMemoryMiB">reset_memory_mi_b</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetOsFamily">reset_os_family</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetVCpuCount">reset_v_cpu_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_accelerator_count` <a name="put_accelerator_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putAcceleratorCount"></a>

```python
def put_accelerator_count(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putAcceleratorCount.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putAcceleratorCount.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

##### `put_accelerator_total_memory_mi_b` <a name="put_accelerator_total_memory_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putAcceleratorTotalMemoryMiB"></a>

```python
def put_accelerator_total_memory_mi_b(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putAcceleratorTotalMemoryMiB.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putAcceleratorTotalMemoryMiB.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

##### `put_custom_amounts` <a name="put_custom_amounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putCustomAmounts"></a>

```python
def put_custom_amounts(
  value: IResolvable | typing.List[DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putCustomAmounts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a>]

---

##### `put_custom_attributes` <a name="put_custom_attributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putCustomAttributes"></a>

```python
def put_custom_attributes(
  value: IResolvable | typing.List[DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putCustomAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a>]

---

##### `put_memory_mi_b` <a name="put_memory_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putMemoryMiB"></a>

```python
def put_memory_mi_b(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putMemoryMiB.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putMemoryMiB.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

##### `put_v_cpu_count` <a name="put_v_cpu_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putVCpuCount"></a>

```python
def put_v_cpu_count(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putVCpuCount.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putVCpuCount.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

##### `reset_accelerator_count` <a name="reset_accelerator_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetAcceleratorCount"></a>

```python
def reset_accelerator_count() -> None
```

##### `reset_accelerator_total_memory_mi_b` <a name="reset_accelerator_total_memory_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetAcceleratorTotalMemoryMiB"></a>

```python
def reset_accelerator_total_memory_mi_b() -> None
```

##### `reset_accelerator_types` <a name="reset_accelerator_types" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetAcceleratorTypes"></a>

```python
def reset_accelerator_types() -> None
```

##### `reset_cpu_architecture_type` <a name="reset_cpu_architecture_type" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetCpuArchitectureType"></a>

```python
def reset_cpu_architecture_type() -> None
```

##### `reset_custom_amounts` <a name="reset_custom_amounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetCustomAmounts"></a>

```python
def reset_custom_amounts() -> None
```

##### `reset_custom_attributes` <a name="reset_custom_attributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetCustomAttributes"></a>

```python
def reset_custom_attributes() -> None
```

##### `reset_memory_mi_b` <a name="reset_memory_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetMemoryMiB"></a>

```python
def reset_memory_mi_b() -> None
```

##### `reset_os_family` <a name="reset_os_family" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetOsFamily"></a>

```python
def reset_os_family() -> None
```

##### `reset_v_cpu_count` <a name="reset_v_cpu_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetVCpuCount"></a>

```python
def reset_v_cpu_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorCount">accelerator_count</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTotalMemoryMiB">accelerator_total_memory_mi_b</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAmounts">custom_amounts</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAttributes">custom_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.memoryMiB">memory_mi_b</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.vCpuCount">v_cpu_count</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorCountInput">accelerator_count_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTotalMemoryMiBInput">accelerator_total_memory_mi_b_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTypesInput">accelerator_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.cpuArchitectureTypeInput">cpu_architecture_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAmountsInput">custom_amounts_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAttributesInput">custom_attributes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.memoryMiBInput">memory_mi_b_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.osFamilyInput">os_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.vCpuCountInput">v_cpu_count_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTypes">accelerator_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.cpuArchitectureType">cpu_architecture_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities">DeadlineFleetConfigurationCustomerManagedWorkerCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_count`<sup>Required</sup> <a name="accelerator_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorCount"></a>

```python
accelerator_count: DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference</a>

---

##### `accelerator_total_memory_mi_b`<sup>Required</sup> <a name="accelerator_total_memory_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTotalMemoryMiB"></a>

```python
accelerator_total_memory_mi_b: DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference</a>

---

##### `custom_amounts`<sup>Required</sup> <a name="custom_amounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAmounts"></a>

```python
custom_amounts: DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList</a>

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAttributes"></a>

```python
custom_attributes: DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList</a>

---

##### `memory_mi_b`<sup>Required</sup> <a name="memory_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.memoryMiB"></a>

```python
memory_mi_b: DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference</a>

---

##### `v_cpu_count`<sup>Required</sup> <a name="v_cpu_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.vCpuCount"></a>

```python
v_cpu_count: DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference</a>

---

##### `accelerator_count_input`<sup>Optional</sup> <a name="accelerator_count_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorCountInput"></a>

```python
accelerator_count_input: IResolvable | DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount</a>

---

##### `accelerator_total_memory_mi_b_input`<sup>Optional</sup> <a name="accelerator_total_memory_mi_b_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTotalMemoryMiBInput"></a>

```python
accelerator_total_memory_mi_b_input: IResolvable | DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB</a>

---

##### `accelerator_types_input`<sup>Optional</sup> <a name="accelerator_types_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTypesInput"></a>

```python
accelerator_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_architecture_type_input`<sup>Optional</sup> <a name="cpu_architecture_type_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.cpuArchitectureTypeInput"></a>

```python
cpu_architecture_type_input: str
```

- *Type:* str

---

##### `custom_amounts_input`<sup>Optional</sup> <a name="custom_amounts_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAmountsInput"></a>

```python
custom_amounts_input: IResolvable | typing.List[DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a>]

---

##### `custom_attributes_input`<sup>Optional</sup> <a name="custom_attributes_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAttributesInput"></a>

```python
custom_attributes_input: IResolvable | typing.List[DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a>]

---

##### `memory_mi_b_input`<sup>Optional</sup> <a name="memory_mi_b_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.memoryMiBInput"></a>

```python
memory_mi_b_input: IResolvable | DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB</a>

---

##### `os_family_input`<sup>Optional</sup> <a name="os_family_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.osFamilyInput"></a>

```python
os_family_input: str
```

- *Type:* str

---

##### `v_cpu_count_input`<sup>Optional</sup> <a name="v_cpu_count_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.vCpuCountInput"></a>

```python
v_cpu_count_input: IResolvable | DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount</a>

---

##### `accelerator_types`<sup>Required</sup> <a name="accelerator_types" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTypes"></a>

```python
accelerator_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_architecture_type`<sup>Required</sup> <a name="cpu_architecture_type" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.cpuArchitectureType"></a>

```python
cpu_architecture_type: str
```

- *Type:* str

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationCustomerManagedWorkerCapabilities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities">DeadlineFleetConfigurationCustomerManagedWorkerCapabilities</a>

---


### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount</a>

---


### DeadlineFleetConfigurationOutputReference <a name="DeadlineFleetConfigurationOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.putCustomerManaged">put_customer_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.putServiceManagedEc2">put_service_managed_ec2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.resetCustomerManaged">reset_customer_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.resetServiceManagedEc2">reset_service_managed_ec2</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_customer_managed` <a name="put_customer_managed" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.putCustomerManaged"></a>

```python
def put_customer_managed(
  auto_scaling_configuration: DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration = None,
  mode: str = None,
  storage_profile_id: str = None,
  tag_propagation_mode: str = None,
  worker_capabilities: DeadlineFleetConfigurationCustomerManagedWorkerCapabilities = None
) -> None
```

###### `auto_scaling_configuration`<sup>Optional</sup> <a name="auto_scaling_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.putCustomerManaged.parameter.autoScalingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration">DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#auto_scaling_configuration DeadlineFleet#auto_scaling_configuration}.

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.putCustomerManaged.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#mode DeadlineFleet#mode}.

---

###### `storage_profile_id`<sup>Optional</sup> <a name="storage_profile_id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.putCustomerManaged.parameter.storageProfileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#storage_profile_id DeadlineFleet#storage_profile_id}.

---

###### `tag_propagation_mode`<sup>Optional</sup> <a name="tag_propagation_mode" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.putCustomerManaged.parameter.tagPropagationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#tag_propagation_mode DeadlineFleet#tag_propagation_mode}.

---

###### `worker_capabilities`<sup>Optional</sup> <a name="worker_capabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.putCustomerManaged.parameter.workerCapabilities"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities">DeadlineFleetConfigurationCustomerManagedWorkerCapabilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#worker_capabilities DeadlineFleet#worker_capabilities}.

---

##### `put_service_managed_ec2` <a name="put_service_managed_ec2" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.putServiceManagedEc2"></a>

```python
def put_service_managed_ec2(
  auto_scaling_configuration: DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration = None,
  instance_capabilities: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities = None,
  instance_market_options: DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions = None,
  persistent_volume_configuration: DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration = None,
  storage_profile_id: str = None,
  vpc_configuration: DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration = None
) -> None
```

###### `auto_scaling_configuration`<sup>Optional</sup> <a name="auto_scaling_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.putServiceManagedEc2.parameter.autoScalingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration">DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#auto_scaling_configuration DeadlineFleet#auto_scaling_configuration}.

---

###### `instance_capabilities`<sup>Optional</sup> <a name="instance_capabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.putServiceManagedEc2.parameter.instanceCapabilities"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#instance_capabilities DeadlineFleet#instance_capabilities}.

---

###### `instance_market_options`<sup>Optional</sup> <a name="instance_market_options" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.putServiceManagedEc2.parameter.instanceMarketOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions">DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#instance_market_options DeadlineFleet#instance_market_options}.

---

###### `persistent_volume_configuration`<sup>Optional</sup> <a name="persistent_volume_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.putServiceManagedEc2.parameter.persistentVolumeConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration">DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#persistent_volume_configuration DeadlineFleet#persistent_volume_configuration}.

---

###### `storage_profile_id`<sup>Optional</sup> <a name="storage_profile_id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.putServiceManagedEc2.parameter.storageProfileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#storage_profile_id DeadlineFleet#storage_profile_id}.

---

###### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.putServiceManagedEc2.parameter.vpcConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration">DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#vpc_configuration DeadlineFleet#vpc_configuration}.

---

##### `reset_customer_managed` <a name="reset_customer_managed" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.resetCustomerManaged"></a>

```python
def reset_customer_managed() -> None
```

##### `reset_service_managed_ec2` <a name="reset_service_managed_ec2" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.resetServiceManagedEc2"></a>

```python
def reset_service_managed_ec2() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.customerManaged">customer_managed</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference">DeadlineFleetConfigurationCustomerManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.serviceManagedEc2">service_managed_ec2</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference">DeadlineFleetConfigurationServiceManagedEc2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.customerManagedInput">customer_managed_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged">DeadlineFleetConfigurationCustomerManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.serviceManagedEc2Input">service_managed_ec2_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2">DeadlineFleetConfigurationServiceManagedEc2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration">DeadlineFleetConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_managed`<sup>Required</sup> <a name="customer_managed" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.customerManaged"></a>

```python
customer_managed: DeadlineFleetConfigurationCustomerManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference">DeadlineFleetConfigurationCustomerManagedOutputReference</a>

---

##### `service_managed_ec2`<sup>Required</sup> <a name="service_managed_ec2" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.serviceManagedEc2"></a>

```python
service_managed_ec2: DeadlineFleetConfigurationServiceManagedEc2OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference">DeadlineFleetConfigurationServiceManagedEc2OutputReference</a>

---

##### `customer_managed_input`<sup>Optional</sup> <a name="customer_managed_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.customerManagedInput"></a>

```python
customer_managed_input: IResolvable | DeadlineFleetConfigurationCustomerManaged
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged">DeadlineFleetConfigurationCustomerManaged</a>

---

##### `service_managed_ec2_input`<sup>Optional</sup> <a name="service_managed_ec2_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.serviceManagedEc2Input"></a>

```python
service_managed_ec2_input: IResolvable | DeadlineFleetConfigurationServiceManagedEc2
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2">DeadlineFleetConfigurationServiceManagedEc2</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration">DeadlineFleetConfiguration</a>

---


### DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resetScaleOutWorkersPerMinute">reset_scale_out_workers_per_minute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resetStandbyWorkerCount">reset_standby_worker_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resetWorkerIdleDurationSeconds">reset_worker_idle_duration_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scale_out_workers_per_minute` <a name="reset_scale_out_workers_per_minute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resetScaleOutWorkersPerMinute"></a>

```python
def reset_scale_out_workers_per_minute() -> None
```

##### `reset_standby_worker_count` <a name="reset_standby_worker_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resetStandbyWorkerCount"></a>

```python
def reset_standby_worker_count() -> None
```

##### `reset_worker_idle_duration_seconds` <a name="reset_worker_idle_duration_seconds" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resetWorkerIdleDurationSeconds"></a>

```python
def reset_worker_idle_duration_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinuteInput">scale_out_workers_per_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.standbyWorkerCountInput">standby_worker_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.workerIdleDurationSecondsInput">worker_idle_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinute">scale_out_workers_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.standbyWorkerCount">standby_worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.workerIdleDurationSeconds">worker_idle_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration">DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scale_out_workers_per_minute_input`<sup>Optional</sup> <a name="scale_out_workers_per_minute_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinuteInput"></a>

```python
scale_out_workers_per_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `standby_worker_count_input`<sup>Optional</sup> <a name="standby_worker_count_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.standbyWorkerCountInput"></a>

```python
standby_worker_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_idle_duration_seconds_input`<sup>Optional</sup> <a name="worker_idle_duration_seconds_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.workerIdleDurationSecondsInput"></a>

```python
worker_idle_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_workers_per_minute`<sup>Required</sup> <a name="scale_out_workers_per_minute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinute"></a>

```python
scale_out_workers_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `standby_worker_count`<sup>Required</sup> <a name="standby_worker_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.standbyWorkerCount"></a>

```python
standby_worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_idle_duration_seconds`<sup>Required</sup> <a name="worker_idle_duration_seconds" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.workerIdleDurationSeconds"></a>

```python
worker_idle_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration">DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration</a>

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount</a>

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.putCount">put_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.putSelections">put_selections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resetCount">reset_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resetSelections">reset_selections</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_count` <a name="put_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.putCount"></a>

```python
def put_count(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.putCount.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.putCount.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

##### `put_selections` <a name="put_selections" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.putSelections"></a>

```python
def put_selections(
  value: IResolvable | typing.List[DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.putSelections.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a>]

---

##### `reset_count` <a name="reset_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resetCount"></a>

```python
def reset_count() -> None
```

##### `reset_selections` <a name="reset_selections" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resetSelections"></a>

```python
def reset_selections() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.count">count</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.selections">selections</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.countInput">count_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.selectionsInput">selections_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.count"></a>

```python
count: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference</a>

---

##### `selections`<sup>Required</sup> <a name="selections" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.selections"></a>

```python
selections: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList</a>

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.countInput"></a>

```python
count_input: IResolvable | DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount</a>

---

##### `selections_input`<sup>Optional</sup> <a name="selections_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.selectionsInput"></a>

```python
selections_input: IResolvable | typing.List[DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities</a>

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a>]

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resetRuntime">reset_runtime</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_runtime` <a name="reset_runtime" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resetRuntime"></a>

```python
def reset_runtime() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a>

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a>]

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resetMin">reset_min</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resetMin"></a>

```python
def reset_min() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a>

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a>]

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a>

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB</a>

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putAcceleratorCapabilities">put_accelerator_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putCustomAmounts">put_custom_amounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putCustomAttributes">put_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putMemoryMiB">put_memory_mi_b</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putRootEbsVolume">put_root_ebs_volume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putVCpuCount">put_v_cpu_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetAcceleratorCapabilities">reset_accelerator_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetAllowedInstanceTypes">reset_allowed_instance_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetCpuArchitectureType">reset_cpu_architecture_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetCustomAmounts">reset_custom_amounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetCustomAttributes">reset_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetExcludedInstanceTypes">reset_excluded_instance_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetMemoryMiB">reset_memory_mi_b</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetOsFamily">reset_os_family</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetRootEbsVolume">reset_root_ebs_volume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetVCpuCount">reset_v_cpu_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_accelerator_capabilities` <a name="put_accelerator_capabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putAcceleratorCapabilities"></a>

```python
def put_accelerator_capabilities(
  count: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount = None,
  selections: IResolvable | typing.List[DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections] = None
) -> None
```

###### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putAcceleratorCapabilities.parameter.count"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#count DeadlineFleet#count}.

---

###### `selections`<sup>Optional</sup> <a name="selections" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putAcceleratorCapabilities.parameter.selections"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#selections DeadlineFleet#selections}.

---

##### `put_custom_amounts` <a name="put_custom_amounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putCustomAmounts"></a>

```python
def put_custom_amounts(
  value: IResolvable | typing.List[DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putCustomAmounts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a>]

---

##### `put_custom_attributes` <a name="put_custom_attributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putCustomAttributes"></a>

```python
def put_custom_attributes(
  value: IResolvable | typing.List[DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putCustomAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a>]

---

##### `put_memory_mi_b` <a name="put_memory_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putMemoryMiB"></a>

```python
def put_memory_mi_b(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putMemoryMiB.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putMemoryMiB.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

##### `put_root_ebs_volume` <a name="put_root_ebs_volume" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putRootEbsVolume"></a>

```python
def put_root_ebs_volume(
  iops: typing.Union[int, float] = None,
  size_gi_b: typing.Union[int, float] = None,
  throughput_mi_b: typing.Union[int, float] = None
) -> None
```

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putRootEbsVolume.parameter.iops"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#iops DeadlineFleet#iops}.

---

###### `size_gi_b`<sup>Optional</sup> <a name="size_gi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putRootEbsVolume.parameter.sizeGiB"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#size_gi_b DeadlineFleet#size_gi_b}.

---

###### `throughput_mi_b`<sup>Optional</sup> <a name="throughput_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putRootEbsVolume.parameter.throughputMiB"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#throughput_mi_b DeadlineFleet#throughput_mi_b}.

---

##### `put_v_cpu_count` <a name="put_v_cpu_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putVCpuCount"></a>

```python
def put_v_cpu_count(
  max: typing.Union[int, float] = None,
  min: typing.Union[int, float] = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putVCpuCount.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putVCpuCount.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

##### `reset_accelerator_capabilities` <a name="reset_accelerator_capabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetAcceleratorCapabilities"></a>

```python
def reset_accelerator_capabilities() -> None
```

##### `reset_allowed_instance_types` <a name="reset_allowed_instance_types" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetAllowedInstanceTypes"></a>

```python
def reset_allowed_instance_types() -> None
```

##### `reset_cpu_architecture_type` <a name="reset_cpu_architecture_type" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetCpuArchitectureType"></a>

```python
def reset_cpu_architecture_type() -> None
```

##### `reset_custom_amounts` <a name="reset_custom_amounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetCustomAmounts"></a>

```python
def reset_custom_amounts() -> None
```

##### `reset_custom_attributes` <a name="reset_custom_attributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetCustomAttributes"></a>

```python
def reset_custom_attributes() -> None
```

##### `reset_excluded_instance_types` <a name="reset_excluded_instance_types" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetExcludedInstanceTypes"></a>

```python
def reset_excluded_instance_types() -> None
```

##### `reset_memory_mi_b` <a name="reset_memory_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetMemoryMiB"></a>

```python
def reset_memory_mi_b() -> None
```

##### `reset_os_family` <a name="reset_os_family" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetOsFamily"></a>

```python
def reset_os_family() -> None
```

##### `reset_root_ebs_volume` <a name="reset_root_ebs_volume" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetRootEbsVolume"></a>

```python
def reset_root_ebs_volume() -> None
```

##### `reset_v_cpu_count` <a name="reset_v_cpu_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetVCpuCount"></a>

```python
def reset_v_cpu_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.acceleratorCapabilities">accelerator_capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAmounts">custom_amounts</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAttributes">custom_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.memoryMiB">memory_mi_b</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.rootEbsVolume">root_ebs_volume</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.vCpuCount">v_cpu_count</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.acceleratorCapabilitiesInput">accelerator_capabilities_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.allowedInstanceTypesInput">allowed_instance_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.cpuArchitectureTypeInput">cpu_architecture_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAmountsInput">custom_amounts_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAttributesInput">custom_attributes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.excludedInstanceTypesInput">excluded_instance_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.memoryMiBInput">memory_mi_b_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.osFamilyInput">os_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.rootEbsVolumeInput">root_ebs_volume_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.vCpuCountInput">v_cpu_count_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.allowedInstanceTypes">allowed_instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.cpuArchitectureType">cpu_architecture_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.excludedInstanceTypes">excluded_instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_capabilities`<sup>Required</sup> <a name="accelerator_capabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.acceleratorCapabilities"></a>

```python
accelerator_capabilities: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference</a>

---

##### `custom_amounts`<sup>Required</sup> <a name="custom_amounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAmounts"></a>

```python
custom_amounts: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList</a>

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAttributes"></a>

```python
custom_attributes: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList</a>

---

##### `memory_mi_b`<sup>Required</sup> <a name="memory_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.memoryMiB"></a>

```python
memory_mi_b: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference</a>

---

##### `root_ebs_volume`<sup>Required</sup> <a name="root_ebs_volume" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.rootEbsVolume"></a>

```python
root_ebs_volume: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference</a>

---

##### `v_cpu_count`<sup>Required</sup> <a name="v_cpu_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.vCpuCount"></a>

```python
v_cpu_count: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference</a>

---

##### `accelerator_capabilities_input`<sup>Optional</sup> <a name="accelerator_capabilities_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.acceleratorCapabilitiesInput"></a>

```python
accelerator_capabilities_input: IResolvable | DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities</a>

---

##### `allowed_instance_types_input`<sup>Optional</sup> <a name="allowed_instance_types_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.allowedInstanceTypesInput"></a>

```python
allowed_instance_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_architecture_type_input`<sup>Optional</sup> <a name="cpu_architecture_type_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.cpuArchitectureTypeInput"></a>

```python
cpu_architecture_type_input: str
```

- *Type:* str

---

##### `custom_amounts_input`<sup>Optional</sup> <a name="custom_amounts_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAmountsInput"></a>

```python
custom_amounts_input: IResolvable | typing.List[DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a>]

---

##### `custom_attributes_input`<sup>Optional</sup> <a name="custom_attributes_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAttributesInput"></a>

```python
custom_attributes_input: IResolvable | typing.List[DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a>]

---

##### `excluded_instance_types_input`<sup>Optional</sup> <a name="excluded_instance_types_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.excludedInstanceTypesInput"></a>

```python
excluded_instance_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `memory_mi_b_input`<sup>Optional</sup> <a name="memory_mi_b_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.memoryMiBInput"></a>

```python
memory_mi_b_input: IResolvable | DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB</a>

---

##### `os_family_input`<sup>Optional</sup> <a name="os_family_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.osFamilyInput"></a>

```python
os_family_input: str
```

- *Type:* str

---

##### `root_ebs_volume_input`<sup>Optional</sup> <a name="root_ebs_volume_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.rootEbsVolumeInput"></a>

```python
root_ebs_volume_input: IResolvable | DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume</a>

---

##### `v_cpu_count_input`<sup>Optional</sup> <a name="v_cpu_count_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.vCpuCountInput"></a>

```python
v_cpu_count_input: IResolvable | DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount</a>

---

##### `allowed_instance_types`<sup>Required</sup> <a name="allowed_instance_types" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.allowedInstanceTypes"></a>

```python
allowed_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_architecture_type`<sup>Required</sup> <a name="cpu_architecture_type" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.cpuArchitectureType"></a>

```python
cpu_architecture_type: str
```

- *Type:* str

---

##### `excluded_instance_types`<sup>Required</sup> <a name="excluded_instance_types" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.excludedInstanceTypes"></a>

```python
excluded_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities</a>

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resetSizeGiB">reset_size_gi_b</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resetThroughputMiB">reset_throughput_mi_b</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_iops` <a name="reset_iops" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_size_gi_b` <a name="reset_size_gi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resetSizeGiB"></a>

```python
def reset_size_gi_b() -> None
```

##### `reset_throughput_mi_b` <a name="reset_throughput_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resetThroughputMiB"></a>

```python
def reset_throughput_mi_b() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.sizeGiBInput">size_gi_b_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.throughputMiBInput">throughput_mi_b_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.sizeGiB">size_gi_b</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.throughputMiB">throughput_mi_b</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_gi_b_input`<sup>Optional</sup> <a name="size_gi_b_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.sizeGiBInput"></a>

```python
size_gi_b_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_mi_b_input`<sup>Optional</sup> <a name="throughput_mi_b_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.throughputMiBInput"></a>

```python
throughput_mi_b_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_gi_b`<sup>Required</sup> <a name="size_gi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.sizeGiB"></a>

```python
size_gi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_mi_b`<sup>Required</sup> <a name="throughput_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.throughputMiB"></a>

```python
throughput_mi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume</a>

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount</a>

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions">DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions">DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions</a>

---


### DeadlineFleetConfigurationServiceManagedEc2OutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2OutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putAutoScalingConfiguration">put_auto_scaling_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putInstanceCapabilities">put_instance_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putInstanceMarketOptions">put_instance_market_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putPersistentVolumeConfiguration">put_persistent_volume_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putVpcConfiguration">put_vpc_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetAutoScalingConfiguration">reset_auto_scaling_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetInstanceCapabilities">reset_instance_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetInstanceMarketOptions">reset_instance_market_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetPersistentVolumeConfiguration">reset_persistent_volume_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetStorageProfileId">reset_storage_profile_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetVpcConfiguration">reset_vpc_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auto_scaling_configuration` <a name="put_auto_scaling_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putAutoScalingConfiguration"></a>

```python
def put_auto_scaling_configuration(
  scale_out_workers_per_minute: typing.Union[int, float] = None,
  standby_worker_count: typing.Union[int, float] = None,
  worker_idle_duration_seconds: typing.Union[int, float] = None
) -> None
```

###### `scale_out_workers_per_minute`<sup>Optional</sup> <a name="scale_out_workers_per_minute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putAutoScalingConfiguration.parameter.scaleOutWorkersPerMinute"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#scale_out_workers_per_minute DeadlineFleet#scale_out_workers_per_minute}.

---

###### `standby_worker_count`<sup>Optional</sup> <a name="standby_worker_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putAutoScalingConfiguration.parameter.standbyWorkerCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#standby_worker_count DeadlineFleet#standby_worker_count}.

---

###### `worker_idle_duration_seconds`<sup>Optional</sup> <a name="worker_idle_duration_seconds" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putAutoScalingConfiguration.parameter.workerIdleDurationSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#worker_idle_duration_seconds DeadlineFleet#worker_idle_duration_seconds}.

---

##### `put_instance_capabilities` <a name="put_instance_capabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putInstanceCapabilities"></a>

```python
def put_instance_capabilities(
  accelerator_capabilities: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities = None,
  allowed_instance_types: typing.List[str] = None,
  cpu_architecture_type: str = None,
  custom_amounts: IResolvable | typing.List[DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts] = None,
  custom_attributes: IResolvable | typing.List[DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes] = None,
  excluded_instance_types: typing.List[str] = None,
  memory_mi_b: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB = None,
  os_family: str = None,
  root_ebs_volume: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume = None,
  v_cpu_count: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount = None
) -> None
```

###### `accelerator_capabilities`<sup>Optional</sup> <a name="accelerator_capabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putInstanceCapabilities.parameter.acceleratorCapabilities"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#accelerator_capabilities DeadlineFleet#accelerator_capabilities}.

---

###### `allowed_instance_types`<sup>Optional</sup> <a name="allowed_instance_types" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putInstanceCapabilities.parameter.allowedInstanceTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#allowed_instance_types DeadlineFleet#allowed_instance_types}.

---

###### `cpu_architecture_type`<sup>Optional</sup> <a name="cpu_architecture_type" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putInstanceCapabilities.parameter.cpuArchitectureType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#cpu_architecture_type DeadlineFleet#cpu_architecture_type}.

---

###### `custom_amounts`<sup>Optional</sup> <a name="custom_amounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putInstanceCapabilities.parameter.customAmounts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#custom_amounts DeadlineFleet#custom_amounts}.

---

###### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putInstanceCapabilities.parameter.customAttributes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#custom_attributes DeadlineFleet#custom_attributes}.

---

###### `excluded_instance_types`<sup>Optional</sup> <a name="excluded_instance_types" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putInstanceCapabilities.parameter.excludedInstanceTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#excluded_instance_types DeadlineFleet#excluded_instance_types}.

---

###### `memory_mi_b`<sup>Optional</sup> <a name="memory_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putInstanceCapabilities.parameter.memoryMiB"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#memory_mi_b DeadlineFleet#memory_mi_b}.

---

###### `os_family`<sup>Optional</sup> <a name="os_family" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putInstanceCapabilities.parameter.osFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#os_family DeadlineFleet#os_family}.

---

###### `root_ebs_volume`<sup>Optional</sup> <a name="root_ebs_volume" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putInstanceCapabilities.parameter.rootEbsVolume"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#root_ebs_volume DeadlineFleet#root_ebs_volume}.

---

###### `v_cpu_count`<sup>Optional</sup> <a name="v_cpu_count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putInstanceCapabilities.parameter.vCpuCount"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#v_cpu_count DeadlineFleet#v_cpu_count}.

---

##### `put_instance_market_options` <a name="put_instance_market_options" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putInstanceMarketOptions"></a>

```python
def put_instance_market_options(
  type: str = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putInstanceMarketOptions.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#type DeadlineFleet#type}.

---

##### `put_persistent_volume_configuration` <a name="put_persistent_volume_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putPersistentVolumeConfiguration"></a>

```python
def put_persistent_volume_configuration(
  iops: typing.Union[int, float] = None,
  last_used_ttl_hours: typing.Union[int, float] = None,
  mount_path: str = None,
  size_gi_b: typing.Union[int, float] = None,
  throughput_mi_b: typing.Union[int, float] = None
) -> None
```

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putPersistentVolumeConfiguration.parameter.iops"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#iops DeadlineFleet#iops}.

---

###### `last_used_ttl_hours`<sup>Optional</sup> <a name="last_used_ttl_hours" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putPersistentVolumeConfiguration.parameter.lastUsedTtlHours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#last_used_ttl_hours DeadlineFleet#last_used_ttl_hours}.

---

###### `mount_path`<sup>Optional</sup> <a name="mount_path" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putPersistentVolumeConfiguration.parameter.mountPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#mount_path DeadlineFleet#mount_path}.

---

###### `size_gi_b`<sup>Optional</sup> <a name="size_gi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putPersistentVolumeConfiguration.parameter.sizeGiB"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#size_gi_b DeadlineFleet#size_gi_b}.

---

###### `throughput_mi_b`<sup>Optional</sup> <a name="throughput_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putPersistentVolumeConfiguration.parameter.throughputMiB"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#throughput_mi_b DeadlineFleet#throughput_mi_b}.

---

##### `put_vpc_configuration` <a name="put_vpc_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putVpcConfiguration"></a>

```python
def put_vpc_configuration(
  resource_configuration_arns: typing.List[str] = None
) -> None
```

###### `resource_configuration_arns`<sup>Optional</sup> <a name="resource_configuration_arns" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putVpcConfiguration.parameter.resourceConfigurationArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_fleet#resource_configuration_arns DeadlineFleet#resource_configuration_arns}.

---

##### `reset_auto_scaling_configuration` <a name="reset_auto_scaling_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetAutoScalingConfiguration"></a>

```python
def reset_auto_scaling_configuration() -> None
```

##### `reset_instance_capabilities` <a name="reset_instance_capabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetInstanceCapabilities"></a>

```python
def reset_instance_capabilities() -> None
```

##### `reset_instance_market_options` <a name="reset_instance_market_options" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetInstanceMarketOptions"></a>

```python
def reset_instance_market_options() -> None
```

##### `reset_persistent_volume_configuration` <a name="reset_persistent_volume_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetPersistentVolumeConfiguration"></a>

```python
def reset_persistent_volume_configuration() -> None
```

##### `reset_storage_profile_id` <a name="reset_storage_profile_id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetStorageProfileId"></a>

```python
def reset_storage_profile_id() -> None
```

##### `reset_vpc_configuration` <a name="reset_vpc_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetVpcConfiguration"></a>

```python
def reset_vpc_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.autoScalingConfiguration">auto_scaling_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference">DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceCapabilities">instance_capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceMarketOptions">instance_market_options</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.persistentVolumeConfiguration">persistent_volume_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference">DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference">DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.autoScalingConfigurationInput">auto_scaling_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration">DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceCapabilitiesInput">instance_capabilities_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceMarketOptionsInput">instance_market_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions">DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.persistentVolumeConfigurationInput">persistent_volume_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration">DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.storageProfileIdInput">storage_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.vpcConfigurationInput">vpc_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration">DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.storageProfileId">storage_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2">DeadlineFleetConfigurationServiceManagedEc2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_scaling_configuration`<sup>Required</sup> <a name="auto_scaling_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.autoScalingConfiguration"></a>

```python
auto_scaling_configuration: DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference">DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference</a>

---

##### `instance_capabilities`<sup>Required</sup> <a name="instance_capabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceCapabilities"></a>

```python
instance_capabilities: DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference</a>

---

##### `instance_market_options`<sup>Required</sup> <a name="instance_market_options" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceMarketOptions"></a>

```python
instance_market_options: DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference</a>

---

##### `persistent_volume_configuration`<sup>Required</sup> <a name="persistent_volume_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.persistentVolumeConfiguration"></a>

```python
persistent_volume_configuration: DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference">DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference</a>

---

##### `vpc_configuration`<sup>Required</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.vpcConfiguration"></a>

```python
vpc_configuration: DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference">DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference</a>

---

##### `auto_scaling_configuration_input`<sup>Optional</sup> <a name="auto_scaling_configuration_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.autoScalingConfigurationInput"></a>

```python
auto_scaling_configuration_input: IResolvable | DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration">DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration</a>

---

##### `instance_capabilities_input`<sup>Optional</sup> <a name="instance_capabilities_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceCapabilitiesInput"></a>

```python
instance_capabilities_input: IResolvable | DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities</a>

---

##### `instance_market_options_input`<sup>Optional</sup> <a name="instance_market_options_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceMarketOptionsInput"></a>

```python
instance_market_options_input: IResolvable | DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions">DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions</a>

---

##### `persistent_volume_configuration_input`<sup>Optional</sup> <a name="persistent_volume_configuration_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.persistentVolumeConfigurationInput"></a>

```python
persistent_volume_configuration_input: IResolvable | DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration">DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration</a>

---

##### `storage_profile_id_input`<sup>Optional</sup> <a name="storage_profile_id_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.storageProfileIdInput"></a>

```python
storage_profile_id_input: str
```

- *Type:* str

---

##### `vpc_configuration_input`<sup>Optional</sup> <a name="vpc_configuration_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.vpcConfigurationInput"></a>

```python
vpc_configuration_input: IResolvable | DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration">DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration</a>

---

##### `storage_profile_id`<sup>Required</sup> <a name="storage_profile_id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.storageProfileId"></a>

```python
storage_profile_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationServiceManagedEc2
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2">DeadlineFleetConfigurationServiceManagedEc2</a>

---


### DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resetLastUsedTtlHours">reset_last_used_ttl_hours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resetMountPath">reset_mount_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resetSizeGiB">reset_size_gi_b</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resetThroughputMiB">reset_throughput_mi_b</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_iops` <a name="reset_iops" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_last_used_ttl_hours` <a name="reset_last_used_ttl_hours" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resetLastUsedTtlHours"></a>

```python
def reset_last_used_ttl_hours() -> None
```

##### `reset_mount_path` <a name="reset_mount_path" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resetMountPath"></a>

```python
def reset_mount_path() -> None
```

##### `reset_size_gi_b` <a name="reset_size_gi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resetSizeGiB"></a>

```python
def reset_size_gi_b() -> None
```

##### `reset_throughput_mi_b` <a name="reset_throughput_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resetThroughputMiB"></a>

```python
def reset_throughput_mi_b() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.lastUsedTtlHoursInput">last_used_ttl_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.mountPathInput">mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.sizeGiBInput">size_gi_b_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.throughputMiBInput">throughput_mi_b_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.lastUsedTtlHours">last_used_ttl_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.sizeGiB">size_gi_b</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.throughputMiB">throughput_mi_b</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration">DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_used_ttl_hours_input`<sup>Optional</sup> <a name="last_used_ttl_hours_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.lastUsedTtlHoursInput"></a>

```python
last_used_ttl_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_path_input`<sup>Optional</sup> <a name="mount_path_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.mountPathInput"></a>

```python
mount_path_input: str
```

- *Type:* str

---

##### `size_gi_b_input`<sup>Optional</sup> <a name="size_gi_b_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.sizeGiBInput"></a>

```python
size_gi_b_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_mi_b_input`<sup>Optional</sup> <a name="throughput_mi_b_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.throughputMiBInput"></a>

```python
throughput_mi_b_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_used_ttl_hours`<sup>Required</sup> <a name="last_used_ttl_hours" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.lastUsedTtlHours"></a>

```python
last_used_ttl_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `size_gi_b`<sup>Required</sup> <a name="size_gi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.sizeGiB"></a>

```python
size_gi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_mi_b`<sup>Required</sup> <a name="throughput_mi_b" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.throughputMiB"></a>

```python
throughput_mi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration">DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration</a>

---


### DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.resetResourceConfigurationArns">reset_resource_configuration_arns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_configuration_arns` <a name="reset_resource_configuration_arns" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.resetResourceConfigurationArns"></a>

```python
def reset_resource_configuration_arns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.resourceConfigurationArnsInput">resource_configuration_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.resourceConfigurationArns">resource_configuration_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration">DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_configuration_arns_input`<sup>Optional</sup> <a name="resource_configuration_arns_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.resourceConfigurationArnsInput"></a>

```python
resource_configuration_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_configuration_arns`<sup>Required</sup> <a name="resource_configuration_arns" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.resourceConfigurationArns"></a>

```python
resource_configuration_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration">DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration</a>

---


### DeadlineFleetHostConfigurationOutputReference <a name="DeadlineFleetHostConfigurationOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetHostConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.resetScriptBody">reset_script_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.resetScriptTimeoutSeconds">reset_script_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_script_body` <a name="reset_script_body" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.resetScriptBody"></a>

```python
def reset_script_body() -> None
```

##### `reset_script_timeout_seconds` <a name="reset_script_timeout_seconds" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.resetScriptTimeoutSeconds"></a>

```python
def reset_script_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.scriptBodyInput">script_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.scriptTimeoutSecondsInput">script_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.scriptBody">script_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.scriptTimeoutSeconds">script_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration">DeadlineFleetHostConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script_body_input`<sup>Optional</sup> <a name="script_body_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.scriptBodyInput"></a>

```python
script_body_input: str
```

- *Type:* str

---

##### `script_timeout_seconds_input`<sup>Optional</sup> <a name="script_timeout_seconds_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.scriptTimeoutSecondsInput"></a>

```python
script_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `script_body`<sup>Required</sup> <a name="script_body" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.scriptBody"></a>

```python
script_body: str
```

- *Type:* str

---

##### `script_timeout_seconds`<sup>Required</sup> <a name="script_timeout_seconds" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.scriptTimeoutSeconds"></a>

```python
script_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetHostConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration">DeadlineFleetHostConfiguration</a>

---


### DeadlineFleetTagsList <a name="DeadlineFleetTagsList" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DeadlineFleetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags">DeadlineFleetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DeadlineFleetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags">DeadlineFleetTags</a>]

---


### DeadlineFleetTagsOutputReference <a name="DeadlineFleetTagsOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import deadline_fleet

deadlineFleet.DeadlineFleetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags">DeadlineFleetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeadlineFleetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags">DeadlineFleetTags</a>

---



