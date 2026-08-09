# `dynamodbTable` Submodule <a name="`dynamodbTable` Submodule" id="@cdktn/provider-awscc.dynamodbTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamodbTable <a name="DynamodbTable" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table awscc_dynamodb_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTable(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key_schema: str,
  attribute_definitions: IResolvable | typing.List[DynamodbTableAttributeDefinitions] = None,
  billing_mode: str = None,
  contributor_insights_specification: DynamodbTableContributorInsightsSpecification = None,
  deletion_protection_enabled: bool | IResolvable = None,
  global_secondary_indexes: IResolvable | typing.List[DynamodbTableGlobalSecondaryIndexes] = None,
  import_source_specification: DynamodbTableImportSourceSpecification = None,
  kinesis_stream_specification: DynamodbTableKinesisStreamSpecification = None,
  local_secondary_indexes: IResolvable | typing.List[DynamodbTableLocalSecondaryIndexes] = None,
  on_demand_throughput: DynamodbTableOnDemandThroughput = None,
  point_in_time_recovery_specification: DynamodbTablePointInTimeRecoverySpecification = None,
  provisioned_throughput: DynamodbTableProvisionedThroughput = None,
  resource_policy: DynamodbTableResourcePolicy = None,
  sse_specification: DynamodbTableSseSpecification = None,
  stream_specification: DynamodbTableStreamSpecification = None,
  table_class: str = None,
  table_name: str = None,
  tags: IResolvable | typing.List[DynamodbTableTags] = None,
  time_to_live_specification: DynamodbTableTimeToLiveSpecification = None,
  warm_throughput: DynamodbTableWarmThroughput = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.keySchema">key_schema</a></code> | <code>str</code> | Specifies the attributes that make up the primary key for the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.attributeDefinitions">attribute_definitions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>]</code> | A list of attributes that describe the key schema for the table and indexes. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.billingMode">billing_mode</a></code> | <code>str</code> | Specify how you are charged for read and write throughput and how you manage capacity. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.contributorInsightsSpecification">contributor_insights_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a></code> | The settings used to specify whether to enable CloudWatch Contributor Insights for the table and define which events to monitor. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Determines if a table is protected from deletion. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.globalSecondaryIndexes">global_secondary_indexes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>]</code> | Global secondary indexes to be created on the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.importSourceSpecification">import_source_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a></code> | Specifies the properties of data being imported from the S3 bucket source to the" table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.kinesisStreamSpecification">kinesis_stream_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a></code> | The Kinesis Data Streams configuration for the specified table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.localSecondaryIndexes">local_secondary_indexes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>]</code> | Local secondary indexes to be created on the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.onDemandThroughput">on_demand_throughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a></code> | Sets the maximum number of read and write units for the specified on-demand table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.pointInTimeRecoverySpecification">point_in_time_recovery_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a></code> | The settings used to enable point in time recovery. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.provisionedThroughput">provisioned_throughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a></code> | Throughput for the specified table, which consists of values for ``ReadCapacityUnits`` and ``WriteCapacityUnits``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.resourcePolicy">resource_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a></code> | An AWS resource-based policy document in JSON format that will be attached to the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.sseSpecification">sse_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a></code> | Specifies the settings to enable server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.streamSpecification">stream_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a></code> | The settings for the DDB table stream, which captures changes to items stored in the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.tableClass">table_class</a></code> | <code>str</code> | The table class of the new table. Valid values are ``STANDARD`` and ``STANDARD_INFREQUENT_ACCESS``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.tableName">table_name</a></code> | <code>str</code> | A name for the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>]</code> | An array of key-value pairs to apply to this resource.  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html). |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.timeToLiveSpecification">time_to_live_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a></code> | Specifies the Time to Live (TTL) settings for the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.warmThroughput">warm_throughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a></code> | Represents the warm throughput (in read units per second and write units per second) for creating a table. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `key_schema`<sup>Required</sup> <a name="key_schema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.keySchema"></a>

- *Type:* str

Specifies the attributes that make up the primary key for the table.

The attributes in the `KeySchema` property must also be defined in the `AttributeDefinitions` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#key_schema DynamodbTable#key_schema}

---

##### `attribute_definitions`<sup>Optional</sup> <a name="attribute_definitions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.attributeDefinitions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>]

A list of attributes that describe the key schema for the table and indexes.

This property is required to create a DDB table.
Update requires: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt). Replacement if you edit an existing AttributeDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#attribute_definitions DynamodbTable#attribute_definitions}

---

##### `billing_mode`<sup>Optional</sup> <a name="billing_mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.billingMode"></a>

- *Type:* str

Specify how you are charged for read and write throughput and how you manage capacity.

Valid values include:

* `PAY_PER_REQUEST` - We recommend using `PAY_PER_REQUEST` for most DynamoDB workloads. `PAY_PER_REQUEST` sets the billing mode to [On-demand capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html).
* `PROVISIONED` - We recommend using `PROVISIONED` for steady workloads with predictable growth where capacity requirements can be reliably forecasted. `PROVISIONED` sets the billing mode to [Provisioned capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/provisioned-capacity-mode.html).

If not specified, the default is `PROVISIONED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#billing_mode DynamodbTable#billing_mode}

---

##### `contributor_insights_specification`<sup>Optional</sup> <a name="contributor_insights_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.contributorInsightsSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a>

The settings used to specify whether to enable CloudWatch Contributor Insights for the table and define which events to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#contributor_insights_specification DynamodbTable#contributor_insights_specification}

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Determines if a table is protected from deletion.

When enabled, the table cannot be deleted by any user or process. This setting is disabled by default. For more information, see [Using deletion protection](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.DeletionProtection) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#deletion_protection_enabled DynamodbTable#deletion_protection_enabled}

---

##### `global_secondary_indexes`<sup>Optional</sup> <a name="global_secondary_indexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.globalSecondaryIndexes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>]

Global secondary indexes to be created on the table.

You can create up to 20 global secondary indexes.
If you update a table to include a new global secondary index, CFNlong initiates the index creation and then proceeds with the stack update. CFNlong doesn't wait for the index to complete creation because the backfilling phase can take a long time, depending on the size of the table. You can't use the index or update the table until the index's status is `ACTIVE`. You can track its status by using the DynamoDB [DescribeTable](https://docs.aws.amazon.com/cli/latest/reference/dynamodb/describe-table.html) command.
If you add or delete an index during an update, we recommend that you don't update any other resources. If your stack fails to update and is rolled back while adding a new index, you must manually delete the index.
Updates are not supported. The following are exceptions:

* If you update either the contributor insights specification or the provisioned throughput values of global secondary indexes, you can update the table without interruption.
* You can delete or add one global secondary index without interruption. If you do both in the same update (for example, by changing the index's logical ID), the update fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#global_secondary_indexes DynamodbTable#global_secondary_indexes}

---

##### `import_source_specification`<sup>Optional</sup> <a name="import_source_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.importSourceSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a>

Specifies the properties of data being imported from the S3 bucket source to the" table.

If you specify the `ImportSourceSpecification` property, and also specify either the `StreamSpecification`, the `TableClass` property, the `DeletionProtectionEnabled` property, or the `WarmThroughput` property, the IAM entity creating/updating stack must have `UpdateTable` permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#import_source_specification DynamodbTable#import_source_specification}

---

##### `kinesis_stream_specification`<sup>Optional</sup> <a name="kinesis_stream_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.kinesisStreamSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a>

The Kinesis Data Streams configuration for the specified table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#kinesis_stream_specification DynamodbTable#kinesis_stream_specification}

---

##### `local_secondary_indexes`<sup>Optional</sup> <a name="local_secondary_indexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.localSecondaryIndexes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>]

Local secondary indexes to be created on the table.

You can create up to 5 local secondary indexes. Each index is scoped to a given hash key value. The size of each hash key can be up to 10 gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#local_secondary_indexes DynamodbTable#local_secondary_indexes}

---

##### `on_demand_throughput`<sup>Optional</sup> <a name="on_demand_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.onDemandThroughput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

Sets the maximum number of read and write units for the specified on-demand table.

If you use this property, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#on_demand_throughput DynamodbTable#on_demand_throughput}

---

##### `point_in_time_recovery_specification`<sup>Optional</sup> <a name="point_in_time_recovery_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.pointInTimeRecoverySpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a>

The settings used to enable point in time recovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#point_in_time_recovery_specification DynamodbTable#point_in_time_recovery_specification}

---

##### `provisioned_throughput`<sup>Optional</sup> <a name="provisioned_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.provisionedThroughput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a>

Throughput for the specified table, which consists of values for ``ReadCapacityUnits`` and ``WriteCapacityUnits``.

For more information about the contents of a provisioned throughput structure, see [Amazon DynamoDB Table ProvisionedThroughput](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ProvisionedThroughput.html).
If you set `BillingMode` as `PROVISIONED`, you must specify this property. If you set `BillingMode` as `PAY_PER_REQUEST`, you cannot specify this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#provisioned_throughput DynamodbTable#provisioned_throughput}

---

##### `resource_policy`<sup>Optional</sup> <a name="resource_policy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.resourcePolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a>

An AWS resource-based policy document in JSON format that will be attached to the table.

When you attach a resource-based policy while creating a table, the policy application is *strongly consistent*.
The maximum size supported for a resource-based policy document is 20 KB. DynamoDB counts whitespaces when calculating the size of a policy against this limit. For a full list of all considerations that apply for resource-based policies, see [Resource-based policy considerations](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-considerations.html).
You need to specify the `CreateTable` and `PutResourcePolicy` IAM actions for authorizing a user to create a table with a resource-based policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#resource_policy DynamodbTable#resource_policy}

---

##### `sse_specification`<sup>Optional</sup> <a name="sse_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.sseSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a>

Specifies the settings to enable server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#sse_specification DynamodbTable#sse_specification}

---

##### `stream_specification`<sup>Optional</sup> <a name="stream_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.streamSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a>

The settings for the DDB table stream, which captures changes to items stored in the table.

Including this property in your CFNlong template automatically enables streaming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#stream_specification DynamodbTable#stream_specification}

---

##### `table_class`<sup>Optional</sup> <a name="table_class" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.tableClass"></a>

- *Type:* str

The table class of the new table. Valid values are ``STANDARD`` and ``STANDARD_INFREQUENT_ACCESS``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#table_class DynamodbTable#table_class}

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.tableName"></a>

- *Type:* str

A name for the table.

If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the table name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#table_name DynamodbTable#table_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>]

An array of key-value pairs to apply to this resource.  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#tags DynamodbTable#tags}

---

##### `time_to_live_specification`<sup>Optional</sup> <a name="time_to_live_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.timeToLiveSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a>

Specifies the Time to Live (TTL) settings for the table.

For detailed information about the limits in DynamoDB, see [Limits in Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the Amazon DynamoDB Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#time_to_live_specification DynamodbTable#time_to_live_specification}

---

##### `warm_throughput`<sup>Optional</sup> <a name="warm_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.Initializer.parameter.warmThroughput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a>

Represents the warm throughput (in read units per second and write units per second) for creating a table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#warm_throughput DynamodbTable#warm_throughput}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putAttributeDefinitions">put_attribute_definitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putContributorInsightsSpecification">put_contributor_insights_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putGlobalSecondaryIndexes">put_global_secondary_indexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putImportSourceSpecification">put_import_source_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putKinesisStreamSpecification">put_kinesis_stream_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putLocalSecondaryIndexes">put_local_secondary_indexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putOnDemandThroughput">put_on_demand_throughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putPointInTimeRecoverySpecification">put_point_in_time_recovery_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putProvisionedThroughput">put_provisioned_throughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putResourcePolicy">put_resource_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putSseSpecification">put_sse_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putStreamSpecification">put_stream_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTimeToLiveSpecification">put_time_to_live_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putWarmThroughput">put_warm_throughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetAttributeDefinitions">reset_attribute_definitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetBillingMode">reset_billing_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetContributorInsightsSpecification">reset_contributor_insights_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetDeletionProtectionEnabled">reset_deletion_protection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetGlobalSecondaryIndexes">reset_global_secondary_indexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetImportSourceSpecification">reset_import_source_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetKinesisStreamSpecification">reset_kinesis_stream_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetLocalSecondaryIndexes">reset_local_secondary_indexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetOnDemandThroughput">reset_on_demand_throughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetPointInTimeRecoverySpecification">reset_point_in_time_recovery_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetProvisionedThroughput">reset_provisioned_throughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetResourcePolicy">reset_resource_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetSseSpecification">reset_sse_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetStreamSpecification">reset_stream_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTableClass">reset_table_class</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTableName">reset_table_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTimeToLiveSpecification">reset_time_to_live_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetWarmThroughput">reset_warm_throughput</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attribute_definitions` <a name="put_attribute_definitions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putAttributeDefinitions"></a>

