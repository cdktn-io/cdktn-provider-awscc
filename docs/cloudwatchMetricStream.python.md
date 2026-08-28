# `cloudwatchMetricStream` Submodule <a name="`cloudwatchMetricStream` Submodule" id="@cdktn/provider-awscc.cloudwatchMetricStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchMetricStream <a name="CloudwatchMetricStream" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream awscc_cloudwatch_metric_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStream(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  exclude_filters: IResolvable | typing.List[CloudwatchMetricStreamExcludeFilters] = None,
  firehose_arn: str = None,
  include_filters: IResolvable | typing.List[CloudwatchMetricStreamIncludeFilters] = None,
  include_linked_accounts_metrics: bool | IResolvable = None,
  name: str = None,
  output_format: str = None,
  role_arn: str = None,
  statistics_configurations: IResolvable | typing.List[CloudwatchMetricStreamStatisticsConfigurations] = None,
  tags: IResolvable | typing.List[CloudwatchMetricStreamTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.excludeFilters">exclude_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>]</code> | Define which metrics will be not streamed. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.firehoseArn">firehose_arn</a></code> | <code>str</code> | The ARN of the Kinesis Firehose where to stream the data. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.includeFilters">include_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>]</code> | Define which metrics will be streamed. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.includeLinkedAccountsMetrics">include_linked_accounts_metrics</a></code> | <code>bool \| cdktn.IResolvable</code> | If you are creating a metric stream in a monitoring account, specify true to include metrics from source accounts that are linked to this monitoring account, in the metric stream. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the metric stream. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.outputFormat">output_format</a></code> | <code>str</code> | The output format of the data streamed to the Kinesis Firehose. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the role that provides access to the Kinesis Firehose. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.statisticsConfigurations">statistics_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>]</code> | By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>]</code> | A set of tags to assign to the delivery stream. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `exclude_filters`<sup>Optional</sup> <a name="exclude_filters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.excludeFilters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>]

Define which metrics will be not streamed.

Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#exclude_filters CloudwatchMetricStream#exclude_filters}

---

##### `firehose_arn`<sup>Optional</sup> <a name="firehose_arn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.firehoseArn"></a>

- *Type:* str

The ARN of the Kinesis Firehose where to stream the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#firehose_arn CloudwatchMetricStream#firehose_arn}

---

##### `include_filters`<sup>Optional</sup> <a name="include_filters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.includeFilters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>]

Define which metrics will be streamed.

Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#include_filters CloudwatchMetricStream#include_filters}

---

##### `include_linked_accounts_metrics`<sup>Optional</sup> <a name="include_linked_accounts_metrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.includeLinkedAccountsMetrics"></a>

- *Type:* bool | cdktn.IResolvable

If you are creating a metric stream in a monitoring account, specify true to include metrics from source accounts that are linked to this monitoring account, in the metric stream.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#include_linked_accounts_metrics CloudwatchMetricStream#include_linked_accounts_metrics}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.name"></a>

- *Type:* str

Name of the metric stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#name CloudwatchMetricStream#name}

---

##### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.outputFormat"></a>

- *Type:* str

The output format of the data streamed to the Kinesis Firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#output_format CloudwatchMetricStream#output_format}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.roleArn"></a>

- *Type:* str

The ARN of the role that provides access to the Kinesis Firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#role_arn CloudwatchMetricStream#role_arn}

---

##### `statistics_configurations`<sup>Optional</sup> <a name="statistics_configurations" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.statisticsConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>]

By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed.

You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have up to 100 members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#statistics_configurations CloudwatchMetricStream#statistics_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>]

A set of tags to assign to the delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#tags CloudwatchMetricStream#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilters">put_exclude_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilters">put_include_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfigurations">put_statistics_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetExcludeFilters">reset_exclude_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetFirehoseArn">reset_firehose_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeFilters">reset_include_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeLinkedAccountsMetrics">reset_include_linked_accounts_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetOutputFormat">reset_output_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetStatisticsConfigurations">reset_statistics_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_exclude_filters` <a name="put_exclude_filters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilters"></a>

