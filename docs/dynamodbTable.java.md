# `dynamodbTable` Submodule <a name="`dynamodbTable` Submodule" id="@cdktn/provider-awscc.dynamodbTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamodbTable <a name="DynamodbTable" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table awscc_dynamodb_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTable;

DynamodbTable.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .keySchema(java.lang.String)
//  .attributeDefinitions(IResolvable|java.util.List<DynamodbTableAttributeDefinitions>)
//  .billingMode(java.lang.String)
//  .contributorInsightsSpecification(DynamodbTableContributorInsightsSpecification)
//  .deletionProtectionEnabled(java.lang.Boolean|IResolvable)
//  .globalSecondaryIndexes(IResolvable|java.util.List<DynamodbTableGlobalSecondaryIndexes>)
//  .importSourceSpecification(DynamodbTableImportSourceSpecification)
//  .kinesisStreamSpecification(DynamodbTableKinesisStreamSpecification)
//  .localSecondaryIndexes(IResolvable|java.util.List<DynamodbTableLocalSecondaryIndexes>)
//  .onDemandThroughput(DynamodbTableOnDemandThroughput)
//  .pointInTimeRecoverySpecification(DynamodbTablePointInTimeRecoverySpecification)
//  .provisionedThroughput(DynamodbTableProvisionedThroughput)
//  .resourcePolicy(DynamodbTableResourcePolicy)
//  .sseSpecification(DynamodbTableSseSpecification)
//  .streamSpecification(DynamodbTableStreamSpecification)
//  .tableClass(java.lang.String)
//  .tableName(java.lang.String)
//  .tags(IResolvable|java.util.List<DynamodbTableTags>)
//  .timeToLiveSpecification(DynamodbTableTimeToLiveSpecification)
//  .warmThroughput(DynamodbTableWarmThroughput)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.keySchema">keySchema</a></code> | <code>java.lang.String</code> | Specifies the attributes that make up the primary key for the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.attributeDefinitions">attributeDefinitions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>></code> | A list of attributes that describe the key schema for the table and indexes. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.billingMode">billingMode</a></code> | <code>java.lang.String</code> | Specify how you are charged for read and write throughput and how you manage capacity. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.contributorInsightsSpecification">contributorInsightsSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a></code> | The settings used to specify whether to enable CloudWatch Contributor Insights for the table and define which events to monitor. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines if a table is protected from deletion. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.globalSecondaryIndexes">globalSecondaryIndexes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>></code> | Global secondary indexes to be created on the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.importSourceSpecification">importSourceSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a></code> | Specifies the properties of data being imported from the S3 bucket source to the" table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.kinesisStreamSpecification">kinesisStreamSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a></code> | The Kinesis Data Streams configuration for the specified table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.localSecondaryIndexes">localSecondaryIndexes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>></code> | Local secondary indexes to be created on the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.onDemandThroughput">onDemandThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a></code> | Sets the maximum number of read and write units for the specified on-demand table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.pointInTimeRecoverySpecification">pointInTimeRecoverySpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a></code> | The settings used to enable point in time recovery. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.provisionedThroughput">provisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a></code> | Throughput for the specified table, which consists of values for ``ReadCapacityUnits`` and ``WriteCapacityUnits``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.resourcePolicy">resourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a></code> | An AWS resource-based policy document in JSON format that will be attached to the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.sseSpecification">sseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a></code> | Specifies the settings to enable server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.streamSpecification">streamSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a></code> | The settings for the DDB table stream, which captures changes to items stored in the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.tableClass">tableClass</a></code> | <code>java.lang.String</code> | The table class of the new table. Valid values are ``STANDARD`` and ``STANDARD_INFREQUENT_ACCESS``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.tableName">tableName</a></code> | <code>java.lang.String</code> | A name for the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>></code> | An array of key-value pairs to apply to this resource.  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html). |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.timeToLiveSpecification">timeToLiveSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a></code> | Specifies the Time to Live (TTL) settings for the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.warmThroughput">warmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a></code> | Represents the warm throughput (in read units per second and write units per second) for creating a table. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keySchema`<sup>Required</sup> <a name="keySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.keySchema"></a>

- *Type:* java.lang.String

Specifies the attributes that make up the primary key for the table.

The attributes in the `KeySchema` property must also be defined in the `AttributeDefinitions` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#key_schema DynamodbTable#key_schema}

---

##### `attributeDefinitions`<sup>Optional</sup> <a name="attributeDefinitions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.attributeDefinitions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>>

A list of attributes that describe the key schema for the table and indexes.

This property is required to create a DDB table.
Update requires: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt). Replacement if you edit an existing AttributeDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#attribute_definitions DynamodbTable#attribute_definitions}

---

##### `billingMode`<sup>Optional</sup> <a name="billingMode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.billingMode"></a>

- *Type:* java.lang.String

Specify how you are charged for read and write throughput and how you manage capacity.

Valid values include:

* `PAY_PER_REQUEST` - We recommend using `PAY_PER_REQUEST` for most DynamoDB workloads. `PAY_PER_REQUEST` sets the billing mode to [On-demand capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html).
* `PROVISIONED` - We recommend using `PROVISIONED` for steady workloads with predictable growth where capacity requirements can be reliably forecasted. `PROVISIONED` sets the billing mode to [Provisioned capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/provisioned-capacity-mode.html).

If not specified, the default is `PROVISIONED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#billing_mode DynamodbTable#billing_mode}

---

##### `contributorInsightsSpecification`<sup>Optional</sup> <a name="contributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.contributorInsightsSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a>

The settings used to specify whether to enable CloudWatch Contributor Insights for the table and define which events to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#contributor_insights_specification DynamodbTable#contributor_insights_specification}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines if a table is protected from deletion.

When enabled, the table cannot be deleted by any user or process. This setting is disabled by default. For more information, see [Using deletion protection](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.DeletionProtection) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#deletion_protection_enabled DynamodbTable#deletion_protection_enabled}

---

##### `globalSecondaryIndexes`<sup>Optional</sup> <a name="globalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.globalSecondaryIndexes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>>

Global secondary indexes to be created on the table.

You can create up to 20 global secondary indexes.
If you update a table to include a new global secondary index, CFNlong initiates the index creation and then proceeds with the stack update. CFNlong doesn't wait for the index to complete creation because the backfilling phase can take a long time, depending on the size of the table. You can't use the index or update the table until the index's status is `ACTIVE`. You can track its status by using the DynamoDB [DescribeTable](https://docs.aws.amazon.com/cli/latest/reference/dynamodb/describe-table.html) command.
If you add or delete an index during an update, we recommend that you don't update any other resources. If your stack fails to update and is rolled back while adding a new index, you must manually delete the index.
Updates are not supported. The following are exceptions:

* If you update either the contributor insights specification or the provisioned throughput values of global secondary indexes, you can update the table without interruption.
* You can delete or add one global secondary index without interruption. If you do both in the same update (for example, by changing the index's logical ID), the update fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#global_secondary_indexes DynamodbTable#global_secondary_indexes}

---

##### `importSourceSpecification`<sup>Optional</sup> <a name="importSourceSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.importSourceSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a>

Specifies the properties of data being imported from the S3 bucket source to the" table.

If you specify the `ImportSourceSpecification` property, and also specify either the `StreamSpecification`, the `TableClass` property, the `DeletionProtectionEnabled` property, or the `WarmThroughput` property, the IAM entity creating/updating stack must have `UpdateTable` permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#import_source_specification DynamodbTable#import_source_specification}

---

##### `kinesisStreamSpecification`<sup>Optional</sup> <a name="kinesisStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.kinesisStreamSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a>

The Kinesis Data Streams configuration for the specified table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#kinesis_stream_specification DynamodbTable#kinesis_stream_specification}

---

##### `localSecondaryIndexes`<sup>Optional</sup> <a name="localSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.localSecondaryIndexes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>>

Local secondary indexes to be created on the table.

You can create up to 5 local secondary indexes. Each index is scoped to a given hash key value. The size of each hash key can be up to 10 gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#local_secondary_indexes DynamodbTable#local_secondary_indexes}

---

##### `onDemandThroughput`<sup>Optional</sup> <a name="onDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.onDemandThroughput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

Sets the maximum number of read and write units for the specified on-demand table.

If you use this property, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#on_demand_throughput DynamodbTable#on_demand_throughput}

---

##### `pointInTimeRecoverySpecification`<sup>Optional</sup> <a name="pointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.pointInTimeRecoverySpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a>

The settings used to enable point in time recovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#point_in_time_recovery_specification DynamodbTable#point_in_time_recovery_specification}

---

##### `provisionedThroughput`<sup>Optional</sup> <a name="provisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.provisionedThroughput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a>

Throughput for the specified table, which consists of values for ``ReadCapacityUnits`` and ``WriteCapacityUnits``.

For more information about the contents of a provisioned throughput structure, see [Amazon DynamoDB Table ProvisionedThroughput](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ProvisionedThroughput.html).
If you set `BillingMode` as `PROVISIONED`, you must specify this property. If you set `BillingMode` as `PAY_PER_REQUEST`, you cannot specify this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#provisioned_throughput DynamodbTable#provisioned_throughput}

---

##### `resourcePolicy`<sup>Optional</sup> <a name="resourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.resourcePolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a>

An AWS resource-based policy document in JSON format that will be attached to the table.

When you attach a resource-based policy while creating a table, the policy application is *strongly consistent*.
The maximum size supported for a resource-based policy document is 20 KB. DynamoDB counts whitespaces when calculating the size of a policy against this limit. For a full list of all considerations that apply for resource-based policies, see [Resource-based policy considerations](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-considerations.html).
You need to specify the `CreateTable` and `PutResourcePolicy` IAM actions for authorizing a user to create a table with a resource-based policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#resource_policy DynamodbTable#resource_policy}

---

##### `sseSpecification`<sup>Optional</sup> <a name="sseSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.sseSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a>

Specifies the settings to enable server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#sse_specification DynamodbTable#sse_specification}

---

##### `streamSpecification`<sup>Optional</sup> <a name="streamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.streamSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a>

The settings for the DDB table stream, which captures changes to items stored in the table.

Including this property in your CFNlong template automatically enables streaming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#stream_specification DynamodbTable#stream_specification}

---

##### `tableClass`<sup>Optional</sup> <a name="tableClass" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.tableClass"></a>

- *Type:* java.lang.String

The table class of the new table. Valid values are ``STANDARD`` and ``STANDARD_INFREQUENT_ACCESS``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#table_class DynamodbTable#table_class}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.tableName"></a>

- *Type:* java.lang.String

A name for the table.

If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the table name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#table_name DynamodbTable#table_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>>

An array of key-value pairs to apply to this resource.  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#tags DynamodbTable#tags}

---

##### `timeToLiveSpecification`<sup>Optional</sup> <a name="timeToLiveSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.timeToLiveSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a>

Specifies the Time to Live (TTL) settings for the table.

For detailed information about the limits in DynamoDB, see [Limits in Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the Amazon DynamoDB Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#time_to_live_specification DynamodbTable#time_to_live_specification}

---

##### `warmThroughput`<sup>Optional</sup> <a name="warmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.warmThroughput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a>

Represents the warm throughput (in read units per second and write units per second) for creating a table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#warm_throughput DynamodbTable#warm_throughput}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putAttributeDefinitions">putAttributeDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putContributorInsightsSpecification">putContributorInsightsSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putGlobalSecondaryIndexes">putGlobalSecondaryIndexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putImportSourceSpecification">putImportSourceSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putKinesisStreamSpecification">putKinesisStreamSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putLocalSecondaryIndexes">putLocalSecondaryIndexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putOnDemandThroughput">putOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putPointInTimeRecoverySpecification">putPointInTimeRecoverySpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putProvisionedThroughput">putProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putResourcePolicy">putResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putSseSpecification">putSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putStreamSpecification">putStreamSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTimeToLiveSpecification">putTimeToLiveSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putWarmThroughput">putWarmThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetAttributeDefinitions">resetAttributeDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetBillingMode">resetBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetContributorInsightsSpecification">resetContributorInsightsSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetGlobalSecondaryIndexes">resetGlobalSecondaryIndexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetImportSourceSpecification">resetImportSourceSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetKinesisStreamSpecification">resetKinesisStreamSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetLocalSecondaryIndexes">resetLocalSecondaryIndexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetOnDemandThroughput">resetOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetPointInTimeRecoverySpecification">resetPointInTimeRecoverySpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetProvisionedThroughput">resetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetResourcePolicy">resetResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetSseSpecification">resetSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetStreamSpecification">resetStreamSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTableClass">resetTableClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTimeToLiveSpecification">resetTimeToLiveSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetWarmThroughput">resetWarmThroughput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttributeDefinitions` <a name="putAttributeDefinitions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putAttributeDefinitions"></a>