```python
def put_attribute_definitions(
  value: IResolvable | typing.List[DynamodbTableAttributeDefinitions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putAttributeDefinitions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>]

---

##### `put_contributor_insights_specification` <a name="put_contributor_insights_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putContributorInsightsSpecification"></a>

```python
def put_contributor_insights_specification(
  enabled: bool | IResolvable = None,
  mode: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putContributorInsightsSpecification.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putContributorInsightsSpecification.parameter.mode"></a>

- *Type:* str

Specifies the CloudWatch Contributor Insights mode for a table.

Valid values are `ACCESSED_AND_THROTTLED_KEYS` (tracks all access and throttled events) or `THROTTLED_KEYS` (tracks only throttled events). This setting determines what type of contributor insights data is collected for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#mode DynamodbTable#mode}

---

##### `put_global_secondary_indexes` <a name="put_global_secondary_indexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putGlobalSecondaryIndexes"></a>

```python
def put_global_secondary_indexes(
  value: IResolvable | typing.List[DynamodbTableGlobalSecondaryIndexes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putGlobalSecondaryIndexes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>]

---

##### `put_import_source_specification` <a name="put_import_source_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putImportSourceSpecification"></a>

```python
def put_import_source_specification(
  input_compression_type: str = None,
  input_format: str = None,
  input_format_options: DynamodbTableImportSourceSpecificationInputFormatOptions = None,
  s3_bucket_source: DynamodbTableImportSourceSpecificationS3BucketSource = None
) -> None
```

###### `input_compression_type`<sup>Optional</sup> <a name="input_compression_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putImportSourceSpecification.parameter.inputCompressionType"></a>

- *Type:* str

Type of compression to be used on the input coming from the imported table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#input_compression_type DynamodbTable#input_compression_type}

---

###### `input_format`<sup>Optional</sup> <a name="input_format" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putImportSourceSpecification.parameter.inputFormat"></a>

- *Type:* str

The format of the source data. Valid values for ``ImportFormat`` are ``CSV``, ``DYNAMODB_JSON`` or ``ION``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#input_format DynamodbTable#input_format}

---

###### `input_format_options`<sup>Optional</sup> <a name="input_format_options" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putImportSourceSpecification.parameter.inputFormatOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a>

Additional properties that specify how the input is formatted,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#input_format_options DynamodbTable#input_format_options}

---

###### `s3_bucket_source`<sup>Optional</sup> <a name="s3_bucket_source" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putImportSourceSpecification.parameter.s3BucketSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a>

The S3 bucket that provides the source for the import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#s3_bucket_source DynamodbTable#s3_bucket_source}

---

##### `put_kinesis_stream_specification` <a name="put_kinesis_stream_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putKinesisStreamSpecification"></a>

```python
def put_kinesis_stream_specification(
  approximate_creation_date_time_precision: str = None,
  stream_arn: str = None
) -> None
```

###### `approximate_creation_date_time_precision`<sup>Optional</sup> <a name="approximate_creation_date_time_precision" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putKinesisStreamSpecification.parameter.approximateCreationDateTimePrecision"></a>

- *Type:* str

The precision for the time and date that the stream was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#approximate_creation_date_time_precision DynamodbTable#approximate_creation_date_time_precision}

---

###### `stream_arn`<sup>Optional</sup> <a name="stream_arn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putKinesisStreamSpecification.parameter.streamArn"></a>

- *Type:* str

The ARN for a specific Kinesis data stream.  Length Constraints: Minimum length of 37. Maximum length of 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#stream_arn DynamodbTable#stream_arn}

---

##### `put_local_secondary_indexes` <a name="put_local_secondary_indexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putLocalSecondaryIndexes"></a>

```python
def put_local_secondary_indexes(
  value: IResolvable | typing.List[DynamodbTableLocalSecondaryIndexes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putLocalSecondaryIndexes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>]

---

##### `put_on_demand_throughput` <a name="put_on_demand_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putOnDemandThroughput"></a>

```python
def put_on_demand_throughput(
  max_read_request_units: typing.Union[int, float] = None,
  max_write_request_units: typing.Union[int, float] = None
) -> None
```

###### `max_read_request_units`<sup>Optional</sup> <a name="max_read_request_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putOnDemandThroughput.parameter.maxReadRequestUnits"></a>

- *Type:* typing.Union[int, float]

Maximum number of read request units for the specified table.

To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxReadRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxReadRequestUnits` to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#max_read_request_units DynamodbTable#max_read_request_units}

---

###### `max_write_request_units`<sup>Optional</sup> <a name="max_write_request_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putOnDemandThroughput.parameter.maxWriteRequestUnits"></a>

- *Type:* typing.Union[int, float]

Maximum number of write request units for the specified table.

To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxWriteRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxWriteRequestUnits` to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#max_write_request_units DynamodbTable#max_write_request_units}

---

##### `put_point_in_time_recovery_specification` <a name="put_point_in_time_recovery_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putPointInTimeRecoverySpecification"></a>

```python
def put_point_in_time_recovery_specification(
  point_in_time_recovery_enabled: bool | IResolvable = None,
  recovery_period_in_days: typing.Union[int, float] = None
) -> None
```

###### `point_in_time_recovery_enabled`<sup>Optional</sup> <a name="point_in_time_recovery_enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putPointInTimeRecoverySpecification.parameter.pointInTimeRecoveryEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#point_in_time_recovery_enabled DynamodbTable#point_in_time_recovery_enabled}

---

###### `recovery_period_in_days`<sup>Optional</sup> <a name="recovery_period_in_days" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putPointInTimeRecoverySpecification.parameter.recoveryPeriodInDays"></a>

- *Type:* typing.Union[int, float]

The number of preceding days for which continuous backups are taken and maintained.

Your table data is only recoverable to any point-in-time from within the configured recovery period. This parameter is optional. If no value is provided, the value will default to 35.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#recovery_period_in_days DynamodbTable#recovery_period_in_days}

---

##### `put_provisioned_throughput` <a name="put_provisioned_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putProvisionedThroughput"></a>

```python
def put_provisioned_throughput(
  read_capacity_units: typing.Union[int, float] = None,
  write_capacity_units: typing.Union[int, float] = None
) -> None
```

###### `read_capacity_units`<sup>Optional</sup> <a name="read_capacity_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putProvisionedThroughput.parameter.readCapacityUnits"></a>

- *Type:* typing.Union[int, float]

The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ``ThrottlingException``.

For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#read_capacity_units DynamodbTable#read_capacity_units}

---

###### `write_capacity_units`<sup>Optional</sup> <a name="write_capacity_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putProvisionedThroughput.parameter.writeCapacityUnits"></a>

- *Type:* typing.Union[int, float]

The maximum number of writes consumed per second before DynamoDB returns a ``ThrottlingException``.

For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#write_capacity_units DynamodbTable#write_capacity_units}

---

##### `put_resource_policy` <a name="put_resource_policy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putResourcePolicy"></a>

```python
def put_resource_policy(
  policy_document: str = None
) -> None
```

###### `policy_document`<sup>Optional</sup> <a name="policy_document" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putResourcePolicy.parameter.policyDocument"></a>

- *Type:* str

A resource-based policy document that contains permissions to add to the specified DDB table, index, or both.

In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see [Using resource-based policies for](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#policy_document DynamodbTable#policy_document}

---

##### `put_sse_specification` <a name="put_sse_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putSseSpecification"></a>

```python
def put_sse_specification(
  kms_master_key_id: str = None,
  sse_enabled: bool | IResolvable = None,
  sse_type: str = None
) -> None
```

###### `kms_master_key_id`<sup>Optional</sup> <a name="kms_master_key_id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putSseSpecification.parameter.kmsMasterKeyId"></a>

- *Type:* str

The KMS key that should be used for the KMS encryption.

To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB key `alias/aws/dynamodb`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#kms_master_key_id DynamodbTable#kms_master_key_id}

---

###### `sse_enabled`<sup>Optional</sup> <a name="sse_enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putSseSpecification.parameter.sseEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether server-side encryption is done using an AWS managed key or an AWS owned key.

If enabled (true), server-side encryption type is set to `KMS` and an AWS managed key is used (KMS charges apply). If disabled (false) or not specified, server-side encryption is set to AWS owned key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#sse_enabled DynamodbTable#sse_enabled}

---

###### `sse_type`<sup>Optional</sup> <a name="sse_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putSseSpecification.parameter.sseType"></a>

- *Type:* str

Server-side encryption type.

The only supported value is:

* `KMS` - Server-side encryption that uses KMSlong. The key is stored in your account and is managed by KMS (KMS charges apply).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#sse_type DynamodbTable#sse_type}

---

##### `put_stream_specification` <a name="put_stream_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putStreamSpecification"></a>

```python
def put_stream_specification(
  resource_policy: DynamodbTableStreamSpecificationResourcePolicy = None,
  stream_view_type: str = None
) -> None
```

###### `resource_policy`<sup>Optional</sup> <a name="resource_policy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putStreamSpecification.parameter.resourcePolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a>

Creates or updates a resource-based policy document that contains the permissions for DDB resources, such as a table's streams.

Resource-based policies let you define access permissions by specifying who has access to each resource, and the actions they are allowed to perform on each resource.
When you remove the `StreamSpecification` property from the template, DynamoDB disables the stream but retains any attached resource policy until the stream is deleted after 24 hours. When you modify the `StreamViewType` property, DynamoDB creates a new stream and retains the old stream's resource policy. The old stream and its resource policy are deleted after the 24-hour retention period.
In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see [Using resource-based policies for](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#resource_policy DynamodbTable#resource_policy}

---

###### `stream_view_type`<sup>Optional</sup> <a name="stream_view_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putStreamSpecification.parameter.streamViewType"></a>

- *Type:* str

When an item in the table is modified, ``StreamViewType`` determines what information is written to the stream for this table.

Valid values for `StreamViewType` are:

* `KEYS_ONLY` - Only the key attributes of the modified item are written to the stream.
* `NEW_IMAGE` - The entire item, as it appears after it was modified, is written to the stream.
* `OLD_IMAGE` - The entire item, as it appeared before it was modified, is written to the stream.
* `NEW_AND_OLD_IMAGES` - Both the new and the old item images of the item are written to the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#stream_view_type DynamodbTable#stream_view_type}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DynamodbTableTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>]

---

##### `put_time_to_live_specification` <a name="put_time_to_live_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTimeToLiveSpecification"></a>

```python
def put_time_to_live_specification(
  attribute_name: str = None,
  enabled: bool | IResolvable = None
) -> None
```

###### `attribute_name`<sup>Optional</sup> <a name="attribute_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTimeToLiveSpecification.parameter.attributeName"></a>

- *Type:* str

The name of the TTL attribute used to store the expiration time for items in the table.

* The `AttributeName` property is required when enabling the TTL, or when TTL is already enabled.
* To update this property, you must first disable TTL and then enable TTL with the new attribute name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putTimeToLiveSpecification.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether TTL is to be enabled (true) or disabled (false) on the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}

---

##### `put_warm_throughput` <a name="put_warm_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putWarmThroughput"></a>

```python
def put_warm_throughput(
  read_units_per_second: typing.Union[int, float] = None,
  write_units_per_second: typing.Union[int, float] = None
) -> None
```

###### `read_units_per_second`<sup>Optional</sup> <a name="read_units_per_second" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putWarmThroughput.parameter.readUnitsPerSecond"></a>

- *Type:* typing.Union[int, float]

Represents the number of read operations your base table can instantaneously support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#read_units_per_second DynamodbTable#read_units_per_second}

---

###### `write_units_per_second`<sup>Optional</sup> <a name="write_units_per_second" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.putWarmThroughput.parameter.writeUnitsPerSecond"></a>

- *Type:* typing.Union[int, float]

Represents the number of write operations your base table can instantaneously support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#write_units_per_second DynamodbTable#write_units_per_second}

---

##### `reset_attribute_definitions` <a name="reset_attribute_definitions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetAttributeDefinitions"></a>

```python
def reset_attribute_definitions() -> None
```

##### `reset_billing_mode` <a name="reset_billing_mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetBillingMode"></a>

```python
def reset_billing_mode() -> None
```

##### `reset_contributor_insights_specification` <a name="reset_contributor_insights_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetContributorInsightsSpecification"></a>

```python
def reset_contributor_insights_specification() -> None
```

##### `reset_deletion_protection_enabled` <a name="reset_deletion_protection_enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetDeletionProtectionEnabled"></a>

```python
def reset_deletion_protection_enabled() -> None
```

##### `reset_global_secondary_indexes` <a name="reset_global_secondary_indexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetGlobalSecondaryIndexes"></a>

```python
def reset_global_secondary_indexes() -> None
```

##### `reset_import_source_specification` <a name="reset_import_source_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetImportSourceSpecification"></a>

```python
def reset_import_source_specification() -> None
```

##### `reset_kinesis_stream_specification` <a name="reset_kinesis_stream_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetKinesisStreamSpecification"></a>

```python
def reset_kinesis_stream_specification() -> None
```

##### `reset_local_secondary_indexes` <a name="reset_local_secondary_indexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetLocalSecondaryIndexes"></a>

```python
def reset_local_secondary_indexes() -> None
```

##### `reset_on_demand_throughput` <a name="reset_on_demand_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetOnDemandThroughput"></a>

```python
def reset_on_demand_throughput() -> None
```

##### `reset_point_in_time_recovery_specification` <a name="reset_point_in_time_recovery_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetPointInTimeRecoverySpecification"></a>

```python
def reset_point_in_time_recovery_specification() -> None
```

##### `reset_provisioned_throughput` <a name="reset_provisioned_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetProvisionedThroughput"></a>

```python
def reset_provisioned_throughput() -> None
```

##### `reset_resource_policy` <a name="reset_resource_policy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetResourcePolicy"></a>

```python
def reset_resource_policy() -> None
```

##### `reset_sse_specification` <a name="reset_sse_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetSseSpecification"></a>

```python
def reset_sse_specification() -> None
```

##### `reset_stream_specification` <a name="reset_stream_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetStreamSpecification"></a>

```python
def reset_stream_specification() -> None
```

##### `reset_table_class` <a name="reset_table_class" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTableClass"></a>

```python
def reset_table_class() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTableName"></a>

```python
def reset_table_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_time_to_live_specification` <a name="reset_time_to_live_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetTimeToLiveSpecification"></a>

```python
def reset_time_to_live_specification() -> None
```

##### `reset_warm_throughput` <a name="reset_warm_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.resetWarmThroughput"></a>

```python
def reset_warm_throughput() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DynamodbTable resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isConstruct"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformElement"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformResource"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DynamodbTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DynamodbTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DynamodbTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DynamodbTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.attributeDefinitions">attribute_definitions</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList">DynamodbTableAttributeDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.contributorInsightsSpecification">contributor_insights_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference">DynamodbTableContributorInsightsSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.globalSecondaryIndexes">global_secondary_indexes</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList">DynamodbTableGlobalSecondaryIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.importSourceSpecification">import_source_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference">DynamodbTableImportSourceSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.kinesisStreamSpecification">kinesis_stream_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference">DynamodbTableKinesisStreamSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.localSecondaryIndexes">local_secondary_indexes</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList">DynamodbTableLocalSecondaryIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.onDemandThroughput">on_demand_throughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference">DynamodbTableOnDemandThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.pointInTimeRecoverySpecification">point_in_time_recovery_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference">DynamodbTablePointInTimeRecoverySpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisionedThroughput">provisioned_throughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference">DynamodbTableProvisionedThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.resourcePolicy">resource_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference">DynamodbTableResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.sseSpecification">sse_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference">DynamodbTableSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamArn">stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamSpecification">stream_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference">DynamodbTableStreamSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList">DynamodbTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.timeToLiveSpecification">time_to_live_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference">DynamodbTableTimeToLiveSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.warmThroughput">warm_throughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference">DynamodbTableWarmThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.attributeDefinitionsInput">attribute_definitions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.billingModeInput">billing_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.contributorInsightsSpecificationInput">contributor_insights_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.deletionProtectionEnabledInput">deletion_protection_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.globalSecondaryIndexesInput">global_secondary_indexes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.importSourceSpecificationInput">import_source_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.keySchemaInput">key_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.kinesisStreamSpecificationInput">kinesis_stream_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.localSecondaryIndexesInput">local_secondary_indexes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.onDemandThroughputInput">on_demand_throughput_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.pointInTimeRecoverySpecificationInput">point_in_time_recovery_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisionedThroughputInput">provisioned_throughput_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.resourcePolicyInput">resource_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.sseSpecificationInput">sse_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamSpecificationInput">stream_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableClassInput">table_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.timeToLiveSpecificationInput">time_to_live_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.warmThroughputInput">warm_throughput_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.billingMode">billing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.keySchema">key_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableClass">table_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `attribute_definitions`<sup>Required</sup> <a name="attribute_definitions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.attributeDefinitions"></a>

```python
attribute_definitions: DynamodbTableAttributeDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList">DynamodbTableAttributeDefinitionsList</a>

---

##### `contributor_insights_specification`<sup>Required</sup> <a name="contributor_insights_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.contributorInsightsSpecification"></a>

```python
contributor_insights_specification: DynamodbTableContributorInsightsSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference">DynamodbTableContributorInsightsSpecificationOutputReference</a>

---

##### `global_secondary_indexes`<sup>Required</sup> <a name="global_secondary_indexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.globalSecondaryIndexes"></a>

```python
global_secondary_indexes: DynamodbTableGlobalSecondaryIndexesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList">DynamodbTableGlobalSecondaryIndexesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_source_specification`<sup>Required</sup> <a name="import_source_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.importSourceSpecification"></a>

```python
import_source_specification: DynamodbTableImportSourceSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference">DynamodbTableImportSourceSpecificationOutputReference</a>

---

##### `kinesis_stream_specification`<sup>Required</sup> <a name="kinesis_stream_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.kinesisStreamSpecification"></a>

```python
kinesis_stream_specification: DynamodbTableKinesisStreamSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference">DynamodbTableKinesisStreamSpecificationOutputReference</a>

---

##### `local_secondary_indexes`<sup>Required</sup> <a name="local_secondary_indexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.localSecondaryIndexes"></a>

```python
local_secondary_indexes: DynamodbTableLocalSecondaryIndexesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList">DynamodbTableLocalSecondaryIndexesList</a>

---

##### `on_demand_throughput`<sup>Required</sup> <a name="on_demand_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.onDemandThroughput"></a>

```python
on_demand_throughput: DynamodbTableOnDemandThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference">DynamodbTableOnDemandThroughputOutputReference</a>

---

##### `point_in_time_recovery_specification`<sup>Required</sup> <a name="point_in_time_recovery_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.pointInTimeRecoverySpecification"></a>

```python
point_in_time_recovery_specification: DynamodbTablePointInTimeRecoverySpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference">DynamodbTablePointInTimeRecoverySpecificationOutputReference</a>

---

##### `provisioned_throughput`<sup>Required</sup> <a name="provisioned_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisionedThroughput"></a>

```python
provisioned_throughput: DynamodbTableProvisionedThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference">DynamodbTableProvisionedThroughputOutputReference</a>

---

##### `resource_policy`<sup>Required</sup> <a name="resource_policy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.resourcePolicy"></a>

```python
resource_policy: DynamodbTableResourcePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference">DynamodbTableResourcePolicyOutputReference</a>

---

##### `sse_specification`<sup>Required</sup> <a name="sse_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.sseSpecification"></a>

```python
sse_specification: DynamodbTableSseSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference">DynamodbTableSseSpecificationOutputReference</a>

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

---

##### `stream_specification`<sup>Required</sup> <a name="stream_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamSpecification"></a>

```python
stream_specification: DynamodbTableStreamSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference">DynamodbTableStreamSpecificationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tags"></a>

```python
tags: DynamodbTableTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList">DynamodbTableTagsList</a>

---

##### `time_to_live_specification`<sup>Required</sup> <a name="time_to_live_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.timeToLiveSpecification"></a>

```python
time_to_live_specification: DynamodbTableTimeToLiveSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference">DynamodbTableTimeToLiveSpecificationOutputReference</a>

---

##### `warm_throughput`<sup>Required</sup> <a name="warm_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.warmThroughput"></a>

```python
warm_throughput: DynamodbTableWarmThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference">DynamodbTableWarmThroughputOutputReference</a>

---

##### `attribute_definitions_input`<sup>Optional</sup> <a name="attribute_definitions_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.attributeDefinitionsInput"></a>

```python
attribute_definitions_input: IResolvable | typing.List[DynamodbTableAttributeDefinitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>]

---

##### `billing_mode_input`<sup>Optional</sup> <a name="billing_mode_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.billingModeInput"></a>

```python
billing_mode_input: str
```

- *Type:* str

---

##### `contributor_insights_specification_input`<sup>Optional</sup> <a name="contributor_insights_specification_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.contributorInsightsSpecificationInput"></a>

```python
contributor_insights_specification_input: IResolvable | DynamodbTableContributorInsightsSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a>

---

##### `deletion_protection_enabled_input`<sup>Optional</sup> <a name="deletion_protection_enabled_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.deletionProtectionEnabledInput"></a>

```python
deletion_protection_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `global_secondary_indexes_input`<sup>Optional</sup> <a name="global_secondary_indexes_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.globalSecondaryIndexesInput"></a>

```python
global_secondary_indexes_input: IResolvable | typing.List[DynamodbTableGlobalSecondaryIndexes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>]

---

##### `import_source_specification_input`<sup>Optional</sup> <a name="import_source_specification_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.importSourceSpecificationInput"></a>

```python
import_source_specification_input: IResolvable | DynamodbTableImportSourceSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a>

---

##### `key_schema_input`<sup>Optional</sup> <a name="key_schema_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.keySchemaInput"></a>

```python
key_schema_input: str
```

- *Type:* str

---

##### `kinesis_stream_specification_input`<sup>Optional</sup> <a name="kinesis_stream_specification_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.kinesisStreamSpecificationInput"></a>

```python
kinesis_stream_specification_input: IResolvable | DynamodbTableKinesisStreamSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a>

---

##### `local_secondary_indexes_input`<sup>Optional</sup> <a name="local_secondary_indexes_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.localSecondaryIndexesInput"></a>

```python
local_secondary_indexes_input: IResolvable | typing.List[DynamodbTableLocalSecondaryIndexes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>]

---

##### `on_demand_throughput_input`<sup>Optional</sup> <a name="on_demand_throughput_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.onDemandThroughputInput"></a>

```python
on_demand_throughput_input: IResolvable | DynamodbTableOnDemandThroughput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

---

##### `point_in_time_recovery_specification_input`<sup>Optional</sup> <a name="point_in_time_recovery_specification_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.pointInTimeRecoverySpecificationInput"></a>

```python
point_in_time_recovery_specification_input: IResolvable | DynamodbTablePointInTimeRecoverySpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a>

---

##### `provisioned_throughput_input`<sup>Optional</sup> <a name="provisioned_throughput_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.provisionedThroughputInput"></a>

```python
provisioned_throughput_input: IResolvable | DynamodbTableProvisionedThroughput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a>

---

##### `resource_policy_input`<sup>Optional</sup> <a name="resource_policy_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.resourcePolicyInput"></a>

```python
resource_policy_input: IResolvable | DynamodbTableResourcePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a>

---

##### `sse_specification_input`<sup>Optional</sup> <a name="sse_specification_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.sseSpecificationInput"></a>

```python
sse_specification_input: IResolvable | DynamodbTableSseSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a>

---

##### `stream_specification_input`<sup>Optional</sup> <a name="stream_specification_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.streamSpecificationInput"></a>

```python
stream_specification_input: IResolvable | DynamodbTableStreamSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a>

---

##### `table_class_input`<sup>Optional</sup> <a name="table_class_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableClassInput"></a>

```python
table_class_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DynamodbTableTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>]

---

##### `time_to_live_specification_input`<sup>Optional</sup> <a name="time_to_live_specification_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.timeToLiveSpecificationInput"></a>

```python
time_to_live_specification_input: IResolvable | DynamodbTableTimeToLiveSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a>

---

##### `warm_throughput_input`<sup>Optional</sup> <a name="warm_throughput_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.warmThroughputInput"></a>

```python
warm_throughput_input: IResolvable | DynamodbTableWarmThroughput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a>

---

##### `billing_mode`<sup>Required</sup> <a name="billing_mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.billingMode"></a>

```python
billing_mode: str
```

- *Type:* str

---

##### `deletion_protection_enabled`<sup>Required</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_schema`<sup>Required</sup> <a name="key_schema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.keySchema"></a>

```python
key_schema: str
```

- *Type:* str

---

##### `table_class`<sup>Required</sup> <a name="table_class" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableClass"></a>

```python
table_class: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DynamodbTableAttributeDefinitions <a name="DynamodbTableAttributeDefinitions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableAttributeDefinitions(
  attribute_name: str = None,
  attribute_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions.property.attributeName">attribute_name</a></code> | <code>str</code> | A name for the attribute. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions.property.attributeType">attribute_type</a></code> | <code>str</code> | The data type for the attribute, where:   +  ``S`` - the attribute is of type String   +  ``N`` - the attribute is of type Number   +  ``B`` - the attribute is of type Binary. |

---

##### `attribute_name`<sup>Optional</sup> <a name="attribute_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

A name for the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}

---

##### `attribute_type`<sup>Optional</sup> <a name="attribute_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions.property.attributeType"></a>

```python
attribute_type: str
```

- *Type:* str

The data type for the attribute, where:   +  ``S`` - the attribute is of type String   +  ``N`` - the attribute is of type Number   +  ``B`` - the attribute is of type Binary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#attribute_type DynamodbTable#attribute_type}

---

### DynamodbTableConfig <a name="DynamodbTableConfig" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key_schema: str,
  attribute_definitions: IResolvable | typing.List[DynamodbTableAttributeDefinitions] = None,
  billing_mode: str = None,
  contributor_insights_specification: DynamodbTableContributorInsightsSpecification = None,
  deletion_protection_enabled: bool | IResolvable = None,
  global_secondary_indexes: IResolvable | typing.List[DynamodbTableGlobalSecondaryIndexes] = None,
  import_source_specification: DynamodbTableImportSourceSpecification = None,
  kinesis_stream_specification: DynamodbTableKinesisStreamSpecification = None,
  local_secondary_indexes: IResolvable | typing.List[DynamodbTableLocalSecondaryIndexes] = None,
  on_demand_throughput: DynamodbTableOnDemandThroughput = None,
  point_in_time_recovery_specification: DynamodbTablePointInTimeRecoverySpecification = None,
  provisioned_throughput: DynamodbTableProvisionedThroughput = None,
  resource_policy: DynamodbTableResourcePolicy = None,
  sse_specification: DynamodbTableSseSpecification = None,
  stream_specification: DynamodbTableStreamSpecification = None,
  table_class: str = None,
  table_name: str = None,
  tags: IResolvable | typing.List[DynamodbTableTags] = None,
  time_to_live_specification: DynamodbTableTimeToLiveSpecification = None,
  warm_throughput: DynamodbTableWarmThroughput = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.keySchema">key_schema</a></code> | <code>str</code> | Specifies the attributes that make up the primary key for the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.attributeDefinitions">attribute_definitions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>]</code> | A list of attributes that describe the key schema for the table and indexes. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.billingMode">billing_mode</a></code> | <code>str</code> | Specify how you are charged for read and write throughput and how you manage capacity. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.contributorInsightsSpecification">contributor_insights_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a></code> | The settings used to specify whether to enable CloudWatch Contributor Insights for the table and define which events to monitor. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Determines if a table is protected from deletion. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.globalSecondaryIndexes">global_secondary_indexes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>]</code> | Global secondary indexes to be created on the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.importSourceSpecification">import_source_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a></code> | Specifies the properties of data being imported from the S3 bucket source to the" table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.kinesisStreamSpecification">kinesis_stream_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a></code> | The Kinesis Data Streams configuration for the specified table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.localSecondaryIndexes">local_secondary_indexes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>]</code> | Local secondary indexes to be created on the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.onDemandThroughput">on_demand_throughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a></code> | Sets the maximum number of read and write units for the specified on-demand table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.pointInTimeRecoverySpecification">point_in_time_recovery_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a></code> | The settings used to enable point in time recovery. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provisionedThroughput">provisioned_throughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a></code> | Throughput for the specified table, which consists of values for ``ReadCapacityUnits`` and ``WriteCapacityUnits``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.resourcePolicy">resource_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a></code> | An AWS resource-based policy document in JSON format that will be attached to the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.sseSpecification">sse_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a></code> | Specifies the settings to enable server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.streamSpecification">stream_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a></code> | The settings for the DDB table stream, which captures changes to items stored in the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tableClass">table_class</a></code> | <code>str</code> | The table class of the new table. Valid values are ``STANDARD`` and ``STANDARD_INFREQUENT_ACCESS``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tableName">table_name</a></code> | <code>str</code> | A name for the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>]</code> | An array of key-value pairs to apply to this resource.  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html). |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.timeToLiveSpecification">time_to_live_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a></code> | Specifies the Time to Live (TTL) settings for the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.warmThroughput">warm_throughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a></code> | Represents the warm throughput (in read units per second and write units per second) for creating a table. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `key_schema`<sup>Required</sup> <a name="key_schema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.keySchema"></a>

```python
key_schema: str
```

- *Type:* str

Specifies the attributes that make up the primary key for the table.

The attributes in the `KeySchema` property must also be defined in the `AttributeDefinitions` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#key_schema DynamodbTable#key_schema}

---

##### `attribute_definitions`<sup>Optional</sup> <a name="attribute_definitions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.attributeDefinitions"></a>

```python
attribute_definitions: IResolvable | typing.List[DynamodbTableAttributeDefinitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>]

A list of attributes that describe the key schema for the table and indexes.

This property is required to create a DDB table.
Update requires: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt). Replacement if you edit an existing AttributeDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#attribute_definitions DynamodbTable#attribute_definitions}

---

##### `billing_mode`<sup>Optional</sup> <a name="billing_mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.billingMode"></a>

```python
billing_mode: str
```

- *Type:* str

Specify how you are charged for read and write throughput and how you manage capacity.

Valid values include:

* `PAY_PER_REQUEST` - We recommend using `PAY_PER_REQUEST` for most DynamoDB workloads. `PAY_PER_REQUEST` sets the billing mode to [On-demand capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html).
* `PROVISIONED` - We recommend using `PROVISIONED` for steady workloads with predictable growth where capacity requirements can be reliably forecasted. `PROVISIONED` sets the billing mode to [Provisioned capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/provisioned-capacity-mode.html).

If not specified, the default is `PROVISIONED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#billing_mode DynamodbTable#billing_mode}

---

##### `contributor_insights_specification`<sup>Optional</sup> <a name="contributor_insights_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.contributorInsightsSpecification"></a>

```python
contributor_insights_specification: DynamodbTableContributorInsightsSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a>

The settings used to specify whether to enable CloudWatch Contributor Insights for the table and define which events to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#contributor_insights_specification DynamodbTable#contributor_insights_specification}

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Determines if a table is protected from deletion.

When enabled, the table cannot be deleted by any user or process. This setting is disabled by default. For more information, see [Using deletion protection](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.DeletionProtection) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#deletion_protection_enabled DynamodbTable#deletion_protection_enabled}

---

##### `global_secondary_indexes`<sup>Optional</sup> <a name="global_secondary_indexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.globalSecondaryIndexes"></a>

```python
global_secondary_indexes: IResolvable | typing.List[DynamodbTableGlobalSecondaryIndexes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>]

Global secondary indexes to be created on the table.

You can create up to 20 global secondary indexes.
If you update a table to include a new global secondary index, CFNlong initiates the index creation and then proceeds with the stack update. CFNlong doesn't wait for the index to complete creation because the backfilling phase can take a long time, depending on the size of the table. You can't use the index or update the table until the index's status is `ACTIVE`. You can track its status by using the DynamoDB [DescribeTable](https://docs.aws.amazon.com/cli/latest/reference/dynamodb/describe-table.html) command.
If you add or delete an index during an update, we recommend that you don't update any other resources. If your stack fails to update and is rolled back while adding a new index, you must manually delete the index.
Updates are not supported. The following are exceptions:

* If you update either the contributor insights specification or the provisioned throughput values of global secondary indexes, you can update the table without interruption.
* You can delete or add one global secondary index without interruption. If you do both in the same update (for example, by changing the index's logical ID), the update fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#global_secondary_indexes DynamodbTable#global_secondary_indexes}

---

##### `import_source_specification`<sup>Optional</sup> <a name="import_source_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.importSourceSpecification"></a>

```python
import_source_specification: DynamodbTableImportSourceSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a>

Specifies the properties of data being imported from the S3 bucket source to the" table.

If you specify the `ImportSourceSpecification` property, and also specify either the `StreamSpecification`, the `TableClass` property, the `DeletionProtectionEnabled` property, or the `WarmThroughput` property, the IAM entity creating/updating stack must have `UpdateTable` permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#import_source_specification DynamodbTable#import_source_specification}

---

##### `kinesis_stream_specification`<sup>Optional</sup> <a name="kinesis_stream_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.kinesisStreamSpecification"></a>

```python
kinesis_stream_specification: DynamodbTableKinesisStreamSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a>

The Kinesis Data Streams configuration for the specified table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#kinesis_stream_specification DynamodbTable#kinesis_stream_specification}

---

##### `local_secondary_indexes`<sup>Optional</sup> <a name="local_secondary_indexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.localSecondaryIndexes"></a>

```python
local_secondary_indexes: IResolvable | typing.List[DynamodbTableLocalSecondaryIndexes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>]

Local secondary indexes to be created on the table.

You can create up to 5 local secondary indexes. Each index is scoped to a given hash key value. The size of each hash key can be up to 10 gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#local_secondary_indexes DynamodbTable#local_secondary_indexes}

---

##### `on_demand_throughput`<sup>Optional</sup> <a name="on_demand_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.onDemandThroughput"></a>

```python
on_demand_throughput: DynamodbTableOnDemandThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

Sets the maximum number of read and write units for the specified on-demand table.

If you use this property, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#on_demand_throughput DynamodbTable#on_demand_throughput}

---

##### `point_in_time_recovery_specification`<sup>Optional</sup> <a name="point_in_time_recovery_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.pointInTimeRecoverySpecification"></a>

```python
point_in_time_recovery_specification: DynamodbTablePointInTimeRecoverySpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a>

The settings used to enable point in time recovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#point_in_time_recovery_specification DynamodbTable#point_in_time_recovery_specification}

---

##### `provisioned_throughput`<sup>Optional</sup> <a name="provisioned_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.provisionedThroughput"></a>

```python
provisioned_throughput: DynamodbTableProvisionedThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a>

Throughput for the specified table, which consists of values for ``ReadCapacityUnits`` and ``WriteCapacityUnits``.

For more information about the contents of a provisioned throughput structure, see [Amazon DynamoDB Table ProvisionedThroughput](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ProvisionedThroughput.html).
If you set `BillingMode` as `PROVISIONED`, you must specify this property. If you set `BillingMode` as `PAY_PER_REQUEST`, you cannot specify this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#provisioned_throughput DynamodbTable#provisioned_throughput}

---

##### `resource_policy`<sup>Optional</sup> <a name="resource_policy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.resourcePolicy"></a>

```python
resource_policy: DynamodbTableResourcePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a>

An AWS resource-based policy document in JSON format that will be attached to the table.

When you attach a resource-based policy while creating a table, the policy application is *strongly consistent*.
The maximum size supported for a resource-based policy document is 20 KB. DynamoDB counts whitespaces when calculating the size of a policy against this limit. For a full list of all considerations that apply for resource-based policies, see [Resource-based policy considerations](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-considerations.html).
You need to specify the `CreateTable` and `PutResourcePolicy` IAM actions for authorizing a user to create a table with a resource-based policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#resource_policy DynamodbTable#resource_policy}

---

##### `sse_specification`<sup>Optional</sup> <a name="sse_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.sseSpecification"></a>

```python
sse_specification: DynamodbTableSseSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a>

Specifies the settings to enable server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#sse_specification DynamodbTable#sse_specification}

---

##### `stream_specification`<sup>Optional</sup> <a name="stream_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.streamSpecification"></a>

```python
stream_specification: DynamodbTableStreamSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a>

The settings for the DDB table stream, which captures changes to items stored in the table.

Including this property in your CFNlong template automatically enables streaming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#stream_specification DynamodbTable#stream_specification}

---

##### `table_class`<sup>Optional</sup> <a name="table_class" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tableClass"></a>

```python
table_class: str
```

- *Type:* str

The table class of the new table. Valid values are ``STANDARD`` and ``STANDARD_INFREQUENT_ACCESS``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#table_class DynamodbTable#table_class}

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

A name for the table.

If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the table name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#table_name DynamodbTable#table_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DynamodbTableTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>]

An array of key-value pairs to apply to this resource.  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#tags DynamodbTable#tags}

---

##### `time_to_live_specification`<sup>Optional</sup> <a name="time_to_live_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.timeToLiveSpecification"></a>

```python
time_to_live_specification: DynamodbTableTimeToLiveSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a>

Specifies the Time to Live (TTL) settings for the table.

For detailed information about the limits in DynamoDB, see [Limits in Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the Amazon DynamoDB Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#time_to_live_specification DynamodbTable#time_to_live_specification}

---

##### `warm_throughput`<sup>Optional</sup> <a name="warm_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableConfig.property.warmThroughput"></a>

```python
warm_throughput: DynamodbTableWarmThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a>

Represents the warm throughput (in read units per second and write units per second) for creating a table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#warm_throughput DynamodbTable#warm_throughput}

---

### DynamodbTableContributorInsightsSpecification <a name="DynamodbTableContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableContributorInsightsSpecification(
  enabled: bool | IResolvable = None,
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false). |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification.property.mode">mode</a></code> | <code>str</code> | Specifies the CloudWatch Contributor Insights mode for a table. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification.property.mode"></a>

