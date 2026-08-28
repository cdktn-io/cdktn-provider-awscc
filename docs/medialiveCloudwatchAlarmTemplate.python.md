# `medialiveCloudwatchAlarmTemplate` Submodule <a name="`medialiveCloudwatchAlarmTemplate` Submodule" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveCloudwatchAlarmTemplate <a name="MedialiveCloudwatchAlarmTemplate" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template awscc_medialive_cloudwatch_alarm_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_cloudwatch_alarm_template

medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  comparison_operator: str,
  metric_name: str,
  name: str,
  statistic: str,
  target_resource_type: str,
  treat_missing_data: str,
  datapoints_to_alarm: typing.Union[int, float] = None,
  description: str = None,
  evaluation_periods: typing.Union[int, float] = None,
  group_identifier: str = None,
  period: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  threshold: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The comparison operator used to compare the specified statistic and the threshold. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.metricName">metric_name</a></code> | <code>str</code> | The name of the metric associated with the alarm. Must be compatible with targetResourceType. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | A resource's name. Names must be unique within the scope of a resource type in a specific region. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.statistic">statistic</a></code> | <code>str</code> | The statistic to apply to the alarm's metric data. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.targetResourceType">target_resource_type</a></code> | <code>str</code> | The resource type this template should dynamically generate cloudwatch metric alarms for. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.treatMissingData">treat_missing_data</a></code> | <code>str</code> | Specifies how missing data points are treated when evaluating the alarm's condition. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.datapointsToAlarm">datapoints_to_alarm</a></code> | <code>typing.Union[int, float]</code> | The number of datapoints within the evaluation period that must be breaching to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | A resource's optional description. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | The number of periods over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.groupIdentifier">group_identifier</a></code> | <code>str</code> | A cloudwatch alarm template group's identifier. Can be either be its id or current name. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.period">period</a></code> | <code>typing.Union[int, float]</code> | The period, in seconds, over which the specified statistic is applied. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Represents the tags associated with a resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | The threshold value to compare with the specified statistic. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.comparisonOperator"></a>

- *Type:* str

The comparison operator used to compare the specified statistic and the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#comparison_operator MedialiveCloudwatchAlarmTemplate#comparison_operator}

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.metricName"></a>

- *Type:* str

The name of the metric associated with the alarm. Must be compatible with targetResourceType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#metric_name MedialiveCloudwatchAlarmTemplate#metric_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.name"></a>

- *Type:* str

A resource's name. Names must be unique within the scope of a resource type in a specific region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#name MedialiveCloudwatchAlarmTemplate#name}

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.statistic"></a>

- *Type:* str

The statistic to apply to the alarm's metric data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#statistic MedialiveCloudwatchAlarmTemplate#statistic}

---

##### `target_resource_type`<sup>Required</sup> <a name="target_resource_type" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.targetResourceType"></a>

- *Type:* str

The resource type this template should dynamically generate cloudwatch metric alarms for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#target_resource_type MedialiveCloudwatchAlarmTemplate#target_resource_type}

---

##### `treat_missing_data`<sup>Required</sup> <a name="treat_missing_data" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.treatMissingData"></a>

- *Type:* str

Specifies how missing data points are treated when evaluating the alarm's condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#treat_missing_data MedialiveCloudwatchAlarmTemplate#treat_missing_data}

---

##### `datapoints_to_alarm`<sup>Optional</sup> <a name="datapoints_to_alarm" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.datapointsToAlarm"></a>

- *Type:* typing.Union[int, float]

The number of datapoints within the evaluation period that must be breaching to trigger the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#datapoints_to_alarm MedialiveCloudwatchAlarmTemplate#datapoints_to_alarm}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.description"></a>

- *Type:* str

A resource's optional description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#description MedialiveCloudwatchAlarmTemplate#description}

---

##### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.evaluationPeriods"></a>

- *Type:* typing.Union[int, float]

The number of periods over which data is compared to the specified threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#evaluation_periods MedialiveCloudwatchAlarmTemplate#evaluation_periods}

