# `appsyncDataSource` Submodule <a name="`appsyncDataSource` Submodule" id="@cdktn/provider-awscc.appsyncDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncDataSource <a name="AppsyncDataSource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source awscc_appsync_data_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSource;

AppsyncDataSource.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiId(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .description(java.lang.String)
//  .dynamoDbConfig(AppsyncDataSourceDynamoDbConfig)
//  .elasticsearchConfig(AppsyncDataSourceElasticsearchConfig)
//  .eventBridgeConfig(AppsyncDataSourceEventBridgeConfig)
//  .httpConfig(AppsyncDataSourceHttpConfig)
//  .lambdaConfig(AppsyncDataSourceLambdaConfig)
//  .metricsConfig(java.lang.String)
//  .openSearchServiceConfig(AppsyncDataSourceOpenSearchServiceConfig)
//  .relationalDatabaseConfig(AppsyncDataSourceRelationalDatabaseConfig)
//  .serviceRoleArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.apiId">apiId</a></code> | <code>java.lang.String</code> | Unique AWS AppSync GraphQL API identifier where this data source will be created. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Friendly name for you to identify your AppSync data source after creation. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.dynamoDbConfig">dynamoDbConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a></code> | AWS Region and TableName for an Amazon DynamoDB table in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.elasticsearchConfig">elasticsearchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a></code> | AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.eventBridgeConfig">eventBridgeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a></code> | ARN for the EventBridge bus. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.httpConfig">httpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a></code> | Endpoints for an HTTP data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a></code> | An ARN of a Lambda function in valid ARN format. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.metricsConfig">metricsConfig</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#metrics_config AppsyncDataSource#metrics_config}. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.openSearchServiceConfig">openSearchServiceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a></code> | AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.relationalDatabaseConfig">relationalDatabaseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a></code> | Relational Database configuration of the relational database data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.serviceRoleArn">serviceRoleArn</a></code> | <code>java.lang.String</code> | The AWS Identity and Access Management service role ARN for the data source. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.apiId"></a>

- *Type:* java.lang.String

Unique AWS AppSync GraphQL API identifier where this data source will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#api_id AppsyncDataSource#api_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Friendly name for you to identify your AppSync data source after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#name AppsyncDataSource#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#type AppsyncDataSource#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#description AppsyncDataSource#description}

---

##### `dynamoDbConfig`<sup>Optional</sup> <a name="dynamoDbConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.dynamoDbConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a>

AWS Region and TableName for an Amazon DynamoDB table in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#dynamo_db_config AppsyncDataSource#dynamo_db_config}

---

##### `elasticsearchConfig`<sup>Optional</sup> <a name="elasticsearchConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.elasticsearchConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a>

AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.

As of September 2021, Amazon Elasticsearch Service is Amazon OpenSearch Service. This property is deprecated. For new data sources, use OpenSearchServiceConfig to specify an OpenSearch Service data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#elasticsearch_config AppsyncDataSource#elasticsearch_config}

---

##### `eventBridgeConfig`<sup>Optional</sup> <a name="eventBridgeConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.eventBridgeConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a>

ARN for the EventBridge bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#event_bridge_config AppsyncDataSource#event_bridge_config}

---

##### `httpConfig`<sup>Optional</sup> <a name="httpConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.httpConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a>

Endpoints for an HTTP data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#http_config AppsyncDataSource#http_config}

---

##### `lambdaConfig`<sup>Optional</sup> <a name="lambdaConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.lambdaConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a>

An ARN of a Lambda function in valid ARN format.

This can be the ARN of a Lambda function that exists in the current account or in another account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#lambda_config AppsyncDataSource#lambda_config}

---

##### `metricsConfig`<sup>Optional</sup> <a name="metricsConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.metricsConfig"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#metrics_config AppsyncDataSource#metrics_config}.

---

##### `openSearchServiceConfig`<sup>Optional</sup> <a name="openSearchServiceConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.openSearchServiceConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a>

AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#open_search_service_config AppsyncDataSource#open_search_service_config}

---

##### `relationalDatabaseConfig`<sup>Optional</sup> <a name="relationalDatabaseConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.relationalDatabaseConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a>

Relational Database configuration of the relational database data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#relational_database_config AppsyncDataSource#relational_database_config}

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="serviceRoleArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.Initializer.parameter.serviceRoleArn"></a>

- *Type:* java.lang.String

The AWS Identity and Access Management service role ARN for the data source.

The system assumes this role when accessing the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#service_role_arn AppsyncDataSource#service_role_arn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putDynamoDbConfig">putDynamoDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putElasticsearchConfig">putElasticsearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putEventBridgeConfig">putEventBridgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putHttpConfig">putHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putLambdaConfig">putLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putOpenSearchServiceConfig">putOpenSearchServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putRelationalDatabaseConfig">putRelationalDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetDynamoDbConfig">resetDynamoDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetElasticsearchConfig">resetElasticsearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetEventBridgeConfig">resetEventBridgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetHttpConfig">resetHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetLambdaConfig">resetLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetMetricsConfig">resetMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetOpenSearchServiceConfig">resetOpenSearchServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetRelationalDatabaseConfig">resetRelationalDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetServiceRoleArn">resetServiceRoleArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDynamoDbConfig` <a name="putDynamoDbConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putDynamoDbConfig"></a>

```java
public void putDynamoDbConfig(AppsyncDataSourceDynamoDbConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putDynamoDbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a>

---

##### `putElasticsearchConfig` <a name="putElasticsearchConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putElasticsearchConfig"></a>

```java
public void putElasticsearchConfig(AppsyncDataSourceElasticsearchConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putElasticsearchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a>

---

##### `putEventBridgeConfig` <a name="putEventBridgeConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putEventBridgeConfig"></a>

```java
public void putEventBridgeConfig(AppsyncDataSourceEventBridgeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putEventBridgeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a>

---

##### `putHttpConfig` <a name="putHttpConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putHttpConfig"></a>

```java
public void putHttpConfig(AppsyncDataSourceHttpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putHttpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a>

---

##### `putLambdaConfig` <a name="putLambdaConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putLambdaConfig"></a>

```java
public void putLambdaConfig(AppsyncDataSourceLambdaConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putLambdaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a>

---

##### `putOpenSearchServiceConfig` <a name="putOpenSearchServiceConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putOpenSearchServiceConfig"></a>

```java
public void putOpenSearchServiceConfig(AppsyncDataSourceOpenSearchServiceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putOpenSearchServiceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a>

---

##### `putRelationalDatabaseConfig` <a name="putRelationalDatabaseConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putRelationalDatabaseConfig"></a>

```java
public void putRelationalDatabaseConfig(AppsyncDataSourceRelationalDatabaseConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.putRelationalDatabaseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDynamoDbConfig` <a name="resetDynamoDbConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetDynamoDbConfig"></a>

```java
public void resetDynamoDbConfig()
```

##### `resetElasticsearchConfig` <a name="resetElasticsearchConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetElasticsearchConfig"></a>

```java
public void resetElasticsearchConfig()
```

##### `resetEventBridgeConfig` <a name="resetEventBridgeConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetEventBridgeConfig"></a>

```java
public void resetEventBridgeConfig()
```

##### `resetHttpConfig` <a name="resetHttpConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetHttpConfig"></a>

```java
public void resetHttpConfig()
```

##### `resetLambdaConfig` <a name="resetLambdaConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetLambdaConfig"></a>

```java
public void resetLambdaConfig()
```

##### `resetMetricsConfig` <a name="resetMetricsConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetMetricsConfig"></a>

```java
public void resetMetricsConfig()
```

##### `resetOpenSearchServiceConfig` <a name="resetOpenSearchServiceConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetOpenSearchServiceConfig"></a>

```java
public void resetOpenSearchServiceConfig()
```

##### `resetRelationalDatabaseConfig` <a name="resetRelationalDatabaseConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetRelationalDatabaseConfig"></a>

```java
public void resetRelationalDatabaseConfig()
```

##### `resetServiceRoleArn` <a name="resetServiceRoleArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.resetServiceRoleArn"></a>

```java
public void resetServiceRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppsyncDataSource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isConstruct"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSource;

AppsyncDataSource.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSource;

AppsyncDataSource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSource;

AppsyncDataSource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSource;

AppsyncDataSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppsyncDataSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AppsyncDataSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppsyncDataSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppsyncDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dataSourceArn">dataSourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dynamoDbConfig">dynamoDbConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference">AppsyncDataSourceDynamoDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.elasticsearchConfig">elasticsearchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference">AppsyncDataSourceElasticsearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.eventBridgeConfig">eventBridgeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference">AppsyncDataSourceEventBridgeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.httpConfig">httpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference">AppsyncDataSourceHttpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference">AppsyncDataSourceLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.openSearchServiceConfig">openSearchServiceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference">AppsyncDataSourceOpenSearchServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.relationalDatabaseConfig">relationalDatabaseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference">AppsyncDataSourceRelationalDatabaseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.apiIdInput">apiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dynamoDbConfigInput">dynamoDbConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.elasticsearchConfigInput">elasticsearchConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.eventBridgeConfigInput">eventBridgeConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.httpConfigInput">httpConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lambdaConfigInput">lambdaConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.metricsConfigInput">metricsConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.openSearchServiceConfigInput">openSearchServiceConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.relationalDatabaseConfigInput">relationalDatabaseConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.serviceRoleArnInput">serviceRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.metricsConfig">metricsConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.serviceRoleArn">serviceRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataSourceArn`<sup>Required</sup> <a name="dataSourceArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dataSourceArn"></a>

```java
public java.lang.String getDataSourceArn();
```

- *Type:* java.lang.String

---

##### `dynamoDbConfig`<sup>Required</sup> <a name="dynamoDbConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dynamoDbConfig"></a>

```java
public AppsyncDataSourceDynamoDbConfigOutputReference getDynamoDbConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference">AppsyncDataSourceDynamoDbConfigOutputReference</a>

---

##### `elasticsearchConfig`<sup>Required</sup> <a name="elasticsearchConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.elasticsearchConfig"></a>

```java
public AppsyncDataSourceElasticsearchConfigOutputReference getElasticsearchConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference">AppsyncDataSourceElasticsearchConfigOutputReference</a>

---

##### `eventBridgeConfig`<sup>Required</sup> <a name="eventBridgeConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.eventBridgeConfig"></a>

```java
public AppsyncDataSourceEventBridgeConfigOutputReference getEventBridgeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference">AppsyncDataSourceEventBridgeConfigOutputReference</a>

---

##### `httpConfig`<sup>Required</sup> <a name="httpConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.httpConfig"></a>

```java
public AppsyncDataSourceHttpConfigOutputReference getHttpConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference">AppsyncDataSourceHttpConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lambdaConfig`<sup>Required</sup> <a name="lambdaConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lambdaConfig"></a>

```java
public AppsyncDataSourceLambdaConfigOutputReference getLambdaConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference">AppsyncDataSourceLambdaConfigOutputReference</a>

---

##### `openSearchServiceConfig`<sup>Required</sup> <a name="openSearchServiceConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.openSearchServiceConfig"></a>

```java
public AppsyncDataSourceOpenSearchServiceConfigOutputReference getOpenSearchServiceConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference">AppsyncDataSourceOpenSearchServiceConfigOutputReference</a>

---

##### `relationalDatabaseConfig`<sup>Required</sup> <a name="relationalDatabaseConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.relationalDatabaseConfig"></a>

```java
public AppsyncDataSourceRelationalDatabaseConfigOutputReference getRelationalDatabaseConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference">AppsyncDataSourceRelationalDatabaseConfigOutputReference</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.apiIdInput"></a>

```java
public java.lang.String getApiIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dynamoDbConfigInput`<sup>Optional</sup> <a name="dynamoDbConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.dynamoDbConfigInput"></a>

```java
public IResolvable|AppsyncDataSourceDynamoDbConfig getDynamoDbConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a>

---

##### `elasticsearchConfigInput`<sup>Optional</sup> <a name="elasticsearchConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.elasticsearchConfigInput"></a>

```java
public IResolvable|AppsyncDataSourceElasticsearchConfig getElasticsearchConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a>

---

##### `eventBridgeConfigInput`<sup>Optional</sup> <a name="eventBridgeConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.eventBridgeConfigInput"></a>

```java
public IResolvable|AppsyncDataSourceEventBridgeConfig getEventBridgeConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a>

---

##### `httpConfigInput`<sup>Optional</sup> <a name="httpConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.httpConfigInput"></a>

```java
public IResolvable|AppsyncDataSourceHttpConfig getHttpConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a>

---

##### `lambdaConfigInput`<sup>Optional</sup> <a name="lambdaConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.lambdaConfigInput"></a>

```java
public IResolvable|AppsyncDataSourceLambdaConfig getLambdaConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a>

---

##### `metricsConfigInput`<sup>Optional</sup> <a name="metricsConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.metricsConfigInput"></a>

```java
public java.lang.String getMetricsConfigInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `openSearchServiceConfigInput`<sup>Optional</sup> <a name="openSearchServiceConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.openSearchServiceConfigInput"></a>

```java
public IResolvable|AppsyncDataSourceOpenSearchServiceConfig getOpenSearchServiceConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a>

---

##### `relationalDatabaseConfigInput`<sup>Optional</sup> <a name="relationalDatabaseConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.relationalDatabaseConfigInput"></a>

```java
public IResolvable|AppsyncDataSourceRelationalDatabaseConfig getRelationalDatabaseConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a>

---

##### `serviceRoleArnInput`<sup>Optional</sup> <a name="serviceRoleArnInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.serviceRoleArnInput"></a>

```java
public java.lang.String getServiceRoleArnInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `metricsConfig`<sup>Required</sup> <a name="metricsConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.metricsConfig"></a>

```java
public java.lang.String getMetricsConfig();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.serviceRoleArn"></a>

```java
public java.lang.String getServiceRoleArn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncDataSourceConfig <a name="AppsyncDataSourceConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceConfig;

AppsyncDataSourceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiId(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .description(java.lang.String)
//  .dynamoDbConfig(AppsyncDataSourceDynamoDbConfig)
//  .elasticsearchConfig(AppsyncDataSourceElasticsearchConfig)
//  .eventBridgeConfig(AppsyncDataSourceEventBridgeConfig)
//  .httpConfig(AppsyncDataSourceHttpConfig)
//  .lambdaConfig(AppsyncDataSourceLambdaConfig)
//  .metricsConfig(java.lang.String)
//  .openSearchServiceConfig(AppsyncDataSourceOpenSearchServiceConfig)
//  .relationalDatabaseConfig(AppsyncDataSourceRelationalDatabaseConfig)
//  .serviceRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.apiId">apiId</a></code> | <code>java.lang.String</code> | Unique AWS AppSync GraphQL API identifier where this data source will be created. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Friendly name for you to identify your AppSync data source after creation. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.dynamoDbConfig">dynamoDbConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a></code> | AWS Region and TableName for an Amazon DynamoDB table in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.elasticsearchConfig">elasticsearchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a></code> | AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.eventBridgeConfig">eventBridgeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a></code> | ARN for the EventBridge bus. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.httpConfig">httpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a></code> | Endpoints for an HTTP data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a></code> | An ARN of a Lambda function in valid ARN format. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.metricsConfig">metricsConfig</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#metrics_config AppsyncDataSource#metrics_config}. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.openSearchServiceConfig">openSearchServiceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a></code> | AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.relationalDatabaseConfig">relationalDatabaseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a></code> | Relational Database configuration of the relational database data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.serviceRoleArn">serviceRoleArn</a></code> | <code>java.lang.String</code> | The AWS Identity and Access Management service role ARN for the data source. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

Unique AWS AppSync GraphQL API identifier where this data source will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#api_id AppsyncDataSource#api_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Friendly name for you to identify your AppSync data source after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#name AppsyncDataSource#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#type AppsyncDataSource#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#description AppsyncDataSource#description}

---

##### `dynamoDbConfig`<sup>Optional</sup> <a name="dynamoDbConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.dynamoDbConfig"></a>

```java
public AppsyncDataSourceDynamoDbConfig getDynamoDbConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a>

AWS Region and TableName for an Amazon DynamoDB table in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#dynamo_db_config AppsyncDataSource#dynamo_db_config}

---

##### `elasticsearchConfig`<sup>Optional</sup> <a name="elasticsearchConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.elasticsearchConfig"></a>

```java
public AppsyncDataSourceElasticsearchConfig getElasticsearchConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a>

AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.

As of September 2021, Amazon Elasticsearch Service is Amazon OpenSearch Service. This property is deprecated. For new data sources, use OpenSearchServiceConfig to specify an OpenSearch Service data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#elasticsearch_config AppsyncDataSource#elasticsearch_config}

---

##### `eventBridgeConfig`<sup>Optional</sup> <a name="eventBridgeConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.eventBridgeConfig"></a>

```java
public AppsyncDataSourceEventBridgeConfig getEventBridgeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a>

ARN for the EventBridge bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#event_bridge_config AppsyncDataSource#event_bridge_config}

---

##### `httpConfig`<sup>Optional</sup> <a name="httpConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.httpConfig"></a>

```java
public AppsyncDataSourceHttpConfig getHttpConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a>

Endpoints for an HTTP data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#http_config AppsyncDataSource#http_config}

---

##### `lambdaConfig`<sup>Optional</sup> <a name="lambdaConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.lambdaConfig"></a>

```java
public AppsyncDataSourceLambdaConfig getLambdaConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a>

An ARN of a Lambda function in valid ARN format.

This can be the ARN of a Lambda function that exists in the current account or in another account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#lambda_config AppsyncDataSource#lambda_config}

---

##### `metricsConfig`<sup>Optional</sup> <a name="metricsConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.metricsConfig"></a>

```java
public java.lang.String getMetricsConfig();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#metrics_config AppsyncDataSource#metrics_config}.

---

##### `openSearchServiceConfig`<sup>Optional</sup> <a name="openSearchServiceConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.openSearchServiceConfig"></a>

```java
public AppsyncDataSourceOpenSearchServiceConfig getOpenSearchServiceConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a>

AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#open_search_service_config AppsyncDataSource#open_search_service_config}

---

##### `relationalDatabaseConfig`<sup>Optional</sup> <a name="relationalDatabaseConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.relationalDatabaseConfig"></a>

```java
public AppsyncDataSourceRelationalDatabaseConfig getRelationalDatabaseConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a>

Relational Database configuration of the relational database data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#relational_database_config AppsyncDataSource#relational_database_config}

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="serviceRoleArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceConfig.property.serviceRoleArn"></a>

```java
public java.lang.String getServiceRoleArn();
```

- *Type:* java.lang.String

The AWS Identity and Access Management service role ARN for the data source.

The system assumes this role when accessing the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#service_role_arn AppsyncDataSource#service_role_arn}

---

### AppsyncDataSourceDynamoDbConfig <a name="AppsyncDataSourceDynamoDbConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceDynamoDbConfig;

AppsyncDataSourceDynamoDbConfig.builder()
//  .awsRegion(java.lang.String)
//  .deltaSyncConfig(AppsyncDataSourceDynamoDbConfigDeltaSyncConfig)
//  .tableName(java.lang.String)
//  .useCallerCredentials(java.lang.Boolean|IResolvable)
//  .versioned(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | The AWS Region. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.deltaSyncConfig">deltaSyncConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a></code> | The DeltaSyncConfig for a versioned datasource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.tableName">tableName</a></code> | <code>java.lang.String</code> | The table name. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.useCallerCredentials">useCallerCredentials</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set to TRUE to use AWS Identity and Access Management with this data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.versioned">versioned</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set to TRUE to use Conflict Detection and Resolution with this data source. |

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

The AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#aws_region AppsyncDataSource#aws_region}

---

##### `deltaSyncConfig`<sup>Optional</sup> <a name="deltaSyncConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.deltaSyncConfig"></a>

```java
public AppsyncDataSourceDynamoDbConfigDeltaSyncConfig getDeltaSyncConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a>

The DeltaSyncConfig for a versioned datasource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#delta_sync_config AppsyncDataSource#delta_sync_config}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

The table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#table_name AppsyncDataSource#table_name}

---

##### `useCallerCredentials`<sup>Optional</sup> <a name="useCallerCredentials" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.useCallerCredentials"></a>

```java
public java.lang.Boolean|IResolvable getUseCallerCredentials();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set to TRUE to use AWS Identity and Access Management with this data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#use_caller_credentials AppsyncDataSource#use_caller_credentials}

---

##### `versioned`<sup>Optional</sup> <a name="versioned" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig.property.versioned"></a>

```java
public java.lang.Boolean|IResolvable getVersioned();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set to TRUE to use Conflict Detection and Resolution with this data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#versioned AppsyncDataSource#versioned}

---

### AppsyncDataSourceDynamoDbConfigDeltaSyncConfig <a name="AppsyncDataSourceDynamoDbConfigDeltaSyncConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig;

AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.builder()
//  .baseTableTtl(java.lang.String)
//  .deltaSyncTableName(java.lang.String)
//  .deltaSyncTableTtl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.baseTableTtl">baseTableTtl</a></code> | <code>java.lang.String</code> | The number of minutes that an Item is stored in the data source. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.deltaSyncTableName">deltaSyncTableName</a></code> | <code>java.lang.String</code> | The Delta Sync table name. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.deltaSyncTableTtl">deltaSyncTableTtl</a></code> | <code>java.lang.String</code> | The number of minutes that a Delta Sync log entry is stored in the Delta Sync table. |

---

##### `baseTableTtl`<sup>Optional</sup> <a name="baseTableTtl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.baseTableTtl"></a>

```java
public java.lang.String getBaseTableTtl();
```

- *Type:* java.lang.String

The number of minutes that an Item is stored in the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#base_table_ttl AppsyncDataSource#base_table_ttl}

---

##### `deltaSyncTableName`<sup>Optional</sup> <a name="deltaSyncTableName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.deltaSyncTableName"></a>

```java
public java.lang.String getDeltaSyncTableName();
```

- *Type:* java.lang.String

The Delta Sync table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#delta_sync_table_name AppsyncDataSource#delta_sync_table_name}

---

##### `deltaSyncTableTtl`<sup>Optional</sup> <a name="deltaSyncTableTtl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig.property.deltaSyncTableTtl"></a>

```java
public java.lang.String getDeltaSyncTableTtl();
```

- *Type:* java.lang.String

The number of minutes that a Delta Sync log entry is stored in the Delta Sync table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#delta_sync_table_ttl AppsyncDataSource#delta_sync_table_ttl}

---

### AppsyncDataSourceElasticsearchConfig <a name="AppsyncDataSourceElasticsearchConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceElasticsearchConfig;

AppsyncDataSourceElasticsearchConfig.builder()
//  .awsRegion(java.lang.String)
//  .endpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | The AWS Region. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | The endpoint. |

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

The AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#aws_region AppsyncDataSource#aws_region}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

The endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#endpoint AppsyncDataSource#endpoint}

---

### AppsyncDataSourceEventBridgeConfig <a name="AppsyncDataSourceEventBridgeConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceEventBridgeConfig;

AppsyncDataSourceEventBridgeConfig.builder()
//  .eventBusArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig.property.eventBusArn">eventBusArn</a></code> | <code>java.lang.String</code> | ARN for the EventBridge bus. |

---

##### `eventBusArn`<sup>Optional</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig.property.eventBusArn"></a>

```java
public java.lang.String getEventBusArn();
```

- *Type:* java.lang.String

ARN for the EventBridge bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#event_bus_arn AppsyncDataSource#event_bus_arn}

---

### AppsyncDataSourceHttpConfig <a name="AppsyncDataSourceHttpConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceHttpConfig;

AppsyncDataSourceHttpConfig.builder()
//  .authorizationConfig(AppsyncDataSourceHttpConfigAuthorizationConfig)
//  .endpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a></code> | The authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | The endpoint. |

---

##### `authorizationConfig`<sup>Optional</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig.property.authorizationConfig"></a>

```java
public AppsyncDataSourceHttpConfigAuthorizationConfig getAuthorizationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a>

The authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#authorization_config AppsyncDataSource#authorization_config}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

The endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#endpoint AppsyncDataSource#endpoint}

---

### AppsyncDataSourceHttpConfigAuthorizationConfig <a name="AppsyncDataSourceHttpConfigAuthorizationConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceHttpConfigAuthorizationConfig;

AppsyncDataSourceHttpConfigAuthorizationConfig.builder()
//  .authorizationType(java.lang.String)
//  .awsIamConfig(AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | The authorization type that the HTTP endpoint requires. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig.property.awsIamConfig">awsIamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | The AWS Identity and Access Management settings. |

---

##### `authorizationType`<sup>Optional</sup> <a name="authorizationType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

The authorization type that the HTTP endpoint requires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#authorization_type AppsyncDataSource#authorization_type}

---

##### `awsIamConfig`<sup>Optional</sup> <a name="awsIamConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig.property.awsIamConfig"></a>

```java
public AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig getAwsIamConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a>

The AWS Identity and Access Management settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#aws_iam_config AppsyncDataSource#aws_iam_config}

---

### AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig <a name="AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig;

AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.builder()
//  .signingRegion(java.lang.String)
//  .signingServiceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingRegion">signingRegion</a></code> | <code>java.lang.String</code> | The signing Region for AWS Identity and Access Management authorization. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingServiceName">signingServiceName</a></code> | <code>java.lang.String</code> | The signing service name for AWS Identity and Access Management authorization. |

---

##### `signingRegion`<sup>Optional</sup> <a name="signingRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingRegion"></a>

```java
public java.lang.String getSigningRegion();
```

- *Type:* java.lang.String

The signing Region for AWS Identity and Access Management authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#signing_region AppsyncDataSource#signing_region}

---

##### `signingServiceName`<sup>Optional</sup> <a name="signingServiceName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingServiceName"></a>

```java
public java.lang.String getSigningServiceName();
```

- *Type:* java.lang.String

The signing service name for AWS Identity and Access Management authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#signing_service_name AppsyncDataSource#signing_service_name}

---

### AppsyncDataSourceLambdaConfig <a name="AppsyncDataSourceLambdaConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceLambdaConfig;

AppsyncDataSourceLambdaConfig.builder()
//  .lambdaFunctionArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>java.lang.String</code> | The ARN for the Lambda function. |

---

##### `lambdaFunctionArn`<sup>Optional</sup> <a name="lambdaFunctionArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig.property.lambdaFunctionArn"></a>

```java
public java.lang.String getLambdaFunctionArn();
```

- *Type:* java.lang.String

The ARN for the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#lambda_function_arn AppsyncDataSource#lambda_function_arn}

---

### AppsyncDataSourceOpenSearchServiceConfig <a name="AppsyncDataSourceOpenSearchServiceConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceOpenSearchServiceConfig;

AppsyncDataSourceOpenSearchServiceConfig.builder()
//  .awsRegion(java.lang.String)
//  .endpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | The AWS Region. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | The endpoint. |

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

The AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#aws_region AppsyncDataSource#aws_region}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

The endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#endpoint AppsyncDataSource#endpoint}

---

### AppsyncDataSourceRelationalDatabaseConfig <a name="AppsyncDataSourceRelationalDatabaseConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceRelationalDatabaseConfig;

AppsyncDataSourceRelationalDatabaseConfig.builder()
//  .rdsHttpEndpointConfig(AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig)
//  .relationalDatabaseSourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig.property.rdsHttpEndpointConfig">rdsHttpEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a></code> | Information about the Amazon RDS resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig.property.relationalDatabaseSourceType">relationalDatabaseSourceType</a></code> | <code>java.lang.String</code> | The type of relational data source. |

---

##### `rdsHttpEndpointConfig`<sup>Optional</sup> <a name="rdsHttpEndpointConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig.property.rdsHttpEndpointConfig"></a>

```java
public AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig getRdsHttpEndpointConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a>

Information about the Amazon RDS resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#rds_http_endpoint_config AppsyncDataSource#rds_http_endpoint_config}

---

##### `relationalDatabaseSourceType`<sup>Optional</sup> <a name="relationalDatabaseSourceType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig.property.relationalDatabaseSourceType"></a>

```java
public java.lang.String getRelationalDatabaseSourceType();
```

- *Type:* java.lang.String

The type of relational data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#relational_database_source_type AppsyncDataSource#relational_database_source_type}

---

### AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig <a name="AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig;

AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.builder()
//  .awsRegion(java.lang.String)
//  .awsSecretStoreArn(java.lang.String)
//  .databaseName(java.lang.String)
//  .dbClusterIdentifier(java.lang.String)
//  .schema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | AWS Region for RDS HTTP endpoint. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.awsSecretStoreArn">awsSecretStoreArn</a></code> | <code>java.lang.String</code> | The ARN for database credentials stored in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Logical database name. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | Amazon RDS cluster Amazon Resource Name (ARN). |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | Logical schema name. |

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

AWS Region for RDS HTTP endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#aws_region AppsyncDataSource#aws_region}

---

##### `awsSecretStoreArn`<sup>Optional</sup> <a name="awsSecretStoreArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.awsSecretStoreArn"></a>

```java
public java.lang.String getAwsSecretStoreArn();
```

- *Type:* java.lang.String

The ARN for database credentials stored in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#aws_secret_store_arn AppsyncDataSource#aws_secret_store_arn}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Logical database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#database_name AppsyncDataSource#database_name}

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.dbClusterIdentifier"></a>

```java
public java.lang.String getDbClusterIdentifier();
```

- *Type:* java.lang.String

Amazon RDS cluster Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#db_cluster_identifier AppsyncDataSource#db_cluster_identifier}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Logical schema name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appsync_data_source#schema AppsyncDataSource#schema}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference <a name="AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference;

new AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetBaseTableTtl">resetBaseTableTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableName">resetDeltaSyncTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableTtl">resetDeltaSyncTableTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBaseTableTtl` <a name="resetBaseTableTtl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetBaseTableTtl"></a>

```java
public void resetBaseTableTtl()
```

##### `resetDeltaSyncTableName` <a name="resetDeltaSyncTableName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableName"></a>

```java
public void resetDeltaSyncTableName()
```

##### `resetDeltaSyncTableTtl` <a name="resetDeltaSyncTableTtl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableTtl"></a>

```java
public void resetDeltaSyncTableTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.baseTableTtlInput">baseTableTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableNameInput">deltaSyncTableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtlInput">deltaSyncTableTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.baseTableTtl">baseTableTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableName">deltaSyncTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtl">deltaSyncTableTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseTableTtlInput`<sup>Optional</sup> <a name="baseTableTtlInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.baseTableTtlInput"></a>

```java
public java.lang.String getBaseTableTtlInput();
```

- *Type:* java.lang.String

---

##### `deltaSyncTableNameInput`<sup>Optional</sup> <a name="deltaSyncTableNameInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableNameInput"></a>

```java
public java.lang.String getDeltaSyncTableNameInput();
```

- *Type:* java.lang.String

---

##### `deltaSyncTableTtlInput`<sup>Optional</sup> <a name="deltaSyncTableTtlInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtlInput"></a>

```java
public java.lang.String getDeltaSyncTableTtlInput();
```

- *Type:* java.lang.String

---

##### `baseTableTtl`<sup>Required</sup> <a name="baseTableTtl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.baseTableTtl"></a>

```java
public java.lang.String getBaseTableTtl();
```

- *Type:* java.lang.String

---

##### `deltaSyncTableName`<sup>Required</sup> <a name="deltaSyncTableName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableName"></a>

```java
public java.lang.String getDeltaSyncTableName();
```

- *Type:* java.lang.String

---

##### `deltaSyncTableTtl`<sup>Required</sup> <a name="deltaSyncTableTtl" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtl"></a>

```java
public java.lang.String getDeltaSyncTableTtl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncDataSourceDynamoDbConfigDeltaSyncConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a>

---


### AppsyncDataSourceDynamoDbConfigOutputReference <a name="AppsyncDataSourceDynamoDbConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceDynamoDbConfigOutputReference;

new AppsyncDataSourceDynamoDbConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.putDeltaSyncConfig">putDeltaSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetDeltaSyncConfig">resetDeltaSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetUseCallerCredentials">resetUseCallerCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetVersioned">resetVersioned</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeltaSyncConfig` <a name="putDeltaSyncConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.putDeltaSyncConfig"></a>

```java
public void putDeltaSyncConfig(AppsyncDataSourceDynamoDbConfigDeltaSyncConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.putDeltaSyncConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a>

---

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetAwsRegion"></a>

```java
public void resetAwsRegion()
```

##### `resetDeltaSyncConfig` <a name="resetDeltaSyncConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetDeltaSyncConfig"></a>

```java
public void resetDeltaSyncConfig()
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetTableName"></a>

```java
public void resetTableName()
```

##### `resetUseCallerCredentials` <a name="resetUseCallerCredentials" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetUseCallerCredentials"></a>

```java
public void resetUseCallerCredentials()
```

##### `resetVersioned` <a name="resetVersioned" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.resetVersioned"></a>

```java
public void resetVersioned()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.deltaSyncConfig">deltaSyncConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference">AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.deltaSyncConfigInput">deltaSyncConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.useCallerCredentialsInput">useCallerCredentialsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.versionedInput">versionedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.useCallerCredentials">useCallerCredentials</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.versioned">versioned</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deltaSyncConfig`<sup>Required</sup> <a name="deltaSyncConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.deltaSyncConfig"></a>

```java
public AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference getDeltaSyncConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference">AppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference</a>

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.awsRegionInput"></a>

```java
public java.lang.String getAwsRegionInput();
```

- *Type:* java.lang.String

---

##### `deltaSyncConfigInput`<sup>Optional</sup> <a name="deltaSyncConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.deltaSyncConfigInput"></a>

```java
public IResolvable|AppsyncDataSourceDynamoDbConfigDeltaSyncConfig getDeltaSyncConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigDeltaSyncConfig">AppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `useCallerCredentialsInput`<sup>Optional</sup> <a name="useCallerCredentialsInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.useCallerCredentialsInput"></a>

```java
public java.lang.Boolean|IResolvable getUseCallerCredentialsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `versionedInput`<sup>Optional</sup> <a name="versionedInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.versionedInput"></a>

```java
public java.lang.Boolean|IResolvable getVersionedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `useCallerCredentials`<sup>Required</sup> <a name="useCallerCredentials" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.useCallerCredentials"></a>

```java
public java.lang.Boolean|IResolvable getUseCallerCredentials();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `versioned`<sup>Required</sup> <a name="versioned" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.versioned"></a>

```java
public java.lang.Boolean|IResolvable getVersioned();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncDataSourceDynamoDbConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceDynamoDbConfig">AppsyncDataSourceDynamoDbConfig</a>

---


### AppsyncDataSourceElasticsearchConfigOutputReference <a name="AppsyncDataSourceElasticsearchConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceElasticsearchConfigOutputReference;

new AppsyncDataSourceElasticsearchConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resetAwsRegion"></a>

```java
public void resetAwsRegion()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.awsRegionInput"></a>

```java
public java.lang.String getAwsRegionInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncDataSourceElasticsearchConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceElasticsearchConfig">AppsyncDataSourceElasticsearchConfig</a>

---


### AppsyncDataSourceEventBridgeConfigOutputReference <a name="AppsyncDataSourceEventBridgeConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceEventBridgeConfigOutputReference;

new AppsyncDataSourceEventBridgeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.resetEventBusArn">resetEventBusArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventBusArn` <a name="resetEventBusArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.resetEventBusArn"></a>

```java
public void resetEventBusArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.eventBusArnInput">eventBusArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.eventBusArn">eventBusArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventBusArnInput`<sup>Optional</sup> <a name="eventBusArnInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.eventBusArnInput"></a>

```java
public java.lang.String getEventBusArnInput();
```

- *Type:* java.lang.String

---

##### `eventBusArn`<sup>Required</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.eventBusArn"></a>

```java
public java.lang.String getEventBusArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncDataSourceEventBridgeConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceEventBridgeConfig">AppsyncDataSourceEventBridgeConfig</a>

---


### AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference <a name="AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference;

new AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningRegion">resetSigningRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningServiceName">resetSigningServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSigningRegion` <a name="resetSigningRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningRegion"></a>

```java
public void resetSigningRegion()
```

##### `resetSigningServiceName` <a name="resetSigningServiceName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningServiceName"></a>

```java
public void resetSigningServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegionInput">signingRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceNameInput">signingServiceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegion">signingRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceName">signingServiceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `signingRegionInput`<sup>Optional</sup> <a name="signingRegionInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegionInput"></a>

```java
public java.lang.String getSigningRegionInput();
```

- *Type:* java.lang.String

---

##### `signingServiceNameInput`<sup>Optional</sup> <a name="signingServiceNameInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceNameInput"></a>

```java
public java.lang.String getSigningServiceNameInput();
```

- *Type:* java.lang.String

---

##### `signingRegion`<sup>Required</sup> <a name="signingRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegion"></a>

```java
public java.lang.String getSigningRegion();
```

- *Type:* java.lang.String

---

##### `signingServiceName`<sup>Required</sup> <a name="signingServiceName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceName"></a>

```java
public java.lang.String getSigningServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---


### AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference <a name="AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference;

new AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig">putAwsIamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resetAuthorizationType">resetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resetAwsIamConfig">resetAwsIamConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsIamConfig` <a name="putAwsIamConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig"></a>

```java
public void putAwsIamConfig(AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---

##### `resetAuthorizationType` <a name="resetAuthorizationType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resetAuthorizationType"></a>

```java
public void resetAuthorizationType()
```

##### `resetAwsIamConfig` <a name="resetAwsIamConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resetAwsIamConfig"></a>

```java
public void resetAwsIamConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfig">awsIamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.authorizationTypeInput">authorizationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfigInput">awsIamConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsIamConfig`<sup>Required</sup> <a name="awsIamConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfig"></a>

```java
public AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference getAwsIamConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference</a>

---

##### `authorizationTypeInput`<sup>Optional</sup> <a name="authorizationTypeInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.authorizationTypeInput"></a>

```java
public java.lang.String getAuthorizationTypeInput();
```

- *Type:* java.lang.String

---

##### `awsIamConfigInput`<sup>Optional</sup> <a name="awsIamConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfigInput"></a>

```java
public IResolvable|AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig getAwsIamConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncDataSourceHttpConfigAuthorizationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a>

---


### AppsyncDataSourceHttpConfigOutputReference <a name="AppsyncDataSourceHttpConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceHttpConfigOutputReference;

new AppsyncDataSourceHttpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resetAuthorizationConfig">resetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.putAuthorizationConfig"></a>

```java
public void putAuthorizationConfig(AppsyncDataSourceHttpConfigAuthorizationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a>

---

##### `resetAuthorizationConfig` <a name="resetAuthorizationConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resetAuthorizationConfig"></a>

```java
public void resetAuthorizationConfig()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference">AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.authorizationConfig"></a>

```java
public AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference getAuthorizationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference">AppsyncDataSourceHttpConfigAuthorizationConfigOutputReference</a>

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.authorizationConfigInput"></a>

```java
public IResolvable|AppsyncDataSourceHttpConfigAuthorizationConfig getAuthorizationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigAuthorizationConfig">AppsyncDataSourceHttpConfigAuthorizationConfig</a>

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncDataSourceHttpConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceHttpConfig">AppsyncDataSourceHttpConfig</a>

---


### AppsyncDataSourceLambdaConfigOutputReference <a name="AppsyncDataSourceLambdaConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceLambdaConfigOutputReference;

new AppsyncDataSourceLambdaConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.resetLambdaFunctionArn">resetLambdaFunctionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaFunctionArn` <a name="resetLambdaFunctionArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.resetLambdaFunctionArn"></a>

```java
public void resetLambdaFunctionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.lambdaFunctionArnInput">lambdaFunctionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaFunctionArnInput`<sup>Optional</sup> <a name="lambdaFunctionArnInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.lambdaFunctionArnInput"></a>

```java
public java.lang.String getLambdaFunctionArnInput();
```

- *Type:* java.lang.String

---

##### `lambdaFunctionArn`<sup>Required</sup> <a name="lambdaFunctionArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.lambdaFunctionArn"></a>

```java
public java.lang.String getLambdaFunctionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncDataSourceLambdaConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceLambdaConfig">AppsyncDataSourceLambdaConfig</a>

---


### AppsyncDataSourceOpenSearchServiceConfigOutputReference <a name="AppsyncDataSourceOpenSearchServiceConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceOpenSearchServiceConfigOutputReference;

new AppsyncDataSourceOpenSearchServiceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resetAwsRegion"></a>

```java
public void resetAwsRegion()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.awsRegionInput"></a>

```java
public java.lang.String getAwsRegionInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncDataSourceOpenSearchServiceConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceOpenSearchServiceConfig">AppsyncDataSourceOpenSearchServiceConfig</a>

---


### AppsyncDataSourceRelationalDatabaseConfigOutputReference <a name="AppsyncDataSourceRelationalDatabaseConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceRelationalDatabaseConfigOutputReference;

new AppsyncDataSourceRelationalDatabaseConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.putRdsHttpEndpointConfig">putRdsHttpEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resetRdsHttpEndpointConfig">resetRdsHttpEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resetRelationalDatabaseSourceType">resetRelationalDatabaseSourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRdsHttpEndpointConfig` <a name="putRdsHttpEndpointConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.putRdsHttpEndpointConfig"></a>

```java
public void putRdsHttpEndpointConfig(AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.putRdsHttpEndpointConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a>

---

##### `resetRdsHttpEndpointConfig` <a name="resetRdsHttpEndpointConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resetRdsHttpEndpointConfig"></a>

```java
public void resetRdsHttpEndpointConfig()
```

##### `resetRelationalDatabaseSourceType` <a name="resetRelationalDatabaseSourceType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.resetRelationalDatabaseSourceType"></a>

```java
public void resetRelationalDatabaseSourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.rdsHttpEndpointConfig">rdsHttpEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.rdsHttpEndpointConfigInput">rdsHttpEndpointConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.relationalDatabaseSourceTypeInput">relationalDatabaseSourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.relationalDatabaseSourceType">relationalDatabaseSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rdsHttpEndpointConfig`<sup>Required</sup> <a name="rdsHttpEndpointConfig" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.rdsHttpEndpointConfig"></a>

```java
public AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference getRdsHttpEndpointConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference</a>

---

##### `rdsHttpEndpointConfigInput`<sup>Optional</sup> <a name="rdsHttpEndpointConfigInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.rdsHttpEndpointConfigInput"></a>

```java
public IResolvable|AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig getRdsHttpEndpointConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a>

---

##### `relationalDatabaseSourceTypeInput`<sup>Optional</sup> <a name="relationalDatabaseSourceTypeInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.relationalDatabaseSourceTypeInput"></a>

```java
public java.lang.String getRelationalDatabaseSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `relationalDatabaseSourceType`<sup>Required</sup> <a name="relationalDatabaseSourceType" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.relationalDatabaseSourceType"></a>

```java
public java.lang.String getRelationalDatabaseSourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncDataSourceRelationalDatabaseConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfig">AppsyncDataSourceRelationalDatabaseConfig</a>

---


### AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference <a name="AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appsync_data_source.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference;

new AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetAwsSecretStoreArn">resetAwsSecretStoreArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetDbClusterIdentifier">resetDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetAwsRegion"></a>

```java
public void resetAwsRegion()
```

##### `resetAwsSecretStoreArn` <a name="resetAwsSecretStoreArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetAwsSecretStoreArn"></a>

```java
public void resetAwsSecretStoreArn()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetDbClusterIdentifier` <a name="resetDbClusterIdentifier" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetDbClusterIdentifier"></a>

```java
public void resetDbClusterIdentifier()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resetSchema"></a>

```java
public void resetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsSecretStoreArnInput">awsSecretStoreArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.dbClusterIdentifierInput">dbClusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsSecretStoreArn">awsSecretStoreArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsRegionInput"></a>

```java
public java.lang.String getAwsRegionInput();
```

- *Type:* java.lang.String

---

##### `awsSecretStoreArnInput`<sup>Optional</sup> <a name="awsSecretStoreArnInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsSecretStoreArnInput"></a>

```java
public java.lang.String getAwsSecretStoreArnInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `dbClusterIdentifierInput`<sup>Optional</sup> <a name="dbClusterIdentifierInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.dbClusterIdentifierInput"></a>

```java
public java.lang.String getDbClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

---

##### `awsSecretStoreArn`<sup>Required</sup> <a name="awsSecretStoreArn" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsSecretStoreArn"></a>

```java
public java.lang.String getAwsSecretStoreArn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.dbClusterIdentifier"></a>

```java
public java.lang.String getDbClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncDataSource.AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">AppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a>

---