```python
mode: str
```

- *Type:* str

Specifies the CloudWatch Contributor Insights mode for a table.

Valid values are `ACCESSED_AND_THROTTLED_KEYS` (tracks all access and throttled events) or `THROTTLED_KEYS` (tracks only throttled events). This setting determines what type of contributor insights data is collected for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#mode DynamodbTable#mode}

---

### DynamodbTableGlobalSecondaryIndexes <a name="DynamodbTableGlobalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableGlobalSecondaryIndexes(
  contributor_insights_specification: DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification = None,
  index_name: str = None,
  key_schema: IResolvable | typing.List[DynamodbTableGlobalSecondaryIndexesKeySchema] = None,
  on_demand_throughput: DynamodbTableGlobalSecondaryIndexesOnDemandThroughput = None,
  projection: DynamodbTableGlobalSecondaryIndexesProjection = None,
  provisioned_throughput: DynamodbTableGlobalSecondaryIndexesProvisionedThroughput = None,
  warm_throughput: DynamodbTableGlobalSecondaryIndexesWarmThroughput = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.contributorInsightsSpecification">contributor_insights_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a></code> | The settings used to specify whether to enable CloudWatch Contributor Insights for the global table and define which events to monitor. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.indexName">index_name</a></code> | <code>str</code> | The name of the global secondary index. The name must be unique among all other indexes on this table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.keySchema">key_schema</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>]</code> | The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.onDemandThroughput">on_demand_throughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a></code> | The maximum number of read and write units for the specified global secondary index. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.projection">projection</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a></code> | Represents attributes that are copied (projected) from the table into the global secondary index. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.provisionedThroughput">provisioned_throughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a></code> | Represents the provisioned throughput settings for the specified global secondary index. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.warmThroughput">warm_throughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a></code> | Represents the warm throughput value (in read units per second and write units per second) for the specified secondary index. |

