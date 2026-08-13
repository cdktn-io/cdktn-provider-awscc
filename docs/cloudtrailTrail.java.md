# `cloudtrailTrail` Submodule <a name="`cloudtrailTrail` Submodule" id="@cdktn/provider-awscc.cloudtrailTrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudtrailTrail <a name="CloudtrailTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail awscc_cloudtrail_trail}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrail;

CloudtrailTrail.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .isLogging(java.lang.Boolean|IResolvable)
    .s3BucketName(java.lang.String)
//  .advancedEventSelectors(IResolvable|java.util.List<CloudtrailTrailAdvancedEventSelectors>)
//  .aggregationConfigurations(IResolvable|java.util.List<CloudtrailTrailAggregationConfigurations>)
//  .cloudwatchLogsLogGroupArn(java.lang.String)
//  .cloudwatchLogsRoleArn(java.lang.String)
//  .enableLogFileValidation(java.lang.Boolean|IResolvable)
//  .eventSelectors(IResolvable|java.util.List<CloudtrailTrailEventSelectors>)
//  .includeGlobalServiceEvents(java.lang.Boolean|IResolvable)
//  .insightSelectors(IResolvable|java.util.List<CloudtrailTrailInsightSelectors>)
//  .isMultiRegionTrail(java.lang.Boolean|IResolvable)
//  .isOrganizationTrail(java.lang.Boolean|IResolvable)
//  .kmsKeyId(java.lang.String)
//  .s3KeyPrefix(java.lang.String)
//  .snsTopicName(java.lang.String)
//  .tags(IResolvable|java.util.List<CloudtrailTrailTags>)
//  .trailName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.isLogging">isLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the CloudTrail is currently logging AWS API calls. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | Specifies the name of the Amazon S3 bucket designated for publishing log files. See Amazon S3 Bucket Naming Requirements. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.advancedEventSelectors">advancedEventSelectors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>></code> | The advanced event selectors that were used to select events for the data store. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.aggregationConfigurations">aggregationConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>></code> | Specifies the aggregation configuration to aggregate CloudTrail Events. A maximum of 1 aggregation configuration is allowed. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.cloudwatchLogsLogGroupArn">cloudwatchLogsLogGroupArn</a></code> | <code>java.lang.String</code> | Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.cloudwatchLogsRoleArn">cloudwatchLogsRoleArn</a></code> | <code>java.lang.String</code> | Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.enableLogFileValidation">enableLogFileValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether log file validation is enabled. The default is false. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.eventSelectors">eventSelectors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>></code> | Use event selectors to further specify the management and data event settings for your trail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.includeGlobalServiceEvents">includeGlobalServiceEvents</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the trail is publishing events from global services such as IAM to the log files. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.insightSelectors">insightSelectors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>></code> | Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.isMultiRegionTrail">isMultiRegionTrail</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the trail applies only to the current region or to all regions. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.isOrganizationTrail">isOrganizationTrail</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the trail is created for all accounts in an organization in AWS Organizations, or only for the current AWS account. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.s3KeyPrefix">s3KeyPrefix</a></code> | <code>java.lang.String</code> | Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.snsTopicName">snsTopicName</a></code> | <code>java.lang.String</code> | Specifies the name of the Amazon SNS topic defined for notification of log file delivery. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#tags CloudtrailTrail#tags}. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.trailName">trailName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#trail_name CloudtrailTrail#trail_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `isLogging`<sup>Required</sup> <a name="isLogging" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.isLogging"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the CloudTrail is currently logging AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#is_logging CloudtrailTrail#is_logging}

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.s3BucketName"></a>

- *Type:* java.lang.String

Specifies the name of the Amazon S3 bucket designated for publishing log files. See Amazon S3 Bucket Naming Requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#s3_bucket_name CloudtrailTrail#s3_bucket_name}

---

##### `advancedEventSelectors`<sup>Optional</sup> <a name="advancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.advancedEventSelectors"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>>

The advanced event selectors that were used to select events for the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#advanced_event_selectors CloudtrailTrail#advanced_event_selectors}

---

##### `aggregationConfigurations`<sup>Optional</sup> <a name="aggregationConfigurations" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.aggregationConfigurations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>>

Specifies the aggregation configuration to aggregate CloudTrail Events. A maximum of 1 aggregation configuration is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#aggregation_configurations CloudtrailTrail#aggregation_configurations}

---

##### `cloudwatchLogsLogGroupArn`<sup>Optional</sup> <a name="cloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.cloudwatchLogsLogGroupArn"></a>

- *Type:* java.lang.String

Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered.

Not required unless you specify CloudWatchLogsRoleArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#cloudwatch_logs_log_group_arn CloudtrailTrail#cloudwatch_logs_log_group_arn}

---

##### `cloudwatchLogsRoleArn`<sup>Optional</sup> <a name="cloudwatchLogsRoleArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.cloudwatchLogsRoleArn"></a>

- *Type:* java.lang.String

Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#cloudwatch_logs_role_arn CloudtrailTrail#cloudwatch_logs_role_arn}

---

##### `enableLogFileValidation`<sup>Optional</sup> <a name="enableLogFileValidation" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.enableLogFileValidation"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether log file validation is enabled. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#enable_log_file_validation CloudtrailTrail#enable_log_file_validation}

---

##### `eventSelectors`<sup>Optional</sup> <a name="eventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.eventSelectors"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>>

Use event selectors to further specify the management and data event settings for your trail.

By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event. You can configure up to five event selectors for a trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#event_selectors CloudtrailTrail#event_selectors}

---

##### `includeGlobalServiceEvents`<sup>Optional</sup> <a name="includeGlobalServiceEvents" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.includeGlobalServiceEvents"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the trail is publishing events from global services such as IAM to the log files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#include_global_service_events CloudtrailTrail#include_global_service_events}

---

##### `insightSelectors`<sup>Optional</sup> <a name="insightSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.insightSelectors"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>>

Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#insight_selectors CloudtrailTrail#insight_selectors}

---

##### `isMultiRegionTrail`<sup>Optional</sup> <a name="isMultiRegionTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.isMultiRegionTrail"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the trail applies only to the current region or to all regions.

The default is false. If the trail exists only in the current region and this value is set to true, shadow trails (replications of the trail) will be created in the other regions. If the trail exists in all regions and this value is set to false, the trail will remain in the region where it was created, and its shadow trails in other regions will be deleted. As a best practice, consider using trails that log events in all regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#is_multi_region_trail CloudtrailTrail#is_multi_region_trail}