---

##### `group_identifier`<sup>Optional</sup> <a name="group_identifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.groupIdentifier"></a>

- *Type:* str

A cloudwatch alarm template group's identifier. Can be either be its id or current name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#group_identifier MedialiveCloudwatchAlarmTemplate#group_identifier}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.period"></a>

- *Type:* typing.Union[int, float]

The period, in seconds, over which the specified statistic is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#period MedialiveCloudwatchAlarmTemplate#period}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Represents the tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#tags MedialiveCloudwatchAlarmTemplate#tags}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

The threshold value to compare with the specified statistic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#threshold MedialiveCloudwatchAlarmTemplate#threshold}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetDatapointsToAlarm">reset_datapoints_to_alarm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetEvaluationPeriods">reset_evaluation_periods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetGroupIdentifier">reset_group_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_datapoints_to_alarm` <a name="reset_datapoints_to_alarm" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetDatapointsToAlarm"></a>

```python
def reset_datapoints_to_alarm() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_evaluation_periods` <a name="reset_evaluation_periods" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetEvaluationPeriods"></a>

```python
def reset_evaluation_periods() -> None
```

##### `reset_group_identifier` <a name="reset_group_identifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetGroupIdentifier"></a>

```python
def reset_group_identifier() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetThreshold"></a>

```python
def reset_threshold() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MedialiveCloudwatchAlarmTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import medialive_cloudwatch_alarm_template

medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import medialive_cloudwatch_alarm_template

medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import medialive_cloudwatch_alarm_template

medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import medialive_cloudwatch_alarm_template

medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MedialiveCloudwatchAlarmTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MedialiveCloudwatchAlarmTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MedialiveCloudwatchAlarmTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MedialiveCloudwatchAlarmTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.cloudwatchAlarmTemplateId">cloudwatch_alarm_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.datapointsToAlarmInput">datapoints_to_alarm_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.evaluationPeriodsInput">evaluation_periods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupIdentifierInput">group_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.targetResourceTypeInput">target_resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.treatMissingDataInput">treat_missing_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.datapointsToAlarm">datapoints_to_alarm</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupIdentifier">group_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.targetResourceType">target_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.treatMissingData">treat_missing_data</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cloudwatch_alarm_template_id`<sup>Required</sup> <a name="cloudwatch_alarm_template_id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.cloudwatchAlarmTemplateId"></a>

```python
cloudwatch_alarm_template_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `datapoints_to_alarm_input`<sup>Optional</sup> <a name="datapoints_to_alarm_input" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.datapointsToAlarmInput"></a>

```python
datapoints_to_alarm_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `evaluation_periods_input`<sup>Optional</sup> <a name="evaluation_periods_input" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.evaluationPeriodsInput"></a>

```python
evaluation_periods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_identifier_input`<sup>Optional</sup> <a name="group_identifier_input" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupIdentifierInput"></a>

```python
group_identifier_input: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_resource_type_input`<sup>Optional</sup> <a name="target_resource_type_input" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.targetResourceTypeInput"></a>

```python
target_resource_type_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `treat_missing_data_input`<sup>Optional</sup> <a name="treat_missing_data_input" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.treatMissingDataInput"></a>

```python
treat_missing_data_input: str
```

- *Type:* str

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `datapoints_to_alarm`<sup>Required</sup> <a name="datapoints_to_alarm" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.datapointsToAlarm"></a>

```python
datapoints_to_alarm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_identifier`<sup>Required</sup> <a name="group_identifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupIdentifier"></a>

```python
group_identifier: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_resource_type`<sup>Required</sup> <a name="target_resource_type" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.targetResourceType"></a>

```python
target_resource_type: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `treat_missing_data`<sup>Required</sup> <a name="treat_missing_data" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.treatMissingData"></a>

```python
treat_missing_data: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveCloudwatchAlarmTemplateConfig <a name="MedialiveCloudwatchAlarmTemplateConfig" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_cloudwatch_alarm_template

medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  comparison_operator: str,
  metric_name: str,
  name: str,
  statistic: str,
  target_resource_type: str,
  treat_missing_data: str,
  datapoints_to_alarm: typing.Union[int, float] = None,
  description: str = None,
  evaluation_periods: typing.Union[int, float] = None,
  group_identifier: str = None,
  period: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The comparison operator used to compare the specified statistic and the threshold. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.metricName">metric_name</a></code> | <code>str</code> | The name of the metric associated with the alarm. Must be compatible with targetResourceType. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.name">name</a></code> | <code>str</code> | A resource's name. Names must be unique within the scope of a resource type in a specific region. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.statistic">statistic</a></code> | <code>str</code> | The statistic to apply to the alarm's metric data. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.targetResourceType">target_resource_type</a></code> | <code>str</code> | The resource type this template should dynamically generate cloudwatch metric alarms for. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.treatMissingData">treat_missing_data</a></code> | <code>str</code> | Specifies how missing data points are treated when evaluating the alarm's condition. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.datapointsToAlarm">datapoints_to_alarm</a></code> | <code>typing.Union[int, float]</code> | The number of datapoints within the evaluation period that must be breaching to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.description">description</a></code> | <code>str</code> | A resource's optional description. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | The number of periods over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.groupIdentifier">group_identifier</a></code> | <code>str</code> | A cloudwatch alarm template group's identifier. Can be either be its id or current name. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.period">period</a></code> | <code>typing.Union[int, float]</code> | The period, in seconds, over which the specified statistic is applied. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Represents the tags associated with a resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | The threshold value to compare with the specified statistic. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The comparison operator used to compare the specified statistic and the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#comparison_operator MedialiveCloudwatchAlarmTemplate#comparison_operator}

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

The name of the metric associated with the alarm. Must be compatible with targetResourceType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#metric_name MedialiveCloudwatchAlarmTemplate#metric_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A resource's name. Names must be unique within the scope of a resource type in a specific region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#name MedialiveCloudwatchAlarmTemplate#name}

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

The statistic to apply to the alarm's metric data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#statistic MedialiveCloudwatchAlarmTemplate#statistic}

---

##### `target_resource_type`<sup>Required</sup> <a name="target_resource_type" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.targetResourceType"></a>

```python
target_resource_type: str
```

- *Type:* str

The resource type this template should dynamically generate cloudwatch metric alarms for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#target_resource_type MedialiveCloudwatchAlarmTemplate#target_resource_type}

---

##### `treat_missing_data`<sup>Required</sup> <a name="treat_missing_data" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.treatMissingData"></a>

```python
treat_missing_data: str
```

- *Type:* str

Specifies how missing data points are treated when evaluating the alarm's condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#treat_missing_data MedialiveCloudwatchAlarmTemplate#treat_missing_data}

---

##### `datapoints_to_alarm`<sup>Optional</sup> <a name="datapoints_to_alarm" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.datapointsToAlarm"></a>

```python
datapoints_to_alarm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of datapoints within the evaluation period that must be breaching to trigger the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#datapoints_to_alarm MedialiveCloudwatchAlarmTemplate#datapoints_to_alarm}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A resource's optional description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#description MedialiveCloudwatchAlarmTemplate#description}

---

##### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of periods over which data is compared to the specified threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#evaluation_periods MedialiveCloudwatchAlarmTemplate#evaluation_periods}

---

##### `group_identifier`<sup>Optional</sup> <a name="group_identifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.groupIdentifier"></a>

```python
group_identifier: str
```

- *Type:* str

A cloudwatch alarm template group's identifier. Can be either be its id or current name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#group_identifier MedialiveCloudwatchAlarmTemplate#group_identifier}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The period, in seconds, over which the specified statistic is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#period MedialiveCloudwatchAlarmTemplate#period}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Represents the tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#tags MedialiveCloudwatchAlarmTemplate#tags}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The threshold value to compare with the specified statistic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#threshold MedialiveCloudwatchAlarmTemplate#threshold}

---



