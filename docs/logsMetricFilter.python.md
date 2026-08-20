# `logsMetricFilter` Submodule <a name="`logsMetricFilter` Submodule" id="@cdktn/provider-awscc.logsMetricFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsMetricFilter <a name="LogsMetricFilter" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter awscc_logs_metric_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer"></a>

```python
from cdktn_provider_awscc import logs_metric_filter

logsMetricFilter.LogsMetricFilter(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter_pattern: str,
  log_group_name: str,
  metric_transformations: IResolvable | typing.List[LogsMetricFilterMetricTransformations],
  apply_on_transformed_logs: bool | IResolvable = None,
  emit_system_field_dimensions: typing.List[str] = None,
  field_selection_criteria: str = None,
  filter_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.filterPattern">filter_pattern</a></code> | <code>str</code> | A filter pattern for extracting metric data out of ingested log events. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.logGroupName">log_group_name</a></code> | <code>str</code> | The name of an existing log group that you want to associate with this metric filter. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.metricTransformations">metric_transformations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>]</code> | The metric transformations. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.applyOnTransformedLogs">apply_on_transformed_logs</a></code> | <code>bool \| cdktn.IResolvable</code> | This parameter is valid only for log groups that have an active log transformer. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.emitSystemFieldDimensions">emit_system_field_dimensions</a></code> | <code>typing.List[str]</code> | The list of system fields that are emitted as additional dimensions in the generated metrics. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.fieldSelectionCriteria">field_selection_criteria</a></code> | <code>str</code> | The filter expression that specifies which log events are processed by this metric filter based on system fields. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.filterName">filter_name</a></code> | <code>str</code> | The name of the metric filter. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter_pattern`<sup>Required</sup> <a name="filter_pattern" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.filterPattern"></a>

- *Type:* str

A filter pattern for extracting metric data out of ingested log events.

For more information, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#filter_pattern LogsMetricFilter#filter_pattern}

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.logGroupName"></a>

- *Type:* str

The name of an existing log group that you want to associate with this metric filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#log_group_name LogsMetricFilter#log_group_name}

---

##### `metric_transformations`<sup>Required</sup> <a name="metric_transformations" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.metricTransformations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>]

The metric transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#metric_transformations LogsMetricFilter#metric_transformations}

---

##### `apply_on_transformed_logs`<sup>Optional</sup> <a name="apply_on_transformed_logs" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.applyOnTransformedLogs"></a>

- *Type:* bool | cdktn.IResolvable

This parameter is valid only for log groups that have an active log transformer.

For more information about log transformers, see [PutTransformer](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html).
If this value is `true`, the metric filter is applied on the transformed version of the log events instead of the original ingested log events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#apply_on_transformed_logs LogsMetricFilter#apply_on_transformed_logs}

---

##### `emit_system_field_dimensions`<sup>Optional</sup> <a name="emit_system_field_dimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.emitSystemFieldDimensions"></a>

- *Type:* typing.List[str]

The list of system fields that are emitted as additional dimensions in the generated metrics.

Returns the `emitSystemFieldDimensions` value if it was specified when the metric filter was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#emit_system_field_dimensions LogsMetricFilter#emit_system_field_dimensions}

---

##### `field_selection_criteria`<sup>Optional</sup> <a name="field_selection_criteria" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.fieldSelectionCriteria"></a>

- *Type:* str

The filter expression that specifies which log events are processed by this metric filter based on system fields.

Returns the `fieldSelectionCriteria` value if it was specified when the metric filter was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#field_selection_criteria LogsMetricFilter#field_selection_criteria}

---

##### `filter_name`<sup>Optional</sup> <a name="filter_name" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.filterName"></a>

- *Type:* str

The name of the metric filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#filter_name LogsMetricFilter#filter_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.putMetricTransformations">put_metric_transformations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetApplyOnTransformedLogs">reset_apply_on_transformed_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetEmitSystemFieldDimensions">reset_emit_system_field_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetFieldSelectionCriteria">reset_field_selection_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetFilterName">reset_filter_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metric_transformations` <a name="put_metric_transformations" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.putMetricTransformations"></a>

```python
def put_metric_transformations(
  value: IResolvable | typing.List[LogsMetricFilterMetricTransformations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.putMetricTransformations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>]

---

##### `reset_apply_on_transformed_logs` <a name="reset_apply_on_transformed_logs" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetApplyOnTransformedLogs"></a>

```python
def reset_apply_on_transformed_logs() -> None
```

##### `reset_emit_system_field_dimensions` <a name="reset_emit_system_field_dimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetEmitSystemFieldDimensions"></a>

```python
def reset_emit_system_field_dimensions() -> None
```

##### `reset_field_selection_criteria` <a name="reset_field_selection_criteria" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetFieldSelectionCriteria"></a>

```python
def reset_field_selection_criteria() -> None
```

##### `reset_filter_name` <a name="reset_filter_name" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetFilterName"></a>

```python
def reset_filter_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LogsMetricFilter resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isConstruct"></a>

