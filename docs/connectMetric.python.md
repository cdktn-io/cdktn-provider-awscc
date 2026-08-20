# `connectMetric` Submodule <a name="`connectMetric` Submodule" id="@cdktn/provider-awscc.connectMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectMetric <a name="ConnectMetric" id="@cdktn/provider-awscc.connectMetric.ConnectMetric"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric awscc_connect_metric}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetric(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_arn: str,
  description: str = None,
  metric_calculation: ConnectMetricMetricCalculation = None,
  name: str = None,
  positive_trend_indicator: str = None,
  status: str = None,
  tags: IResolvable | typing.List[ConnectMetricTags] = None,
  unit: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the custom metric. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.metricCalculation">metric_calculation</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation">ConnectMetricMetricCalculation</a></code> | The calculation configuration for the metric. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the custom metric. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.positiveTrendIndicator">positive_trend_indicator</a></code> | <code>str</code> | Indicates how to classify a positive trend in metric data on the UI. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.status">status</a></code> | <code>str</code> | The status of the custom metric. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags">ConnectMetricTags</a>]</code> | One or more tags. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.unit">unit</a></code> | <code>str</code> | Display unit for the metric data. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.instanceArn"></a>

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#instance_arn ConnectMetric#instance_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.description"></a>

- *Type:* str

The description of the custom metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#description ConnectMetric#description}

---

##### `metric_calculation`<sup>Optional</sup> <a name="metric_calculation" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.metricCalculation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation">ConnectMetricMetricCalculation</a>

The calculation configuration for the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#metric_calculation ConnectMetric#metric_calculation}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.name"></a>

- *Type:* str

The name of the custom metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#name ConnectMetric#name}

---

##### `positive_trend_indicator`<sup>Optional</sup> <a name="positive_trend_indicator" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.positiveTrendIndicator"></a>

- *Type:* str

Indicates how to classify a positive trend in metric data on the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#positive_trend_indicator ConnectMetric#positive_trend_indicator}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.status"></a>

- *Type:* str

The status of the custom metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#status ConnectMetric#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags">ConnectMetricTags</a>]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#tags ConnectMetric#tags}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.unit"></a>

- *Type:* str

Display unit for the metric data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#unit ConnectMetric#unit}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.putMetricCalculation">put_metric_calculation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.resetMetricCalculation">reset_metric_calculation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.resetPositiveTrendIndicator">reset_positive_trend_indicator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metric_calculation` <a name="put_metric_calculation" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.putMetricCalculation"></a>

```python
def put_metric_calculation(
  calculation: str = None,
  calculation_components: IResolvable | typing.List[ConnectMetricMetricCalculationCalculationComponents] = None
) -> None
```

###### `calculation`<sup>Optional</sup> <a name="calculation" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.putMetricCalculation.parameter.calculation"></a>

- *Type:* str

The calculation formula.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#calculation ConnectMetric#calculation}

---

###### `calculation_components`<sup>Optional</sup> <a name="calculation_components" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.putMetricCalculation.parameter.calculationComponents"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents">ConnectMetricMetricCalculationCalculationComponents</a>]

The calculation components for the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#calculation_components ConnectMetric#calculation_components}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ConnectMetricTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags">ConnectMetricTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_metric_calculation` <a name="reset_metric_calculation" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.resetMetricCalculation"></a>

```python
def reset_metric_calculation() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_positive_trend_indicator` <a name="reset_positive_trend_indicator" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.resetPositiveTrendIndicator"></a>