---

##### `isOrganizationTrail`<sup>Optional</sup> <a name="isOrganizationTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.isOrganizationTrail"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the trail is created for all accounts in an organization in AWS Organizations, or only for the current AWS account.

The default is false, and cannot be true unless the call is made on behalf of an AWS account that is the master account for an organization in AWS Organizations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#is_organization_trail CloudtrailTrail#is_organization_trail}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail.

The value can be an alias name prefixed by 'alias/', a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#kms_key_id CloudtrailTrail#kms_key_id}

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="s3KeyPrefix" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.s3KeyPrefix"></a>

- *Type:* java.lang.String

Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery.

For more information, see Finding Your CloudTrail Log Files. The maximum length is 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#s3_key_prefix CloudtrailTrail#s3_key_prefix}

---

##### `snsTopicName`<sup>Optional</sup> <a name="snsTopicName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.snsTopicName"></a>

- *Type:* java.lang.String

Specifies the name of the Amazon SNS topic defined for notification of log file delivery.

The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#sns_topic_name CloudtrailTrail#sns_topic_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#tags CloudtrailTrail#tags}.

---

##### `trailName`<sup>Optional</sup> <a name="trailName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.Initializer.parameter.trailName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#trail_name CloudtrailTrail#trail_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAdvancedEventSelectors">putAdvancedEventSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAggregationConfigurations">putAggregationConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putEventSelectors">putEventSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putInsightSelectors">putInsightSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetAdvancedEventSelectors">resetAdvancedEventSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetAggregationConfigurations">resetAggregationConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetCloudwatchLogsLogGroupArn">resetCloudwatchLogsLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetCloudwatchLogsRoleArn">resetCloudwatchLogsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetEnableLogFileValidation">resetEnableLogFileValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetEventSelectors">resetEventSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIncludeGlobalServiceEvents">resetIncludeGlobalServiceEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetInsightSelectors">resetInsightSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIsMultiRegionTrail">resetIsMultiRegionTrail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIsOrganizationTrail">resetIsOrganizationTrail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetS3KeyPrefix">resetS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetSnsTopicName">resetSnsTopicName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetTrailName">resetTrailName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedEventSelectors` <a name="putAdvancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAdvancedEventSelectors"></a>

