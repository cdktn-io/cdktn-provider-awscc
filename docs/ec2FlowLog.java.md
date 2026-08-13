# `ec2FlowLog` Submodule <a name="`ec2FlowLog` Submodule" id="@cdktn/provider-awscc.ec2FlowLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2FlowLog <a name="Ec2FlowLog" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log awscc_ec2_flow_log}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_flow_log.Ec2FlowLog;

Ec2FlowLog.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourceId(java.lang.String)
    .resourceType(java.lang.String)
//  .deliverCrossAccountRole(java.lang.String)
//  .deliverLogsPermissionArn(java.lang.String)
//  .destinationOptions(Ec2FlowLogDestinationOptions)
//  .logDestination(java.lang.String)
//  .logDestinationType(java.lang.String)
//  .logFormat(java.lang.String)
//  .logGroupName(java.lang.String)
//  .maxAggregationInterval(java.lang.Number)
//  .tagFieldSpecifications(IResolvable|java.util.List<Ec2FlowLogTagFieldSpecifications>)
//  .tags(IResolvable|java.util.List<Ec2FlowLogTags>)
//  .trafficType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.resourceId">resourceId</a></code> | <code>java.lang.String</code> | The ID of the subnet, network interface, or VPC for which you want to create a flow log. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.resourceType">resourceType</a></code> | <code>java.lang.String</code> | The type of resource for which to create the flow log. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.deliverCrossAccountRole">deliverCrossAccountRole</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.deliverLogsPermissionArn">deliverLogsPermissionArn</a></code> | <code>java.lang.String</code> | The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.destinationOptions">destinationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#destination_options Ec2FlowLog#destination_options}. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.logDestination">logDestination</a></code> | <code>java.lang.String</code> | Specifies the destination to which the flow log data is to be published. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.logDestinationType">logDestinationType</a></code> | <code>java.lang.String</code> | Specifies the type of destination to which the flow log data is to be published. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.logFormat">logFormat</a></code> | <code>java.lang.String</code> | The fields to include in the flow log record, in the order in which they should appear. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.maxAggregationInterval">maxAggregationInterval</a></code> | <code>java.lang.Number</code> | The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.tagFieldSpecifications">tagFieldSpecifications</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>></code> | The resource types and associated tags for EC2 resources associated with the EC2 Tags feature for log enrichment. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>></code> | The tags to apply to the flow logs. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.trafficType">trafficType</a></code> | <code>java.lang.String</code> | The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.resourceId"></a>

- *Type:* java.lang.String

The ID of the subnet, network interface, or VPC for which you want to create a flow log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#resource_id Ec2FlowLog#resource_id}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.resourceType"></a>

- *Type:* java.lang.String

The type of resource for which to create the flow log.

For example, if you specified a VPC ID for the ResourceId property, specify VPC for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#resource_type Ec2FlowLog#resource_type}

---

##### `deliverCrossAccountRole`<sup>Optional</sup> <a name="deliverCrossAccountRole" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.deliverCrossAccountRole"></a>

- *Type:* java.lang.String

The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#deliver_cross_account_role Ec2FlowLog#deliver_cross_account_role}

---

##### `deliverLogsPermissionArn`<sup>Optional</sup> <a name="deliverLogsPermissionArn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.deliverLogsPermissionArn"></a>

- *Type:* java.lang.String

The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account.

If you specify LogDestinationType as s3 or kinesis-data-firehose, do not specify DeliverLogsPermissionArn or LogGroupName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#deliver_logs_permission_arn Ec2FlowLog#deliver_logs_permission_arn}

---

##### `destinationOptions`<sup>Optional</sup> <a name="destinationOptions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.destinationOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#destination_options Ec2FlowLog#destination_options}.

---

##### `logDestination`<sup>Optional</sup> <a name="logDestination" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.logDestination"></a>

- *Type:* java.lang.String

Specifies the destination to which the flow log data is to be published.

Flow log data can be published to a CloudWatch Logs log group, an Amazon S3 bucket, or a Kinesis Firehose stream. The value specified for this parameter depends on the value specified for LogDestinationType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#log_destination Ec2FlowLog#log_destination}

---

##### `logDestinationType`<sup>Optional</sup> <a name="logDestinationType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.logDestinationType"></a>

- *Type:* java.lang.String

Specifies the type of destination to which the flow log data is to be published.

Flow log data can be published to CloudWatch Logs or Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#log_destination_type Ec2FlowLog#log_destination_type}

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.logFormat"></a>

- *Type:* java.lang.String