```python
def reset_positive_trend_indicator() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.resetUnit"></a>

```python
def reset_unit() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConnectMetric resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.isConstruct"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetric.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.isTerraformElement"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetric.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.isTerraformResource"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetric.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetric.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConnectMetric resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConnectMetric to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConnectMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.createdTime">created_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.createdUser">created_user</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference">ConnectMetricCreatedUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.creationMethod">creation_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.effectiveTime">effective_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList">ConnectMetricFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.groupings">groupings</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.lastModifiedRegion">last_modified_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.lastModifiedTime">last_modified_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.lastModifiedUser">last_modified_user</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference">ConnectMetricLastModifiedUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.metricArn">metric_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.metricCalculation">metric_calculation</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference">ConnectMetricMetricCalculationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.primaryEventSource">primary_event_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.primaryEventSourceEffectiveTimestampType">primary_event_source_effective_timestamp_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.refreshRate">refresh_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.supportedStats">supported_stats</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.supportsCustomCalculation">supports_custom_calculation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.supportsPreaggregateCalculation">supports_preaggregate_calculation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList">ConnectMetricTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.metricCalculationInput">metric_calculation_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation">ConnectMetricMetricCalculation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.positiveTrendIndicatorInput">positive_trend_indicator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags">ConnectMetricTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.positiveTrendIndicator">positive_trend_indicator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.unit">unit</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.createdTime"></a>

```python
created_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_user`<sup>Required</sup> <a name="created_user" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.createdUser"></a>

```python
created_user: ConnectMetricCreatedUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference">ConnectMetricCreatedUserOutputReference</a>

---

##### `creation_method`<sup>Required</sup> <a name="creation_method" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.creationMethod"></a>

```python
creation_method: str
```

- *Type:* str

---

##### `effective_time`<sup>Required</sup> <a name="effective_time" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.effectiveTime"></a>

```python
effective_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.filters"></a>

```python
filters: ConnectMetricFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList">ConnectMetricFiltersList</a>

---

##### `groupings`<sup>Required</sup> <a name="groupings" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.groupings"></a>

```python
groupings: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_region`<sup>Required</sup> <a name="last_modified_region" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.lastModifiedRegion"></a>

```python
last_modified_region: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.lastModifiedTime"></a>

```python
last_modified_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_modified_user`<sup>Required</sup> <a name="last_modified_user" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.lastModifiedUser"></a>

```python
last_modified_user: ConnectMetricLastModifiedUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference">ConnectMetricLastModifiedUserOutputReference</a>

---

##### `metric_arn`<sup>Required</sup> <a name="metric_arn" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.metricArn"></a>

```python
metric_arn: str
```

- *Type:* str

---

##### `metric_calculation`<sup>Required</sup> <a name="metric_calculation" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.metricCalculation"></a>

```python
metric_calculation: ConnectMetricMetricCalculationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference">ConnectMetricMetricCalculationOutputReference</a>

---

##### `primary_event_source`<sup>Required</sup> <a name="primary_event_source" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.primaryEventSource"></a>

```python
primary_event_source: str
```

- *Type:* str

---

##### `primary_event_source_effective_timestamp_type`<sup>Required</sup> <a name="primary_event_source_effective_timestamp_type" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.primaryEventSourceEffectiveTimestampType"></a>

```python
primary_event_source_effective_timestamp_type: str
```

- *Type:* str

---

##### `refresh_rate`<sup>Required</sup> <a name="refresh_rate" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.refreshRate"></a>

```python
refresh_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `supported_stats`<sup>Required</sup> <a name="supported_stats" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.supportedStats"></a>

```python
supported_stats: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supports_custom_calculation`<sup>Required</sup> <a name="supports_custom_calculation" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.supportsCustomCalculation"></a>

```python
supports_custom_calculation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `supports_preaggregate_calculation`<sup>Required</sup> <a name="supports_preaggregate_calculation" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.supportsPreaggregateCalculation"></a>

```python
supports_preaggregate_calculation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.tags"></a>

```python
tags: ConnectMetricTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList">ConnectMetricTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `metric_calculation_input`<sup>Optional</sup> <a name="metric_calculation_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.metricCalculationInput"></a>

```python
metric_calculation_input: IResolvable | ConnectMetricMetricCalculation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation">ConnectMetricMetricCalculation</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `positive_trend_indicator_input`<sup>Optional</sup> <a name="positive_trend_indicator_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.positiveTrendIndicatorInput"></a>

```python
positive_trend_indicator_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ConnectMetricTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags">ConnectMetricTags</a>]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `positive_trend_indicator`<sup>Required</sup> <a name="positive_trend_indicator" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.positiveTrendIndicator"></a>