---

##### `contributor_insights_specification`<sup>Optional</sup> <a name="contributor_insights_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.contributorInsightsSpecification"></a>

```python
contributor_insights_specification: DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a>

The settings used to specify whether to enable CloudWatch Contributor Insights for the global table and define which events to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#contributor_insights_specification DynamodbTable#contributor_insights_specification}

---

##### `index_name`<sup>Optional</sup> <a name="index_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

The name of the global secondary index. The name must be unique among all other indexes on this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#index_name DynamodbTable#index_name}

---

##### `key_schema`<sup>Optional</sup> <a name="key_schema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.keySchema"></a>

```python
key_schema: IResolvable | typing.List[DynamodbTableGlobalSecondaryIndexesKeySchema]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>]

The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*.

The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#key_schema DynamodbTable#key_schema}

---

##### `on_demand_throughput`<sup>Optional</sup> <a name="on_demand_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.onDemandThroughput"></a>

```python
on_demand_throughput: DynamodbTableGlobalSecondaryIndexesOnDemandThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a>

The maximum number of read and write units for the specified global secondary index.

If you use this parameter, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both. You must use either `OnDemandThroughput` or `ProvisionedThroughput` based on your table's capacity mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#on_demand_throughput DynamodbTable#on_demand_throughput}

---

##### `projection`<sup>Optional</sup> <a name="projection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.projection"></a>

```python
projection: DynamodbTableGlobalSecondaryIndexesProjection
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a>

Represents attributes that are copied (projected) from the table into the global secondary index.

These are in addition to the primary key attributes and index key attributes, which are automatically projected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#projection DynamodbTable#projection}

---

##### `provisioned_throughput`<sup>Optional</sup> <a name="provisioned_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.provisionedThroughput"></a>

```python
provisioned_throughput: DynamodbTableGlobalSecondaryIndexesProvisionedThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a>

Represents the provisioned throughput settings for the specified global secondary index.

You must use either `OnDemandThroughput` or `ProvisionedThroughput` based on your table's capacity mode.
For current minimum and maximum provisioned throughput values, see [Service, Account, and Table Quotas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the *Amazon DynamoDB Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#provisioned_throughput DynamodbTable#provisioned_throughput}

---

##### `warm_throughput`<sup>Optional</sup> <a name="warm_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes.property.warmThroughput"></a>

```python
warm_throughput: DynamodbTableGlobalSecondaryIndexesWarmThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a>

Represents the warm throughput value (in read units per second and write units per second) for the specified secondary index.

If you use this parameter, you must specify `ReadUnitsPerSecond`, `WriteUnitsPerSecond`, or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#warm_throughput DynamodbTable#warm_throughput}

---

### DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification <a name="DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification(
  enabled: bool | IResolvable = None,
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false). |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification.property.mode">mode</a></code> | <code>str</code> | Specifies the CloudWatch Contributor Insights mode for a table. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification.property.mode"></a>

```python
mode: str
```

- *Type:* str

Specifies the CloudWatch Contributor Insights mode for a table.

Valid values are `ACCESSED_AND_THROTTLED_KEYS` (tracks all access and throttled events) or `THROTTLED_KEYS` (tracks only throttled events). This setting determines what type of contributor insights data is collected for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#mode DynamodbTable#mode}

---

### DynamodbTableGlobalSecondaryIndexesKeySchema <a name="DynamodbTableGlobalSecondaryIndexesKeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema(
  attribute_name: str = None,
  key_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema.property.attributeName">attribute_name</a></code> | <code>str</code> | The name of a key attribute. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema.property.keyType">key_type</a></code> | <code>str</code> | The role that this key attribute will assume:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*. |

---

##### `attribute_name`<sup>Optional</sup> <a name="attribute_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

The name of a key attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

The role that this key attribute will assume:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*.

The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#key_type DynamodbTable#key_type}

---

### DynamodbTableGlobalSecondaryIndexesOnDemandThroughput <a name="DynamodbTableGlobalSecondaryIndexesOnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput(
  max_read_request_units: typing.Union[int, float] = None,
  max_write_request_units: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput.property.maxReadRequestUnits">max_read_request_units</a></code> | <code>typing.Union[int, float]</code> | Maximum number of read request units for the specified table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput.property.maxWriteRequestUnits">max_write_request_units</a></code> | <code>typing.Union[int, float]</code> | Maximum number of write request units for the specified table. |

---

##### `max_read_request_units`<sup>Optional</sup> <a name="max_read_request_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput.property.maxReadRequestUnits"></a>

```python
max_read_request_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of read request units for the specified table.

To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxReadRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxReadRequestUnits` to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#max_read_request_units DynamodbTable#max_read_request_units}

---

##### `max_write_request_units`<sup>Optional</sup> <a name="max_write_request_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput.property.maxWriteRequestUnits"></a>

```python
max_write_request_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of write request units for the specified table.

To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxWriteRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxWriteRequestUnits` to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#max_write_request_units DynamodbTable#max_write_request_units}

---

### DynamodbTableGlobalSecondaryIndexesProjection <a name="DynamodbTableGlobalSecondaryIndexesProjection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection(
  non_key_attributes: typing.List[str] = None,
  projection_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection.property.nonKeyAttributes">non_key_attributes</a></code> | <code>typing.List[str]</code> | Represents the non-key attribute names which will be projected into the index. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection.property.projectionType">projection_type</a></code> | <code>str</code> | The set of attributes that are projected into the index:   +  ``KEYS_ONLY`` - Only the index and primary keys are projected into the index. |

---

##### `non_key_attributes`<sup>Optional</sup> <a name="non_key_attributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection.property.nonKeyAttributes"></a>

```python
non_key_attributes: typing.List[str]
```

- *Type:* typing.List[str]

Represents the non-key attribute names which will be projected into the index.

For global and local secondary indexes, the total count of `NonKeyAttributes` summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of `INCLUDE`. You still can specify the ProjectionType of `ALL` to project all attributes from the source table, even if the table has more than 100 attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}

---

##### `projection_type`<sup>Optional</sup> <a name="projection_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection.property.projectionType"></a>

```python
projection_type: str
```

- *Type:* str

The set of attributes that are projected into the index:   +  ``KEYS_ONLY`` - Only the index and primary keys are projected into the index.

* `INCLUDE` - In addition to the attributes described in `KEYS_ONLY`, the secondary index will include other non-key attributes that you specify.
* `ALL` - All of the table attributes are projected into the index.

When using the DynamoDB console, `ALL` is selected by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#projection_type DynamodbTable#projection_type}

---

### DynamodbTableGlobalSecondaryIndexesProvisionedThroughput <a name="DynamodbTableGlobalSecondaryIndexesProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput(
  read_capacity_units: typing.Union[int, float] = None,
  write_capacity_units: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput.property.readCapacityUnits">read_capacity_units</a></code> | <code>typing.Union[int, float]</code> | The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ``ThrottlingException``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput.property.writeCapacityUnits">write_capacity_units</a></code> | <code>typing.Union[int, float]</code> | The maximum number of writes consumed per second before DynamoDB returns a ``ThrottlingException``. |

---

##### `read_capacity_units`<sup>Optional</sup> <a name="read_capacity_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput.property.readCapacityUnits"></a>

```python
read_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ``ThrottlingException``.

For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#read_capacity_units DynamodbTable#read_capacity_units}

---

##### `write_capacity_units`<sup>Optional</sup> <a name="write_capacity_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput.property.writeCapacityUnits"></a>

```python
write_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of writes consumed per second before DynamoDB returns a ``ThrottlingException``.

For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#write_capacity_units DynamodbTable#write_capacity_units}

---

### DynamodbTableGlobalSecondaryIndexesWarmThroughput <a name="DynamodbTableGlobalSecondaryIndexesWarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput(
  read_units_per_second: typing.Union[int, float] = None,
  write_units_per_second: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput.property.readUnitsPerSecond">read_units_per_second</a></code> | <code>typing.Union[int, float]</code> | Represents the number of read operations your base table can instantaneously support. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput.property.writeUnitsPerSecond">write_units_per_second</a></code> | <code>typing.Union[int, float]</code> | Represents the number of write operations your base table can instantaneously support. |

---

##### `read_units_per_second`<sup>Optional</sup> <a name="read_units_per_second" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput.property.readUnitsPerSecond"></a>

```python
read_units_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Represents the number of read operations your base table can instantaneously support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#read_units_per_second DynamodbTable#read_units_per_second}

---

##### `write_units_per_second`<sup>Optional</sup> <a name="write_units_per_second" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput.property.writeUnitsPerSecond"></a>

```python
write_units_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Represents the number of write operations your base table can instantaneously support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#write_units_per_second DynamodbTable#write_units_per_second}

---

### DynamodbTableImportSourceSpecification <a name="DynamodbTableImportSourceSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableImportSourceSpecification(
  input_compression_type: str = None,
  input_format: str = None,
  input_format_options: DynamodbTableImportSourceSpecificationInputFormatOptions = None,
  s3_bucket_source: DynamodbTableImportSourceSpecificationS3BucketSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputCompressionType">input_compression_type</a></code> | <code>str</code> | Type of compression to be used on the input coming from the imported table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputFormat">input_format</a></code> | <code>str</code> | The format of the source data. Valid values for ``ImportFormat`` are ``CSV``, ``DYNAMODB_JSON`` or ``ION``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputFormatOptions">input_format_options</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a></code> | Additional properties that specify how the input is formatted,. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.s3BucketSource">s3_bucket_source</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a></code> | The S3 bucket that provides the source for the import. |

---

##### `input_compression_type`<sup>Optional</sup> <a name="input_compression_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputCompressionType"></a>

```python
input_compression_type: str
```

- *Type:* str

