# `cloudtrailTrail` Submodule <a name="`cloudtrailTrail` Submodule" id="@cdktn/provider-awscc.cloudtrailTrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudtrailTrail <a name="CloudtrailTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail awscc_cloudtrail_trail}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrail(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  is_logging: bool | IResolvable,
  s3_bucket_name: str,
  advanced_event_selectors: IResolvable | typing.List[CloudtrailTrailAdvancedEventSelectors] = None,
  aggregation_configurations: IResolvable | typing.List[CloudtrailTrailAggregationConfigurations] = None,
  cloudwatch_logs_log_group_arn: str = None,
  cloudwatch_logs_role_arn: str = None,
  enable_log_file_validation: bool | IResolvable = None,
  event_selectors: IResolvable | typing.List[CloudtrailTrailEventSelectors] = None,
  include_global_service_events: bool | IResolvable = None,
  insight_selectors: IResolvable | typing.List[CloudtrailTrailInsightSelectors] = None,
  is_multi_region_trail: bool | IResolvable = None,
  is_organization_trail: bool | IResolvable = None,
  kms_key_id: str = None,
  s3_key_prefix: str = None,
  sns_topic_name: str = None,
  tags: IResolvable | typing.List[CloudtrailTrailTags] = None,
  trail_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.isLogging">is_logging</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the CloudTrail is currently logging AWS API calls. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | Specifies the name of the Amazon S3 bucket designated for publishing log files. See Amazon S3 Bucket Naming Requirements. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.advancedEventSelectors">advanced_event_selectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>]</code> | The advanced event selectors that were used to select events for the data store. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.aggregationConfigurations">aggregation_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>]</code> | Specifies the aggregation configuration to aggregate CloudTrail Events. A maximum of 1 aggregation configuration is allowed. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.cloudwatchLogsLogGroupArn">cloudwatch_logs_log_group_arn</a></code> | <code>str</code> | Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.cloudwatchLogsRoleArn">cloudwatch_logs_role_arn</a></code> | <code>str</code> | Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.enableLogFileValidation">enable_log_file_validation</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether log file validation is enabled. The default is false. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.eventSelectors">event_selectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>]</code> | Use event selectors to further specify the management and data event settings for your trail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.includeGlobalServiceEvents">include_global_service_events</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the trail is publishing events from global services such as IAM to the log files. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.insightSelectors">insight_selectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>]</code> | Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.isMultiRegionTrail">is_multi_region_trail</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the trail applies only to the current region or to all regions. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.isOrganizationTrail">is_organization_trail</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the trail is created for all accounts in an organization in AWS Organizations, or only for the current AWS account. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.snsTopicName">sns_topic_name</a></code> | <code>str</code> | Specifies the name of the Amazon SNS topic defined for notification of log file delivery. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#tags CloudtrailTrail#tags}. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.trailName">trail_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#trail_name CloudtrailTrail#trail_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `is_logging`<sup>Required</sup> <a name="is_logging" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.isLogging"></a>

- *Type:* bool | cdktn.IResolvable

Whether the CloudTrail is currently logging AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#is_logging CloudtrailTrail#is_logging}

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.s3BucketName"></a>

- *Type:* str

Specifies the name of the Amazon S3 bucket designated for publishing log files. See Amazon S3 Bucket Naming Requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#s3_bucket_name CloudtrailTrail#s3_bucket_name}

---

##### `advanced_event_selectors`<sup>Optional</sup> <a name="advanced_event_selectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.advancedEventSelectors"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>]

The advanced event selectors that were used to select events for the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#advanced_event_selectors CloudtrailTrail#advanced_event_selectors}

---

##### `aggregation_configurations`<sup>Optional</sup> <a name="aggregation_configurations" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.aggregationConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>]

Specifies the aggregation configuration to aggregate CloudTrail Events. A maximum of 1 aggregation configuration is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#aggregation_configurations CloudtrailTrail#aggregation_configurations}

---

##### `cloudwatch_logs_log_group_arn`<sup>Optional</sup> <a name="cloudwatch_logs_log_group_arn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.cloudwatchLogsLogGroupArn"></a>

- *Type:* str

Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered.

Not required unless you specify CloudWatchLogsRoleArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#cloudwatch_logs_log_group_arn CloudtrailTrail#cloudwatch_logs_log_group_arn}

---

##### `cloudwatch_logs_role_arn`<sup>Optional</sup> <a name="cloudwatch_logs_role_arn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.cloudwatchLogsRoleArn"></a>

- *Type:* str

Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#cloudwatch_logs_role_arn CloudtrailTrail#cloudwatch_logs_role_arn}

---

##### `enable_log_file_validation`<sup>Optional</sup> <a name="enable_log_file_validation" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.enableLogFileValidation"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether log file validation is enabled. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#enable_log_file_validation CloudtrailTrail#enable_log_file_validation}

---

##### `event_selectors`<sup>Optional</sup> <a name="event_selectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.eventSelectors"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>]

Use event selectors to further specify the management and data event settings for your trail.

By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event. You can configure up to five event selectors for a trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#event_selectors CloudtrailTrail#event_selectors}

---

##### `include_global_service_events`<sup>Optional</sup> <a name="include_global_service_events" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.includeGlobalServiceEvents"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the trail is publishing events from global services such as IAM to the log files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#include_global_service_events CloudtrailTrail#include_global_service_events}

---

##### `insight_selectors`<sup>Optional</sup> <a name="insight_selectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.insightSelectors"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>]

Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#insight_selectors CloudtrailTrail#insight_selectors}

---

##### `is_multi_region_trail`<sup>Optional</sup> <a name="is_multi_region_trail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.isMultiRegionTrail"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the trail applies only to the current region or to all regions.