```python
positive_trend_indicator: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectMetricConfig <a name="ConnectMetricConfig" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_arn: str,
  description: str = None,
  metric_calculation: ConnectMetricMetricCalculation = None,
  name: str = None,
  positive_trend_indicator: str = None,
  status: str = None,
  tags: IResolvable | typing.List[ConnectMetricTags] = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.description">description</a></code> | <code>str</code> | The description of the custom metric. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.metricCalculation">metric_calculation</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation">ConnectMetricMetricCalculation</a></code> | The calculation configuration for the metric. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.name">name</a></code> | <code>str</code> | The name of the custom metric. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.positiveTrendIndicator">positive_trend_indicator</a></code> | <code>str</code> | Indicates how to classify a positive trend in metric data on the UI. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.status">status</a></code> | <code>str</code> | The status of the custom metric. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags">ConnectMetricTags</a>]</code> | One or more tags. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.unit">unit</a></code> | <code>str</code> | Display unit for the metric data. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#instance_arn ConnectMetric#instance_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the custom metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#description ConnectMetric#description}

---

##### `metric_calculation`<sup>Optional</sup> <a name="metric_calculation" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.metricCalculation"></a>

```python
metric_calculation: ConnectMetricMetricCalculation
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation">ConnectMetricMetricCalculation</a>

The calculation configuration for the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#metric_calculation ConnectMetric#metric_calculation}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the custom metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#name ConnectMetric#name}

---

##### `positive_trend_indicator`<sup>Optional</sup> <a name="positive_trend_indicator" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.positiveTrendIndicator"></a>

```python
positive_trend_indicator: str
```

- *Type:* str

Indicates how to classify a positive trend in metric data on the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#positive_trend_indicator ConnectMetric#positive_trend_indicator}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.status"></a>

```python
status: str
```

- *Type:* str

The status of the custom metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#status ConnectMetric#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ConnectMetricTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags">ConnectMetricTags</a>]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#tags ConnectMetric#tags}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.unit"></a>

```python
unit: str
```

- *Type:* str

Display unit for the metric data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#unit ConnectMetric#unit}

---

### ConnectMetricCreatedUser <a name="ConnectMetricCreatedUser" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUser.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricCreatedUser()
```


### ConnectMetricFilters <a name="ConnectMetricFilters" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFilters.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricFilters()
```


### ConnectMetricLastModifiedUser <a name="ConnectMetricLastModifiedUser" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUser.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricLastModifiedUser()
```


### ConnectMetricMetricCalculation <a name="ConnectMetricMetricCalculation" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricMetricCalculation(
  calculation: str = None,
  calculation_components: IResolvable | typing.List[ConnectMetricMetricCalculationCalculationComponents] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation.property.calculation">calculation</a></code> | <code>str</code> | The calculation formula. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation.property.calculationComponents">calculation_components</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents">ConnectMetricMetricCalculationCalculationComponents</a>]</code> | The calculation components for the metric. |

---

##### `calculation`<sup>Optional</sup> <a name="calculation" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation.property.calculation"></a>

```python
calculation: str
```

- *Type:* str

The calculation formula.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#calculation ConnectMetric#calculation}

---

##### `calculation_components`<sup>Optional</sup> <a name="calculation_components" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation.property.calculationComponents"></a>

```python
calculation_components: IResolvable | typing.List[ConnectMetricMetricCalculationCalculationComponents]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents">ConnectMetricMetricCalculationCalculationComponents</a>]

The calculation components for the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#calculation_components ConnectMetric#calculation_components}

---