Type of compression to be used on the input coming from the imported table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#input_compression_type DynamodbTable#input_compression_type}

---

##### `input_format`<sup>Optional</sup> <a name="input_format" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

The format of the source data. Valid values for ``ImportFormat`` are ``CSV``, ``DYNAMODB_JSON`` or ``ION``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#input_format DynamodbTable#input_format}

---

##### `input_format_options`<sup>Optional</sup> <a name="input_format_options" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.inputFormatOptions"></a>

```python
input_format_options: DynamodbTableImportSourceSpecificationInputFormatOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a>

Additional properties that specify how the input is formatted,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#input_format_options DynamodbTable#input_format_options}

---

##### `s3_bucket_source`<sup>Optional</sup> <a name="s3_bucket_source" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification.property.s3BucketSource"></a>

```python
s3_bucket_source: DynamodbTableImportSourceSpecificationS3BucketSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a>

The S3 bucket that provides the source for the import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#s3_bucket_source DynamodbTable#s3_bucket_source}

---

### DynamodbTableImportSourceSpecificationInputFormatOptions <a name="DynamodbTableImportSourceSpecificationInputFormatOptions" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions(
  csv: DynamodbTableImportSourceSpecificationInputFormatOptionsCsv = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a></code> | The options for imported source files in CSV format. The values are Delimiter and HeaderList. |

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions.property.csv"></a>

```python
csv: DynamodbTableImportSourceSpecificationInputFormatOptionsCsv
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a>

The options for imported source files in CSV format. The values are Delimiter and HeaderList.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#csv DynamodbTable#csv}

---

### DynamodbTableImportSourceSpecificationInputFormatOptionsCsv <a name="DynamodbTableImportSourceSpecificationInputFormatOptionsCsv" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv(
  delimiter: str = None,
  header_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv.property.delimiter">delimiter</a></code> | <code>str</code> | The delimiter used for separating items in the CSV file being imported. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv.property.headerList">header_list</a></code> | <code>typing.List[str]</code> | List of the headers used to specify a common header for all source CSV files being imported. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

The delimiter used for separating items in the CSV file being imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#delimiter DynamodbTable#delimiter}

---

##### `header_list`<sup>Optional</sup> <a name="header_list" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv.property.headerList"></a>

```python
header_list: typing.List[str]
```

- *Type:* typing.List[str]

List of the headers used to specify a common header for all source CSV files being imported.

If this field is specified then the first line of each CSV file is treated as data instead of the header. If this field is not specified the the first line of each CSV file is treated as the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#header_list DynamodbTable#header_list}

---

### DynamodbTableImportSourceSpecificationS3BucketSource <a name="DynamodbTableImportSourceSpecificationS3BucketSource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource(
  s3_bucket: str = None,
  s3_bucket_owner: str = None,
  s3_key_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | The S3 bucket that is being imported from. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3BucketOwner">s3_bucket_owner</a></code> | <code>str</code> | The account number of the S3 bucket that is being imported from. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | The key prefix shared by all S3 Objects that are being imported. |

---

##### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

The S3 bucket that is being imported from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#s3_bucket DynamodbTable#s3_bucket}

---

##### `s3_bucket_owner`<sup>Optional</sup> <a name="s3_bucket_owner" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3BucketOwner"></a>

```python
s3_bucket_owner: str
```

- *Type:* str

The account number of the S3 bucket that is being imported from.

If the bucket is owned by the requester this is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#s3_bucket_owner DynamodbTable#s3_bucket_owner}

---

##### `s3_key_prefix`<sup>Optional</sup> <a name="s3_key_prefix" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

The key prefix shared by all S3 Objects that are being imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#s3_key_prefix DynamodbTable#s3_key_prefix}

---

### DynamodbTableKinesisStreamSpecification <a name="DynamodbTableKinesisStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableKinesisStreamSpecification(
  approximate_creation_date_time_precision: str = None,
  stream_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification.property.approximateCreationDateTimePrecision">approximate_creation_date_time_precision</a></code> | <code>str</code> | The precision for the time and date that the stream was created. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification.property.streamArn">stream_arn</a></code> | <code>str</code> | The ARN for a specific Kinesis data stream.  Length Constraints: Minimum length of 37. Maximum length of 1024. |

---

##### `approximate_creation_date_time_precision`<sup>Optional</sup> <a name="approximate_creation_date_time_precision" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification.property.approximateCreationDateTimePrecision"></a>

```python
approximate_creation_date_time_precision: str
```

- *Type:* str

The precision for the time and date that the stream was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#approximate_creation_date_time_precision DynamodbTable#approximate_creation_date_time_precision}

---

##### `stream_arn`<sup>Optional</sup> <a name="stream_arn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

The ARN for a specific Kinesis data stream.  Length Constraints: Minimum length of 37. Maximum length of 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#stream_arn DynamodbTable#stream_arn}

---

### DynamodbTableLocalSecondaryIndexes <a name="DynamodbTableLocalSecondaryIndexes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableLocalSecondaryIndexes(
  index_name: str = None,
  key_schema: IResolvable | typing.List[DynamodbTableLocalSecondaryIndexesKeySchema] = None,
  projection: DynamodbTableLocalSecondaryIndexesProjection = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.indexName">index_name</a></code> | <code>str</code> | The name of the local secondary index. The name must be unique among all other indexes on this table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.keySchema">key_schema</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>]</code> | The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.projection">projection</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a></code> | Represents attributes that are copied (projected) from the table into the local secondary index. |

---

##### `index_name`<sup>Optional</sup> <a name="index_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

The name of the local secondary index. The name must be unique among all other indexes on this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#index_name DynamodbTable#index_name}

---

##### `key_schema`<sup>Optional</sup> <a name="key_schema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.keySchema"></a>

```python
key_schema: IResolvable | typing.List[DynamodbTableLocalSecondaryIndexesKeySchema]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>]

The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*.

The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#key_schema DynamodbTable#key_schema}

---

##### `projection`<sup>Optional</sup> <a name="projection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes.property.projection"></a>

```python
projection: DynamodbTableLocalSecondaryIndexesProjection
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a>

Represents attributes that are copied (projected) from the table into the local secondary index.

These are in addition to the primary key attributes and index key attributes, which are automatically projected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#projection DynamodbTable#projection}

---

### DynamodbTableLocalSecondaryIndexesKeySchema <a name="DynamodbTableLocalSecondaryIndexesKeySchema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema(
  attribute_name: str = None,
  key_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema.property.attributeName">attribute_name</a></code> | <code>str</code> | The name of a key attribute. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema.property.keyType">key_type</a></code> | <code>str</code> | The role that this key attribute will assume:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*. |

---

##### `attribute_name`<sup>Optional</sup> <a name="attribute_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

The name of a key attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

The role that this key attribute will assume:   +  ``HASH`` - partition key   +  ``RANGE`` - sort key      The partition key of an item is also known as its *hash attribute*.

The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#key_type DynamodbTable#key_type}

---

### DynamodbTableLocalSecondaryIndexesProjection <a name="DynamodbTableLocalSecondaryIndexesProjection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection(
  non_key_attributes: typing.List[str] = None,
  projection_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection.property.nonKeyAttributes">non_key_attributes</a></code> | <code>typing.List[str]</code> | Represents the non-key attribute names which will be projected into the index. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection.property.projectionType">projection_type</a></code> | <code>str</code> | The set of attributes that are projected into the index:   +  ``KEYS_ONLY`` - Only the index and primary keys are projected into the index. |

---

##### `non_key_attributes`<sup>Optional</sup> <a name="non_key_attributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection.property.nonKeyAttributes"></a>

```python
non_key_attributes: typing.List[str]
```

- *Type:* typing.List[str]

Represents the non-key attribute names which will be projected into the index.

For global and local secondary indexes, the total count of `NonKeyAttributes` summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of `INCLUDE`. You still can specify the ProjectionType of `ALL` to project all attributes from the source table, even if the table has more than 100 attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}

---

##### `projection_type`<sup>Optional</sup> <a name="projection_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection.property.projectionType"></a>

```python
projection_type: str
```

- *Type:* str

The set of attributes that are projected into the index:   +  ``KEYS_ONLY`` - Only the index and primary keys are projected into the index.

* `INCLUDE` - In addition to the attributes described in `KEYS_ONLY`, the secondary index will include other non-key attributes that you specify.
* `ALL` - All of the table attributes are projected into the index.

When using the DynamoDB console, `ALL` is selected by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#projection_type DynamodbTable#projection_type}

---

### DynamodbTableOnDemandThroughput <a name="DynamodbTableOnDemandThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableOnDemandThroughput(
  max_read_request_units: typing.Union[int, float] = None,
  max_write_request_units: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxReadRequestUnits">max_read_request_units</a></code> | <code>typing.Union[int, float]</code> | Maximum number of read request units for the specified table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxWriteRequestUnits">max_write_request_units</a></code> | <code>typing.Union[int, float]</code> | Maximum number of write request units for the specified table. |

---

##### `max_read_request_units`<sup>Optional</sup> <a name="max_read_request_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxReadRequestUnits"></a>

```python
max_read_request_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of read request units for the specified table.

To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxReadRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxReadRequestUnits` to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#max_read_request_units DynamodbTable#max_read_request_units}

---

##### `max_write_request_units`<sup>Optional</sup> <a name="max_write_request_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput.property.maxWriteRequestUnits"></a>

```python
max_write_request_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of write request units for the specified table.

To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxWriteRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxWriteRequestUnits` to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#max_write_request_units DynamodbTable#max_write_request_units}

---

### DynamodbTablePointInTimeRecoverySpecification <a name="DynamodbTablePointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTablePointInTimeRecoverySpecification(
  point_in_time_recovery_enabled: bool | IResolvable = None,
  recovery_period_in_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification.property.pointInTimeRecoveryEnabled">point_in_time_recovery_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether point in time recovery is enabled (true) or disabled (false) on the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification.property.recoveryPeriodInDays">recovery_period_in_days</a></code> | <code>typing.Union[int, float]</code> | The number of preceding days for which continuous backups are taken and maintained. |

---

##### `point_in_time_recovery_enabled`<sup>Optional</sup> <a name="point_in_time_recovery_enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification.property.pointInTimeRecoveryEnabled"></a>

```python
point_in_time_recovery_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#point_in_time_recovery_enabled DynamodbTable#point_in_time_recovery_enabled}

---

##### `recovery_period_in_days`<sup>Optional</sup> <a name="recovery_period_in_days" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification.property.recoveryPeriodInDays"></a>

```python
recovery_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of preceding days for which continuous backups are taken and maintained.

Your table data is only recoverable to any point-in-time from within the configured recovery period. This parameter is optional. If no value is provided, the value will default to 35.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#recovery_period_in_days DynamodbTable#recovery_period_in_days}

---

### DynamodbTableProvisionedThroughput <a name="DynamodbTableProvisionedThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableProvisionedThroughput(
  read_capacity_units: typing.Union[int, float] = None,
  write_capacity_units: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput.property.readCapacityUnits">read_capacity_units</a></code> | <code>typing.Union[int, float]</code> | The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ``ThrottlingException``. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput.property.writeCapacityUnits">write_capacity_units</a></code> | <code>typing.Union[int, float]</code> | The maximum number of writes consumed per second before DynamoDB returns a ``ThrottlingException``. |

---

##### `read_capacity_units`<sup>Optional</sup> <a name="read_capacity_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput.property.readCapacityUnits"></a>

```python
read_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ``ThrottlingException``.

For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#read_capacity_units DynamodbTable#read_capacity_units}

---

##### `write_capacity_units`<sup>Optional</sup> <a name="write_capacity_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput.property.writeCapacityUnits"></a>

```python
write_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of writes consumed per second before DynamoDB returns a ``ThrottlingException``.

For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#write_capacity_units DynamodbTable#write_capacity_units}

---

### DynamodbTableResourcePolicy <a name="DynamodbTableResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableResourcePolicy(
  policy_document: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy.property.policyDocument">policy_document</a></code> | <code>str</code> | A resource-based policy document that contains permissions to add to the specified DDB table, index, or both. |

---

##### `policy_document`<sup>Optional</sup> <a name="policy_document" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

A resource-based policy document that contains permissions to add to the specified DDB table, index, or both.

In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see [Using resource-based policies for](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#policy_document DynamodbTable#policy_document}

---

### DynamodbTableSseSpecification <a name="DynamodbTableSseSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableSseSpecification(
  kms_master_key_id: str = None,
  sse_enabled: bool | IResolvable = None,
  sse_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.kmsMasterKeyId">kms_master_key_id</a></code> | <code>str</code> | The KMS key that should be used for the KMS encryption. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.sseEnabled">sse_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether server-side encryption is done using an AWS managed key or an AWS owned key. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.sseType">sse_type</a></code> | <code>str</code> | Server-side encryption type. |

---

##### `kms_master_key_id`<sup>Optional</sup> <a name="kms_master_key_id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.kmsMasterKeyId"></a>

```python
kms_master_key_id: str
```

- *Type:* str

The KMS key that should be used for the KMS encryption.

To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB key `alias/aws/dynamodb`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#kms_master_key_id DynamodbTable#kms_master_key_id}

---

##### `sse_enabled`<sup>Optional</sup> <a name="sse_enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.sseEnabled"></a>

```python
sse_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether server-side encryption is done using an AWS managed key or an AWS owned key.

If enabled (true), server-side encryption type is set to `KMS` and an AWS managed key is used (KMS charges apply). If disabled (false) or not specified, server-side encryption is set to AWS owned key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#sse_enabled DynamodbTable#sse_enabled}

---

##### `sse_type`<sup>Optional</sup> <a name="sse_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification.property.sseType"></a>

```python
sse_type: str
```

- *Type:* str

Server-side encryption type.

The only supported value is:

* `KMS` - Server-side encryption that uses KMSlong. The key is stored in your account and is managed by KMS (KMS charges apply).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#sse_type DynamodbTable#sse_type}

---

### DynamodbTableStreamSpecification <a name="DynamodbTableStreamSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableStreamSpecification(
  resource_policy: DynamodbTableStreamSpecificationResourcePolicy = None,
  stream_view_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.property.resourcePolicy">resource_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a></code> | Creates or updates a resource-based policy document that contains the permissions for DDB resources, such as a table's streams. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.property.streamViewType">stream_view_type</a></code> | <code>str</code> | When an item in the table is modified, ``StreamViewType`` determines what information is written to the stream for this table. |

---

##### `resource_policy`<sup>Optional</sup> <a name="resource_policy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.property.resourcePolicy"></a>

