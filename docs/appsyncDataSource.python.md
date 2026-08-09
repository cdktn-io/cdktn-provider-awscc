# `appsyncDataSource` Submodule <a name="`appsyncDataSource` Submodule" id="@cdktn/provider-awscc.appsyncDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncDataSource <a name="AppsyncDataSource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source awscc_appsync_data_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSource(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_id: str,
  name: str,
  type: str,
  description: str = None,
  dynamo_db_config: AppsyncDataSourceDynamoDbConfig = None,
  elasticsearch_config: AppsyncDataSourceElasticsearchConfig = None,
  event_bridge_config: AppsyncDataSourceEventBridgeConfig = None,
  http_config: AppsyncDataSourceHttpConfig = None,
  lambda_config: AppsyncDataSourceLambdaConfig = None,
  metrics_config: str = None,
  open_search_service_config: AppsyncDataSourceOpenSearchServiceConfig = None,
  relational_database_config: AppsyncDataSourceRelationalDatabaseConfig = None,
  service_role_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.apiId">api_id</a></code> | <code>str</code> | Unique AWS AppSync GraphQL API identifier where this data source will be created. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.name">name</a></code> | <code>str</code> | Friendly name for you to identify your AppSync data source after creation. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.dynamoDbConfig">dynamo_db_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a></code> | AWS Region and TableName for an Amazon DynamoDB table in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.elasticsearchConfig">elasticsearch_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a></code> | AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.eventBridgeConfig">event_bridge_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a></code> | ARN for the EventBridge bus. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.httpConfig">http_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a></code> | Endpoints for an HTTP data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.lambdaConfig">lambda_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a></code> | An ARN of a Lambda function in valid ARN format. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.metricsConfig">metrics_config</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#metrics_config AppsyncDataSource#metrics_config}. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.openSearchServiceConfig">open_search_service_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a></code> | AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.relationalDatabaseConfig">relational_database_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a></code> | Relational Database configuration of the relational database data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | The AWS Identity and Access Management service role ARN for the data source. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.apiId"></a>

- *Type:* str

Unique AWS AppSync GraphQL API identifier where this data source will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#api_id AppsyncDataSource#api_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.name"></a>

- *Type:* str

Friendly name for you to identify your AppSync data source after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#name AppsyncDataSource#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.type"></a>

- *Type:* str

The type of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#type AppsyncDataSource#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.description"></a>

- *Type:* str

The description of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#description AppsyncDataSource#description}

---

##### `dynamo_db_config`<sup>Optional</sup> <a name="dynamo_db_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.dynamoDbConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a>

AWS Region and TableName for an Amazon DynamoDB table in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#dynamo_db_config AppsyncDataSource#dynamo_db_config}

---

##### `elasticsearch_config`<sup>Optional</sup> <a name="elasticsearch_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.elasticsearchConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a>

AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.

As of September 2021, Amazon Elasticsearch Service is Amazon OpenSearch Service. This property is deprecated. For new data sources, use OpenSearchServiceConfig to specify an OpenSearch Service data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#elasticsearch_config AppsyncDataSource#elasticsearch_config}

---

##### `event_bridge_config`<sup>Optional</sup> <a name="event_bridge_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.eventBridgeConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a>

ARN for the EventBridge bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#event_bridge_config AppsyncDataSource#event_bridge_config}

---

##### `http_config`<sup>Optional</sup> <a name="http_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.httpConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a>

Endpoints for an HTTP data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#http_config AppsyncDataSource#http_config}

---

##### `lambda_config`<sup>Optional</sup> <a name="lambda_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.lambdaConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a>

An ARN of a Lambda function in valid ARN format.

This can be the ARN of a Lambda function that exists in the current account or in another account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#lambda_config AppsyncDataSource#lambda_config}

---

##### `metrics_config`<sup>Optional</sup> <a name="metrics_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.metricsConfig"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#metrics_config AppsyncDataSource#metrics_config}.

---

##### `open_search_service_config`<sup>Optional</sup> <a name="open_search_service_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.openSearchServiceConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a>

AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#open_search_service_config AppsyncDataSource#open_search_service_config}

---

##### `relational_database_config`<sup>Optional</sup> <a name="relational_database_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.relationalDatabaseConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a>

Relational Database configuration of the relational database data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#relational_database_config AppsyncDataSource#relational_database_config}

---

##### `service_role_arn`<sup>Optional</sup> <a name="service_role_arn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.serviceRoleArn"></a>

- *Type:* str

The AWS Identity and Access Management service role ARN for the data source.

The system assumes this role when accessing the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#service_role_arn AppsyncDataSource#service_role_arn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putDynamoDbConfig">put_dynamo_db_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putElasticsearchConfig">put_elasticsearch_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putEventBridgeConfig">put_event_bridge_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putHttpConfig">put_http_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putLambdaConfig">put_lambda_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putOpenSearchServiceConfig">put_open_search_service_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putRelationalDatabaseConfig">put_relational_database_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetDynamoDbConfig">reset_dynamo_db_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetElasticsearchConfig">reset_elasticsearch_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetEventBridgeConfig">reset_event_bridge_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetHttpConfig">reset_http_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetLambdaConfig">reset_lambda_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetMetricsConfig">reset_metrics_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetOpenSearchServiceConfig">reset_open_search_service_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetRelationalDatabaseConfig">reset_relational_database_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetServiceRoleArn">reset_service_role_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dynamo_db_config` <a name="put_dynamo_db_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putDynamoDbConfig"></a>

```python
def put_dynamo_db_config(
  aws_region: str = None,
  delta_sync_config: AppsyncDataSourceDynamoDbConfigDeltaSyncConfig = None,
  table_name: str = None,
  use_caller_credentials: bool | IResolvable = None,
  versioned: bool | IResolvable = None
) -> None
```

###### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putDynamoDbConfig.parameter.awsRegion"></a>

- *Type:* str

The AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#aws_region AppsyncDataSource#aws_region}

---

###### `delta_sync_config`<sup>Optional</sup> <a name="delta_sync_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putDynamoDbConfig.parameter.deltaSyncConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a>

The DeltaSyncConfig for a versioned datasource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#delta_sync_config AppsyncDataSource#delta_sync_config}

---

###### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putDynamoDbConfig.parameter.tableName"></a>

