# `workspacesinstancesWorkspaceInstance` Submodule <a name="`workspacesinstancesWorkspaceInstance` Submodule" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesinstancesWorkspaceInstance <a name="WorkspacesinstancesWorkspaceInstance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance awscc_workspacesinstances_workspace_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  managed_instance: WorkspacesinstancesWorkspaceInstanceManagedInstance = None,
  tags: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.managedInstance">managed_instance</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance">WorkspacesinstancesWorkspaceInstanceManagedInstance</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#managed_instance WorkspacesinstancesWorkspaceInstance#managed_instance}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags">WorkspacesinstancesWorkspaceInstanceTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#tags WorkspacesinstancesWorkspaceInstance#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `managed_instance`<sup>Optional</sup> <a name="managed_instance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.managedInstance"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance">WorkspacesinstancesWorkspaceInstanceManagedInstance</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#managed_instance WorkspacesinstancesWorkspaceInstance#managed_instance}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags">WorkspacesinstancesWorkspaceInstanceTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#tags WorkspacesinstancesWorkspaceInstance#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance">put_managed_instance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.resetManagedInstance">reset_managed_instance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_managed_instance` <a name="put_managed_instance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance"></a>

```python
def put_managed_instance(
  block_device_mappings: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings] = None,
  capacity_reservation_specification: WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification = None,
  cpu_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions = None,
  credit_specification: WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification = None,
  disable_api_stop: bool | IResolvable = None,
  ebs_optimized: bool | IResolvable = None,
  enable_primary_ipv6: bool | IResolvable = None,
  enclave_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions = None,
  hibernation_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions = None,
  iam_instance_profile: WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile = None,
  image_id: str = None,
  instance_type: str = None,
  ipv6_address_count: typing.Union[int, float] = None,
  key_name: str = None,
  license_specifications: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications] = None,
  maintenance_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions = None,
  metadata_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions = None,
  monitoring: WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring = None,
  network_interfaces: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces] = None,
  network_performance_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions = None,
  placement: WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement = None,
  private_dns_name_options: WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions = None,
  subnet_id: str = None,
  tag_specifications: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications] = None,
  user_data: str = None
) -> None
```

###### `block_device_mappings`<sup>Optional</sup> <a name="block_device_mappings" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.blockDeviceMappings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#block_device_mappings WorkspacesinstancesWorkspaceInstance#block_device_mappings}.

---

###### `capacity_reservation_specification`<sup>Optional</sup> <a name="capacity_reservation_specification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.capacityReservationSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_specification WorkspacesinstancesWorkspaceInstance#capacity_reservation_specification}.

---

###### `cpu_options`<sup>Optional</sup> <a name="cpu_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.cpuOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#cpu_options WorkspacesinstancesWorkspaceInstance#cpu_options}.

---

###### `credit_specification`<sup>Optional</sup> <a name="credit_specification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.creditSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#credit_specification WorkspacesinstancesWorkspaceInstance#credit_specification}.

---

###### `disable_api_stop`<sup>Optional</sup> <a name="disable_api_stop" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.disableApiStop"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#disable_api_stop WorkspacesinstancesWorkspaceInstance#disable_api_stop}.

---

###### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.ebsOptimized"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#ebs_optimized WorkspacesinstancesWorkspaceInstance#ebs_optimized}.

---

###### `enable_primary_ipv6`<sup>Optional</sup> <a name="enable_primary_ipv6" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.enablePrimaryIpv6"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#enable_primary_ipv_6 WorkspacesinstancesWorkspaceInstance#enable_primary_ipv_6}.

---

###### `enclave_options`<sup>Optional</sup> <a name="enclave_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.enclaveOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#enclave_options WorkspacesinstancesWorkspaceInstance#enclave_options}.

---

###### `hibernation_options`<sup>Optional</sup> <a name="hibernation_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.hibernationOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#hibernation_options WorkspacesinstancesWorkspaceInstance#hibernation_options}.

---

###### `iam_instance_profile`<sup>Optional</sup> <a name="iam_instance_profile" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.iamInstanceProfile"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#iam_instance_profile WorkspacesinstancesWorkspaceInstance#iam_instance_profile}.

---

###### `image_id`<sup>Optional</sup> <a name="image_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.imageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#image_id WorkspacesinstancesWorkspaceInstance#image_id}.

---

###### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#instance_type WorkspacesinstancesWorkspaceInstance#instance_type}.

---

###### `ipv6_address_count`<sup>Optional</sup> <a name="ipv6_address_count" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.ipv6AddressCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#ipv_6_address_count WorkspacesinstancesWorkspaceInstance#ipv_6_address_count}.

---

###### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.keyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#key_name WorkspacesinstancesWorkspaceInstance#key_name}.

---

###### `license_specifications`<sup>Optional</sup> <a name="license_specifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.licenseSpecifications"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#license_specifications WorkspacesinstancesWorkspaceInstance#license_specifications}.

---

###### `maintenance_options`<sup>Optional</sup> <a name="maintenance_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.maintenanceOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#maintenance_options WorkspacesinstancesWorkspaceInstance#maintenance_options}.

---

###### `metadata_options`<sup>Optional</sup> <a name="metadata_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.metadataOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#metadata_options WorkspacesinstancesWorkspaceInstance#metadata_options}.

---

###### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.monitoring"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#monitoring WorkspacesinstancesWorkspaceInstance#monitoring}.

---

###### `network_interfaces`<sup>Optional</sup> <a name="network_interfaces" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.networkInterfaces"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#network_interfaces WorkspacesinstancesWorkspaceInstance#network_interfaces}.

---

###### `network_performance_options`<sup>Optional</sup> <a name="network_performance_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.networkPerformanceOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#network_performance_options WorkspacesinstancesWorkspaceInstance#network_performance_options}.

---

###### `placement`<sup>Optional</sup> <a name="placement" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.placement"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#placement WorkspacesinstancesWorkspaceInstance#placement}.

---

###### `private_dns_name_options`<sup>Optional</sup> <a name="private_dns_name_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.privateDnsNameOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#private_dns_name_options WorkspacesinstancesWorkspaceInstance#private_dns_name_options}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#subnet_id WorkspacesinstancesWorkspaceInstance#subnet_id}.

---

###### `tag_specifications`<sup>Optional</sup> <a name="tag_specifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.tagSpecifications"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#tag_specifications WorkspacesinstancesWorkspaceInstance#tag_specifications}.

---

###### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.userData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#user_data WorkspacesinstancesWorkspaceInstance#user_data}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags">WorkspacesinstancesWorkspaceInstanceTags</a>]

---

##### `reset_managed_instance` <a name="reset_managed_instance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.resetManagedInstance"></a>

```python
def reset_managed_instance() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WorkspacesinstancesWorkspaceInstance resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isConstruct"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isTerraformElement"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isTerraformResource"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WorkspacesinstancesWorkspaceInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspacesinstancesWorkspaceInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspacesinstancesWorkspaceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesinstancesWorkspaceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.ec2ManagedInstance">ec2_managed_instance</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference">WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.managedInstance">managed_instance</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.provisionState">provision_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList">WorkspacesinstancesWorkspaceInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.workspaceInstanceId">workspace_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.managedInstanceInput">managed_instance_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance">WorkspacesinstancesWorkspaceInstanceManagedInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags">WorkspacesinstancesWorkspaceInstanceTags</a>]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ec2_managed_instance`<sup>Required</sup> <a name="ec2_managed_instance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.ec2ManagedInstance"></a>

```python
ec2_managed_instance: WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference">WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance`<sup>Required</sup> <a name="managed_instance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.managedInstance"></a>

```python
managed_instance: WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference</a>

---

##### `provision_state`<sup>Required</sup> <a name="provision_state" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.provisionState"></a>

```python
provision_state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.tags"></a>

```python
tags: WorkspacesinstancesWorkspaceInstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList">WorkspacesinstancesWorkspaceInstanceTagsList</a>

---

##### `workspace_instance_id`<sup>Required</sup> <a name="workspace_instance_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.workspaceInstanceId"></a>

```python
workspace_instance_id: str
```

- *Type:* str

---

##### `managed_instance_input`<sup>Optional</sup> <a name="managed_instance_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.managedInstanceInput"></a>

```python
managed_instance_input: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstance
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance">WorkspacesinstancesWorkspaceInstanceManagedInstance</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags">WorkspacesinstancesWorkspaceInstanceTags</a>]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesinstancesWorkspaceInstanceConfig <a name="WorkspacesinstancesWorkspaceInstanceConfig" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  managed_instance: WorkspacesinstancesWorkspaceInstanceManagedInstance = None,
  tags: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.managedInstance">managed_instance</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance">WorkspacesinstancesWorkspaceInstanceManagedInstance</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#managed_instance WorkspacesinstancesWorkspaceInstance#managed_instance}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags">WorkspacesinstancesWorkspaceInstanceTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#tags WorkspacesinstancesWorkspaceInstance#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `managed_instance`<sup>Optional</sup> <a name="managed_instance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.managedInstance"></a>

