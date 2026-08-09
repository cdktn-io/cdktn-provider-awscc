# `networkflowmonitorMonitor` Submodule <a name="`networkflowmonitorMonitor` Submodule" id="@cdktn/provider-awscc.networkflowmonitorMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkflowmonitorMonitor <a name="NetworkflowmonitorMonitor" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkflowmonitor_monitor awscc_networkflowmonitor_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitor(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  local_resources: IResolvable | typing.List[NetworkflowmonitorMonitorLocalResources],
  monitor_name: str,
  remote_resources: IResolvable | typing.List[NetworkflowmonitorMonitorRemoteResources] = None,
  scope_arn: str = None,
  tags: IResolvable | typing.List[NetworkflowmonitorMonitorTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.localResources">local_resources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources">NetworkflowmonitorMonitorLocalResources</a>]</code> | The local resources to monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.monitorName">monitor_name</a></code> | <code>str</code> | The name of the monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.remoteResources">remote_resources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources">NetworkflowmonitorMonitorRemoteResources</a>]</code> | The remote resources to monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.scopeArn">scope_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the scope for the monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags">NetworkflowmonitorMonitorTags</a>]</code> | The tags for the monitor. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `local_resources`<sup>Required</sup> <a name="local_resources" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.localResources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources">NetworkflowmonitorMonitorLocalResources</a>]

The local resources to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkflowmonitor_monitor#local_resources NetworkflowmonitorMonitor#local_resources}

---

##### `monitor_name`<sup>Required</sup> <a name="monitor_name" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.monitorName"></a>

- *Type:* str

The name of the monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkflowmonitor_monitor#monitor_name NetworkflowmonitorMonitor#monitor_name}

---

##### `remote_resources`<sup>Optional</sup> <a name="remote_resources" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.remoteResources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources">NetworkflowmonitorMonitorRemoteResources</a>]

The remote resources to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkflowmonitor_monitor#remote_resources NetworkflowmonitorMonitor#remote_resources}

---

##### `scope_arn`<sup>Optional</sup> <a name="scope_arn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.scopeArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the scope for the monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkflowmonitor_monitor#scope_arn NetworkflowmonitorMonitor#scope_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags">NetworkflowmonitorMonitorTags</a>]

The tags for the monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkflowmonitor_monitor#tags NetworkflowmonitorMonitor#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putLocalResources">put_local_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putRemoteResources">put_remote_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetRemoteResources">reset_remote_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetScopeArn">reset_scope_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_local_resources` <a name="put_local_resources" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putLocalResources"></a>