```java
public void putAdvancedEventSelectors(IResolvable|java.util.List<CloudtrailTrailAdvancedEventSelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAdvancedEventSelectors.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>>

---

##### `putAggregationConfigurations` <a name="putAggregationConfigurations" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAggregationConfigurations"></a>

```java
public void putAggregationConfigurations(IResolvable|java.util.List<CloudtrailTrailAggregationConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putAggregationConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>>

---

##### `putEventSelectors` <a name="putEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putEventSelectors"></a>

```java
public void putEventSelectors(IResolvable|java.util.List<CloudtrailTrailEventSelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putEventSelectors.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>>

---

##### `putInsightSelectors` <a name="putInsightSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putInsightSelectors"></a>

```java
public void putInsightSelectors(IResolvable|java.util.List<CloudtrailTrailInsightSelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putInsightSelectors.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CloudtrailTrailTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>>

---

##### `resetAdvancedEventSelectors` <a name="resetAdvancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetAdvancedEventSelectors"></a>

```java
public void resetAdvancedEventSelectors()
```

##### `resetAggregationConfigurations` <a name="resetAggregationConfigurations" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetAggregationConfigurations"></a>

```java
public void resetAggregationConfigurations()
```

##### `resetCloudwatchLogsLogGroupArn` <a name="resetCloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetCloudwatchLogsLogGroupArn"></a>

```java
public void resetCloudwatchLogsLogGroupArn()
```

##### `resetCloudwatchLogsRoleArn` <a name="resetCloudwatchLogsRoleArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetCloudwatchLogsRoleArn"></a>

```java
public void resetCloudwatchLogsRoleArn()
```

##### `resetEnableLogFileValidation` <a name="resetEnableLogFileValidation" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetEnableLogFileValidation"></a>

```java
public void resetEnableLogFileValidation()
```

##### `resetEventSelectors` <a name="resetEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetEventSelectors"></a>

```java
public void resetEventSelectors()
```

##### `resetIncludeGlobalServiceEvents` <a name="resetIncludeGlobalServiceEvents" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIncludeGlobalServiceEvents"></a>

```java
public void resetIncludeGlobalServiceEvents()
```

##### `resetInsightSelectors` <a name="resetInsightSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetInsightSelectors"></a>

```java
public void resetInsightSelectors()
```

##### `resetIsMultiRegionTrail` <a name="resetIsMultiRegionTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIsMultiRegionTrail"></a>

```java
public void resetIsMultiRegionTrail()
```

##### `resetIsOrganizationTrail` <a name="resetIsOrganizationTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetIsOrganizationTrail"></a>

```java
public void resetIsOrganizationTrail()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetS3KeyPrefix` <a name="resetS3KeyPrefix" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetS3KeyPrefix"></a>

```java
public void resetS3KeyPrefix()
```

##### `resetSnsTopicName` <a name="resetSnsTopicName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetSnsTopicName"></a>

```java
public void resetSnsTopicName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetTags"></a>

```java
public void resetTags()
```

##### `resetTrailName` <a name="resetTrailName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.resetTrailName"></a>

```java
public void resetTrailName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudtrailTrail resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrail;

CloudtrailTrail.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrail;

CloudtrailTrail.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrail;

CloudtrailTrail.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrail;

CloudtrailTrail.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudtrailTrail.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudtrailTrail resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudtrailTrail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudtrailTrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudtrailTrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.advancedEventSelectors">advancedEventSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList">CloudtrailTrailAdvancedEventSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.aggregationConfigurations">aggregationConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList">CloudtrailTrailAggregationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.eventSelectors">eventSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList">CloudtrailTrailEventSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.insightSelectors">insightSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList">CloudtrailTrailInsightSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList">CloudtrailTrailTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.advancedEventSelectorsInput">advancedEventSelectorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.aggregationConfigurationsInput">aggregationConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsLogGroupArnInput">cloudwatchLogsLogGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsRoleArnInput">cloudwatchLogsRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.enableLogFileValidationInput">enableLogFileValidationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.eventSelectorsInput">eventSelectorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.includeGlobalServiceEventsInput">includeGlobalServiceEventsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.insightSelectorsInput">insightSelectorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isLoggingInput">isLoggingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isMultiRegionTrailInput">isMultiRegionTrailInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isOrganizationTrailInput">isOrganizationTrailInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3KeyPrefixInput">s3KeyPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicNameInput">snsTopicNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.trailNameInput">trailNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsLogGroupArn">cloudwatchLogsLogGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsRoleArn">cloudwatchLogsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.enableLogFileValidation">enableLogFileValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.includeGlobalServiceEvents">includeGlobalServiceEvents</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isLogging">isLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isMultiRegionTrail">isMultiRegionTrail</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isOrganizationTrail">isOrganizationTrail</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicName">snsTopicName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.trailName">trailName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `advancedEventSelectors`<sup>Required</sup> <a name="advancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.advancedEventSelectors"></a>

```java
public CloudtrailTrailAdvancedEventSelectorsList getAdvancedEventSelectors();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList">CloudtrailTrailAdvancedEventSelectorsList</a>

---

##### `aggregationConfigurations`<sup>Required</sup> <a name="aggregationConfigurations" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.aggregationConfigurations"></a>

```java
public CloudtrailTrailAggregationConfigurationsList getAggregationConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList">CloudtrailTrailAggregationConfigurationsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `eventSelectors`<sup>Required</sup> <a name="eventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.eventSelectors"></a>

```java
public CloudtrailTrailEventSelectorsList getEventSelectors();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList">CloudtrailTrailEventSelectorsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `insightSelectors`<sup>Required</sup> <a name="insightSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.insightSelectors"></a>

```java
public CloudtrailTrailInsightSelectorsList getInsightSelectors();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList">CloudtrailTrailInsightSelectorsList</a>

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tags"></a>

```java
public CloudtrailTrailTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList">CloudtrailTrailTagsList</a>

---

##### `advancedEventSelectorsInput`<sup>Optional</sup> <a name="advancedEventSelectorsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.advancedEventSelectorsInput"></a>

```java
public IResolvable|java.util.List<CloudtrailTrailAdvancedEventSelectors> getAdvancedEventSelectorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>>

---

##### `aggregationConfigurationsInput`<sup>Optional</sup> <a name="aggregationConfigurationsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.aggregationConfigurationsInput"></a>

```java
public IResolvable|java.util.List<CloudtrailTrailAggregationConfigurations> getAggregationConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>>

---

##### `cloudwatchLogsLogGroupArnInput`<sup>Optional</sup> <a name="cloudwatchLogsLogGroupArnInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsLogGroupArnInput"></a>

```java
public java.lang.String getCloudwatchLogsLogGroupArnInput();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogsRoleArnInput`<sup>Optional</sup> <a name="cloudwatchLogsRoleArnInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsRoleArnInput"></a>

```java
public java.lang.String getCloudwatchLogsRoleArnInput();
```

- *Type:* java.lang.String

---

##### `enableLogFileValidationInput`<sup>Optional</sup> <a name="enableLogFileValidationInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.enableLogFileValidationInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableLogFileValidationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventSelectorsInput`<sup>Optional</sup> <a name="eventSelectorsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.eventSelectorsInput"></a>

```java
public IResolvable|java.util.List<CloudtrailTrailEventSelectors> getEventSelectorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>>

---

##### `includeGlobalServiceEventsInput`<sup>Optional</sup> <a name="includeGlobalServiceEventsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.includeGlobalServiceEventsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeGlobalServiceEventsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `insightSelectorsInput`<sup>Optional</sup> <a name="insightSelectorsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.insightSelectorsInput"></a>

```java
public IResolvable|java.util.List<CloudtrailTrailInsightSelectors> getInsightSelectorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>>

---

##### `isLoggingInput`<sup>Optional</sup> <a name="isLoggingInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isLoggingInput"></a>

```java
public java.lang.Boolean|IResolvable getIsLoggingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isMultiRegionTrailInput`<sup>Optional</sup> <a name="isMultiRegionTrailInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isMultiRegionTrailInput"></a>

```java
public java.lang.Boolean|IResolvable getIsMultiRegionTrailInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isOrganizationTrailInput`<sup>Optional</sup> <a name="isOrganizationTrailInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isOrganizationTrailInput"></a>

```java
public java.lang.Boolean|IResolvable getIsOrganizationTrailInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3BucketNameInput"></a>

```java
public java.lang.String getS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `s3KeyPrefixInput`<sup>Optional</sup> <a name="s3KeyPrefixInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3KeyPrefixInput"></a>

```java
public java.lang.String getS3KeyPrefixInput();
```

- *Type:* java.lang.String

---

##### `snsTopicNameInput`<sup>Optional</sup> <a name="snsTopicNameInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicNameInput"></a>

```java
public java.lang.String getSnsTopicNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CloudtrailTrailTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>>

---

##### `trailNameInput`<sup>Optional</sup> <a name="trailNameInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.trailNameInput"></a>

```java
public java.lang.String getTrailNameInput();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogsLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsLogGroupArn"></a>

```java
public java.lang.String getCloudwatchLogsLogGroupArn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogsRoleArn`<sup>Required</sup> <a name="cloudwatchLogsRoleArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.cloudwatchLogsRoleArn"></a>

```java
public java.lang.String getCloudwatchLogsRoleArn();
```

- *Type:* java.lang.String

---

##### `enableLogFileValidation`<sup>Required</sup> <a name="enableLogFileValidation" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.enableLogFileValidation"></a>

```java
public java.lang.Boolean|IResolvable getEnableLogFileValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeGlobalServiceEvents`<sup>Required</sup> <a name="includeGlobalServiceEvents" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.includeGlobalServiceEvents"></a>

```java
public java.lang.Boolean|IResolvable getIncludeGlobalServiceEvents();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isLogging`<sup>Required</sup> <a name="isLogging" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isLogging"></a>

```java
public java.lang.Boolean|IResolvable getIsLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isMultiRegionTrail`<sup>Required</sup> <a name="isMultiRegionTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isMultiRegionTrail"></a>

```java
public java.lang.Boolean|IResolvable getIsMultiRegionTrail();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isOrganizationTrail`<sup>Required</sup> <a name="isOrganizationTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.isOrganizationTrail"></a>

```java
public java.lang.Boolean|IResolvable getIsOrganizationTrail();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.s3KeyPrefix"></a>

```java
public java.lang.String getS3KeyPrefix();
```

- *Type:* java.lang.String

---

##### `snsTopicName`<sup>Required</sup> <a name="snsTopicName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.snsTopicName"></a>

```java
public java.lang.String getSnsTopicName();
```

- *Type:* java.lang.String

---

##### `trailName`<sup>Required</sup> <a name="trailName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.trailName"></a>

```java
public java.lang.String getTrailName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrail.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudtrailTrailAdvancedEventSelectors <a name="CloudtrailTrailAdvancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrailAdvancedEventSelectors;

CloudtrailTrailAdvancedEventSelectors.builder()
//  .fieldSelectors(IResolvable|java.util.List<CloudtrailTrailAdvancedEventSelectorsFieldSelectors>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors.property.fieldSelectors">fieldSelectors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>></code> | Contains all selector statements in an advanced event selector. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors.property.name">name</a></code> | <code>java.lang.String</code> | An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets". |

---

##### `fieldSelectors`<sup>Optional</sup> <a name="fieldSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors.property.fieldSelectors"></a>

```java
public IResolvable|java.util.List<CloudtrailTrailAdvancedEventSelectorsFieldSelectors> getFieldSelectors();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>>

Contains all selector statements in an advanced event selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#field_selectors CloudtrailTrail#field_selectors}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#name CloudtrailTrail#name}

---

### CloudtrailTrailAdvancedEventSelectorsFieldSelectors <a name="CloudtrailTrailAdvancedEventSelectorsFieldSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors;

CloudtrailTrailAdvancedEventSelectorsFieldSelectors.builder()
//  .endsWith(java.util.List<java.lang.String>)
//  .equalTo(java.util.List<java.lang.String>)
//  .field(java.lang.String)
//  .notEndsWith(java.util.List<java.lang.String>)
//  .notEquals(java.util.List<java.lang.String>)
//  .notStartsWith(java.util.List<java.lang.String>)
//  .startsWith(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.endsWith">endsWith</a></code> | <code>java.util.List<java.lang.String></code> | An operator that includes events that match the last few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.equalTo">equalTo</a></code> | <code>java.util.List<java.lang.String></code> | An operator that includes events that match the exact value of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.field">field</a></code> | <code>java.lang.String</code> | A field in an event record on which to filter events to be logged. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notEndsWith">notEndsWith</a></code> | <code>java.util.List<java.lang.String></code> | An operator that excludes events that match the last few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notEquals">notEquals</a></code> | <code>java.util.List<java.lang.String></code> | An operator that excludes events that match the exact value of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notStartsWith">notStartsWith</a></code> | <code>java.util.List<java.lang.String></code> | An operator that excludes events that match the first few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.startsWith">startsWith</a></code> | <code>java.util.List<java.lang.String></code> | An operator that includes events that match the first few characters of the event record field specified as the value of Field. |

---

##### `endsWith`<sup>Optional</sup> <a name="endsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.endsWith"></a>

```java
public java.util.List<java.lang.String> getEndsWith();
```

- *Type:* java.util.List<java.lang.String>

An operator that includes events that match the last few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#ends_with CloudtrailTrail#ends_with}

---

##### `equalTo`<sup>Optional</sup> <a name="equalTo" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.equalTo"></a>

```java
public java.util.List<java.lang.String> getEqualTo();
```

- *Type:* java.util.List<java.lang.String>

An operator that includes events that match the exact value of the event record field specified as the value of Field.

This is the only valid operator that you can use with the readOnly, eventCategory, and resources.type fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#equals CloudtrailTrail#equals}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

A field in an event record on which to filter events to be logged.

Supported fields include readOnly, eventCategory, eventSource (for management events), eventName, resources.type, and resources.ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#field CloudtrailTrail#field}

---

##### `notEndsWith`<sup>Optional</sup> <a name="notEndsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notEndsWith"></a>

```java
public java.util.List<java.lang.String> getNotEndsWith();
```

- *Type:* java.util.List<java.lang.String>

An operator that excludes events that match the last few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#not_ends_with CloudtrailTrail#not_ends_with}

---

##### `notEquals`<sup>Optional</sup> <a name="notEquals" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notEquals"></a>

```java
public java.util.List<java.lang.String> getNotEquals();
```

- *Type:* java.util.List<java.lang.String>

An operator that excludes events that match the exact value of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#not_equals CloudtrailTrail#not_equals}

---

##### `notStartsWith`<sup>Optional</sup> <a name="notStartsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.notStartsWith"></a>

```java
public java.util.List<java.lang.String> getNotStartsWith();
```

- *Type:* java.util.List<java.lang.String>

An operator that excludes events that match the first few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#not_starts_with CloudtrailTrail#not_starts_with}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors.property.startsWith"></a>

```java
public java.util.List<java.lang.String> getStartsWith();
```

- *Type:* java.util.List<java.lang.String>

An operator that includes events that match the first few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#starts_with CloudtrailTrail#starts_with}

---

### CloudtrailTrailAggregationConfigurations <a name="CloudtrailTrailAggregationConfigurations" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrailAggregationConfigurations;

CloudtrailTrailAggregationConfigurations.builder()
//  .eventCategory(java.lang.String)
//  .templates(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations.property.eventCategory">eventCategory</a></code> | <code>java.lang.String</code> | The category of events to be aggregated. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations.property.templates">templates</a></code> | <code>java.util.List<java.lang.String></code> | Contains all templates in an aggregation configuration. |

---

##### `eventCategory`<sup>Optional</sup> <a name="eventCategory" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations.property.eventCategory"></a>

```java
public java.lang.String getEventCategory();
```

- *Type:* java.lang.String

The category of events to be aggregated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#event_category CloudtrailTrail#event_category}

---

##### `templates`<sup>Optional</sup> <a name="templates" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations.property.templates"></a>

```java
public java.util.List<java.lang.String> getTemplates();
```

- *Type:* java.util.List<java.lang.String>

Contains all templates in an aggregation configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#templates CloudtrailTrail#templates}

---

### CloudtrailTrailConfig <a name="CloudtrailTrailConfig" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrailConfig;

CloudtrailTrailConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .isLogging(java.lang.Boolean|IResolvable)
    .s3BucketName(java.lang.String)
//  .advancedEventSelectors(IResolvable|java.util.List<CloudtrailTrailAdvancedEventSelectors>)
//  .aggregationConfigurations(IResolvable|java.util.List<CloudtrailTrailAggregationConfigurations>)
//  .cloudwatchLogsLogGroupArn(java.lang.String)
//  .cloudwatchLogsRoleArn(java.lang.String)
//  .enableLogFileValidation(java.lang.Boolean|IResolvable)
//  .eventSelectors(IResolvable|java.util.List<CloudtrailTrailEventSelectors>)
//  .includeGlobalServiceEvents(java.lang.Boolean|IResolvable)
//  .insightSelectors(IResolvable|java.util.List<CloudtrailTrailInsightSelectors>)
//  .isMultiRegionTrail(java.lang.Boolean|IResolvable)
//  .isOrganizationTrail(java.lang.Boolean|IResolvable)
//  .kmsKeyId(java.lang.String)
//  .s3KeyPrefix(java.lang.String)
//  .snsTopicName(java.lang.String)
//  .tags(IResolvable|java.util.List<CloudtrailTrailTags>)
//  .trailName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isLogging">isLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the CloudTrail is currently logging AWS API calls. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | Specifies the name of the Amazon S3 bucket designated for publishing log files. See Amazon S3 Bucket Naming Requirements. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.advancedEventSelectors">advancedEventSelectors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>></code> | The advanced event selectors that were used to select events for the data store. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.aggregationConfigurations">aggregationConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>></code> | Specifies the aggregation configuration to aggregate CloudTrail Events. A maximum of 1 aggregation configuration is allowed. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.cloudwatchLogsLogGroupArn">cloudwatchLogsLogGroupArn</a></code> | <code>java.lang.String</code> | Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.cloudwatchLogsRoleArn">cloudwatchLogsRoleArn</a></code> | <code>java.lang.String</code> | Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.enableLogFileValidation">enableLogFileValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether log file validation is enabled. The default is false. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.eventSelectors">eventSelectors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>></code> | Use event selectors to further specify the management and data event settings for your trail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.includeGlobalServiceEvents">includeGlobalServiceEvents</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the trail is publishing events from global services such as IAM to the log files. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.insightSelectors">insightSelectors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>></code> | Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isMultiRegionTrail">isMultiRegionTrail</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the trail applies only to the current region or to all regions. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isOrganizationTrail">isOrganizationTrail</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the trail is created for all accounts in an organization in AWS Organizations, or only for the current AWS account. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>java.lang.String</code> | Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.snsTopicName">snsTopicName</a></code> | <code>java.lang.String</code> | Specifies the name of the Amazon SNS topic defined for notification of log file delivery. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#tags CloudtrailTrail#tags}. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.trailName">trailName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#trail_name CloudtrailTrail#trail_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `isLogging`<sup>Required</sup> <a name="isLogging" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isLogging"></a>

```java
public java.lang.Boolean|IResolvable getIsLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the CloudTrail is currently logging AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#is_logging CloudtrailTrail#is_logging}

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

Specifies the name of the Amazon S3 bucket designated for publishing log files. See Amazon S3 Bucket Naming Requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#s3_bucket_name CloudtrailTrail#s3_bucket_name}

---

##### `advancedEventSelectors`<sup>Optional</sup> <a name="advancedEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.advancedEventSelectors"></a>

```java
public IResolvable|java.util.List<CloudtrailTrailAdvancedEventSelectors> getAdvancedEventSelectors();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>>

The advanced event selectors that were used to select events for the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#advanced_event_selectors CloudtrailTrail#advanced_event_selectors}

---

##### `aggregationConfigurations`<sup>Optional</sup> <a name="aggregationConfigurations" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.aggregationConfigurations"></a>

```java
public IResolvable|java.util.List<CloudtrailTrailAggregationConfigurations> getAggregationConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>>

Specifies the aggregation configuration to aggregate CloudTrail Events. A maximum of 1 aggregation configuration is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#aggregation_configurations CloudtrailTrail#aggregation_configurations}

---

##### `cloudwatchLogsLogGroupArn`<sup>Optional</sup> <a name="cloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.cloudwatchLogsLogGroupArn"></a>

```java
public java.lang.String getCloudwatchLogsLogGroupArn();
```

- *Type:* java.lang.String

Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered.

Not required unless you specify CloudWatchLogsRoleArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#cloudwatch_logs_log_group_arn CloudtrailTrail#cloudwatch_logs_log_group_arn}

---

##### `cloudwatchLogsRoleArn`<sup>Optional</sup> <a name="cloudwatchLogsRoleArn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.cloudwatchLogsRoleArn"></a>

```java
public java.lang.String getCloudwatchLogsRoleArn();
```

- *Type:* java.lang.String

Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#cloudwatch_logs_role_arn CloudtrailTrail#cloudwatch_logs_role_arn}

---

##### `enableLogFileValidation`<sup>Optional</sup> <a name="enableLogFileValidation" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.enableLogFileValidation"></a>

```java
public java.lang.Boolean|IResolvable getEnableLogFileValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether log file validation is enabled. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#enable_log_file_validation CloudtrailTrail#enable_log_file_validation}

---

##### `eventSelectors`<sup>Optional</sup> <a name="eventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.eventSelectors"></a>

```java
public IResolvable|java.util.List<CloudtrailTrailEventSelectors> getEventSelectors();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>>

Use event selectors to further specify the management and data event settings for your trail.

By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event. You can configure up to five event selectors for a trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#event_selectors CloudtrailTrail#event_selectors}

---

##### `includeGlobalServiceEvents`<sup>Optional</sup> <a name="includeGlobalServiceEvents" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.includeGlobalServiceEvents"></a>

```java
public java.lang.Boolean|IResolvable getIncludeGlobalServiceEvents();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the trail is publishing events from global services such as IAM to the log files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#include_global_service_events CloudtrailTrail#include_global_service_events}

---

##### `insightSelectors`<sup>Optional</sup> <a name="insightSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.insightSelectors"></a>

```java
public IResolvable|java.util.List<CloudtrailTrailInsightSelectors> getInsightSelectors();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>>

Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#insight_selectors CloudtrailTrail#insight_selectors}

---

##### `isMultiRegionTrail`<sup>Optional</sup> <a name="isMultiRegionTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isMultiRegionTrail"></a>

```java
public java.lang.Boolean|IResolvable getIsMultiRegionTrail();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the trail applies only to the current region or to all regions.

The default is false. If the trail exists only in the current region and this value is set to true, shadow trails (replications of the trail) will be created in the other regions. If the trail exists in all regions and this value is set to false, the trail will remain in the region where it was created, and its shadow trails in other regions will be deleted. As a best practice, consider using trails that log events in all regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#is_multi_region_trail CloudtrailTrail#is_multi_region_trail}

---

##### `isOrganizationTrail`<sup>Optional</sup> <a name="isOrganizationTrail" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.isOrganizationTrail"></a>

```java
public java.lang.Boolean|IResolvable getIsOrganizationTrail();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the trail is created for all accounts in an organization in AWS Organizations, or only for the current AWS account.

The default is false, and cannot be true unless the call is made on behalf of an AWS account that is the master account for an organization in AWS Organizations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#is_organization_trail CloudtrailTrail#is_organization_trail}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail.

The value can be an alias name prefixed by 'alias/', a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#kms_key_id CloudtrailTrail#kms_key_id}

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="s3KeyPrefix" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.s3KeyPrefix"></a>

```java
public java.lang.String getS3KeyPrefix();
```

- *Type:* java.lang.String

Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery.

For more information, see Finding Your CloudTrail Log Files. The maximum length is 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#s3_key_prefix CloudtrailTrail#s3_key_prefix}

---

##### `snsTopicName`<sup>Optional</sup> <a name="snsTopicName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.snsTopicName"></a>

```java
public java.lang.String getSnsTopicName();
```

- *Type:* java.lang.String

Specifies the name of the Amazon SNS topic defined for notification of log file delivery.

The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#sns_topic_name CloudtrailTrail#sns_topic_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CloudtrailTrailTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#tags CloudtrailTrail#tags}.

---

##### `trailName`<sup>Optional</sup> <a name="trailName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailConfig.property.trailName"></a>

```java
public java.lang.String getTrailName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#trail_name CloudtrailTrail#trail_name}.

---

### CloudtrailTrailEventSelectors <a name="CloudtrailTrailEventSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrailEventSelectors;

CloudtrailTrailEventSelectors.builder()
//  .dataResources(IResolvable|java.util.List<CloudtrailTrailEventSelectorsDataResources>)
//  .excludeManagementEventSources(java.util.List<java.lang.String>)
//  .includeManagementEvents(java.lang.Boolean|IResolvable)
//  .readWriteType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.dataResources">dataResources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#data_resources CloudtrailTrail#data_resources}. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.excludeManagementEventSources">excludeManagementEventSources</a></code> | <code>java.util.List<java.lang.String></code> | An optional list of service event sources from which you do not want management events to be logged on your trail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.includeManagementEvents">includeManagementEvents</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specify if you want your event selector to include management events for your trail. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.readWriteType">readWriteType</a></code> | <code>java.lang.String</code> | Specify if you want your trail to log read-only events, write-only events, or all. |

---

##### `dataResources`<sup>Optional</sup> <a name="dataResources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.dataResources"></a>

```java
public IResolvable|java.util.List<CloudtrailTrailEventSelectorsDataResources> getDataResources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#data_resources CloudtrailTrail#data_resources}.

---

##### `excludeManagementEventSources`<sup>Optional</sup> <a name="excludeManagementEventSources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.excludeManagementEventSources"></a>

```java
public java.util.List<java.lang.String> getExcludeManagementEventSources();
```

- *Type:* java.util.List<java.lang.String>

An optional list of service event sources from which you do not want management events to be logged on your trail.

In this release, the list can be empty (disables the filter), or it can filter out AWS Key Management Service events by containing "kms.amazonaws.com". By default, ExcludeManagementEventSources is empty, and AWS KMS events are included in events that are logged to your trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#exclude_management_event_sources CloudtrailTrail#exclude_management_event_sources}

---

##### `includeManagementEvents`<sup>Optional</sup> <a name="includeManagementEvents" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.includeManagementEvents"></a>

```java
public java.lang.Boolean|IResolvable getIncludeManagementEvents();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specify if you want your event selector to include management events for your trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#include_management_events CloudtrailTrail#include_management_events}

---

##### `readWriteType`<sup>Optional</sup> <a name="readWriteType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors.property.readWriteType"></a>

```java
public java.lang.String getReadWriteType();
```

- *Type:* java.lang.String

Specify if you want your trail to log read-only events, write-only events, or all.

For example, the EC2 GetConsoleOutput is a read-only API operation and RunInstances is a write-only API operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#read_write_type CloudtrailTrail#read_write_type}

---

### CloudtrailTrailEventSelectorsDataResources <a name="CloudtrailTrailEventSelectorsDataResources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrailEventSelectorsDataResources;

CloudtrailTrailEventSelectorsDataResources.builder()
//  .type(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources.property.type">type</a></code> | <code>java.lang.String</code> | The resource type in which you want to log data events. You can specify AWS::S3::Object or AWS::Lambda::Function resources. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified objects. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The resource type in which you want to log data events. You can specify AWS::S3::Object or AWS::Lambda::Function resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#type CloudtrailTrail#type}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#values CloudtrailTrail#values}

---

### CloudtrailTrailInsightSelectors <a name="CloudtrailTrailInsightSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrailInsightSelectors;

CloudtrailTrailInsightSelectors.builder()
//  .eventCategories(java.util.List<java.lang.String>)
//  .insightType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors.property.eventCategories">eventCategories</a></code> | <code>java.util.List<java.lang.String></code> | The categories of events for which to log insights. By default, insights are logged for management events only. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors.property.insightType">insightType</a></code> | <code>java.lang.String</code> | The type of insight to log on a trail. |

---

##### `eventCategories`<sup>Optional</sup> <a name="eventCategories" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors.property.eventCategories"></a>

```java
public java.util.List<java.lang.String> getEventCategories();
```

- *Type:* java.util.List<java.lang.String>

The categories of events for which to log insights. By default, insights are logged for management events only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#event_categories CloudtrailTrail#event_categories}

---

##### `insightType`<sup>Optional</sup> <a name="insightType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors.property.insightType"></a>

```java
public java.lang.String getInsightType();
```

- *Type:* java.lang.String

The type of insight to log on a trail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#insight_type CloudtrailTrail#insight_type}

---

### CloudtrailTrailTags <a name="CloudtrailTrailTags" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrailTags;

CloudtrailTrailTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#key CloudtrailTrail#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudtrail_trail#value CloudtrailTrail#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList <a name="CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList;

new CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.get"></a>

```java
public CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudtrailTrailAdvancedEventSelectorsFieldSelectors> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>>

---


### CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference <a name="CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference;

new CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetEndsWith">resetEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetEqualTo">resetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetField">resetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEndsWith">resetNotEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEquals">resetNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotStartsWith">resetNotStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetStartsWith">resetStartsWith</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndsWith` <a name="resetEndsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetEndsWith"></a>

```java
public void resetEndsWith()
```

##### `resetEqualTo` <a name="resetEqualTo" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetEqualTo"></a>

```java
public void resetEqualTo()
```

##### `resetField` <a name="resetField" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetField"></a>

```java
public void resetField()
```

##### `resetNotEndsWith` <a name="resetNotEndsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEndsWith"></a>

```java
public void resetNotEndsWith()
```

##### `resetNotEquals` <a name="resetNotEquals" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEquals"></a>

```java
public void resetNotEquals()
```

##### `resetNotStartsWith` <a name="resetNotStartsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotStartsWith"></a>

```java
public void resetNotStartsWith()
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resetStartsWith"></a>

```java
public void resetStartsWith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWithInput">endsWithInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalToInput">equalToInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWithInput">notEndsWithInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEqualsInput">notEqualsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWithInput">notStartsWithInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWithInput">startsWithInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith">endsWith</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo">equalTo</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith">notEndsWith</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals">notEquals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith">notStartsWith</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith">startsWith</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endsWithInput`<sup>Optional</sup> <a name="endsWithInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWithInput"></a>

```java
public java.util.List<java.lang.String> getEndsWithInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `equalToInput`<sup>Optional</sup> <a name="equalToInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalToInput"></a>

```java
public java.util.List<java.lang.String> getEqualToInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `notEndsWithInput`<sup>Optional</sup> <a name="notEndsWithInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWithInput"></a>

```java
public java.util.List<java.lang.String> getNotEndsWithInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notEqualsInput`<sup>Optional</sup> <a name="notEqualsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEqualsInput"></a>

```java
public java.util.List<java.lang.String> getNotEqualsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notStartsWithInput`<sup>Optional</sup> <a name="notStartsWithInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWithInput"></a>

```java
public java.util.List<java.lang.String> getNotStartsWithInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWithInput"></a>

```java
public java.util.List<java.lang.String> getStartsWithInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `endsWith`<sup>Required</sup> <a name="endsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith"></a>

```java
public java.util.List<java.lang.String> getEndsWith();
```

- *Type:* java.util.List<java.lang.String>

---

##### `equalTo`<sup>Required</sup> <a name="equalTo" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo"></a>

```java
public java.util.List<java.lang.String> getEqualTo();
```

- *Type:* java.util.List<java.lang.String>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `notEndsWith`<sup>Required</sup> <a name="notEndsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith"></a>

```java
public java.util.List<java.lang.String> getNotEndsWith();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notEquals`<sup>Required</sup> <a name="notEquals" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals"></a>

```java
public java.util.List<java.lang.String> getNotEquals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notStartsWith`<sup>Required</sup> <a name="notStartsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith"></a>

```java
public java.util.List<java.lang.String> getNotStartsWith();
```

- *Type:* java.util.List<java.lang.String>

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith"></a>

```java
public java.util.List<java.lang.String> getStartsWith();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudtrailTrailAdvancedEventSelectorsFieldSelectors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>

---


### CloudtrailTrailAdvancedEventSelectorsList <a name="CloudtrailTrailAdvancedEventSelectorsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrailAdvancedEventSelectorsList;

new CloudtrailTrailAdvancedEventSelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.get"></a>

```java
public CloudtrailTrailAdvancedEventSelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudtrailTrailAdvancedEventSelectors> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>>

---


### CloudtrailTrailAdvancedEventSelectorsOutputReference <a name="CloudtrailTrailAdvancedEventSelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrailAdvancedEventSelectorsOutputReference;

new CloudtrailTrailAdvancedEventSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.putFieldSelectors">putFieldSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resetFieldSelectors">resetFieldSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldSelectors` <a name="putFieldSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.putFieldSelectors"></a>

```java
public void putFieldSelectors(IResolvable|java.util.List<CloudtrailTrailAdvancedEventSelectorsFieldSelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.putFieldSelectors.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>>

---

##### `resetFieldSelectors` <a name="resetFieldSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resetFieldSelectors"></a>

```java
public void resetFieldSelectors()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fieldSelectors">fieldSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList">CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fieldSelectorsInput">fieldSelectorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldSelectors`<sup>Required</sup> <a name="fieldSelectors" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fieldSelectors"></a>

```java
public CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList getFieldSelectors();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList">CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList</a>

---

##### `fieldSelectorsInput`<sup>Optional</sup> <a name="fieldSelectorsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.fieldSelectorsInput"></a>

```java
public IResolvable|java.util.List<CloudtrailTrailAdvancedEventSelectorsFieldSelectors> getFieldSelectorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsFieldSelectors">CloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectorsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudtrailTrailAdvancedEventSelectors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAdvancedEventSelectors">CloudtrailTrailAdvancedEventSelectors</a>

---


### CloudtrailTrailAggregationConfigurationsList <a name="CloudtrailTrailAggregationConfigurationsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrailAggregationConfigurationsList;

new CloudtrailTrailAggregationConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.get"></a>

```java
public CloudtrailTrailAggregationConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudtrailTrailAggregationConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>>

---


### CloudtrailTrailAggregationConfigurationsOutputReference <a name="CloudtrailTrailAggregationConfigurationsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrailAggregationConfigurationsOutputReference;

new CloudtrailTrailAggregationConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resetEventCategory">resetEventCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resetTemplates">resetTemplates</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventCategory` <a name="resetEventCategory" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resetEventCategory"></a>

```java
public void resetEventCategory()
```

##### `resetTemplates` <a name="resetTemplates" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.resetTemplates"></a>

```java
public void resetTemplates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.eventCategoryInput">eventCategoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.templatesInput">templatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.eventCategory">eventCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.templates">templates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventCategoryInput`<sup>Optional</sup> <a name="eventCategoryInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.eventCategoryInput"></a>

```java
public java.lang.String getEventCategoryInput();
```

- *Type:* java.lang.String

---

##### `templatesInput`<sup>Optional</sup> <a name="templatesInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.templatesInput"></a>

```java
public java.util.List<java.lang.String> getTemplatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `eventCategory`<sup>Required</sup> <a name="eventCategory" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.eventCategory"></a>

```java
public java.lang.String getEventCategory();
```

- *Type:* java.lang.String

---

##### `templates`<sup>Required</sup> <a name="templates" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.templates"></a>

```java
public java.util.List<java.lang.String> getTemplates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudtrailTrailAggregationConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailAggregationConfigurations">CloudtrailTrailAggregationConfigurations</a>

---


### CloudtrailTrailEventSelectorsDataResourcesList <a name="CloudtrailTrailEventSelectorsDataResourcesList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrailEventSelectorsDataResourcesList;

new CloudtrailTrailEventSelectorsDataResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.get"></a>

```java
public CloudtrailTrailEventSelectorsDataResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudtrailTrailEventSelectorsDataResources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>>

---


### CloudtrailTrailEventSelectorsDataResourcesOutputReference <a name="CloudtrailTrailEventSelectorsDataResourcesOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrailEventSelectorsDataResourcesOutputReference;

new CloudtrailTrailEventSelectorsDataResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudtrailTrailEventSelectorsDataResources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>

---


### CloudtrailTrailEventSelectorsList <a name="CloudtrailTrailEventSelectorsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrailEventSelectorsList;

new CloudtrailTrailEventSelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.get"></a>

```java
public CloudtrailTrailEventSelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudtrailTrailEventSelectors> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>>

---


### CloudtrailTrailEventSelectorsOutputReference <a name="CloudtrailTrailEventSelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrailEventSelectorsOutputReference;

new CloudtrailTrailEventSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.putDataResources">putDataResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetDataResources">resetDataResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetExcludeManagementEventSources">resetExcludeManagementEventSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetIncludeManagementEvents">resetIncludeManagementEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetReadWriteType">resetReadWriteType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataResources` <a name="putDataResources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.putDataResources"></a>

```java
public void putDataResources(IResolvable|java.util.List<CloudtrailTrailEventSelectorsDataResources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.putDataResources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>>

---

##### `resetDataResources` <a name="resetDataResources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetDataResources"></a>

```java
public void resetDataResources()
```

##### `resetExcludeManagementEventSources` <a name="resetExcludeManagementEventSources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetExcludeManagementEventSources"></a>

```java
public void resetExcludeManagementEventSources()
```

##### `resetIncludeManagementEvents` <a name="resetIncludeManagementEvents" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetIncludeManagementEvents"></a>

```java
public void resetIncludeManagementEvents()
```

##### `resetReadWriteType` <a name="resetReadWriteType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.resetReadWriteType"></a>

```java
public void resetReadWriteType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.dataResources">dataResources</a></code> | <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList">CloudtrailTrailEventSelectorsDataResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.dataResourcesInput">dataResourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.excludeManagementEventSourcesInput">excludeManagementEventSourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.includeManagementEventsInput">includeManagementEventsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.readWriteTypeInput">readWriteTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.excludeManagementEventSources">excludeManagementEventSources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.includeManagementEvents">includeManagementEvents</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.readWriteType">readWriteType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataResources`<sup>Required</sup> <a name="dataResources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.dataResources"></a>

```java
public CloudtrailTrailEventSelectorsDataResourcesList getDataResources();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResourcesList">CloudtrailTrailEventSelectorsDataResourcesList</a>

---

##### `dataResourcesInput`<sup>Optional</sup> <a name="dataResourcesInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.dataResourcesInput"></a>

```java
public IResolvable|java.util.List<CloudtrailTrailEventSelectorsDataResources> getDataResourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsDataResources">CloudtrailTrailEventSelectorsDataResources</a>>

---

##### `excludeManagementEventSourcesInput`<sup>Optional</sup> <a name="excludeManagementEventSourcesInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.excludeManagementEventSourcesInput"></a>

```java
public java.util.List<java.lang.String> getExcludeManagementEventSourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeManagementEventsInput`<sup>Optional</sup> <a name="includeManagementEventsInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.includeManagementEventsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeManagementEventsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `readWriteTypeInput`<sup>Optional</sup> <a name="readWriteTypeInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.readWriteTypeInput"></a>

```java
public java.lang.String getReadWriteTypeInput();
```

- *Type:* java.lang.String

---

##### `excludeManagementEventSources`<sup>Required</sup> <a name="excludeManagementEventSources" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.excludeManagementEventSources"></a>

```java
public java.util.List<java.lang.String> getExcludeManagementEventSources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeManagementEvents`<sup>Required</sup> <a name="includeManagementEvents" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.includeManagementEvents"></a>

```java
public java.lang.Boolean|IResolvable getIncludeManagementEvents();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `readWriteType`<sup>Required</sup> <a name="readWriteType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.readWriteType"></a>

```java
public java.lang.String getReadWriteType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectorsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudtrailTrailEventSelectors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailEventSelectors">CloudtrailTrailEventSelectors</a>

---


### CloudtrailTrailInsightSelectorsList <a name="CloudtrailTrailInsightSelectorsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrailInsightSelectorsList;

new CloudtrailTrailInsightSelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.get"></a>

```java
public CloudtrailTrailInsightSelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudtrailTrailInsightSelectors> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>>

---


### CloudtrailTrailInsightSelectorsOutputReference <a name="CloudtrailTrailInsightSelectorsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrailInsightSelectorsOutputReference;

new CloudtrailTrailInsightSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resetEventCategories">resetEventCategories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resetInsightType">resetInsightType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventCategories` <a name="resetEventCategories" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resetEventCategories"></a>

```java
public void resetEventCategories()
```

##### `resetInsightType` <a name="resetInsightType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.resetInsightType"></a>

```java
public void resetInsightType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.eventCategoriesInput">eventCategoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.insightTypeInput">insightTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.eventCategories">eventCategories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.insightType">insightType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventCategoriesInput`<sup>Optional</sup> <a name="eventCategoriesInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.eventCategoriesInput"></a>

```java
public java.util.List<java.lang.String> getEventCategoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `insightTypeInput`<sup>Optional</sup> <a name="insightTypeInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.insightTypeInput"></a>

```java
public java.lang.String getInsightTypeInput();
```

- *Type:* java.lang.String

---

##### `eventCategories`<sup>Required</sup> <a name="eventCategories" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.eventCategories"></a>

```java
public java.util.List<java.lang.String> getEventCategories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `insightType`<sup>Required</sup> <a name="insightType" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.insightType"></a>

```java
public java.lang.String getInsightType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectorsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudtrailTrailInsightSelectors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailInsightSelectors">CloudtrailTrailInsightSelectors</a>

---


### CloudtrailTrailTagsList <a name="CloudtrailTrailTagsList" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrailTagsList;

new CloudtrailTrailTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.get"></a>

```java
public CloudtrailTrailTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudtrailTrailTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>>

---


### CloudtrailTrailTagsOutputReference <a name="CloudtrailTrailTagsOutputReference" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudtrail_trail.CloudtrailTrailTagsOutputReference;

new CloudtrailTrailTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudtrailTrailTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudtrailTrail.CloudtrailTrailTags">CloudtrailTrailTags</a>

---



