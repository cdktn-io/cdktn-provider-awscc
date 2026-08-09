# `iotFleetMetric` Submodule <a name="`iotFleetMetric` Submodule" id="@cdktn/provider-awscc.iotFleetMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotFleetMetric <a name="IotFleetMetric" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric awscc_iot_fleet_metric}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer"></a>

```python
from cdktn_provider_awscc import iot_fleet_metric

iotFleetMetric.IotFleetMetric(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  metric_name: str,
  aggregation_field: str = None,
  aggregation_type: IotFleetMetricAggregationType = None,
  description: str = None,
  index_name: str = None,
  period: typing.Union[int, float] = None,
  query_string: str = None,
  query_version: str = None,
  tags: IResolvable | typing.List[IotFleetMetricTags] = None,
  unit: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.metricName">metric_name</a></code> | <code>str</code> | The name of the fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.aggregationField">aggregation_field</a></code> | <code>str</code> | The aggregation field to perform aggregation and metric emission. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.aggregationType">aggregation_type</a></code> | <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a></code> | Aggregation types supported by Fleet Indexing. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.indexName">index_name</a></code> | <code>str</code> | The index name of a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.period">period</a></code> | <code>typing.Union[int, float]</code> | The period of metric emission in seconds. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.queryString">query_string</a></code> | <code>str</code> | The Fleet Indexing query used by a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.queryVersion">query_version</a></code> | <code>str</code> | The version of a Fleet Indexing query used by a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.unit">unit</a></code> | <code>str</code> | The unit of data points emitted by a fleet metric. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.metricName"></a>

- *Type:* str

The name of the fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#metric_name IotFleetMetric#metric_name}

---

##### `aggregation_field`<sup>Optional</sup> <a name="aggregation_field" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.aggregationField"></a>

- *Type:* str

The aggregation field to perform aggregation and metric emission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#aggregation_field IotFleetMetric#aggregation_field}

---

##### `aggregation_type`<sup>Optional</sup> <a name="aggregation_type" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.aggregationType"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a>

Aggregation types supported by Fleet Indexing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#aggregation_type IotFleetMetric#aggregation_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.description"></a>

- *Type:* str

The description of a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#description IotFleetMetric#description}

---

##### `index_name`<sup>Optional</sup> <a name="index_name" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.indexName"></a>

- *Type:* str

The index name of a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#index_name IotFleetMetric#index_name}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.period"></a>

- *Type:* typing.Union[int, float]

The period of metric emission in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#period IotFleetMetric#period}

---

##### `query_string`<sup>Optional</sup> <a name="query_string" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.queryString"></a>

- *Type:* str

The Fleet Indexing query used by a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#query_string IotFleetMetric#query_string}

---

##### `query_version`<sup>Optional</sup> <a name="query_version" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.queryVersion"></a>

- *Type:* str

The version of a Fleet Indexing query used by a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#query_version IotFleetMetric#query_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#tags IotFleetMetric#tags}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.Initializer.parameter.unit"></a>

- *Type:* str

The unit of data points emitted by a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#unit IotFleetMetric#unit}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putAggregationType">put_aggregation_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetAggregationField">reset_aggregation_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetAggregationType">reset_aggregation_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetIndexName">reset_index_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetQueryString">reset_query_string</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetQueryVersion">reset_query_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aggregation_type` <a name="put_aggregation_type" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putAggregationType"></a>

```python
def put_aggregation_type(
  name: str = None,
  values: typing.List[str] = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putAggregationType.parameter.name"></a>

- *Type:* str

Fleet Indexing aggregation type names such as Statistics, Percentiles and Cardinality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#name IotFleetMetric#name}

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putAggregationType.parameter.values"></a>

- *Type:* typing.List[str]

Fleet Indexing aggregation type values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#values IotFleetMetric#values}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotFleetMetricTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>]

---

##### `reset_aggregation_field` <a name="reset_aggregation_field" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetAggregationField"></a>

```python
def reset_aggregation_field() -> None
```

##### `reset_aggregation_type` <a name="reset_aggregation_type" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetAggregationType"></a>

```python
def reset_aggregation_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_index_name` <a name="reset_index_name" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetIndexName"></a>

```python
def reset_index_name() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_query_string` <a name="reset_query_string" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetQueryString"></a>

```python
def reset_query_string() -> None
```

##### `reset_query_version` <a name="reset_query_version" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetQueryVersion"></a>

```python
def reset_query_version() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.resetUnit"></a>