- *Type:* str

The table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#table_name AppsyncDataSource#table_name}

---

###### `use_caller_credentials`<sup>Optional</sup> <a name="use_caller_credentials" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putDynamoDbConfig.parameter.useCallerCredentials"></a>

- *Type:* bool | cdktn.IResolvable

Set to TRUE to use AWS Identity and Access Management with this data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#use_caller_credentials AppsyncDataSource#use_caller_credentials}

---

###### `versioned`<sup>Optional</sup> <a name="versioned" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putDynamoDbConfig.parameter.versioned"></a>

- *Type:* bool | cdktn.IResolvable

Set to TRUE to use Conflict Detection and Resolution with this data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#versioned AppsyncDataSource#versioned}

---

##### `put_elasticsearch_config` <a name="put_elasticsearch_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putElasticsearchConfig"></a>

```python
def put_elasticsearch_config(
  aws_region: str = None,
  endpoint: str = None
) -> None
```

###### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putElasticsearchConfig.parameter.awsRegion"></a>

- *Type:* str

The AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#aws_region AppsyncDataSource#aws_region}

---

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putElasticsearchConfig.parameter.endpoint"></a>

- *Type:* str

The endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#endpoint AppsyncDataSource#endpoint}

---

##### `put_event_bridge_config` <a name="put_event_bridge_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putEventBridgeConfig"></a>

```python
def put_event_bridge_config(
  event_bus_arn: str = None
) -> None
```

###### `event_bus_arn`<sup>Optional</sup> <a name="event_bus_arn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putEventBridgeConfig.parameter.eventBusArn"></a>

- *Type:* str

ARN for the EventBridge bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#event_bus_arn AppsyncDataSource#event_bus_arn}

---

##### `put_http_config` <a name="put_http_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putHttpConfig"></a>

```python
def put_http_config(
  authorization_config: AppsyncDataSourceHttpConfigAuthorizationConfig = None,
  endpoint: str = None
) -> None
```

###### `authorization_config`<sup>Optional</sup> <a name="authorization_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putHttpConfig.parameter.authorizationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a>

The authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#authorization_config AppsyncDataSource#authorization_config}

---

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putHttpConfig.parameter.endpoint"></a>

- *Type:* str

The endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#endpoint AppsyncDataSource#endpoint}

---

##### `put_lambda_config` <a name="put_lambda_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putLambdaConfig"></a>

```python
def put_lambda_config(
  lambda_function_arn: str = None
) -> None
```

###### `lambda_function_arn`<sup>Optional</sup> <a name="lambda_function_arn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putLambdaConfig.parameter.lambdaFunctionArn"></a>

- *Type:* str

The ARN for the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#lambda_function_arn AppsyncDataSource#lambda_function_arn}

---

##### `put_open_search_service_config` <a name="put_open_search_service_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putOpenSearchServiceConfig"></a>

```python
def put_open_search_service_config(
  aws_region: str = None,
  endpoint: str = None
) -> None
```

###### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putOpenSearchServiceConfig.parameter.awsRegion"></a>

- *Type:* str

The AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#aws_region AppsyncDataSource#aws_region}

---

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putOpenSearchServiceConfig.parameter.endpoint"></a>

- *Type:* str

The endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#endpoint AppsyncDataSource#endpoint}

---

##### `put_relational_database_config` <a name="put_relational_database_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putRelationalDatabaseConfig"></a>

```python
def put_relational_database_config(
  rds_http_endpoint_config: AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig = None,
  relational_database_source_type: str = None
) -> None
```

###### `rds_http_endpoint_config`<sup>Optional</sup> <a name="rds_http_endpoint_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putRelationalDatabaseConfig.parameter.rdsHttpEndpointConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a>

Information about the Amazon RDS resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#rds_http_endpoint_config AppsyncDataSource#rds_http_endpoint_config}

---

###### `relational_database_source_type`<sup>Optional</sup> <a name="relational_database_source_type" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putRelationalDatabaseConfig.parameter.relationalDatabaseSourceType"></a>

- *Type:* str

The type of relational data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#relational_database_source_type AppsyncDataSource#relational_database_source_type}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dynamo_db_config` <a name="reset_dynamo_db_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetDynamoDbConfig"></a>

```python
def reset_dynamo_db_config() -> None
```

##### `reset_elasticsearch_config` <a name="reset_elasticsearch_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetElasticsearchConfig"></a>

```python
def reset_elasticsearch_config() -> None
```

##### `reset_event_bridge_config` <a name="reset_event_bridge_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetEventBridgeConfig"></a>

```python
def reset_event_bridge_config() -> None
```

##### `reset_http_config` <a name="reset_http_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetHttpConfig"></a>

```python
def reset_http_config() -> None
```

##### `reset_lambda_config` <a name="reset_lambda_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetLambdaConfig"></a>

```python
def reset_lambda_config() -> None
```

##### `reset_metrics_config` <a name="reset_metrics_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetMetricsConfig"></a>

```python
def reset_metrics_config() -> None
```

##### `reset_open_search_service_config` <a name="reset_open_search_service_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetOpenSearchServiceConfig"></a>

```python
def reset_open_search_service_config() -> None
```

##### `reset_relational_database_config` <a name="reset_relational_database_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetRelationalDatabaseConfig"></a>

```python
def reset_relational_database_config() -> None
```

##### `reset_service_role_arn` <a name="reset_service_role_arn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetServiceRoleArn"></a>

```python
def reset_service_role_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AppsyncDataSource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isConstruct"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformElement"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformResource"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AppsyncDataSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppsyncDataSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppsyncDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dataSourceArn">data_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dynamoDbConfig">dynamo_db_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference">AppsyncDataSourceDynamoDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.elasticsearchConfig">elasticsearch_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference">AppsyncDataSourceElasticsearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.eventBridgeConfig">event_bridge_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference">AppsyncDataSourceEventBridgeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.httpConfig">http_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference">AppsyncDataSourceHttpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lambdaConfig">lambda_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference">AppsyncDataSourceLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.openSearchServiceConfig">open_search_service_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference">AppsyncDataSourceOpenSearchServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.relationalDatabaseConfig">relational_database_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference">AppsyncDataSourceRelationalDatabaseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.apiIdInput">api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dynamoDbConfigInput">dynamo_db_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.elasticsearchConfigInput">elasticsearch_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.eventBridgeConfigInput">event_bridge_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.httpConfigInput">http_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lambdaConfigInput">lambda_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.metricsConfigInput">metrics_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.openSearchServiceConfigInput">open_search_service_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.relationalDatabaseConfigInput">relational_database_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.serviceRoleArnInput">service_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.metricsConfig">metrics_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_source_arn`<sup>Required</sup> <a name="data_source_arn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dataSourceArn"></a>