```python
managed_instance: WorkspacesinstancesWorkspaceInstanceManagedInstance
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance">WorkspacesinstancesWorkspaceInstanceManagedInstance</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#managed_instance WorkspacesinstancesWorkspaceInstance#managed_instance}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags">WorkspacesinstancesWorkspaceInstanceTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#tags WorkspacesinstancesWorkspaceInstance#tags}.

---

### WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance <a name="WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance()
```


### WorkspacesinstancesWorkspaceInstanceManagedInstance <a name="WorkspacesinstancesWorkspaceInstanceManagedInstance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance(
  block_device_mappings: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings] = None,
  capacity_reservation_specification: WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification = None,
  cpu_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions = None,
  credit_specification: WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification = None,
  disable_api_stop: bool | IResolvable = None,
  ebs_optimized: bool | IResolvable = None,
  enable_primary_ipv6: bool | IResolvable = None,
  enclave_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions = None,
  hibernation_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions = None,
  iam_instance_profile: WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile = None,
  image_id: str = None,
  instance_type: str = None,
  ipv6_address_count: typing.Union[int, float] = None,
  key_name: str = None,
  license_specifications: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications] = None,
  maintenance_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions = None,
  metadata_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions = None,
  monitoring: WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring = None,
  network_interfaces: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces] = None,
  network_performance_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions = None,
  placement: WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement = None,
  private_dns_name_options: WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions = None,
  subnet_id: str = None,
  tag_specifications: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications] = None,
  user_data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.blockDeviceMappings">block_device_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#block_device_mappings WorkspacesinstancesWorkspaceInstance#block_device_mappings}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.capacityReservationSpecification">capacity_reservation_specification</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_specification WorkspacesinstancesWorkspaceInstance#capacity_reservation_specification}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.cpuOptions">cpu_options</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#cpu_options WorkspacesinstancesWorkspaceInstance#cpu_options}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.creditSpecification">credit_specification</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#credit_specification WorkspacesinstancesWorkspaceInstance#credit_specification}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.disableApiStop">disable_api_stop</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#disable_api_stop WorkspacesinstancesWorkspaceInstance#disable_api_stop}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.ebsOptimized">ebs_optimized</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#ebs_optimized WorkspacesinstancesWorkspaceInstance#ebs_optimized}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.enablePrimaryIpv6">enable_primary_ipv6</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#enable_primary_ipv_6 WorkspacesinstancesWorkspaceInstance#enable_primary_ipv_6}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.enclaveOptions">enclave_options</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#enclave_options WorkspacesinstancesWorkspaceInstance#enclave_options}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.hibernationOptions">hibernation_options</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#hibernation_options WorkspacesinstancesWorkspaceInstance#hibernation_options}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.iamInstanceProfile">iam_instance_profile</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#iam_instance_profile WorkspacesinstancesWorkspaceInstance#iam_instance_profile}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#image_id WorkspacesinstancesWorkspaceInstance#image_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#instance_type WorkspacesinstancesWorkspaceInstance#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#ipv_6_address_count WorkspacesinstancesWorkspaceInstance#ipv_6_address_count}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.keyName">key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#key_name WorkspacesinstancesWorkspaceInstance#key_name}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.licenseSpecifications">license_specifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#license_specifications WorkspacesinstancesWorkspaceInstance#license_specifications}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.maintenanceOptions">maintenance_options</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#maintenance_options WorkspacesinstancesWorkspaceInstance#maintenance_options}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#metadata_options WorkspacesinstancesWorkspaceInstance#metadata_options}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.monitoring">monitoring</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#monitoring WorkspacesinstancesWorkspaceInstance#monitoring}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.networkInterfaces">network_interfaces</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#network_interfaces WorkspacesinstancesWorkspaceInstance#network_interfaces}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.networkPerformanceOptions">network_performance_options</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#network_performance_options WorkspacesinstancesWorkspaceInstance#network_performance_options}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.placement">placement</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#placement WorkspacesinstancesWorkspaceInstance#placement}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.privateDnsNameOptions">private_dns_name_options</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#private_dns_name_options WorkspacesinstancesWorkspaceInstance#private_dns_name_options}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#subnet_id WorkspacesinstancesWorkspaceInstance#subnet_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.tagSpecifications">tag_specifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#tag_specifications WorkspacesinstancesWorkspaceInstance#tag_specifications}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#user_data WorkspacesinstancesWorkspaceInstance#user_data}. |

---

##### `block_device_mappings`<sup>Optional</sup> <a name="block_device_mappings" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.blockDeviceMappings"></a>

```python
block_device_mappings: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#block_device_mappings WorkspacesinstancesWorkspaceInstance#block_device_mappings}.

---

##### `capacity_reservation_specification`<sup>Optional</sup> <a name="capacity_reservation_specification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.capacityReservationSpecification"></a>

```python
capacity_reservation_specification: WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_specification WorkspacesinstancesWorkspaceInstance#capacity_reservation_specification}.

---

##### `cpu_options`<sup>Optional</sup> <a name="cpu_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.cpuOptions"></a>

```python
cpu_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#cpu_options WorkspacesinstancesWorkspaceInstance#cpu_options}.

---

##### `credit_specification`<sup>Optional</sup> <a name="credit_specification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.creditSpecification"></a>

```python
credit_specification: WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#credit_specification WorkspacesinstancesWorkspaceInstance#credit_specification}.

---

##### `disable_api_stop`<sup>Optional</sup> <a name="disable_api_stop" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.disableApiStop"></a>

```python
disable_api_stop: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#disable_api_stop WorkspacesinstancesWorkspaceInstance#disable_api_stop}.

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.ebsOptimized"></a>

```python
ebs_optimized: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#ebs_optimized WorkspacesinstancesWorkspaceInstance#ebs_optimized}.

---

##### `enable_primary_ipv6`<sup>Optional</sup> <a name="enable_primary_ipv6" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.enablePrimaryIpv6"></a>

```python
enable_primary_ipv6: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#enable_primary_ipv_6 WorkspacesinstancesWorkspaceInstance#enable_primary_ipv_6}.

---

##### `enclave_options`<sup>Optional</sup> <a name="enclave_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.enclaveOptions"></a>

```python
enclave_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#enclave_options WorkspacesinstancesWorkspaceInstance#enclave_options}.

---

##### `hibernation_options`<sup>Optional</sup> <a name="hibernation_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.hibernationOptions"></a>

```python
hibernation_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#hibernation_options WorkspacesinstancesWorkspaceInstance#hibernation_options}.

---

##### `iam_instance_profile`<sup>Optional</sup> <a name="iam_instance_profile" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.iamInstanceProfile"></a>

```python
iam_instance_profile: WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#iam_instance_profile WorkspacesinstancesWorkspaceInstance#iam_instance_profile}.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#image_id WorkspacesinstancesWorkspaceInstance#image_id}.

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#instance_type WorkspacesinstancesWorkspaceInstance#instance_type}.

---

##### `ipv6_address_count`<sup>Optional</sup> <a name="ipv6_address_count" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.ipv6AddressCount"></a>

```python
ipv6_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#ipv_6_address_count WorkspacesinstancesWorkspaceInstance#ipv_6_address_count}.

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#key_name WorkspacesinstancesWorkspaceInstance#key_name}.

---

##### `license_specifications`<sup>Optional</sup> <a name="license_specifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.licenseSpecifications"></a>

```python
license_specifications: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#license_specifications WorkspacesinstancesWorkspaceInstance#license_specifications}.

---

##### `maintenance_options`<sup>Optional</sup> <a name="maintenance_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.maintenanceOptions"></a>

```python
maintenance_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#maintenance_options WorkspacesinstancesWorkspaceInstance#maintenance_options}.

---

##### `metadata_options`<sup>Optional</sup> <a name="metadata_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.metadataOptions"></a>

```python
metadata_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#metadata_options WorkspacesinstancesWorkspaceInstance#metadata_options}.

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.monitoring"></a>

```python
monitoring: WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#monitoring WorkspacesinstancesWorkspaceInstance#monitoring}.

---

##### `network_interfaces`<sup>Optional</sup> <a name="network_interfaces" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.networkInterfaces"></a>

```python
network_interfaces: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#network_interfaces WorkspacesinstancesWorkspaceInstance#network_interfaces}.

---

##### `network_performance_options`<sup>Optional</sup> <a name="network_performance_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.networkPerformanceOptions"></a>

