# `networkflowmonitorPerformanceMonitor` Submodule <a name="`networkflowmonitorPerformanceMonitor` Submodule" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkflowmonitorPerformanceMonitor <a name="NetworkflowmonitorPerformanceMonitor" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor awscc_networkflowmonitor_performance_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_performance_monitor

networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  monitor_name: str,
  targets: IResolvable | typing.List[NetworkflowmonitorPerformanceMonitorTargets],
  scope_arn: str = None,
  tags: IResolvable | typing.List[NetworkflowmonitorPerformanceMonitorTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.monitorName">monitor_name</a></code> | <code>str</code> | The name of the performance monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.targets">targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>]</code> | The targets that are monitored by the performance monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.scopeArn">scope_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the scope for the performance monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>]</code> | The tags for the performance monitor. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `monitor_name`<sup>Required</sup> <a name="monitor_name" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.monitorName"></a>

- *Type:* str

The name of the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#monitor_name NetworkflowmonitorPerformanceMonitor#monitor_name}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.targets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>]

The targets that are monitored by the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#targets NetworkflowmonitorPerformanceMonitor#targets}

---

##### `scope_arn`<sup>Optional</sup> <a name="scope_arn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.scopeArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the scope for the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#scope_arn NetworkflowmonitorPerformanceMonitor#scope_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>]

The tags for the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#tags NetworkflowmonitorPerformanceMonitor#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTargets">put_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetScopeArn">reset_scope_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NetworkflowmonitorPerformanceMonitorTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>]

---

##### `put_targets` <a name="put_targets" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTargets"></a>

```python
def put_targets(
  value: IResolvable | typing.List[NetworkflowmonitorPerformanceMonitorTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>]

---

##### `reset_scope_arn` <a name="reset_scope_arn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetScopeArn"></a>

```python
def reset_scope_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkflowmonitorPerformanceMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isConstruct"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_performance_monitor

networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformElement"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_performance_monitor

networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformResource"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_performance_monitor

networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_performance_monitor

networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkflowmonitorPerformanceMonitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkflowmonitorPerformanceMonitor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkflowmonitorPerformanceMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkflowmonitorPerformanceMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorStatus">monitor_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorType">monitor_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList">NetworkflowmonitorPerformanceMonitorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList">NetworkflowmonitorPerformanceMonitorTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorNameInput">monitor_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.scopeArnInput">scope_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.targetsInput">targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorName">monitor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.scopeArn">scope_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `monitor_status`<sup>Required</sup> <a name="monitor_status" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorStatus"></a>

```python
monitor_status: str
```

- *Type:* str

---

##### `monitor_type`<sup>Required</sup> <a name="monitor_type" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorType"></a>

```python
monitor_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tags"></a>

```python
tags: NetworkflowmonitorPerformanceMonitorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList">NetworkflowmonitorPerformanceMonitorTagsList</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.targets"></a>

```python
targets: NetworkflowmonitorPerformanceMonitorTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList">NetworkflowmonitorPerformanceMonitorTargetsList</a>

---

##### `monitor_name_input`<sup>Optional</sup> <a name="monitor_name_input" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorNameInput"></a>

```python
monitor_name_input: str
```

- *Type:* str

---

##### `scope_arn_input`<sup>Optional</sup> <a name="scope_arn_input" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.scopeArnInput"></a>

```python
scope_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NetworkflowmonitorPerformanceMonitorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>]

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.targetsInput"></a>

```python
targets_input: IResolvable | typing.List[NetworkflowmonitorPerformanceMonitorTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>]

---

##### `monitor_name`<sup>Required</sup> <a name="monitor_name" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorName"></a>

```python
monitor_name: str
```

- *Type:* str

---

##### `scope_arn`<sup>Required</sup> <a name="scope_arn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.scopeArn"></a>

```python
scope_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkflowmonitorPerformanceMonitorConfig <a name="NetworkflowmonitorPerformanceMonitorConfig" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_performance_monitor

networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  monitor_name: str,
  targets: IResolvable | typing.List[NetworkflowmonitorPerformanceMonitorTargets],
  scope_arn: str = None,
  tags: IResolvable | typing.List[NetworkflowmonitorPerformanceMonitorTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.monitorName">monitor_name</a></code> | <code>str</code> | The name of the performance monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.targets">targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>]</code> | The targets that are monitored by the performance monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.scopeArn">scope_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the scope for the performance monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>]</code> | The tags for the performance monitor. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `monitor_name`<sup>Required</sup> <a name="monitor_name" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.monitorName"></a>

```python
monitor_name: str
```

- *Type:* str

The name of the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#monitor_name NetworkflowmonitorPerformanceMonitor#monitor_name}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.targets"></a>

```python
targets: IResolvable | typing.List[NetworkflowmonitorPerformanceMonitorTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>]

The targets that are monitored by the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#targets NetworkflowmonitorPerformanceMonitor#targets}

---

##### `scope_arn`<sup>Optional</sup> <a name="scope_arn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.scopeArn"></a>

```python
scope_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the scope for the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#scope_arn NetworkflowmonitorPerformanceMonitor#scope_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[NetworkflowmonitorPerformanceMonitorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>]

The tags for the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#tags NetworkflowmonitorPerformanceMonitor#tags}

---

### NetworkflowmonitorPerformanceMonitorTags <a name="NetworkflowmonitorPerformanceMonitorTags" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags.Initializer"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_performance_monitor

networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#key NetworkflowmonitorPerformanceMonitor#key}. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#value NetworkflowmonitorPerformanceMonitor#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#key NetworkflowmonitorPerformanceMonitor#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#value NetworkflowmonitorPerformanceMonitor#value}.

---

### NetworkflowmonitorPerformanceMonitorTargets <a name="NetworkflowmonitorPerformanceMonitorTargets" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets.Initializer"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_performance_monitor

networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets(
  identifier: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets.property.identifier">identifier</a></code> | <code>str</code> | The identifier of the target. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets.property.type">type</a></code> | <code>str</code> | The type of the target. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

The identifier of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#identifier NetworkflowmonitorPerformanceMonitor#identifier}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#type NetworkflowmonitorPerformanceMonitor#type}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkflowmonitorPerformanceMonitorTagsList <a name="NetworkflowmonitorPerformanceMonitorTagsList" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_performance_monitor

networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkflowmonitorPerformanceMonitorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkflowmonitorPerformanceMonitorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>]

---


### NetworkflowmonitorPerformanceMonitorTagsOutputReference <a name="NetworkflowmonitorPerformanceMonitorTagsOutputReference" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_performance_monitor

networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkflowmonitorPerformanceMonitorTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>

---


### NetworkflowmonitorPerformanceMonitorTargetsList <a name="NetworkflowmonitorPerformanceMonitorTargetsList" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_performance_monitor

networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkflowmonitorPerformanceMonitorTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkflowmonitorPerformanceMonitorTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>]

---


### NetworkflowmonitorPerformanceMonitorTargetsOutputReference <a name="NetworkflowmonitorPerformanceMonitorTargetsOutputReference" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkflowmonitor_performance_monitor

networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkflowmonitorPerformanceMonitorTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>

---