```python
data_source_arn: str
```

- *Type:* str

---

##### `dynamo_db_config`<sup>Required</sup> <a name="dynamo_db_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dynamoDbConfig"></a>

```python
dynamo_db_config: AppsyncDataSourceDynamoDbConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference">AppsyncDataSourceDynamoDbConfigOutputReference</a>

---

##### `elasticsearch_config`<sup>Required</sup> <a name="elasticsearch_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.elasticsearchConfig"></a>

```python
elasticsearch_config: AppsyncDataSourceElasticsearchConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference">AppsyncDataSourceElasticsearchConfigOutputReference</a>

---

##### `event_bridge_config`<sup>Required</sup> <a name="event_bridge_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.eventBridgeConfig"></a>

```python
event_bridge_config: AppsyncDataSourceEventBridgeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference">AppsyncDataSourceEventBridgeConfigOutputReference</a>

---

##### `http_config`<sup>Required</sup> <a name="http_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.httpConfig"></a>

```python
http_config: AppsyncDataSourceHttpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference">AppsyncDataSourceHttpConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lambda_config`<sup>Required</sup> <a name="lambda_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lambdaConfig"></a>

```python
lambda_config: AppsyncDataSourceLambdaConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference">AppsyncDataSourceLambdaConfigOutputReference</a>

---

##### `open_search_service_config`<sup>Required</sup> <a name="open_search_service_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.openSearchServiceConfig"></a>

```python
open_search_service_config: AppsyncDataSourceOpenSearchServiceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference">AppsyncDataSourceOpenSearchServiceConfigOutputReference</a>

---

##### `relational_database_config`<sup>Required</sup> <a name="relational_database_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.relationalDatabaseConfig"></a>

```python
relational_database_config: AppsyncDataSourceRelationalDatabaseConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference">AppsyncDataSourceRelationalDatabaseConfigOutputReference</a>

---

##### `api_id_input`<sup>Optional</sup> <a name="api_id_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.apiIdInput"></a>

```python
api_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dynamo_db_config_input`<sup>Optional</sup> <a name="dynamo_db_config_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dynamoDbConfigInput"></a>

```python
dynamo_db_config_input: IResolvable | AppsyncDataSourceDynamoDbConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a>

---

##### `elasticsearch_config_input`<sup>Optional</sup> <a name="elasticsearch_config_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.elasticsearchConfigInput"></a>

```python
elasticsearch_config_input: IResolvable | AppsyncDataSourceElasticsearchConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a>

---

##### `event_bridge_config_input`<sup>Optional</sup> <a name="event_bridge_config_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.eventBridgeConfigInput"></a>

```python
event_bridge_config_input: IResolvable | AppsyncDataSourceEventBridgeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a>

---

##### `http_config_input`<sup>Optional</sup> <a name="http_config_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.httpConfigInput"></a>

```python
http_config_input: IResolvable | AppsyncDataSourceHttpConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a>

---

##### `lambda_config_input`<sup>Optional</sup> <a name="lambda_config_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lambdaConfigInput"></a>

```python
lambda_config_input: IResolvable | AppsyncDataSourceLambdaConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a>

---

##### `metrics_config_input`<sup>Optional</sup> <a name="metrics_config_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.metricsConfigInput"></a>

```python
metrics_config_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `open_search_service_config_input`<sup>Optional</sup> <a name="open_search_service_config_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.openSearchServiceConfigInput"></a>

```python
open_search_service_config_input: IResolvable | AppsyncDataSourceOpenSearchServiceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a>

---

##### `relational_database_config_input`<sup>Optional</sup> <a name="relational_database_config_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.relationalDatabaseConfigInput"></a>

```python
relational_database_config_input: IResolvable | AppsyncDataSourceRelationalDatabaseConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a>

---

##### `service_role_arn_input`<sup>Optional</sup> <a name="service_role_arn_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.serviceRoleArnInput"></a>

```python
service_role_arn_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `metrics_config`<sup>Required</sup> <a name="metrics_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.metricsConfig"></a>

```python
metrics_config: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_role_arn`<sup>Required</sup> <a name="service_role_arn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.serviceRoleArn"></a>

```python
service_role_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncDataSourceConfig <a name="AppsyncDataSourceConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_id: str,
  name: str,
  type: str,
  description: str = None,
  dynamo_db_config: AppsyncDataSourceDynamoDbConfig = None,
  elasticsearch_config: AppsyncDataSourceElasticsearchConfig = None,
  event_bridge_config: AppsyncDataSourceEventBridgeConfig = None,
  http_config: AppsyncDataSourceHttpConfig = None,
  lambda_config: AppsyncDataSourceLambdaConfig = None,
  metrics_config: str = None,
  open_search_service_config: AppsyncDataSourceOpenSearchServiceConfig = None,
  relational_database_config: AppsyncDataSourceRelationalDatabaseConfig = None,
  service_role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.apiId">api_id</a></code> | <code>str</code> | Unique AWS AppSync GraphQL API identifier where this data source will be created. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.name">name</a></code> | <code>str</code> | Friendly name for you to identify your AppSync data source after creation. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.type">type</a></code> | <code>str</code> | The type of the data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.description">description</a></code> | <code>str</code> | The description of the data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.dynamoDbConfig">dynamo_db_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a></code> | AWS Region and TableName for an Amazon DynamoDB table in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.elasticsearchConfig">elasticsearch_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a></code> | AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.eventBridgeConfig">event_bridge_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a></code> | ARN for the EventBridge bus. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.httpConfig">http_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a></code> | Endpoints for an HTTP data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.lambdaConfig">lambda_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a></code> | An ARN of a Lambda function in valid ARN format. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.metricsConfig">metrics_config</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#metrics_config AppsyncDataSource#metrics_config}. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.openSearchServiceConfig">open_search_service_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a></code> | AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.relationalDatabaseConfig">relational_database_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a></code> | Relational Database configuration of the relational database data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | The AWS Identity and Access Management service role ARN for the data source. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

Unique AWS AppSync GraphQL API identifier where this data source will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#api_id AppsyncDataSource#api_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Friendly name for you to identify your AppSync data source after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#name AppsyncDataSource#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#type AppsyncDataSource#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#description AppsyncDataSource#description}

---

##### `dynamo_db_config`<sup>Optional</sup> <a name="dynamo_db_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.dynamoDbConfig"></a>

```python
dynamo_db_config: AppsyncDataSourceDynamoDbConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a>