```python
network_performance_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#network_performance_options WorkspacesinstancesWorkspaceInstance#network_performance_options}.

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.placement"></a>

```python
placement: WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#placement WorkspacesinstancesWorkspaceInstance#placement}.

---

##### `private_dns_name_options`<sup>Optional</sup> <a name="private_dns_name_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.privateDnsNameOptions"></a>

```python
private_dns_name_options: WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#private_dns_name_options WorkspacesinstancesWorkspaceInstance#private_dns_name_options}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#subnet_id WorkspacesinstancesWorkspaceInstance#subnet_id}.

---

##### `tag_specifications`<sup>Optional</sup> <a name="tag_specifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.tagSpecifications"></a>

```python
tag_specifications: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#tag_specifications WorkspacesinstancesWorkspaceInstance#tag_specifications}.

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.userData"></a>

```python
user_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#user_data WorkspacesinstancesWorkspaceInstance#user_data}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings(
  device_name: str = None,
  ebs: WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs = None,
  no_device: str = None,
  virtual_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#device_name WorkspacesinstancesWorkspaceInstance#device_name}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#ebs WorkspacesinstancesWorkspaceInstance#ebs}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.noDevice">no_device</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#no_device WorkspacesinstancesWorkspaceInstance#no_device}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.virtualName">virtual_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#virtual_name WorkspacesinstancesWorkspaceInstance#virtual_name}. |

---

##### `device_name`<sup>Optional</sup> <a name="device_name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#device_name WorkspacesinstancesWorkspaceInstance#device_name}.

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.ebs"></a>

```python
ebs: WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#ebs WorkspacesinstancesWorkspaceInstance#ebs}.

---

##### `no_device`<sup>Optional</sup> <a name="no_device" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.noDevice"></a>

```python
no_device: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#no_device WorkspacesinstancesWorkspaceInstance#no_device}.

---

##### `virtual_name`<sup>Optional</sup> <a name="virtual_name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#virtual_name WorkspacesinstancesWorkspaceInstance#virtual_name}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs(
  encrypted: bool | IResolvable = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.encrypted">encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#encrypted WorkspacesinstancesWorkspaceInstance#encrypted}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#iops WorkspacesinstancesWorkspaceInstance#iops}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#kms_key_id WorkspacesinstancesWorkspaceInstance#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#throughput WorkspacesinstancesWorkspaceInstance#throughput}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#volume_size WorkspacesinstancesWorkspaceInstance#volume_size}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#volume_type WorkspacesinstancesWorkspaceInstance#volume_type}. |

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.encrypted"></a>

```python
encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#encrypted WorkspacesinstancesWorkspaceInstance#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#iops WorkspacesinstancesWorkspaceInstance#iops}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#kms_key_id WorkspacesinstancesWorkspaceInstance#kms_key_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#throughput WorkspacesinstancesWorkspaceInstance#throughput}.

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#volume_size WorkspacesinstancesWorkspaceInstance#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#volume_type WorkspacesinstancesWorkspaceInstance#volume_type}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification(
  capacity_reservation_preference: str = None,
  capacity_reservation_target: WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification.property.capacityReservationPreference">capacity_reservation_preference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_preference WorkspacesinstancesWorkspaceInstance#capacity_reservation_preference}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification.property.capacityReservationTarget">capacity_reservation_target</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_target WorkspacesinstancesWorkspaceInstance#capacity_reservation_target}. |

---

##### `capacity_reservation_preference`<sup>Optional</sup> <a name="capacity_reservation_preference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification.property.capacityReservationPreference"></a>

```python
capacity_reservation_preference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_preference WorkspacesinstancesWorkspaceInstance#capacity_reservation_preference}.

---

##### `capacity_reservation_target`<sup>Optional</sup> <a name="capacity_reservation_target" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification.property.capacityReservationTarget"></a>

```python
capacity_reservation_target: WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_target WorkspacesinstancesWorkspaceInstance#capacity_reservation_target}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget(
  capacity_reservation_id: str = None,
  capacity_reservation_resource_group_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_id WorkspacesinstancesWorkspaceInstance#capacity_reservation_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn">capacity_reservation_resource_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_resource_group_arn WorkspacesinstancesWorkspaceInstance#capacity_reservation_resource_group_arn}. |

---

##### `capacity_reservation_id`<sup>Optional</sup> <a name="capacity_reservation_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_id WorkspacesinstancesWorkspaceInstance#capacity_reservation_id}.

---

##### `capacity_reservation_resource_group_arn`<sup>Optional</sup> <a name="capacity_reservation_resource_group_arn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn"></a>

```python
capacity_reservation_resource_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_resource_group_arn WorkspacesinstancesWorkspaceInstance#capacity_reservation_resource_group_arn}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions(
  core_count: typing.Union[int, float] = None,
  threads_per_core: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions.property.coreCount">core_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#core_count WorkspacesinstancesWorkspaceInstance#core_count}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#threads_per_core WorkspacesinstancesWorkspaceInstance#threads_per_core}. |

---

##### `core_count`<sup>Optional</sup> <a name="core_count" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions.property.coreCount"></a>

```python
core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#core_count WorkspacesinstancesWorkspaceInstance#core_count}.

---

##### `threads_per_core`<sup>Optional</sup> <a name="threads_per_core" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#threads_per_core WorkspacesinstancesWorkspaceInstance#threads_per_core}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification(
  cpu_credits: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification.property.cpuCredits">cpu_credits</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#cpu_credits WorkspacesinstancesWorkspaceInstance#cpu_credits}. |

---

##### `cpu_credits`<sup>Optional</sup> <a name="cpu_credits" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification.property.cpuCredits"></a>

```python
cpu_credits: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#cpu_credits WorkspacesinstancesWorkspaceInstance#cpu_credits}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#enabled WorkspacesinstancesWorkspaceInstance#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#enabled WorkspacesinstancesWorkspaceInstance#enabled}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions(
  configured: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions.property.configured">configured</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#configured WorkspacesinstancesWorkspaceInstance#configured}. |

---

##### `configured`<sup>Optional</sup> <a name="configured" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions.property.configured"></a>

```python
configured: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#configured WorkspacesinstancesWorkspaceInstance#configured}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile(
  arn: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#arn WorkspacesinstancesWorkspaceInstance#arn}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#name WorkspacesinstancesWorkspaceInstance#name}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#arn WorkspacesinstancesWorkspaceInstance#arn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#name WorkspacesinstancesWorkspaceInstance#name}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications(
  license_configuration_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications.property.licenseConfigurationArn">license_configuration_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#license_configuration_arn WorkspacesinstancesWorkspaceInstance#license_configuration_arn}. |

---

##### `license_configuration_arn`<sup>Optional</sup> <a name="license_configuration_arn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications.property.licenseConfigurationArn"></a>

```python
license_configuration_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#license_configuration_arn WorkspacesinstancesWorkspaceInstance#license_configuration_arn}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions(
  auto_recovery: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions.property.autoRecovery">auto_recovery</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#auto_recovery WorkspacesinstancesWorkspaceInstance#auto_recovery}. |

---

##### `auto_recovery`<sup>Optional</sup> <a name="auto_recovery" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions.property.autoRecovery"></a>

```python
auto_recovery: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#auto_recovery WorkspacesinstancesWorkspaceInstance#auto_recovery}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions(
  http_endpoint: str = None,
  http_protocol_ipv6: str = None,
  http_put_response_hop_limit: typing.Union[int, float] = None,
  http_tokens: str = None,
  instance_metadata_tags: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpEndpoint">http_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#http_endpoint WorkspacesinstancesWorkspaceInstance#http_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpProtocolIpv6">http_protocol_ipv6</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#http_protocol_ipv_6 WorkspacesinstancesWorkspaceInstance#http_protocol_ipv_6}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#http_put_response_hop_limit WorkspacesinstancesWorkspaceInstance#http_put_response_hop_limit}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpTokens">http_tokens</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#http_tokens WorkspacesinstancesWorkspaceInstance#http_tokens}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.instanceMetadataTags">instance_metadata_tags</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#instance_metadata_tags WorkspacesinstancesWorkspaceInstance#instance_metadata_tags}. |

---

##### `http_endpoint`<sup>Optional</sup> <a name="http_endpoint" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpEndpoint"></a>

```python
http_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#http_endpoint WorkspacesinstancesWorkspaceInstance#http_endpoint}.

---

##### `http_protocol_ipv6`<sup>Optional</sup> <a name="http_protocol_ipv6" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpProtocolIpv6"></a>

```python
http_protocol_ipv6: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#http_protocol_ipv_6 WorkspacesinstancesWorkspaceInstance#http_protocol_ipv_6}.