The fields to include in the flow log record, in the order in which they should appear.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#log_format Ec2FlowLog#log_format}

---

##### `logGroupName`<sup>Optional</sup> <a name="logGroupName" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.logGroupName"></a>

- *Type:* java.lang.String

The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.

If you specify LogDestinationType as s3 or kinesis-data-firehose, do not specify DeliverLogsPermissionArn or LogGroupName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#log_group_name Ec2FlowLog#log_group_name}

---

##### `maxAggregationInterval`<sup>Optional</sup> <a name="maxAggregationInterval" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.maxAggregationInterval"></a>

- *Type:* java.lang.Number

The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record.

You can specify 60 seconds (1 minute) or 600 seconds (10 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#max_aggregation_interval Ec2FlowLog#max_aggregation_interval}

---

##### `tagFieldSpecifications`<sup>Optional</sup> <a name="tagFieldSpecifications" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.tagFieldSpecifications"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>>

The resource types and associated tags for EC2 resources associated with the EC2 Tags feature for log enrichment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#tag_field_specifications Ec2FlowLog#tag_field_specifications}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>>

The tags to apply to the flow logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#tags Ec2FlowLog#tags}

---

##### `trafficType`<sup>Optional</sup> <a name="trafficType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.Initializer.parameter.trafficType"></a>

- *Type:* java.lang.String

The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#traffic_type Ec2FlowLog#traffic_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putDestinationOptions">putDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTagFieldSpecifications">putTagFieldSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDeliverCrossAccountRole">resetDeliverCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDeliverLogsPermissionArn">resetDeliverLogsPermissionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDestinationOptions">resetDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogDestination">resetLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogDestinationType">resetLogDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogFormat">resetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogGroupName">resetLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetMaxAggregationInterval">resetMaxAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTagFieldSpecifications">resetTagFieldSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTrafficType">resetTrafficType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationOptions` <a name="putDestinationOptions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putDestinationOptions"></a>

```java
public void putDestinationOptions(Ec2FlowLogDestinationOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putDestinationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a>

---

##### `putTagFieldSpecifications` <a name="putTagFieldSpecifications" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTagFieldSpecifications"></a>

```java
public void putTagFieldSpecifications(IResolvable|java.util.List<Ec2FlowLogTagFieldSpecifications> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTagFieldSpecifications.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2FlowLogTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>>

---

##### `resetDeliverCrossAccountRole` <a name="resetDeliverCrossAccountRole" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDeliverCrossAccountRole"></a>

```java
public void resetDeliverCrossAccountRole()
```

##### `resetDeliverLogsPermissionArn` <a name="resetDeliverLogsPermissionArn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDeliverLogsPermissionArn"></a>

```java
public void resetDeliverLogsPermissionArn()
```

##### `resetDestinationOptions` <a name="resetDestinationOptions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetDestinationOptions"></a>

```java
public void resetDestinationOptions()
```

##### `resetLogDestination` <a name="resetLogDestination" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogDestination"></a>

```java
public void resetLogDestination()
```

##### `resetLogDestinationType` <a name="resetLogDestinationType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogDestinationType"></a>

```java
public void resetLogDestinationType()
```

##### `resetLogFormat` <a name="resetLogFormat" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogFormat"></a>

```java
public void resetLogFormat()
```

##### `resetLogGroupName` <a name="resetLogGroupName" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetLogGroupName"></a>

```java
public void resetLogGroupName()
```

##### `resetMaxAggregationInterval` <a name="resetMaxAggregationInterval" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetMaxAggregationInterval"></a>

```java
public void resetMaxAggregationInterval()
```

##### `resetTagFieldSpecifications` <a name="resetTagFieldSpecifications" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTagFieldSpecifications"></a>

```java
public void resetTagFieldSpecifications()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTags"></a>

```java
public void resetTags()
```

##### `resetTrafficType` <a name="resetTrafficType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.resetTrafficType"></a>

```java
public void resetTrafficType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2FlowLog resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_flow_log.Ec2FlowLog;

Ec2FlowLog.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_flow_log.Ec2FlowLog;

Ec2FlowLog.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_flow_log.Ec2FlowLog;

Ec2FlowLog.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_flow_log.Ec2FlowLog;

Ec2FlowLog.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2FlowLog.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2FlowLog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2FlowLog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2FlowLog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2FlowLog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.destinationOptions">destinationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference">Ec2FlowLogDestinationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.flowLogId">flowLogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagFieldSpecifications">tagFieldSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList">Ec2FlowLogTagFieldSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList">Ec2FlowLogTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverCrossAccountRoleInput">deliverCrossAccountRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverLogsPermissionArnInput">deliverLogsPermissionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.destinationOptionsInput">destinationOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationInput">logDestinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationTypeInput">logDestinationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logFormatInput">logFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logGroupNameInput">logGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.maxAggregationIntervalInput">maxAggregationIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagFieldSpecificationsInput">tagFieldSpecificationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.trafficTypeInput">trafficTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverCrossAccountRole">deliverCrossAccountRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverLogsPermissionArn">deliverLogsPermissionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestination">logDestination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationType">logDestinationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logFormat">logFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.maxAggregationInterval">maxAggregationInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.trafficType">trafficType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destinationOptions`<sup>Required</sup> <a name="destinationOptions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.destinationOptions"></a>

```java
public Ec2FlowLogDestinationOptionsOutputReference getDestinationOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference">Ec2FlowLogDestinationOptionsOutputReference</a>

---

##### `flowLogId`<sup>Required</sup> <a name="flowLogId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.flowLogId"></a>

```java
public java.lang.String getFlowLogId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tagFieldSpecifications`<sup>Required</sup> <a name="tagFieldSpecifications" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagFieldSpecifications"></a>

```java
public Ec2FlowLogTagFieldSpecificationsList getTagFieldSpecifications();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList">Ec2FlowLogTagFieldSpecificationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tags"></a>

```java
public Ec2FlowLogTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList">Ec2FlowLogTagsList</a>

---

##### `deliverCrossAccountRoleInput`<sup>Optional</sup> <a name="deliverCrossAccountRoleInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverCrossAccountRoleInput"></a>

```java
public java.lang.String getDeliverCrossAccountRoleInput();
```

- *Type:* java.lang.String

---

##### `deliverLogsPermissionArnInput`<sup>Optional</sup> <a name="deliverLogsPermissionArnInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverLogsPermissionArnInput"></a>

```java
public java.lang.String getDeliverLogsPermissionArnInput();
```

- *Type:* java.lang.String

---

##### `destinationOptionsInput`<sup>Optional</sup> <a name="destinationOptionsInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.destinationOptionsInput"></a>

```java
public IResolvable|Ec2FlowLogDestinationOptions getDestinationOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a>

---

##### `logDestinationInput`<sup>Optional</sup> <a name="logDestinationInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationInput"></a>

```java
public java.lang.String getLogDestinationInput();
```

- *Type:* java.lang.String

---

##### `logDestinationTypeInput`<sup>Optional</sup> <a name="logDestinationTypeInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationTypeInput"></a>

```java
public java.lang.String getLogDestinationTypeInput();
```

- *Type:* java.lang.String

---

##### `logFormatInput`<sup>Optional</sup> <a name="logFormatInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logFormatInput"></a>

```java
public java.lang.String getLogFormatInput();
```

- *Type:* java.lang.String

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logGroupNameInput"></a>

```java
public java.lang.String getLogGroupNameInput();
```

- *Type:* java.lang.String

---

##### `maxAggregationIntervalInput`<sup>Optional</sup> <a name="maxAggregationIntervalInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.maxAggregationIntervalInput"></a>

```java
public java.lang.Number getMaxAggregationIntervalInput();
```

- *Type:* java.lang.Number

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `tagFieldSpecificationsInput`<sup>Optional</sup> <a name="tagFieldSpecificationsInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagFieldSpecificationsInput"></a>

```java
public IResolvable|java.util.List<Ec2FlowLogTagFieldSpecifications> getTagFieldSpecificationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2FlowLogTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>>

---

##### `trafficTypeInput`<sup>Optional</sup> <a name="trafficTypeInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.trafficTypeInput"></a>

```java
public java.lang.String getTrafficTypeInput();
```

- *Type:* java.lang.String

---

##### `deliverCrossAccountRole`<sup>Required</sup> <a name="deliverCrossAccountRole" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverCrossAccountRole"></a>

```java
public java.lang.String getDeliverCrossAccountRole();
```

- *Type:* java.lang.String

---

##### `deliverLogsPermissionArn`<sup>Required</sup> <a name="deliverLogsPermissionArn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.deliverLogsPermissionArn"></a>

```java
public java.lang.String getDeliverLogsPermissionArn();
```

- *Type:* java.lang.String

---

##### `logDestination`<sup>Required</sup> <a name="logDestination" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestination"></a>

```java
public java.lang.String getLogDestination();
```

- *Type:* java.lang.String

---

##### `logDestinationType`<sup>Required</sup> <a name="logDestinationType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logDestinationType"></a>

```java
public java.lang.String getLogDestinationType();
```

- *Type:* java.lang.String

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logFormat"></a>

```java
public java.lang.String getLogFormat();
```

- *Type:* java.lang.String

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

---

##### `maxAggregationInterval`<sup>Required</sup> <a name="maxAggregationInterval" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.maxAggregationInterval"></a>

```java
public java.lang.Number getMaxAggregationInterval();
```

- *Type:* java.lang.Number

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `trafficType`<sup>Required</sup> <a name="trafficType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.trafficType"></a>

```java
public java.lang.String getTrafficType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLog.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2FlowLogConfig <a name="Ec2FlowLogConfig" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_flow_log.Ec2FlowLogConfig;

Ec2FlowLogConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourceId(java.lang.String)
    .resourceType(java.lang.String)
//  .deliverCrossAccountRole(java.lang.String)
//  .deliverLogsPermissionArn(java.lang.String)
//  .destinationOptions(Ec2FlowLogDestinationOptions)
//  .logDestination(java.lang.String)
//  .logDestinationType(java.lang.String)
//  .logFormat(java.lang.String)
//  .logGroupName(java.lang.String)
//  .maxAggregationInterval(java.lang.Number)
//  .tagFieldSpecifications(IResolvable|java.util.List<Ec2FlowLogTagFieldSpecifications>)
//  .tags(IResolvable|java.util.List<Ec2FlowLogTags>)
//  .trafficType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | The ID of the subnet, network interface, or VPC for which you want to create a flow log. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | The type of resource for which to create the flow log. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.deliverCrossAccountRole">deliverCrossAccountRole</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.deliverLogsPermissionArn">deliverLogsPermissionArn</a></code> | <code>java.lang.String</code> | The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.destinationOptions">destinationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#destination_options Ec2FlowLog#destination_options}. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logDestination">logDestination</a></code> | <code>java.lang.String</code> | Specifies the destination to which the flow log data is to be published. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logDestinationType">logDestinationType</a></code> | <code>java.lang.String</code> | Specifies the type of destination to which the flow log data is to be published. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logFormat">logFormat</a></code> | <code>java.lang.String</code> | The fields to include in the flow log record, in the order in which they should appear. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.maxAggregationInterval">maxAggregationInterval</a></code> | <code>java.lang.Number</code> | The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.tagFieldSpecifications">tagFieldSpecifications</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>></code> | The resource types and associated tags for EC2 resources associated with the EC2 Tags feature for log enrichment. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>></code> | The tags to apply to the flow logs. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.trafficType">trafficType</a></code> | <code>java.lang.String</code> | The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

The ID of the subnet, network interface, or VPC for which you want to create a flow log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#resource_id Ec2FlowLog#resource_id}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

The type of resource for which to create the flow log.

For example, if you specified a VPC ID for the ResourceId property, specify VPC for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#resource_type Ec2FlowLog#resource_type}

---

##### `deliverCrossAccountRole`<sup>Optional</sup> <a name="deliverCrossAccountRole" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.deliverCrossAccountRole"></a>

```java
public java.lang.String getDeliverCrossAccountRole();
```

- *Type:* java.lang.String

The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#deliver_cross_account_role Ec2FlowLog#deliver_cross_account_role}

---

##### `deliverLogsPermissionArn`<sup>Optional</sup> <a name="deliverLogsPermissionArn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.deliverLogsPermissionArn"></a>

```java
public java.lang.String getDeliverLogsPermissionArn();
```

- *Type:* java.lang.String

The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account.

If you specify LogDestinationType as s3 or kinesis-data-firehose, do not specify DeliverLogsPermissionArn or LogGroupName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#deliver_logs_permission_arn Ec2FlowLog#deliver_logs_permission_arn}

---

##### `destinationOptions`<sup>Optional</sup> <a name="destinationOptions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.destinationOptions"></a>

```java
public Ec2FlowLogDestinationOptions getDestinationOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#destination_options Ec2FlowLog#destination_options}.

---

##### `logDestination`<sup>Optional</sup> <a name="logDestination" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logDestination"></a>

```java
public java.lang.String getLogDestination();
```

- *Type:* java.lang.String

Specifies the destination to which the flow log data is to be published.

Flow log data can be published to a CloudWatch Logs log group, an Amazon S3 bucket, or a Kinesis Firehose stream. The value specified for this parameter depends on the value specified for LogDestinationType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#log_destination Ec2FlowLog#log_destination}

---

##### `logDestinationType`<sup>Optional</sup> <a name="logDestinationType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logDestinationType"></a>

```java
public java.lang.String getLogDestinationType();
```

- *Type:* java.lang.String

Specifies the type of destination to which the flow log data is to be published.

Flow log data can be published to CloudWatch Logs or Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#log_destination_type Ec2FlowLog#log_destination_type}

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logFormat"></a>

```java
public java.lang.String getLogFormat();
```

- *Type:* java.lang.String

The fields to include in the flow log record, in the order in which they should appear.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#log_format Ec2FlowLog#log_format}

---

##### `logGroupName`<sup>Optional</sup> <a name="logGroupName" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.

If you specify LogDestinationType as s3 or kinesis-data-firehose, do not specify DeliverLogsPermissionArn or LogGroupName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#log_group_name Ec2FlowLog#log_group_name}

---

##### `maxAggregationInterval`<sup>Optional</sup> <a name="maxAggregationInterval" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.maxAggregationInterval"></a>

```java
public java.lang.Number getMaxAggregationInterval();
```

- *Type:* java.lang.Number

The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record.

You can specify 60 seconds (1 minute) or 600 seconds (10 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#max_aggregation_interval Ec2FlowLog#max_aggregation_interval}

---

##### `tagFieldSpecifications`<sup>Optional</sup> <a name="tagFieldSpecifications" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.tagFieldSpecifications"></a>

```java
public IResolvable|java.util.List<Ec2FlowLogTagFieldSpecifications> getTagFieldSpecifications();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>>

The resource types and associated tags for EC2 resources associated with the EC2 Tags feature for log enrichment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#tag_field_specifications Ec2FlowLog#tag_field_specifications}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2FlowLogTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>>

The tags to apply to the flow logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#tags Ec2FlowLog#tags}

---

##### `trafficType`<sup>Optional</sup> <a name="trafficType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogConfig.property.trafficType"></a>

```java
public java.lang.String getTrafficType();
```

- *Type:* java.lang.String

The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#traffic_type Ec2FlowLog#traffic_type}

---

### Ec2FlowLogDestinationOptions <a name="Ec2FlowLogDestinationOptions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_flow_log.Ec2FlowLogDestinationOptions;

Ec2FlowLogDestinationOptions.builder()
//  .fileFormat(java.lang.String)
//  .hiveCompatiblePartitions(java.lang.Boolean|IResolvable)
//  .perHourPartition(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.fileFormat">fileFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#file_format Ec2FlowLog#file_format}. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.hiveCompatiblePartitions">hiveCompatiblePartitions</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#hive_compatible_partitions Ec2FlowLog#hive_compatible_partitions}. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.perHourPartition">perHourPartition</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#per_hour_partition Ec2FlowLog#per_hour_partition}. |

---

##### `fileFormat`<sup>Optional</sup> <a name="fileFormat" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.fileFormat"></a>

```java
public java.lang.String getFileFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#file_format Ec2FlowLog#file_format}.

---

##### `hiveCompatiblePartitions`<sup>Optional</sup> <a name="hiveCompatiblePartitions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.hiveCompatiblePartitions"></a>

```java
public java.lang.Boolean|IResolvable getHiveCompatiblePartitions();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#hive_compatible_partitions Ec2FlowLog#hive_compatible_partitions}.

---

##### `perHourPartition`<sup>Optional</sup> <a name="perHourPartition" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions.property.perHourPartition"></a>

```java
public java.lang.Boolean|IResolvable getPerHourPartition();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#per_hour_partition Ec2FlowLog#per_hour_partition}.

---

### Ec2FlowLogTagFieldSpecifications <a name="Ec2FlowLogTagFieldSpecifications" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_flow_log.Ec2FlowLogTagFieldSpecifications;

Ec2FlowLogTagFieldSpecifications.builder()
//  .resourceType(java.lang.String)
//  .tagKeys(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#resource_type Ec2FlowLog#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications.property.tagKeys">tagKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#tag_keys Ec2FlowLog#tag_keys}. |

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#resource_type Ec2FlowLog#resource_type}.

---

##### `tagKeys`<sup>Optional</sup> <a name="tagKeys" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications.property.tagKeys"></a>

```java
public java.util.List<java.lang.String> getTagKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#tag_keys Ec2FlowLog#tag_keys}.

---

### Ec2FlowLogTags <a name="Ec2FlowLogTags" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_flow_log.Ec2FlowLogTags;

Ec2FlowLogTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#key Ec2FlowLog#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#value Ec2FlowLog#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#key Ec2FlowLog#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_flow_log#value Ec2FlowLog#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2FlowLogDestinationOptionsOutputReference <a name="Ec2FlowLogDestinationOptionsOutputReference" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_flow_log.Ec2FlowLogDestinationOptionsOutputReference;

new Ec2FlowLogDestinationOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetFileFormat">resetFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetHiveCompatiblePartitions">resetHiveCompatiblePartitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetPerHourPartition">resetPerHourPartition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileFormat` <a name="resetFileFormat" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetFileFormat"></a>

```java
public void resetFileFormat()
```

##### `resetHiveCompatiblePartitions` <a name="resetHiveCompatiblePartitions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetHiveCompatiblePartitions"></a>

```java
public void resetHiveCompatiblePartitions()
```

##### `resetPerHourPartition` <a name="resetPerHourPartition" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.resetPerHourPartition"></a>

```java
public void resetPerHourPartition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fileFormatInput">fileFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitionsInput">hiveCompatiblePartitionsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.perHourPartitionInput">perHourPartitionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fileFormat">fileFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitions">hiveCompatiblePartitions</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.perHourPartition">perHourPartition</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileFormatInput`<sup>Optional</sup> <a name="fileFormatInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fileFormatInput"></a>

```java
public java.lang.String getFileFormatInput();
```

- *Type:* java.lang.String

---

##### `hiveCompatiblePartitionsInput`<sup>Optional</sup> <a name="hiveCompatiblePartitionsInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitionsInput"></a>

```java
public java.lang.Boolean|IResolvable getHiveCompatiblePartitionsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `perHourPartitionInput`<sup>Optional</sup> <a name="perHourPartitionInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.perHourPartitionInput"></a>

```java
public java.lang.Boolean|IResolvable getPerHourPartitionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fileFormat`<sup>Required</sup> <a name="fileFormat" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.fileFormat"></a>

```java
public java.lang.String getFileFormat();
```

- *Type:* java.lang.String

---

##### `hiveCompatiblePartitions`<sup>Required</sup> <a name="hiveCompatiblePartitions" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitions"></a>

```java
public java.lang.Boolean|IResolvable getHiveCompatiblePartitions();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `perHourPartition`<sup>Required</sup> <a name="perHourPartition" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.perHourPartition"></a>

```java
public java.lang.Boolean|IResolvable getPerHourPartition();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2FlowLogDestinationOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogDestinationOptions">Ec2FlowLogDestinationOptions</a>

---


### Ec2FlowLogTagFieldSpecificationsList <a name="Ec2FlowLogTagFieldSpecificationsList" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_flow_log.Ec2FlowLogTagFieldSpecificationsList;

new Ec2FlowLogTagFieldSpecificationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.get"></a>

```java
public Ec2FlowLogTagFieldSpecificationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2FlowLogTagFieldSpecifications> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>>

---


### Ec2FlowLogTagFieldSpecificationsOutputReference <a name="Ec2FlowLogTagFieldSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_flow_log.Ec2FlowLogTagFieldSpecificationsOutputReference;

new Ec2FlowLogTagFieldSpecificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resetTagKeys">resetTagKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resetResourceType"></a>

```java
public void resetResourceType()
```

##### `resetTagKeys` <a name="resetTagKeys" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.resetTagKeys"></a>

```java
public void resetTagKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.tagKeysInput">tagKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.tagKeys">tagKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `tagKeysInput`<sup>Optional</sup> <a name="tagKeysInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.tagKeysInput"></a>

```java
public java.util.List<java.lang.String> getTagKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `tagKeys`<sup>Required</sup> <a name="tagKeys" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.tagKeys"></a>

```java
public java.util.List<java.lang.String> getTagKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecificationsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2FlowLogTagFieldSpecifications getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagFieldSpecifications">Ec2FlowLogTagFieldSpecifications</a>

---


### Ec2FlowLogTagsList <a name="Ec2FlowLogTagsList" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_flow_log.Ec2FlowLogTagsList;

new Ec2FlowLogTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.get"></a>

```java
public Ec2FlowLogTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2FlowLogTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>>

---


### Ec2FlowLogTagsOutputReference <a name="Ec2FlowLogTagsOutputReference" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_flow_log.Ec2FlowLogTagsOutputReference;

new Ec2FlowLogTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2FlowLogTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FlowLog.Ec2FlowLogTags">Ec2FlowLogTags</a>

---