AWS Region and TableName for an Amazon DynamoDB table in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#dynamo_db_config AppsyncDataSource#dynamo_db_config}

---

##### `elasticsearch_config`<sup>Optional</sup> <a name="elasticsearch_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.elasticsearchConfig"></a>

```python
elasticsearch_config: AppsyncDataSourceElasticsearchConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a>

AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.

As of September 2021, Amazon Elasticsearch Service is Amazon OpenSearch Service. This property is deprecated. For new data sources, use OpenSearchServiceConfig to specify an OpenSearch Service data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#elasticsearch_config AppsyncDataSource#elasticsearch_config}

---

##### `event_bridge_config`<sup>Optional</sup> <a name="event_bridge_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.eventBridgeConfig"></a>

```python
event_bridge_config: AppsyncDataSourceEventBridgeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a>

ARN for the EventBridge bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#event_bridge_config AppsyncDataSource#event_bridge_config}

---

##### `http_config`<sup>Optional</sup> <a name="http_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.httpConfig"></a>

```python
http_config: AppsyncDataSourceHttpConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a>

Endpoints for an HTTP data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#http_config AppsyncDataSource#http_config}

---

##### `lambda_config`<sup>Optional</sup> <a name="lambda_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.lambdaConfig"></a>

```python
lambda_config: AppsyncDataSourceLambdaConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a>

An ARN of a Lambda function in valid ARN format.

This can be the ARN of a Lambda function that exists in the current account or in another account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#lambda_config AppsyncDataSource#lambda_config}

---

##### `metrics_config`<sup>Optional</sup> <a name="metrics_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.metricsConfig"></a>

```python
metrics_config: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#metrics_config AppsyncDataSource#metrics_config}.

---

##### `open_search_service_config`<sup>Optional</sup> <a name="open_search_service_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.openSearchServiceConfig"></a>

```python
open_search_service_config: AppsyncDataSourceOpenSearchServiceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a>

AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#open_search_service_config AppsyncDataSource#open_search_service_config}

---

##### `relational_database_config`<sup>Optional</sup> <a name="relational_database_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.relationalDatabaseConfig"></a>

```python
relational_database_config: AppsyncDataSourceRelationalDatabaseConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a>

Relational Database configuration of the relational database data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#relational_database_config AppsyncDataSource#relational_database_config}

---

##### `service_role_arn`<sup>Optional</sup> <a name="service_role_arn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.serviceRoleArn"></a>

```python
service_role_arn: str
```

- *Type:* str

The AWS Identity and Access Management service role ARN for the data source.

The system assumes this role when accessing the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#service_role_arn AppsyncDataSource#service_role_arn}

---

### AppsyncDataSourceDynamoDbConfig <a name="AppsyncDataSourceDynamoDbConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceDynamoDbConfig(
  aws_region: str = None,
  delta_sync_config: AppsyncDataSourceDynamoDbConfigDeltaSyncConfig = None,
  table_name: str = None,
  use_caller_credentials: bool | IResolvable = None,
  versioned: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.awsRegion">aws_region</a></code> | <code>str</code> | The AWS Region. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.deltaSyncConfig">delta_sync_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a></code> | The DeltaSyncConfig for a versioned datasource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.tableName">table_name</a></code> | <code>str</code> | The table name. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.useCallerCredentials">use_caller_credentials</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to TRUE to use AWS Identity and Access Management with this data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.versioned">versioned</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to TRUE to use Conflict Detection and Resolution with this data source. |

---

##### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

The AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#aws_region AppsyncDataSource#aws_region}

---

##### `delta_sync_config`<sup>Optional</sup> <a name="delta_sync_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.deltaSyncConfig"></a>

```python
delta_sync_config: AppsyncDataSourceDynamoDbConfigDeltaSyncConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a>

The DeltaSyncConfig for a versioned datasource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#delta_sync_config AppsyncDataSource#delta_sync_config}

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

The table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#table_name AppsyncDataSource#table_name}

---

##### `use_caller_credentials`<sup>Optional</sup> <a name="use_caller_credentials" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.useCallerCredentials"></a>

```python
use_caller_credentials: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Set to TRUE to use AWS Identity and Access Management with this data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#use_caller_credentials AppsyncDataSource#use_caller_credentials}

---

##### `versioned`<sup>Optional</sup> <a name="versioned" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.versioned"></a>

```python
versioned: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Set to TRUE to use Conflict Detection and Resolution with this data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#versioned AppsyncDataSource#versioned}

---

### AppsyncDataSourceDynamoDbConfigDeltaSyncConfig <a name="AppsyncDataSourceDynamoDbConfigDeltaSyncConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig(
  base_table_ttl: str = None,
  delta_sync_table_name: str = None,
  delta_sync_table_ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.baseTableTtl">base_table_ttl</a></code> | <code>str</code> | The number of minutes that an Item is stored in the data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.deltaSyncTableName">delta_sync_table_name</a></code> | <code>str</code> | The Delta Sync table name. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.deltaSyncTableTtl">delta_sync_table_ttl</a></code> | <code>str</code> | The number of minutes that a Delta Sync log entry is stored in the Delta Sync table. |

---

##### `base_table_ttl`<sup>Optional</sup> <a name="base_table_ttl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.baseTableTtl"></a>

```python
base_table_ttl: str
```

- *Type:* str

The number of minutes that an Item is stored in the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#base_table_ttl AppsyncDataSource#base_table_ttl}

---

##### `delta_sync_table_name`<sup>Optional</sup> <a name="delta_sync_table_name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.deltaSyncTableName"></a>