### ConnectMetricMetricCalculationCalculationComponents <a name="ConnectMetricMetricCalculationCalculationComponents" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricMetricCalculationCalculationComponents(
  alias: str = None,
  metric_filters: IResolvable | typing.List[ConnectMetricMetricCalculationCalculationComponentsMetricFilters] = None,
  metric_id: str = None,
  metric_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents.property.alias">alias</a></code> | <code>str</code> | Metric calculation component alias for use within a calculation. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents.property.metricFilters">metric_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters">ConnectMetricMetricCalculationCalculationComponentsMetricFilters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#metric_filters ConnectMetric#metric_filters}. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents.property.metricId">metric_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#metric_id ConnectMetric#metric_id}. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#metric_name ConnectMetric#metric_name}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents.property.alias"></a>

```python
alias: str
```

- *Type:* str

Metric calculation component alias for use within a calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#alias ConnectMetric#alias}

---

##### `metric_filters`<sup>Optional</sup> <a name="metric_filters" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents.property.metricFilters"></a>

```python
metric_filters: IResolvable | typing.List[ConnectMetricMetricCalculationCalculationComponentsMetricFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters">ConnectMetricMetricCalculationCalculationComponentsMetricFilters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#metric_filters ConnectMetric#metric_filters}.

---

##### `metric_id`<sup>Optional</sup> <a name="metric_id" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents.property.metricId"></a>

```python
metric_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#metric_id ConnectMetric#metric_id}.

---

##### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#metric_name ConnectMetric#metric_name}.

---

### ConnectMetricMetricCalculationCalculationComponentsMetricFilters <a name="ConnectMetricMetricCalculationCalculationComponentsMetricFilters" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters(
  boolean_condition: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition = None,
  metric_filter_key: str = None,
  negate: bool | IResolvable = None,
  number_condition: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition = None,
  string_condition: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters.property.booleanCondition">boolean_condition</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#boolean_condition ConnectMetric#boolean_condition}. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters.property.metricFilterKey">metric_filter_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#metric_filter_key ConnectMetric#metric_filter_key}. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters.property.negate">negate</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#negate ConnectMetric#negate}. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters.property.numberCondition">number_condition</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#number_condition ConnectMetric#number_condition}. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters.property.stringCondition">string_condition</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#string_condition ConnectMetric#string_condition}. |

---

##### `boolean_condition`<sup>Optional</sup> <a name="boolean_condition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters.property.booleanCondition"></a>

```python
boolean_condition: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#boolean_condition ConnectMetric#boolean_condition}.

---

##### `metric_filter_key`<sup>Optional</sup> <a name="metric_filter_key" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters.property.metricFilterKey"></a>

```python
metric_filter_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#metric_filter_key ConnectMetric#metric_filter_key}.

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters.property.negate"></a>

```python
negate: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#negate ConnectMetric#negate}.

---

##### `number_condition`<sup>Optional</sup> <a name="number_condition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters.property.numberCondition"></a>

```python
number_condition: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#number_condition ConnectMetric#number_condition}.

---

##### `string_condition`<sup>Optional</sup> <a name="string_condition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters.property.stringCondition"></a>

```python
string_condition: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#string_condition ConnectMetric#string_condition}.

---

### ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition <a name="ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition(
  comparison: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition.property.comparison">comparison</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#comparison ConnectMetric#comparison}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#comparison ConnectMetric#comparison}.

---

### ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition <a name="ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition(
  comparison: str = None,
  values: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition.property.comparison">comparison</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#comparison ConnectMetric#comparison}. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#values ConnectMetric#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#comparison ConnectMetric#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#values ConnectMetric#values}.

---

### ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition <a name="ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition(
  comparison: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition.property.comparison">comparison</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#comparison ConnectMetric#comparison}. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#values ConnectMetric#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#comparison ConnectMetric#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#values ConnectMetric#values}.

---

### ConnectMetricTags <a name="ConnectMetricTags" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTags.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#key ConnectMetric#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#value ConnectMetric#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectMetricCreatedUserOutputReference <a name="ConnectMetricCreatedUserOutputReference" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricCreatedUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.property.awsIdentityArn">aws_identity_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.property.connectUserArn">connect_user_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUser">ConnectMetricCreatedUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_identity_arn`<sup>Required</sup> <a name="aws_identity_arn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.property.awsIdentityArn"></a>