```python
def reset_unit() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotFleetMetric resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isConstruct"></a>

```python
from cdktn_provider_awscc import iot_fleet_metric

iotFleetMetric.IotFleetMetric.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iot_fleet_metric

iotFleetMetric.IotFleetMetric.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iot_fleet_metric

iotFleetMetric.IotFleetMetric.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iot_fleet_metric

iotFleetMetric.IotFleetMetric.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotFleetMetric resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotFleetMetric to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotFleetMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotFleetMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationType">aggregation_type</a></code> | <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference">IotFleetMetricAggregationTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.lastModifiedDate">last_modified_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricArn">metric_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList">IotFleetMetricTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationFieldInput">aggregation_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationTypeInput">aggregation_type_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.indexNameInput">index_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryStringInput">query_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryVersionInput">query_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationField">aggregation_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.indexName">index_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryString">query_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryVersion">query_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.unit">unit</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aggregation_type`<sup>Required</sup> <a name="aggregation_type" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationType"></a>

```python
aggregation_type: IotFleetMetricAggregationTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference">IotFleetMetricAggregationTypeOutputReference</a>

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_date`<sup>Required</sup> <a name="last_modified_date" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.lastModifiedDate"></a>

```python
last_modified_date: str
```

- *Type:* str

---

##### `metric_arn`<sup>Required</sup> <a name="metric_arn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricArn"></a>

```python
metric_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tags"></a>

```python
tags: IotFleetMetricTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList">IotFleetMetricTagsList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aggregation_field_input`<sup>Optional</sup> <a name="aggregation_field_input" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationFieldInput"></a>

```python
aggregation_field_input: str
```

- *Type:* str

---

##### `aggregation_type_input`<sup>Optional</sup> <a name="aggregation_type_input" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationTypeInput"></a>

```python
aggregation_type_input: IResolvable | IotFleetMetricAggregationType
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `index_name_input`<sup>Optional</sup> <a name="index_name_input" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.indexNameInput"></a>

```python
index_name_input: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query_string_input`<sup>Optional</sup> <a name="query_string_input" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryStringInput"></a>

```python
query_string_input: str
```

- *Type:* str

---

##### `query_version_input`<sup>Optional</sup> <a name="query_version_input" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryVersionInput"></a>

```python
query_version_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotFleetMetricTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `aggregation_field`<sup>Required</sup> <a name="aggregation_field" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.aggregationField"></a>

```python
aggregation_field: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

---

##### `query_version`<sup>Required</sup> <a name="query_version" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.queryVersion"></a>

```python
query_version: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetric.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotFleetMetricAggregationType <a name="IotFleetMetricAggregationType" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType.Initializer"></a>