```python
delta_sync_table_name: str
```

- *Type:* str

The Delta Sync table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#delta_sync_table_name AppsyncDataSource#delta_sync_table_name}

---

##### `delta_sync_table_ttl`<sup>Optional</sup> <a name="delta_sync_table_ttl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.deltaSyncTableTtl"></a>

```python
delta_sync_table_ttl: str
```

- *Type:* str

The number of minutes that a Delta Sync log entry is stored in the Delta Sync table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#delta_sync_table_ttl AppsyncDataSource#delta_sync_table_ttl}

---

### AppsyncDataSourceElasticsearchConfig <a name="AppsyncDataSourceElasticsearchConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceElasticsearchConfig(
  aws_region: str = None,
  endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig.property.awsRegion">aws_region</a></code> | <code>str</code> | The AWS Region. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig.property.endpoint">endpoint</a></code> | <code>str</code> | The endpoint. |

---

##### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

The AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#aws_region AppsyncDataSource#aws_region}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

The endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#endpoint AppsyncDataSource#endpoint}

---

### AppsyncDataSourceEventBridgeConfig <a name="AppsyncDataSourceEventBridgeConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceEventBridgeConfig(
  event_bus_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | ARN for the EventBridge bus. |

---

##### `event_bus_arn`<sup>Optional</sup> <a name="event_bus_arn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

ARN for the EventBridge bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#event_bus_arn AppsyncDataSource#event_bus_arn}

---

### AppsyncDataSourceHttpConfig <a name="AppsyncDataSourceHttpConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceHttpConfig(
  authorization_config: AppsyncDataSourceHttpConfigAuthorizationConfig = None,
  endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a></code> | The authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig.property.endpoint">endpoint</a></code> | <code>str</code> | The endpoint. |

---

##### `authorization_config`<sup>Optional</sup> <a name="authorization_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig.property.authorizationConfig"></a>

```python
authorization_config: AppsyncDataSourceHttpConfigAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a>

The authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#authorization_config AppsyncDataSource#authorization_config}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

The endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#endpoint AppsyncDataSource#endpoint}

---

### AppsyncDataSourceHttpConfigAuthorizationConfig <a name="AppsyncDataSourceHttpConfigAuthorizationConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig(
  authorization_type: str = None,
  aws_iam_config: AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig.property.authorizationType">authorization_type</a></code> | <code>str</code> | The authorization type that the HTTP endpoint requires. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig.property.awsIamConfig">aws_iam_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | The AWS Identity and Access Management settings. |

---

##### `authorization_type`<sup>Optional</sup> <a name="authorization_type" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

The authorization type that the HTTP endpoint requires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#authorization_type AppsyncDataSource#authorization_type}

---

##### `aws_iam_config`<sup>Optional</sup> <a name="aws_iam_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig.property.awsIamConfig"></a>

```python
aws_iam_config: AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a>

The AWS Identity and Access Management settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#aws_iam_config AppsyncDataSource#aws_iam_config}

---

### AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig <a name="AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig(
  signing_region: str = None,
  signing_service_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingRegion">signing_region</a></code> | <code>str</code> | The signing Region for AWS Identity and Access Management authorization. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingServiceName">signing_service_name</a></code> | <code>str</code> | The signing service name for AWS Identity and Access Management authorization. |

---

##### `signing_region`<sup>Optional</sup> <a name="signing_region" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingRegion"></a>

```python
signing_region: str
```

- *Type:* str

The signing Region for AWS Identity and Access Management authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#signing_region AppsyncDataSource#signing_region}

---

##### `signing_service_name`<sup>Optional</sup> <a name="signing_service_name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingServiceName"></a>

```python
signing_service_name: str
```

- *Type:* str

The signing service name for AWS Identity and Access Management authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#signing_service_name AppsyncDataSource#signing_service_name}

---

### AppsyncDataSourceLambdaConfig <a name="AppsyncDataSourceLambdaConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceLambdaConfig(
  lambda_function_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig.property.lambdaFunctionArn">lambda_function_arn</a></code> | <code>str</code> | The ARN for the Lambda function. |

---

##### `lambda_function_arn`<sup>Optional</sup> <a name="lambda_function_arn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig.property.lambdaFunctionArn"></a>

```python
lambda_function_arn: str
```

- *Type:* str

The ARN for the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#lambda_function_arn AppsyncDataSource#lambda_function_arn}

---

### AppsyncDataSourceOpenSearchServiceConfig <a name="AppsyncDataSourceOpenSearchServiceConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig(
  aws_region: str = None,
  endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig.property.awsRegion">aws_region</a></code> | <code>str</code> | The AWS Region. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig.property.endpoint">endpoint</a></code> | <code>str</code> | The endpoint. |

---

##### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

The AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#aws_region AppsyncDataSource#aws_region}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

The endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#endpoint AppsyncDataSource#endpoint}

---

### AppsyncDataSourceRelationalDatabaseConfig <a name="AppsyncDataSourceRelationalDatabaseConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig(
  rds_http_endpoint_config: AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig = None,
  relational_database_source_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig.property.rdsHttpEndpointConfig">rds_http_endpoint_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a></code> | Information about the Amazon RDS resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig.property.relationalDatabaseSourceType">relational_database_source_type</a></code> | <code>str</code> | The type of relational data source. |

---

##### `rds_http_endpoint_config`<sup>Optional</sup> <a name="rds_http_endpoint_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig.property.rdsHttpEndpointConfig"></a>