```python
def put_exclude_filters(
  value: IResolvable | typing.List[CloudwatchMetricStreamExcludeFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>]

---

##### `put_include_filters` <a name="put_include_filters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilters"></a>

```python
def put_include_filters(
  value: IResolvable | typing.List[CloudwatchMetricStreamIncludeFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>]

---

##### `put_statistics_configurations` <a name="put_statistics_configurations" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfigurations"></a>

```python
def put_statistics_configurations(
  value: IResolvable | typing.List[CloudwatchMetricStreamStatisticsConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CloudwatchMetricStreamTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>]

---

##### `reset_exclude_filters` <a name="reset_exclude_filters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetExcludeFilters"></a>

```python
def reset_exclude_filters() -> None
```

##### `reset_firehose_arn` <a name="reset_firehose_arn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetFirehoseArn"></a>

```python
def reset_firehose_arn() -> None
```

##### `reset_include_filters` <a name="reset_include_filters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeFilters"></a>

```python
def reset_include_filters() -> None
```

##### `reset_include_linked_accounts_metrics` <a name="reset_include_linked_accounts_metrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeLinkedAccountsMetrics"></a>

```python
def reset_include_linked_accounts_metrics() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_output_format` <a name="reset_output_format" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetOutputFormat"></a>

```python
def reset_output_format() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_statistics_configurations` <a name="reset_statistics_configurations" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetStatisticsConfigurations"></a>

```python
def reset_statistics_configurations() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudwatchMetricStream resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStream.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStream.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStream.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStream.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudwatchMetricStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudwatchMetricStream to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudwatchMetricStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchMetricStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilters">exclude_filters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList">CloudwatchMetricStreamExcludeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilters">include_filters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList">CloudwatchMetricStreamIncludeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.lastUpdateDate">last_update_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurations">statistics_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList">CloudwatchMetricStreamStatisticsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList">CloudwatchMetricStreamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFiltersInput">exclude_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArnInput">firehose_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFiltersInput">include_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeLinkedAccountsMetricsInput">include_linked_accounts_metrics_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormatInput">output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurationsInput">statistics_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArn">firehose_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeLinkedAccountsMetrics">include_linked_accounts_metrics</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `exclude_filters`<sup>Required</sup> <a name="exclude_filters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilters"></a>

```python
exclude_filters: CloudwatchMetricStreamExcludeFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList">CloudwatchMetricStreamExcludeFiltersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_filters`<sup>Required</sup> <a name="include_filters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilters"></a>

```python
include_filters: CloudwatchMetricStreamIncludeFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList">CloudwatchMetricStreamIncludeFiltersList</a>

---

##### `last_update_date`<sup>Required</sup> <a name="last_update_date" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.lastUpdateDate"></a>

```python
last_update_date: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `statistics_configurations`<sup>Required</sup> <a name="statistics_configurations" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurations"></a>

```python
statistics_configurations: CloudwatchMetricStreamStatisticsConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList">CloudwatchMetricStreamStatisticsConfigurationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tags"></a>

```python
tags: CloudwatchMetricStreamTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList">CloudwatchMetricStreamTagsList</a>

---

##### `exclude_filters_input`<sup>Optional</sup> <a name="exclude_filters_input" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFiltersInput"></a>

```python
exclude_filters_input: IResolvable | typing.List[CloudwatchMetricStreamExcludeFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>]

---

##### `firehose_arn_input`<sup>Optional</sup> <a name="firehose_arn_input" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArnInput"></a>

```python
firehose_arn_input: str
```

- *Type:* str

---

##### `include_filters_input`<sup>Optional</sup> <a name="include_filters_input" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFiltersInput"></a>

```python
include_filters_input: IResolvable | typing.List[CloudwatchMetricStreamIncludeFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>]

---

##### `include_linked_accounts_metrics_input`<sup>Optional</sup> <a name="include_linked_accounts_metrics_input" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeLinkedAccountsMetricsInput"></a>

```python
include_linked_accounts_metrics_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `output_format_input`<sup>Optional</sup> <a name="output_format_input" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormatInput"></a>

```python
output_format_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `statistics_configurations_input`<sup>Optional</sup> <a name="statistics_configurations_input" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurationsInput"></a>

```python
statistics_configurations_input: IResolvable | typing.List[CloudwatchMetricStreamStatisticsConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CloudwatchMetricStreamTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>]

---

##### `firehose_arn`<sup>Required</sup> <a name="firehose_arn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArn"></a>

```python
firehose_arn: str
```

- *Type:* str

---

##### `include_linked_accounts_metrics`<sup>Required</sup> <a name="include_linked_accounts_metrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.includeLinkedAccountsMetrics"></a>

```python
include_linked_accounts_metrics: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStream.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchMetricStreamConfig <a name="CloudwatchMetricStreamConfig" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  exclude_filters: IResolvable | typing.List[CloudwatchMetricStreamExcludeFilters] = None,
  firehose_arn: str = None,
  include_filters: IResolvable | typing.List[CloudwatchMetricStreamIncludeFilters] = None,
  include_linked_accounts_metrics: bool | IResolvable = None,
  name: str = None,
  output_format: str = None,
  role_arn: str = None,
  statistics_configurations: IResolvable | typing.List[CloudwatchMetricStreamStatisticsConfigurations] = None,
  tags: IResolvable | typing.List[CloudwatchMetricStreamTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.excludeFilters">exclude_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>]</code> | Define which metrics will be not streamed. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.firehoseArn">firehose_arn</a></code> | <code>str</code> | The ARN of the Kinesis Firehose where to stream the data. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeFilters">include_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>]</code> | Define which metrics will be streamed. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeLinkedAccountsMetrics">include_linked_accounts_metrics</a></code> | <code>bool \| cdktn.IResolvable</code> | If you are creating a metric stream in a monitoring account, specify true to include metrics from source accounts that are linked to this monitoring account, in the metric stream. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.name">name</a></code> | <code>str</code> | Name of the metric stream. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.outputFormat">output_format</a></code> | <code>str</code> | The output format of the data streamed to the Kinesis Firehose. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the role that provides access to the Kinesis Firehose. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.statisticsConfigurations">statistics_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>]</code> | By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>]</code> | A set of tags to assign to the delivery stream. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `exclude_filters`<sup>Optional</sup> <a name="exclude_filters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.excludeFilters"></a>

```python
exclude_filters: IResolvable | typing.List[CloudwatchMetricStreamExcludeFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>]

Define which metrics will be not streamed.

Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#exclude_filters CloudwatchMetricStream#exclude_filters}

---

##### `firehose_arn`<sup>Optional</sup> <a name="firehose_arn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.firehoseArn"></a>

```python
firehose_arn: str
```

- *Type:* str

The ARN of the Kinesis Firehose where to stream the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#firehose_arn CloudwatchMetricStream#firehose_arn}

---

##### `include_filters`<sup>Optional</sup> <a name="include_filters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeFilters"></a>

```python
include_filters: IResolvable | typing.List[CloudwatchMetricStreamIncludeFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>]

Define which metrics will be streamed.

Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#include_filters CloudwatchMetricStream#include_filters}

---

##### `include_linked_accounts_metrics`<sup>Optional</sup> <a name="include_linked_accounts_metrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeLinkedAccountsMetrics"></a>

```python
include_linked_accounts_metrics: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If you are creating a metric stream in a monitoring account, specify true to include metrics from source accounts that are linked to this monitoring account, in the metric stream.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#include_linked_accounts_metrics CloudwatchMetricStream#include_linked_accounts_metrics}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the metric stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#name CloudwatchMetricStream#name}

---

##### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

The output format of the data streamed to the Kinesis Firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#output_format CloudwatchMetricStream#output_format}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The ARN of the role that provides access to the Kinesis Firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#role_arn CloudwatchMetricStream#role_arn}

---

##### `statistics_configurations`<sup>Optional</sup> <a name="statistics_configurations" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.statisticsConfigurations"></a>

```python
statistics_configurations: IResolvable | typing.List[CloudwatchMetricStreamStatisticsConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>]

By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed.

You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have up to 100 members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#statistics_configurations CloudwatchMetricStream#statistics_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CloudwatchMetricStreamTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>]

A set of tags to assign to the delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#tags CloudwatchMetricStream#tags}

---

### CloudwatchMetricStreamExcludeFilters <a name="CloudwatchMetricStreamExcludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters(
  metric_names: typing.List[str] = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters.property.metricNames">metric_names</a></code> | <code>typing.List[str]</code> | Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters.property.namespace">namespace</a></code> | <code>str</code> | Only metrics with Namespace matching this value will be streamed. |

---

##### `metric_names`<sup>Optional</sup> <a name="metric_names" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters.property.metricNames"></a>

```python
metric_names: typing.List[str]
```

- *Type:* typing.List[str]

Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#metric_names CloudwatchMetricStream#metric_names}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Only metrics with Namespace matching this value will be streamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}

---

### CloudwatchMetricStreamIncludeFilters <a name="CloudwatchMetricStreamIncludeFilters" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters(
  metric_names: typing.List[str] = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters.property.metricNames">metric_names</a></code> | <code>typing.List[str]</code> | Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters.property.namespace">namespace</a></code> | <code>str</code> | Only metrics with Namespace matching this value will be streamed. |

---

##### `metric_names`<sup>Optional</sup> <a name="metric_names" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters.property.metricNames"></a>

```python
metric_names: typing.List[str]
```

- *Type:* typing.List[str]

Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#metric_names CloudwatchMetricStream#metric_names}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Only metrics with Namespace matching this value will be streamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}

---

### CloudwatchMetricStreamStatisticsConfigurations <a name="CloudwatchMetricStreamStatisticsConfigurations" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations(
  additional_statistics: typing.List[str] = None,
  include_metrics: IResolvable | typing.List[CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations.property.additionalStatistics">additional_statistics</a></code> | <code>typing.List[str]</code> | The additional statistics to stream for the metrics listed in IncludeMetrics. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations.property.includeMetrics">include_metrics</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>]</code> | An array that defines the metrics that are to have additional statistics streamed. |

---

##### `additional_statistics`<sup>Optional</sup> <a name="additional_statistics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations.property.additionalStatistics"></a>

```python
additional_statistics: typing.List[str]
```

- *Type:* typing.List[str]

The additional statistics to stream for the metrics listed in IncludeMetrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#additional_statistics CloudwatchMetricStream#additional_statistics}

---

##### `include_metrics`<sup>Optional</sup> <a name="include_metrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations.property.includeMetrics"></a>

```python
include_metrics: IResolvable | typing.List[CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>]

An array that defines the metrics that are to have additional statistics streamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#include_metrics CloudwatchMetricStream#include_metrics}

---

### CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics <a name="CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics(
  metric_name: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics.property.metricName">metric_name</a></code> | <code>str</code> | The name of the metric. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics.property.namespace">namespace</a></code> | <code>str</code> | The namespace of the metric. |

---

##### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

The name of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#metric_name CloudwatchMetricStream#metric_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}

---

### CloudwatchMetricStreamTags <a name="CloudwatchMetricStreamTags" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags.property.key">key</a></code> | <code>str</code> | A unique identifier for the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags.property.value">value</a></code> | <code>str</code> | String which you can use to describe or define the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags.property.key"></a>

```python
key: str
```

- *Type:* str

A unique identifier for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#key CloudwatchMetricStream#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags.property.value"></a>

```python
value: str
```

- *Type:* str

String which you can use to describe or define the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_metric_stream#value CloudwatchMetricStream#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchMetricStreamExcludeFiltersList <a name="CloudwatchMetricStreamExcludeFiltersList" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchMetricStreamExcludeFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchMetricStreamExcludeFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>]

---


### CloudwatchMetricStreamExcludeFiltersOutputReference <a name="CloudwatchMetricStreamExcludeFiltersOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resetMetricNames">reset_metric_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metric_names` <a name="reset_metric_names" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resetMetricNames"></a>

```python
def reset_metric_names() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.metricNamesInput">metric_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.metricNames">metric_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_names_input`<sup>Optional</sup> <a name="metric_names_input" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.metricNamesInput"></a>

```python
metric_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `metric_names`<sup>Required</sup> <a name="metric_names" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.metricNames"></a>

```python
metric_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchMetricStreamExcludeFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilters">CloudwatchMetricStreamExcludeFilters</a>

---


### CloudwatchMetricStreamIncludeFiltersList <a name="CloudwatchMetricStreamIncludeFiltersList" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchMetricStreamIncludeFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchMetricStreamIncludeFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>]

---


### CloudwatchMetricStreamIncludeFiltersOutputReference <a name="CloudwatchMetricStreamIncludeFiltersOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resetMetricNames">reset_metric_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metric_names` <a name="reset_metric_names" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resetMetricNames"></a>

```python
def reset_metric_names() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.metricNamesInput">metric_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.metricNames">metric_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_names_input`<sup>Optional</sup> <a name="metric_names_input" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.metricNamesInput"></a>

```python
metric_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `metric_names`<sup>Required</sup> <a name="metric_names" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.metricNames"></a>

```python
metric_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchMetricStreamIncludeFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilters">CloudwatchMetricStreamIncludeFilters</a>

---


### CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList <a name="CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>]

---


### CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference <a name="CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resetMetricName">reset_metric_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metric_name` <a name="reset_metric_name" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resetMetricName"></a>

```python
def reset_metric_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>

---


### CloudwatchMetricStreamStatisticsConfigurationsList <a name="CloudwatchMetricStreamStatisticsConfigurationsList" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchMetricStreamStatisticsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchMetricStreamStatisticsConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>]

---


### CloudwatchMetricStreamStatisticsConfigurationsOutputReference <a name="CloudwatchMetricStreamStatisticsConfigurationsOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.putIncludeMetrics">put_include_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resetAdditionalStatistics">reset_additional_statistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resetIncludeMetrics">reset_include_metrics</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_include_metrics` <a name="put_include_metrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.putIncludeMetrics"></a>

```python
def put_include_metrics(
  value: IResolvable | typing.List[CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.putIncludeMetrics.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>]

---

##### `reset_additional_statistics` <a name="reset_additional_statistics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resetAdditionalStatistics"></a>

```python
def reset_additional_statistics() -> None
```

##### `reset_include_metrics` <a name="reset_include_metrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.resetIncludeMetrics"></a>

```python
def reset_include_metrics() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.includeMetrics">include_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.additionalStatisticsInput">additional_statistics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.includeMetricsInput">include_metrics_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.additionalStatistics">additional_statistics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_metrics`<sup>Required</sup> <a name="include_metrics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.includeMetrics"></a>

```python
include_metrics: CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList</a>

---

##### `additional_statistics_input`<sup>Optional</sup> <a name="additional_statistics_input" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.additionalStatisticsInput"></a>

```python
additional_statistics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_metrics_input`<sup>Optional</sup> <a name="include_metrics_input" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.includeMetricsInput"></a>

```python
include_metrics_input: IResolvable | typing.List[CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics">CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics</a>]

---

##### `additional_statistics`<sup>Required</sup> <a name="additional_statistics" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.additionalStatistics"></a>

```python
additional_statistics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchMetricStreamStatisticsConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurations">CloudwatchMetricStreamStatisticsConfigurations</a>

---


### CloudwatchMetricStreamTagsList <a name="CloudwatchMetricStreamTagsList" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchMetricStreamTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchMetricStreamTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>]

---


### CloudwatchMetricStreamTagsOutputReference <a name="CloudwatchMetricStreamTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_metric_stream

cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchMetricStreamTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchMetricStream.CloudwatchMetricStreamTags">CloudwatchMetricStreamTags</a>

---



