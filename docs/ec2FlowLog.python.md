# `ec2FlowLog` Submodule <a name="`ec2FlowLog` Submodule" id="@cdktn/provider-awscc.ec2FlowLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2FlowLog <a name="Ec2FlowLog" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log awscc_ec2_flow_log}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_flow_log

ec2FlowLog.Ec2FlowLog(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  resource_id: str,
  resource_type: str,
  deliver_cross_account_role: str = None,
  deliver_logs_permission_arn: str = None,
  destination_options: Ec2FlowLogDestinationOptions = None,
  log_destination: str = None,
  log_destination_type: str = None,
  log_format: str = None,
  log_group_name: str = None,
  max_aggregation_interval: typing.Union[int, float] = None,
  tag_field_specifications: IResolvable | typing.List[Ec2FlowLogTagFieldSpecifications] = None,
  tags: IResolvable | typing.List[Ec2FlowLogTags] = None,
  traffic_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | The ID of the subnet, network interface, or VPC for which you want to create a flow log. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | The type of resource for which to create the flow log. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.deliverCrossAccountRole">deliver_cross_account_role</a></code> | <code>str</code> | The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.deliverLogsPermissionArn">deliver_logs_permission_arn</a></code> | <code>str</code> | The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.destinationOptions">destination_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#destination_options Ec2FlowLog#destination_options}. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.logDestination">log_destination</a></code> | <code>str</code> | Specifies the destination to which the flow log data is to be published. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.logDestinationType">log_destination_type</a></code> | <code>str</code> | Specifies the type of destination to which the flow log data is to be published. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.logFormat">log_format</a></code> | <code>str</code> | The fields to include in the flow log record, in the order in which they should appear. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.logGroupName">log_group_name</a></code> | <code>str</code> | The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.maxAggregationInterval">max_aggregation_interval</a></code> | <code>typing.Union[int, float]</code> | The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.tagFieldSpecifications">tag_field_specifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>]</code> | The resource types and associated tags for EC2 resources associated with the EC2 Tags feature for log enrichment. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>]</code> | The tags to apply to the flow logs. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.trafficType">traffic_type</a></code> | <code>str</code> | The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.resourceId"></a>

- *Type:* str

The ID of the subnet, network interface, or VPC for which you want to create a flow log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#resource_id Ec2FlowLog#resource_id}

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.resourceType"></a>

- *Type:* str

The type of resource for which to create the flow log.

For example, if you specified a VPC ID for the ResourceId property, specify VPC for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#resource_type Ec2FlowLog#resource_type}

---

##### `deliver_cross_account_role`<sup>Optional</sup> <a name="deliver_cross_account_role" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.deliverCrossAccountRole"></a>

- *Type:* str

The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#deliver_cross_account_role Ec2FlowLog#deliver_cross_account_role}

---

##### `deliver_logs_permission_arn`<sup>Optional</sup> <a name="deliver_logs_permission_arn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.deliverLogsPermissionArn"></a>

- *Type:* str

The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account.

If you specify LogDestinationType as s3 or kinesis-data-firehose, do not specify DeliverLogsPermissionArn or LogGroupName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#deliver_logs_permission_arn Ec2FlowLog#deliver_logs_permission_arn}

---

##### `destination_options`<sup>Optional</sup> <a name="destination_options" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.destinationOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#destination_options Ec2FlowLog#destination_options}.

---

##### `log_destination`<sup>Optional</sup> <a name="log_destination" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.logDestination"></a>

- *Type:* str

Specifies the destination to which the flow log data is to be published.

Flow log data can be published to a CloudWatch Logs log group, an Amazon S3 bucket, or a Kinesis Firehose stream. The value specified for this parameter depends on the value specified for LogDestinationType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#log_destination Ec2FlowLog#log_destination}

---

##### `log_destination_type`<sup>Optional</sup> <a name="log_destination_type" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.logDestinationType"></a>

- *Type:* str

Specifies the type of destination to which the flow log data is to be published.

Flow log data can be published to CloudWatch Logs or Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#log_destination_type Ec2FlowLog#log_destination_type}

---

##### `log_format`<sup>Optional</sup> <a name="log_format" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.logFormat"></a>

- *Type:* str

The fields to include in the flow log record, in the order in which they should appear.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#log_format Ec2FlowLog#log_format}

---

##### `log_group_name`<sup>Optional</sup> <a name="log_group_name" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.logGroupName"></a>

- *Type:* str

The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.

If you specify LogDestinationType as s3 or kinesis-data-firehose, do not specify DeliverLogsPermissionArn or LogGroupName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#log_group_name Ec2FlowLog#log_group_name}

---

##### `max_aggregation_interval`<sup>Optional</sup> <a name="max_aggregation_interval" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.maxAggregationInterval"></a>

- *Type:* typing.Union[int, float]

The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record.

You can specify 60 seconds (1 minute) or 600 seconds (10 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#max_aggregation_interval Ec2FlowLog#max_aggregation_interval}

---

##### `tag_field_specifications`<sup>Optional</sup> <a name="tag_field_specifications" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.tagFieldSpecifications"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>]

The resource types and associated tags for EC2 resources associated with the EC2 Tags feature for log enrichment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#tag_field_specifications Ec2FlowLog#tag_field_specifications}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>]

The tags to apply to the flow logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#tags Ec2FlowLog#tags}

---

##### `traffic_type`<sup>Optional</sup> <a name="traffic_type" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.trafficType"></a>

- *Type:* str

The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#traffic_type Ec2FlowLog#traffic_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putDestinationOptions">put_destination_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTagFieldSpecifications">put_tag_field_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDeliverCrossAccountRole">reset_deliver_cross_account_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDeliverLogsPermissionArn">reset_deliver_logs_permission_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDestinationOptions">reset_destination_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogDestination">reset_log_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogDestinationType">reset_log_destination_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogFormat">reset_log_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogGroupName">reset_log_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetMaxAggregationInterval">reset_max_aggregation_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTagFieldSpecifications">reset_tag_field_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTrafficType">reset_traffic_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destination_options` <a name="put_destination_options" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putDestinationOptions"></a>

```python
def put_destination_options(
  file_format: str = None,
  hive_compatible_partitions: bool | IResolvable = None,
  per_hour_partition: bool | IResolvable = None
) -> None
```

###### `file_format`<sup>Optional</sup> <a name="file_format" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putDestinationOptions.parameter.fileFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#file_format Ec2FlowLog#file_format}.

---

###### `hive_compatible_partitions`<sup>Optional</sup> <a name="hive_compatible_partitions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putDestinationOptions.parameter.hiveCompatiblePartitions"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#hive_compatible_partitions Ec2FlowLog#hive_compatible_partitions}.

---

###### `per_hour_partition`<sup>Optional</sup> <a name="per_hour_partition" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putDestinationOptions.parameter.perHourPartition"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#per_hour_partition Ec2FlowLog#per_hour_partition}.

---

##### `put_tag_field_specifications` <a name="put_tag_field_specifications" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTagFieldSpecifications"></a>

```python
def put_tag_field_specifications(
  value: IResolvable | typing.List[Ec2FlowLogTagFieldSpecifications]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTagFieldSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2FlowLogTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>]

---

##### `reset_deliver_cross_account_role` <a name="reset_deliver_cross_account_role" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDeliverCrossAccountRole"></a>

```python
def reset_deliver_cross_account_role() -> None
```

##### `reset_deliver_logs_permission_arn` <a name="reset_deliver_logs_permission_arn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDeliverLogsPermissionArn"></a>

```python
def reset_deliver_logs_permission_arn() -> None
```

##### `reset_destination_options` <a name="reset_destination_options" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDestinationOptions"></a>

```python
def reset_destination_options() -> None
```

##### `reset_log_destination` <a name="reset_log_destination" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogDestination"></a>

```python
def reset_log_destination() -> None
```

##### `reset_log_destination_type` <a name="reset_log_destination_type" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogDestinationType"></a>

```python
def reset_log_destination_type() -> None
```

##### `reset_log_format` <a name="reset_log_format" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogFormat"></a>

```python
def reset_log_format() -> None
```

##### `reset_log_group_name` <a name="reset_log_group_name" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogGroupName"></a>

```python
def reset_log_group_name() -> None
```

##### `reset_max_aggregation_interval` <a name="reset_max_aggregation_interval" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetMaxAggregationInterval"></a>

```python
def reset_max_aggregation_interval() -> None
```

##### `reset_tag_field_specifications` <a name="reset_tag_field_specifications" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTagFieldSpecifications"></a>

```python
def reset_tag_field_specifications() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_traffic_type` <a name="reset_traffic_type" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTrafficType"></a>

```python
def reset_traffic_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2FlowLog resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_flow_log

ec2FlowLog.Ec2FlowLog.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_flow_log

ec2FlowLog.Ec2FlowLog.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_flow_log

ec2FlowLog.Ec2FlowLog.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_flow_log

ec2FlowLog.Ec2FlowLog.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2FlowLog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2FlowLog to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2FlowLog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2FlowLog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.destinationOptions">destination_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference">Ec2FlowLogDestinationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.flowLogId">flow_log_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagFieldSpecifications">tag_field_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList">Ec2FlowLogTagFieldSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList">Ec2FlowLogTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverCrossAccountRoleInput">deliver_cross_account_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverLogsPermissionArnInput">deliver_logs_permission_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.destinationOptionsInput">destination_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationInput">log_destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationTypeInput">log_destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logFormatInput">log_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logGroupNameInput">log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.maxAggregationIntervalInput">max_aggregation_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagFieldSpecificationsInput">tag_field_specifications_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.trafficTypeInput">traffic_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverCrossAccountRole">deliver_cross_account_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverLogsPermissionArn">deliver_logs_permission_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestination">log_destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationType">log_destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logFormat">log_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.maxAggregationInterval">max_aggregation_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.trafficType">traffic_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `destination_options`<sup>Required</sup> <a name="destination_options" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.destinationOptions"></a>

```python
destination_options: Ec2FlowLogDestinationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference">Ec2FlowLogDestinationOptionsOutputReference</a>

---

##### `flow_log_id`<sup>Required</sup> <a name="flow_log_id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.flowLogId"></a>

```python
flow_log_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tag_field_specifications`<sup>Required</sup> <a name="tag_field_specifications" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagFieldSpecifications"></a>

```python
tag_field_specifications: Ec2FlowLogTagFieldSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList">Ec2FlowLogTagFieldSpecificationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tags"></a>

```python
tags: Ec2FlowLogTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList">Ec2FlowLogTagsList</a>

---

##### `deliver_cross_account_role_input`<sup>Optional</sup> <a name="deliver_cross_account_role_input" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverCrossAccountRoleInput"></a>

```python
deliver_cross_account_role_input: str
```

- *Type:* str

---

##### `deliver_logs_permission_arn_input`<sup>Optional</sup> <a name="deliver_logs_permission_arn_input" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverLogsPermissionArnInput"></a>

```python
deliver_logs_permission_arn_input: str
```

- *Type:* str

---

##### `destination_options_input`<sup>Optional</sup> <a name="destination_options_input" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.destinationOptionsInput"></a>

```python
destination_options_input: IResolvable | Ec2FlowLogDestinationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a>

---

##### `log_destination_input`<sup>Optional</sup> <a name="log_destination_input" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationInput"></a>

```python
log_destination_input: str
```

- *Type:* str

---

##### `log_destination_type_input`<sup>Optional</sup> <a name="log_destination_type_input" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationTypeInput"></a>

```python
log_destination_type_input: str
```

- *Type:* str

---

##### `log_format_input`<sup>Optional</sup> <a name="log_format_input" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logFormatInput"></a>

```python
log_format_input: str
```

- *Type:* str

---

##### `log_group_name_input`<sup>Optional</sup> <a name="log_group_name_input" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logGroupNameInput"></a>

```python
log_group_name_input: str
```

- *Type:* str

---

##### `max_aggregation_interval_input`<sup>Optional</sup> <a name="max_aggregation_interval_input" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.maxAggregationIntervalInput"></a>

```python
max_aggregation_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `tag_field_specifications_input`<sup>Optional</sup> <a name="tag_field_specifications_input" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagFieldSpecificationsInput"></a>

```python
tag_field_specifications_input: IResolvable | typing.List[Ec2FlowLogTagFieldSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2FlowLogTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>]

---

##### `traffic_type_input`<sup>Optional</sup> <a name="traffic_type_input" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.trafficTypeInput"></a>

```python
traffic_type_input: str
```

- *Type:* str

---

##### `deliver_cross_account_role`<sup>Required</sup> <a name="deliver_cross_account_role" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverCrossAccountRole"></a>

```python
deliver_cross_account_role: str
```

- *Type:* str

---

##### `deliver_logs_permission_arn`<sup>Required</sup> <a name="deliver_logs_permission_arn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverLogsPermissionArn"></a>

```python
deliver_logs_permission_arn: str
```

- *Type:* str

---

##### `log_destination`<sup>Required</sup> <a name="log_destination" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestination"></a>

```python
log_destination: str
```

- *Type:* str

---

##### `log_destination_type`<sup>Required</sup> <a name="log_destination_type" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationType"></a>

```python
log_destination_type: str
```

- *Type:* str

---

##### `log_format`<sup>Required</sup> <a name="log_format" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logFormat"></a>

```python
log_format: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `max_aggregation_interval`<sup>Required</sup> <a name="max_aggregation_interval" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.maxAggregationInterval"></a>

```python
max_aggregation_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `traffic_type`<sup>Required</sup> <a name="traffic_type" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.trafficType"></a>

```python
traffic_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2FlowLogConfig <a name="Ec2FlowLogConfig" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_flow_log

ec2FlowLog.Ec2FlowLogConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  resource_id: str,
  resource_type: str,
  deliver_cross_account_role: str = None,
  deliver_logs_permission_arn: str = None,
  destination_options: Ec2FlowLogDestinationOptions = None,
  log_destination: str = None,
  log_destination_type: str = None,
  log_format: str = None,
  log_group_name: str = None,
  max_aggregation_interval: typing.Union[int, float] = None,
  tag_field_specifications: IResolvable | typing.List[Ec2FlowLogTagFieldSpecifications] = None,
  tags: IResolvable | typing.List[Ec2FlowLogTags] = None,
  traffic_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.resourceId">resource_id</a></code> | <code>str</code> | The ID of the subnet, network interface, or VPC for which you want to create a flow log. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.resourceType">resource_type</a></code> | <code>str</code> | The type of resource for which to create the flow log. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.deliverCrossAccountRole">deliver_cross_account_role</a></code> | <code>str</code> | The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.deliverLogsPermissionArn">deliver_logs_permission_arn</a></code> | <code>str</code> | The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.destinationOptions">destination_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#destination_options Ec2FlowLog#destination_options}. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logDestination">log_destination</a></code> | <code>str</code> | Specifies the destination to which the flow log data is to be published. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logDestinationType">log_destination_type</a></code> | <code>str</code> | Specifies the type of destination to which the flow log data is to be published. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logFormat">log_format</a></code> | <code>str</code> | The fields to include in the flow log record, in the order in which they should appear. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logGroupName">log_group_name</a></code> | <code>str</code> | The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.maxAggregationInterval">max_aggregation_interval</a></code> | <code>typing.Union[int, float]</code> | The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.tagFieldSpecifications">tag_field_specifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>]</code> | The resource types and associated tags for EC2 resources associated with the EC2 Tags feature for log enrichment. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>]</code> | The tags to apply to the flow logs. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.trafficType">traffic_type</a></code> | <code>str</code> | The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

The ID of the subnet, network interface, or VPC for which you want to create a flow log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#resource_id Ec2FlowLog#resource_id}

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

The type of resource for which to create the flow log.

For example, if you specified a VPC ID for the ResourceId property, specify VPC for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#resource_type Ec2FlowLog#resource_type}

---

##### `deliver_cross_account_role`<sup>Optional</sup> <a name="deliver_cross_account_role" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.deliverCrossAccountRole"></a>

```python
deliver_cross_account_role: str
```

- *Type:* str

The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#deliver_cross_account_role Ec2FlowLog#deliver_cross_account_role}

---

##### `deliver_logs_permission_arn`<sup>Optional</sup> <a name="deliver_logs_permission_arn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.deliverLogsPermissionArn"></a>

```python
deliver_logs_permission_arn: str
```

- *Type:* str

The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account.

If you specify LogDestinationType as s3 or kinesis-data-firehose, do not specify DeliverLogsPermissionArn or LogGroupName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#deliver_logs_permission_arn Ec2FlowLog#deliver_logs_permission_arn}

---

##### `destination_options`<sup>Optional</sup> <a name="destination_options" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.destinationOptions"></a>

```python
destination_options: Ec2FlowLogDestinationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#destination_options Ec2FlowLog#destination_options}.

---

##### `log_destination`<sup>Optional</sup> <a name="log_destination" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logDestination"></a>

```python
log_destination: str
```

- *Type:* str

Specifies the destination to which the flow log data is to be published.

Flow log data can be published to a CloudWatch Logs log group, an Amazon S3 bucket, or a Kinesis Firehose stream. The value specified for this parameter depends on the value specified for LogDestinationType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#log_destination Ec2FlowLog#log_destination}

---

##### `log_destination_type`<sup>Optional</sup> <a name="log_destination_type" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logDestinationType"></a>

```python
log_destination_type: str
```

- *Type:* str

Specifies the type of destination to which the flow log data is to be published.

Flow log data can be published to CloudWatch Logs or Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#log_destination_type Ec2FlowLog#log_destination_type}

---

##### `log_format`<sup>Optional</sup> <a name="log_format" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logFormat"></a>

```python
log_format: str
```

- *Type:* str

The fields to include in the flow log record, in the order in which they should appear.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#log_format Ec2FlowLog#log_format}

---

##### `log_group_name`<sup>Optional</sup> <a name="log_group_name" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.

If you specify LogDestinationType as s3 or kinesis-data-firehose, do not specify DeliverLogsPermissionArn or LogGroupName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#log_group_name Ec2FlowLog#log_group_name}

---

##### `max_aggregation_interval`<sup>Optional</sup> <a name="max_aggregation_interval" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.maxAggregationInterval"></a>

```python
max_aggregation_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record.

You can specify 60 seconds (1 minute) or 600 seconds (10 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#max_aggregation_interval Ec2FlowLog#max_aggregation_interval}

---

##### `tag_field_specifications`<sup>Optional</sup> <a name="tag_field_specifications" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.tagFieldSpecifications"></a>

```python
tag_field_specifications: IResolvable | typing.List[Ec2FlowLogTagFieldSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>]

The resource types and associated tags for EC2 resources associated with the EC2 Tags feature for log enrichment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#tag_field_specifications Ec2FlowLog#tag_field_specifications}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2FlowLogTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>]

The tags to apply to the flow logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#tags Ec2FlowLog#tags}

---

##### `traffic_type`<sup>Optional</sup> <a name="traffic_type" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.trafficType"></a>

```python
traffic_type: str
```

- *Type:* str

The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#traffic_type Ec2FlowLog#traffic_type}

---

### Ec2FlowLogDestinationOptions <a name="Ec2FlowLogDestinationOptions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_flow_log

ec2FlowLog.Ec2FlowLogDestinationOptions(
  file_format: str = None,
  hive_compatible_partitions: bool | IResolvable = None,
  per_hour_partition: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.fileFormat">file_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#file_format Ec2FlowLog#file_format}. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.hiveCompatiblePartitions">hive_compatible_partitions</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#hive_compatible_partitions Ec2FlowLog#hive_compatible_partitions}. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.perHourPartition">per_hour_partition</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#per_hour_partition Ec2FlowLog#per_hour_partition}. |

---

##### `file_format`<sup>Optional</sup> <a name="file_format" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.fileFormat"></a>

```python
file_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#file_format Ec2FlowLog#file_format}.

---

##### `hive_compatible_partitions`<sup>Optional</sup> <a name="hive_compatible_partitions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.hiveCompatiblePartitions"></a>

```python
hive_compatible_partitions: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#hive_compatible_partitions Ec2FlowLog#hive_compatible_partitions}.

---

##### `per_hour_partition`<sup>Optional</sup> <a name="per_hour_partition" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.perHourPartition"></a>

```python
per_hour_partition: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#per_hour_partition Ec2FlowLog#per_hour_partition}.

---

### Ec2FlowLogTagFieldSpecifications <a name="Ec2FlowLogTagFieldSpecifications" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_flow_log

ec2FlowLog.Ec2FlowLogTagFieldSpecifications(
  resource_type: str = None,
  tag_keys: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#resource_type Ec2FlowLog#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications.property.tagKeys">tag_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#tag_keys Ec2FlowLog#tag_keys}. |

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#resource_type Ec2FlowLog#resource_type}.

---

##### `tag_keys`<sup>Optional</sup> <a name="tag_keys" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications.property.tagKeys"></a>

```python
tag_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#tag_keys Ec2FlowLog#tag_keys}.

---

### Ec2FlowLogTags <a name="Ec2FlowLogTags" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_flow_log

ec2FlowLog.Ec2FlowLogTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#key Ec2FlowLog#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#value Ec2FlowLog#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#key Ec2FlowLog#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_flow_log#value Ec2FlowLog#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2FlowLogDestinationOptionsOutputReference <a name="Ec2FlowLogDestinationOptionsOutputReference" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_flow_log

ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetFileFormat">reset_file_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetHiveCompatiblePartitions">reset_hive_compatible_partitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetPerHourPartition">reset_per_hour_partition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_format` <a name="reset_file_format" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetFileFormat"></a>

```python
def reset_file_format() -> None
```

##### `reset_hive_compatible_partitions` <a name="reset_hive_compatible_partitions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetHiveCompatiblePartitions"></a>

```python
def reset_hive_compatible_partitions() -> None
```

##### `reset_per_hour_partition` <a name="reset_per_hour_partition" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetPerHourPartition"></a>

```python
def reset_per_hour_partition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fileFormatInput">file_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitionsInput">hive_compatible_partitions_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.perHourPartitionInput">per_hour_partition_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fileFormat">file_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitions">hive_compatible_partitions</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.perHourPartition">per_hour_partition</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_format_input`<sup>Optional</sup> <a name="file_format_input" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fileFormatInput"></a>

```python
file_format_input: str
```

- *Type:* str

---

##### `hive_compatible_partitions_input`<sup>Optional</sup> <a name="hive_compatible_partitions_input" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitionsInput"></a>

```python
hive_compatible_partitions_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `per_hour_partition_input`<sup>Optional</sup> <a name="per_hour_partition_input" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.perHourPartitionInput"></a>

```python
per_hour_partition_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `file_format`<sup>Required</sup> <a name="file_format" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fileFormat"></a>

```python
file_format: str
```

- *Type:* str

---

##### `hive_compatible_partitions`<sup>Required</sup> <a name="hive_compatible_partitions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitions"></a>

```python
hive_compatible_partitions: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `per_hour_partition`<sup>Required</sup> <a name="per_hour_partition" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.perHourPartition"></a>

```python
per_hour_partition: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2FlowLogDestinationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a>

---


### Ec2FlowLogTagFieldSpecificationsList <a name="Ec2FlowLogTagFieldSpecificationsList" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_flow_log

ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2FlowLogTagFieldSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2FlowLogTagFieldSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>]

---


### Ec2FlowLogTagFieldSpecificationsOutputReference <a name="Ec2FlowLogTagFieldSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_flow_log

ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resetTagKeys">reset_tag_keys</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_tag_keys` <a name="reset_tag_keys" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resetTagKeys"></a>

```python
def reset_tag_keys() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.tagKeysInput">tag_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.tagKeys">tag_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `tag_keys_input`<sup>Optional</sup> <a name="tag_keys_input" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.tagKeysInput"></a>

```python
tag_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `tag_keys`<sup>Required</sup> <a name="tag_keys" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.tagKeys"></a>

```python
tag_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2FlowLogTagFieldSpecifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>

---


### Ec2FlowLogTagsList <a name="Ec2FlowLogTagsList" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_flow_log

ec2FlowLog.Ec2FlowLogTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2FlowLogTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2FlowLogTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>]

---


### Ec2FlowLogTagsOutputReference <a name="Ec2FlowLogTagsOutputReference" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_flow_log

ec2FlowLog.Ec2FlowLogTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2FlowLogTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>

---