The default is false. If the trail exists only in the current region and this value is set to true, shadow trails (replications of the trail) will be created in the other regions. If the trail exists in all regions and this value is set to false, the trail will remain in the region where it was created, and its shadow trails in other regions will be deleted. As a best practice, consider using trails that log events in all regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#is_multi_region_trail CloudtrailTrail#is_multi_region_trail}

---

##### `is_organization_trail`<sup>Optional</sup> <a name="is_organization_trail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.isOrganizationTrail"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the trail is created for all accounts in an organization in AWS Organizations, or only for the current AWS account.

The default is false, and cannot be true unless the call is made on behalf of an AWS account that is the master account for an organization in AWS Organizations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#is_organization_trail CloudtrailTrail#is_organization_trail}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail.

The value can be an alias name prefixed by 'alias/', a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#kms_key_id CloudtrailTrail#kms_key_id}

---

##### `s3_key_prefix`<sup>Optional</sup> <a name="s3_key_prefix" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.s3KeyPrefix"></a>

- *Type:* str

Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery.

For more information, see Finding Your CloudTrail Log Files. The maximum length is 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#s3_key_prefix CloudtrailTrail#s3_key_prefix}

---

##### `sns_topic_name`<sup>Optional</sup> <a name="sns_topic_name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.snsTopicName"></a>

- *Type:* str

Specifies the name of the Amazon SNS topic defined for notification of log file delivery.

The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#sns_topic_name CloudtrailTrail#sns_topic_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#tags CloudtrailTrail#tags}.

---

##### `trail_name`<sup>Optional</sup> <a name="trail_name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.trailName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#trail_name CloudtrailTrail#trail_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAdvancedEventSelectors">put_advanced_event_selectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAggregationConfigurations">put_aggregation_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putEventSelectors">put_event_selectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putInsightSelectors">put_insight_selectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetAdvancedEventSelectors">reset_advanced_event_selectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetAggregationConfigurations">reset_aggregation_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetCloudwatchLogsLogGroupArn">reset_cloudwatch_logs_log_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetCloudwatchLogsRoleArn">reset_cloudwatch_logs_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetEnableLogFileValidation">reset_enable_log_file_validation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetEventSelectors">reset_event_selectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIncludeGlobalServiceEvents">reset_include_global_service_events</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetInsightSelectors">reset_insight_selectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIsMultiRegionTrail">reset_is_multi_region_trail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIsOrganizationTrail">reset_is_organization_trail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetS3KeyPrefix">reset_s3_key_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetSnsTopicName">reset_sns_topic_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetTrailName">reset_trail_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_advanced_event_selectors` <a name="put_advanced_event_selectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAdvancedEventSelectors"></a>