```python
aws_identity_arn: str
```

- *Type:* str

---

##### `connect_user_arn`<sup>Required</sup> <a name="connect_user_arn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.property.connectUserArn"></a>

```python
connect_user_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.property.internalValue"></a>

```python
internal_value: ConnectMetricCreatedUser
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUser">ConnectMetricCreatedUser</a>

---


### ConnectMetricFiltersList <a name="ConnectMetricFiltersList" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectMetricFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ConnectMetricFiltersOutputReference <a name="ConnectMetricFiltersOutputReference" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFilters">ConnectMetricFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.property.internalValue"></a>

```python
internal_value: ConnectMetricFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFilters">ConnectMetricFilters</a>

---


### ConnectMetricLastModifiedUserOutputReference <a name="ConnectMetricLastModifiedUserOutputReference" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricLastModifiedUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.property.awsIdentityArn">aws_identity_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.property.connectUserArn">connect_user_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUser">ConnectMetricLastModifiedUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_identity_arn`<sup>Required</sup> <a name="aws_identity_arn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.property.awsIdentityArn"></a>

```python
aws_identity_arn: str
```

- *Type:* str

---

##### `connect_user_arn`<sup>Required</sup> <a name="connect_user_arn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.property.connectUserArn"></a>

```python
connect_user_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.property.internalValue"></a>

```python
internal_value: ConnectMetricLastModifiedUser
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUser">ConnectMetricLastModifiedUser</a>

---


### ConnectMetricMetricCalculationCalculationComponentsList <a name="ConnectMetricMetricCalculationCalculationComponentsList" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricMetricCalculationCalculationComponentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectMetricMetricCalculationCalculationComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents">ConnectMetricMetricCalculationCalculationComponents</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectMetricMetricCalculationCalculationComponents]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents">ConnectMetricMetricCalculationCalculationComponents</a>]

---


### ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference <a name="ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.resetComparison">reset_comparison</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comparison` <a name="reset_comparison" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.resetComparison"></a>

```python
def reset_comparison() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.comparisonInput">comparison_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.comparison">comparison</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_input`<sup>Optional</sup> <a name="comparison_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.comparisonInput"></a>

```python
comparison_input: str
```

- *Type:* str

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition</a>

---


### ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList <a name="ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters">ConnectMetricMetricCalculationCalculationComponentsMetricFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectMetricMetricCalculationCalculationComponentsMetricFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters">ConnectMetricMetricCalculationCalculationComponentsMetricFilters</a>]

---


### ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference <a name="ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resetComparison">reset_comparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comparison` <a name="reset_comparison" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resetComparison"></a>

```python
def reset_comparison() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.comparisonInput">comparison_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.comparison">comparison</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_input`<sup>Optional</sup> <a name="comparison_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.comparisonInput"></a>

```python
comparison_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition</a>

---


### ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference <a name="ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.putBooleanCondition">put_boolean_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.putNumberCondition">put_number_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.putStringCondition">put_string_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resetBooleanCondition">reset_boolean_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resetMetricFilterKey">reset_metric_filter_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resetNegate">reset_negate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resetNumberCondition">reset_number_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resetStringCondition">reset_string_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_boolean_condition` <a name="put_boolean_condition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.putBooleanCondition"></a>

```python
def put_boolean_condition(
  comparison: str = None
) -> None
```

###### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.putBooleanCondition.parameter.comparison"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#comparison ConnectMetric#comparison}.

---

##### `put_number_condition` <a name="put_number_condition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.putNumberCondition"></a>

```python
def put_number_condition(
  comparison: str = None,
  values: typing.List[typing.Union[int, float]] = None
) -> None
```

###### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.putNumberCondition.parameter.comparison"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#comparison ConnectMetric#comparison}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.putNumberCondition.parameter.values"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#values ConnectMetric#values}.

---