```python
resource_policy: DynamodbTableStreamSpecificationResourcePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a>

Creates or updates a resource-based policy document that contains the permissions for DDB resources, such as a table's streams.

Resource-based policies let you define access permissions by specifying who has access to each resource, and the actions they are allowed to perform on each resource.
When you remove the `StreamSpecification` property from the template, DynamoDB disables the stream but retains any attached resource policy until the stream is deleted after 24 hours. When you modify the `StreamViewType` property, DynamoDB creates a new stream and retains the old stream's resource policy. The old stream and its resource policy are deleted after the 24-hour retention period.
In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see [Using resource-based policies for](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#resource_policy DynamodbTable#resource_policy}

---

##### `stream_view_type`<sup>Optional</sup> <a name="stream_view_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification.property.streamViewType"></a>

```python
stream_view_type: str
```

- *Type:* str

When an item in the table is modified, ``StreamViewType`` determines what information is written to the stream for this table.

Valid values for `StreamViewType` are:

* `KEYS_ONLY` - Only the key attributes of the modified item are written to the stream.
* `NEW_IMAGE` - The entire item, as it appears after it was modified, is written to the stream.
* `OLD_IMAGE` - The entire item, as it appeared before it was modified, is written to the stream.
* `NEW_AND_OLD_IMAGES` - Both the new and the old item images of the item are written to the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#stream_view_type DynamodbTable#stream_view_type}

---

### DynamodbTableStreamSpecificationResourcePolicy <a name="DynamodbTableStreamSpecificationResourcePolicy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy(
  policy_document: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy.property.policyDocument">policy_document</a></code> | <code>str</code> | A resource-based policy document that contains permissions to add to the specified DDB table, index, or both. |

---

##### `policy_document`<sup>Optional</sup> <a name="policy_document" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

A resource-based policy document that contains permissions to add to the specified DDB table, index, or both.

In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see [Using resource-based policies for](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#policy_document DynamodbTable#policy_document}

---

### DynamodbTableTags <a name="DynamodbTableTags" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags.property.value">value</a></code> | <code>str</code> | The value of the tag. Tag values are case-sensitive and can be null. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Tag keys are case sensitive. Each DynamoDB table can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#key DynamodbTable#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag. Tag values are case-sensitive and can be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#value DynamodbTable#value}

---

### DynamodbTableTimeToLiveSpecification <a name="DynamodbTableTimeToLiveSpecification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableTimeToLiveSpecification(
  attribute_name: str = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification.property.attributeName">attribute_name</a></code> | <code>str</code> | The name of the TTL attribute used to store the expiration time for items in the table. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether TTL is to be enabled (true) or disabled (false) on the table. |

---

##### `attribute_name`<sup>Optional</sup> <a name="attribute_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

The name of the TTL attribute used to store the expiration time for items in the table.

* The `AttributeName` property is required when enabling the TTL, or when TTL is already enabled.
* To update this property, you must first disable TTL and then enable TTL with the new attribute name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether TTL is to be enabled (true) or disabled (false) on the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}

---

### DynamodbTableWarmThroughput <a name="DynamodbTableWarmThroughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableWarmThroughput(
  read_units_per_second: typing.Union[int, float] = None,
  write_units_per_second: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput.property.readUnitsPerSecond">read_units_per_second</a></code> | <code>typing.Union[int, float]</code> | Represents the number of read operations your base table can instantaneously support. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput.property.writeUnitsPerSecond">write_units_per_second</a></code> | <code>typing.Union[int, float]</code> | Represents the number of write operations your base table can instantaneously support. |

---

##### `read_units_per_second`<sup>Optional</sup> <a name="read_units_per_second" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput.property.readUnitsPerSecond"></a>

```python
read_units_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Represents the number of read operations your base table can instantaneously support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#read_units_per_second DynamodbTable#read_units_per_second}

---

##### `write_units_per_second`<sup>Optional</sup> <a name="write_units_per_second" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput.property.writeUnitsPerSecond"></a>

```python
write_units_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Represents the number of write operations your base table can instantaneously support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#write_units_per_second DynamodbTable#write_units_per_second}

---

## Classes <a name="Classes" id="Classes"></a>

### DynamodbTableAttributeDefinitionsList <a name="DynamodbTableAttributeDefinitionsList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableAttributeDefinitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DynamodbTableAttributeDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DynamodbTableAttributeDefinitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>]

---


### DynamodbTableAttributeDefinitionsOutputReference <a name="DynamodbTableAttributeDefinitionsOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resetAttributeName">reset_attribute_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resetAttributeType">reset_attribute_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute_name` <a name="reset_attribute_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resetAttributeName"></a>

```python
def reset_attribute_name() -> None
```

##### `reset_attribute_type` <a name="reset_attribute_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.resetAttributeType"></a>

```python
def reset_attribute_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeNameInput">attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeTypeInput">attribute_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeType">attribute_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name_input`<sup>Optional</sup> <a name="attribute_name_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeNameInput"></a>

```python
attribute_name_input: str
```

- *Type:* str

---

##### `attribute_type_input`<sup>Optional</sup> <a name="attribute_type_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeTypeInput"></a>

```python
attribute_type_input: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `attribute_type`<sup>Required</sup> <a name="attribute_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.attributeType"></a>

```python
attribute_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableAttributeDefinitions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableAttributeDefinitions">DynamodbTableAttributeDefinitions</a>

---


### DynamodbTableContributorInsightsSpecificationOutputReference <a name="DynamodbTableContributorInsightsSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableContributorInsightsSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableContributorInsightsSpecification">DynamodbTableContributorInsightsSpecification</a>

---


### DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference <a name="DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a>

---


### DynamodbTableGlobalSecondaryIndexesKeySchemaList <a name="DynamodbTableGlobalSecondaryIndexesKeySchemaList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DynamodbTableGlobalSecondaryIndexesKeySchema]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>]

---


### DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference <a name="DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resetAttributeName">reset_attribute_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resetKeyType">reset_key_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute_name` <a name="reset_attribute_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resetAttributeName"></a>

```python
def reset_attribute_name() -> None
```

##### `reset_key_type` <a name="reset_key_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resetKeyType"></a>

```python
def reset_key_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeNameInput">attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name_input`<sup>Optional</sup> <a name="attribute_name_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeNameInput"></a>

```python
attribute_name_input: str
```

- *Type:* str

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableGlobalSecondaryIndexesKeySchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>

---


### DynamodbTableGlobalSecondaryIndexesList <a name="DynamodbTableGlobalSecondaryIndexesList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableGlobalSecondaryIndexesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DynamodbTableGlobalSecondaryIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DynamodbTableGlobalSecondaryIndexes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>]

---


### DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference <a name="DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resetMaxReadRequestUnits">reset_max_read_request_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resetMaxWriteRequestUnits">reset_max_write_request_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_read_request_units` <a name="reset_max_read_request_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resetMaxReadRequestUnits"></a>

```python
def reset_max_read_request_units() -> None
```

##### `reset_max_write_request_units` <a name="reset_max_write_request_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resetMaxWriteRequestUnits"></a>

```python
def reset_max_write_request_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput">max_read_request_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput">max_write_request_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxReadRequestUnits">max_read_request_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxWriteRequestUnits">max_write_request_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_read_request_units_input`<sup>Optional</sup> <a name="max_read_request_units_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput"></a>

```python
max_read_request_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_write_request_units_input`<sup>Optional</sup> <a name="max_write_request_units_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput"></a>

```python
max_write_request_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_read_request_units`<sup>Required</sup> <a name="max_read_request_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxReadRequestUnits"></a>

```python
max_read_request_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_write_request_units`<sup>Required</sup> <a name="max_write_request_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxWriteRequestUnits"></a>

```python
max_write_request_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableGlobalSecondaryIndexesOnDemandThroughput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a>

---


### DynamodbTableGlobalSecondaryIndexesOutputReference <a name="DynamodbTableGlobalSecondaryIndexesOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putContributorInsightsSpecification">put_contributor_insights_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putKeySchema">put_key_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putOnDemandThroughput">put_on_demand_throughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProjection">put_projection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProvisionedThroughput">put_provisioned_throughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putWarmThroughput">put_warm_throughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetContributorInsightsSpecification">reset_contributor_insights_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetIndexName">reset_index_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetKeySchema">reset_key_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetOnDemandThroughput">reset_on_demand_throughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetProjection">reset_projection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetProvisionedThroughput">reset_provisioned_throughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetWarmThroughput">reset_warm_throughput</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_contributor_insights_specification` <a name="put_contributor_insights_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putContributorInsightsSpecification"></a>

```python
def put_contributor_insights_specification(
  enabled: bool | IResolvable = None,
  mode: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putContributorInsightsSpecification.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putContributorInsightsSpecification.parameter.mode"></a>

- *Type:* str

Specifies the CloudWatch Contributor Insights mode for a table.

Valid values are `ACCESSED_AND_THROTTLED_KEYS` (tracks all access and throttled events) or `THROTTLED_KEYS` (tracks only throttled events). This setting determines what type of contributor insights data is collected for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#mode DynamodbTable#mode}

---

##### `put_key_schema` <a name="put_key_schema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putKeySchema"></a>

```python
def put_key_schema(
  value: IResolvable | typing.List[DynamodbTableGlobalSecondaryIndexesKeySchema]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putKeySchema.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>]

---

##### `put_on_demand_throughput` <a name="put_on_demand_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putOnDemandThroughput"></a>

```python
def put_on_demand_throughput(
  max_read_request_units: typing.Union[int, float] = None,
  max_write_request_units: typing.Union[int, float] = None
) -> None
```

###### `max_read_request_units`<sup>Optional</sup> <a name="max_read_request_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putOnDemandThroughput.parameter.maxReadRequestUnits"></a>

- *Type:* typing.Union[int, float]

Maximum number of read request units for the specified table.

To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxReadRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxReadRequestUnits` to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#max_read_request_units DynamodbTable#max_read_request_units}

---

###### `max_write_request_units`<sup>Optional</sup> <a name="max_write_request_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putOnDemandThroughput.parameter.maxWriteRequestUnits"></a>

- *Type:* typing.Union[int, float]

Maximum number of write request units for the specified table.

To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxWriteRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxWriteRequestUnits` to -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#max_write_request_units DynamodbTable#max_write_request_units}

---

##### `put_projection` <a name="put_projection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProjection"></a>

```python
def put_projection(
  non_key_attributes: typing.List[str] = None,
  projection_type: str = None
) -> None
```

###### `non_key_attributes`<sup>Optional</sup> <a name="non_key_attributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProjection.parameter.nonKeyAttributes"></a>

- *Type:* typing.List[str]

Represents the non-key attribute names which will be projected into the index.

For global and local secondary indexes, the total count of `NonKeyAttributes` summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of `INCLUDE`. You still can specify the ProjectionType of `ALL` to project all attributes from the source table, even if the table has more than 100 attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}

---

###### `projection_type`<sup>Optional</sup> <a name="projection_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProjection.parameter.projectionType"></a>

- *Type:* str

The set of attributes that are projected into the index:   +  ``KEYS_ONLY`` - Only the index and primary keys are projected into the index.

* `INCLUDE` - In addition to the attributes described in `KEYS_ONLY`, the secondary index will include other non-key attributes that you specify.
* `ALL` - All of the table attributes are projected into the index.

When using the DynamoDB console, `ALL` is selected by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#projection_type DynamodbTable#projection_type}

---

##### `put_provisioned_throughput` <a name="put_provisioned_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProvisionedThroughput"></a>

```python
def put_provisioned_throughput(
  read_capacity_units: typing.Union[int, float] = None,
  write_capacity_units: typing.Union[int, float] = None
) -> None
```

###### `read_capacity_units`<sup>Optional</sup> <a name="read_capacity_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProvisionedThroughput.parameter.readCapacityUnits"></a>

- *Type:* typing.Union[int, float]

The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ``ThrottlingException``.

For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#read_capacity_units DynamodbTable#read_capacity_units}

---

###### `write_capacity_units`<sup>Optional</sup> <a name="write_capacity_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putProvisionedThroughput.parameter.writeCapacityUnits"></a>

- *Type:* typing.Union[int, float]

The maximum number of writes consumed per second before DynamoDB returns a ``ThrottlingException``.

For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#write_capacity_units DynamodbTable#write_capacity_units}

---

##### `put_warm_throughput` <a name="put_warm_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putWarmThroughput"></a>

```python
def put_warm_throughput(
  read_units_per_second: typing.Union[int, float] = None,
  write_units_per_second: typing.Union[int, float] = None
) -> None
```

###### `read_units_per_second`<sup>Optional</sup> <a name="read_units_per_second" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putWarmThroughput.parameter.readUnitsPerSecond"></a>

- *Type:* typing.Union[int, float]

Represents the number of read operations your base table can instantaneously support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#read_units_per_second DynamodbTable#read_units_per_second}

---

###### `write_units_per_second`<sup>Optional</sup> <a name="write_units_per_second" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.putWarmThroughput.parameter.writeUnitsPerSecond"></a>

- *Type:* typing.Union[int, float]

Represents the number of write operations your base table can instantaneously support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#write_units_per_second DynamodbTable#write_units_per_second}

---

##### `reset_contributor_insights_specification` <a name="reset_contributor_insights_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetContributorInsightsSpecification"></a>

```python
def reset_contributor_insights_specification() -> None
```

##### `reset_index_name` <a name="reset_index_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetIndexName"></a>

```python
def reset_index_name() -> None
```

##### `reset_key_schema` <a name="reset_key_schema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetKeySchema"></a>

```python
def reset_key_schema() -> None
```

##### `reset_on_demand_throughput` <a name="reset_on_demand_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetOnDemandThroughput"></a>

```python
def reset_on_demand_throughput() -> None
```

##### `reset_projection` <a name="reset_projection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetProjection"></a>

```python
def reset_projection() -> None
```

##### `reset_provisioned_throughput` <a name="reset_provisioned_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetProvisionedThroughput"></a>

```python
def reset_provisioned_throughput() -> None
```

##### `reset_warm_throughput` <a name="reset_warm_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.resetWarmThroughput"></a>

```python
def reset_warm_throughput() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecification">contributor_insights_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.keySchema">key_schema</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList">DynamodbTableGlobalSecondaryIndexesKeySchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.onDemandThroughput">on_demand_throughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.projection">projection</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference">DynamodbTableGlobalSecondaryIndexesProjectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.provisionedThroughput">provisioned_throughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.warmThroughput">warm_throughput</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecificationInput">contributor_insights_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.indexNameInput">index_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.keySchemaInput">key_schema_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.onDemandThroughputInput">on_demand_throughput_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.projectionInput">projection_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.provisionedThroughputInput">provisioned_throughput_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.warmThroughputInput">warm_throughput_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.indexName">index_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contributor_insights_specification`<sup>Required</sup> <a name="contributor_insights_specification" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecification"></a>

```python
contributor_insights_specification: DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference</a>

---

##### `key_schema`<sup>Required</sup> <a name="key_schema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.keySchema"></a>

```python
key_schema: DynamodbTableGlobalSecondaryIndexesKeySchemaList
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchemaList">DynamodbTableGlobalSecondaryIndexesKeySchemaList</a>

---

##### `on_demand_throughput`<sup>Required</sup> <a name="on_demand_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.onDemandThroughput"></a>

```python
on_demand_throughput: DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference</a>

---

##### `projection`<sup>Required</sup> <a name="projection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.projection"></a>

```python
projection: DynamodbTableGlobalSecondaryIndexesProjectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference">DynamodbTableGlobalSecondaryIndexesProjectionOutputReference</a>

---

##### `provisioned_throughput`<sup>Required</sup> <a name="provisioned_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.provisionedThroughput"></a>

```python
provisioned_throughput: DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference</a>

---

##### `warm_throughput`<sup>Required</sup> <a name="warm_throughput" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.warmThroughput"></a>

```python
warm_throughput: DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference">DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference</a>

---

##### `contributor_insights_specification_input`<sup>Optional</sup> <a name="contributor_insights_specification_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecificationInput"></a>

```python
contributor_insights_specification_input: IResolvable | DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a>

---

##### `index_name_input`<sup>Optional</sup> <a name="index_name_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.indexNameInput"></a>

```python
index_name_input: str
```

- *Type:* str

---

##### `key_schema_input`<sup>Optional</sup> <a name="key_schema_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.keySchemaInput"></a>

```python
key_schema_input: IResolvable | typing.List[DynamodbTableGlobalSecondaryIndexesKeySchema]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesKeySchema">DynamodbTableGlobalSecondaryIndexesKeySchema</a>]

---