```python
from cdktn_provider_awscc import logs_metric_filter

logsMetricFilter.LogsMetricFilter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformElement"></a>

```python
from cdktn_provider_awscc import logs_metric_filter

logsMetricFilter.LogsMetricFilter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformResource"></a>

```python
from cdktn_provider_awscc import logs_metric_filter

logsMetricFilter.LogsMetricFilter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import logs_metric_filter

logsMetricFilter.LogsMetricFilter.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LogsMetricFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogsMetricFilter to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogsMetricFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LogsMetricFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.metricTransformations">metric_transformations</a></code> | <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList">LogsMetricFilterMetricTransformationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.applyOnTransformedLogsInput">apply_on_transformed_logs_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.emitSystemFieldDimensionsInput">emit_system_field_dimensions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fieldSelectionCriteriaInput">field_selection_criteria_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterNameInput">filter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterPatternInput">filter_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.logGroupNameInput">log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.metricTransformationsInput">metric_transformations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.applyOnTransformedLogs">apply_on_transformed_logs</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.emitSystemFieldDimensions">emit_system_field_dimensions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fieldSelectionCriteria">field_selection_criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterName">filter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterPattern">filter_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric_transformations`<sup>Required</sup> <a name="metric_transformations" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.metricTransformations"></a>

```python
metric_transformations: LogsMetricFilterMetricTransformationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList">LogsMetricFilterMetricTransformationsList</a>

---

##### `apply_on_transformed_logs_input`<sup>Optional</sup> <a name="apply_on_transformed_logs_input" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.applyOnTransformedLogsInput"></a>

```python
apply_on_transformed_logs_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `emit_system_field_dimensions_input`<sup>Optional</sup> <a name="emit_system_field_dimensions_input" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.emitSystemFieldDimensionsInput"></a>

```python
emit_system_field_dimensions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field_selection_criteria_input`<sup>Optional</sup> <a name="field_selection_criteria_input" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fieldSelectionCriteriaInput"></a>

```python
field_selection_criteria_input: str
```

- *Type:* str

---

##### `filter_name_input`<sup>Optional</sup> <a name="filter_name_input" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterNameInput"></a>

```python
filter_name_input: str
```

- *Type:* str

---

##### `filter_pattern_input`<sup>Optional</sup> <a name="filter_pattern_input" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterPatternInput"></a>

```python
filter_pattern_input: str
```

- *Type:* str

---

##### `log_group_name_input`<sup>Optional</sup> <a name="log_group_name_input" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.logGroupNameInput"></a>

```python
log_group_name_input: str
```

- *Type:* str

---

##### `metric_transformations_input`<sup>Optional</sup> <a name="metric_transformations_input" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.metricTransformationsInput"></a>

```python
metric_transformations_input: IResolvable | typing.List[LogsMetricFilterMetricTransformations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>]

---

##### `apply_on_transformed_logs`<sup>Required</sup> <a name="apply_on_transformed_logs" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.applyOnTransformedLogs"></a>

```python
apply_on_transformed_logs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `emit_system_field_dimensions`<sup>Required</sup> <a name="emit_system_field_dimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.emitSystemFieldDimensions"></a>

```python
emit_system_field_dimensions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field_selection_criteria`<sup>Required</sup> <a name="field_selection_criteria" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fieldSelectionCriteria"></a>

```python
field_selection_criteria: str
```

- *Type:* str

---

##### `filter_name`<sup>Required</sup> <a name="filter_name" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterName"></a>

```python
filter_name: str
```

- *Type:* str

---

##### `filter_pattern`<sup>Required</sup> <a name="filter_pattern" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterPattern"></a>