```python
from cdktn_provider_awscc import iot_fleet_metric

iotFleetMetric.IotFleetMetricAggregationType(
  name: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType.property.name">name</a></code> | <code>str</code> | Fleet Indexing aggregation type names such as Statistics, Percentiles and Cardinality. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType.property.values">values</a></code> | <code>typing.List[str]</code> | Fleet Indexing aggregation type values. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType.property.name"></a>

```python
name: str
```

- *Type:* str

Fleet Indexing aggregation type names such as Statistics, Percentiles and Cardinality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#name IotFleetMetric#name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Fleet Indexing aggregation type values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#values IotFleetMetric#values}

---

### IotFleetMetricConfig <a name="IotFleetMetricConfig" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_fleet_metric

iotFleetMetric.IotFleetMetricConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  metric_name: str,
  aggregation_field: str = None,
  aggregation_type: IotFleetMetricAggregationType = None,
  description: str = None,
  index_name: str = None,
  period: typing.Union[int, float] = None,
  query_string: str = None,
  query_version: str = None,
  tags: IResolvable | typing.List[IotFleetMetricTags] = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.metricName">metric_name</a></code> | <code>str</code> | The name of the fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.aggregationField">aggregation_field</a></code> | <code>str</code> | The aggregation field to perform aggregation and metric emission. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.aggregationType">aggregation_type</a></code> | <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a></code> | Aggregation types supported by Fleet Indexing. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.description">description</a></code> | <code>str</code> | The description of a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.indexName">index_name</a></code> | <code>str</code> | The index name of a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.period">period</a></code> | <code>typing.Union[int, float]</code> | The period of metric emission in seconds. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.queryString">query_string</a></code> | <code>str</code> | The Fleet Indexing query used by a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.queryVersion">query_version</a></code> | <code>str</code> | The version of a Fleet Indexing query used by a fleet metric. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.unit">unit</a></code> | <code>str</code> | The unit of data points emitted by a fleet metric. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

The name of the fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#metric_name IotFleetMetric#metric_name}

---

##### `aggregation_field`<sup>Optional</sup> <a name="aggregation_field" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.aggregationField"></a>

```python
aggregation_field: str
```

- *Type:* str

The aggregation field to perform aggregation and metric emission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#aggregation_field IotFleetMetric#aggregation_field}

---

##### `aggregation_type`<sup>Optional</sup> <a name="aggregation_type" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.aggregationType"></a>

```python
aggregation_type: IotFleetMetricAggregationType
```

- *Type:* <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a>

Aggregation types supported by Fleet Indexing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#aggregation_type IotFleetMetric#aggregation_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#description IotFleetMetric#description}

---

##### `index_name`<sup>Optional</sup> <a name="index_name" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

The index name of a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#index_name IotFleetMetric#index_name}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The period of metric emission in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#period IotFleetMetric#period}

---

##### `query_string`<sup>Optional</sup> <a name="query_string" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

The Fleet Indexing query used by a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#query_string IotFleetMetric#query_string}

---

##### `query_version`<sup>Optional</sup> <a name="query_version" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.queryVersion"></a>

```python
query_version: str
```

- *Type:* str

The version of a Fleet Indexing query used by a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#query_version IotFleetMetric#query_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotFleetMetricTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#tags IotFleetMetric#tags}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricConfig.property.unit"></a>

```python
unit: str
```

- *Type:* str

The unit of data points emitted by a fleet metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#unit IotFleetMetric#unit}

---

### IotFleetMetricTags <a name="IotFleetMetricTags" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags.Initializer"></a>

```python
from cdktn_provider_awscc import iot_fleet_metric

iotFleetMetric.IotFleetMetricTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags.property.key">key</a></code> | <code>str</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags.property.value">value</a></code> | <code>str</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#key IotFleetMetric#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_fleet_metric#value IotFleetMetric#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotFleetMetricAggregationTypeOutputReference <a name="IotFleetMetricAggregationTypeOutputReference" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_fleet_metric

iotFleetMetric.IotFleetMetricAggregationTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationTypeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotFleetMetricAggregationType
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricAggregationType">IotFleetMetricAggregationType</a>

---


### IotFleetMetricTagsList <a name="IotFleetMetricTagsList" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iot_fleet_metric

iotFleetMetric.IotFleetMetricTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotFleetMetricTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotFleetMetricTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>]

---


### IotFleetMetricTagsOutputReference <a name="IotFleetMetricTagsOutputReference" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_fleet_metric

iotFleetMetric.IotFleetMetricTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotFleetMetricTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotFleetMetric.IotFleetMetricTags">IotFleetMetricTags</a>

---