##### `put_string_condition` <a name="put_string_condition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.putStringCondition"></a>

```python
def put_string_condition(
  comparison: str = None,
  values: typing.List[str] = None
) -> None
```

###### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.putStringCondition.parameter.comparison"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#comparison ConnectMetric#comparison}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.putStringCondition.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_metric#values ConnectMetric#values}.

---

##### `reset_boolean_condition` <a name="reset_boolean_condition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resetBooleanCondition"></a>

```python
def reset_boolean_condition() -> None
```

##### `reset_metric_filter_key` <a name="reset_metric_filter_key" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resetMetricFilterKey"></a>

```python
def reset_metric_filter_key() -> None
```

##### `reset_negate` <a name="reset_negate" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resetNegate"></a>

```python
def reset_negate() -> None
```

##### `reset_number_condition` <a name="reset_number_condition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resetNumberCondition"></a>

```python
def reset_number_condition() -> None
```

##### `reset_string_condition` <a name="reset_string_condition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resetStringCondition"></a>

```python
def reset_string_condition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.booleanCondition">boolean_condition</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.numberCondition">number_condition</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.stringCondition">string_condition</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.booleanConditionInput">boolean_condition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.metricFilterKeyInput">metric_filter_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.negateInput">negate_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.numberConditionInput">number_condition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.stringConditionInput">string_condition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.metricFilterKey">metric_filter_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.negate">negate</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters">ConnectMetricMetricCalculationCalculationComponentsMetricFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_condition`<sup>Required</sup> <a name="boolean_condition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.booleanCondition"></a>

```python
boolean_condition: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference</a>

---

##### `number_condition`<sup>Required</sup> <a name="number_condition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.numberCondition"></a>

```python
number_condition: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference</a>

---

##### `string_condition`<sup>Required</sup> <a name="string_condition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.stringCondition"></a>

```python
string_condition: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference</a>

---

##### `boolean_condition_input`<sup>Optional</sup> <a name="boolean_condition_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.booleanConditionInput"></a>

```python
boolean_condition_input: IResolvable | ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition</a>

---

##### `metric_filter_key_input`<sup>Optional</sup> <a name="metric_filter_key_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.metricFilterKeyInput"></a>

```python
metric_filter_key_input: str
```

- *Type:* str

---

##### `negate_input`<sup>Optional</sup> <a name="negate_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.negateInput"></a>

```python
negate_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_condition_input`<sup>Optional</sup> <a name="number_condition_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.numberConditionInput"></a>

```python
number_condition_input: IResolvable | ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition</a>

---

##### `string_condition_input`<sup>Optional</sup> <a name="string_condition_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.stringConditionInput"></a>

```python
string_condition_input: IResolvable | ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition</a>

---

##### `metric_filter_key`<sup>Required</sup> <a name="metric_filter_key" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.metricFilterKey"></a>

```python
metric_filter_key: str
```

- *Type:* str

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.negate"></a>

```python
negate: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectMetricMetricCalculationCalculationComponentsMetricFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters">ConnectMetricMetricCalculationCalculationComponentsMetricFilters</a>

---


### ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference <a name="ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resetComparison">reset_comparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comparison` <a name="reset_comparison" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resetComparison"></a>

```python
def reset_comparison() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.comparisonInput">comparison_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.comparison">comparison</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_input`<sup>Optional</sup> <a name="comparison_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.comparisonInput"></a>

```python
comparison_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition</a>

---


### ConnectMetricMetricCalculationCalculationComponentsOutputReference <a name="ConnectMetricMetricCalculationCalculationComponentsOutputReference" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.putMetricFilters">put_metric_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.resetMetricFilters">reset_metric_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.resetMetricId">reset_metric_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.resetMetricName">reset_metric_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric_filters` <a name="put_metric_filters" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.putMetricFilters"></a>

```python
def put_metric_filters(
  value: IResolvable | typing.List[ConnectMetricMetricCalculationCalculationComponentsMetricFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.putMetricFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters">ConnectMetricMetricCalculationCalculationComponentsMetricFilters</a>]

---

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_metric_filters` <a name="reset_metric_filters" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.resetMetricFilters"></a>