```python
filter_pattern: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogsMetricFilterConfig <a name="LogsMetricFilterConfig" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import logs_metric_filter

logsMetricFilter.LogsMetricFilterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter_pattern: str,
  log_group_name: str,
  metric_transformations: IResolvable | typing.List[LogsMetricFilterMetricTransformations],
  apply_on_transformed_logs: bool | IResolvable = None,
  emit_system_field_dimensions: typing.List[str] = None,
  field_selection_criteria: str = None,
  filter_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.filterPattern">filter_pattern</a></code> | <code>str</code> | A filter pattern for extracting metric data out of ingested log events. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.logGroupName">log_group_name</a></code> | <code>str</code> | The name of an existing log group that you want to associate with this metric filter. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.metricTransformations">metric_transformations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>]</code> | The metric transformations. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.applyOnTransformedLogs">apply_on_transformed_logs</a></code> | <code>bool \| cdktn.IResolvable</code> | This parameter is valid only for log groups that have an active log transformer. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.emitSystemFieldDimensions">emit_system_field_dimensions</a></code> | <code>typing.List[str]</code> | The list of system fields that are emitted as additional dimensions in the generated metrics. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.fieldSelectionCriteria">field_selection_criteria</a></code> | <code>str</code> | The filter expression that specifies which log events are processed by this metric filter based on system fields. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.filterName">filter_name</a></code> | <code>str</code> | The name of the metric filter. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter_pattern`<sup>Required</sup> <a name="filter_pattern" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.filterPattern"></a>

```python
filter_pattern: str
```

- *Type:* str

A filter pattern for extracting metric data out of ingested log events.

For more information, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#filter_pattern LogsMetricFilter#filter_pattern}

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

The name of an existing log group that you want to associate with this metric filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#log_group_name LogsMetricFilter#log_group_name}

---

##### `metric_transformations`<sup>Required</sup> <a name="metric_transformations" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.metricTransformations"></a>

```python
metric_transformations: IResolvable | typing.List[LogsMetricFilterMetricTransformations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>]

The metric transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#metric_transformations LogsMetricFilter#metric_transformations}

---

##### `apply_on_transformed_logs`<sup>Optional</sup> <a name="apply_on_transformed_logs" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.applyOnTransformedLogs"></a>

```python
apply_on_transformed_logs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

This parameter is valid only for log groups that have an active log transformer.

For more information about log transformers, see [PutTransformer](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html).
If this value is `true`, the metric filter is applied on the transformed version of the log events instead of the original ingested log events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#apply_on_transformed_logs LogsMetricFilter#apply_on_transformed_logs}

---

##### `emit_system_field_dimensions`<sup>Optional</sup> <a name="emit_system_field_dimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.emitSystemFieldDimensions"></a>

```python
emit_system_field_dimensions: typing.List[str]
```

- *Type:* typing.List[str]

The list of system fields that are emitted as additional dimensions in the generated metrics.

Returns the `emitSystemFieldDimensions` value if it was specified when the metric filter was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#emit_system_field_dimensions LogsMetricFilter#emit_system_field_dimensions}

---

##### `field_selection_criteria`<sup>Optional</sup> <a name="field_selection_criteria" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.fieldSelectionCriteria"></a>

```python
field_selection_criteria: str
```

- *Type:* str

The filter expression that specifies which log events are processed by this metric filter based on system fields.

Returns the `fieldSelectionCriteria` value if it was specified when the metric filter was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#field_selection_criteria LogsMetricFilter#field_selection_criteria}

---

##### `filter_name`<sup>Optional</sup> <a name="filter_name" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.filterName"></a>

```python
filter_name: str
```

- *Type:* str

The name of the metric filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#filter_name LogsMetricFilter#filter_name}

---

### LogsMetricFilterMetricTransformations <a name="LogsMetricFilterMetricTransformations" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.Initializer"></a>

```python
from cdktn_provider_awscc import logs_metric_filter

logsMetricFilter.LogsMetricFilterMetricTransformations(
  metric_name: str,
  metric_namespace: str,
  metric_value: str,
  default_value: typing.Union[int, float] = None,
  dimensions: IResolvable | typing.List[LogsMetricFilterMetricTransformationsDimensions] = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricName">metric_name</a></code> | <code>str</code> | The name of the CloudWatch metric. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricNamespace">metric_namespace</a></code> | <code>str</code> | A custom namespace to contain your metric in CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricValue">metric_value</a></code> | <code>str</code> | The value that is published to the CloudWatch metric. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.defaultValue">default_value</a></code> | <code>typing.Union[int, float]</code> | (Optional) The value to emit when a filter pattern does not match a log event. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.dimensions">dimensions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>]</code> | The fields to use as dimensions for the metric. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.unit">unit</a></code> | <code>str</code> | The unit to assign to the metric. If you omit this, the unit is set as ``None``. |

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

The name of the CloudWatch metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#metric_name LogsMetricFilter#metric_name}

---

##### `metric_namespace`<sup>Required</sup> <a name="metric_namespace" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricNamespace"></a>

```python
metric_namespace: str
```

- *Type:* str

A custom namespace to contain your metric in CloudWatch.

Use namespaces to group together metrics that are similar. For more information, see [Namespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#metric_namespace LogsMetricFilter#metric_namespace}

---

##### `metric_value`<sup>Required</sup> <a name="metric_value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricValue"></a>

```python
metric_value: str
```

- *Type:* str

The value that is published to the CloudWatch metric.

For example, if you're counting the occurrences of a particular term like `Error`, specify 1 for the metric value. If you're counting the number of bytes transferred, reference the value that is in the log event by using $. followed by the name of the field that you specified in the filter pattern, such as `$.size`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#metric_value LogsMetricFilter#metric_value}

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.defaultValue"></a>

```python
default_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Optional) The value to emit when a filter pattern does not match a log event.