```python
rds_http_endpoint_config: AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a>

Information about the Amazon RDS resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#rds_http_endpoint_config AppsyncDataSource#rds_http_endpoint_config}

---

##### `relational_database_source_type`<sup>Optional</sup> <a name="relational_database_source_type" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig.property.relationalDatabaseSourceType"></a>

```python
relational_database_source_type: str
```

- *Type:* str

The type of relational data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#relational_database_source_type AppsyncDataSource#relational_database_source_type}

---

### AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig <a name="AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig(
  aws_region: str = None,
  aws_secret_store_arn: str = None,
  database_name: str = None,
  db_cluster_identifier: str = None,
  schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.awsRegion">aws_region</a></code> | <code>str</code> | AWS Region for RDS HTTP endpoint. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.awsSecretStoreArn">aws_secret_store_arn</a></code> | <code>str</code> | The ARN for database credentials stored in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.databaseName">database_name</a></code> | <code>str</code> | Logical database name. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | Amazon RDS cluster Amazon Resource Name (ARN). |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.schema">schema</a></code> | <code>str</code> | Logical schema name. |

---

##### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

AWS Region for RDS HTTP endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#aws_region AppsyncDataSource#aws_region}

---

##### `aws_secret_store_arn`<sup>Optional</sup> <a name="aws_secret_store_arn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.awsSecretStoreArn"></a>

```python
aws_secret_store_arn: str
```

- *Type:* str

The ARN for database credentials stored in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#aws_secret_store_arn AppsyncDataSource#aws_secret_store_arn}

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Logical database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#database_name AppsyncDataSource#database_name}

---

##### `db_cluster_identifier`<sup>Optional</sup> <a name="db_cluster_identifier" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.dbClusterIdentifier"></a>

```python
db_cluster_identifier: str
```

- *Type:* str

Amazon RDS cluster Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#db_cluster_identifier AppsyncDataSource#db_cluster_identifier}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

Logical schema name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#schema AppsyncDataSource#schema}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference <a name="AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetBaseTableTtl">reset_base_table_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableName">reset_delta_sync_table_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableTtl">reset_delta_sync_table_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_base_table_ttl` <a name="reset_base_table_ttl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetBaseTableTtl"></a>

```python
def reset_base_table_ttl() -> None
```

##### `reset_delta_sync_table_name` <a name="reset_delta_sync_table_name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableName"></a>

```python
def reset_delta_sync_table_name() -> None
```

##### `reset_delta_sync_table_ttl` <a name="reset_delta_sync_table_ttl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableTtl"></a>

```python
def reset_delta_sync_table_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.baseTableTtlInput">base_table_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableNameInput">delta_sync_table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtlInput">delta_sync_table_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.baseTableTtl">base_table_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableName">delta_sync_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtl">delta_sync_table_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_table_ttl_input`<sup>Optional</sup> <a name="base_table_ttl_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.baseTableTtlInput"></a>

```python
base_table_ttl_input: str
```

- *Type:* str

---

##### `delta_sync_table_name_input`<sup>Optional</sup> <a name="delta_sync_table_name_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableNameInput"></a>

```python
delta_sync_table_name_input: str
```

- *Type:* str

---

##### `delta_sync_table_ttl_input`<sup>Optional</sup> <a name="delta_sync_table_ttl_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtlInput"></a>

```python
delta_sync_table_ttl_input: str
```

- *Type:* str

---

##### `base_table_ttl`<sup>Required</sup> <a name="base_table_ttl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.baseTableTtl"></a>

```python
base_table_ttl: str
```

- *Type:* str

---

##### `delta_sync_table_name`<sup>Required</sup> <a name="delta_sync_table_name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableName"></a>

```python
delta_sync_table_name: str
```

- *Type:* str

---

##### `delta_sync_table_ttl`<sup>Required</sup> <a name="delta_sync_table_ttl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtl"></a>

```python
delta_sync_table_ttl: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncDataSourceDynamoDbConfigDeltaSyncConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a>

---


### AppsyncDataSourceDynamoDbConfigOutputReference <a name="AppsyncDataSourceDynamoDbConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.putDeltaSyncConfig">put_delta_sync_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetAwsRegion">reset_aws_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetDeltaSyncConfig">reset_delta_sync_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetTableName">reset_table_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetUseCallerCredentials">reset_use_caller_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetVersioned">reset_versioned</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_delta_sync_config` <a name="put_delta_sync_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.putDeltaSyncConfig"></a>

```python
def put_delta_sync_config(
  base_table_ttl: str = None,
  delta_sync_table_name: str = None,
  delta_sync_table_ttl: str = None
) -> None
```

###### `base_table_ttl`<sup>Optional</sup> <a name="base_table_ttl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.putDeltaSyncConfig.parameter.baseTableTtl"></a>

- *Type:* str

The number of minutes that an Item is stored in the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#base_table_ttl AppsyncDataSource#base_table_ttl}

---

###### `delta_sync_table_name`<sup>Optional</sup> <a name="delta_sync_table_name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.putDeltaSyncConfig.parameter.deltaSyncTableName"></a>

- *Type:* str

The Delta Sync table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#delta_sync_table_name AppsyncDataSource#delta_sync_table_name}

---

###### `delta_sync_table_ttl`<sup>Optional</sup> <a name="delta_sync_table_ttl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.putDeltaSyncConfig.parameter.deltaSyncTableTtl"></a>

- *Type:* str

The number of minutes that a Delta Sync log entry is stored in the Delta Sync table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#delta_sync_table_ttl AppsyncDataSource#delta_sync_table_ttl}

---

##### `reset_aws_region` <a name="reset_aws_region" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetAwsRegion"></a>

```python
def reset_aws_region() -> None
```

##### `reset_delta_sync_config` <a name="reset_delta_sync_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetDeltaSyncConfig"></a>

```python
def reset_delta_sync_config() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetTableName"></a>

```python
def reset_table_name() -> None
```

##### `reset_use_caller_credentials` <a name="reset_use_caller_credentials" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetUseCallerCredentials"></a>

```python
def reset_use_caller_credentials() -> None
```

##### `reset_versioned` <a name="reset_versioned" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetVersioned"></a>

```python
def reset_versioned() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.deltaSyncConfig">delta_sync_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference">AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.awsRegionInput">aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.deltaSyncConfigInput">delta_sync_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.useCallerCredentialsInput">use_caller_credentials_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.versionedInput">versioned_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.useCallerCredentials">use_caller_credentials</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.versioned">versioned</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delta_sync_config`<sup>Required</sup> <a name="delta_sync_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.deltaSyncConfig"></a>

```python
delta_sync_config: AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference">AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference</a>

---

##### `aws_region_input`<sup>Optional</sup> <a name="aws_region_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.awsRegionInput"></a>

```python
aws_region_input: str
```

- *Type:* str

---

##### `delta_sync_config_input`<sup>Optional</sup> <a name="delta_sync_config_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.deltaSyncConfigInput"></a>