```python
def reset_metric_filters() -> None
```

##### `reset_metric_id` <a name="reset_metric_id" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.resetMetricId"></a>

```python
def reset_metric_id() -> None
```

##### `reset_metric_name` <a name="reset_metric_name" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.resetMetricName"></a>

```python
def reset_metric_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricFilters">metric_filters</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricFiltersInput">metric_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters">ConnectMetricMetricCalculationCalculationComponentsMetricFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricIdInput">metric_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricId">metric_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents">ConnectMetricMetricCalculationCalculationComponents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_filters`<sup>Required</sup> <a name="metric_filters" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricFilters"></a>

```python
metric_filters: ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList</a>

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `metric_filters_input`<sup>Optional</sup> <a name="metric_filters_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricFiltersInput"></a>

```python
metric_filters_input: IResolvable | typing.List[ConnectMetricMetricCalculationCalculationComponentsMetricFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters">ConnectMetricMetricCalculationCalculationComponentsMetricFilters</a>]

---

##### `metric_id_input`<sup>Optional</sup> <a name="metric_id_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricIdInput"></a>

```python
metric_id_input: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `metric_id`<sup>Required</sup> <a name="metric_id" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricId"></a>

```python
metric_id: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectMetricMetricCalculationCalculationComponents
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents">ConnectMetricMetricCalculationCalculationComponents</a>

---


### ConnectMetricMetricCalculationOutputReference <a name="ConnectMetricMetricCalculationOutputReference" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricMetricCalculationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.putCalculationComponents">put_calculation_components</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.resetCalculation">reset_calculation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.resetCalculationComponents">reset_calculation_components</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_calculation_components` <a name="put_calculation_components" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.putCalculationComponents"></a>

```python
def put_calculation_components(
  value: IResolvable | typing.List[ConnectMetricMetricCalculationCalculationComponents]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.putCalculationComponents.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents">ConnectMetricMetricCalculationCalculationComponents</a>]

---

##### `reset_calculation` <a name="reset_calculation" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.resetCalculation"></a>

```python
def reset_calculation() -> None
```

##### `reset_calculation_components` <a name="reset_calculation_components" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.resetCalculationComponents"></a>

```python
def reset_calculation_components() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.calculationComponents">calculation_components</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList">ConnectMetricMetricCalculationCalculationComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.calculationComponentsInput">calculation_components_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents">ConnectMetricMetricCalculationCalculationComponents</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.calculationInput">calculation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.calculation">calculation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation">ConnectMetricMetricCalculation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `calculation_components`<sup>Required</sup> <a name="calculation_components" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.calculationComponents"></a>

```python
calculation_components: ConnectMetricMetricCalculationCalculationComponentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList">ConnectMetricMetricCalculationCalculationComponentsList</a>

---

##### `calculation_components_input`<sup>Optional</sup> <a name="calculation_components_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.calculationComponentsInput"></a>

```python
calculation_components_input: IResolvable | typing.List[ConnectMetricMetricCalculationCalculationComponents]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents">ConnectMetricMetricCalculationCalculationComponents</a>]

---

##### `calculation_input`<sup>Optional</sup> <a name="calculation_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.calculationInput"></a>

```python
calculation_input: str
```

- *Type:* str

---

##### `calculation`<sup>Required</sup> <a name="calculation" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.calculation"></a>

```python
calculation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectMetricMetricCalculation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation">ConnectMetricMetricCalculation</a>

---


### ConnectMetricTagsList <a name="ConnectMetricTagsList" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectMetricTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags">ConnectMetricTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectMetricTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags">ConnectMetricTags</a>]

---


### ConnectMetricTagsOutputReference <a name="ConnectMetricTagsOutputReference" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_metric

connectMetric.ConnectMetricTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags">ConnectMetricTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectMetricTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags">ConnectMetricTags</a>

---