This value can be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#default_value LogsMetricFilter#default_value}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.dimensions"></a>

```python
dimensions: IResolvable | typing.List[LogsMetricFilterMetricTransformationsDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>]

The fields to use as dimensions for the metric.

One metric filter can include as many as three dimensions.
Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as `IPAddress` or `requestID` as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric.
CloudWatch Logs disables a metric filter if it generates 1000 different name/value pairs for your specified dimensions within a certain amount of time. This helps to prevent accidental high charges.
You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see [Creating a Billing Alarm to Monitor Your Estimated Charges](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#dimensions LogsMetricFilter#dimensions}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.unit"></a>

```python
unit: str
```

- *Type:* str

The unit to assign to the metric. If you omit this, the unit is set as ``None``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#unit LogsMetricFilter#unit}

---

### LogsMetricFilterMetricTransformationsDimensions <a name="LogsMetricFilterMetricTransformationsDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.Initializer"></a>

```python
from cdktn_provider_awscc import logs_metric_filter

logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.property.key">key</a></code> | <code>str</code> | The name for the CW metric dimension that the metric filter creates. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.property.value">value</a></code> | <code>str</code> | The log event field that will contain the value for this dimension. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.property.key"></a>

```python
key: str
```

- *Type:* str

The name for the CW metric dimension that the metric filter creates.

Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#key LogsMetricFilter#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.property.value"></a>

```python
value: str
```

- *Type:* str

The log event field that will contain the value for this dimension.

This dimension will only be published for a metric if the value is found in the log event. For example, `$.eventType` for JSON log events, or `$server` for space-delimited log events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_metric_filter#value LogsMetricFilter#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsMetricFilterMetricTransformationsDimensionsList <a name="LogsMetricFilterMetricTransformationsDimensionsList" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer"></a>

```python
from cdktn_provider_awscc import logs_metric_filter

logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogsMetricFilterMetricTransformationsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LogsMetricFilterMetricTransformationsDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>]

---


### LogsMetricFilterMetricTransformationsDimensionsOutputReference <a name="LogsMetricFilterMetricTransformationsDimensionsOutputReference" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import logs_metric_filter

logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LogsMetricFilterMetricTransformationsDimensions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>

---


### LogsMetricFilterMetricTransformationsList <a name="LogsMetricFilterMetricTransformationsList" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer"></a>

```python
from cdktn_provider_awscc import logs_metric_filter

logsMetricFilter.LogsMetricFilterMetricTransformationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogsMetricFilterMetricTransformationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LogsMetricFilterMetricTransformations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>]

---


### LogsMetricFilterMetricTransformationsOutputReference <a name="LogsMetricFilterMetricTransformationsOutputReference" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import logs_metric_filter

logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimensions` <a name="put_dimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.putDimensions"></a>

```python
def put_dimensions(
  value: IResolvable | typing.List[LogsMetricFilterMetricTransformationsDimensions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.putDimensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>]

---

##### `reset_default_value` <a name="reset_default_value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList">LogsMetricFilterMetricTransformationsDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNamespaceInput">metric_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricValueInput">metric_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.defaultValue">default_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNamespace">metric_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricValue">metric_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.dimensions"></a>

```python
dimensions: LogsMetricFilterMetricTransformationsDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList">LogsMetricFilterMetricTransformationsDimensionsList</a>

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.defaultValueInput"></a>

```python
default_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: IResolvable | typing.List[LogsMetricFilterMetricTransformationsDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `metric_namespace_input`<sup>Optional</sup> <a name="metric_namespace_input" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNamespaceInput"></a>

```python
metric_namespace_input: str
```

- *Type:* str

---

##### `metric_value_input`<sup>Optional</sup> <a name="metric_value_input" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricValueInput"></a>

```python
metric_value_input: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.defaultValue"></a>

```python
default_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `metric_namespace`<sup>Required</sup> <a name="metric_namespace" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNamespace"></a>

```python
metric_namespace: str
```

- *Type:* str

---

##### `metric_value`<sup>Required</sup> <a name="metric_value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricValue"></a>

```python
metric_value: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LogsMetricFilterMetricTransformations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>

---