---

##### `http_put_response_hop_limit`<sup>Optional</sup> <a name="http_put_response_hop_limit" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#http_put_response_hop_limit WorkspacesinstancesWorkspaceInstance#http_put_response_hop_limit}.

---

##### `http_tokens`<sup>Optional</sup> <a name="http_tokens" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#http_tokens WorkspacesinstancesWorkspaceInstance#http_tokens}.

---

##### `instance_metadata_tags`<sup>Optional</sup> <a name="instance_metadata_tags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.instanceMetadataTags"></a>

```python
instance_metadata_tags: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#instance_metadata_tags WorkspacesinstancesWorkspaceInstance#instance_metadata_tags}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#enabled WorkspacesinstancesWorkspaceInstance#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#enabled WorkspacesinstancesWorkspaceInstance#enabled}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces(
  description: str = None,
  device_index: typing.Union[int, float] = None,
  groups: typing.List[str] = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#description WorkspacesinstancesWorkspaceInstance#description}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.deviceIndex">device_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#device_index WorkspacesinstancesWorkspaceInstance#device_index}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.groups">groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#groups WorkspacesinstancesWorkspaceInstance#groups}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#subnet_id WorkspacesinstancesWorkspaceInstance#subnet_id}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#description WorkspacesinstancesWorkspaceInstance#description}.

---

##### `device_index`<sup>Optional</sup> <a name="device_index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.deviceIndex"></a>

```python
device_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#device_index WorkspacesinstancesWorkspaceInstance#device_index}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#groups WorkspacesinstancesWorkspaceInstance#groups}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#subnet_id WorkspacesinstancesWorkspaceInstance#subnet_id}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions(
  bandwidth_weighting: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions.property.bandwidthWeighting">bandwidth_weighting</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#bandwidth_weighting WorkspacesinstancesWorkspaceInstance#bandwidth_weighting}. |

---

##### `bandwidth_weighting`<sup>Optional</sup> <a name="bandwidth_weighting" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions.property.bandwidthWeighting"></a>

```python
bandwidth_weighting: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#bandwidth_weighting WorkspacesinstancesWorkspaceInstance#bandwidth_weighting}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement <a name="WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement(
  availability_zone: str = None,
  group_id: str = None,
  group_name: str = None,
  partition_number: typing.Union[int, float] = None,
  tenancy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#availability_zone WorkspacesinstancesWorkspaceInstance#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#group_id WorkspacesinstancesWorkspaceInstance#group_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.groupName">group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#group_name WorkspacesinstancesWorkspaceInstance#group_name}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.partitionNumber">partition_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#partition_number WorkspacesinstancesWorkspaceInstance#partition_number}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.tenancy">tenancy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#tenancy WorkspacesinstancesWorkspaceInstance#tenancy}. |

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#availability_zone WorkspacesinstancesWorkspaceInstance#availability_zone}.

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#group_id WorkspacesinstancesWorkspaceInstance#group_id}.

---

##### `group_name`<sup>Optional</sup> <a name="group_name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#group_name WorkspacesinstancesWorkspaceInstance#group_name}.

---

##### `partition_number`<sup>Optional</sup> <a name="partition_number" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.partitionNumber"></a>

```python
partition_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#partition_number WorkspacesinstancesWorkspaceInstance#partition_number}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#tenancy WorkspacesinstancesWorkspaceInstance#tenancy}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions <a name="WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions(
  enable_resource_name_dns_aaaa_record: bool | IResolvable = None,
  enable_resource_name_dns_a_record: bool | IResolvable = None,
  hostname_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord">enable_resource_name_dns_aaaa_record</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#enable_resource_name_dns_aaaa_record WorkspacesinstancesWorkspaceInstance#enable_resource_name_dns_aaaa_record}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.property.enableResourceNameDnsARecord">enable_resource_name_dns_a_record</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#enable_resource_name_dns_a_record WorkspacesinstancesWorkspaceInstance#enable_resource_name_dns_a_record}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.property.hostnameType">hostname_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#hostname_type WorkspacesinstancesWorkspaceInstance#hostname_type}. |

---

##### `enable_resource_name_dns_aaaa_record`<sup>Optional</sup> <a name="enable_resource_name_dns_aaaa_record" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord"></a>

```python
enable_resource_name_dns_aaaa_record: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#enable_resource_name_dns_aaaa_record WorkspacesinstancesWorkspaceInstance#enable_resource_name_dns_aaaa_record}.

---

##### `enable_resource_name_dns_a_record`<sup>Optional</sup> <a name="enable_resource_name_dns_a_record" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.property.enableResourceNameDnsARecord"></a>

```python
enable_resource_name_dns_a_record: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#enable_resource_name_dns_a_record WorkspacesinstancesWorkspaceInstance#enable_resource_name_dns_a_record}.

---

##### `hostname_type`<sup>Optional</sup> <a name="hostname_type" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.property.hostnameType"></a>

```python
hostname_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#hostname_type WorkspacesinstancesWorkspaceInstance#hostname_type}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications(
  resource_type: str = None,
  tags: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#resource_type WorkspacesinstancesWorkspaceInstance#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#tags WorkspacesinstancesWorkspaceInstance#tags}. |

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#resource_type WorkspacesinstancesWorkspaceInstance#resource_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications.property.tags"></a>

```python
tags: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#tags WorkspacesinstancesWorkspaceInstance#tags}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#key WorkspacesinstancesWorkspaceInstance#key}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#value WorkspacesinstancesWorkspaceInstance#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#key WorkspacesinstancesWorkspaceInstance#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#value WorkspacesinstancesWorkspaceInstance#value}.

---

### WorkspacesinstancesWorkspaceInstanceTags <a name="WorkspacesinstancesWorkspaceInstanceTags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#key WorkspacesinstancesWorkspaceInstance#key}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#value WorkspacesinstancesWorkspaceInstance#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#key WorkspacesinstancesWorkspaceInstance#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#value WorkspacesinstancesWorkspaceInstance#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference <a name="WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance">WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.internalValue"></a>

```python
internal_value: WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance">WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```python
encrypted_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```python
encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a>]

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.putEbs">put_ebs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetDeviceName">reset_device_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetEbs">reset_ebs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetNoDevice">reset_no_device</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetVirtualName">reset_virtual_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ebs` <a name="put_ebs" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.putEbs"></a>

```python
def put_ebs(
  encrypted: bool | IResolvable = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
) -> None
```

###### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.putEbs.parameter.encrypted"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#encrypted WorkspacesinstancesWorkspaceInstance#encrypted}.

---

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.putEbs.parameter.iops"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#iops WorkspacesinstancesWorkspaceInstance#iops}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.putEbs.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#kms_key_id WorkspacesinstancesWorkspaceInstance#kms_key_id}.

---

###### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.putEbs.parameter.throughput"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#throughput WorkspacesinstancesWorkspaceInstance#throughput}.

---

###### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.putEbs.parameter.volumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#volume_size WorkspacesinstancesWorkspaceInstance#volume_size}.

---

###### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.putEbs.parameter.volumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#volume_type WorkspacesinstancesWorkspaceInstance#volume_type}.

---

##### `reset_device_name` <a name="reset_device_name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```python
def reset_device_name() -> None
```

##### `reset_ebs` <a name="reset_ebs" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetEbs"></a>

```python
def reset_ebs() -> None
```

##### `reset_no_device` <a name="reset_no_device" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```python
def reset_no_device() -> None
```

##### `reset_virtual_name` <a name="reset_virtual_name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```python
def reset_virtual_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.ebsInput">ebs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.noDeviceInput">no_device_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.virtualNameInput">virtual_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.noDevice">no_device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.virtualName">virtual_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.ebs"></a>

```python
ebs: WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference</a>

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `ebs_input`<sup>Optional</sup> <a name="ebs_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```python
ebs_input: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs</a>

---

##### `no_device_input`<sup>Optional</sup> <a name="no_device_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```python
no_device_input: str
```

- *Type:* str

---

##### `virtual_name_input`<sup>Optional</sup> <a name="virtual_name_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```python
virtual_name_input: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `no_device`<sup>Required</sup> <a name="no_device" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.noDevice"></a>

```python
no_device: str
```

- *Type:* str

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId">reset_capacity_reservation_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn">reset_capacity_reservation_resource_group_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_capacity_reservation_id` <a name="reset_capacity_reservation_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId"></a>

```python
def reset_capacity_reservation_id() -> None
```

##### `reset_capacity_reservation_resource_group_arn` <a name="reset_capacity_reservation_resource_group_arn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn"></a>

```python
def reset_capacity_reservation_resource_group_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput">capacity_reservation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput">capacity_reservation_resource_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">capacity_reservation_resource_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_reservation_id_input`<sup>Optional</sup> <a name="capacity_reservation_id_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput"></a>