```java
public void putAttributeDefinitions(IResolvable|java.util.List<DynamodbTableAttributeDefinitions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putAttributeDefinitions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>>

---

##### `putContributorInsightsSpecification` <a name="putContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putContributorInsightsSpecification"></a>

```java
public void putContributorInsightsSpecification(DynamodbTableContributorInsightsSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putContributorInsightsSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a>

---

##### `putGlobalSecondaryIndexes` <a name="putGlobalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putGlobalSecondaryIndexes"></a>

```java
public void putGlobalSecondaryIndexes(IResolvable|java.util.List<DynamodbTableGlobalSecondaryIndexes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putGlobalSecondaryIndexes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>>

---

##### `putImportSourceSpecification` <a name="putImportSourceSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putImportSourceSpecification"></a>

```java
public void putImportSourceSpecification(DynamodbTableImportSourceSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putImportSourceSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a>

---

##### `putKinesisStreamSpecification` <a name="putKinesisStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putKinesisStreamSpecification"></a>

```java
public void putKinesisStreamSpecification(DynamodbTableKinesisStreamSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putKinesisStreamSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a>

---

##### `putLocalSecondaryIndexes` <a name="putLocalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putLocalSecondaryIndexes"></a>

```java
public void putLocalSecondaryIndexes(IResolvable|java.util.List<DynamodbTableLocalSecondaryIndexes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putLocalSecondaryIndexes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>>

---

##### `putOnDemandThroughput` <a name="putOnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putOnDemandThroughput"></a>

```java
public void putOnDemandThroughput(DynamodbTableOnDemandThroughput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putOnDemandThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

---

##### `putPointInTimeRecoverySpecification` <a name="putPointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putPointInTimeRecoverySpecification"></a>

```java
public void putPointInTimeRecoverySpecification(DynamodbTablePointInTimeRecoverySpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putPointInTimeRecoverySpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a>

---

##### `putProvisionedThroughput` <a name="putProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putProvisionedThroughput"></a>

```java
public void putProvisionedThroughput(DynamodbTableProvisionedThroughput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putProvisionedThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a>

---

##### `putResourcePolicy` <a name="putResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putResourcePolicy"></a>

```java
public void putResourcePolicy(DynamodbTableResourcePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putResourcePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a>

---

##### `putSseSpecification` <a name="putSseSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putSseSpecification"></a>

```java
public void putSseSpecification(DynamodbTableSseSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putSseSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a>

---

##### `putStreamSpecification` <a name="putStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putStreamSpecification"></a>

```java
public void putStreamSpecification(DynamodbTableStreamSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putStreamSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DynamodbTableTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>>

---

##### `putTimeToLiveSpecification` <a name="putTimeToLiveSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTimeToLiveSpecification"></a>

```java
public void putTimeToLiveSpecification(DynamodbTableTimeToLiveSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTimeToLiveSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a>

---

##### `putWarmThroughput` <a name="putWarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putWarmThroughput"></a>

```java
public void putWarmThroughput(DynamodbTableWarmThroughput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putWarmThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a>

---

##### `resetAttributeDefinitions` <a name="resetAttributeDefinitions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetAttributeDefinitions"></a>

```java
public void resetAttributeDefinitions()
```

##### `resetBillingMode` <a name="resetBillingMode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetBillingMode"></a>

```java
public void resetBillingMode()
```

##### `resetContributorInsightsSpecification` <a name="resetContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetContributorInsightsSpecification"></a>

```java
public void resetContributorInsightsSpecification()
```

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetDeletionProtectionEnabled"></a>

```java
public void resetDeletionProtectionEnabled()
```

##### `resetGlobalSecondaryIndexes` <a name="resetGlobalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetGlobalSecondaryIndexes"></a>

```java
public void resetGlobalSecondaryIndexes()
```

##### `resetImportSourceSpecification` <a name="resetImportSourceSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetImportSourceSpecification"></a>

```java
public void resetImportSourceSpecification()
```

##### `resetKinesisStreamSpecification` <a name="resetKinesisStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetKinesisStreamSpecification"></a>

```java
public void resetKinesisStreamSpecification()
```

##### `resetLocalSecondaryIndexes` <a name="resetLocalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetLocalSecondaryIndexes"></a>

```java
public void resetLocalSecondaryIndexes()
```

##### `resetOnDemandThroughput` <a name="resetOnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetOnDemandThroughput"></a>

```java
public void resetOnDemandThroughput()
```

##### `resetPointInTimeRecoverySpecification` <a name="resetPointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetPointInTimeRecoverySpecification"></a>

```java
public void resetPointInTimeRecoverySpecification()
```

##### `resetProvisionedThroughput` <a name="resetProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetProvisionedThroughput"></a>

```java
public void resetProvisionedThroughput()
```

##### `resetResourcePolicy` <a name="resetResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetResourcePolicy"></a>

```java
public void resetResourcePolicy()
```

##### `resetSseSpecification` <a name="resetSseSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetSseSpecification"></a>

```java
public void resetSseSpecification()
```

##### `resetStreamSpecification` <a name="resetStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetStreamSpecification"></a>

```java
public void resetStreamSpecification()
```

##### `resetTableClass` <a name="resetTableClass" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTableClass"></a>

```java
public void resetTableClass()
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTableName"></a>

```java
public void resetTableName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeToLiveSpecification` <a name="resetTimeToLiveSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTimeToLiveSpecification"></a>

```java
public void resetTimeToLiveSpecification()
```

##### `resetWarmThroughput` <a name="resetWarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetWarmThroughput"></a>

```java
public void resetWarmThroughput()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DynamodbTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isConstruct"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTable;

DynamodbTable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTable;

DynamodbTable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTable;

DynamodbTable.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTable;

DynamodbTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DynamodbTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DynamodbTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DynamodbTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DynamodbTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DynamodbTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.attributeDefinitions">attributeDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList">DynamodbTableAttributeDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.contributorInsightsSpecification">contributorInsightsSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference">DynamodbTableContributorInsightsSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.globalSecondaryIndexes">globalSecondaryIndexes</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList">DynamodbTableGlobalSecondaryIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.importSourceSpecification">importSourceSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference">DynamodbTableImportSourceSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.kinesisStreamSpecification">kinesisStreamSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference">DynamodbTableKinesisStreamSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.localSecondaryIndexes">localSecondaryIndexes</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList">DynamodbTableLocalSecondaryIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.onDemandThroughput">onDemandThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference">DynamodbTableOnDemandThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.pointInTimeRecoverySpecification">pointInTimeRecoverySpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference">DynamodbTablePointInTimeRecoverySpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisionedThroughput">provisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference">DynamodbTableProvisionedThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.resourcePolicy">resourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference">DynamodbTableResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.sseSpecification">sseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference">DynamodbTableSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamSpecification">streamSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference">DynamodbTableStreamSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList">DynamodbTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.timeToLiveSpecification">timeToLiveSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference">DynamodbTableTimeToLiveSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.warmThroughput">warmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference">DynamodbTableWarmThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.attributeDefinitionsInput">attributeDefinitionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.billingModeInput">billingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.contributorInsightsSpecificationInput">contributorInsightsSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.globalSecondaryIndexesInput">globalSecondaryIndexesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.importSourceSpecificationInput">importSourceSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.keySchemaInput">keySchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.kinesisStreamSpecificationInput">kinesisStreamSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.localSecondaryIndexesInput">localSecondaryIndexesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.onDemandThroughputInput">onDemandThroughputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.pointInTimeRecoverySpecificationInput">pointInTimeRecoverySpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisionedThroughputInput">provisionedThroughputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.resourcePolicyInput">resourcePolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.sseSpecificationInput">sseSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamSpecificationInput">streamSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableClassInput">tableClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.timeToLiveSpecificationInput">timeToLiveSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.warmThroughputInput">warmThroughputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.billingMode">billingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.keySchema">keySchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableClass">tableClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `attributeDefinitions`<sup>Required</sup> <a name="attributeDefinitions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.attributeDefinitions"></a>

```java
public DynamodbTableAttributeDefinitionsList getAttributeDefinitions();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList">DynamodbTableAttributeDefinitionsList</a>

---

##### `contributorInsightsSpecification`<sup>Required</sup> <a name="contributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.contributorInsightsSpecification"></a>

```java
public DynamodbTableContributorInsightsSpecificationOutputReference getContributorInsightsSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference">DynamodbTableContributorInsightsSpecificationOutputReference</a>

---

##### `globalSecondaryIndexes`<sup>Required</sup> <a name="globalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.globalSecondaryIndexes"></a>

```java
public DynamodbTableGlobalSecondaryIndexesList getGlobalSecondaryIndexes();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList">DynamodbTableGlobalSecondaryIndexesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `importSourceSpecification`<sup>Required</sup> <a name="importSourceSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.importSourceSpecification"></a>

```java
public DynamodbTableImportSourceSpecificationOutputReference getImportSourceSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference">DynamodbTableImportSourceSpecificationOutputReference</a>

---

##### `kinesisStreamSpecification`<sup>Required</sup> <a name="kinesisStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.kinesisStreamSpecification"></a>

```java
public DynamodbTableKinesisStreamSpecificationOutputReference getKinesisStreamSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference">DynamodbTableKinesisStreamSpecificationOutputReference</a>

---

##### `localSecondaryIndexes`<sup>Required</sup> <a name="localSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.localSecondaryIndexes"></a>

```java
public DynamodbTableLocalSecondaryIndexesList getLocalSecondaryIndexes();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList">DynamodbTableLocalSecondaryIndexesList</a>

---

##### `onDemandThroughput`<sup>Required</sup> <a name="onDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.onDemandThroughput"></a>

```java
public DynamodbTableOnDemandThroughputOutputReference getOnDemandThroughput();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference">DynamodbTableOnDemandThroughputOutputReference</a>

---

##### `pointInTimeRecoverySpecification`<sup>Required</sup> <a name="pointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.pointInTimeRecoverySpecification"></a>

```java
public DynamodbTablePointInTimeRecoverySpecificationOutputReference getPointInTimeRecoverySpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference">DynamodbTablePointInTimeRecoverySpecificationOutputReference</a>

---

##### `provisionedThroughput`<sup>Required</sup> <a name="provisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisionedThroughput"></a>

```java
public DynamodbTableProvisionedThroughputOutputReference getProvisionedThroughput();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference">DynamodbTableProvisionedThroughputOutputReference</a>

---

##### `resourcePolicy`<sup>Required</sup> <a name="resourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.resourcePolicy"></a>

```java
public DynamodbTableResourcePolicyOutputReference getResourcePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference">DynamodbTableResourcePolicyOutputReference</a>

---

##### `sseSpecification`<sup>Required</sup> <a name="sseSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.sseSpecification"></a>

```java
public DynamodbTableSseSpecificationOutputReference getSseSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference">DynamodbTableSseSpecificationOutputReference</a>

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

---

##### `streamSpecification`<sup>Required</sup> <a name="streamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamSpecification"></a>

```java
public DynamodbTableStreamSpecificationOutputReference getStreamSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference">DynamodbTableStreamSpecificationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tags"></a>

```java
public DynamodbTableTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList">DynamodbTableTagsList</a>

---

##### `timeToLiveSpecification`<sup>Required</sup> <a name="timeToLiveSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.timeToLiveSpecification"></a>

```java
public DynamodbTableTimeToLiveSpecificationOutputReference getTimeToLiveSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference">DynamodbTableTimeToLiveSpecificationOutputReference</a>

---

##### `warmThroughput`<sup>Required</sup> <a name="warmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.warmThroughput"></a>

```java
public DynamodbTableWarmThroughputOutputReference getWarmThroughput();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference">DynamodbTableWarmThroughputOutputReference</a>

---

##### `attributeDefinitionsInput`<sup>Optional</sup> <a name="attributeDefinitionsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.attributeDefinitionsInput"></a>

```java
public IResolvable|java.util.List<DynamodbTableAttributeDefinitions> getAttributeDefinitionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>>

---

##### `billingModeInput`<sup>Optional</sup> <a name="billingModeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.billingModeInput"></a>

```java
public java.lang.String getBillingModeInput();
```

- *Type:* java.lang.String

---

##### `contributorInsightsSpecificationInput`<sup>Optional</sup> <a name="contributorInsightsSpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.contributorInsightsSpecificationInput"></a>

```java
public IResolvable|DynamodbTableContributorInsightsSpecification getContributorInsightsSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a>

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.deletionProtectionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `globalSecondaryIndexesInput`<sup>Optional</sup> <a name="globalSecondaryIndexesInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.globalSecondaryIndexesInput"></a>

```java
public IResolvable|java.util.List<DynamodbTableGlobalSecondaryIndexes> getGlobalSecondaryIndexesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>>

---

##### `importSourceSpecificationInput`<sup>Optional</sup> <a name="importSourceSpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.importSourceSpecificationInput"></a>

```java
public IResolvable|DynamodbTableImportSourceSpecification getImportSourceSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a>

---

##### `keySchemaInput`<sup>Optional</sup> <a name="keySchemaInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.keySchemaInput"></a>

```java
public java.lang.String getKeySchemaInput();
```

- *Type:* java.lang.String

---

##### `kinesisStreamSpecificationInput`<sup>Optional</sup> <a name="kinesisStreamSpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.kinesisStreamSpecificationInput"></a>

```java
public IResolvable|DynamodbTableKinesisStreamSpecification getKinesisStreamSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a>

---

##### `localSecondaryIndexesInput`<sup>Optional</sup> <a name="localSecondaryIndexesInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.localSecondaryIndexesInput"></a>

```java
public IResolvable|java.util.List<DynamodbTableLocalSecondaryIndexes> getLocalSecondaryIndexesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>>

---

##### `onDemandThroughputInput`<sup>Optional</sup> <a name="onDemandThroughputInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.onDemandThroughputInput"></a>

```java
public IResolvable|DynamodbTableOnDemandThroughput getOnDemandThroughputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

---

##### `pointInTimeRecoverySpecificationInput`<sup>Optional</sup> <a name="pointInTimeRecoverySpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.pointInTimeRecoverySpecificationInput"></a>

```java
public IResolvable|DynamodbTablePointInTimeRecoverySpecification getPointInTimeRecoverySpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a>

---

##### `provisionedThroughputInput`<sup>Optional</sup> <a name="provisionedThroughputInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisionedThroughputInput"></a>

```java
public IResolvable|DynamodbTableProvisionedThroughput getProvisionedThroughputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a>

---

##### `resourcePolicyInput`<sup>Optional</sup> <a name="resourcePolicyInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.resourcePolicyInput"></a>

```java
public IResolvable|DynamodbTableResourcePolicy getResourcePolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a>

---

##### `sseSpecificationInput`<sup>Optional</sup> <a name="sseSpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.sseSpecificationInput"></a>

```java
public IResolvable|DynamodbTableSseSpecification getSseSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a>

---

##### `streamSpecificationInput`<sup>Optional</sup> <a name="streamSpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamSpecificationInput"></a>

```java
public IResolvable|DynamodbTableStreamSpecification getStreamSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a>

---

##### `tableClassInput`<sup>Optional</sup> <a name="tableClassInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableClassInput"></a>

```java
public java.lang.String getTableClassInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DynamodbTableTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>>

---

##### `timeToLiveSpecificationInput`<sup>Optional</sup> <a name="timeToLiveSpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.timeToLiveSpecificationInput"></a>

```java
public IResolvable|DynamodbTableTimeToLiveSpecification getTimeToLiveSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a>

---

##### `warmThroughputInput`<sup>Optional</sup> <a name="warmThroughputInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.warmThroughputInput"></a>

```java
public IResolvable|DynamodbTableWarmThroughput getWarmThroughputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a>

---

##### `billingMode`<sup>Required</sup> <a name="billingMode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.billingMode"></a>

```java
public java.lang.String getBillingMode();
```

- *Type:* java.lang.String

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.deletionProtectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keySchema`<sup>Required</sup> <a name="keySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.keySchema"></a>

```java
public java.lang.String getKeySchema();
```

- *Type:* java.lang.String

---

##### `tableClass`<sup>Required</sup> <a name="tableClass" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableClass"></a>

```java
public java.lang.String getTableClass();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DynamodbTableAttributeDefinitions <a name="DynamodbTableAttributeDefinitions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableAttributeDefinitions;

DynamodbTableAttributeDefinitions.builder()
//  .attributeName(java.lang.String)
//  .attributeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | A name for the attribute. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions.property.attributeType">attributeType</a></code> | <code>java.lang.String</code> | The data type for the attribute, where:   +  ``S`` - the attribute is of type String   +  ``N`` - the attribute is of type Number   +  ``B`` - the attribute is of type Binary. |

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

A name for the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}

---

##### `attributeType`<sup>Optional</sup> <a name="attributeType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions.property.attributeType"></a>

```java
public java.lang.String getAttributeType();
```

- *Type:* java.lang.String

The data type for the attribute, where:   +  ``S`` - the attribute is of type String   +  ``N`` - the attribute is of type Number   +  ``B`` - the attribute is of type Binary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#attribute_type DynamodbTable#attribute_type}

---

### DynamodbTableConfig <a name="DynamodbTableConfig" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableConfig;

DynamodbTableConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .keySchema(java.lang.String)
//  .attributeDefinitions(IResolvable|java.util.List<DynamodbTableAttributeDefinitions>)
//  .billingMode(java.lang.String)
//  .contributorInsightsSpecification(DynamodbTableContributorInsightsSpecification)
//  .deletionProtectionEnabled(java.lang.Boolean|IResolvable)
//  .globalSecondaryIndexes(IResolvable|java.util.List<DynamodbTableGlobalSecondaryIndexes>)
//  .importSourceSpecification(DynamodbTableImportSourceSpecification)
//  .kinesisStreamSpecification(DynamodbTableKinesisStreamSpecification)
//  .localSecondaryIndexes(IResolvable|java.util.List<DynamodbTableLocalSecondaryIndexes>)
//  .onDemandThroughput(DynamodbTableOnDemandThroughput)
//  .pointInTimeRecoverySpecification(DynamodbTablePointInTimeRecoverySpecification)
//  .provisionedThroughput(DynamodbTableProvisionedThroughput)
//  .resourcePolicy(DynamodbTableResourcePolicy)
//  .sseSpecification(DynamodbTableSseSpecification)
//  .streamSpecification(DynamodbTableStreamSpecification)
//  .tableClass(java.lang.String)
//  .tableName(java.lang.String)
//  .tags(IResolvable|java.util.List<DynamodbTableTags>)
//  .timeToLiveSpecification(DynamodbTableTimeToLiveSpecification)
//  .warmThroughput(DynamodbTableWarmThroughput)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.keySchema">keySchema</a></code> | <code>java.lang.String</code> | Specifies the attributes that make up the primary key for the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.attributeDefinitions">attributeDefinitions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>></code> | A list of attributes that describe the key schema for the table and indexes. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.billingMode">billingMode</a></code> | <code>java.lang.String</code> | Specify how you are charged for read and write throughput and how you manage capacity. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.contributorInsightsSpecification">contributorInsightsSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a></code> | The settings used to specify whether to enable CloudWatch Contributor Insights for the table and define which events to monitor. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines if a table is protected from deletion. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.globalSecondaryIndexes">globalSecondaryIndexes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>></code> | Global secondary indexes to be created on the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.importSourceSpecification">importSourceSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a></code> | Specifies the properties of data being imported from the S3 bucket source to the" table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.kinesisStreamSpecification">kinesisStreamSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a></code> | The Kinesis Data Streams configuration for the specified table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.localSecondaryIndexes">localSecondaryIndexes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>></code> | Local secondary indexes to be created on the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.onDemandThroughput">onDemandThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a></code> | Sets the maximum number of read and write units for the specified on-demand table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.pointInTimeRecoverySpecification">pointInTimeRecoverySpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a></code> | The settings used to enable point in time recovery. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provisionedThroughput">provisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a></code> | Throughput for the specified table, which consists of values for ``ReadCapacityUnits`` and ``WriteCapacityUnits``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.resourcePolicy">resourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a></code> | An AWS resource-based policy document in JSON format that will be attached to the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.sseSpecification">sseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a></code> | Specifies the settings to enable server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.streamSpecification">streamSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a></code> | The settings for the DDB table stream, which captures changes to items stored in the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tableClass">tableClass</a></code> | <code>java.lang.String</code> | The table class of the new table. Valid values are ``STANDARD`` and ``STANDARD_INFREQUENT_ACCESS``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tableName">tableName</a></code> | <code>java.lang.String</code> | A name for the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>></code> | An array of key-value pairs to apply to this resource.  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html). |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.timeToLiveSpecification">timeToLiveSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a></code> | Specifies the Time to Live (TTL) settings for the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.warmThroughput">warmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a></code> | Represents the warm throughput (in read units per second and write units per second) for creating a table. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keySchema`<sup>Required</sup> <a name="keySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.keySchema"></a>

```java
public java.lang.String getKeySchema();
```

- *Type:* java.lang.String

Specifies the attributes that make up the primary key for the table.

The attributes in the `KeySchema` property must also be defined in the `AttributeDefinitions` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#key_schema DynamodbTable#key_schema}

---

##### `attributeDefinitions`<sup>Optional</sup> <a name="attributeDefinitions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.attributeDefinitions"></a>

```java
public IResolvable|java.util.List<DynamodbTableAttributeDefinitions> getAttributeDefinitions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>>

A list of attributes that describe the key schema for the table and indexes.

This property is required to create a DDB table.
Update requires: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt). Replacement if you edit an existing AttributeDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#attribute_definitions DynamodbTable#attribute_definitions}

---

##### `billingMode`<sup>Optional</sup> <a name="billingMode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.billingMode"></a>

```java
public java.lang.String getBillingMode();
```

- *Type:* java.lang.String

Specify how you are charged for read and write throughput and how you manage capacity.

Valid values include:

* `PAY_PER_REQUEST` - We recommend using `PAY_PER_REQUEST` for most DynamoDB workloads. `PAY_PER_REQUEST` sets the billing mode to [On-demand capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html).
* `PROVISIONED` - We recommend using `PROVISIONED` for steady workloads with predictable growth where capacity requirements can be reliably forecasted. `PROVISIONED` sets the billing mode to [Provisioned capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/provisioned-capacity-mode.html).

If not specified, the default is `PROVISIONED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#billing_mode DynamodbTable#billing_mode}

---

##### `contributorInsightsSpecification`<sup>Optional</sup> <a name="contributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.contributorInsightsSpecification"></a>

```java
public DynamodbTableContributorInsightsSpecification getContributorInsightsSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a>

The settings used to specify whether to enable CloudWatch Contributor Insights for the table and define which events to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#contributor_insights_specification DynamodbTable#contributor_insights_specification}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.deletionProtectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines if a table is protected from deletion.

When enabled, the table cannot be deleted by any user or process. This setting is disabled by default. For more information, see [Using deletion protection](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.DeletionProtection) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#deletion_protection_enabled DynamodbTable#deletion_protection_enabled}

---

##### `globalSecondaryIndexes`<sup>Optional</sup> <a name="globalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.globalSecondaryIndexes"></a>

```java
public IResolvable|java.util.List<DynamodbTableGlobalSecondaryIndexes> getGlobalSecondaryIndexes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>>

Global secondary indexes to be created on the table.

You can create up to 20 global secondary indexes.
If you update a table to include a new global secondary index, CFNlong initiates the index creation and then proceeds with the stack update. CFNlong doesn't wait for the index to complete creation because the backfilling phase can take a long time, depending on the size of the table. You can't use the index or update the table until the index's status is `ACTIVE`. You can track its status by using the DynamoDB [DescribeTable](https://docs.aws.amazon.com/cli/latest/reference/dynamodb/describe-table.html) command.
If you add or delete an index during an update, we recommend that you don't update any other resources. If your stack fails to update and is rolled back while adding a new index, you must manually delete the index.
Updates are not supported. The following are exceptions:

* If you update either the contributor insights specification or the provisioned throughput values of global secondary indexes, you can update the table without interruption.
* You can delete or add one global secondary index without interruption. If you do both in the same update (for example, by changing the index's logical ID), the update fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#global_secondary_indexes DynamodbTable#global_secondary_indexes}

---

##### `importSourceSpecification`<sup>Optional</sup> <a name="importSourceSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.importSourceSpecification"></a>

```java
public DynamodbTableImportSourceSpecification getImportSourceSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a>

Specifies the properties of data being imported from the S3 bucket source to the" table.

If you specify the `ImportSourceSpecification` property, and also specify either the `StreamSpecification`, the `TableClass` property, the `DeletionProtectionEnabled` property, or the `WarmThroughput` property, the IAM entity creating/updating stack must have `UpdateTable` permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#import_source_specification DynamodbTable#import_source_specification}

---

##### `kinesisStreamSpecification`<sup>Optional</sup> <a name="kinesisStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.kinesisStreamSpecification"></a>

```java
public DynamodbTableKinesisStreamSpecification getKinesisStreamSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a>

The Kinesis Data Streams configuration for the specified table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#kinesis_stream_specification DynamodbTable#kinesis_stream_specification}

---

##### `localSecondaryIndexes`<sup>Optional</sup> <a name="localSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.localSecondaryIndexes"></a>

```java
public IResolvable|java.util.List<DynamodbTableLocalSecondaryIndexes> getLocalSecondaryIndexes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>>

Local secondary indexes to be created on the table.

You can create up to 5 local secondary indexes. Each index is scoped to a given hash key value. The size of each hash key can be up to 10 gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#local_secondary_indexes DynamodbTable#local_secondary_indexes}

---

##### `onDemandThroughput`<sup>Optional</sup> <a name="onDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.onDemandThroughput"></a>

```java
public DynamodbTableOnDemandThroughput getOnDemandThroughput();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

Sets the maximum number of read and write units for the specified on-demand table.

If you use this property, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#on_demand_throughput DynamodbTable#on_demand_throughput}

---

##### `pointInTimeRecoverySpecification`<sup>Optional</sup> <a name="pointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.pointInTimeRecoverySpecification"></a>

```java
public DynamodbTablePointInTimeRecoverySpecification getPointInTimeRecoverySpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a>

The settings used to enable point in time recovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#point_in_time_recovery_specification DynamodbTable#point_in_time_recovery_specification}

---

##### `provisionedThroughput`<sup>Optional</sup> <a name="provisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provisionedThroughput"></a>

```java
public DynamodbTableProvisionedThroughput getProvisionedThroughput();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a>

Throughput for the specified table, which consists of values for ``ReadCapacityUnits`` and ``WriteCapacityUnits``.

For more information about the contents of a provisioned throughput structure, see [Amazon DynamoDB Table ProvisionedThroughput](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ProvisionedThroughput.html).
If you set `BillingMode` as `PROVISIONED`, you must specify this property. If you set `BillingMode` as `PAY_PER_REQUEST`, you cannot specify this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#provisioned_throughput DynamodbTable#provisioned_throughput}

---

##### `resourcePolicy`<sup>Optional</sup> <a name="resourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.resourcePolicy"></a>

```java
public DynamodbTableResourcePolicy getResourcePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a>

An AWS resource-based policy document in JSON format that will be attached to the table.

When you attach a resource-based policy while creating a table, the policy application is *strongly consistent*.
The maximum size supported for a resource-based policy document is 20 KB. DynamoDB counts whitespaces when calculating the size of a policy against this limit. For a full list of all considerations that apply for resource-based policies, see [Resource-based policy considerations](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-considerations.html).
You need to specify the `CreateTable` and `PutResourcePolicy` IAM actions for authorizing a user to create a table with a resource-based policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#resource_policy DynamodbTable#resource_policy}

---

##### `sseSpecification`<sup>Optional</sup> <a name="sseSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.sseSpecification"></a>

```java
public DynamodbTableSseSpecification getSseSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a>

Specifies the settings to enable server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#sse_specification DynamodbTable#sse_specification}

---

##### `streamSpecification`<sup>Optional</sup> <a name="streamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.streamSpecification"></a>

```java
public DynamodbTableStreamSpecification getStreamSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a>

The settings for the DDB table stream, which captures changes to items stored in the table.

Including this property in your CFNlong template automatically enables streaming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#stream_specification DynamodbTable#stream_specification}

---

##### `tableClass`<sup>Optional</sup> <a name="tableClass" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tableClass"></a>

```java
public java.lang.String getTableClass();
```

- *Type:* java.lang.String

The table class of the new table. Valid values are ``STANDARD`` and ``STANDARD_INFREQUENT_ACCESS``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#table_class DynamodbTable#table_class}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

A name for the table.

If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the table name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#table_name DynamodbTable#table_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DynamodbTableTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>>

An array of key-value pairs to apply to this resource.  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#tags DynamodbTable#tags}

---

##### `timeToLiveSpecification`<sup>Optional</sup> <a name="timeToLiveSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.timeToLiveSpecification"></a>

```java
public DynamodbTableTimeToLiveSpecification getTimeToLiveSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a>

Specifies the Time to Live (TTL) settings for the table.

For detailed information about the limits in DynamoDB, see [Limits in Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the Amazon DynamoDB Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#time_to_live_specification DynamodbTable#time_to_live_specification}

---

##### `warmThroughput`<sup>Optional</sup> <a name="warmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.warmThroughput"></a>

```java
public DynamodbTableWarmThroughput getWarmThroughput();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a>

Represents the warm throughput (in read units per second and write units per second) for creating a table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#warm_throughput DynamodbTable#warm_throughput}

---

### DynamodbTableContributorInsightsSpecification <a name="DynamodbTableContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableContributorInsightsSpecification;

DynamodbTableContributorInsightsSpecification.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false). |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification.property.mode">mode</a></code> | <code>java.lang.String</code> | Specifies the CloudWatch Contributor Insights mode for a table. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Specifies the CloudWatch Contributor Insights mode for a table.

Valid values are `ACCESSED_AND_THROTTLED_KEYS` (tracks all access and throttled events) or `THROTTLED_KEYS` (tracks only throttled events). This setting determines what type of contributor insights data is collected for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#mode DynamodbTable#mode}

---

### DynamodbTableGlobalSecondaryIndexes <a name="DynamodbTableGlobalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableGlobalSecondaryIndexes;

DynamodbTableGlobalSecondaryIndexes.builder()
//  .contributorInsightsSpecification(DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification)
//  .indexName(java.lang.String)
//  .keySchema(IResolvable|java.util.List<DynamodbTableGlobalSecondaryIndexesKeySchema>)
//  .onDemandThroughput(DynamodbTableGlobalSecondaryIndexesOnDemandThroughput)
//  .projection(DynamodbTableGlobalSecondaryIndexesProjection)
//  .provisionedThroughput(DynamodbTableGlobalSecondaryIndexesProvisionedThroughput)
//  .warmThroughput(DynamodbTableGlobalSecondaryIndexesWarmThroughput)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.contributorInsightsSpecification">contributorInsightsSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a></code> | The settings used to specify whether to enable CloudWatch Contributor Insights for the global table and define which events to monitor. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.indexName">indexName</a></code> | <code>java.lang.String</code> | The name of the global secondary index. The name must be unique among all other indexes on this table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.keySchema">keySchema</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>></code> | The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.onDemandThroughput">onDemandThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a></code> | The maximum number of read and write units for the specified global secondary index. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.projection">projection</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a></code> | Represents attributes that are copied (projected) from the table into the global secondary index. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.provisionedThroughput">provisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a></code> | Represents the provisioned throughput settings for the specified global secondary index. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.warmThroughput">warmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a></code> | Represents the warm throughput value (in read units per second and write units per second) for the specified secondary index. |

---

##### `contributorInsightsSpecification`<sup>Optional</sup> <a name="contributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.contributorInsightsSpecification"></a>

```java
public DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification getContributorInsightsSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a>

The settings used to specify whether to enable CloudWatch Contributor Insights for the global table and define which events to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#contributor_insights_specification DynamodbTable#contributor_insights_specification}

---

##### `indexName`<sup>Optional</sup> <a name="indexName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.indexName"></a>

```java
public java.lang.String getIndexName();
```

- *Type:* java.lang.String

The name of the global secondary index. The name must be unique among all other indexes on this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#index_name DynamodbTable#index_name}

---

##### `keySchema`<sup>Optional</sup> <a name="keySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.keySchema"></a>

```java
public IResolvable|java.util.List<DynamodbTableGlobalSecondaryIndexesKeySchema> getKeySchema();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>>

The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*.

The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#key_schema DynamodbTable#key_schema}

---

##### `onDemandThroughput`<sup>Optional</sup> <a name="onDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.onDemandThroughput"></a>

```java
public DynamodbTableGlobalSecondaryIndexesOnDemandThroughput getOnDemandThroughput();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a>

The maximum number of read and write units for the specified global secondary index.

If you use this parameter, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both. You must use either `OnDemandThroughput` or `ProvisionedThroughput` based on your table's capacity mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#on_demand_throughput DynamodbTable#on_demand_throughput}

---

##### `projection`<sup>Optional</sup> <a name="projection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.projection"></a>

```java
public DynamodbTableGlobalSecondaryIndexesProjection getProjection();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a>

Represents attributes that are copied (projected) from the table into the global secondary index.

These are in addition to the primary key attributes and index key attributes, which are automatically projected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#projection DynamodbTable#projection}

---

##### `provisionedThroughput`<sup>Optional</sup> <a name="provisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.provisionedThroughput"></a>

```java
public DynamodbTableGlobalSecondaryIndexesProvisionedThroughput getProvisionedThroughput();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a>

Represents the provisioned throughput settings for the specified global secondary index.

You must use either `OnDemandThroughput` or `ProvisionedThroughput` based on your table's capacity mode.
For current minimum and maximum provisioned throughput values, see [Service, Account, and Table Quotas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the *Amazon DynamoDB Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#provisioned_throughput DynamodbTable#provisioned_throughput}

---

##### `warmThroughput`<sup>Optional</sup> <a name="warmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.warmThroughput"></a>

```java
public DynamodbTableGlobalSecondaryIndexesWarmThroughput getWarmThroughput();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a>

Represents the warm throughput value (in read units per second and write units per second) for the specified secondary index.

If you use this parameter, you must specify `ReadUnitsPerSecond`, `WriteUnitsPerSecond`, or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#warm_throughput DynamodbTable#warm_throughput}

---

### DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification <a name="DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification;

DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false). |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification.property.mode">mode</a></code> | <code>java.lang.String</code> | Specifies the CloudWatch Contributor Insights mode for a table. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Specifies the CloudWatch Contributor Insights mode for a table.

Valid values are `ACCESSED_AND_THROTTLED_KEYS` (tracks all access and throttled events) or `THROTTLED_KEYS` (tracks only throttled events). This setting determines what type of contributor insights data is collected for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#mode DynamodbTable#mode}

---

### DynamodbTableGlobalSecondaryIndexesKeySchema <a name="DynamodbTableGlobalSecondaryIndexesKeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableGlobalSecondaryIndexesKeySchema;

DynamodbTableGlobalSecondaryIndexesKeySchema.builder()
//  .attributeName(java.lang.String)
//  .keyType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | The name of a key attribute. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema.property.keyType">keyType</a></code> | <code>java.lang.String</code> | The role that this key attribute will assume:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*. |

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

The name of a key attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

The role that this key attribute will assume:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*.

The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#key_type DynamodbTable#key_type}

---

### DynamodbTableGlobalSecondaryIndexesOnDemandThroughput <a name="DynamodbTableGlobalSecondaryIndexesOnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput;

DynamodbTableGlobalSecondaryIndexesOnDemandThroughput.builder()
//  .maxReadRequestUnits(java.lang.Number)
//  .maxWriteRequestUnits(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput.property.maxReadRequestUnits">maxReadRequestUnits</a></code> | <code>java.lang.Number</code> | Maximum number of read request units for the specified table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput.property.maxWriteRequestUnits">maxWriteRequestUnits</a></code> | <code>java.lang.Number</code> | Maximum number of write request units for the specified table. |

---

##### `maxReadRequestUnits`<sup>Optional</sup> <a name="maxReadRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput.property.maxReadRequestUnits"></a>

```java
public java.lang.Number getMaxReadRequestUnits();
```

- *Type:* java.lang.Number

Maximum number of read request units for the specified table.

To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxReadRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxReadRequestUnits` to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#max_read_request_units DynamodbTable#max_read_request_units}

---

##### `maxWriteRequestUnits`<sup>Optional</sup> <a name="maxWriteRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput.property.maxWriteRequestUnits"></a>

```java
public java.lang.Number getMaxWriteRequestUnits();
```

- *Type:* java.lang.Number

Maximum number of write request units for the specified table.

To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxWriteRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxWriteRequestUnits` to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#max_write_request_units DynamodbTable#max_write_request_units}

---

### DynamodbTableGlobalSecondaryIndexesProjection <a name="DynamodbTableGlobalSecondaryIndexesProjection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableGlobalSecondaryIndexesProjection;

DynamodbTableGlobalSecondaryIndexesProjection.builder()
//  .nonKeyAttributes(java.util.List<java.lang.String>)
//  .projectionType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection.property.nonKeyAttributes">nonKeyAttributes</a></code> | <code>java.util.List<java.lang.String></code> | Represents the non-key attribute names which will be projected into the index. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection.property.projectionType">projectionType</a></code> | <code>java.lang.String</code> | The set of attributes that are projected into the index:   +  ``KEYS_ONLY`` - Only the index and primary keys are projected into the index. |

---

##### `nonKeyAttributes`<sup>Optional</sup> <a name="nonKeyAttributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection.property.nonKeyAttributes"></a>

```java
public java.util.List<java.lang.String> getNonKeyAttributes();
```

- *Type:* java.util.List<java.lang.String>

Represents the non-key attribute names which will be projected into the index.

For global and local secondary indexes, the total count of `NonKeyAttributes` summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of `INCLUDE`. You still can specify the ProjectionType of `ALL` to project all attributes from the source table, even if the table has more than 100 attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}

---

##### `projectionType`<sup>Optional</sup> <a name="projectionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection.property.projectionType"></a>

```java
public java.lang.String getProjectionType();
```

- *Type:* java.lang.String

The set of attributes that are projected into the index:   +  ``KEYS_ONLY`` - Only the index and primary keys are projected into the index.

* `INCLUDE` - In addition to the attributes described in `KEYS_ONLY`, the secondary index will include other non-key attributes that you specify.
* `ALL` - All of the table attributes are projected into the index.

When using the DynamoDB console, `ALL` is selected by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#projection_type DynamodbTable#projection_type}

---

### DynamodbTableGlobalSecondaryIndexesProvisionedThroughput <a name="DynamodbTableGlobalSecondaryIndexesProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput;

DynamodbTableGlobalSecondaryIndexesProvisionedThroughput.builder()
//  .readCapacityUnits(java.lang.Number)
//  .writeCapacityUnits(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput.property.readCapacityUnits">readCapacityUnits</a></code> | <code>java.lang.Number</code> | The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ``ThrottlingException``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput.property.writeCapacityUnits">writeCapacityUnits</a></code> | <code>java.lang.Number</code> | The maximum number of writes consumed per second before DynamoDB returns a ``ThrottlingException``. |

---

##### `readCapacityUnits`<sup>Optional</sup> <a name="readCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput.property.readCapacityUnits"></a>

```java
public java.lang.Number getReadCapacityUnits();
```

- *Type:* java.lang.Number

The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ``ThrottlingException``.

For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#read_capacity_units DynamodbTable#read_capacity_units}

---

##### `writeCapacityUnits`<sup>Optional</sup> <a name="writeCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput.property.writeCapacityUnits"></a>

```java
public java.lang.Number getWriteCapacityUnits();
```

- *Type:* java.lang.Number

The maximum number of writes consumed per second before DynamoDB returns a ``ThrottlingException``.

For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#write_capacity_units DynamodbTable#write_capacity_units}

---

### DynamodbTableGlobalSecondaryIndexesWarmThroughput <a name="DynamodbTableGlobalSecondaryIndexesWarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableGlobalSecondaryIndexesWarmThroughput;

DynamodbTableGlobalSecondaryIndexesWarmThroughput.builder()
//  .readUnitsPerSecond(java.lang.Number)
//  .writeUnitsPerSecond(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput.property.readUnitsPerSecond">readUnitsPerSecond</a></code> | <code>java.lang.Number</code> | Represents the number of read operations your base table can instantaneously support. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput.property.writeUnitsPerSecond">writeUnitsPerSecond</a></code> | <code>java.lang.Number</code> | Represents the number of write operations your base table can instantaneously support. |

---

##### `readUnitsPerSecond`<sup>Optional</sup> <a name="readUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput.property.readUnitsPerSecond"></a>

```java
public java.lang.Number getReadUnitsPerSecond();
```

- *Type:* java.lang.Number

Represents the number of read operations your base table can instantaneously support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#read_units_per_second DynamodbTable#read_units_per_second}

---

##### `writeUnitsPerSecond`<sup>Optional</sup> <a name="writeUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput.property.writeUnitsPerSecond"></a>

```java
public java.lang.Number getWriteUnitsPerSecond();
```

- *Type:* java.lang.Number

Represents the number of write operations your base table can instantaneously support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#write_units_per_second DynamodbTable#write_units_per_second}

---

### DynamodbTableImportSourceSpecification <a name="DynamodbTableImportSourceSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableImportSourceSpecification;

DynamodbTableImportSourceSpecification.builder()
//  .inputCompressionType(java.lang.String)
//  .inputFormat(java.lang.String)
//  .inputFormatOptions(DynamodbTableImportSourceSpecificationInputFormatOptions)
//  .s3BucketSource(DynamodbTableImportSourceSpecificationS3BucketSource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputCompressionType">inputCompressionType</a></code> | <code>java.lang.String</code> | Type of compression to be used on the input coming from the imported table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputFormat">inputFormat</a></code> | <code>java.lang.String</code> | The format of the source data. Valid values for ``ImportFormat`` are ``CSV``, ``DYNAMODB_JSON`` or ``ION``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputFormatOptions">inputFormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a></code> | Additional properties that specify how the input is formatted,. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.s3BucketSource">s3BucketSource</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a></code> | The S3 bucket that provides the source for the import. |

---

##### `inputCompressionType`<sup>Optional</sup> <a name="inputCompressionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputCompressionType"></a>

```java
public java.lang.String getInputCompressionType();
```

- *Type:* java.lang.String

Type of compression to be used on the input coming from the imported table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#input_compression_type DynamodbTable#input_compression_type}

---

##### `inputFormat`<sup>Optional</sup> <a name="inputFormat" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputFormat"></a>

```java
public java.lang.String getInputFormat();
```

- *Type:* java.lang.String

The format of the source data. Valid values for ``ImportFormat`` are ``CSV``, ``DYNAMODB_JSON`` or ``ION``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#input_format DynamodbTable#input_format}

---

##### `inputFormatOptions`<sup>Optional</sup> <a name="inputFormatOptions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputFormatOptions"></a>

```java
public DynamodbTableImportSourceSpecificationInputFormatOptions getInputFormatOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a>

Additional properties that specify how the input is formatted,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#input_format_options DynamodbTable#input_format_options}

---

##### `s3BucketSource`<sup>Optional</sup> <a name="s3BucketSource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.s3BucketSource"></a>

```java
public DynamodbTableImportSourceSpecificationS3BucketSource getS3BucketSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a>

The S3 bucket that provides the source for the import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#s3_bucket_source DynamodbTable#s3_bucket_source}

---

### DynamodbTableImportSourceSpecificationInputFormatOptions <a name="DynamodbTableImportSourceSpecificationInputFormatOptions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableImportSourceSpecificationInputFormatOptions;

DynamodbTableImportSourceSpecificationInputFormatOptions.builder()
//  .csv(DynamodbTableImportSourceSpecificationInputFormatOptionsCsv)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a></code> | The options for imported source files in CSV format. The values are Delimiter and HeaderList. |

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions.property.csv"></a>

```java
public DynamodbTableImportSourceSpecificationInputFormatOptionsCsv getCsv();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a>

The options for imported source files in CSV format. The values are Delimiter and HeaderList.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#csv DynamodbTable#csv}

---

### DynamodbTableImportSourceSpecificationInputFormatOptionsCsv <a name="DynamodbTableImportSourceSpecificationInputFormatOptionsCsv" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv;

DynamodbTableImportSourceSpecificationInputFormatOptionsCsv.builder()
//  .delimiter(java.lang.String)
//  .headerList(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | The delimiter used for separating items in the CSV file being imported. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv.property.headerList">headerList</a></code> | <code>java.util.List<java.lang.String></code> | List of the headers used to specify a common header for all source CSV files being imported. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

The delimiter used for separating items in the CSV file being imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#delimiter DynamodbTable#delimiter}

---

##### `headerList`<sup>Optional</sup> <a name="headerList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv.property.headerList"></a>

```java
public java.util.List<java.lang.String> getHeaderList();
```

- *Type:* java.util.List<java.lang.String>

List of the headers used to specify a common header for all source CSV files being imported.

If this field is specified then the first line of each CSV file is treated as data instead of the header. If this field is not specified the the first line of each CSV file is treated as the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#header_list DynamodbTable#header_list}

---

### DynamodbTableImportSourceSpecificationS3BucketSource <a name="DynamodbTableImportSourceSpecificationS3BucketSource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableImportSourceSpecificationS3BucketSource;

DynamodbTableImportSourceSpecificationS3BucketSource.builder()
//  .s3Bucket(java.lang.String)
//  .s3BucketOwner(java.lang.String)
//  .s3KeyPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | The S3 bucket that is being imported from. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3BucketOwner">s3BucketOwner</a></code> | <code>java.lang.String</code> | The account number of the S3 bucket that is being imported from. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>java.lang.String</code> | The key prefix shared by all S3 Objects that are being imported. |

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

The S3 bucket that is being imported from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#s3_bucket DynamodbTable#s3_bucket}

---

##### `s3BucketOwner`<sup>Optional</sup> <a name="s3BucketOwner" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3BucketOwner"></a>

```java
public java.lang.String getS3BucketOwner();
```

- *Type:* java.lang.String

The account number of the S3 bucket that is being imported from.

If the bucket is owned by the requester this is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#s3_bucket_owner DynamodbTable#s3_bucket_owner}

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="s3KeyPrefix" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3KeyPrefix"></a>

```java
public java.lang.String getS3KeyPrefix();
```

- *Type:* java.lang.String

The key prefix shared by all S3 Objects that are being imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#s3_key_prefix DynamodbTable#s3_key_prefix}

---

### DynamodbTableKinesisStreamSpecification <a name="DynamodbTableKinesisStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableKinesisStreamSpecification;

DynamodbTableKinesisStreamSpecification.builder()
//  .approximateCreationDateTimePrecision(java.lang.String)
//  .streamArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification.property.approximateCreationDateTimePrecision">approximateCreationDateTimePrecision</a></code> | <code>java.lang.String</code> | The precision for the time and date that the stream was created. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | The ARN for a specific Kinesis data stream.  Length Constraints: Minimum length of 37. Maximum length of 1024. |

---

##### `approximateCreationDateTimePrecision`<sup>Optional</sup> <a name="approximateCreationDateTimePrecision" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification.property.approximateCreationDateTimePrecision"></a>

```java
public java.lang.String getApproximateCreationDateTimePrecision();
```

- *Type:* java.lang.String

The precision for the time and date that the stream was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#approximate_creation_date_time_precision DynamodbTable#approximate_creation_date_time_precision}

---

##### `streamArn`<sup>Optional</sup> <a name="streamArn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

The ARN for a specific Kinesis data stream.  Length Constraints: Minimum length of 37. Maximum length of 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#stream_arn DynamodbTable#stream_arn}

---

### DynamodbTableLocalSecondaryIndexes <a name="DynamodbTableLocalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableLocalSecondaryIndexes;

DynamodbTableLocalSecondaryIndexes.builder()
//  .indexName(java.lang.String)
//  .keySchema(IResolvable|java.util.List<DynamodbTableLocalSecondaryIndexesKeySchema>)
//  .projection(DynamodbTableLocalSecondaryIndexesProjection)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.indexName">indexName</a></code> | <code>java.lang.String</code> | The name of the local secondary index. The name must be unique among all other indexes on this table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.keySchema">keySchema</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>></code> | The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.projection">projection</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a></code> | Represents attributes that are copied (projected) from the table into the local secondary index. |

---

##### `indexName`<sup>Optional</sup> <a name="indexName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.indexName"></a>

```java
public java.lang.String getIndexName();
```

- *Type:* java.lang.String

The name of the local secondary index. The name must be unique among all other indexes on this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#index_name DynamodbTable#index_name}

---

##### `keySchema`<sup>Optional</sup> <a name="keySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.keySchema"></a>

```java
public IResolvable|java.util.List<DynamodbTableLocalSecondaryIndexesKeySchema> getKeySchema();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>>

The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*.

The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#key_schema DynamodbTable#key_schema}

---

##### `projection`<sup>Optional</sup> <a name="projection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.projection"></a>

```java
public DynamodbTableLocalSecondaryIndexesProjection getProjection();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a>

Represents attributes that are copied (projected) from the table into the local secondary index.

These are in addition to the primary key attributes and index key attributes, which are automatically projected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#projection DynamodbTable#projection}

---

### DynamodbTableLocalSecondaryIndexesKeySchema <a name="DynamodbTableLocalSecondaryIndexesKeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableLocalSecondaryIndexesKeySchema;

DynamodbTableLocalSecondaryIndexesKeySchema.builder()
//  .attributeName(java.lang.String)
//  .keyType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | The name of a key attribute. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema.property.keyType">keyType</a></code> | <code>java.lang.String</code> | The role that this key attribute will assume:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*. |

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

The name of a key attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

The role that this key attribute will assume:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*.

The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#key_type DynamodbTable#key_type}

---

### DynamodbTableLocalSecondaryIndexesProjection <a name="DynamodbTableLocalSecondaryIndexesProjection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableLocalSecondaryIndexesProjection;

DynamodbTableLocalSecondaryIndexesProjection.builder()
//  .nonKeyAttributes(java.util.List<java.lang.String>)
//  .projectionType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection.property.nonKeyAttributes">nonKeyAttributes</a></code> | <code>java.util.List<java.lang.String></code> | Represents the non-key attribute names which will be projected into the index. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection.property.projectionType">projectionType</a></code> | <code>java.lang.String</code> | The set of attributes that are projected into the index:   +  ``KEYS_ONLY`` - Only the index and primary keys are projected into the index. |

---

##### `nonKeyAttributes`<sup>Optional</sup> <a name="nonKeyAttributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection.property.nonKeyAttributes"></a>

```java
public java.util.List<java.lang.String> getNonKeyAttributes();
```

- *Type:* java.util.List<java.lang.String>

Represents the non-key attribute names which will be projected into the index.

For global and local secondary indexes, the total count of `NonKeyAttributes` summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of `INCLUDE`. You still can specify the ProjectionType of `ALL` to project all attributes from the source table, even if the table has more than 100 attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}

---

##### `projectionType`<sup>Optional</sup> <a name="projectionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection.property.projectionType"></a>

```java
public java.lang.String getProjectionType();
```

- *Type:* java.lang.String

The set of attributes that are projected into the index:   +  ``KEYS_ONLY`` - Only the index and primary keys are projected into the index.

* `INCLUDE` - In addition to the attributes described in `KEYS_ONLY`, the secondary index will include other non-key attributes that you specify.
* `ALL` - All of the table attributes are projected into the index.

When using the DynamoDB console, `ALL` is selected by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#projection_type DynamodbTable#projection_type}

---

### DynamodbTableOnDemandThroughput <a name="DynamodbTableOnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableOnDemandThroughput;

DynamodbTableOnDemandThroughput.builder()
//  .maxReadRequestUnits(java.lang.Number)
//  .maxWriteRequestUnits(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxReadRequestUnits">maxReadRequestUnits</a></code> | <code>java.lang.Number</code> | Maximum number of read request units for the specified table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxWriteRequestUnits">maxWriteRequestUnits</a></code> | <code>java.lang.Number</code> | Maximum number of write request units for the specified table. |

---

##### `maxReadRequestUnits`<sup>Optional</sup> <a name="maxReadRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxReadRequestUnits"></a>

```java
public java.lang.Number getMaxReadRequestUnits();
```

- *Type:* java.lang.Number

Maximum number of read request units for the specified table.

To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxReadRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxReadRequestUnits` to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#max_read_request_units DynamodbTable#max_read_request_units}

---

##### `maxWriteRequestUnits`<sup>Optional</sup> <a name="maxWriteRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxWriteRequestUnits"></a>

```java
public java.lang.Number getMaxWriteRequestUnits();
```

- *Type:* java.lang.Number

Maximum number of write request units for the specified table.

To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxWriteRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxWriteRequestUnits` to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#max_write_request_units DynamodbTable#max_write_request_units}

---

### DynamodbTablePointInTimeRecoverySpecification <a name="DynamodbTablePointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTablePointInTimeRecoverySpecification;

DynamodbTablePointInTimeRecoverySpecification.builder()
//  .pointInTimeRecoveryEnabled(java.lang.Boolean|IResolvable)
//  .recoveryPeriodInDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification.property.pointInTimeRecoveryEnabled">pointInTimeRecoveryEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether point in time recovery is enabled (true) or disabled (false) on the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification.property.recoveryPeriodInDays">recoveryPeriodInDays</a></code> | <code>java.lang.Number</code> | The number of preceding days for which continuous backups are taken and maintained. |

---

##### `pointInTimeRecoveryEnabled`<sup>Optional</sup> <a name="pointInTimeRecoveryEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification.property.pointInTimeRecoveryEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPointInTimeRecoveryEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#point_in_time_recovery_enabled DynamodbTable#point_in_time_recovery_enabled}

---

##### `recoveryPeriodInDays`<sup>Optional</sup> <a name="recoveryPeriodInDays" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification.property.recoveryPeriodInDays"></a>

```java
public java.lang.Number getRecoveryPeriodInDays();
```

- *Type:* java.lang.Number

The number of preceding days for which continuous backups are taken and maintained.

Your table data is only recoverable to any point-in-time from within the configured recovery period. This parameter is optional. If no value is provided, the value will default to 35.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#recovery_period_in_days DynamodbTable#recovery_period_in_days}

---

### DynamodbTableProvisionedThroughput <a name="DynamodbTableProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableProvisionedThroughput;

DynamodbTableProvisionedThroughput.builder()
//  .readCapacityUnits(java.lang.Number)
//  .writeCapacityUnits(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput.property.readCapacityUnits">readCapacityUnits</a></code> | <code>java.lang.Number</code> | The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ``ThrottlingException``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput.property.writeCapacityUnits">writeCapacityUnits</a></code> | <code>java.lang.Number</code> | The maximum number of writes consumed per second before DynamoDB returns a ``ThrottlingException``. |

---

##### `readCapacityUnits`<sup>Optional</sup> <a name="readCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput.property.readCapacityUnits"></a>

```java
public java.lang.Number getReadCapacityUnits();
```

- *Type:* java.lang.Number

The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ``ThrottlingException``.

For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#read_capacity_units DynamodbTable#read_capacity_units}

---

##### `writeCapacityUnits`<sup>Optional</sup> <a name="writeCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput.property.writeCapacityUnits"></a>

```java
public java.lang.Number getWriteCapacityUnits();
```

- *Type:* java.lang.Number

The maximum number of writes consumed per second before DynamoDB returns a ``ThrottlingException``.

For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#write_capacity_units DynamodbTable#write_capacity_units}

---

### DynamodbTableResourcePolicy <a name="DynamodbTableResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableResourcePolicy;

DynamodbTableResourcePolicy.builder()
//  .policyDocument(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy.property.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | A resource-based policy document that contains permissions to add to the specified DDB table, index, or both. |

---

##### `policyDocument`<sup>Optional</sup> <a name="policyDocument" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy.property.policyDocument"></a>

```java
public java.lang.String getPolicyDocument();
```

- *Type:* java.lang.String

A resource-based policy document that contains permissions to add to the specified DDB table, index, or both.

In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see [Using resource-based policies for](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#policy_document DynamodbTable#policy_document}

---

### DynamodbTableSseSpecification <a name="DynamodbTableSseSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableSseSpecification;

DynamodbTableSseSpecification.builder()
//  .kmsMasterKeyId(java.lang.String)
//  .sseEnabled(java.lang.Boolean|IResolvable)
//  .sseType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>java.lang.String</code> | The KMS key that should be used for the KMS encryption. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.sseEnabled">sseEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether server-side encryption is done using an AWS managed key or an AWS owned key. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.sseType">sseType</a></code> | <code>java.lang.String</code> | Server-side encryption type. |

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="kmsMasterKeyId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.kmsMasterKeyId"></a>

```java
public java.lang.String getKmsMasterKeyId();
```

- *Type:* java.lang.String

The KMS key that should be used for the KMS encryption.

To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB key `alias/aws/dynamodb`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#kms_master_key_id DynamodbTable#kms_master_key_id}

---

##### `sseEnabled`<sup>Optional</sup> <a name="sseEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.sseEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSseEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether server-side encryption is done using an AWS managed key or an AWS owned key.

If enabled (true), server-side encryption type is set to `KMS` and an AWS managed key is used (KMS charges apply). If disabled (false) or not specified, server-side encryption is set to AWS owned key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#sse_enabled DynamodbTable#sse_enabled}

---

##### `sseType`<sup>Optional</sup> <a name="sseType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.sseType"></a>

```java
public java.lang.String getSseType();
```

- *Type:* java.lang.String

Server-side encryption type.

The only supported value is:

* `KMS` - Server-side encryption that uses KMSlong. The key is stored in your account and is managed by KMS (KMS charges apply).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#sse_type DynamodbTable#sse_type}

---

### DynamodbTableStreamSpecification <a name="DynamodbTableStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableStreamSpecification;

DynamodbTableStreamSpecification.builder()
//  .resourcePolicy(DynamodbTableStreamSpecificationResourcePolicy)
//  .streamViewType(java.lang.String)
//  .tags(IResolvable|java.util.List<DynamodbTableStreamSpecificationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.property.resourcePolicy">resourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a></code> | Creates or updates a resource-based policy document that contains the permissions for DDB resources, such as a table's streams. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.property.streamViewType">streamViewType</a></code> | <code>java.lang.String</code> | When an item in the table is modified, ``StreamViewType`` determines what information is written to the stream for this table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTags">DynamodbTableStreamSpecificationTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#tags DynamodbTable#tags}. |

---

##### `resourcePolicy`<sup>Optional</sup> <a name="resourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.property.resourcePolicy"></a>

```java
public DynamodbTableStreamSpecificationResourcePolicy getResourcePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a>

Creates or updates a resource-based policy document that contains the permissions for DDB resources, such as a table's streams.

Resource-based policies let you define access permissions by specifying who has access to each resource, and the actions they are allowed to perform on each resource.
When you remove the `StreamSpecification` property from the template, DynamoDB disables the stream but retains any attached resource policy until the stream is deleted after 24 hours. When you modify the `StreamViewType` property, DynamoDB creates a new stream and retains the old stream's resource policy. The old stream and its resource policy are deleted after the 24-hour retention period.
In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see [Using resource-based policies for](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#resource_policy DynamodbTable#resource_policy}

---

##### `streamViewType`<sup>Optional</sup> <a name="streamViewType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.property.streamViewType"></a>

```java
public java.lang.String getStreamViewType();
```

- *Type:* java.lang.String

When an item in the table is modified, ``StreamViewType`` determines what information is written to the stream for this table.

Valid values for `StreamViewType` are:

* `KEYS_ONLY` - Only the key attributes of the modified item are written to the stream.
* `NEW_IMAGE` - The entire item, as it appears after it was modified, is written to the stream.
* `OLD_IMAGE` - The entire item, as it appeared before it was modified, is written to the stream.
* `NEW_AND_OLD_IMAGES` - Both the new and the old item images of the item are written to the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#stream_view_type DynamodbTable#stream_view_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.property.tags"></a>

```java
public IResolvable|java.util.List<DynamodbTableStreamSpecificationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTags">DynamodbTableStreamSpecificationTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#tags DynamodbTable#tags}.

---

### DynamodbTableStreamSpecificationResourcePolicy <a name="DynamodbTableStreamSpecificationResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableStreamSpecificationResourcePolicy;

DynamodbTableStreamSpecificationResourcePolicy.builder()
//  .policyDocument(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy.property.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | A resource-based policy document that contains permissions to add to the specified DDB table, index, or both. |

---

##### `policyDocument`<sup>Optional</sup> <a name="policyDocument" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy.property.policyDocument"></a>

```java
public java.lang.String getPolicyDocument();
```

- *Type:* java.lang.String

A resource-based policy document that contains permissions to add to the specified DDB table, index, or both.

In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see [Using resource-based policies for](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#policy_document DynamodbTable#policy_document}

---

### DynamodbTableStreamSpecificationTags <a name="DynamodbTableStreamSpecificationTags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableStreamSpecificationTags;

DynamodbTableStreamSpecificationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. Tag values are case-sensitive and can be null. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Tag keys are case sensitive. Each DynamoDB table can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#key DynamodbTable#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag. Tag values are case-sensitive and can be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#value DynamodbTable#value}

---

### DynamodbTableTags <a name="DynamodbTableTags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableTags;

DynamodbTableTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. Tag values are case-sensitive and can be null. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Tag keys are case sensitive. Each DynamoDB table can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#key DynamodbTable#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag. Tag values are case-sensitive and can be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#value DynamodbTable#value}

---

### DynamodbTableTimeToLiveSpecification <a name="DynamodbTableTimeToLiveSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableTimeToLiveSpecification;

DynamodbTableTimeToLiveSpecification.builder()
//  .attributeName(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | The name of the TTL attribute used to store the expiration time for items in the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether TTL is to be enabled (true) or disabled (false) on the table. |

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

The name of the TTL attribute used to store the expiration time for items in the table.

* The `AttributeName` property is required when enabling the TTL, or when TTL is already enabled.
* To update this property, you must first disable TTL and then enable TTL with the new attribute name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether TTL is to be enabled (true) or disabled (false) on the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}

---

### DynamodbTableWarmThroughput <a name="DynamodbTableWarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableWarmThroughput;

DynamodbTableWarmThroughput.builder()
//  .readUnitsPerSecond(java.lang.Number)
//  .writeUnitsPerSecond(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput.property.readUnitsPerSecond">readUnitsPerSecond</a></code> | <code>java.lang.Number</code> | Represents the number of read operations your base table can instantaneously support. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput.property.writeUnitsPerSecond">writeUnitsPerSecond</a></code> | <code>java.lang.Number</code> | Represents the number of write operations your base table can instantaneously support. |

---

##### `readUnitsPerSecond`<sup>Optional</sup> <a name="readUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput.property.readUnitsPerSecond"></a>

```java
public java.lang.Number getReadUnitsPerSecond();
```

- *Type:* java.lang.Number

Represents the number of read operations your base table can instantaneously support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#read_units_per_second DynamodbTable#read_units_per_second}

---

##### `writeUnitsPerSecond`<sup>Optional</sup> <a name="writeUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput.property.writeUnitsPerSecond"></a>

```java
public java.lang.Number getWriteUnitsPerSecond();
```

- *Type:* java.lang.Number

Represents the number of write operations your base table can instantaneously support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dynamodb_table#write_units_per_second DynamodbTable#write_units_per_second}

---

## Classes <a name="Classes" id="Classes"></a>

### DynamodbTableAttributeDefinitionsList <a name="DynamodbTableAttributeDefinitionsList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableAttributeDefinitionsList;

new DynamodbTableAttributeDefinitionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.get"></a>

```java
public DynamodbTableAttributeDefinitionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DynamodbTableAttributeDefinitions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>>

---


### DynamodbTableAttributeDefinitionsOutputReference <a name="DynamodbTableAttributeDefinitionsOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableAttributeDefinitionsOutputReference;

new DynamodbTableAttributeDefinitionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resetAttributeName">resetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resetAttributeType">resetAttributeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resetAttributeName"></a>

```java
public void resetAttributeName()
```

##### `resetAttributeType` <a name="resetAttributeType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resetAttributeType"></a>

```java
public void resetAttributeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeTypeInput">attributeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeType">attributeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeNameInput"></a>

```java
public java.lang.String getAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `attributeTypeInput`<sup>Optional</sup> <a name="attributeTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeTypeInput"></a>

```java
public java.lang.String getAttributeTypeInput();
```

- *Type:* java.lang.String

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

---

##### `attributeType`<sup>Required</sup> <a name="attributeType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeType"></a>

```java
public java.lang.String getAttributeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableAttributeDefinitions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>

---


### DynamodbTableContributorInsightsSpecificationOutputReference <a name="DynamodbTableContributorInsightsSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableContributorInsightsSpecificationOutputReference;

new DynamodbTableContributorInsightsSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableContributorInsightsSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a>

---


### DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference <a name="DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference;

new DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a>

---


### DynamodbTableGlobalSecondaryIndexesKeySchemaList <a name="DynamodbTableGlobalSecondaryIndexesKeySchemaList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableGlobalSecondaryIndexesKeySchemaList;

new DynamodbTableGlobalSecondaryIndexesKeySchemaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.get"></a>

```java
public DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DynamodbTableGlobalSecondaryIndexesKeySchema> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>>

---


### DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference <a name="DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference;

new DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resetAttributeName">resetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resetKeyType">resetKeyType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resetAttributeName"></a>

```java
public void resetAttributeName()
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resetKeyType"></a>

```java
public void resetKeyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyTypeInput">keyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeNameInput"></a>

```java
public java.lang.String getAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyTypeInput"></a>

```java
public java.lang.String getKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableGlobalSecondaryIndexesKeySchema getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>

---


### DynamodbTableGlobalSecondaryIndexesList <a name="DynamodbTableGlobalSecondaryIndexesList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableGlobalSecondaryIndexesList;

new DynamodbTableGlobalSecondaryIndexesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.get"></a>

```java
public DynamodbTableGlobalSecondaryIndexesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DynamodbTableGlobalSecondaryIndexes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>>

---


### DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference <a name="DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference;

new DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resetMaxReadRequestUnits">resetMaxReadRequestUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resetMaxWriteRequestUnits">resetMaxWriteRequestUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxReadRequestUnits` <a name="resetMaxReadRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resetMaxReadRequestUnits"></a>

```java
public void resetMaxReadRequestUnits()
```

##### `resetMaxWriteRequestUnits` <a name="resetMaxWriteRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resetMaxWriteRequestUnits"></a>

```java
public void resetMaxWriteRequestUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput">maxReadRequestUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput">maxWriteRequestUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxReadRequestUnits">maxReadRequestUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxWriteRequestUnits">maxWriteRequestUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxReadRequestUnitsInput`<sup>Optional</sup> <a name="maxReadRequestUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput"></a>

```java
public java.lang.Number getMaxReadRequestUnitsInput();
```

- *Type:* java.lang.Number

---

##### `maxWriteRequestUnitsInput`<sup>Optional</sup> <a name="maxWriteRequestUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput"></a>

```java
public java.lang.Number getMaxWriteRequestUnitsInput();
```

- *Type:* java.lang.Number

---

##### `maxReadRequestUnits`<sup>Required</sup> <a name="maxReadRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxReadRequestUnits"></a>

```java
public java.lang.Number getMaxReadRequestUnits();
```

- *Type:* java.lang.Number

---

##### `maxWriteRequestUnits`<sup>Required</sup> <a name="maxWriteRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxWriteRequestUnits"></a>

```java
public java.lang.Number getMaxWriteRequestUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableGlobalSecondaryIndexesOnDemandThroughput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a>

---


### DynamodbTableGlobalSecondaryIndexesOutputReference <a name="DynamodbTableGlobalSecondaryIndexesOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableGlobalSecondaryIndexesOutputReference;

new DynamodbTableGlobalSecondaryIndexesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putContributorInsightsSpecification">putContributorInsightsSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putKeySchema">putKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putOnDemandThroughput">putOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProjection">putProjection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProvisionedThroughput">putProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putWarmThroughput">putWarmThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetContributorInsightsSpecification">resetContributorInsightsSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetIndexName">resetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetKeySchema">resetKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetOnDemandThroughput">resetOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetProjection">resetProjection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetProvisionedThroughput">resetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetWarmThroughput">resetWarmThroughput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContributorInsightsSpecification` <a name="putContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putContributorInsightsSpecification"></a>

```java
public void putContributorInsightsSpecification(DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putContributorInsightsSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a>

---

##### `putKeySchema` <a name="putKeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putKeySchema"></a>

```java
public void putKeySchema(IResolvable|java.util.List<DynamodbTableGlobalSecondaryIndexesKeySchema> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putKeySchema.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>>

---

##### `putOnDemandThroughput` <a name="putOnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putOnDemandThroughput"></a>

```java
public void putOnDemandThroughput(DynamodbTableGlobalSecondaryIndexesOnDemandThroughput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putOnDemandThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a>

---

##### `putProjection` <a name="putProjection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProjection"></a>

```java
public void putProjection(DynamodbTableGlobalSecondaryIndexesProjection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProjection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a>

---

##### `putProvisionedThroughput` <a name="putProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProvisionedThroughput"></a>

```java
public void putProvisionedThroughput(DynamodbTableGlobalSecondaryIndexesProvisionedThroughput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProvisionedThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a>

---

##### `putWarmThroughput` <a name="putWarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putWarmThroughput"></a>

```java
public void putWarmThroughput(DynamodbTableGlobalSecondaryIndexesWarmThroughput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putWarmThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a>

---

##### `resetContributorInsightsSpecification` <a name="resetContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetContributorInsightsSpecification"></a>

```java
public void resetContributorInsightsSpecification()
```

##### `resetIndexName` <a name="resetIndexName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetIndexName"></a>

```java
public void resetIndexName()
```

##### `resetKeySchema` <a name="resetKeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetKeySchema"></a>

```java
public void resetKeySchema()
```

##### `resetOnDemandThroughput` <a name="resetOnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetOnDemandThroughput"></a>

```java
public void resetOnDemandThroughput()
```

##### `resetProjection` <a name="resetProjection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetProjection"></a>

```java
public void resetProjection()
```

##### `resetProvisionedThroughput` <a name="resetProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetProvisionedThroughput"></a>

```java
public void resetProvisionedThroughput()
```

##### `resetWarmThroughput` <a name="resetWarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetWarmThroughput"></a>

```java
public void resetWarmThroughput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecification">contributorInsightsSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.keySchema">keySchema</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList">DynamodbTableGlobalSecondaryIndexesKeySchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.onDemandThroughput">onDemandThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.projection">projection</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference">DynamodbTableGlobalSecondaryIndexesProjectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.provisionedThroughput">provisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.warmThroughput">warmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecificationInput">contributorInsightsSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.indexNameInput">indexNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.keySchemaInput">keySchemaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.onDemandThroughputInput">onDemandThroughputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.projectionInput">projectionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.provisionedThroughputInput">provisionedThroughputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.warmThroughputInput">warmThroughputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.indexName">indexName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contributorInsightsSpecification`<sup>Required</sup> <a name="contributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecification"></a>

```java
public DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference getContributorInsightsSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference</a>

---

##### `keySchema`<sup>Required</sup> <a name="keySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.keySchema"></a>

```java
public DynamodbTableGlobalSecondaryIndexesKeySchemaList getKeySchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList">DynamodbTableGlobalSecondaryIndexesKeySchemaList</a>

---

##### `onDemandThroughput`<sup>Required</sup> <a name="onDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.onDemandThroughput"></a>

```java
public DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference getOnDemandThroughput();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference</a>

---

##### `projection`<sup>Required</sup> <a name="projection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.projection"></a>

```java
public DynamodbTableGlobalSecondaryIndexesProjectionOutputReference getProjection();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference">DynamodbTableGlobalSecondaryIndexesProjectionOutputReference</a>

---

##### `provisionedThroughput`<sup>Required</sup> <a name="provisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.provisionedThroughput"></a>

```java
public DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference getProvisionedThroughput();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference</a>

---

##### `warmThroughput`<sup>Required</sup> <a name="warmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.warmThroughput"></a>

```java
public DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference getWarmThroughput();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference</a>

---

##### `contributorInsightsSpecificationInput`<sup>Optional</sup> <a name="contributorInsightsSpecificationInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecificationInput"></a>

```java
public IResolvable|DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification getContributorInsightsSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a>

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.indexNameInput"></a>

```java
public java.lang.String getIndexNameInput();
```

- *Type:* java.lang.String

---

##### `keySchemaInput`<sup>Optional</sup> <a name="keySchemaInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.keySchemaInput"></a>

```java
public IResolvable|java.util.List<DynamodbTableGlobalSecondaryIndexesKeySchema> getKeySchemaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>>

---

##### `onDemandThroughputInput`<sup>Optional</sup> <a name="onDemandThroughputInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.onDemandThroughputInput"></a>

```java
public IResolvable|DynamodbTableGlobalSecondaryIndexesOnDemandThroughput getOnDemandThroughputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a>

---

##### `projectionInput`<sup>Optional</sup> <a name="projectionInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.projectionInput"></a>

```java
public IResolvable|DynamodbTableGlobalSecondaryIndexesProjection getProjectionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a>

---

##### `provisionedThroughputInput`<sup>Optional</sup> <a name="provisionedThroughputInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.provisionedThroughputInput"></a>

```java
public IResolvable|DynamodbTableGlobalSecondaryIndexesProvisionedThroughput getProvisionedThroughputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a>

---

##### `warmThroughputInput`<sup>Optional</sup> <a name="warmThroughputInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.warmThroughputInput"></a>

```java
public IResolvable|DynamodbTableGlobalSecondaryIndexesWarmThroughput getWarmThroughputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a>

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.indexName"></a>

```java
public java.lang.String getIndexName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableGlobalSecondaryIndexes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>

---


### DynamodbTableGlobalSecondaryIndexesProjectionOutputReference <a name="DynamodbTableGlobalSecondaryIndexesProjectionOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference;

new DynamodbTableGlobalSecondaryIndexesProjectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resetNonKeyAttributes">resetNonKeyAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resetProjectionType">resetProjectionType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNonKeyAttributes` <a name="resetNonKeyAttributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resetNonKeyAttributes"></a>

```java
public void resetNonKeyAttributes()
```

##### `resetProjectionType` <a name="resetProjectionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resetProjectionType"></a>

```java
public void resetProjectionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributesInput">nonKeyAttributesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionTypeInput">projectionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes">nonKeyAttributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionType">projectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nonKeyAttributesInput`<sup>Optional</sup> <a name="nonKeyAttributesInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributesInput"></a>

```java
public java.util.List<java.lang.String> getNonKeyAttributesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectionTypeInput`<sup>Optional</sup> <a name="projectionTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionTypeInput"></a>

```java
public java.lang.String getProjectionTypeInput();
```

- *Type:* java.lang.String

---

##### `nonKeyAttributes`<sup>Required</sup> <a name="nonKeyAttributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes"></a>

```java
public java.util.List<java.lang.String> getNonKeyAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectionType`<sup>Required</sup> <a name="projectionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionType"></a>

```java
public java.lang.String getProjectionType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableGlobalSecondaryIndexesProjection getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a>

---


### DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference <a name="DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference;

new DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resetReadCapacityUnits">resetReadCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resetWriteCapacityUnits">resetWriteCapacityUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadCapacityUnits` <a name="resetReadCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resetReadCapacityUnits"></a>

```java
public void resetReadCapacityUnits()
```

##### `resetWriteCapacityUnits` <a name="resetWriteCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resetWriteCapacityUnits"></a>

```java
public void resetWriteCapacityUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.readCapacityUnitsInput">readCapacityUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.writeCapacityUnitsInput">writeCapacityUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.readCapacityUnits">readCapacityUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.writeCapacityUnits">writeCapacityUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readCapacityUnitsInput`<sup>Optional</sup> <a name="readCapacityUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.readCapacityUnitsInput"></a>

```java
public java.lang.Number getReadCapacityUnitsInput();
```

- *Type:* java.lang.Number

---

##### `writeCapacityUnitsInput`<sup>Optional</sup> <a name="writeCapacityUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.writeCapacityUnitsInput"></a>

```java
public java.lang.Number getWriteCapacityUnitsInput();
```

- *Type:* java.lang.Number

---

##### `readCapacityUnits`<sup>Required</sup> <a name="readCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.readCapacityUnits"></a>

```java
public java.lang.Number getReadCapacityUnits();
```

- *Type:* java.lang.Number

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="writeCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.writeCapacityUnits"></a>

```java
public java.lang.Number getWriteCapacityUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableGlobalSecondaryIndexesProvisionedThroughput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a>

---


### DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference <a name="DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference;

new DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resetReadUnitsPerSecond">resetReadUnitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resetWriteUnitsPerSecond">resetWriteUnitsPerSecond</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadUnitsPerSecond` <a name="resetReadUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resetReadUnitsPerSecond"></a>

```java
public void resetReadUnitsPerSecond()
```

##### `resetWriteUnitsPerSecond` <a name="resetWriteUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resetWriteUnitsPerSecond"></a>

```java
public void resetWriteUnitsPerSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecondInput">readUnitsPerSecondInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecondInput">writeUnitsPerSecondInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecond">readUnitsPerSecond</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecond">writeUnitsPerSecond</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readUnitsPerSecondInput`<sup>Optional</sup> <a name="readUnitsPerSecondInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecondInput"></a>

```java
public java.lang.Number getReadUnitsPerSecondInput();
```

- *Type:* java.lang.Number

---

##### `writeUnitsPerSecondInput`<sup>Optional</sup> <a name="writeUnitsPerSecondInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecondInput"></a>

```java
public java.lang.Number getWriteUnitsPerSecondInput();
```

- *Type:* java.lang.Number

---

##### `readUnitsPerSecond`<sup>Required</sup> <a name="readUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecond"></a>

```java
public java.lang.Number getReadUnitsPerSecond();
```

- *Type:* java.lang.Number

---

##### `writeUnitsPerSecond`<sup>Required</sup> <a name="writeUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecond"></a>

```java
public java.lang.Number getWriteUnitsPerSecond();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableGlobalSecondaryIndexesWarmThroughput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a>

---


### DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference <a name="DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference;

new DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resetHeaderList">resetHeaderList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resetDelimiter"></a>

```java
public void resetDelimiter()
```

##### `resetHeaderList` <a name="resetHeaderList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resetHeaderList"></a>

```java
public void resetHeaderList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.headerListInput">headerListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.headerList">headerList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.delimiterInput"></a>

```java
public java.lang.String getDelimiterInput();
```

- *Type:* java.lang.String

---

##### `headerListInput`<sup>Optional</sup> <a name="headerListInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.headerListInput"></a>

```java
public java.util.List<java.lang.String> getHeaderListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

---

##### `headerList`<sup>Required</sup> <a name="headerList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.headerList"></a>

```java
public java.util.List<java.lang.String> getHeaderList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableImportSourceSpecificationInputFormatOptionsCsv getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a>

---


### DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference <a name="DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference;

new DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.putCsv">putCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resetCsv">resetCsv</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCsv` <a name="putCsv" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.putCsv"></a>

```java
public void putCsv(DynamodbTableImportSourceSpecificationInputFormatOptionsCsv value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a>

---

##### `resetCsv` <a name="resetCsv" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resetCsv"></a>

```java
public void resetCsv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference">DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.csvInput">csvInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.csv"></a>

```java
public DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference getCsv();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference">DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference</a>

---

##### `csvInput`<sup>Optional</sup> <a name="csvInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.csvInput"></a>

```java
public IResolvable|DynamodbTableImportSourceSpecificationInputFormatOptionsCsv getCsvInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableImportSourceSpecificationInputFormatOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a>

---


### DynamodbTableImportSourceSpecificationOutputReference <a name="DynamodbTableImportSourceSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableImportSourceSpecificationOutputReference;

new DynamodbTableImportSourceSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putInputFormatOptions">putInputFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putS3BucketSource">putS3BucketSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputCompressionType">resetInputCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputFormat">resetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputFormatOptions">resetInputFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetS3BucketSource">resetS3BucketSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputFormatOptions` <a name="putInputFormatOptions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putInputFormatOptions"></a>

```java
public void putInputFormatOptions(DynamodbTableImportSourceSpecificationInputFormatOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putInputFormatOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a>

---

##### `putS3BucketSource` <a name="putS3BucketSource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putS3BucketSource"></a>

```java
public void putS3BucketSource(DynamodbTableImportSourceSpecificationS3BucketSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putS3BucketSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a>

---

##### `resetInputCompressionType` <a name="resetInputCompressionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputCompressionType"></a>

```java
public void resetInputCompressionType()
```

##### `resetInputFormat` <a name="resetInputFormat" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputFormat"></a>

```java
public void resetInputFormat()
```

##### `resetInputFormatOptions` <a name="resetInputFormatOptions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputFormatOptions"></a>

```java
public void resetInputFormatOptions()
```

##### `resetS3BucketSource` <a name="resetS3BucketSource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetS3BucketSource"></a>

```java
public void resetS3BucketSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatOptions">inputFormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference">DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.s3BucketSource">s3BucketSource</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference">DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputCompressionTypeInput">inputCompressionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatInput">inputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatOptionsInput">inputFormatOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.s3BucketSourceInput">s3BucketSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputCompressionType">inputCompressionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormat">inputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputFormatOptions`<sup>Required</sup> <a name="inputFormatOptions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatOptions"></a>

```java
public DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference getInputFormatOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference">DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference</a>

---

##### `s3BucketSource`<sup>Required</sup> <a name="s3BucketSource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.s3BucketSource"></a>

```java
public DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference getS3BucketSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference">DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference</a>

---

##### `inputCompressionTypeInput`<sup>Optional</sup> <a name="inputCompressionTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputCompressionTypeInput"></a>

```java
public java.lang.String getInputCompressionTypeInput();
```

- *Type:* java.lang.String

---

##### `inputFormatInput`<sup>Optional</sup> <a name="inputFormatInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatInput"></a>

```java
public java.lang.String getInputFormatInput();
```

- *Type:* java.lang.String

---

##### `inputFormatOptionsInput`<sup>Optional</sup> <a name="inputFormatOptionsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatOptionsInput"></a>

```java
public IResolvable|DynamodbTableImportSourceSpecificationInputFormatOptions getInputFormatOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a>

---

##### `s3BucketSourceInput`<sup>Optional</sup> <a name="s3BucketSourceInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.s3BucketSourceInput"></a>

```java
public IResolvable|DynamodbTableImportSourceSpecificationS3BucketSource getS3BucketSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a>

---

##### `inputCompressionType`<sup>Required</sup> <a name="inputCompressionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputCompressionType"></a>

```java
public java.lang.String getInputCompressionType();
```

- *Type:* java.lang.String

---

##### `inputFormat`<sup>Required</sup> <a name="inputFormat" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormat"></a>

```java
public java.lang.String getInputFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableImportSourceSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a>

---


### DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference <a name="DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference;

new DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3BucketOwner">resetS3BucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3KeyPrefix">resetS3KeyPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3Bucket"></a>

```java
public void resetS3Bucket()
```

##### `resetS3BucketOwner` <a name="resetS3BucketOwner" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3BucketOwner"></a>

```java
public void resetS3BucketOwner()
```

##### `resetS3KeyPrefix` <a name="resetS3KeyPrefix" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3KeyPrefix"></a>

```java
public void resetS3KeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketOwnerInput">s3BucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3KeyPrefixInput">s3KeyPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketOwner">s3BucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketInput"></a>

```java
public java.lang.String getS3BucketInput();
```

- *Type:* java.lang.String

---

##### `s3BucketOwnerInput`<sup>Optional</sup> <a name="s3BucketOwnerInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketOwnerInput"></a>

```java
public java.lang.String getS3BucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `s3KeyPrefixInput`<sup>Optional</sup> <a name="s3KeyPrefixInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3KeyPrefixInput"></a>

```java
public java.lang.String getS3KeyPrefixInput();
```

- *Type:* java.lang.String

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

---

##### `s3BucketOwner`<sup>Required</sup> <a name="s3BucketOwner" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketOwner"></a>

```java
public java.lang.String getS3BucketOwner();
```

- *Type:* java.lang.String

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3KeyPrefix"></a>

```java
public java.lang.String getS3KeyPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableImportSourceSpecificationS3BucketSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a>

---


### DynamodbTableKinesisStreamSpecificationOutputReference <a name="DynamodbTableKinesisStreamSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableKinesisStreamSpecificationOutputReference;

new DynamodbTableKinesisStreamSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resetApproximateCreationDateTimePrecision">resetApproximateCreationDateTimePrecision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resetStreamArn">resetStreamArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApproximateCreationDateTimePrecision` <a name="resetApproximateCreationDateTimePrecision" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resetApproximateCreationDateTimePrecision"></a>

```java
public void resetApproximateCreationDateTimePrecision()
```

##### `resetStreamArn` <a name="resetStreamArn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resetStreamArn"></a>

```java
public void resetStreamArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecisionInput">approximateCreationDateTimePrecisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecision">approximateCreationDateTimePrecision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `approximateCreationDateTimePrecisionInput`<sup>Optional</sup> <a name="approximateCreationDateTimePrecisionInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecisionInput"></a>

```java
public java.lang.String getApproximateCreationDateTimePrecisionInput();
```

- *Type:* java.lang.String

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.streamArnInput"></a>

```java
public java.lang.String getStreamArnInput();
```

- *Type:* java.lang.String

---

##### `approximateCreationDateTimePrecision`<sup>Required</sup> <a name="approximateCreationDateTimePrecision" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecision"></a>

```java
public java.lang.String getApproximateCreationDateTimePrecision();
```

- *Type:* java.lang.String

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableKinesisStreamSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a>

---


### DynamodbTableLocalSecondaryIndexesKeySchemaList <a name="DynamodbTableLocalSecondaryIndexesKeySchemaList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableLocalSecondaryIndexesKeySchemaList;

new DynamodbTableLocalSecondaryIndexesKeySchemaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.get"></a>

```java
public DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DynamodbTableLocalSecondaryIndexesKeySchema> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>>

---


### DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference <a name="DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference;

new DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resetAttributeName">resetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resetKeyType">resetKeyType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resetAttributeName"></a>

```java
public void resetAttributeName()
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resetKeyType"></a>

```java
public void resetKeyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyTypeInput">keyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeNameInput"></a>

```java
public java.lang.String getAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyTypeInput"></a>

```java
public java.lang.String getKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableLocalSecondaryIndexesKeySchema getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>

---


### DynamodbTableLocalSecondaryIndexesList <a name="DynamodbTableLocalSecondaryIndexesList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableLocalSecondaryIndexesList;

new DynamodbTableLocalSecondaryIndexesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.get"></a>

```java
public DynamodbTableLocalSecondaryIndexesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DynamodbTableLocalSecondaryIndexes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>>

---


### DynamodbTableLocalSecondaryIndexesOutputReference <a name="DynamodbTableLocalSecondaryIndexesOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableLocalSecondaryIndexesOutputReference;

new DynamodbTableLocalSecondaryIndexesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putKeySchema">putKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putProjection">putProjection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetIndexName">resetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetKeySchema">resetKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetProjection">resetProjection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKeySchema` <a name="putKeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putKeySchema"></a>

```java
public void putKeySchema(IResolvable|java.util.List<DynamodbTableLocalSecondaryIndexesKeySchema> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putKeySchema.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>>

---

##### `putProjection` <a name="putProjection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putProjection"></a>

```java
public void putProjection(DynamodbTableLocalSecondaryIndexesProjection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putProjection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a>

---

##### `resetIndexName` <a name="resetIndexName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetIndexName"></a>

```java
public void resetIndexName()
```

##### `resetKeySchema` <a name="resetKeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetKeySchema"></a>

```java
public void resetKeySchema()
```

##### `resetProjection` <a name="resetProjection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetProjection"></a>

```java
public void resetProjection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.keySchema">keySchema</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList">DynamodbTableLocalSecondaryIndexesKeySchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.projection">projection</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference">DynamodbTableLocalSecondaryIndexesProjectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.indexNameInput">indexNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.keySchemaInput">keySchemaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.projectionInput">projectionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.indexName">indexName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keySchema`<sup>Required</sup> <a name="keySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.keySchema"></a>

```java
public DynamodbTableLocalSecondaryIndexesKeySchemaList getKeySchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList">DynamodbTableLocalSecondaryIndexesKeySchemaList</a>

---

##### `projection`<sup>Required</sup> <a name="projection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.projection"></a>

```java
public DynamodbTableLocalSecondaryIndexesProjectionOutputReference getProjection();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference">DynamodbTableLocalSecondaryIndexesProjectionOutputReference</a>

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.indexNameInput"></a>

```java
public java.lang.String getIndexNameInput();
```

- *Type:* java.lang.String

---

##### `keySchemaInput`<sup>Optional</sup> <a name="keySchemaInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.keySchemaInput"></a>

```java
public IResolvable|java.util.List<DynamodbTableLocalSecondaryIndexesKeySchema> getKeySchemaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>>

---

##### `projectionInput`<sup>Optional</sup> <a name="projectionInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.projectionInput"></a>

```java
public IResolvable|DynamodbTableLocalSecondaryIndexesProjection getProjectionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a>

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.indexName"></a>

```java
public java.lang.String getIndexName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableLocalSecondaryIndexes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>

---


### DynamodbTableLocalSecondaryIndexesProjectionOutputReference <a name="DynamodbTableLocalSecondaryIndexesProjectionOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableLocalSecondaryIndexesProjectionOutputReference;

new DynamodbTableLocalSecondaryIndexesProjectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resetNonKeyAttributes">resetNonKeyAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resetProjectionType">resetProjectionType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNonKeyAttributes` <a name="resetNonKeyAttributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resetNonKeyAttributes"></a>

```java
public void resetNonKeyAttributes()
```

##### `resetProjectionType` <a name="resetProjectionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resetProjectionType"></a>

```java
public void resetProjectionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributesInput">nonKeyAttributesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.projectionTypeInput">projectionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes">nonKeyAttributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.projectionType">projectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nonKeyAttributesInput`<sup>Optional</sup> <a name="nonKeyAttributesInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributesInput"></a>

```java
public java.util.List<java.lang.String> getNonKeyAttributesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectionTypeInput`<sup>Optional</sup> <a name="projectionTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.projectionTypeInput"></a>

```java
public java.lang.String getProjectionTypeInput();
```

- *Type:* java.lang.String

---

##### `nonKeyAttributes`<sup>Required</sup> <a name="nonKeyAttributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes"></a>

```java
public java.util.List<java.lang.String> getNonKeyAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectionType`<sup>Required</sup> <a name="projectionType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.projectionType"></a>

```java
public java.lang.String getProjectionType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableLocalSecondaryIndexesProjection getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a>

---


### DynamodbTableOnDemandThroughputOutputReference <a name="DynamodbTableOnDemandThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableOnDemandThroughputOutputReference;

new DynamodbTableOnDemandThroughputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxReadRequestUnits">resetMaxReadRequestUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxWriteRequestUnits">resetMaxWriteRequestUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxReadRequestUnits` <a name="resetMaxReadRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxReadRequestUnits"></a>

```java
public void resetMaxReadRequestUnits()
```

##### `resetMaxWriteRequestUnits` <a name="resetMaxWriteRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxWriteRequestUnits"></a>

```java
public void resetMaxWriteRequestUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput">maxReadRequestUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput">maxWriteRequestUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnits">maxReadRequestUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnits">maxWriteRequestUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxReadRequestUnitsInput`<sup>Optional</sup> <a name="maxReadRequestUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput"></a>

```java
public java.lang.Number getMaxReadRequestUnitsInput();
```

- *Type:* java.lang.Number

---

##### `maxWriteRequestUnitsInput`<sup>Optional</sup> <a name="maxWriteRequestUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput"></a>

```java
public java.lang.Number getMaxWriteRequestUnitsInput();
```

- *Type:* java.lang.Number

---

##### `maxReadRequestUnits`<sup>Required</sup> <a name="maxReadRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnits"></a>

```java
public java.lang.Number getMaxReadRequestUnits();
```

- *Type:* java.lang.Number

---

##### `maxWriteRequestUnits`<sup>Required</sup> <a name="maxWriteRequestUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnits"></a>

```java
public java.lang.Number getMaxWriteRequestUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableOnDemandThroughput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

---


### DynamodbTablePointInTimeRecoverySpecificationOutputReference <a name="DynamodbTablePointInTimeRecoverySpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTablePointInTimeRecoverySpecificationOutputReference;

new DynamodbTablePointInTimeRecoverySpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resetPointInTimeRecoveryEnabled">resetPointInTimeRecoveryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resetRecoveryPeriodInDays">resetRecoveryPeriodInDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPointInTimeRecoveryEnabled` <a name="resetPointInTimeRecoveryEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resetPointInTimeRecoveryEnabled"></a>

```java
public void resetPointInTimeRecoveryEnabled()
```

##### `resetRecoveryPeriodInDays` <a name="resetRecoveryPeriodInDays" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resetRecoveryPeriodInDays"></a>

```java
public void resetRecoveryPeriodInDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabledInput">pointInTimeRecoveryEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDaysInput">recoveryPeriodInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabled">pointInTimeRecoveryEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDays">recoveryPeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pointInTimeRecoveryEnabledInput`<sup>Optional</sup> <a name="pointInTimeRecoveryEnabledInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPointInTimeRecoveryEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `recoveryPeriodInDaysInput`<sup>Optional</sup> <a name="recoveryPeriodInDaysInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDaysInput"></a>

```java
public java.lang.Number getRecoveryPeriodInDaysInput();
```

- *Type:* java.lang.Number

---

##### `pointInTimeRecoveryEnabled`<sup>Required</sup> <a name="pointInTimeRecoveryEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPointInTimeRecoveryEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `recoveryPeriodInDays`<sup>Required</sup> <a name="recoveryPeriodInDays" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDays"></a>

```java
public java.lang.Number getRecoveryPeriodInDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTablePointInTimeRecoverySpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a>

---


### DynamodbTableProvisionedThroughputOutputReference <a name="DynamodbTableProvisionedThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableProvisionedThroughputOutputReference;

new DynamodbTableProvisionedThroughputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resetReadCapacityUnits">resetReadCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resetWriteCapacityUnits">resetWriteCapacityUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadCapacityUnits` <a name="resetReadCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resetReadCapacityUnits"></a>

```java
public void resetReadCapacityUnits()
```

##### `resetWriteCapacityUnits` <a name="resetWriteCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resetWriteCapacityUnits"></a>

```java
public void resetWriteCapacityUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.readCapacityUnitsInput">readCapacityUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.writeCapacityUnitsInput">writeCapacityUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.readCapacityUnits">readCapacityUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.writeCapacityUnits">writeCapacityUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readCapacityUnitsInput`<sup>Optional</sup> <a name="readCapacityUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.readCapacityUnitsInput"></a>

```java
public java.lang.Number getReadCapacityUnitsInput();
```

- *Type:* java.lang.Number

---

##### `writeCapacityUnitsInput`<sup>Optional</sup> <a name="writeCapacityUnitsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.writeCapacityUnitsInput"></a>

```java
public java.lang.Number getWriteCapacityUnitsInput();
```

- *Type:* java.lang.Number

---

##### `readCapacityUnits`<sup>Required</sup> <a name="readCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.readCapacityUnits"></a>

```java
public java.lang.Number getReadCapacityUnits();
```

- *Type:* java.lang.Number

---

##### `writeCapacityUnits`<sup>Required</sup> <a name="writeCapacityUnits" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.writeCapacityUnits"></a>

```java
public java.lang.Number getWriteCapacityUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableProvisionedThroughput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a>

---


### DynamodbTableResourcePolicyOutputReference <a name="DynamodbTableResourcePolicyOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableResourcePolicyOutputReference;

new DynamodbTableResourcePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.resetPolicyDocument">resetPolicyDocument</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicyDocument` <a name="resetPolicyDocument" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.resetPolicyDocument"></a>

```java
public void resetPolicyDocument()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.policyDocumentInput">policyDocumentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.policyDocumentInput"></a>

```java
public java.lang.String getPolicyDocumentInput();
```

- *Type:* java.lang.String

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.policyDocument"></a>

```java
public java.lang.String getPolicyDocument();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableResourcePolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a>

---


### DynamodbTableSseSpecificationOutputReference <a name="DynamodbTableSseSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableSseSpecificationOutputReference;

new DynamodbTableSseSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetKmsMasterKeyId">resetKmsMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetSseEnabled">resetSseEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetSseType">resetSseType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsMasterKeyId` <a name="resetKmsMasterKeyId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetKmsMasterKeyId"></a>

```java
public void resetKmsMasterKeyId()
```

##### `resetSseEnabled` <a name="resetSseEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetSseEnabled"></a>

```java
public void resetSseEnabled()
```

##### `resetSseType` <a name="resetSseType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetSseType"></a>

```java
public void resetSseType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.kmsMasterKeyIdInput">kmsMasterKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseEnabledInput">sseEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseTypeInput">sseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseEnabled">sseEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseType">sseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsMasterKeyIdInput`<sup>Optional</sup> <a name="kmsMasterKeyIdInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.kmsMasterKeyIdInput"></a>

```java
public java.lang.String getKmsMasterKeyIdInput();
```

- *Type:* java.lang.String

---

##### `sseEnabledInput`<sup>Optional</sup> <a name="sseEnabledInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSseEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sseTypeInput`<sup>Optional</sup> <a name="sseTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseTypeInput"></a>

```java
public java.lang.String getSseTypeInput();
```

- *Type:* java.lang.String

---

##### `kmsMasterKeyId`<sup>Required</sup> <a name="kmsMasterKeyId" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.kmsMasterKeyId"></a>

```java
public java.lang.String getKmsMasterKeyId();
```

- *Type:* java.lang.String

---

##### `sseEnabled`<sup>Required</sup> <a name="sseEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSseEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sseType`<sup>Required</sup> <a name="sseType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseType"></a>

```java
public java.lang.String getSseType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableSseSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a>

---


### DynamodbTableStreamSpecificationOutputReference <a name="DynamodbTableStreamSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableStreamSpecificationOutputReference;

new DynamodbTableStreamSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.putResourcePolicy">putResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resetResourcePolicy">resetResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resetStreamViewType">resetStreamViewType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourcePolicy` <a name="putResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.putResourcePolicy"></a>

```java
public void putResourcePolicy(DynamodbTableStreamSpecificationResourcePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.putResourcePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DynamodbTableStreamSpecificationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTags">DynamodbTableStreamSpecificationTags</a>>

---

##### `resetResourcePolicy` <a name="resetResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resetResourcePolicy"></a>

```java
public void resetResourcePolicy()
```

##### `resetStreamViewType` <a name="resetStreamViewType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resetStreamViewType"></a>

```java
public void resetStreamViewType()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.resourcePolicy">resourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference">DynamodbTableStreamSpecificationResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList">DynamodbTableStreamSpecificationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.resourcePolicyInput">resourcePolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.streamViewTypeInput">streamViewTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTags">DynamodbTableStreamSpecificationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.streamViewType">streamViewType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourcePolicy`<sup>Required</sup> <a name="resourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.resourcePolicy"></a>

```java
public DynamodbTableStreamSpecificationResourcePolicyOutputReference getResourcePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference">DynamodbTableStreamSpecificationResourcePolicyOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.tags"></a>

```java
public DynamodbTableStreamSpecificationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList">DynamodbTableStreamSpecificationTagsList</a>

---

##### `resourcePolicyInput`<sup>Optional</sup> <a name="resourcePolicyInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.resourcePolicyInput"></a>

```java
public IResolvable|DynamodbTableStreamSpecificationResourcePolicy getResourcePolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a>

---

##### `streamViewTypeInput`<sup>Optional</sup> <a name="streamViewTypeInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.streamViewTypeInput"></a>

```java
public java.lang.String getStreamViewTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DynamodbTableStreamSpecificationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTags">DynamodbTableStreamSpecificationTags</a>>

---

##### `streamViewType`<sup>Required</sup> <a name="streamViewType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.streamViewType"></a>

```java
public java.lang.String getStreamViewType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableStreamSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a>

---


### DynamodbTableStreamSpecificationResourcePolicyOutputReference <a name="DynamodbTableStreamSpecificationResourcePolicyOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableStreamSpecificationResourcePolicyOutputReference;

new DynamodbTableStreamSpecificationResourcePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.resetPolicyDocument">resetPolicyDocument</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicyDocument` <a name="resetPolicyDocument" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.resetPolicyDocument"></a>

```java
public void resetPolicyDocument()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.policyDocumentInput">policyDocumentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.policyDocumentInput"></a>

```java
public java.lang.String getPolicyDocumentInput();
```

- *Type:* java.lang.String

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.policyDocument"></a>

```java
public java.lang.String getPolicyDocument();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableStreamSpecificationResourcePolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a>

---


### DynamodbTableStreamSpecificationTagsList <a name="DynamodbTableStreamSpecificationTagsList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableStreamSpecificationTagsList;

new DynamodbTableStreamSpecificationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.get"></a>

```java
public DynamodbTableStreamSpecificationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTags">DynamodbTableStreamSpecificationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DynamodbTableStreamSpecificationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTags">DynamodbTableStreamSpecificationTags</a>>

---


### DynamodbTableStreamSpecificationTagsOutputReference <a name="DynamodbTableStreamSpecificationTagsOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableStreamSpecificationTagsOutputReference;

new DynamodbTableStreamSpecificationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTags">DynamodbTableStreamSpecificationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableStreamSpecificationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationTags">DynamodbTableStreamSpecificationTags</a>

---


### DynamodbTableTagsList <a name="DynamodbTableTagsList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableTagsList;

new DynamodbTableTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.get"></a>

```java
public DynamodbTableTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DynamodbTableTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>>

---


### DynamodbTableTagsOutputReference <a name="DynamodbTableTagsOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableTagsOutputReference;

new DynamodbTableTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>

---


### DynamodbTableTimeToLiveSpecificationOutputReference <a name="DynamodbTableTimeToLiveSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableTimeToLiveSpecificationOutputReference;

new DynamodbTableTimeToLiveSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resetAttributeName">resetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resetAttributeName"></a>

```java
public void resetAttributeName()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.attributeNameInput"></a>

```java
public java.lang.String getAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableTimeToLiveSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a>

---


### DynamodbTableWarmThroughputOutputReference <a name="DynamodbTableWarmThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dynamodb_table.DynamodbTableWarmThroughputOutputReference;

new DynamodbTableWarmThroughputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resetReadUnitsPerSecond">resetReadUnitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resetWriteUnitsPerSecond">resetWriteUnitsPerSecond</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadUnitsPerSecond` <a name="resetReadUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resetReadUnitsPerSecond"></a>

```java
public void resetReadUnitsPerSecond()
```

##### `resetWriteUnitsPerSecond` <a name="resetWriteUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resetWriteUnitsPerSecond"></a>

```java
public void resetWriteUnitsPerSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.readUnitsPerSecondInput">readUnitsPerSecondInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.writeUnitsPerSecondInput">writeUnitsPerSecondInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.readUnitsPerSecond">readUnitsPerSecond</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.writeUnitsPerSecond">writeUnitsPerSecond</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readUnitsPerSecondInput`<sup>Optional</sup> <a name="readUnitsPerSecondInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.readUnitsPerSecondInput"></a>

```java
public java.lang.Number getReadUnitsPerSecondInput();
```

- *Type:* java.lang.Number

---

##### `writeUnitsPerSecondInput`<sup>Optional</sup> <a name="writeUnitsPerSecondInput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.writeUnitsPerSecondInput"></a>

```java
public java.lang.Number getWriteUnitsPerSecondInput();
```

- *Type:* java.lang.Number

---

##### `readUnitsPerSecond`<sup>Required</sup> <a name="readUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.readUnitsPerSecond"></a>

```java
public java.lang.Number getReadUnitsPerSecond();
```

- *Type:* java.lang.Number

---

##### `writeUnitsPerSecond`<sup>Required</sup> <a name="writeUnitsPerSecond" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.writeUnitsPerSecond"></a>

```java
public java.lang.Number getWriteUnitsPerSecond();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.internalValue"></a>

```java
public IResolvable|DynamodbTableWarmThroughput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a>

---



