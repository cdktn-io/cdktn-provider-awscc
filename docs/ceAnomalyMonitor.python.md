# `ceAnomalyMonitor` Submodule <a name="`ceAnomalyMonitor` Submodule" id="@cdktn/provider-awscc.ceAnomalyMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CeAnomalyMonitor <a name="CeAnomalyMonitor" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ce_anomaly_monitor awscc_ce_anomaly_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer"></a>

```python
from cdktn_provider_awscc import ce_anomaly_monitor

ceAnomalyMonitor.CeAnomalyMonitor(
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
  monitor_type: str,
  monitor_dimension: str = None,
  monitor_specification: str = None,
  resource_tags: IResolvable | typing.List[CeAnomalyMonitorResourceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.monitorName">monitor_name</a></code> | <code>str</code> | The name of the monitor. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.monitorType">monitor_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ce_anomaly_monitor#monitor_type CeAnomalyMonitor#monitor_type}. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.monitorDimension">monitor_dimension</a></code> | <code>str</code> | The dimensions to evaluate. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.monitorSpecification">monitor_specification</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ce_anomaly_monitor#monitor_specification CeAnomalyMonitor#monitor_specification}. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.resourceTags">resource_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags">CeAnomalyMonitorResourceTags</a>]</code> | Tags to assign to monitor. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `monitor_name`<sup>Required</sup> <a name="monitor_name" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.monitorName"></a>

- *Type:* str

The name of the monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ce_anomaly_monitor#monitor_name CeAnomalyMonitor#monitor_name}

---

##### `monitor_type`<sup>Required</sup> <a name="monitor_type" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.monitorType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ce_anomaly_monitor#monitor_type CeAnomalyMonitor#monitor_type}.

---

##### `monitor_dimension`<sup>Optional</sup> <a name="monitor_dimension" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.monitorDimension"></a>

- *Type:* str

The dimensions to evaluate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ce_anomaly_monitor#monitor_dimension CeAnomalyMonitor#monitor_dimension}

---

##### `monitor_specification`<sup>Optional</sup> <a name="monitor_specification" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.monitorSpecification"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ce_anomaly_monitor#monitor_specification CeAnomalyMonitor#monitor_specification}.

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.resourceTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags">CeAnomalyMonitorResourceTags</a>]

Tags to assign to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ce_anomaly_monitor#resource_tags CeAnomalyMonitor#resource_tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.putResourceTags">put_resource_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorDimension">reset_monitor_dimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorSpecification">reset_monitor_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.resetResourceTags">reset_resource_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_resource_tags` <a name="put_resource_tags" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.putResourceTags"></a>

```python
def put_resource_tags(
  value: IResolvable | typing.List[CeAnomalyMonitorResourceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.putResourceTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags">CeAnomalyMonitorResourceTags</a>]

---

##### `reset_monitor_dimension` <a name="reset_monitor_dimension" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorDimension"></a>

```python
def reset_monitor_dimension() -> None
```

##### `reset_monitor_specification` <a name="reset_monitor_specification" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorSpecification"></a>

```python
def reset_monitor_specification() -> None
```

##### `reset_resource_tags` <a name="reset_resource_tags" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.resetResourceTags"></a>

```python
def reset_resource_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CeAnomalyMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.isConstruct"></a>

```python
from cdktn_provider_awscc import ce_anomaly_monitor

ceAnomalyMonitor.CeAnomalyMonitor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ce_anomaly_monitor

ceAnomalyMonitor.CeAnomalyMonitor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ce_anomaly_monitor

ceAnomalyMonitor.CeAnomalyMonitor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ce_anomaly_monitor

ceAnomalyMonitor.CeAnomalyMonitor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CeAnomalyMonitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CeAnomalyMonitor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CeAnomalyMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ce_anomaly_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CeAnomalyMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.dimensionalValueCount">dimensional_value_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.lastEvaluatedDate">last_evaluated_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.lastUpdatedDate">last_updated_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorArn">monitor_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.resourceTags">resource_tags</a></code> | <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList">CeAnomalyMonitorResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimensionInput">monitor_dimension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorNameInput">monitor_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecificationInput">monitor_specification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorTypeInput">monitor_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.resourceTagsInput">resource_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags">CeAnomalyMonitorResourceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimension">monitor_dimension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorName">monitor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecification">monitor_specification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorType">monitor_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `dimensional_value_count`<sup>Required</sup> <a name="dimensional_value_count" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.dimensionalValueCount"></a>

```python
dimensional_value_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_evaluated_date`<sup>Required</sup> <a name="last_evaluated_date" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.lastEvaluatedDate"></a>

```python
last_evaluated_date: str
```

- *Type:* str

---

##### `last_updated_date`<sup>Required</sup> <a name="last_updated_date" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.lastUpdatedDate"></a>

```python
last_updated_date: str
```

- *Type:* str

---

##### `monitor_arn`<sup>Required</sup> <a name="monitor_arn" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorArn"></a>

```python
monitor_arn: str
```

- *Type:* str

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.resourceTags"></a>

```python
resource_tags: CeAnomalyMonitorResourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList">CeAnomalyMonitorResourceTagsList</a>