```python
capacity_reservation_id_input: str
```

- *Type:* str

---

##### `capacity_reservation_resource_group_arn_input`<sup>Optional</sup> <a name="capacity_reservation_resource_group_arn_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput"></a>

```python
capacity_reservation_resource_group_arn_input: str
```

- *Type:* str

---

##### `capacity_reservation_id`<sup>Required</sup> <a name="capacity_reservation_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

---

##### `capacity_reservation_resource_group_arn`<sup>Required</sup> <a name="capacity_reservation_resource_group_arn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```python
capacity_reservation_resource_group_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget">put_capacity_reservation_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference">reset_capacity_reservation_preference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget">reset_capacity_reservation_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_capacity_reservation_target` <a name="put_capacity_reservation_target" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget"></a>

```python
def put_capacity_reservation_target(
  capacity_reservation_id: str = None,
  capacity_reservation_resource_group_arn: str = None
) -> None
```

###### `capacity_reservation_id`<sup>Optional</sup> <a name="capacity_reservation_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget.parameter.capacityReservationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_id WorkspacesinstancesWorkspaceInstance#capacity_reservation_id}.

---

###### `capacity_reservation_resource_group_arn`<sup>Optional</sup> <a name="capacity_reservation_resource_group_arn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget.parameter.capacityReservationResourceGroupArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_resource_group_arn WorkspacesinstancesWorkspaceInstance#capacity_reservation_resource_group_arn}.

---

##### `reset_capacity_reservation_preference` <a name="reset_capacity_reservation_preference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference"></a>

```python
def reset_capacity_reservation_preference() -> None
```

##### `reset_capacity_reservation_target` <a name="reset_capacity_reservation_target" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget"></a>

```python
def reset_capacity_reservation_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">capacity_reservation_target</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput">capacity_reservation_preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput">capacity_reservation_target_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">capacity_reservation_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_reservation_target`<sup>Required</sup> <a name="capacity_reservation_target" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```python
capacity_reservation_target: WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `capacity_reservation_preference_input`<sup>Optional</sup> <a name="capacity_reservation_preference_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput"></a>

```python
capacity_reservation_preference_input: str
```

- *Type:* str

---

##### `capacity_reservation_target_input`<sup>Optional</sup> <a name="capacity_reservation_target_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput"></a>

```python
capacity_reservation_target_input: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `capacity_reservation_preference`<sup>Required</sup> <a name="capacity_reservation_preference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```python
capacity_reservation_preference: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resetCoreCount">reset_core_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resetThreadsPerCore">reset_threads_per_core</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_core_count` <a name="reset_core_count" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resetCoreCount"></a>

```python
def reset_core_count() -> None
```

##### `reset_threads_per_core` <a name="reset_threads_per_core" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resetThreadsPerCore"></a>

```python
def reset_threads_per_core() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.coreCountInput">core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.threadsPerCoreInput">threads_per_core_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.coreCount">core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `core_count_input`<sup>Optional</sup> <a name="core_count_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.coreCountInput"></a>

```python
core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threads_per_core_input`<sup>Optional</sup> <a name="threads_per_core_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.threadsPerCoreInput"></a>

```python
threads_per_core_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `core_count`<sup>Required</sup> <a name="core_count" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.coreCount"></a>

```python
core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threads_per_core`<sup>Required</sup> <a name="threads_per_core" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.resetCpuCredits">reset_cpu_credits</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_credits` <a name="reset_cpu_credits" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.resetCpuCredits"></a>

```python
def reset_cpu_credits() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.cpuCreditsInput">cpu_credits_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.cpuCredits">cpu_credits</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_credits_input`<sup>Optional</sup> <a name="cpu_credits_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.cpuCreditsInput"></a>

```python
cpu_credits_input: str
```

- *Type:* str

---

##### `cpu_credits`<sup>Required</sup> <a name="cpu_credits" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.cpuCredits"></a>

```python
cpu_credits: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.resetConfigured">reset_configured</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_configured` <a name="reset_configured" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.resetConfigured"></a>

```python
def reset_configured() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.configuredInput">configured_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.configured">configured</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configured_input`<sup>Optional</sup> <a name="configured_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.configuredInput"></a>

```python
configured_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `configured`<sup>Required</sup> <a name="configured" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.configured"></a>

```python
configured: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a>]

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.resetLicenseConfigurationArn">reset_license_configuration_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_license_configuration_arn` <a name="reset_license_configuration_arn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.resetLicenseConfigurationArn"></a>

```python
def reset_license_configuration_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArnInput">license_configuration_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArn">license_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `license_configuration_arn_input`<sup>Optional</sup> <a name="license_configuration_arn_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArnInput"></a>

```python
license_configuration_arn_input: str
```

- *Type:* str

---

##### `license_configuration_arn`<sup>Required</sup> <a name="license_configuration_arn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArn"></a>

```python
license_configuration_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.resetAutoRecovery">reset_auto_recovery</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_recovery` <a name="reset_auto_recovery" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.resetAutoRecovery"></a>

```python
def reset_auto_recovery() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.autoRecoveryInput">auto_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.autoRecovery">auto_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_recovery_input`<sup>Optional</sup> <a name="auto_recovery_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.autoRecoveryInput"></a>

```python
auto_recovery_input: str
```

- *Type:* str

---

##### `auto_recovery`<sup>Required</sup> <a name="auto_recovery" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.autoRecovery"></a>

```python
auto_recovery: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpEndpoint">reset_http_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpProtocolIpv6">reset_http_protocol_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">reset_http_put_response_hop_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpTokens">reset_http_tokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetInstanceMetadataTags">reset_instance_metadata_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_http_endpoint` <a name="reset_http_endpoint" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```python
def reset_http_endpoint() -> None
```

##### `reset_http_protocol_ipv6` <a name="reset_http_protocol_ipv6" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpProtocolIpv6"></a>

```python
def reset_http_protocol_ipv6() -> None
```

##### `reset_http_put_response_hop_limit` <a name="reset_http_put_response_hop_limit" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```python
def reset_http_put_response_hop_limit() -> None
```

##### `reset_http_tokens` <a name="reset_http_tokens" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpTokens"></a>

```python
def reset_http_tokens() -> None
```

##### `reset_instance_metadata_tags` <a name="reset_instance_metadata_tags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetInstanceMetadataTags"></a>

```python
def reset_instance_metadata_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpEndpointInput">http_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpProtocolIpv6Input">http_protocol_ipv6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">http_put_response_hop_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpTokensInput">http_tokens_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput">instance_metadata_tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpEndpoint">http_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpProtocolIpv6">http_protocol_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpTokens">http_tokens</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.instanceMetadataTags">instance_metadata_tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_endpoint_input`<sup>Optional</sup> <a name="http_endpoint_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```python
http_endpoint_input: str
```

- *Type:* str

---

##### `http_protocol_ipv6_input`<sup>Optional</sup> <a name="http_protocol_ipv6_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpProtocolIpv6Input"></a>

```python
http_protocol_ipv6_input: str
```

- *Type:* str

---

##### `http_put_response_hop_limit_input`<sup>Optional</sup> <a name="http_put_response_hop_limit_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```python
http_put_response_hop_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens_input`<sup>Optional</sup> <a name="http_tokens_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```python
http_tokens_input: str
```

- *Type:* str

---

##### `instance_metadata_tags_input`<sup>Optional</sup> <a name="instance_metadata_tags_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput"></a>

```python
instance_metadata_tags_input: str
```

- *Type:* str

---

##### `http_endpoint`<sup>Required</sup> <a name="http_endpoint" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpEndpoint"></a>

```python
http_endpoint: str
```

- *Type:* str

---

##### `http_protocol_ipv6`<sup>Required</sup> <a name="http_protocol_ipv6" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpProtocolIpv6"></a>

```python
http_protocol_ipv6: str
```

- *Type:* str

---

##### `http_put_response_hop_limit`<sup>Required</sup> <a name="http_put_response_hop_limit" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens`<sup>Required</sup> <a name="http_tokens" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

---

##### `instance_metadata_tags`<sup>Required</sup> <a name="instance_metadata_tags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```python
instance_metadata_tags: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a>]

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetDeviceIndex">reset_device_index</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetGroups">reset_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_device_index` <a name="reset_device_index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetDeviceIndex"></a>

```python
def reset_device_index() -> None
```

##### `reset_groups` <a name="reset_groups" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetGroups"></a>

```python
def reset_groups() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.deviceIndexInput">device_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.groupsInput">groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.deviceIndex">device_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.groups">groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `device_index_input`<sup>Optional</sup> <a name="device_index_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.deviceIndexInput"></a>