##### `on_demand_throughput_input`<sup>Optional</sup> <a name="on_demand_throughput_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.onDemandThroughputInput"></a>

```python
on_demand_throughput_input: IResolvable | DynamodbTableGlobalSecondaryIndexesOnDemandThroughput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a>

---

##### `projection_input`<sup>Optional</sup> <a name="projection_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.projectionInput"></a>

```python
projection_input: IResolvable | DynamodbTableGlobalSecondaryIndexesProjection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a>

---

##### `provisioned_throughput_input`<sup>Optional</sup> <a name="provisioned_throughput_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.provisionedThroughputInput"></a>

```python
provisioned_throughput_input: IResolvable | DynamodbTableGlobalSecondaryIndexesProvisionedThroughput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a>

---

##### `warm_throughput_input`<sup>Optional</sup> <a name="warm_throughput_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.warmThroughputInput"></a>

```python
warm_throughput_input: IResolvable | DynamodbTableGlobalSecondaryIndexesWarmThroughput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a>

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableGlobalSecondaryIndexes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexes">DynamodbTableGlobalSecondaryIndexes</a>

---


### DynamodbTableGlobalSecondaryIndexesProjectionOutputReference <a name="DynamodbTableGlobalSecondaryIndexesProjectionOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resetNonKeyAttributes">reset_non_key_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resetProjectionType">reset_projection_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_non_key_attributes` <a name="reset_non_key_attributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resetNonKeyAttributes"></a>

```python
def reset_non_key_attributes() -> None
```

##### `reset_projection_type` <a name="reset_projection_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resetProjectionType"></a>

```python
def reset_projection_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributesInput">non_key_attributes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionTypeInput">projection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes">non_key_attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionType">projection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `non_key_attributes_input`<sup>Optional</sup> <a name="non_key_attributes_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributesInput"></a>

```python
non_key_attributes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `projection_type_input`<sup>Optional</sup> <a name="projection_type_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionTypeInput"></a>

```python
projection_type_input: str
```

- *Type:* str

---

##### `non_key_attributes`<sup>Required</sup> <a name="non_key_attributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes"></a>

```python
non_key_attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `projection_type`<sup>Required</sup> <a name="projection_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionType"></a>

```python
projection_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableGlobalSecondaryIndexesProjection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProjection">DynamodbTableGlobalSecondaryIndexesProjection</a>

---


### DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference <a name="DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resetReadCapacityUnits">reset_read_capacity_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resetWriteCapacityUnits">reset_write_capacity_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read_capacity_units` <a name="reset_read_capacity_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resetReadCapacityUnits"></a>

```python
def reset_read_capacity_units() -> None
```

##### `reset_write_capacity_units` <a name="reset_write_capacity_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resetWriteCapacityUnits"></a>

```python
def reset_write_capacity_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.readCapacityUnitsInput">read_capacity_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.writeCapacityUnitsInput">write_capacity_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.readCapacityUnits">read_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.writeCapacityUnits">write_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_capacity_units_input`<sup>Optional</sup> <a name="read_capacity_units_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.readCapacityUnitsInput"></a>

```python
read_capacity_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `write_capacity_units_input`<sup>Optional</sup> <a name="write_capacity_units_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.writeCapacityUnitsInput"></a>

```python
write_capacity_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_capacity_units`<sup>Required</sup> <a name="read_capacity_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.readCapacityUnits"></a>

```python
read_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `write_capacity_units`<sup>Required</sup> <a name="write_capacity_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.writeCapacityUnits"></a>

```python
write_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableGlobalSecondaryIndexesProvisionedThroughput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a>

---


### DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference <a name="DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resetReadUnitsPerSecond">reset_read_units_per_second</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resetWriteUnitsPerSecond">reset_write_units_per_second</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read_units_per_second` <a name="reset_read_units_per_second" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resetReadUnitsPerSecond"></a>

```python
def reset_read_units_per_second() -> None
```

##### `reset_write_units_per_second` <a name="reset_write_units_per_second" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resetWriteUnitsPerSecond"></a>

```python
def reset_write_units_per_second() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecondInput">read_units_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecondInput">write_units_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecond">read_units_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecond">write_units_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_units_per_second_input`<sup>Optional</sup> <a name="read_units_per_second_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecondInput"></a>

```python
read_units_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `write_units_per_second_input`<sup>Optional</sup> <a name="write_units_per_second_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecondInput"></a>

```python
write_units_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_units_per_second`<sup>Required</sup> <a name="read_units_per_second" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecond"></a>

```python
read_units_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `write_units_per_second`<sup>Required</sup> <a name="write_units_per_second" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecond"></a>

```python
write_units_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableGlobalSecondaryIndexesWarmThroughput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableGlobalSecondaryIndexesWarmThroughput">DynamodbTableGlobalSecondaryIndexesWarmThroughput</a>

---


### DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference <a name="DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resetDelimiter">reset_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resetHeaderList">reset_header_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delimiter` <a name="reset_delimiter" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resetDelimiter"></a>

```python
def reset_delimiter() -> None
```

##### `reset_header_list` <a name="reset_header_list" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resetHeaderList"></a>

```python
def reset_header_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.delimiterInput">delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.headerListInput">header_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.delimiter">delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.headerList">header_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delimiter_input`<sup>Optional</sup> <a name="delimiter_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.delimiterInput"></a>

```python
delimiter_input: str
```

- *Type:* str

---

##### `header_list_input`<sup>Optional</sup> <a name="header_list_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.headerListInput"></a>

```python
header_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

---

##### `header_list`<sup>Required</sup> <a name="header_list" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.headerList"></a>

```python
header_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableImportSourceSpecificationInputFormatOptionsCsv
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a>

---


### DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference <a name="DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.putCsv">put_csv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resetCsv">reset_csv</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_csv` <a name="put_csv" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.putCsv"></a>

```python
def put_csv(
  delimiter: str = None,
  header_list: typing.List[str] = None
) -> None
```

###### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.putCsv.parameter.delimiter"></a>

- *Type:* str

The delimiter used for separating items in the CSV file being imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#delimiter DynamodbTable#delimiter}

---

###### `header_list`<sup>Optional</sup> <a name="header_list" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.putCsv.parameter.headerList"></a>

- *Type:* typing.List[str]

List of the headers used to specify a common header for all source CSV files being imported.

If this field is specified then the first line of each CSV file is treated as data instead of the header. If this field is not specified the the first line of each CSV file is treated as the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#header_list DynamodbTable#header_list}

---

##### `reset_csv` <a name="reset_csv" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resetCsv"></a>

```python
def reset_csv() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference">DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.csvInput">csv_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.csv"></a>

```python
csv: DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference">DynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference</a>

---

##### `csv_input`<sup>Optional</sup> <a name="csv_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.csvInput"></a>

```python
csv_input: IResolvable | DynamodbTableImportSourceSpecificationInputFormatOptionsCsv
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableImportSourceSpecificationInputFormatOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a>

---


### DynamodbTableImportSourceSpecificationOutputReference <a name="DynamodbTableImportSourceSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putInputFormatOptions">put_input_format_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putS3BucketSource">put_s3_bucket_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputCompressionType">reset_input_compression_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputFormat">reset_input_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputFormatOptions">reset_input_format_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetS3BucketSource">reset_s3_bucket_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_input_format_options` <a name="put_input_format_options" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putInputFormatOptions"></a>

```python
def put_input_format_options(
  csv: DynamodbTableImportSourceSpecificationInputFormatOptionsCsv = None
) -> None
```

###### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putInputFormatOptions.parameter.csv"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a>

The options for imported source files in CSV format. The values are Delimiter and HeaderList.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#csv DynamodbTable#csv}

---

##### `put_s3_bucket_source` <a name="put_s3_bucket_source" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putS3BucketSource"></a>

```python
def put_s3_bucket_source(
  s3_bucket: str = None,
  s3_bucket_owner: str = None,
  s3_key_prefix: str = None
) -> None
```

###### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putS3BucketSource.parameter.s3Bucket"></a>

- *Type:* str

The S3 bucket that is being imported from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#s3_bucket DynamodbTable#s3_bucket}

---

###### `s3_bucket_owner`<sup>Optional</sup> <a name="s3_bucket_owner" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putS3BucketSource.parameter.s3BucketOwner"></a>

- *Type:* str

The account number of the S3 bucket that is being imported from.

If the bucket is owned by the requester this is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#s3_bucket_owner DynamodbTable#s3_bucket_owner}

---

###### `s3_key_prefix`<sup>Optional</sup> <a name="s3_key_prefix" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.putS3BucketSource.parameter.s3KeyPrefix"></a>

- *Type:* str

The key prefix shared by all S3 Objects that are being imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#s3_key_prefix DynamodbTable#s3_key_prefix}

---

##### `reset_input_compression_type` <a name="reset_input_compression_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputCompressionType"></a>

```python
def reset_input_compression_type() -> None
```

##### `reset_input_format` <a name="reset_input_format" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputFormat"></a>

```python
def reset_input_format() -> None
```

##### `reset_input_format_options` <a name="reset_input_format_options" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetInputFormatOptions"></a>

```python
def reset_input_format_options() -> None
```

##### `reset_s3_bucket_source` <a name="reset_s3_bucket_source" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.resetS3BucketSource"></a>

```python
def reset_s3_bucket_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatOptions">input_format_options</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference">DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.s3BucketSource">s3_bucket_source</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference">DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputCompressionTypeInput">input_compression_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatInput">input_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatOptionsInput">input_format_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.s3BucketSourceInput">s3_bucket_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputCompressionType">input_compression_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormat">input_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_format_options`<sup>Required</sup> <a name="input_format_options" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatOptions"></a>

```python
input_format_options: DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference">DynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference</a>

---

##### `s3_bucket_source`<sup>Required</sup> <a name="s3_bucket_source" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.s3BucketSource"></a>

```python
s3_bucket_source: DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference">DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference</a>

---

##### `input_compression_type_input`<sup>Optional</sup> <a name="input_compression_type_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputCompressionTypeInput"></a>

```python
input_compression_type_input: str
```

- *Type:* str

---

##### `input_format_input`<sup>Optional</sup> <a name="input_format_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatInput"></a>

```python
input_format_input: str
```

- *Type:* str

---

##### `input_format_options_input`<sup>Optional</sup> <a name="input_format_options_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormatOptionsInput"></a>

```python
input_format_options_input: IResolvable | DynamodbTableImportSourceSpecificationInputFormatOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationInputFormatOptions">DynamodbTableImportSourceSpecificationInputFormatOptions</a>

---

##### `s3_bucket_source_input`<sup>Optional</sup> <a name="s3_bucket_source_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.s3BucketSourceInput"></a>

```python
s3_bucket_source_input: IResolvable | DynamodbTableImportSourceSpecificationS3BucketSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a>

---

##### `input_compression_type`<sup>Required</sup> <a name="input_compression_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputCompressionType"></a>

```python
input_compression_type: str
```

- *Type:* str

---

##### `input_format`<sup>Required</sup> <a name="input_format" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableImportSourceSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecification">DynamodbTableImportSourceSpecification</a>

---


### DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference <a name="DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3Bucket">reset_s3_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3BucketOwner">reset_s3_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3KeyPrefix">reset_s3_key_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_bucket` <a name="reset_s3_bucket" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3Bucket"></a>

```python
def reset_s3_bucket() -> None
```

##### `reset_s3_bucket_owner` <a name="reset_s3_bucket_owner" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3BucketOwner"></a>

```python
def reset_s3_bucket_owner() -> None
```

##### `reset_s3_key_prefix` <a name="reset_s3_key_prefix" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resetS3KeyPrefix"></a>

```python
def reset_s3_key_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketOwnerInput">s3_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3KeyPrefixInput">s3_key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketOwner">s3_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `s3_bucket_owner_input`<sup>Optional</sup> <a name="s3_bucket_owner_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketOwnerInput"></a>

```python
s3_bucket_owner_input: str
```

- *Type:* str

---

##### `s3_key_prefix_input`<sup>Optional</sup> <a name="s3_key_prefix_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3KeyPrefixInput"></a>

```python
s3_key_prefix_input: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_bucket_owner`<sup>Required</sup> <a name="s3_bucket_owner" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketOwner"></a>

```python
s3_bucket_owner: str
```

- *Type:* str

---

##### `s3_key_prefix`<sup>Required</sup> <a name="s3_key_prefix" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableImportSourceSpecificationS3BucketSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableImportSourceSpecificationS3BucketSource">DynamodbTableImportSourceSpecificationS3BucketSource</a>

---


### DynamodbTableKinesisStreamSpecificationOutputReference <a name="DynamodbTableKinesisStreamSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resetApproximateCreationDateTimePrecision">reset_approximate_creation_date_time_precision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resetStreamArn">reset_stream_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_approximate_creation_date_time_precision` <a name="reset_approximate_creation_date_time_precision" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resetApproximateCreationDateTimePrecision"></a>

```python
def reset_approximate_creation_date_time_precision() -> None
```

##### `reset_stream_arn` <a name="reset_stream_arn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.resetStreamArn"></a>

```python
def reset_stream_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecisionInput">approximate_creation_date_time_precision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.streamArnInput">stream_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecision">approximate_creation_date_time_precision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.streamArn">stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approximate_creation_date_time_precision_input`<sup>Optional</sup> <a name="approximate_creation_date_time_precision_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecisionInput"></a>

```python
approximate_creation_date_time_precision_input: str
```

- *Type:* str

---

##### `stream_arn_input`<sup>Optional</sup> <a name="stream_arn_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.streamArnInput"></a>

```python
stream_arn_input: str
```

- *Type:* str

---

##### `approximate_creation_date_time_precision`<sup>Required</sup> <a name="approximate_creation_date_time_precision" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecision"></a>

```python
approximate_creation_date_time_precision: str
```

- *Type:* str

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableKinesisStreamSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableKinesisStreamSpecification">DynamodbTableKinesisStreamSpecification</a>

---


### DynamodbTableLocalSecondaryIndexesKeySchemaList <a name="DynamodbTableLocalSecondaryIndexesKeySchemaList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DynamodbTableLocalSecondaryIndexesKeySchema]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>]

---


### DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference <a name="DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resetAttributeName">reset_attribute_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resetKeyType">reset_key_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute_name` <a name="reset_attribute_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resetAttributeName"></a>

```python
def reset_attribute_name() -> None
```

##### `reset_key_type` <a name="reset_key_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resetKeyType"></a>

```python
def reset_key_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeNameInput">attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name_input`<sup>Optional</sup> <a name="attribute_name_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeNameInput"></a>

```python
attribute_name_input: str
```

- *Type:* str

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableLocalSecondaryIndexesKeySchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>

---


### DynamodbTableLocalSecondaryIndexesList <a name="DynamodbTableLocalSecondaryIndexesList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableLocalSecondaryIndexesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DynamodbTableLocalSecondaryIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DynamodbTableLocalSecondaryIndexes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>]

---


### DynamodbTableLocalSecondaryIndexesOutputReference <a name="DynamodbTableLocalSecondaryIndexesOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putKeySchema">put_key_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putProjection">put_projection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetIndexName">reset_index_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetKeySchema">reset_key_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetProjection">reset_projection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_key_schema` <a name="put_key_schema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putKeySchema"></a>