```python
delta_sync_config_input: IResolvable | AppsyncDataSourceDynamoDbConfigDeltaSyncConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a>

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `use_caller_credentials_input`<sup>Optional</sup> <a name="use_caller_credentials_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.useCallerCredentialsInput"></a>

```python
use_caller_credentials_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `versioned_input`<sup>Optional</sup> <a name="versioned_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.versionedInput"></a>

```python
versioned_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `use_caller_credentials`<sup>Required</sup> <a name="use_caller_credentials" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.useCallerCredentials"></a>

```python
use_caller_credentials: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `versioned`<sup>Required</sup> <a name="versioned" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.versioned"></a>

```python
versioned: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncDataSourceDynamoDbConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a>

---


### AppsyncDataSourceElasticsearchConfigOutputReference <a name="AppsyncDataSourceElasticsearchConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resetAwsRegion">reset_aws_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_region` <a name="reset_aws_region" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resetAwsRegion"></a>

```python
def reset_aws_region() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.awsRegionInput">aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_region_input`<sup>Optional</sup> <a name="aws_region_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.awsRegionInput"></a>

```python
aws_region_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncDataSourceElasticsearchConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a>

---


### AppsyncDataSourceEventBridgeConfigOutputReference <a name="AppsyncDataSourceEventBridgeConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.resetEventBusArn">reset_event_bus_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_event_bus_arn` <a name="reset_event_bus_arn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.resetEventBusArn"></a>

```python
def reset_event_bus_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.eventBusArnInput">event_bus_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_bus_arn_input`<sup>Optional</sup> <a name="event_bus_arn_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.eventBusArnInput"></a>

```python
event_bus_arn_input: str
```

- *Type:* str

---

##### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncDataSourceEventBridgeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a>

---


### AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference <a name="AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningRegion">reset_signing_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningServiceName">reset_signing_service_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_signing_region` <a name="reset_signing_region" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningRegion"></a>

```python
def reset_signing_region() -> None
```

##### `reset_signing_service_name` <a name="reset_signing_service_name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningServiceName"></a>

```python
def reset_signing_service_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegionInput">signing_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceNameInput">signing_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegion">signing_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceName">signing_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `signing_region_input`<sup>Optional</sup> <a name="signing_region_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegionInput"></a>

```python
signing_region_input: str
```

- *Type:* str

---

##### `signing_service_name_input`<sup>Optional</sup> <a name="signing_service_name_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceNameInput"></a>

```python
signing_service_name_input: str
```

- *Type:* str

---

##### `signing_region`<sup>Required</sup> <a name="signing_region" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegion"></a>

```python
signing_region: str
```

- *Type:* str

---

##### `signing_service_name`<sup>Required</sup> <a name="signing_service_name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceName"></a>

```python
signing_service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---


### AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference <a name="AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig">put_aws_iam_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resetAuthorizationType">reset_authorization_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resetAwsIamConfig">reset_aws_iam_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_iam_config` <a name="put_aws_iam_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig"></a>

```python
def put_aws_iam_config(
  signing_region: str = None,
  signing_service_name: str = None
) -> None
```

###### `signing_region`<sup>Optional</sup> <a name="signing_region" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig.parameter.signingRegion"></a>

- *Type:* str

The signing Region for AWS Identity and Access Management authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#signing_region AppsyncDataSource#signing_region}

---

###### `signing_service_name`<sup>Optional</sup> <a name="signing_service_name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig.parameter.signingServiceName"></a>

- *Type:* str

The signing service name for AWS Identity and Access Management authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#signing_service_name AppsyncDataSource#signing_service_name}

---

##### `reset_authorization_type` <a name="reset_authorization_type" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resetAuthorizationType"></a>

```python
def reset_authorization_type() -> None
```

##### `reset_aws_iam_config` <a name="reset_aws_iam_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resetAwsIamConfig"></a>

```python
def reset_aws_iam_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfig">aws_iam_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.authorizationTypeInput">authorization_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfigInput">aws_iam_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.authorizationType">authorization_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_iam_config`<sup>Required</sup> <a name="aws_iam_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfig"></a>

```python
aws_iam_config: AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference</a>

---

##### `authorization_type_input`<sup>Optional</sup> <a name="authorization_type_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.authorizationTypeInput"></a>

```python
authorization_type_input: str
```

- *Type:* str

---

##### `aws_iam_config_input`<sup>Optional</sup> <a name="aws_iam_config_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfigInput"></a>

```python
aws_iam_config_input: IResolvable | AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---

##### `authorization_type`<sup>Required</sup> <a name="authorization_type" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncDataSourceHttpConfigAuthorizationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a>

---


### AppsyncDataSourceHttpConfigOutputReference <a name="AppsyncDataSourceHttpConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.putAuthorizationConfig">put_authorization_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resetAuthorizationConfig">reset_authorization_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorization_config` <a name="put_authorization_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.putAuthorizationConfig"></a>

```python
def put_authorization_config(
  authorization_type: str = None,
  aws_iam_config: AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig = None
) -> None
```

###### `authorization_type`<sup>Optional</sup> <a name="authorization_type" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.putAuthorizationConfig.parameter.authorizationType"></a>

- *Type:* str

The authorization type that the HTTP endpoint requires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#authorization_type AppsyncDataSource#authorization_type}

---

###### `aws_iam_config`<sup>Optional</sup> <a name="aws_iam_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.putAuthorizationConfig.parameter.awsIamConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a>

The AWS Identity and Access Management settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#aws_iam_config AppsyncDataSource#aws_iam_config}

---

##### `reset_authorization_config` <a name="reset_authorization_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resetAuthorizationConfig"></a>

```python
def reset_authorization_config() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference">AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.authorizationConfigInput">authorization_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.authorizationConfig"></a>

```python
authorization_config: AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference">AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference</a>

---

##### `authorization_config_input`<sup>Optional</sup> <a name="authorization_config_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.authorizationConfigInput"></a>

```python
authorization_config_input: IResolvable | AppsyncDataSourceHttpConfigAuthorizationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a>

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncDataSourceHttpConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a>

---


### AppsyncDataSourceLambdaConfigOutputReference <a name="AppsyncDataSourceLambdaConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.resetLambdaFunctionArn">reset_lambda_function_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lambda_function_arn` <a name="reset_lambda_function_arn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.resetLambdaFunctionArn"></a>