```python
def put_local_resources(
  value: IResolvable | typing.List[NetworkflowmonitorMonitorLocalResources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putLocalResources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources">NetworkflowmonitorMonitorLocalResources</a>]

---

##### `put_remote_resources` <a name="put_remote_resources" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putRemoteResources"></a>

```python
def put_remote_resources(
  value: IResolvable | typing.List[NetworkflowmonitorMonitorRemoteResources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putRemoteResources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources">NetworkflowmonitorMonitorRemoteResources</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NetworkflowmonitorMonitorTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags">NetworkflowmonitorMonitorTags</a>]

---

##### `reset_remote_resources` <a name="reset_remote_resources" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetRemoteResources"></a>

```python
def reset_remote_resources() -> None
```

##### `reset_scope_arn` <a name="reset_scope_arn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetScopeArn"></a>

```python
def reset_scope_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkflowmonitorMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isConstruct"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformElement"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformResource"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkflowmonitorMonitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkflowmonitorMonitor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkflowmonitorMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkflowmonitor_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkflowmonitorMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.localResources">local_resources</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList">NetworkflowmonitorMonitorLocalResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorStatus">monitor_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.remoteResources">remote_resources</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList">NetworkflowmonitorMonitorRemoteResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList">NetworkflowmonitorMonitorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.localResourcesInput">local_resources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources">NetworkflowmonitorMonitorLocalResources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorNameInput">monitor_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.remoteResourcesInput">remote_resources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources">NetworkflowmonitorMonitorRemoteResources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.scopeArnInput">scope_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags">NetworkflowmonitorMonitorTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorName">monitor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.scopeArn">scope_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local_resources`<sup>Required</sup> <a name="local_resources" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.localResources"></a>

```python
local_resources: NetworkflowmonitorMonitorLocalResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList">NetworkflowmonitorMonitorLocalResourcesList</a>

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `monitor_status`<sup>Required</sup> <a name="monitor_status" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorStatus"></a>

```python
monitor_status: str
```

- *Type:* str

---

##### `remote_resources`<sup>Required</sup> <a name="remote_resources" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.remoteResources"></a>

```python
remote_resources: NetworkflowmonitorMonitorRemoteResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList">NetworkflowmonitorMonitorRemoteResourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tags"></a>

```python
tags: NetworkflowmonitorMonitorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList">NetworkflowmonitorMonitorTagsList</a>

---

##### `local_resources_input`<sup>Optional</sup> <a name="local_resources_input" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.localResourcesInput"></a>

```python
local_resources_input: IResolvable | typing.List[NetworkflowmonitorMonitorLocalResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources">NetworkflowmonitorMonitorLocalResources</a>]

---

##### `monitor_name_input`<sup>Optional</sup> <a name="monitor_name_input" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorNameInput"></a>

```python
monitor_name_input: str
```

- *Type:* str

---

##### `remote_resources_input`<sup>Optional</sup> <a name="remote_resources_input" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.remoteResourcesInput"></a>

```python
remote_resources_input: IResolvable | typing.List[NetworkflowmonitorMonitorRemoteResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources">NetworkflowmonitorMonitorRemoteResources</a>]

---

##### `scope_arn_input`<sup>Optional</sup> <a name="scope_arn_input" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.scopeArnInput"></a>

```python
scope_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NetworkflowmonitorMonitorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags">NetworkflowmonitorMonitorTags</a>]

---

##### `monitor_name`<sup>Required</sup> <a name="monitor_name" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.monitorName"></a>

```python
monitor_name: str
```

- *Type:* str

---

##### `scope_arn`<sup>Required</sup> <a name="scope_arn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.scopeArn"></a>

```python
scope_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkflowmonitorMonitorConfig <a name="NetworkflowmonitorMonitorConfig" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  local_resources: IResolvable | typing.List[NetworkflowmonitorMonitorLocalResources],
  monitor_name: str,
  remote_resources: IResolvable | typing.List[NetworkflowmonitorMonitorRemoteResources] = None,
  scope_arn: str = None,
  tags: IResolvable | typing.List[NetworkflowmonitorMonitorTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.localResources">local_resources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources">NetworkflowmonitorMonitorLocalResources</a>]</code> | The local resources to monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.monitorName">monitor_name</a></code> | <code>str</code> | The name of the monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.remoteResources">remote_resources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources">NetworkflowmonitorMonitorRemoteResources</a>]</code> | The remote resources to monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.scopeArn">scope_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the scope for the monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags">NetworkflowmonitorMonitorTags</a>]</code> | The tags for the monitor. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `local_resources`<sup>Required</sup> <a name="local_resources" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.localResources"></a>

```python
local_resources: IResolvable | typing.List[NetworkflowmonitorMonitorLocalResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources">NetworkflowmonitorMonitorLocalResources</a>]

The local resources to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkflowmonitor_monitor#local_resources NetworkflowmonitorMonitor#local_resources}

---

##### `monitor_name`<sup>Required</sup> <a name="monitor_name" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.monitorName"></a>

```python
monitor_name: str
```

- *Type:* str

The name of the monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkflowmonitor_monitor#monitor_name NetworkflowmonitorMonitor#monitor_name}

---

##### `remote_resources`<sup>Optional</sup> <a name="remote_resources" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.remoteResources"></a>

```python
remote_resources: IResolvable | typing.List[NetworkflowmonitorMonitorRemoteResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources">NetworkflowmonitorMonitorRemoteResources</a>]

The remote resources to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkflowmonitor_monitor#remote_resources NetworkflowmonitorMonitor#remote_resources}

---

##### `scope_arn`<sup>Optional</sup> <a name="scope_arn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.scopeArn"></a>

```python
scope_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the scope for the monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkflowmonitor_monitor#scope_arn NetworkflowmonitorMonitor#scope_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[NetworkflowmonitorMonitorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags">NetworkflowmonitorMonitorTags</a>]

The tags for the monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkflowmonitor_monitor#tags NetworkflowmonitorMonitor#tags}

---

### NetworkflowmonitorMonitorLocalResources <a name="NetworkflowmonitorMonitorLocalResources" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources.Initializer"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources(
  identifier: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources.property.identifier">identifier</a></code> | <code>str</code> | The identifier of the local resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources.property.type">type</a></code> | <code>str</code> | The type of the local resource. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

The identifier of the local resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkflowmonitor_monitor#identifier NetworkflowmonitorMonitor#identifier}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the local resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkflowmonitor_monitor#type NetworkflowmonitorMonitor#type}

---

### NetworkflowmonitorMonitorRemoteResources <a name="NetworkflowmonitorMonitorRemoteResources" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources.Initializer"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources(
  identifier: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources.property.identifier">identifier</a></code> | <code>str</code> | The identifier of the remote resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources.property.type">type</a></code> | <code>str</code> | The type of the remote resource. |

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

The identifier of the remote resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkflowmonitor_monitor#identifier NetworkflowmonitorMonitor#identifier}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the remote resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkflowmonitor_monitor#type NetworkflowmonitorMonitor#type}

---

### NetworkflowmonitorMonitorTags <a name="NetworkflowmonitorMonitorTags" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags.Initializer"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitorTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkflowmonitor_monitor#key NetworkflowmonitorMonitor#key}. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkflowmonitor_monitor#value NetworkflowmonitorMonitor#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkflowmonitor_monitor#key NetworkflowmonitorMonitor#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkflowmonitor_monitor#value NetworkflowmonitorMonitor#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkflowmonitorMonitorLocalResourcesList <a name="NetworkflowmonitorMonitorLocalResourcesList" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkflowmonitorMonitorLocalResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources">NetworkflowmonitorMonitorLocalResources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkflowmonitorMonitorLocalResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources">NetworkflowmonitorMonitorLocalResources</a>]

---


### NetworkflowmonitorMonitorLocalResourcesOutputReference <a name="NetworkflowmonitorMonitorLocalResourcesOutputReference" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources">NetworkflowmonitorMonitorLocalResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkflowmonitorMonitorLocalResources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorLocalResources">NetworkflowmonitorMonitorLocalResources</a>

---


### NetworkflowmonitorMonitorRemoteResourcesList <a name="NetworkflowmonitorMonitorRemoteResourcesList" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkflowmonitorMonitorRemoteResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources">NetworkflowmonitorMonitorRemoteResources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkflowmonitorMonitorRemoteResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources">NetworkflowmonitorMonitorRemoteResources</a>]

---


### NetworkflowmonitorMonitorRemoteResourcesOutputReference <a name="NetworkflowmonitorMonitorRemoteResourcesOutputReference" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.resetIdentifier">reset_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identifier` <a name="reset_identifier" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.resetIdentifier"></a>

```python
def reset_identifier() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources">NetworkflowmonitorMonitorRemoteResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkflowmonitorMonitorRemoteResources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorRemoteResources">NetworkflowmonitorMonitorRemoteResources</a>

---


### NetworkflowmonitorMonitorTagsList <a name="NetworkflowmonitorMonitorTagsList" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkflowmonitorMonitorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags">NetworkflowmonitorMonitorTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkflowmonitorMonitorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags">NetworkflowmonitorMonitorTags</a>]

---


### NetworkflowmonitorMonitorTagsOutputReference <a name="NetworkflowmonitorMonitorTagsOutputReference" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_monitor

networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags">NetworkflowmonitorMonitorTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkflowmonitorMonitorTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkflowmonitorMonitor.NetworkflowmonitorMonitorTags">NetworkflowmonitorMonitorTags</a>

---