```python
device_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.groupsInput"></a>

```python
groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_index`<sup>Required</sup> <a name="device_index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.deviceIndex"></a>

```python
device_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.resetBandwidthWeighting">reset_bandwidth_weighting</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bandwidth_weighting` <a name="reset_bandwidth_weighting" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.resetBandwidthWeighting"></a>

```python
def reset_bandwidth_weighting() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.bandwidthWeightingInput">bandwidth_weighting_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.bandwidthWeighting">bandwidth_weighting</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bandwidth_weighting_input`<sup>Optional</sup> <a name="bandwidth_weighting_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.bandwidthWeightingInput"></a>

```python
bandwidth_weighting_input: str
```

- *Type:* str

---

##### `bandwidth_weighting`<sup>Required</sup> <a name="bandwidth_weighting" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.bandwidthWeighting"></a>

```python
bandwidth_weighting: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putBlockDeviceMappings">put_block_device_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCapacityReservationSpecification">put_capacity_reservation_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCpuOptions">put_cpu_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCreditSpecification">put_credit_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putEnclaveOptions">put_enclave_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putHibernationOptions">put_hibernation_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putIamInstanceProfile">put_iam_instance_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putLicenseSpecifications">put_license_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMaintenanceOptions">put_maintenance_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMetadataOptions">put_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMonitoring">put_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putNetworkInterfaces">put_network_interfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putNetworkPerformanceOptions">put_network_performance_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPlacement">put_placement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPrivateDnsNameOptions">put_private_dns_name_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putTagSpecifications">put_tag_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetBlockDeviceMappings">reset_block_device_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetCapacityReservationSpecification">reset_capacity_reservation_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetCpuOptions">reset_cpu_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetCreditSpecification">reset_credit_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetDisableApiStop">reset_disable_api_stop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetEbsOptimized">reset_ebs_optimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetEnablePrimaryIpv6">reset_enable_primary_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetEnclaveOptions">reset_enclave_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetHibernationOptions">reset_hibernation_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetIamInstanceProfile">reset_iam_instance_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetImageId">reset_image_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetIpv6AddressCount">reset_ipv6_address_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetKeyName">reset_key_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetLicenseSpecifications">reset_license_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetMaintenanceOptions">reset_maintenance_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetMetadataOptions">reset_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetMonitoring">reset_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetNetworkInterfaces">reset_network_interfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetNetworkPerformanceOptions">reset_network_performance_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetPlacement">reset_placement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetPrivateDnsNameOptions">reset_private_dns_name_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetTagSpecifications">reset_tag_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetUserData">reset_user_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_block_device_mappings` <a name="put_block_device_mappings" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putBlockDeviceMappings"></a>

