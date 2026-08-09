# `workspacesWorkspacesPool` Submodule <a name="`workspacesWorkspacesPool` Submodule" id="@cdktn/provider-awscc.workspacesWorkspacesPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesWorkspacesPool <a name="WorkspacesWorkspacesPool" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool awscc_workspaces_workspaces_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_workspaces_pool

workspacesWorkspacesPool.WorkspacesWorkspacesPool(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bundle_id: str,
  capacity: WorkspacesWorkspacesPoolCapacity,
  directory_id: str,
  pool_name: str,
  application_settings: WorkspacesWorkspacesPoolApplicationSettings = None,
  description: str = None,
  running_mode: str = None,
  tags: IResolvable | typing.List[WorkspacesWorkspacesPoolTags] = None,
  timeout_settings: WorkspacesWorkspacesPoolTimeoutSettings = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.bundleId">bundle_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#bundle_id WorkspacesWorkspacesPool#bundle_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.capacity">capacity</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#capacity WorkspacesWorkspacesPool#capacity}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#directory_id WorkspacesWorkspacesPool#directory_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.poolName">pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#pool_name WorkspacesWorkspacesPool#pool_name}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.applicationSettings">application_settings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#application_settings WorkspacesWorkspacesPool#application_settings}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#description WorkspacesWorkspacesPool#description}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.runningMode">running_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#running_mode WorkspacesWorkspacesPool#running_mode}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#tags WorkspacesWorkspacesPool#tags}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.timeoutSettings">timeout_settings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#timeout_settings WorkspacesWorkspacesPool#timeout_settings}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.bundleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#bundle_id WorkspacesWorkspacesPool#bundle_id}.

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.capacity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#capacity WorkspacesWorkspacesPool#capacity}.

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.directoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#directory_id WorkspacesWorkspacesPool#directory_id}.

---

##### `pool_name`<sup>Required</sup> <a name="pool_name" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.poolName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#pool_name WorkspacesWorkspacesPool#pool_name}.

---

##### `application_settings`<sup>Optional</sup> <a name="application_settings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.applicationSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#application_settings WorkspacesWorkspacesPool#application_settings}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#description WorkspacesWorkspacesPool#description}.

---

##### `running_mode`<sup>Optional</sup> <a name="running_mode" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.runningMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#running_mode WorkspacesWorkspacesPool#running_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#tags WorkspacesWorkspacesPool#tags}.

---

##### `timeout_settings`<sup>Optional</sup> <a name="timeout_settings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.timeoutSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#timeout_settings WorkspacesWorkspacesPool#timeout_settings}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putApplicationSettings">put_application_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putCapacity">put_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTimeoutSettings">put_timeout_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetApplicationSettings">reset_application_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetRunningMode">reset_running_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetTimeoutSettings">reset_timeout_settings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_application_settings` <a name="put_application_settings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putApplicationSettings"></a>

```python
def put_application_settings(
  settings_group: str = None,
  status: str = None
) -> None
```

###### `settings_group`<sup>Optional</sup> <a name="settings_group" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putApplicationSettings.parameter.settingsGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#settings_group WorkspacesWorkspacesPool#settings_group}.

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putApplicationSettings.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#status WorkspacesWorkspacesPool#status}.

---

##### `put_capacity` <a name="put_capacity" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putCapacity"></a>

```python
def put_capacity(
  desired_user_sessions: typing.Union[int, float]
) -> None
```

###### `desired_user_sessions`<sup>Required</sup> <a name="desired_user_sessions" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putCapacity.parameter.desiredUserSessions"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#desired_user_sessions WorkspacesWorkspacesPool#desired_user_sessions}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[WorkspacesWorkspacesPoolTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>]

---

##### `put_timeout_settings` <a name="put_timeout_settings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTimeoutSettings"></a>

```python
def put_timeout_settings(
  disconnect_timeout_in_seconds: typing.Union[int, float] = None,
  idle_disconnect_timeout_in_seconds: typing.Union[int, float] = None,
  max_user_duration_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `disconnect_timeout_in_seconds`<sup>Optional</sup> <a name="disconnect_timeout_in_seconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTimeoutSettings.parameter.disconnectTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#disconnect_timeout_in_seconds WorkspacesWorkspacesPool#disconnect_timeout_in_seconds}.

---

###### `idle_disconnect_timeout_in_seconds`<sup>Optional</sup> <a name="idle_disconnect_timeout_in_seconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTimeoutSettings.parameter.idleDisconnectTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#idle_disconnect_timeout_in_seconds WorkspacesWorkspacesPool#idle_disconnect_timeout_in_seconds}.

---

###### `max_user_duration_in_seconds`<sup>Optional</sup> <a name="max_user_duration_in_seconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTimeoutSettings.parameter.maxUserDurationInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#max_user_duration_in_seconds WorkspacesWorkspacesPool#max_user_duration_in_seconds}.

---

##### `reset_application_settings` <a name="reset_application_settings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetApplicationSettings"></a>

```python
def reset_application_settings() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_running_mode` <a name="reset_running_mode" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetRunningMode"></a>

```python
def reset_running_mode() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeout_settings` <a name="reset_timeout_settings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetTimeoutSettings"></a>

```python
def reset_timeout_settings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WorkspacesWorkspacesPool resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isConstruct"></a>

```python
from cdktn_provider_awscc import workspaces_workspaces_pool

workspacesWorkspacesPool.WorkspacesWorkspacesPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformElement"></a>

```python
from cdktn_provider_awscc import workspaces_workspaces_pool

workspacesWorkspacesPool.WorkspacesWorkspacesPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformResource"></a>

```python
from cdktn_provider_awscc import workspaces_workspaces_pool

workspacesWorkspacesPool.WorkspacesWorkspacesPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import workspaces_workspaces_pool

workspacesWorkspacesPool.WorkspacesWorkspacesPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WorkspacesWorkspacesPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspacesWorkspacesPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspacesWorkspacesPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesWorkspacesPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.applicationSettings">application_settings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference">WorkspacesWorkspacesPoolApplicationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.capacity">capacity</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference">WorkspacesWorkspacesPoolCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolArn">pool_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolId">pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList">WorkspacesWorkspacesPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.timeoutSettings">timeout_settings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference">WorkspacesWorkspacesPoolTimeoutSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.applicationSettingsInput">application_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.bundleIdInput">bundle_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.capacityInput">capacity_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolNameInput">pool_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.runningModeInput">running_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.timeoutSettingsInput">timeout_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.bundleId">bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolName">pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.runningMode">running_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_settings`<sup>Required</sup> <a name="application_settings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.applicationSettings"></a>

```python
application_settings: WorkspacesWorkspacesPoolApplicationSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference">WorkspacesWorkspacesPoolApplicationSettingsOutputReference</a>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.capacity"></a>

```python
capacity: WorkspacesWorkspacesPoolCapacityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference">WorkspacesWorkspacesPoolCapacityOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `pool_arn`<sup>Required</sup> <a name="pool_arn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolArn"></a>

```python
pool_arn: str
```

- *Type:* str

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tags"></a>

```python
tags: WorkspacesWorkspacesPoolTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList">WorkspacesWorkspacesPoolTagsList</a>

---

##### `timeout_settings`<sup>Required</sup> <a name="timeout_settings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.timeoutSettings"></a>

```python
timeout_settings: WorkspacesWorkspacesPoolTimeoutSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference">WorkspacesWorkspacesPoolTimeoutSettingsOutputReference</a>

---

##### `application_settings_input`<sup>Optional</sup> <a name="application_settings_input" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.applicationSettingsInput"></a>

```python
application_settings_input: IResolvable | WorkspacesWorkspacesPoolApplicationSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a>

---

##### `bundle_id_input`<sup>Optional</sup> <a name="bundle_id_input" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.bundleIdInput"></a>

```python
bundle_id_input: str
```

- *Type:* str

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.capacityInput"></a>

```python
capacity_input: IResolvable | WorkspacesWorkspacesPoolCapacity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `pool_name_input`<sup>Optional</sup> <a name="pool_name_input" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolNameInput"></a>

```python
pool_name_input: str
```

- *Type:* str

---

##### `running_mode_input`<sup>Optional</sup> <a name="running_mode_input" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.runningModeInput"></a>

```python
running_mode_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[WorkspacesWorkspacesPoolTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>]

---

##### `timeout_settings_input`<sup>Optional</sup> <a name="timeout_settings_input" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.timeoutSettingsInput"></a>

```python
timeout_settings_input: IResolvable | WorkspacesWorkspacesPoolTimeoutSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a>

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `pool_name`<sup>Required</sup> <a name="pool_name" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolName"></a>

```python
pool_name: str
```

- *Type:* str

---

##### `running_mode`<sup>Required</sup> <a name="running_mode" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.runningMode"></a>

```python
running_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesWorkspacesPoolApplicationSettings <a name="WorkspacesWorkspacesPoolApplicationSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_workspaces_pool

workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings(
  settings_group: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.property.settingsGroup">settings_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#settings_group WorkspacesWorkspacesPool#settings_group}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#status WorkspacesWorkspacesPool#status}. |

---

##### `settings_group`<sup>Optional</sup> <a name="settings_group" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.property.settingsGroup"></a>

```python
settings_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#settings_group WorkspacesWorkspacesPool#settings_group}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#status WorkspacesWorkspacesPool#status}.

---

### WorkspacesWorkspacesPoolCapacity <a name="WorkspacesWorkspacesPoolCapacity" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_workspaces_pool

workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity(
  desired_user_sessions: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity.property.desiredUserSessions">desired_user_sessions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#desired_user_sessions WorkspacesWorkspacesPool#desired_user_sessions}. |

---

##### `desired_user_sessions`<sup>Required</sup> <a name="desired_user_sessions" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity.property.desiredUserSessions"></a>

```python
desired_user_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#desired_user_sessions WorkspacesWorkspacesPool#desired_user_sessions}.

---

### WorkspacesWorkspacesPoolConfig <a name="WorkspacesWorkspacesPoolConfig" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_workspaces_pool

workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bundle_id: str,
  capacity: WorkspacesWorkspacesPoolCapacity,
  directory_id: str,
  pool_name: str,
  application_settings: WorkspacesWorkspacesPoolApplicationSettings = None,
  description: str = None,
  running_mode: str = None,
  tags: IResolvable | typing.List[WorkspacesWorkspacesPoolTags] = None,
  timeout_settings: WorkspacesWorkspacesPoolTimeoutSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.bundleId">bundle_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#bundle_id WorkspacesWorkspacesPool#bundle_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.capacity">capacity</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#capacity WorkspacesWorkspacesPool#capacity}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#directory_id WorkspacesWorkspacesPool#directory_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.poolName">pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#pool_name WorkspacesWorkspacesPool#pool_name}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.applicationSettings">application_settings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#application_settings WorkspacesWorkspacesPool#application_settings}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#description WorkspacesWorkspacesPool#description}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.runningMode">running_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#running_mode WorkspacesWorkspacesPool#running_mode}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#tags WorkspacesWorkspacesPool#tags}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.timeoutSettings">timeout_settings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#timeout_settings WorkspacesWorkspacesPool#timeout_settings}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#bundle_id WorkspacesWorkspacesPool#bundle_id}.

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.capacity"></a>

```python
capacity: WorkspacesWorkspacesPoolCapacity
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#capacity WorkspacesWorkspacesPool#capacity}.

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#directory_id WorkspacesWorkspacesPool#directory_id}.

---

##### `pool_name`<sup>Required</sup> <a name="pool_name" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.poolName"></a>

```python
pool_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#pool_name WorkspacesWorkspacesPool#pool_name}.

---

##### `application_settings`<sup>Optional</sup> <a name="application_settings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.applicationSettings"></a>

```python
application_settings: WorkspacesWorkspacesPoolApplicationSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#application_settings WorkspacesWorkspacesPool#application_settings}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#description WorkspacesWorkspacesPool#description}.

---

##### `running_mode`<sup>Optional</sup> <a name="running_mode" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.runningMode"></a>

```python
running_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#running_mode WorkspacesWorkspacesPool#running_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[WorkspacesWorkspacesPoolTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#tags WorkspacesWorkspacesPool#tags}.

---

##### `timeout_settings`<sup>Optional</sup> <a name="timeout_settings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.timeoutSettings"></a>

```python
timeout_settings: WorkspacesWorkspacesPoolTimeoutSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#timeout_settings WorkspacesWorkspacesPool#timeout_settings}.

---

### WorkspacesWorkspacesPoolTags <a name="WorkspacesWorkspacesPoolTags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_workspaces_pool

workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#key WorkspacesWorkspacesPool#key}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#value WorkspacesWorkspacesPool#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#key WorkspacesWorkspacesPool#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#value WorkspacesWorkspacesPool#value}.

---

### WorkspacesWorkspacesPoolTimeoutSettings <a name="WorkspacesWorkspacesPoolTimeoutSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_workspaces_pool

workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings(
  disconnect_timeout_in_seconds: typing.Union[int, float] = None,
  idle_disconnect_timeout_in_seconds: typing.Union[int, float] = None,
  max_user_duration_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.disconnectTimeoutInSeconds">disconnect_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#disconnect_timeout_in_seconds WorkspacesWorkspacesPool#disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.idleDisconnectTimeoutInSeconds">idle_disconnect_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#idle_disconnect_timeout_in_seconds WorkspacesWorkspacesPool#idle_disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.maxUserDurationInSeconds">max_user_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#max_user_duration_in_seconds WorkspacesWorkspacesPool#max_user_duration_in_seconds}. |

---

##### `disconnect_timeout_in_seconds`<sup>Optional</sup> <a name="disconnect_timeout_in_seconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.disconnectTimeoutInSeconds"></a>

```python
disconnect_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#disconnect_timeout_in_seconds WorkspacesWorkspacesPool#disconnect_timeout_in_seconds}.

---

##### `idle_disconnect_timeout_in_seconds`<sup>Optional</sup> <a name="idle_disconnect_timeout_in_seconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.idleDisconnectTimeoutInSeconds"></a>

```python
idle_disconnect_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#idle_disconnect_timeout_in_seconds WorkspacesWorkspacesPool#idle_disconnect_timeout_in_seconds}.

---

##### `max_user_duration_in_seconds`<sup>Optional</sup> <a name="max_user_duration_in_seconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.maxUserDurationInSeconds"></a>

```python
max_user_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_workspaces_pool#max_user_duration_in_seconds WorkspacesWorkspacesPool#max_user_duration_in_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesWorkspacesPoolApplicationSettingsOutputReference <a name="WorkspacesWorkspacesPoolApplicationSettingsOutputReference" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_workspaces_pool

workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resetSettingsGroup">reset_settings_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_settings_group` <a name="reset_settings_group" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resetSettingsGroup"></a>

```python
def reset_settings_group() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroupInput">settings_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroup">settings_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `settings_group_input`<sup>Optional</sup> <a name="settings_group_input" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroupInput"></a>

```python
settings_group_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `settings_group`<sup>Required</sup> <a name="settings_group" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroup"></a>

```python
settings_group: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesWorkspacesPoolApplicationSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a>

---


### WorkspacesWorkspacesPoolCapacityOutputReference <a name="WorkspacesWorkspacesPoolCapacityOutputReference" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_workspaces_pool

workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessionsInput">desired_user_sessions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessions">desired_user_sessions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `desired_user_sessions_input`<sup>Optional</sup> <a name="desired_user_sessions_input" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessionsInput"></a>

```python
desired_user_sessions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desired_user_sessions`<sup>Required</sup> <a name="desired_user_sessions" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessions"></a>

```python
desired_user_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesWorkspacesPoolCapacity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a>

---


### WorkspacesWorkspacesPoolTagsList <a name="WorkspacesWorkspacesPoolTagsList" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_workspaces_pool

workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspacesWorkspacesPoolTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspacesWorkspacesPoolTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>]

---


### WorkspacesWorkspacesPoolTagsOutputReference <a name="WorkspacesWorkspacesPoolTagsOutputReference" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_workspaces_pool

workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesWorkspacesPoolTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>

---


### WorkspacesWorkspacesPoolTimeoutSettingsOutputReference <a name="WorkspacesWorkspacesPoolTimeoutSettingsOutputReference" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_workspaces_pool

workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetDisconnectTimeoutInSeconds">reset_disconnect_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetIdleDisconnectTimeoutInSeconds">reset_idle_disconnect_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetMaxUserDurationInSeconds">reset_max_user_duration_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disconnect_timeout_in_seconds` <a name="reset_disconnect_timeout_in_seconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetDisconnectTimeoutInSeconds"></a>

```python
def reset_disconnect_timeout_in_seconds() -> None
```

##### `reset_idle_disconnect_timeout_in_seconds` <a name="reset_idle_disconnect_timeout_in_seconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetIdleDisconnectTimeoutInSeconds"></a>

```python
def reset_idle_disconnect_timeout_in_seconds() -> None
```

##### `reset_max_user_duration_in_seconds` <a name="reset_max_user_duration_in_seconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetMaxUserDurationInSeconds"></a>

```python
def reset_max_user_duration_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSecondsInput">disconnect_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSecondsInput">idle_disconnect_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSecondsInput">max_user_duration_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSeconds">disconnect_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSeconds">idle_disconnect_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSeconds">max_user_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disconnect_timeout_in_seconds_input`<sup>Optional</sup> <a name="disconnect_timeout_in_seconds_input" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSecondsInput"></a>

```python
disconnect_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idle_disconnect_timeout_in_seconds_input`<sup>Optional</sup> <a name="idle_disconnect_timeout_in_seconds_input" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSecondsInput"></a>

```python
idle_disconnect_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_user_duration_in_seconds_input`<sup>Optional</sup> <a name="max_user_duration_in_seconds_input" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSecondsInput"></a>

```python
max_user_duration_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disconnect_timeout_in_seconds`<sup>Required</sup> <a name="disconnect_timeout_in_seconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSeconds"></a>

```python
disconnect_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idle_disconnect_timeout_in_seconds`<sup>Required</sup> <a name="idle_disconnect_timeout_in_seconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSeconds"></a>

```python
idle_disconnect_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_user_duration_in_seconds`<sup>Required</sup> <a name="max_user_duration_in_seconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSeconds"></a>

```python
max_user_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesWorkspacesPoolTimeoutSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a>

---