```python
def reset_lambda_function_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.lambdaFunctionArnInput">lambda_function_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.lambdaFunctionArn">lambda_function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_function_arn_input`<sup>Optional</sup> <a name="lambda_function_arn_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.lambdaFunctionArnInput"></a>

```python
lambda_function_arn_input: str
```

- *Type:* str

---

##### `lambda_function_arn`<sup>Required</sup> <a name="lambda_function_arn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.lambdaFunctionArn"></a>

```python
lambda_function_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncDataSourceLambdaConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a>

---


### AppsyncDataSourceOpenSearchServiceConfigOutputReference <a name="AppsyncDataSourceOpenSearchServiceConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resetAwsRegion">reset_aws_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_region` <a name="reset_aws_region" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resetAwsRegion"></a>

```python
def reset_aws_region() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.awsRegionInput">aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_region_input`<sup>Optional</sup> <a name="aws_region_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.awsRegionInput"></a>

```python
aws_region_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncDataSourceOpenSearchServiceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a>

---


### AppsyncDataSourceRelationalDatabaseConfigOutputReference <a name="AppsyncDataSourceRelationalDatabaseConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.putRdsHttpEndpointConfig">put_rds_http_endpoint_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resetRdsHttpEndpointConfig">reset_rds_http_endpoint_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resetRelationalDatabaseSourceType">reset_relational_database_source_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rds_http_endpoint_config` <a name="put_rds_http_endpoint_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.putRdsHttpEndpointConfig"></a>

```python
def put_rds_http_endpoint_config(
  aws_region: str = None,
  aws_secret_store_arn: str = None,
  database_name: str = None,
  db_cluster_identifier: str = None,
  schema: str = None
) -> None
```

###### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.putRdsHttpEndpointConfig.parameter.awsRegion"></a>

- *Type:* str

AWS Region for RDS HTTP endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#aws_region AppsyncDataSource#aws_region}

---

###### `aws_secret_store_arn`<sup>Optional</sup> <a name="aws_secret_store_arn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.putRdsHttpEndpointConfig.parameter.awsSecretStoreArn"></a>

- *Type:* str

The ARN for database credentials stored in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#aws_secret_store_arn AppsyncDataSource#aws_secret_store_arn}

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.putRdsHttpEndpointConfig.parameter.databaseName"></a>

- *Type:* str

Logical database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#database_name AppsyncDataSource#database_name}

---

###### `db_cluster_identifier`<sup>Optional</sup> <a name="db_cluster_identifier" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.putRdsHttpEndpointConfig.parameter.dbClusterIdentifier"></a>

- *Type:* str

Amazon RDS cluster Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#db_cluster_identifier AppsyncDataSource#db_cluster_identifier}

---

###### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.putRdsHttpEndpointConfig.parameter.schema"></a>

- *Type:* str

Logical schema name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appsync_data_source#schema AppsyncDataSource#schema}

---

##### `reset_rds_http_endpoint_config` <a name="reset_rds_http_endpoint_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resetRdsHttpEndpointConfig"></a>

```python
def reset_rds_http_endpoint_config() -> None
```

##### `reset_relational_database_source_type` <a name="reset_relational_database_source_type" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resetRelationalDatabaseSourceType"></a>

```python
def reset_relational_database_source_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.rdsHttpEndpointConfig">rds_http_endpoint_config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.rdsHttpEndpointConfigInput">rds_http_endpoint_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.relationalDatabaseSourceTypeInput">relational_database_source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.relationalDatabaseSourceType">relational_database_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rds_http_endpoint_config`<sup>Required</sup> <a name="rds_http_endpoint_config" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.rdsHttpEndpointConfig"></a>

```python
rds_http_endpoint_config: AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference</a>

---

##### `rds_http_endpoint_config_input`<sup>Optional</sup> <a name="rds_http_endpoint_config_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.rdsHttpEndpointConfigInput"></a>

```python
rds_http_endpoint_config_input: IResolvable | AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a>

---

##### `relational_database_source_type_input`<sup>Optional</sup> <a name="relational_database_source_type_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.relationalDatabaseSourceTypeInput"></a>

```python
relational_database_source_type_input: str
```

- *Type:* str

---

##### `relational_database_source_type`<sup>Required</sup> <a name="relational_database_source_type" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.relationalDatabaseSourceType"></a>

```python
relational_database_source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncDataSourceRelationalDatabaseConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a>

---


### AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference <a name="AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appsync_data_source

appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetAwsRegion">reset_aws_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetAwsSecretStoreArn">reset_aws_secret_store_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetDbClusterIdentifier">reset_db_cluster_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_region` <a name="reset_aws_region" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetAwsRegion"></a>

```python
def reset_aws_region() -> None
```

##### `reset_aws_secret_store_arn` <a name="reset_aws_secret_store_arn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetAwsSecretStoreArn"></a>

```python
def reset_aws_secret_store_arn() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_db_cluster_identifier` <a name="reset_db_cluster_identifier" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetDbClusterIdentifier"></a>

```python
def reset_db_cluster_identifier() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsRegionInput">aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsSecretStoreArnInput">aws_secret_store_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.dbClusterIdentifierInput">db_cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsSecretStoreArn">aws_secret_store_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_region_input`<sup>Optional</sup> <a name="aws_region_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsRegionInput"></a>

```python
aws_region_input: str
```

- *Type:* str

---

##### `aws_secret_store_arn_input`<sup>Optional</sup> <a name="aws_secret_store_arn_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsSecretStoreArnInput"></a>

```python
aws_secret_store_arn_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `db_cluster_identifier_input`<sup>Optional</sup> <a name="db_cluster_identifier_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.dbClusterIdentifierInput"></a>

```python
db_cluster_identifier_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `aws_secret_store_arn`<sup>Required</sup> <a name="aws_secret_store_arn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsSecretStoreArn"></a>

```python
aws_secret_store_arn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `db_cluster_identifier`<sup>Required</sup> <a name="db_cluster_identifier" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.dbClusterIdentifier"></a>

```python
db_cluster_identifier: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a>

---