```python
def put_advanced_event_selectors(
  value: IResolvable | typing.List[CloudtrailTrailAdvancedEventSelectors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAdvancedEventSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>]

---

##### `put_aggregation_configurations` <a name="put_aggregation_configurations" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAggregationConfigurations"></a>

```python
def put_aggregation_configurations(
  value: IResolvable | typing.List[CloudtrailTrailAggregationConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAggregationConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>]

---

##### `put_event_selectors` <a name="put_event_selectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putEventSelectors"></a>

```python
def put_event_selectors(
  value: IResolvable | typing.List[CloudtrailTrailEventSelectors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putEventSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>]

---

##### `put_insight_selectors` <a name="put_insight_selectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putInsightSelectors"></a>

```python
def put_insight_selectors(
  value: IResolvable | typing.List[CloudtrailTrailInsightSelectors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putInsightSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CloudtrailTrailTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>]

---

##### `reset_advanced_event_selectors` <a name="reset_advanced_event_selectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetAdvancedEventSelectors"></a>

```python
def reset_advanced_event_selectors() -> None
```

##### `reset_aggregation_configurations` <a name="reset_aggregation_configurations" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetAggregationConfigurations"></a>

```python
def reset_aggregation_configurations() -> None
```

##### `reset_cloudwatch_logs_log_group_arn` <a name="reset_cloudwatch_logs_log_group_arn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetCloudwatchLogsLogGroupArn"></a>

```python
def reset_cloudwatch_logs_log_group_arn() -> None
```

##### `reset_cloudwatch_logs_role_arn` <a name="reset_cloudwatch_logs_role_arn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetCloudwatchLogsRoleArn"></a>

```python
def reset_cloudwatch_logs_role_arn() -> None
```

##### `reset_enable_log_file_validation` <a name="reset_enable_log_file_validation" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetEnableLogFileValidation"></a>

```python
def reset_enable_log_file_validation() -> None
```

##### `reset_event_selectors` <a name="reset_event_selectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetEventSelectors"></a>

```python
def reset_event_selectors() -> None
```

##### `reset_include_global_service_events` <a name="reset_include_global_service_events" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIncludeGlobalServiceEvents"></a>

```python
def reset_include_global_service_events() -> None
```

##### `reset_insight_selectors` <a name="reset_insight_selectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetInsightSelectors"></a>

```python
def reset_insight_selectors() -> None
```

##### `reset_is_multi_region_trail` <a name="reset_is_multi_region_trail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIsMultiRegionTrail"></a>

```python
def reset_is_multi_region_trail() -> None
```

##### `reset_is_organization_trail` <a name="reset_is_organization_trail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIsOrganizationTrail"></a>

```python
def reset_is_organization_trail() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_s3_key_prefix` <a name="reset_s3_key_prefix" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetS3KeyPrefix"></a>

```python
def reset_s3_key_prefix() -> None
```

##### `reset_sns_topic_name` <a name="reset_sns_topic_name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetSnsTopicName"></a>

```python
def reset_sns_topic_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_trail_name` <a name="reset_trail_name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetTrailName"></a>

```python
def reset_trail_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudtrailTrail resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrail.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrail.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrail.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrail.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudtrailTrail resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudtrailTrail to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudtrailTrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudtrailTrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.advancedEventSelectors">advanced_event_selectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList">CloudtrailTrailAdvancedEventSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.aggregationConfigurations">aggregation_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList">CloudtrailTrailAggregationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.eventSelectors">event_selectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList">CloudtrailTrailEventSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.insightSelectors">insight_selectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList">CloudtrailTrailInsightSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList">CloudtrailTrailTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.advancedEventSelectorsInput">advanced_event_selectors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.aggregationConfigurationsInput">aggregation_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsLogGroupArnInput">cloudwatch_logs_log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsRoleArnInput">cloudwatch_logs_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.enableLogFileValidationInput">enable_log_file_validation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.eventSelectorsInput">event_selectors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.includeGlobalServiceEventsInput">include_global_service_events_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.insightSelectorsInput">insight_selectors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isLoggingInput">is_logging_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isMultiRegionTrailInput">is_multi_region_trail_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isOrganizationTrailInput">is_organization_trail_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3BucketNameInput">s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3KeyPrefixInput">s3_key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicNameInput">sns_topic_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.trailNameInput">trail_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsLogGroupArn">cloudwatch_logs_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsRoleArn">cloudwatch_logs_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.enableLogFileValidation">enable_log_file_validation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.includeGlobalServiceEvents">include_global_service_events</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isLogging">is_logging</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isMultiRegionTrail">is_multi_region_trail</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isOrganizationTrail">is_organization_trail</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicName">sns_topic_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.trailName">trail_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `advanced_event_selectors`<sup>Required</sup> <a name="advanced_event_selectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.advancedEventSelectors"></a>

```python
advanced_event_selectors: CloudtrailTrailAdvancedEventSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList">CloudtrailTrailAdvancedEventSelectorsList</a>

---

##### `aggregation_configurations`<sup>Required</sup> <a name="aggregation_configurations" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.aggregationConfigurations"></a>

```python
aggregation_configurations: CloudtrailTrailAggregationConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList">CloudtrailTrailAggregationConfigurationsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `event_selectors`<sup>Required</sup> <a name="event_selectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.eventSelectors"></a>

```python
event_selectors: CloudtrailTrailEventSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList">CloudtrailTrailEventSelectorsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `insight_selectors`<sup>Required</sup> <a name="insight_selectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.insightSelectors"></a>

```python
insight_selectors: CloudtrailTrailInsightSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList">CloudtrailTrailInsightSelectorsList</a>

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tags"></a>

```python
tags: CloudtrailTrailTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList">CloudtrailTrailTagsList</a>

---

##### `advanced_event_selectors_input`<sup>Optional</sup> <a name="advanced_event_selectors_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.advancedEventSelectorsInput"></a>

```python
advanced_event_selectors_input: IResolvable | typing.List[CloudtrailTrailAdvancedEventSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>]

---

##### `aggregation_configurations_input`<sup>Optional</sup> <a name="aggregation_configurations_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.aggregationConfigurationsInput"></a>

```python
aggregation_configurations_input: IResolvable | typing.List[CloudtrailTrailAggregationConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>]

---

##### `cloudwatch_logs_log_group_arn_input`<sup>Optional</sup> <a name="cloudwatch_logs_log_group_arn_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsLogGroupArnInput"></a>

```python
cloudwatch_logs_log_group_arn_input: str
```

- *Type:* str

---

##### `cloudwatch_logs_role_arn_input`<sup>Optional</sup> <a name="cloudwatch_logs_role_arn_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsRoleArnInput"></a>

```python
cloudwatch_logs_role_arn_input: str
```

- *Type:* str

---

##### `enable_log_file_validation_input`<sup>Optional</sup> <a name="enable_log_file_validation_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.enableLogFileValidationInput"></a>

```python
enable_log_file_validation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_selectors_input`<sup>Optional</sup> <a name="event_selectors_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.eventSelectorsInput"></a>

```python
event_selectors_input: IResolvable | typing.List[CloudtrailTrailEventSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>]

---

##### `include_global_service_events_input`<sup>Optional</sup> <a name="include_global_service_events_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.includeGlobalServiceEventsInput"></a>

```python
include_global_service_events_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `insight_selectors_input`<sup>Optional</sup> <a name="insight_selectors_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.insightSelectorsInput"></a>

```python
insight_selectors_input: IResolvable | typing.List[CloudtrailTrailInsightSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>]

---

##### `is_logging_input`<sup>Optional</sup> <a name="is_logging_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isLoggingInput"></a>

```python
is_logging_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_multi_region_trail_input`<sup>Optional</sup> <a name="is_multi_region_trail_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isMultiRegionTrailInput"></a>

```python
is_multi_region_trail_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_organization_trail_input`<sup>Optional</sup> <a name="is_organization_trail_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isOrganizationTrailInput"></a>

```python
is_organization_trail_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `s3_bucket_name_input`<sup>Optional</sup> <a name="s3_bucket_name_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3BucketNameInput"></a>

```python
s3_bucket_name_input: str
```

- *Type:* str

---

##### `s3_key_prefix_input`<sup>Optional</sup> <a name="s3_key_prefix_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3KeyPrefixInput"></a>

```python
s3_key_prefix_input: str
```

- *Type:* str

---

##### `sns_topic_name_input`<sup>Optional</sup> <a name="sns_topic_name_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicNameInput"></a>

```python
sns_topic_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CloudtrailTrailTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>]

---

##### `trail_name_input`<sup>Optional</sup> <a name="trail_name_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.trailNameInput"></a>

```python
trail_name_input: str
```

- *Type:* str

---

##### `cloudwatch_logs_log_group_arn`<sup>Required</sup> <a name="cloudwatch_logs_log_group_arn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsLogGroupArn"></a>

```python
cloudwatch_logs_log_group_arn: str
```

- *Type:* str

---

##### `cloudwatch_logs_role_arn`<sup>Required</sup> <a name="cloudwatch_logs_role_arn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsRoleArn"></a>

```python
cloudwatch_logs_role_arn: str
```

- *Type:* str

---

##### `enable_log_file_validation`<sup>Required</sup> <a name="enable_log_file_validation" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.enableLogFileValidation"></a>

```python
enable_log_file_validation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `include_global_service_events`<sup>Required</sup> <a name="include_global_service_events" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.includeGlobalServiceEvents"></a>

```python
include_global_service_events: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_logging`<sup>Required</sup> <a name="is_logging" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isLogging"></a>

```python
is_logging: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_multi_region_trail`<sup>Required</sup> <a name="is_multi_region_trail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isMultiRegionTrail"></a>

```python
is_multi_region_trail: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_organization_trail`<sup>Required</sup> <a name="is_organization_trail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isOrganizationTrail"></a>

```python
is_organization_trail: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `s3_key_prefix`<sup>Required</sup> <a name="s3_key_prefix" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

---

##### `sns_topic_name`<sup>Required</sup> <a name="sns_topic_name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicName"></a>

```python
sns_topic_name: str
```

- *Type:* str

---

##### `trail_name`<sup>Required</sup> <a name="trail_name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.trailName"></a>

```python
trail_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudtrailTrailAdvancedEventSelectors <a name="CloudtrailTrailAdvancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors(
  field_selectors: IResolvable | typing.List[CloudtrailTrailAdvancedEventSelectorsFieldSelectors] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors.property.fieldSelectors">field_selectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>]</code> | Contains all selector statements in an advanced event selector. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors.property.name">name</a></code> | <code>str</code> | An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets". |

---

##### `field_selectors`<sup>Optional</sup> <a name="field_selectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors.property.fieldSelectors"></a>

```python
field_selectors: IResolvable | typing.List[CloudtrailTrailAdvancedEventSelectorsFieldSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>]

Contains all selector statements in an advanced event selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#field_selectors CloudtrailTrail#field_selectors}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors.property.name"></a>

```python
name: str
```

- *Type:* str

An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#name CloudtrailTrail#name}

---

### CloudtrailTrailAdvancedEventSelectorsFieldSelectors <a name="CloudtrailTrailAdvancedEventSelectorsFieldSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors(
  ends_with: typing.List[str] = None,
  equal_to: typing.List[str] = None,
  field: str = None,
  not_ends_with: typing.List[str] = None,
  not_equals: typing.List[str] = None,
  not_starts_with: typing.List[str] = None,
  starts_with: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.endsWith">ends_with</a></code> | <code>typing.List[str]</code> | An operator that includes events that match the last few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.equalTo">equal_to</a></code> | <code>typing.List[str]</code> | An operator that includes events that match the exact value of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.field">field</a></code> | <code>str</code> | A field in an event record on which to filter events to be logged. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notEndsWith">not_ends_with</a></code> | <code>typing.List[str]</code> | An operator that excludes events that match the last few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notEquals">not_equals</a></code> | <code>typing.List[str]</code> | An operator that excludes events that match the exact value of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notStartsWith">not_starts_with</a></code> | <code>typing.List[str]</code> | An operator that excludes events that match the first few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.startsWith">starts_with</a></code> | <code>typing.List[str]</code> | An operator that includes events that match the first few characters of the event record field specified as the value of Field. |

---

##### `ends_with`<sup>Optional</sup> <a name="ends_with" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.endsWith"></a>

```python
ends_with: typing.List[str]
```

- *Type:* typing.List[str]

An operator that includes events that match the last few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#ends_with CloudtrailTrail#ends_with}

---

##### `equal_to`<sup>Optional</sup> <a name="equal_to" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.equalTo"></a>

```python
equal_to: typing.List[str]
```

- *Type:* typing.List[str]

An operator that includes events that match the exact value of the event record field specified as the value of Field.

This is the only valid operator that you can use with the readOnly, eventCategory, and resources.type fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#equals CloudtrailTrail#equals}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.field"></a>

```python
field: str
```

- *Type:* str

A field in an event record on which to filter events to be logged.

Supported fields include readOnly, eventCategory, eventSource (for management events), eventName, resources.type, and resources.ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#field CloudtrailTrail#field}

---

##### `not_ends_with`<sup>Optional</sup> <a name="not_ends_with" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notEndsWith"></a>

```python
not_ends_with: typing.List[str]
```

- *Type:* typing.List[str]

An operator that excludes events that match the last few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#not_ends_with CloudtrailTrail#not_ends_with}

---

##### `not_equals`<sup>Optional</sup> <a name="not_equals" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notEquals"></a>

```python
not_equals: typing.List[str]
```

- *Type:* typing.List[str]

An operator that excludes events that match the exact value of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#not_equals CloudtrailTrail#not_equals}

---

##### `not_starts_with`<sup>Optional</sup> <a name="not_starts_with" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notStartsWith"></a>

```python
not_starts_with: typing.List[str]
```

- *Type:* typing.List[str]

An operator that excludes events that match the first few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#not_starts_with CloudtrailTrail#not_starts_with}

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.startsWith"></a>

```python
starts_with: typing.List[str]
```

- *Type:* typing.List[str]

An operator that includes events that match the first few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#starts_with CloudtrailTrail#starts_with}

---

### CloudtrailTrailAggregationConfigurations <a name="CloudtrailTrailAggregationConfigurations" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrailAggregationConfigurations(
  event_category: str = None,
  templates: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations.property.eventCategory">event_category</a></code> | <code>str</code> | The category of events to be aggregated. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations.property.templates">templates</a></code> | <code>typing.List[str]</code> | Contains all templates in an aggregation configuration. |

---

##### `event_category`<sup>Optional</sup> <a name="event_category" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations.property.eventCategory"></a>

```python
event_category: str
```

- *Type:* str

The category of events to be aggregated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#event_category CloudtrailTrail#event_category}

---

##### `templates`<sup>Optional</sup> <a name="templates" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations.property.templates"></a>

```python
templates: typing.List[str]
```

- *Type:* typing.List[str]

Contains all templates in an aggregation configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#templates CloudtrailTrail#templates}

---

### CloudtrailTrailConfig <a name="CloudtrailTrailConfig" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrailConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  is_logging: bool | IResolvable,
  s3_bucket_name: str,
  advanced_event_selectors: IResolvable | typing.List[CloudtrailTrailAdvancedEventSelectors] = None,
  aggregation_configurations: IResolvable | typing.List[CloudtrailTrailAggregationConfigurations] = None,
  cloudwatch_logs_log_group_arn: str = None,
  cloudwatch_logs_role_arn: str = None,
  enable_log_file_validation: bool | IResolvable = None,
  event_selectors: IResolvable | typing.List[CloudtrailTrailEventSelectors] = None,
  include_global_service_events: bool | IResolvable = None,
  insight_selectors: IResolvable | typing.List[CloudtrailTrailInsightSelectors] = None,
  is_multi_region_trail: bool | IResolvable = None,
  is_organization_trail: bool | IResolvable = None,
  kms_key_id: str = None,
  s3_key_prefix: str = None,
  sns_topic_name: str = None,
  tags: IResolvable | typing.List[CloudtrailTrailTags] = None,
  trail_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isLogging">is_logging</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the CloudTrail is currently logging AWS API calls. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | Specifies the name of the Amazon S3 bucket designated for publishing log files. See Amazon S3 Bucket Naming Requirements. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.advancedEventSelectors">advanced_event_selectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>]</code> | The advanced event selectors that were used to select events for the data store. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.aggregationConfigurations">aggregation_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>]</code> | Specifies the aggregation configuration to aggregate CloudTrail Events. A maximum of 1 aggregation configuration is allowed. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.cloudwatchLogsLogGroupArn">cloudwatch_logs_log_group_arn</a></code> | <code>str</code> | Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.cloudwatchLogsRoleArn">cloudwatch_logs_role_arn</a></code> | <code>str</code> | Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.enableLogFileValidation">enable_log_file_validation</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether log file validation is enabled. The default is false. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.eventSelectors">event_selectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>]</code> | Use event selectors to further specify the management and data event settings for your trail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.includeGlobalServiceEvents">include_global_service_events</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the trail is publishing events from global services such as IAM to the log files. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.insightSelectors">insight_selectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>]</code> | Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isMultiRegionTrail">is_multi_region_trail</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the trail applies only to the current region or to all regions. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isOrganizationTrail">is_organization_trail</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the trail is created for all accounts in an organization in AWS Organizations, or only for the current AWS account. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.snsTopicName">sns_topic_name</a></code> | <code>str</code> | Specifies the name of the Amazon SNS topic defined for notification of log file delivery. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#tags CloudtrailTrail#tags}. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.trailName">trail_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#trail_name CloudtrailTrail#trail_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `is_logging`<sup>Required</sup> <a name="is_logging" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isLogging"></a>

```python
is_logging: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the CloudTrail is currently logging AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#is_logging CloudtrailTrail#is_logging}

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

Specifies the name of the Amazon S3 bucket designated for publishing log files. See Amazon S3 Bucket Naming Requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#s3_bucket_name CloudtrailTrail#s3_bucket_name}

---

##### `advanced_event_selectors`<sup>Optional</sup> <a name="advanced_event_selectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.advancedEventSelectors"></a>

```python
advanced_event_selectors: IResolvable | typing.List[CloudtrailTrailAdvancedEventSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>]

The advanced event selectors that were used to select events for the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#advanced_event_selectors CloudtrailTrail#advanced_event_selectors}

---

##### `aggregation_configurations`<sup>Optional</sup> <a name="aggregation_configurations" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.aggregationConfigurations"></a>

```python
aggregation_configurations: IResolvable | typing.List[CloudtrailTrailAggregationConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>]

Specifies the aggregation configuration to aggregate CloudTrail Events. A maximum of 1 aggregation configuration is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#aggregation_configurations CloudtrailTrail#aggregation_configurations}

---

##### `cloudwatch_logs_log_group_arn`<sup>Optional</sup> <a name="cloudwatch_logs_log_group_arn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.cloudwatchLogsLogGroupArn"></a>

```python
cloudwatch_logs_log_group_arn: str
```

- *Type:* str

Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered.

Not required unless you specify CloudWatchLogsRoleArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#cloudwatch_logs_log_group_arn CloudtrailTrail#cloudwatch_logs_log_group_arn}

---

##### `cloudwatch_logs_role_arn`<sup>Optional</sup> <a name="cloudwatch_logs_role_arn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.cloudwatchLogsRoleArn"></a>

```python
cloudwatch_logs_role_arn: str
```

- *Type:* str

Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#cloudwatch_logs_role_arn CloudtrailTrail#cloudwatch_logs_role_arn}

---

##### `enable_log_file_validation`<sup>Optional</sup> <a name="enable_log_file_validation" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.enableLogFileValidation"></a>

```python
enable_log_file_validation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether log file validation is enabled. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#enable_log_file_validation CloudtrailTrail#enable_log_file_validation}

---

##### `event_selectors`<sup>Optional</sup> <a name="event_selectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.eventSelectors"></a>

```python
event_selectors: IResolvable | typing.List[CloudtrailTrailEventSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>]

Use event selectors to further specify the management and data event settings for your trail.

By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event. You can configure up to five event selectors for a trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#event_selectors CloudtrailTrail#event_selectors}

---

##### `include_global_service_events`<sup>Optional</sup> <a name="include_global_service_events" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.includeGlobalServiceEvents"></a>

```python
include_global_service_events: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the trail is publishing events from global services such as IAM to the log files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#include_global_service_events CloudtrailTrail#include_global_service_events}

---

##### `insight_selectors`<sup>Optional</sup> <a name="insight_selectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.insightSelectors"></a>

```python
insight_selectors: IResolvable | typing.List[CloudtrailTrailInsightSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>]

Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#insight_selectors CloudtrailTrail#insight_selectors}

---

##### `is_multi_region_trail`<sup>Optional</sup> <a name="is_multi_region_trail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isMultiRegionTrail"></a>

```python
is_multi_region_trail: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the trail applies only to the current region or to all regions.

The default is false. If the trail exists only in the current region and this value is set to true, shadow trails (replications of the trail) will be created in the other regions. If the trail exists in all regions and this value is set to false, the trail will remain in the region where it was created, and its shadow trails in other regions will be deleted. As a best practice, consider using trails that log events in all regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#is_multi_region_trail CloudtrailTrail#is_multi_region_trail}

---

##### `is_organization_trail`<sup>Optional</sup> <a name="is_organization_trail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isOrganizationTrail"></a>

```python
is_organization_trail: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the trail is created for all accounts in an organization in AWS Organizations, or only for the current AWS account.

The default is false, and cannot be true unless the call is made on behalf of an AWS account that is the master account for an organization in AWS Organizations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#is_organization_trail CloudtrailTrail#is_organization_trail}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail.

The value can be an alias name prefixed by 'alias/', a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#kms_key_id CloudtrailTrail#kms_key_id}

---

##### `s3_key_prefix`<sup>Optional</sup> <a name="s3_key_prefix" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery.

For more information, see Finding Your CloudTrail Log Files. The maximum length is 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#s3_key_prefix CloudtrailTrail#s3_key_prefix}

---

##### `sns_topic_name`<sup>Optional</sup> <a name="sns_topic_name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.snsTopicName"></a>

```python
sns_topic_name: str
```

- *Type:* str

Specifies the name of the Amazon SNS topic defined for notification of log file delivery.

The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#sns_topic_name CloudtrailTrail#sns_topic_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CloudtrailTrailTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#tags CloudtrailTrail#tags}.

---

##### `trail_name`<sup>Optional</sup> <a name="trail_name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.trailName"></a>

```python
trail_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#trail_name CloudtrailTrail#trail_name}.

---

### CloudtrailTrailEventSelectors <a name="CloudtrailTrailEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrailEventSelectors(
  data_resources: IResolvable | typing.List[CloudtrailTrailEventSelectorsDataResources] = None,
  exclude_management_event_sources: typing.List[str] = None,
  include_management_events: bool | IResolvable = None,
  read_write_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.dataResources">data_resources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#data_resources CloudtrailTrail#data_resources}. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.excludeManagementEventSources">exclude_management_event_sources</a></code> | <code>typing.List[str]</code> | An optional list of service event sources from which you do not want management events to be logged on your trail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.includeManagementEvents">include_management_events</a></code> | <code>bool \| cdktn.IResolvable</code> | Specify if you want your event selector to include management events for your trail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.readWriteType">read_write_type</a></code> | <code>str</code> | Specify if you want your trail to log read-only events, write-only events, or all. |

---

##### `data_resources`<sup>Optional</sup> <a name="data_resources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.dataResources"></a>

```python
data_resources: IResolvable | typing.List[CloudtrailTrailEventSelectorsDataResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#data_resources CloudtrailTrail#data_resources}.

---

##### `exclude_management_event_sources`<sup>Optional</sup> <a name="exclude_management_event_sources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.excludeManagementEventSources"></a>

```python
exclude_management_event_sources: typing.List[str]
```

- *Type:* typing.List[str]

An optional list of service event sources from which you do not want management events to be logged on your trail.

In this release, the list can be empty (disables the filter), or it can filter out AWS Key Management Service events by containing "kms.amazonaws.com". By default, ExcludeManagementEventSources is empty, and AWS KMS events are included in events that are logged to your trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#exclude_management_event_sources CloudtrailTrail#exclude_management_event_sources}

---

##### `include_management_events`<sup>Optional</sup> <a name="include_management_events" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.includeManagementEvents"></a>

```python
include_management_events: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specify if you want your event selector to include management events for your trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#include_management_events CloudtrailTrail#include_management_events}

---

##### `read_write_type`<sup>Optional</sup> <a name="read_write_type" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.readWriteType"></a>

```python
read_write_type: str
```

- *Type:* str

Specify if you want your trail to log read-only events, write-only events, or all.

For example, the EC2 GetConsoleOutput is a read-only API operation and RunInstances is a write-only API operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#read_write_type CloudtrailTrail#read_write_type}

---

### CloudtrailTrailEventSelectorsDataResources <a name="CloudtrailTrailEventSelectorsDataResources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources(
  type: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources.property.type">type</a></code> | <code>str</code> | The resource type in which you want to log data events. You can specify AWS::S3::Object or AWS::Lambda::Function resources. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources.property.values">values</a></code> | <code>typing.List[str]</code> | An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified objects. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources.property.type"></a>

```python
type: str
```

- *Type:* str

The resource type in which you want to log data events. You can specify AWS::S3::Object or AWS::Lambda::Function resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#type CloudtrailTrail#type}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#values CloudtrailTrail#values}

---

### CloudtrailTrailInsightSelectors <a name="CloudtrailTrailInsightSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrailInsightSelectors(
  event_categories: typing.List[str] = None,
  insight_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors.property.eventCategories">event_categories</a></code> | <code>typing.List[str]</code> | The categories of events for which to log insights. By default, insights are logged for management events only. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors.property.insightType">insight_type</a></code> | <code>str</code> | The type of insight to log on a trail. |

---

##### `event_categories`<sup>Optional</sup> <a name="event_categories" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors.property.eventCategories"></a>

```python
event_categories: typing.List[str]
```

- *Type:* typing.List[str]

The categories of events for which to log insights. By default, insights are logged for management events only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#event_categories CloudtrailTrail#event_categories}

---

##### `insight_type`<sup>Optional</sup> <a name="insight_type" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors.property.insightType"></a>

```python
insight_type: str
```

- *Type:* str

The type of insight to log on a trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#insight_type CloudtrailTrail#insight_type}

---

### CloudtrailTrailTags <a name="CloudtrailTrailTags" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrailTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#key CloudtrailTrail#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudtrail_trail#value CloudtrailTrail#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList <a name="CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudtrailTrailAdvancedEventSelectorsFieldSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>]

---


### CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference <a name="CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetEndsWith">reset_ends_with</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetEqualTo">reset_equal_to</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetField">reset_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEndsWith">reset_not_ends_with</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEquals">reset_not_equals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotStartsWith">reset_not_starts_with</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetStartsWith">reset_starts_with</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ends_with` <a name="reset_ends_with" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetEndsWith"></a>

```python
def reset_ends_with() -> None
```

##### `reset_equal_to` <a name="reset_equal_to" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetEqualTo"></a>

```python
def reset_equal_to() -> None
```

##### `reset_field` <a name="reset_field" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetField"></a>

```python
def reset_field() -> None
```

##### `reset_not_ends_with` <a name="reset_not_ends_with" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEndsWith"></a>

```python
def reset_not_ends_with() -> None
```

##### `reset_not_equals` <a name="reset_not_equals" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEquals"></a>

```python
def reset_not_equals() -> None
```

##### `reset_not_starts_with` <a name="reset_not_starts_with" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotStartsWith"></a>

```python
def reset_not_starts_with() -> None
```

##### `reset_starts_with` <a name="reset_starts_with" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetStartsWith"></a>

```python
def reset_starts_with() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWithInput">ends_with_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalToInput">equal_to_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWithInput">not_ends_with_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEqualsInput">not_equals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWithInput">not_starts_with_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWithInput">starts_with_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith">ends_with</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo">equal_to</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith">not_ends_with</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals">not_equals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith">not_starts_with</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith">starts_with</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ends_with_input`<sup>Optional</sup> <a name="ends_with_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWithInput"></a>

```python
ends_with_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `equal_to_input`<sup>Optional</sup> <a name="equal_to_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalToInput"></a>

```python
equal_to_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `not_ends_with_input`<sup>Optional</sup> <a name="not_ends_with_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWithInput"></a>

```python
not_ends_with_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_equals_input`<sup>Optional</sup> <a name="not_equals_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEqualsInput"></a>

```python
not_equals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_starts_with_input`<sup>Optional</sup> <a name="not_starts_with_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWithInput"></a>

```python
not_starts_with_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `starts_with_input`<sup>Optional</sup> <a name="starts_with_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWithInput"></a>

```python
starts_with_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ends_with`<sup>Required</sup> <a name="ends_with" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith"></a>

```python
ends_with: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `equal_to`<sup>Required</sup> <a name="equal_to" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo"></a>

```python
equal_to: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `not_ends_with`<sup>Required</sup> <a name="not_ends_with" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith"></a>

```python
not_ends_with: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_equals`<sup>Required</sup> <a name="not_equals" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals"></a>

```python
not_equals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_starts_with`<sup>Required</sup> <a name="not_starts_with" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith"></a>

```python
not_starts_with: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `starts_with`<sup>Required</sup> <a name="starts_with" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith"></a>

```python
starts_with: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudtrailTrailAdvancedEventSelectorsFieldSelectors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>

---


### CloudtrailTrailAdvancedEventSelectorsList <a name="CloudtrailTrailAdvancedEventSelectorsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudtrailTrailAdvancedEventSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudtrailTrailAdvancedEventSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>]

---


### CloudtrailTrailAdvancedEventSelectorsOutputReference <a name="CloudtrailTrailAdvancedEventSelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.putFieldSelectors">put_field_selectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resetFieldSelectors">reset_field_selectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_field_selectors` <a name="put_field_selectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.putFieldSelectors"></a>

```python
def put_field_selectors(
  value: IResolvable | typing.List[CloudtrailTrailAdvancedEventSelectorsFieldSelectors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.putFieldSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>]

---

##### `reset_field_selectors` <a name="reset_field_selectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resetFieldSelectors"></a>

```python
def reset_field_selectors() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fieldSelectors">field_selectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList">CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fieldSelectorsInput">field_selectors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_selectors`<sup>Required</sup> <a name="field_selectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fieldSelectors"></a>

```python
field_selectors: CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList">CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList</a>

---

##### `field_selectors_input`<sup>Optional</sup> <a name="field_selectors_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fieldSelectorsInput"></a>

```python
field_selectors_input: IResolvable | typing.List[CloudtrailTrailAdvancedEventSelectorsFieldSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudtrailTrailAdvancedEventSelectors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>

---


### CloudtrailTrailAggregationConfigurationsList <a name="CloudtrailTrailAggregationConfigurationsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudtrailTrailAggregationConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudtrailTrailAggregationConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>]

---


### CloudtrailTrailAggregationConfigurationsOutputReference <a name="CloudtrailTrailAggregationConfigurationsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resetEventCategory">reset_event_category</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resetTemplates">reset_templates</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_event_category` <a name="reset_event_category" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resetEventCategory"></a>

```python
def reset_event_category() -> None
```

##### `reset_templates` <a name="reset_templates" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resetTemplates"></a>

```python
def reset_templates() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.eventCategoryInput">event_category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.templatesInput">templates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.eventCategory">event_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.templates">templates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_category_input`<sup>Optional</sup> <a name="event_category_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.eventCategoryInput"></a>

```python
event_category_input: str
```

- *Type:* str

---

##### `templates_input`<sup>Optional</sup> <a name="templates_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.templatesInput"></a>

```python
templates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `event_category`<sup>Required</sup> <a name="event_category" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.eventCategory"></a>

```python
event_category: str
```

- *Type:* str

---

##### `templates`<sup>Required</sup> <a name="templates" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.templates"></a>

```python
templates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudtrailTrailAggregationConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>

---


### CloudtrailTrailEventSelectorsDataResourcesList <a name="CloudtrailTrailEventSelectorsDataResourcesList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudtrailTrailEventSelectorsDataResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudtrailTrailEventSelectorsDataResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>]

---


### CloudtrailTrailEventSelectorsDataResourcesOutputReference <a name="CloudtrailTrailEventSelectorsDataResourcesOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudtrailTrailEventSelectorsDataResources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>

---


### CloudtrailTrailEventSelectorsList <a name="CloudtrailTrailEventSelectorsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrailEventSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudtrailTrailEventSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudtrailTrailEventSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>]

---


### CloudtrailTrailEventSelectorsOutputReference <a name="CloudtrailTrailEventSelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.putDataResources">put_data_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetDataResources">reset_data_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetExcludeManagementEventSources">reset_exclude_management_event_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetIncludeManagementEvents">reset_include_management_events</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetReadWriteType">reset_read_write_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_resources` <a name="put_data_resources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.putDataResources"></a>

```python
def put_data_resources(
  value: IResolvable | typing.List[CloudtrailTrailEventSelectorsDataResources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.putDataResources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>]

---

##### `reset_data_resources` <a name="reset_data_resources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetDataResources"></a>

```python
def reset_data_resources() -> None
```

##### `reset_exclude_management_event_sources` <a name="reset_exclude_management_event_sources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetExcludeManagementEventSources"></a>

```python
def reset_exclude_management_event_sources() -> None
```

##### `reset_include_management_events` <a name="reset_include_management_events" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetIncludeManagementEvents"></a>

```python
def reset_include_management_events() -> None
```

##### `reset_read_write_type` <a name="reset_read_write_type" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetReadWriteType"></a>

```python
def reset_read_write_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.dataResources">data_resources</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList">CloudtrailTrailEventSelectorsDataResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.dataResourcesInput">data_resources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.excludeManagementEventSourcesInput">exclude_management_event_sources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.includeManagementEventsInput">include_management_events_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.readWriteTypeInput">read_write_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.excludeManagementEventSources">exclude_management_event_sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.includeManagementEvents">include_management_events</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.readWriteType">read_write_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_resources`<sup>Required</sup> <a name="data_resources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.dataResources"></a>

```python
data_resources: CloudtrailTrailEventSelectorsDataResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList">CloudtrailTrailEventSelectorsDataResourcesList</a>

---

##### `data_resources_input`<sup>Optional</sup> <a name="data_resources_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.dataResourcesInput"></a>

```python
data_resources_input: IResolvable | typing.List[CloudtrailTrailEventSelectorsDataResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>]

---

##### `exclude_management_event_sources_input`<sup>Optional</sup> <a name="exclude_management_event_sources_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.excludeManagementEventSourcesInput"></a>

```python
exclude_management_event_sources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_management_events_input`<sup>Optional</sup> <a name="include_management_events_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.includeManagementEventsInput"></a>

```python
include_management_events_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `read_write_type_input`<sup>Optional</sup> <a name="read_write_type_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.readWriteTypeInput"></a>

```python
read_write_type_input: str
```

- *Type:* str

---

##### `exclude_management_event_sources`<sup>Required</sup> <a name="exclude_management_event_sources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.excludeManagementEventSources"></a>

```python
exclude_management_event_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_management_events`<sup>Required</sup> <a name="include_management_events" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.includeManagementEvents"></a>

```python
include_management_events: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `read_write_type`<sup>Required</sup> <a name="read_write_type" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.readWriteType"></a>

```python
read_write_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudtrailTrailEventSelectors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>

---


### CloudtrailTrailInsightSelectorsList <a name="CloudtrailTrailInsightSelectorsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrailInsightSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudtrailTrailInsightSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudtrailTrailInsightSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>]

---


### CloudtrailTrailInsightSelectorsOutputReference <a name="CloudtrailTrailInsightSelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resetEventCategories">reset_event_categories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resetInsightType">reset_insight_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_event_categories` <a name="reset_event_categories" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resetEventCategories"></a>

```python
def reset_event_categories() -> None
```

##### `reset_insight_type` <a name="reset_insight_type" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resetInsightType"></a>

```python
def reset_insight_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.eventCategoriesInput">event_categories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.insightTypeInput">insight_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.eventCategories">event_categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.insightType">insight_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_categories_input`<sup>Optional</sup> <a name="event_categories_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.eventCategoriesInput"></a>

```python
event_categories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `insight_type_input`<sup>Optional</sup> <a name="insight_type_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.insightTypeInput"></a>

```python
insight_type_input: str
```

- *Type:* str

---

##### `event_categories`<sup>Required</sup> <a name="event_categories" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.eventCategories"></a>

```python
event_categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `insight_type`<sup>Required</sup> <a name="insight_type" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.insightType"></a>

```python
insight_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudtrailTrailInsightSelectors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>

---


### CloudtrailTrailTagsList <a name="CloudtrailTrailTagsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrailTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudtrailTrailTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudtrailTrailTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>]

---


### CloudtrailTrailTagsOutputReference <a name="CloudtrailTrailTagsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudtrail_trail

cloudtrailTrail.CloudtrailTrailTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudtrailTrailTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>

---