```python
def put_block_device_mappings(
  value: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putBlockDeviceMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a>]

---

##### `put_capacity_reservation_specification` <a name="put_capacity_reservation_specification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCapacityReservationSpecification"></a>

```python
def put_capacity_reservation_specification(
  capacity_reservation_preference: str = None,
  capacity_reservation_target: WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget = None
) -> None
```

###### `capacity_reservation_preference`<sup>Optional</sup> <a name="capacity_reservation_preference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCapacityReservationSpecification.parameter.capacityReservationPreference"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_preference WorkspacesinstancesWorkspaceInstance#capacity_reservation_preference}.

---

###### `capacity_reservation_target`<sup>Optional</sup> <a name="capacity_reservation_target" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCapacityReservationSpecification.parameter.capacityReservationTarget"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_target WorkspacesinstancesWorkspaceInstance#capacity_reservation_target}.

---

##### `put_cpu_options` <a name="put_cpu_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCpuOptions"></a>

```python
def put_cpu_options(
  core_count: typing.Union[int, float] = None,
  threads_per_core: typing.Union[int, float] = None
) -> None
```

###### `core_count`<sup>Optional</sup> <a name="core_count" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCpuOptions.parameter.coreCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#core_count WorkspacesinstancesWorkspaceInstance#core_count}.

---

###### `threads_per_core`<sup>Optional</sup> <a name="threads_per_core" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCpuOptions.parameter.threadsPerCore"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#threads_per_core WorkspacesinstancesWorkspaceInstance#threads_per_core}.

---

##### `put_credit_specification` <a name="put_credit_specification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCreditSpecification"></a>

```python
def put_credit_specification(
  cpu_credits: str = None
) -> None
```

###### `cpu_credits`<sup>Optional</sup> <a name="cpu_credits" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCreditSpecification.parameter.cpuCredits"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#cpu_credits WorkspacesinstancesWorkspaceInstance#cpu_credits}.

---

##### `put_enclave_options` <a name="put_enclave_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putEnclaveOptions"></a>

```python
def put_enclave_options(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putEnclaveOptions.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#enabled WorkspacesinstancesWorkspaceInstance#enabled}.

---

##### `put_hibernation_options` <a name="put_hibernation_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putHibernationOptions"></a>

```python
def put_hibernation_options(
  configured: bool | IResolvable = None
) -> None
```

###### `configured`<sup>Optional</sup> <a name="configured" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putHibernationOptions.parameter.configured"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#configured WorkspacesinstancesWorkspaceInstance#configured}.

---

##### `put_iam_instance_profile` <a name="put_iam_instance_profile" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putIamInstanceProfile"></a>

```python
def put_iam_instance_profile(
  arn: str = None,
  name: str = None
) -> None
```

###### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putIamInstanceProfile.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#arn WorkspacesinstancesWorkspaceInstance#arn}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putIamInstanceProfile.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#name WorkspacesinstancesWorkspaceInstance#name}.

---

##### `put_license_specifications` <a name="put_license_specifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putLicenseSpecifications"></a>

```python
def put_license_specifications(
  value: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putLicenseSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a>]

---

##### `put_maintenance_options` <a name="put_maintenance_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMaintenanceOptions"></a>

```python
def put_maintenance_options(
  auto_recovery: str = None
) -> None
```

###### `auto_recovery`<sup>Optional</sup> <a name="auto_recovery" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMaintenanceOptions.parameter.autoRecovery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#auto_recovery WorkspacesinstancesWorkspaceInstance#auto_recovery}.

---

##### `put_metadata_options` <a name="put_metadata_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMetadataOptions"></a>

```python
def put_metadata_options(
  http_endpoint: str = None,
  http_protocol_ipv6: str = None,
  http_put_response_hop_limit: typing.Union[int, float] = None,
  http_tokens: str = None,
  instance_metadata_tags: str = None
) -> None
```

###### `http_endpoint`<sup>Optional</sup> <a name="http_endpoint" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMetadataOptions.parameter.httpEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#http_endpoint WorkspacesinstancesWorkspaceInstance#http_endpoint}.

---

###### `http_protocol_ipv6`<sup>Optional</sup> <a name="http_protocol_ipv6" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMetadataOptions.parameter.httpProtocolIpv6"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#http_protocol_ipv_6 WorkspacesinstancesWorkspaceInstance#http_protocol_ipv_6}.

---

###### `http_put_response_hop_limit`<sup>Optional</sup> <a name="http_put_response_hop_limit" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMetadataOptions.parameter.httpPutResponseHopLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#http_put_response_hop_limit WorkspacesinstancesWorkspaceInstance#http_put_response_hop_limit}.

---

###### `http_tokens`<sup>Optional</sup> <a name="http_tokens" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMetadataOptions.parameter.httpTokens"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#http_tokens WorkspacesinstancesWorkspaceInstance#http_tokens}.

---

###### `instance_metadata_tags`<sup>Optional</sup> <a name="instance_metadata_tags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMetadataOptions.parameter.instanceMetadataTags"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#instance_metadata_tags WorkspacesinstancesWorkspaceInstance#instance_metadata_tags}.

---

##### `put_monitoring` <a name="put_monitoring" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMonitoring"></a>

```python
def put_monitoring(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMonitoring.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#enabled WorkspacesinstancesWorkspaceInstance#enabled}.

---

##### `put_network_interfaces` <a name="put_network_interfaces" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putNetworkInterfaces"></a>

```python
def put_network_interfaces(
  value: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a>]

---

##### `put_network_performance_options` <a name="put_network_performance_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putNetworkPerformanceOptions"></a>

```python
def put_network_performance_options(
  bandwidth_weighting: str = None
) -> None
```

###### `bandwidth_weighting`<sup>Optional</sup> <a name="bandwidth_weighting" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putNetworkPerformanceOptions.parameter.bandwidthWeighting"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#bandwidth_weighting WorkspacesinstancesWorkspaceInstance#bandwidth_weighting}.

---

##### `put_placement` <a name="put_placement" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPlacement"></a>

```python
def put_placement(
  availability_zone: str = None,
  group_id: str = None,
  group_name: str = None,
  partition_number: typing.Union[int, float] = None,
  tenancy: str = None
) -> None
```

###### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPlacement.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#availability_zone WorkspacesinstancesWorkspaceInstance#availability_zone}.

---

###### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPlacement.parameter.groupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#group_id WorkspacesinstancesWorkspaceInstance#group_id}.

---

###### `group_name`<sup>Optional</sup> <a name="group_name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPlacement.parameter.groupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#group_name WorkspacesinstancesWorkspaceInstance#group_name}.

---

###### `partition_number`<sup>Optional</sup> <a name="partition_number" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPlacement.parameter.partitionNumber"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#partition_number WorkspacesinstancesWorkspaceInstance#partition_number}.

---

###### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPlacement.parameter.tenancy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#tenancy WorkspacesinstancesWorkspaceInstance#tenancy}.

---

##### `put_private_dns_name_options` <a name="put_private_dns_name_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPrivateDnsNameOptions"></a>

```python
def put_private_dns_name_options(
  enable_resource_name_dns_aaaa_record: bool | IResolvable = None,
  enable_resource_name_dns_a_record: bool | IResolvable = None,
  hostname_type: str = None
) -> None
```

###### `enable_resource_name_dns_aaaa_record`<sup>Optional</sup> <a name="enable_resource_name_dns_aaaa_record" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPrivateDnsNameOptions.parameter.enableResourceNameDnsAaaaRecord"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#enable_resource_name_dns_aaaa_record WorkspacesinstancesWorkspaceInstance#enable_resource_name_dns_aaaa_record}.

---

###### `enable_resource_name_dns_a_record`<sup>Optional</sup> <a name="enable_resource_name_dns_a_record" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPrivateDnsNameOptions.parameter.enableResourceNameDnsARecord"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#enable_resource_name_dns_a_record WorkspacesinstancesWorkspaceInstance#enable_resource_name_dns_a_record}.

---

###### `hostname_type`<sup>Optional</sup> <a name="hostname_type" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPrivateDnsNameOptions.parameter.hostnameType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_workspace_instance#hostname_type WorkspacesinstancesWorkspaceInstance#hostname_type}.

---

##### `put_tag_specifications` <a name="put_tag_specifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putTagSpecifications"></a>

```python
def put_tag_specifications(
  value: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putTagSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a>]

---

##### `reset_block_device_mappings` <a name="reset_block_device_mappings" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetBlockDeviceMappings"></a>

```python
def reset_block_device_mappings() -> None
```

##### `reset_capacity_reservation_specification` <a name="reset_capacity_reservation_specification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetCapacityReservationSpecification"></a>

```python
def reset_capacity_reservation_specification() -> None
```

##### `reset_cpu_options` <a name="reset_cpu_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetCpuOptions"></a>

```python
def reset_cpu_options() -> None
```

##### `reset_credit_specification` <a name="reset_credit_specification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetCreditSpecification"></a>

```python
def reset_credit_specification() -> None
```

##### `reset_disable_api_stop` <a name="reset_disable_api_stop" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetDisableApiStop"></a>

```python
def reset_disable_api_stop() -> None
```

##### `reset_ebs_optimized` <a name="reset_ebs_optimized" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetEbsOptimized"></a>

```python
def reset_ebs_optimized() -> None
```

##### `reset_enable_primary_ipv6` <a name="reset_enable_primary_ipv6" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetEnablePrimaryIpv6"></a>

```python
def reset_enable_primary_ipv6() -> None
```

##### `reset_enclave_options` <a name="reset_enclave_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetEnclaveOptions"></a>

```python
def reset_enclave_options() -> None
```

##### `reset_hibernation_options` <a name="reset_hibernation_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetHibernationOptions"></a>

```python
def reset_hibernation_options() -> None
```

##### `reset_iam_instance_profile` <a name="reset_iam_instance_profile" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetIamInstanceProfile"></a>

```python
def reset_iam_instance_profile() -> None
```

##### `reset_image_id` <a name="reset_image_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetImageId"></a>

```python
def reset_image_id() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_ipv6_address_count` <a name="reset_ipv6_address_count" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetIpv6AddressCount"></a>

```python
def reset_ipv6_address_count() -> None
```

##### `reset_key_name` <a name="reset_key_name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetKeyName"></a>

```python
def reset_key_name() -> None
```

##### `reset_license_specifications` <a name="reset_license_specifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetLicenseSpecifications"></a>

```python
def reset_license_specifications() -> None
```

##### `reset_maintenance_options` <a name="reset_maintenance_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetMaintenanceOptions"></a>

```python
def reset_maintenance_options() -> None
```

##### `reset_metadata_options` <a name="reset_metadata_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetMetadataOptions"></a>

```python
def reset_metadata_options() -> None
```

##### `reset_monitoring` <a name="reset_monitoring" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetMonitoring"></a>

```python
def reset_monitoring() -> None
```

##### `reset_network_interfaces` <a name="reset_network_interfaces" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetNetworkInterfaces"></a>

```python
def reset_network_interfaces() -> None
```

##### `reset_network_performance_options` <a name="reset_network_performance_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetNetworkPerformanceOptions"></a>

```python
def reset_network_performance_options() -> None
```

##### `reset_placement` <a name="reset_placement" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetPlacement"></a>

```python
def reset_placement() -> None
```

##### `reset_private_dns_name_options` <a name="reset_private_dns_name_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetPrivateDnsNameOptions"></a>

```python
def reset_private_dns_name_options() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_tag_specifications` <a name="reset_tag_specifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetTagSpecifications"></a>

```python
def reset_tag_specifications() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetUserData"></a>

```python
def reset_user_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.blockDeviceMappings">block_device_mappings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.capacityReservationSpecification">capacity_reservation_specification</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.cpuOptions">cpu_options</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creditSpecification">credit_specification</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enclaveOptions">enclave_options</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.hibernationOptions">hibernation_options</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.iamInstanceProfile">iam_instance_profile</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.licenseSpecifications">license_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.maintenanceOptions">maintenance_options</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.monitoring">monitoring</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkInterfaces">network_interfaces</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkPerformanceOptions">network_performance_options</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.placement">placement</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.privateDnsNameOptions">private_dns_name_options</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.tagSpecifications">tag_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.blockDeviceMappingsInput">block_device_mappings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.capacityReservationSpecificationInput">capacity_reservation_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.cpuOptionsInput">cpu_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creditSpecificationInput">credit_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.disableApiStopInput">disable_api_stop_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ebsOptimizedInput">ebs_optimized_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enablePrimaryIpv6Input">enable_primary_ipv6_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enclaveOptionsInput">enclave_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.hibernationOptionsInput">hibernation_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.iamInstanceProfileInput">iam_instance_profile_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ipv6AddressCountInput">ipv6_address_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.licenseSpecificationsInput">license_specifications_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.maintenanceOptionsInput">maintenance_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.metadataOptionsInput">metadata_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.monitoringInput">monitoring_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkInterfacesInput">network_interfaces_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkPerformanceOptionsInput">network_performance_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.placementInput">placement_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.privateDnsNameOptionsInput">private_dns_name_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.tagSpecificationsInput">tag_specifications_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.disableApiStop">disable_api_stop</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ebsOptimized">ebs_optimized</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enablePrimaryIpv6">enable_primary_ipv6</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.userData">user_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance">WorkspacesinstancesWorkspaceInstanceManagedInstance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_device_mappings`<sup>Required</sup> <a name="block_device_mappings" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.blockDeviceMappings"></a>

```python
block_device_mappings: WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList</a>

---

##### `capacity_reservation_specification`<sup>Required</sup> <a name="capacity_reservation_specification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.capacityReservationSpecification"></a>

```python
capacity_reservation_specification: WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference</a>

---

##### `cpu_options`<sup>Required</sup> <a name="cpu_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.cpuOptions"></a>

```python
cpu_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference</a>

---

##### `credit_specification`<sup>Required</sup> <a name="credit_specification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creditSpecification"></a>

```python
credit_specification: WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference</a>

---

##### `enclave_options`<sup>Required</sup> <a name="enclave_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enclaveOptions"></a>

```python
enclave_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference</a>

---

##### `hibernation_options`<sup>Required</sup> <a name="hibernation_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.hibernationOptions"></a>

```python
hibernation_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference</a>

---

##### `iam_instance_profile`<sup>Required</sup> <a name="iam_instance_profile" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.iamInstanceProfile"></a>

```python
iam_instance_profile: WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference</a>

---

##### `license_specifications`<sup>Required</sup> <a name="license_specifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.licenseSpecifications"></a>

```python
license_specifications: WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList</a>

---

##### `maintenance_options`<sup>Required</sup> <a name="maintenance_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.maintenanceOptions"></a>

```python
maintenance_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference</a>

---

##### `metadata_options`<sup>Required</sup> <a name="metadata_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.metadataOptions"></a>

```python
metadata_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference</a>

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.monitoring"></a>

```python
monitoring: WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference</a>

---

##### `network_interfaces`<sup>Required</sup> <a name="network_interfaces" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkInterfaces"></a>

```python
network_interfaces: WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList</a>

---

##### `network_performance_options`<sup>Required</sup> <a name="network_performance_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkPerformanceOptions"></a>

```python
network_performance_options: WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.placement"></a>

```python
placement: WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference</a>

---

##### `private_dns_name_options`<sup>Required</sup> <a name="private_dns_name_options" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.privateDnsNameOptions"></a>

```python
private_dns_name_options: WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference</a>

---

##### `tag_specifications`<sup>Required</sup> <a name="tag_specifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.tagSpecifications"></a>

```python
tag_specifications: WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList</a>

---

##### `block_device_mappings_input`<sup>Optional</sup> <a name="block_device_mappings_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.blockDeviceMappingsInput"></a>

```python
block_device_mappings_input: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a>]

---

##### `capacity_reservation_specification_input`<sup>Optional</sup> <a name="capacity_reservation_specification_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.capacityReservationSpecificationInput"></a>

```python
capacity_reservation_specification_input: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification</a>

---

##### `cpu_options_input`<sup>Optional</sup> <a name="cpu_options_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.cpuOptionsInput"></a>

```python
cpu_options_input: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions</a>

---

##### `credit_specification_input`<sup>Optional</sup> <a name="credit_specification_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creditSpecificationInput"></a>

```python
credit_specification_input: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification</a>

---

##### `disable_api_stop_input`<sup>Optional</sup> <a name="disable_api_stop_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.disableApiStopInput"></a>

```python
disable_api_stop_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ebs_optimized_input`<sup>Optional</sup> <a name="ebs_optimized_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ebsOptimizedInput"></a>

```python
ebs_optimized_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_primary_ipv6_input`<sup>Optional</sup> <a name="enable_primary_ipv6_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enablePrimaryIpv6Input"></a>

```python
enable_primary_ipv6_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enclave_options_input`<sup>Optional</sup> <a name="enclave_options_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enclaveOptionsInput"></a>

```python
enclave_options_input: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions</a>

---

##### `hibernation_options_input`<sup>Optional</sup> <a name="hibernation_options_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.hibernationOptionsInput"></a>

```python
hibernation_options_input: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions</a>

---

##### `iam_instance_profile_input`<sup>Optional</sup> <a name="iam_instance_profile_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.iamInstanceProfileInput"></a>

```python
iam_instance_profile_input: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile</a>

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `ipv6_address_count_input`<sup>Optional</sup> <a name="ipv6_address_count_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ipv6AddressCountInput"></a>

```python
ipv6_address_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `license_specifications_input`<sup>Optional</sup> <a name="license_specifications_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.licenseSpecificationsInput"></a>

```python
license_specifications_input: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a>]