```python
def put_key_schema(
  value: IResolvable | typing.List[DynamodbTableLocalSecondaryIndexesKeySchema]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putKeySchema.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>]

---

##### `put_projection` <a name="put_projection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putProjection"></a>

```python
def put_projection(
  non_key_attributes: typing.List[str] = None,
  projection_type: str = None
) -> None
```

###### `non_key_attributes`<sup>Optional</sup> <a name="non_key_attributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putProjection.parameter.nonKeyAttributes"></a>

- *Type:* typing.List[str]

Represents the non-key attribute names which will be projected into the index.

For global and local secondary indexes, the total count of `NonKeyAttributes` summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of `INCLUDE`. You still can specify the ProjectionType of `ALL` to project all attributes from the source table, even if the table has more than 100 attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}

---

###### `projection_type`<sup>Optional</sup> <a name="projection_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.putProjection.parameter.projectionType"></a>

- *Type:* str

The set of attributes that are projected into the index:   +  ``KEYS_ONLY`` - Only the index and primary keys are projected into the index.

* `INCLUDE` - In addition to the attributes described in `KEYS_ONLY`, the secondary index will include other non-key attributes that you specify.
* `ALL` - All of the table attributes are projected into the index.

When using the DynamoDB console, `ALL` is selected by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#projection_type DynamodbTable#projection_type}

---

##### `reset_index_name` <a name="reset_index_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetIndexName"></a>

```python
def reset_index_name() -> None
```

##### `reset_key_schema` <a name="reset_key_schema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetKeySchema"></a>

```python
def reset_key_schema() -> None
```

##### `reset_projection` <a name="reset_projection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.resetProjection"></a>

```python
def reset_projection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.keySchema">key_schema</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList">DynamodbTableLocalSecondaryIndexesKeySchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.projection">projection</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference">DynamodbTableLocalSecondaryIndexesProjectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.indexNameInput">index_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.keySchemaInput">key_schema_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.projectionInput">projection_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.indexName">index_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_schema`<sup>Required</sup> <a name="key_schema" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.keySchema"></a>

```python
key_schema: DynamodbTableLocalSecondaryIndexesKeySchemaList
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchemaList">DynamodbTableLocalSecondaryIndexesKeySchemaList</a>

---

##### `projection`<sup>Required</sup> <a name="projection" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.projection"></a>

```python
projection: DynamodbTableLocalSecondaryIndexesProjectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference">DynamodbTableLocalSecondaryIndexesProjectionOutputReference</a>

---

##### `index_name_input`<sup>Optional</sup> <a name="index_name_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.indexNameInput"></a>

```python
index_name_input: str
```

- *Type:* str

---

##### `key_schema_input`<sup>Optional</sup> <a name="key_schema_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.keySchemaInput"></a>

```python
key_schema_input: IResolvable | typing.List[DynamodbTableLocalSecondaryIndexesKeySchema]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesKeySchema">DynamodbTableLocalSecondaryIndexesKeySchema</a>]

---

##### `projection_input`<sup>Optional</sup> <a name="projection_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.projectionInput"></a>

```python
projection_input: IResolvable | DynamodbTableLocalSecondaryIndexesProjection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a>

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableLocalSecondaryIndexes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexes">DynamodbTableLocalSecondaryIndexes</a>

---


### DynamodbTableLocalSecondaryIndexesProjectionOutputReference <a name="DynamodbTableLocalSecondaryIndexesProjectionOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resetNonKeyAttributes">reset_non_key_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resetProjectionType">reset_projection_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_non_key_attributes` <a name="reset_non_key_attributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resetNonKeyAttributes"></a>

```python
def reset_non_key_attributes() -> None
```

##### `reset_projection_type` <a name="reset_projection_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.resetProjectionType"></a>

```python
def reset_projection_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributesInput">non_key_attributes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.projectionTypeInput">projection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes">non_key_attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.projectionType">projection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `non_key_attributes_input`<sup>Optional</sup> <a name="non_key_attributes_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributesInput"></a>

```python
non_key_attributes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `projection_type_input`<sup>Optional</sup> <a name="projection_type_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.projectionTypeInput"></a>

```python
projection_type_input: str
```

- *Type:* str

---

##### `non_key_attributes`<sup>Required</sup> <a name="non_key_attributes" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes"></a>

```python
non_key_attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `projection_type`<sup>Required</sup> <a name="projection_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.projectionType"></a>

```python
projection_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableLocalSecondaryIndexesProjection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableLocalSecondaryIndexesProjection">DynamodbTableLocalSecondaryIndexesProjection</a>

---


### DynamodbTableOnDemandThroughputOutputReference <a name="DynamodbTableOnDemandThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableOnDemandThroughputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxReadRequestUnits">reset_max_read_request_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxWriteRequestUnits">reset_max_write_request_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_read_request_units` <a name="reset_max_read_request_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxReadRequestUnits"></a>

```python
def reset_max_read_request_units() -> None
```

##### `reset_max_write_request_units` <a name="reset_max_write_request_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.resetMaxWriteRequestUnits"></a>

```python
def reset_max_write_request_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput">max_read_request_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput">max_write_request_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnits">max_read_request_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnits">max_write_request_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_read_request_units_input`<sup>Optional</sup> <a name="max_read_request_units_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput"></a>

```python
max_read_request_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_write_request_units_input`<sup>Optional</sup> <a name="max_write_request_units_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput"></a>

```python
max_write_request_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_read_request_units`<sup>Required</sup> <a name="max_read_request_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnits"></a>

```python
max_read_request_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_write_request_units`<sup>Required</sup> <a name="max_write_request_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnits"></a>

```python
max_write_request_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableOnDemandThroughput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableOnDemandThroughput">DynamodbTableOnDemandThroughput</a>

---


### DynamodbTablePointInTimeRecoverySpecificationOutputReference <a name="DynamodbTablePointInTimeRecoverySpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resetPointInTimeRecoveryEnabled">reset_point_in_time_recovery_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resetRecoveryPeriodInDays">reset_recovery_period_in_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_point_in_time_recovery_enabled` <a name="reset_point_in_time_recovery_enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resetPointInTimeRecoveryEnabled"></a>

```python
def reset_point_in_time_recovery_enabled() -> None
```

##### `reset_recovery_period_in_days` <a name="reset_recovery_period_in_days" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.resetRecoveryPeriodInDays"></a>

```python
def reset_recovery_period_in_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabledInput">point_in_time_recovery_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDaysInput">recovery_period_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabled">point_in_time_recovery_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDays">recovery_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `point_in_time_recovery_enabled_input`<sup>Optional</sup> <a name="point_in_time_recovery_enabled_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabledInput"></a>

```python
point_in_time_recovery_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `recovery_period_in_days_input`<sup>Optional</sup> <a name="recovery_period_in_days_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDaysInput"></a>

```python
recovery_period_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `point_in_time_recovery_enabled`<sup>Required</sup> <a name="point_in_time_recovery_enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabled"></a>

```python
point_in_time_recovery_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `recovery_period_in_days`<sup>Required</sup> <a name="recovery_period_in_days" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDays"></a>

```python
recovery_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTablePointInTimeRecoverySpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTablePointInTimeRecoverySpecification">DynamodbTablePointInTimeRecoverySpecification</a>

---


### DynamodbTableProvisionedThroughputOutputReference <a name="DynamodbTableProvisionedThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableProvisionedThroughputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resetReadCapacityUnits">reset_read_capacity_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resetWriteCapacityUnits">reset_write_capacity_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read_capacity_units` <a name="reset_read_capacity_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resetReadCapacityUnits"></a>

```python
def reset_read_capacity_units() -> None
```

##### `reset_write_capacity_units` <a name="reset_write_capacity_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.resetWriteCapacityUnits"></a>

```python
def reset_write_capacity_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.readCapacityUnitsInput">read_capacity_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.writeCapacityUnitsInput">write_capacity_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.readCapacityUnits">read_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.writeCapacityUnits">write_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_capacity_units_input`<sup>Optional</sup> <a name="read_capacity_units_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.readCapacityUnitsInput"></a>

```python
read_capacity_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `write_capacity_units_input`<sup>Optional</sup> <a name="write_capacity_units_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.writeCapacityUnitsInput"></a>

```python
write_capacity_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_capacity_units`<sup>Required</sup> <a name="read_capacity_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.readCapacityUnits"></a>

```python
read_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `write_capacity_units`<sup>Required</sup> <a name="write_capacity_units" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.writeCapacityUnits"></a>

```python
write_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableProvisionedThroughput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableProvisionedThroughput">DynamodbTableProvisionedThroughput</a>

---


### DynamodbTableResourcePolicyOutputReference <a name="DynamodbTableResourcePolicyOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableResourcePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.resetPolicyDocument">reset_policy_document</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_policy_document` <a name="reset_policy_document" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.resetPolicyDocument"></a>

```python
def reset_policy_document() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.policyDocumentInput">policy_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.policyDocument">policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_document_input`<sup>Optional</sup> <a name="policy_document_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.policyDocumentInput"></a>

```python
policy_document_input: str
```

- *Type:* str

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableResourcePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableResourcePolicy">DynamodbTableResourcePolicy</a>

---


### DynamodbTableSseSpecificationOutputReference <a name="DynamodbTableSseSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableSseSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetKmsMasterKeyId">reset_kms_master_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetSseEnabled">reset_sse_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetSseType">reset_sse_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_master_key_id` <a name="reset_kms_master_key_id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetKmsMasterKeyId"></a>

```python
def reset_kms_master_key_id() -> None
```

##### `reset_sse_enabled` <a name="reset_sse_enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetSseEnabled"></a>

```python
def reset_sse_enabled() -> None
```

##### `reset_sse_type` <a name="reset_sse_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.resetSseType"></a>

```python
def reset_sse_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.kmsMasterKeyIdInput">kms_master_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseEnabledInput">sse_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseTypeInput">sse_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.kmsMasterKeyId">kms_master_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseEnabled">sse_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseType">sse_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_master_key_id_input`<sup>Optional</sup> <a name="kms_master_key_id_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.kmsMasterKeyIdInput"></a>

```python
kms_master_key_id_input: str
```

- *Type:* str

---

##### `sse_enabled_input`<sup>Optional</sup> <a name="sse_enabled_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseEnabledInput"></a>

```python
sse_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `sse_type_input`<sup>Optional</sup> <a name="sse_type_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseTypeInput"></a>

```python
sse_type_input: str
```

- *Type:* str

---

##### `kms_master_key_id`<sup>Required</sup> <a name="kms_master_key_id" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.kmsMasterKeyId"></a>

```python
kms_master_key_id: str
```

- *Type:* str

---

##### `sse_enabled`<sup>Required</sup> <a name="sse_enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseEnabled"></a>

```python
sse_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `sse_type`<sup>Required</sup> <a name="sse_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.sseType"></a>

```python
sse_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableSseSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableSseSpecification">DynamodbTableSseSpecification</a>

---


### DynamodbTableStreamSpecificationOutputReference <a name="DynamodbTableStreamSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableStreamSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.putResourcePolicy">put_resource_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resetResourcePolicy">reset_resource_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resetStreamViewType">reset_stream_view_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_resource_policy` <a name="put_resource_policy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.putResourcePolicy"></a>

```python
def put_resource_policy(
  policy_document: str = None
) -> None
```

###### `policy_document`<sup>Optional</sup> <a name="policy_document" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.putResourcePolicy.parameter.policyDocument"></a>

- *Type:* str

A resource-based policy document that contains permissions to add to the specified DDB table, index, or both.

In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see [Using resource-based policies for](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dynamodb_table#policy_document DynamodbTable#policy_document}

---

##### `reset_resource_policy` <a name="reset_resource_policy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resetResourcePolicy"></a>

```python
def reset_resource_policy() -> None
```

##### `reset_stream_view_type` <a name="reset_stream_view_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.resetStreamViewType"></a>

```python
def reset_stream_view_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.resourcePolicy">resource_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference">DynamodbTableStreamSpecificationResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.resourcePolicyInput">resource_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.streamViewTypeInput">stream_view_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.streamViewType">stream_view_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_policy`<sup>Required</sup> <a name="resource_policy" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.resourcePolicy"></a>

```python
resource_policy: DynamodbTableStreamSpecificationResourcePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference">DynamodbTableStreamSpecificationResourcePolicyOutputReference</a>

---

##### `resource_policy_input`<sup>Optional</sup> <a name="resource_policy_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.resourcePolicyInput"></a>

```python
resource_policy_input: IResolvable | DynamodbTableStreamSpecificationResourcePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a>

---

##### `stream_view_type_input`<sup>Optional</sup> <a name="stream_view_type_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.streamViewTypeInput"></a>

```python
stream_view_type_input: str
```

- *Type:* str

---

##### `stream_view_type`<sup>Required</sup> <a name="stream_view_type" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.streamViewType"></a>

```python
stream_view_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableStreamSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecification">DynamodbTableStreamSpecification</a>

---


### DynamodbTableStreamSpecificationResourcePolicyOutputReference <a name="DynamodbTableStreamSpecificationResourcePolicyOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.resetPolicyDocument">reset_policy_document</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_policy_document` <a name="reset_policy_document" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.resetPolicyDocument"></a>

```python
def reset_policy_document() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.policyDocumentInput">policy_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.policyDocument">policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_document_input`<sup>Optional</sup> <a name="policy_document_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.policyDocumentInput"></a>

```python
policy_document_input: str
```

- *Type:* str

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableStreamSpecificationResourcePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableStreamSpecificationResourcePolicy">DynamodbTableStreamSpecificationResourcePolicy</a>

---


### DynamodbTableTagsList <a name="DynamodbTableTagsList" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DynamodbTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DynamodbTableTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>]

---


### DynamodbTableTagsOutputReference <a name="DynamodbTableTagsOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTags">DynamodbTableTags</a>

---


### DynamodbTableTimeToLiveSpecificationOutputReference <a name="DynamodbTableTimeToLiveSpecificationOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resetAttributeName">reset_attribute_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute_name` <a name="reset_attribute_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resetAttributeName"></a>

```python
def reset_attribute_name() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.attributeNameInput">attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name_input`<sup>Optional</sup> <a name="attribute_name_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.attributeNameInput"></a>

```python
attribute_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableTimeToLiveSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableTimeToLiveSpecification">DynamodbTableTimeToLiveSpecification</a>

---


### DynamodbTableWarmThroughputOutputReference <a name="DynamodbTableWarmThroughputOutputReference" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dynamodb_table

dynamodbTable.DynamodbTableWarmThroughputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resetReadUnitsPerSecond">reset_read_units_per_second</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resetWriteUnitsPerSecond">reset_write_units_per_second</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read_units_per_second` <a name="reset_read_units_per_second" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resetReadUnitsPerSecond"></a>

```python
def reset_read_units_per_second() -> None
```

##### `reset_write_units_per_second` <a name="reset_write_units_per_second" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.resetWriteUnitsPerSecond"></a>

```python
def reset_write_units_per_second() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.readUnitsPerSecondInput">read_units_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.writeUnitsPerSecondInput">write_units_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.readUnitsPerSecond">read_units_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.writeUnitsPerSecond">write_units_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_units_per_second_input`<sup>Optional</sup> <a name="read_units_per_second_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.readUnitsPerSecondInput"></a>

```python
read_units_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `write_units_per_second_input`<sup>Optional</sup> <a name="write_units_per_second_input" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.writeUnitsPerSecondInput"></a>

```python
write_units_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_units_per_second`<sup>Required</sup> <a name="read_units_per_second" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.readUnitsPerSecond"></a>

```python
read_units_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `write_units_per_second`<sup>Required</sup> <a name="write_units_per_second" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.writeUnitsPerSecond"></a>

```python
write_units_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamodbTableWarmThroughput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dynamodbTable.DynamodbTableWarmThroughput">DynamodbTableWarmThroughput</a>

---