---

##### `monitor_dimension_input`<sup>Optional</sup> <a name="monitor_dimension_input" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimensionInput"></a>

```python
monitor_dimension_input: str
```

- *Type:* str

---

##### `monitor_name_input`<sup>Optional</sup> <a name="monitor_name_input" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorNameInput"></a>

```python
monitor_name_input: str
```

- *Type:* str

---

##### `monitor_specification_input`<sup>Optional</sup> <a name="monitor_specification_input" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecificationInput"></a>

```python
monitor_specification_input: str
```

- *Type:* str

---

##### `monitor_type_input`<sup>Optional</sup> <a name="monitor_type_input" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorTypeInput"></a>

```python
monitor_type_input: str
```

- *Type:* str

---

##### `resource_tags_input`<sup>Optional</sup> <a name="resource_tags_input" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.resourceTagsInput"></a>

```python
resource_tags_input: IResolvable | typing.List[CeAnomalyMonitorResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags">CeAnomalyMonitorResourceTags</a>]

---

##### `monitor_dimension`<sup>Required</sup> <a name="monitor_dimension" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimension"></a>

```python
monitor_dimension: str
```

- *Type:* str

---

##### `monitor_name`<sup>Required</sup> <a name="monitor_name" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorName"></a>

```python
monitor_name: str
```

- *Type:* str

---

##### `monitor_specification`<sup>Required</sup> <a name="monitor_specification" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecification"></a>

```python
monitor_specification: str
```

- *Type:* str

---

##### `monitor_type`<sup>Required</sup> <a name="monitor_type" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorType"></a>

```python
monitor_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CeAnomalyMonitorConfig <a name="CeAnomalyMonitorConfig" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ce_anomaly_monitor

ceAnomalyMonitor.CeAnomalyMonitorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  monitor_name: str,
  monitor_type: str,
  monitor_dimension: str = None,
  monitor_specification: str = None,
  resource_tags: IResolvable | typing.List[CeAnomalyMonitorResourceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorName">monitor_name</a></code> | <code>str</code> | The name of the monitor. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorType">monitor_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ce_anomaly_monitor#monitor_type CeAnomalyMonitor#monitor_type}. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorDimension">monitor_dimension</a></code> | <code>str</code> | The dimensions to evaluate. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorSpecification">monitor_specification</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ce_anomaly_monitor#monitor_specification CeAnomalyMonitor#monitor_specification}. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.resourceTags">resource_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags">CeAnomalyMonitorResourceTags</a>]</code> | Tags to assign to monitor. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `monitor_name`<sup>Required</sup> <a name="monitor_name" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorName"></a>

```python
monitor_name: str
```

- *Type:* str

The name of the monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ce_anomaly_monitor#monitor_name CeAnomalyMonitor#monitor_name}

---

##### `monitor_type`<sup>Required</sup> <a name="monitor_type" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorType"></a>

```python
monitor_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ce_anomaly_monitor#monitor_type CeAnomalyMonitor#monitor_type}.

---

##### `monitor_dimension`<sup>Optional</sup> <a name="monitor_dimension" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorDimension"></a>

```python
monitor_dimension: str
```

- *Type:* str

The dimensions to evaluate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ce_anomaly_monitor#monitor_dimension CeAnomalyMonitor#monitor_dimension}

---

##### `monitor_specification`<sup>Optional</sup> <a name="monitor_specification" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorSpecification"></a>

```python
monitor_specification: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ce_anomaly_monitor#monitor_specification CeAnomalyMonitor#monitor_specification}.

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.resourceTags"></a>

```python
resource_tags: IResolvable | typing.List[CeAnomalyMonitorResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags">CeAnomalyMonitorResourceTags</a>]

Tags to assign to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ce_anomaly_monitor#resource_tags CeAnomalyMonitor#resource_tags}

---

### CeAnomalyMonitorResourceTags <a name="CeAnomalyMonitorResourceTags" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags.Initializer"></a>

```python
from cdktn_provider_awscc import ce_anomaly_monitor

ceAnomalyMonitor.CeAnomalyMonitorResourceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags.property.key">key</a></code> | <code>str</code> | The key name for the tag. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ce_anomaly_monitor#key CeAnomalyMonitor#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ce_anomaly_monitor#value CeAnomalyMonitor#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CeAnomalyMonitorResourceTagsList <a name="CeAnomalyMonitorResourceTagsList" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ce_anomaly_monitor

ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CeAnomalyMonitorResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags">CeAnomalyMonitorResourceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CeAnomalyMonitorResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags">CeAnomalyMonitorResourceTags</a>]

---


### CeAnomalyMonitorResourceTagsOutputReference <a name="CeAnomalyMonitorResourceTagsOutputReference" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ce_anomaly_monitor

ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags">CeAnomalyMonitorResourceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CeAnomalyMonitorResourceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags">CeAnomalyMonitorResourceTags</a>

---