---

##### `maintenance_options_input`<sup>Optional</sup> <a name="maintenance_options_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.maintenanceOptionsInput"></a>

```python
maintenance_options_input: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions</a>

---

##### `metadata_options_input`<sup>Optional</sup> <a name="metadata_options_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.metadataOptionsInput"></a>

```python
metadata_options_input: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions</a>

---

##### `monitoring_input`<sup>Optional</sup> <a name="monitoring_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.monitoringInput"></a>

```python
monitoring_input: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring</a>

---

##### `network_interfaces_input`<sup>Optional</sup> <a name="network_interfaces_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkInterfacesInput"></a>

```python
network_interfaces_input: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a>]

---

##### `network_performance_options_input`<sup>Optional</sup> <a name="network_performance_options_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkPerformanceOptionsInput"></a>

```python
network_performance_options_input: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions</a>

---

##### `placement_input`<sup>Optional</sup> <a name="placement_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.placementInput"></a>

```python
placement_input: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement</a>

---

##### `private_dns_name_options_input`<sup>Optional</sup> <a name="private_dns_name_options_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.privateDnsNameOptionsInput"></a>

```python
private_dns_name_options_input: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions</a>

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tag_specifications_input`<sup>Optional</sup> <a name="tag_specifications_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.tagSpecificationsInput"></a>

```python
tag_specifications_input: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a>]

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `disable_api_stop`<sup>Required</sup> <a name="disable_api_stop" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.disableApiStop"></a>

```python
disable_api_stop: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ebs_optimized`<sup>Required</sup> <a name="ebs_optimized" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ebsOptimized"></a>

```python
ebs_optimized: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_primary_ipv6`<sup>Required</sup> <a name="enable_primary_ipv6" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enablePrimaryIpv6"></a>

```python
enable_primary_ipv6: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `ipv6_address_count`<sup>Required</sup> <a name="ipv6_address_count" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ipv6AddressCount"></a>

```python
ipv6_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstance
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance">WorkspacesinstancesWorkspaceInstanceManagedInstance</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetGroupName">reset_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetPartitionNumber">reset_partition_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetTenancy">reset_tenancy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_group_id` <a name="reset_group_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_group_name` <a name="reset_group_name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetGroupName"></a>

```python
def reset_group_name() -> None
```

##### `reset_partition_number` <a name="reset_partition_number" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetPartitionNumber"></a>

```python
def reset_partition_number() -> None
```

##### `reset_tenancy` <a name="reset_tenancy" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetTenancy"></a>

```python
def reset_tenancy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupNameInput">group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.partitionNumberInput">partition_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.tenancyInput">tenancy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.partitionNumber">partition_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.tenancy">tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `group_name_input`<sup>Optional</sup> <a name="group_name_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupNameInput"></a>

```python
group_name_input: str
```

- *Type:* str

---

##### `partition_number_input`<sup>Optional</sup> <a name="partition_number_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.partitionNumberInput"></a>

```python
partition_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tenancy_input`<sup>Optional</sup> <a name="tenancy_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.tenancyInput"></a>

```python
tenancy_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `partition_number`<sup>Required</sup> <a name="partition_number" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.partitionNumber"></a>

```python
partition_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord">reset_enable_resource_name_dns_aaaa_record</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord">reset_enable_resource_name_dns_a_record</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resetHostnameType">reset_hostname_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_resource_name_dns_aaaa_record` <a name="reset_enable_resource_name_dns_aaaa_record" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord"></a>

```python
def reset_enable_resource_name_dns_aaaa_record() -> None
```

##### `reset_enable_resource_name_dns_a_record` <a name="reset_enable_resource_name_dns_a_record" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord"></a>

```python
def reset_enable_resource_name_dns_a_record() -> None
```

##### `reset_hostname_type` <a name="reset_hostname_type" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resetHostnameType"></a>

```python
def reset_hostname_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput">enable_resource_name_dns_aaaa_record_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput">enable_resource_name_dns_a_record_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput">hostname_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">enable_resource_name_dns_aaaa_record</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">enable_resource_name_dns_a_record</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.hostnameType">hostname_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_resource_name_dns_aaaa_record_input`<sup>Optional</sup> <a name="enable_resource_name_dns_aaaa_record_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput"></a>

```python
enable_resource_name_dns_aaaa_record_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_resource_name_dns_a_record_input`<sup>Optional</sup> <a name="enable_resource_name_dns_a_record_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput"></a>

```python
enable_resource_name_dns_a_record_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `hostname_type_input`<sup>Optional</sup> <a name="hostname_type_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput"></a>

```python
hostname_type_input: str
```

- *Type:* str

---

##### `enable_resource_name_dns_aaaa_record`<sup>Required</sup> <a name="enable_resource_name_dns_aaaa_record" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```python
enable_resource_name_dns_aaaa_record: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_resource_name_dns_a_record`<sup>Required</sup> <a name="enable_resource_name_dns_a_record" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```python
enable_resource_name_dns_a_record: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `hostname_type`<sup>Required</sup> <a name="hostname_type" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```python
hostname_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a>]

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags</a>]

---

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.tags"></a>

```python
tags: WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList</a>

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags</a>]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags</a>]

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags</a>

---


### WorkspacesinstancesWorkspaceInstanceTagsList <a name="WorkspacesinstancesWorkspaceInstanceTagsList" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspacesinstancesWorkspaceInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags">WorkspacesinstancesWorkspaceInstanceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspacesinstancesWorkspaceInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags">WorkspacesinstancesWorkspaceInstanceTags</a>]

---


### WorkspacesinstancesWorkspaceInstanceTagsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceTagsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesinstances_workspace_instance

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags">WorkspacesinstancesWorkspaceInstanceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesinstancesWorkspaceInstanceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags">WorkspacesinstancesWorkspaceInstanceTags</a>

---



