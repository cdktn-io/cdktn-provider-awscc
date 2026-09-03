# `dmsEndpoint` Submodule <a name="`dmsEndpoint` Submodule" id="@cdktn/provider-awscc.dmsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsEndpoint <a name="DmsEndpoint" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint awscc_dms_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpoint;

DmsEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .endpointType(java.lang.String)
    .engineName(java.lang.String)
//  .certificateArn(java.lang.String)
//  .databaseName(java.lang.String)
//  .docDbSettings(DmsEndpointDocDbSettings)
//  .dynamoDbSettings(DmsEndpointDynamoDbSettings)
//  .elasticsearchSettings(DmsEndpointElasticsearchSettings)
//  .endpointIdentifier(java.lang.String)
//  .extraConnectionAttributes(java.lang.String)
//  .gcpMySqlSettings(DmsEndpointGcpMySqlSettings)
//  .ibmDb2Settings(DmsEndpointIbmDb2Settings)
//  .kafkaSettings(DmsEndpointKafkaSettings)
//  .kinesisSettings(DmsEndpointKinesisSettings)
//  .kmsKeyId(java.lang.String)
//  .microsoftSqlServerSettings(DmsEndpointMicrosoftSqlServerSettings)
//  .mongoDbSettings(DmsEndpointMongoDbSettings)
//  .mySqlSettings(DmsEndpointMySqlSettings)
//  .neptuneSettings(DmsEndpointNeptuneSettings)
//  .oracleSettings(DmsEndpointOracleSettings)
//  .password(java.lang.String)
//  .port(java.lang.Number)
//  .postgreSqlSettings(DmsEndpointPostgreSqlSettings)
//  .redisSettings(DmsEndpointRedisSettings)
//  .redshiftSettings(DmsEndpointRedshiftSettings)
//  .resourceIdentifier(java.lang.String)
//  .s3Settings(DmsEndpointS3Settings)
//  .serverName(java.lang.String)
//  .sslMode(java.lang.String)
//  .sybaseSettings(DmsEndpointSybaseSettings)
//  .tags(IResolvable|java.util.List<DmsEndpointTags>)
//  .username(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.endpointType">endpointType</a></code> | <code>java.lang.String</code> | The type of endpoint. Valid values are source and target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.engineName">engineName</a></code> | <code>java.lang.String</code> | The type of engine for the endpoint, depending on the EndpointType value. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for the certificate. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | The name of the endpoint database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.docDbSettings">docDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a></code> | Settings in JSON format for the source and target DocumentDB endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.dynamoDbSettings">dynamoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a></code> | Settings in JSON format for the target Amazon DynamoDB endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.elasticsearchSettings">elasticsearchSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | Settings in JSON format for the target OpenSearch endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.endpointIdentifier">endpointIdentifier</a></code> | <code>java.lang.String</code> | The database endpoint identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.extraConnectionAttributes">extraConnectionAttributes</a></code> | <code>java.lang.String</code> | Additional attributes associated with the connection. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.gcpMySqlSettings">gcpMySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a></code> | Settings in JSON format for the source GCP MySQL endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.ibmDb2Settings">ibmDb2Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a></code> | Settings in JSON format for the source IBM Db2 LUW endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.kafkaSettings">kafkaSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | Settings in JSON format for the target Apache Kafka endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.kinesisSettings">kinesisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.If you don't specify a value for the KmsKeyId parameter, AWS DMS uses your default encryption key. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.microsoftSqlServerSettings">microsoftSqlServerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a></code> | Settings in JSON format for the source and target Microsoft SQL Server endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.mongoDbSettings">mongoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a></code> | Settings in JSON format for the source MongoDB endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.mySqlSettings">mySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a></code> | Settings in JSON format for the source and target MySQL endpoin. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.neptuneSettings">neptuneSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a></code> | Settings in JSON format for the target Amazon Neptune endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.oracleSettings">oracleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a></code> | Settings in JSON format for the source and target Oracle endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | The password to be used to log in to the endpoint database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | The port used by the endpoint database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.postgreSqlSettings">postgreSqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a></code> | Settings in JSON format for the source and target PostgreSQL endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.redisSettings">redisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | Settings in JSON format for the target Redis endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.redshiftSettings">redshiftSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | Settings in JSON format for the Amazon Redshift endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.resourceIdentifier">resourceIdentifier</a></code> | <code>java.lang.String</code> | A display name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.s3Settings">s3Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | Settings in JSON format for the source and target Amazon S3 endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.serverName">serverName</a></code> | <code>java.lang.String</code> | The name of the server where the endpoint database resides. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.sslMode">sslMode</a></code> | <code>java.lang.String</code> | The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is none. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.sybaseSettings">sybaseSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a></code> | Settings in JSON format for the source and target SAP ASE endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>></code> | One or more tags to be assigned to the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | The user name to be used to log in to the endpoint database. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.endpointType"></a>

- *Type:* java.lang.String

The type of endpoint. Valid values are source and target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.engineName"></a>

- *Type:* java.lang.String

The type of engine for the endpoint, depending on the EndpointType value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#engine_name DmsEndpoint#engine_name}

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.certificateArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

The name of the endpoint database.

For a MySQL source or target endpoint, don't specify DatabaseName. To migrate to a specific database, use this setting and targetDbType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}

---

##### `docDbSettings`<sup>Optional</sup> <a name="docDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.docDbSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a>

Settings in JSON format for the source and target DocumentDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#doc_db_settings DmsEndpoint#doc_db_settings}

---

##### `dynamoDbSettings`<sup>Optional</sup> <a name="dynamoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.dynamoDbSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a>

Settings in JSON format for the target Amazon DynamoDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#dynamo_db_settings DmsEndpoint#dynamo_db_settings}

---

##### `elasticsearchSettings`<sup>Optional</sup> <a name="elasticsearchSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.elasticsearchSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

Settings in JSON format for the target OpenSearch endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#elasticsearch_settings DmsEndpoint#elasticsearch_settings}

---

##### `endpointIdentifier`<sup>Optional</sup> <a name="endpointIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.endpointIdentifier"></a>

- *Type:* java.lang.String

The database endpoint identifier.

Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#endpoint_identifier DmsEndpoint#endpoint_identifier}

---

##### `extraConnectionAttributes`<sup>Optional</sup> <a name="extraConnectionAttributes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.extraConnectionAttributes"></a>

- *Type:* java.lang.String

Additional attributes associated with the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}

---

##### `gcpMySqlSettings`<sup>Optional</sup> <a name="gcpMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.gcpMySqlSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a>

Settings in JSON format for the source GCP MySQL endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#gcp_my_sql_settings DmsEndpoint#gcp_my_sql_settings}

---

##### `ibmDb2Settings`<sup>Optional</sup> <a name="ibmDb2Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.ibmDb2Settings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a>

Settings in JSON format for the source IBM Db2 LUW endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#ibm_db_2_settings DmsEndpoint#ibm_db_2_settings}

---

##### `kafkaSettings`<sup>Optional</sup> <a name="kafkaSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.kafkaSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

Settings in JSON format for the target Apache Kafka endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#kafka_settings DmsEndpoint#kafka_settings}

---

##### `kinesisSettings`<sup>Optional</sup> <a name="kinesisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.kinesisSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#kinesis_settings DmsEndpoint#kinesis_settings}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.If you don't specify a value for the KmsKeyId parameter, AWS DMS uses your default encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#kms_key_id DmsEndpoint#kms_key_id}

---

##### `microsoftSqlServerSettings`<sup>Optional</sup> <a name="microsoftSqlServerSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.microsoftSqlServerSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a>

Settings in JSON format for the source and target Microsoft SQL Server endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#microsoft_sql_server_settings DmsEndpoint#microsoft_sql_server_settings}

---

##### `mongoDbSettings`<sup>Optional</sup> <a name="mongoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.mongoDbSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a>

Settings in JSON format for the source MongoDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#mongo_db_settings DmsEndpoint#mongo_db_settings}

---

##### `mySqlSettings`<sup>Optional</sup> <a name="mySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.mySqlSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a>

Settings in JSON format for the source and target MySQL endpoin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#my_sql_settings DmsEndpoint#my_sql_settings}

---

##### `neptuneSettings`<sup>Optional</sup> <a name="neptuneSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.neptuneSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a>

Settings in JSON format for the target Amazon Neptune endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#neptune_settings DmsEndpoint#neptune_settings}

---

##### `oracleSettings`<sup>Optional</sup> <a name="oracleSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.oracleSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

Settings in JSON format for the source and target Oracle endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#oracle_settings DmsEndpoint#oracle_settings}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.password"></a>

- *Type:* java.lang.String

The password to be used to log in to the endpoint database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#password DmsEndpoint#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

The port used by the endpoint database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#port DmsEndpoint#port}

---

##### `postgreSqlSettings`<sup>Optional</sup> <a name="postgreSqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.postgreSqlSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a>

Settings in JSON format for the source and target PostgreSQL endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#postgre_sql_settings DmsEndpoint#postgre_sql_settings}

---

##### `redisSettings`<sup>Optional</sup> <a name="redisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.redisSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

Settings in JSON format for the target Redis endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#redis_settings DmsEndpoint#redis_settings}

---

##### `redshiftSettings`<sup>Optional</sup> <a name="redshiftSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.redshiftSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

Settings in JSON format for the Amazon Redshift endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#redshift_settings DmsEndpoint#redshift_settings}

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.resourceIdentifier"></a>

- *Type:* java.lang.String

A display name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#resource_identifier DmsEndpoint#resource_identifier}

---

##### `s3Settings`<sup>Optional</sup> <a name="s3Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.s3Settings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

Settings in JSON format for the source and target Amazon S3 endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#s3_settings DmsEndpoint#s3_settings}

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.serverName"></a>

- *Type:* java.lang.String

The name of the server where the endpoint database resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.sslMode"></a>

- *Type:* java.lang.String

The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}

---

##### `sybaseSettings`<sup>Optional</sup> <a name="sybaseSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.sybaseSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a>

Settings in JSON format for the source and target SAP ASE endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#sybase_settings DmsEndpoint#sybase_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>>

One or more tags to be assigned to the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#tags DmsEndpoint#tags}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.username"></a>

- *Type:* java.lang.String

The user name to be used to log in to the endpoint database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#username DmsEndpoint#username}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putDocDbSettings">putDocDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putDynamoDbSettings">putDynamoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putElasticsearchSettings">putElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putGcpMySqlSettings">putGcpMySqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putIbmDb2Settings">putIbmDb2Settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putKafkaSettings">putKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putKinesisSettings">putKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMicrosoftSqlServerSettings">putMicrosoftSqlServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMongoDbSettings">putMongoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMySqlSettings">putMySqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putNeptuneSettings">putNeptuneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putOracleSettings">putOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putPostgreSqlSettings">putPostgreSqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putRedisSettings">putRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putRedshiftSettings">putRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putS3Settings">putS3Settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putSybaseSettings">putSybaseSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetDocDbSettings">resetDocDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetDynamoDbSettings">resetDynamoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetElasticsearchSettings">resetElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetEndpointIdentifier">resetEndpointIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetExtraConnectionAttributes">resetExtraConnectionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetGcpMySqlSettings">resetGcpMySqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetIbmDb2Settings">resetIbmDb2Settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetKafkaSettings">resetKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetKinesisSettings">resetKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetMicrosoftSqlServerSettings">resetMicrosoftSqlServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetMongoDbSettings">resetMongoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetMySqlSettings">resetMySqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetNeptuneSettings">resetNeptuneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetOracleSettings">resetOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetPostgreSqlSettings">resetPostgreSqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetRedisSettings">resetRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetRedshiftSettings">resetRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetResourceIdentifier">resetResourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetS3Settings">resetS3Settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetSslMode">resetSslMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetSybaseSettings">resetSybaseSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDocDbSettings` <a name="putDocDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putDocDbSettings"></a>

```java
public void putDocDbSettings(DmsEndpointDocDbSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putDocDbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a>

---

##### `putDynamoDbSettings` <a name="putDynamoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putDynamoDbSettings"></a>

```java
public void putDynamoDbSettings(DmsEndpointDynamoDbSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putDynamoDbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a>

---

##### `putElasticsearchSettings` <a name="putElasticsearchSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putElasticsearchSettings"></a>

```java
public void putElasticsearchSettings(DmsEndpointElasticsearchSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putElasticsearchSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---

##### `putGcpMySqlSettings` <a name="putGcpMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putGcpMySqlSettings"></a>

```java
public void putGcpMySqlSettings(DmsEndpointGcpMySqlSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putGcpMySqlSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a>

---

##### `putIbmDb2Settings` <a name="putIbmDb2Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putIbmDb2Settings"></a>

```java
public void putIbmDb2Settings(DmsEndpointIbmDb2Settings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putIbmDb2Settings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a>

---

##### `putKafkaSettings` <a name="putKafkaSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putKafkaSettings"></a>

```java
public void putKafkaSettings(DmsEndpointKafkaSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---

##### `putKinesisSettings` <a name="putKinesisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putKinesisSettings"></a>

```java
public void putKinesisSettings(DmsEndpointKinesisSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putKinesisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---

##### `putMicrosoftSqlServerSettings` <a name="putMicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMicrosoftSqlServerSettings"></a>

```java
public void putMicrosoftSqlServerSettings(DmsEndpointMicrosoftSqlServerSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMicrosoftSqlServerSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a>

---

##### `putMongoDbSettings` <a name="putMongoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMongoDbSettings"></a>

```java
public void putMongoDbSettings(DmsEndpointMongoDbSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMongoDbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a>

---

##### `putMySqlSettings` <a name="putMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMySqlSettings"></a>

```java
public void putMySqlSettings(DmsEndpointMySqlSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMySqlSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a>

---

##### `putNeptuneSettings` <a name="putNeptuneSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putNeptuneSettings"></a>

```java
public void putNeptuneSettings(DmsEndpointNeptuneSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putNeptuneSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a>

---

##### `putOracleSettings` <a name="putOracleSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putOracleSettings"></a>

```java
public void putOracleSettings(DmsEndpointOracleSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putOracleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

---

##### `putPostgreSqlSettings` <a name="putPostgreSqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putPostgreSqlSettings"></a>

```java
public void putPostgreSqlSettings(DmsEndpointPostgreSqlSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putPostgreSqlSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a>

---

##### `putRedisSettings` <a name="putRedisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putRedisSettings"></a>

```java
public void putRedisSettings(DmsEndpointRedisSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putRedisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---

##### `putRedshiftSettings` <a name="putRedshiftSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putRedshiftSettings"></a>

```java
public void putRedshiftSettings(DmsEndpointRedshiftSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putRedshiftSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---

##### `putS3Settings` <a name="putS3Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putS3Settings"></a>

```java
public void putS3Settings(DmsEndpointS3Settings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

---

##### `putSybaseSettings` <a name="putSybaseSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putSybaseSettings"></a>

```java
public void putSybaseSettings(DmsEndpointSybaseSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putSybaseSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DmsEndpointTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>>

---

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetDocDbSettings` <a name="resetDocDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetDocDbSettings"></a>

```java
public void resetDocDbSettings()
```

##### `resetDynamoDbSettings` <a name="resetDynamoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetDynamoDbSettings"></a>

```java
public void resetDynamoDbSettings()
```

##### `resetElasticsearchSettings` <a name="resetElasticsearchSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetElasticsearchSettings"></a>

```java
public void resetElasticsearchSettings()
```

##### `resetEndpointIdentifier` <a name="resetEndpointIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetEndpointIdentifier"></a>

```java
public void resetEndpointIdentifier()
```

##### `resetExtraConnectionAttributes` <a name="resetExtraConnectionAttributes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetExtraConnectionAttributes"></a>

```java
public void resetExtraConnectionAttributes()
```

##### `resetGcpMySqlSettings` <a name="resetGcpMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetGcpMySqlSettings"></a>

```java
public void resetGcpMySqlSettings()
```

##### `resetIbmDb2Settings` <a name="resetIbmDb2Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetIbmDb2Settings"></a>

```java
public void resetIbmDb2Settings()
```

##### `resetKafkaSettings` <a name="resetKafkaSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetKafkaSettings"></a>

```java
public void resetKafkaSettings()
```

##### `resetKinesisSettings` <a name="resetKinesisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetKinesisSettings"></a>

```java
public void resetKinesisSettings()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetMicrosoftSqlServerSettings` <a name="resetMicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetMicrosoftSqlServerSettings"></a>

```java
public void resetMicrosoftSqlServerSettings()
```

##### `resetMongoDbSettings` <a name="resetMongoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetMongoDbSettings"></a>

```java
public void resetMongoDbSettings()
```

##### `resetMySqlSettings` <a name="resetMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetMySqlSettings"></a>

```java
public void resetMySqlSettings()
```

##### `resetNeptuneSettings` <a name="resetNeptuneSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetNeptuneSettings"></a>

```java
public void resetNeptuneSettings()
```

##### `resetOracleSettings` <a name="resetOracleSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetOracleSettings"></a>

```java
public void resetOracleSettings()
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetPort"></a>

```java
public void resetPort()
```

##### `resetPostgreSqlSettings` <a name="resetPostgreSqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetPostgreSqlSettings"></a>

```java
public void resetPostgreSqlSettings()
```

##### `resetRedisSettings` <a name="resetRedisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetRedisSettings"></a>

```java
public void resetRedisSettings()
```

##### `resetRedshiftSettings` <a name="resetRedshiftSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetRedshiftSettings"></a>

```java
public void resetRedshiftSettings()
```

##### `resetResourceIdentifier` <a name="resetResourceIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetResourceIdentifier"></a>

```java
public void resetResourceIdentifier()
```

##### `resetS3Settings` <a name="resetS3Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetS3Settings"></a>

```java
public void resetS3Settings()
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetServerName"></a>

```java
public void resetServerName()
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetSslMode"></a>

```java
public void resetSslMode()
```

##### `resetSybaseSettings` <a name="resetSybaseSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetSybaseSettings"></a>

```java
public void resetSybaseSettings()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetTags"></a>

```java
public void resetTags()
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetUsername"></a>

```java
public void resetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DmsEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpoint;

DmsEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpoint;

DmsEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpoint;

DmsEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpoint;

DmsEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DmsEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DmsEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DmsEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DmsEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DmsEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.docDbSettings">docDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference">DmsEndpointDocDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dynamoDbSettings">dynamoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference">DmsEndpointDynamoDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.elasticsearchSettings">elasticsearchSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference">DmsEndpointElasticsearchSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointArn">endpointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.gcpMySqlSettings">gcpMySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference">DmsEndpointGcpMySqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.ibmDb2Settings">ibmDb2Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference">DmsEndpointIbmDb2SettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kafkaSettings">kafkaSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference">DmsEndpointKafkaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kinesisSettings">kinesisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference">DmsEndpointKinesisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.microsoftSqlServerSettings">microsoftSqlServerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference">DmsEndpointMicrosoftSqlServerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mongoDbSettings">mongoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference">DmsEndpointMongoDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mySqlSettings">mySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference">DmsEndpointMySqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.neptuneSettings">neptuneSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference">DmsEndpointNeptuneSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.oracleSettings">oracleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference">DmsEndpointOracleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.postgreSqlSettings">postgreSqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference">DmsEndpointPostgreSqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redisSettings">redisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference">DmsEndpointRedisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redshiftSettings">redshiftSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference">DmsEndpointRedshiftSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.s3Settings">s3Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference">DmsEndpointS3SettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sybaseSettings">sybaseSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference">DmsEndpointSybaseSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList">DmsEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.docDbSettingsInput">docDbSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dynamoDbSettingsInput">dynamoDbSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.elasticsearchSettingsInput">elasticsearchSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointIdentifierInput">endpointIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointTypeInput">endpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.engineNameInput">engineNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributesInput">extraConnectionAttributesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.gcpMySqlSettingsInput">gcpMySqlSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.ibmDb2SettingsInput">ibmDb2SettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kafkaSettingsInput">kafkaSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kinesisSettingsInput">kinesisSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.microsoftSqlServerSettingsInput">microsoftSqlServerSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mongoDbSettingsInput">mongoDbSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mySqlSettingsInput">mySqlSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.neptuneSettingsInput">neptuneSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.oracleSettingsInput">oracleSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.postgreSqlSettingsInput">postgreSqlSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redisSettingsInput">redisSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redshiftSettingsInput">redshiftSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.resourceIdentifierInput">resourceIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.s3SettingsInput">s3SettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sslModeInput">sslModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sybaseSettingsInput">sybaseSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointIdentifier">endpointIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.engineName">engineName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributes">extraConnectionAttributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.resourceIdentifier">resourceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `docDbSettings`<sup>Required</sup> <a name="docDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.docDbSettings"></a>

```java
public DmsEndpointDocDbSettingsOutputReference getDocDbSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference">DmsEndpointDocDbSettingsOutputReference</a>

---

##### `dynamoDbSettings`<sup>Required</sup> <a name="dynamoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dynamoDbSettings"></a>

```java
public DmsEndpointDynamoDbSettingsOutputReference getDynamoDbSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference">DmsEndpointDynamoDbSettingsOutputReference</a>

---

##### `elasticsearchSettings`<sup>Required</sup> <a name="elasticsearchSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.elasticsearchSettings"></a>

```java
public DmsEndpointElasticsearchSettingsOutputReference getElasticsearchSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference">DmsEndpointElasticsearchSettingsOutputReference</a>

---

##### `endpointArn`<sup>Required</sup> <a name="endpointArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointArn"></a>

```java
public java.lang.String getEndpointArn();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `gcpMySqlSettings`<sup>Required</sup> <a name="gcpMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.gcpMySqlSettings"></a>

```java
public DmsEndpointGcpMySqlSettingsOutputReference getGcpMySqlSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference">DmsEndpointGcpMySqlSettingsOutputReference</a>

---

##### `ibmDb2Settings`<sup>Required</sup> <a name="ibmDb2Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.ibmDb2Settings"></a>

```java
public DmsEndpointIbmDb2SettingsOutputReference getIbmDb2Settings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference">DmsEndpointIbmDb2SettingsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kafkaSettings`<sup>Required</sup> <a name="kafkaSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kafkaSettings"></a>

```java
public DmsEndpointKafkaSettingsOutputReference getKafkaSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference">DmsEndpointKafkaSettingsOutputReference</a>

---

##### `kinesisSettings`<sup>Required</sup> <a name="kinesisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kinesisSettings"></a>

```java
public DmsEndpointKinesisSettingsOutputReference getKinesisSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference">DmsEndpointKinesisSettingsOutputReference</a>

---

##### `microsoftSqlServerSettings`<sup>Required</sup> <a name="microsoftSqlServerSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.microsoftSqlServerSettings"></a>

```java
public DmsEndpointMicrosoftSqlServerSettingsOutputReference getMicrosoftSqlServerSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference">DmsEndpointMicrosoftSqlServerSettingsOutputReference</a>

---

##### `mongoDbSettings`<sup>Required</sup> <a name="mongoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mongoDbSettings"></a>

```java
public DmsEndpointMongoDbSettingsOutputReference getMongoDbSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference">DmsEndpointMongoDbSettingsOutputReference</a>

---

##### `mySqlSettings`<sup>Required</sup> <a name="mySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mySqlSettings"></a>

```java
public DmsEndpointMySqlSettingsOutputReference getMySqlSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference">DmsEndpointMySqlSettingsOutputReference</a>

---

##### `neptuneSettings`<sup>Required</sup> <a name="neptuneSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.neptuneSettings"></a>

```java
public DmsEndpointNeptuneSettingsOutputReference getNeptuneSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference">DmsEndpointNeptuneSettingsOutputReference</a>

---

##### `oracleSettings`<sup>Required</sup> <a name="oracleSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.oracleSettings"></a>

```java
public DmsEndpointOracleSettingsOutputReference getOracleSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference">DmsEndpointOracleSettingsOutputReference</a>

---

##### `postgreSqlSettings`<sup>Required</sup> <a name="postgreSqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.postgreSqlSettings"></a>

```java
public DmsEndpointPostgreSqlSettingsOutputReference getPostgreSqlSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference">DmsEndpointPostgreSqlSettingsOutputReference</a>

---

##### `redisSettings`<sup>Required</sup> <a name="redisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redisSettings"></a>

```java
public DmsEndpointRedisSettingsOutputReference getRedisSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference">DmsEndpointRedisSettingsOutputReference</a>

---

##### `redshiftSettings`<sup>Required</sup> <a name="redshiftSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redshiftSettings"></a>

```java
public DmsEndpointRedshiftSettingsOutputReference getRedshiftSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference">DmsEndpointRedshiftSettingsOutputReference</a>

---

##### `s3Settings`<sup>Required</sup> <a name="s3Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.s3Settings"></a>

```java
public DmsEndpointS3SettingsOutputReference getS3Settings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference">DmsEndpointS3SettingsOutputReference</a>

---

##### `sybaseSettings`<sup>Required</sup> <a name="sybaseSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sybaseSettings"></a>

```java
public DmsEndpointSybaseSettingsOutputReference getSybaseSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference">DmsEndpointSybaseSettingsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tags"></a>

```java
public DmsEndpointTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList">DmsEndpointTagsList</a>

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `docDbSettingsInput`<sup>Optional</sup> <a name="docDbSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.docDbSettingsInput"></a>

```java
public IResolvable|DmsEndpointDocDbSettings getDocDbSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a>

---

##### `dynamoDbSettingsInput`<sup>Optional</sup> <a name="dynamoDbSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dynamoDbSettingsInput"></a>

```java
public IResolvable|DmsEndpointDynamoDbSettings getDynamoDbSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a>

---

##### `elasticsearchSettingsInput`<sup>Optional</sup> <a name="elasticsearchSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.elasticsearchSettingsInput"></a>

```java
public IResolvable|DmsEndpointElasticsearchSettings getElasticsearchSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---

##### `endpointIdentifierInput`<sup>Optional</sup> <a name="endpointIdentifierInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointIdentifierInput"></a>

```java
public java.lang.String getEndpointIdentifierInput();
```

- *Type:* java.lang.String

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointTypeInput"></a>

```java
public java.lang.String getEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `engineNameInput`<sup>Optional</sup> <a name="engineNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.engineNameInput"></a>

```java
public java.lang.String getEngineNameInput();
```

- *Type:* java.lang.String

---

##### `extraConnectionAttributesInput`<sup>Optional</sup> <a name="extraConnectionAttributesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributesInput"></a>

```java
public java.lang.String getExtraConnectionAttributesInput();
```

- *Type:* java.lang.String

---

##### `gcpMySqlSettingsInput`<sup>Optional</sup> <a name="gcpMySqlSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.gcpMySqlSettingsInput"></a>

```java
public IResolvable|DmsEndpointGcpMySqlSettings getGcpMySqlSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a>

---

##### `ibmDb2SettingsInput`<sup>Optional</sup> <a name="ibmDb2SettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.ibmDb2SettingsInput"></a>

```java
public IResolvable|DmsEndpointIbmDb2Settings getIbmDb2SettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a>

---

##### `kafkaSettingsInput`<sup>Optional</sup> <a name="kafkaSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kafkaSettingsInput"></a>

```java
public IResolvable|DmsEndpointKafkaSettings getKafkaSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---

##### `kinesisSettingsInput`<sup>Optional</sup> <a name="kinesisSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kinesisSettingsInput"></a>

```java
public IResolvable|DmsEndpointKinesisSettings getKinesisSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `microsoftSqlServerSettingsInput`<sup>Optional</sup> <a name="microsoftSqlServerSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.microsoftSqlServerSettingsInput"></a>

```java
public IResolvable|DmsEndpointMicrosoftSqlServerSettings getMicrosoftSqlServerSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a>

---

##### `mongoDbSettingsInput`<sup>Optional</sup> <a name="mongoDbSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mongoDbSettingsInput"></a>

```java
public IResolvable|DmsEndpointMongoDbSettings getMongoDbSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a>

---

##### `mySqlSettingsInput`<sup>Optional</sup> <a name="mySqlSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mySqlSettingsInput"></a>

```java
public IResolvable|DmsEndpointMySqlSettings getMySqlSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a>

---

##### `neptuneSettingsInput`<sup>Optional</sup> <a name="neptuneSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.neptuneSettingsInput"></a>

```java
public IResolvable|DmsEndpointNeptuneSettings getNeptuneSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a>

---

##### `oracleSettingsInput`<sup>Optional</sup> <a name="oracleSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.oracleSettingsInput"></a>

```java
public IResolvable|DmsEndpointOracleSettings getOracleSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `postgreSqlSettingsInput`<sup>Optional</sup> <a name="postgreSqlSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.postgreSqlSettingsInput"></a>

```java
public IResolvable|DmsEndpointPostgreSqlSettings getPostgreSqlSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a>

---

##### `redisSettingsInput`<sup>Optional</sup> <a name="redisSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redisSettingsInput"></a>

```java
public IResolvable|DmsEndpointRedisSettings getRedisSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---

##### `redshiftSettingsInput`<sup>Optional</sup> <a name="redshiftSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redshiftSettingsInput"></a>

```java
public IResolvable|DmsEndpointRedshiftSettings getRedshiftSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---

##### `resourceIdentifierInput`<sup>Optional</sup> <a name="resourceIdentifierInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.resourceIdentifierInput"></a>

```java
public java.lang.String getResourceIdentifierInput();
```

- *Type:* java.lang.String

---

##### `s3SettingsInput`<sup>Optional</sup> <a name="s3SettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.s3SettingsInput"></a>

```java
public IResolvable|DmsEndpointS3Settings getS3SettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sslModeInput"></a>

```java
public java.lang.String getSslModeInput();
```

- *Type:* java.lang.String

---

##### `sybaseSettingsInput`<sup>Optional</sup> <a name="sybaseSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sybaseSettingsInput"></a>

```java
public IResolvable|DmsEndpointSybaseSettings getSybaseSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DmsEndpointTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `endpointIdentifier`<sup>Required</sup> <a name="endpointIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointIdentifier"></a>

```java
public java.lang.String getEndpointIdentifier();
```

- *Type:* java.lang.String

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.engineName"></a>

```java
public java.lang.String getEngineName();
```

- *Type:* java.lang.String

---

##### `extraConnectionAttributes`<sup>Required</sup> <a name="extraConnectionAttributes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributes"></a>

```java
public java.lang.String getExtraConnectionAttributes();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `resourceIdentifier`<sup>Required</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.resourceIdentifier"></a>

```java
public java.lang.String getResourceIdentifier();
```

- *Type:* java.lang.String

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DmsEndpointConfig <a name="DmsEndpointConfig" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointConfig;

DmsEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .endpointType(java.lang.String)
    .engineName(java.lang.String)
//  .certificateArn(java.lang.String)
//  .databaseName(java.lang.String)
//  .docDbSettings(DmsEndpointDocDbSettings)
//  .dynamoDbSettings(DmsEndpointDynamoDbSettings)
//  .elasticsearchSettings(DmsEndpointElasticsearchSettings)
//  .endpointIdentifier(java.lang.String)
//  .extraConnectionAttributes(java.lang.String)
//  .gcpMySqlSettings(DmsEndpointGcpMySqlSettings)
//  .ibmDb2Settings(DmsEndpointIbmDb2Settings)
//  .kafkaSettings(DmsEndpointKafkaSettings)
//  .kinesisSettings(DmsEndpointKinesisSettings)
//  .kmsKeyId(java.lang.String)
//  .microsoftSqlServerSettings(DmsEndpointMicrosoftSqlServerSettings)
//  .mongoDbSettings(DmsEndpointMongoDbSettings)
//  .mySqlSettings(DmsEndpointMySqlSettings)
//  .neptuneSettings(DmsEndpointNeptuneSettings)
//  .oracleSettings(DmsEndpointOracleSettings)
//  .password(java.lang.String)
//  .port(java.lang.Number)
//  .postgreSqlSettings(DmsEndpointPostgreSqlSettings)
//  .redisSettings(DmsEndpointRedisSettings)
//  .redshiftSettings(DmsEndpointRedshiftSettings)
//  .resourceIdentifier(java.lang.String)
//  .s3Settings(DmsEndpointS3Settings)
//  .serverName(java.lang.String)
//  .sslMode(java.lang.String)
//  .sybaseSettings(DmsEndpointSybaseSettings)
//  .tags(IResolvable|java.util.List<DmsEndpointTags>)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | The type of endpoint. Valid values are source and target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.engineName">engineName</a></code> | <code>java.lang.String</code> | The type of engine for the endpoint, depending on the EndpointType value. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for the certificate. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | The name of the endpoint database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.docDbSettings">docDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a></code> | Settings in JSON format for the source and target DocumentDB endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.dynamoDbSettings">dynamoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a></code> | Settings in JSON format for the target Amazon DynamoDB endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.elasticsearchSettings">elasticsearchSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | Settings in JSON format for the target OpenSearch endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.endpointIdentifier">endpointIdentifier</a></code> | <code>java.lang.String</code> | The database endpoint identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.extraConnectionAttributes">extraConnectionAttributes</a></code> | <code>java.lang.String</code> | Additional attributes associated with the connection. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.gcpMySqlSettings">gcpMySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a></code> | Settings in JSON format for the source GCP MySQL endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.ibmDb2Settings">ibmDb2Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a></code> | Settings in JSON format for the source IBM Db2 LUW endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kafkaSettings">kafkaSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | Settings in JSON format for the target Apache Kafka endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kinesisSettings">kinesisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.If you don't specify a value for the KmsKeyId parameter, AWS DMS uses your default encryption key. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.microsoftSqlServerSettings">microsoftSqlServerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a></code> | Settings in JSON format for the source and target Microsoft SQL Server endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.mongoDbSettings">mongoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a></code> | Settings in JSON format for the source MongoDB endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.mySqlSettings">mySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a></code> | Settings in JSON format for the source and target MySQL endpoin. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.neptuneSettings">neptuneSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a></code> | Settings in JSON format for the target Amazon Neptune endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.oracleSettings">oracleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a></code> | Settings in JSON format for the source and target Oracle endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.password">password</a></code> | <code>java.lang.String</code> | The password to be used to log in to the endpoint database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.port">port</a></code> | <code>java.lang.Number</code> | The port used by the endpoint database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.postgreSqlSettings">postgreSqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a></code> | Settings in JSON format for the source and target PostgreSQL endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.redisSettings">redisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | Settings in JSON format for the target Redis endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.redshiftSettings">redshiftSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | Settings in JSON format for the Amazon Redshift endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.resourceIdentifier">resourceIdentifier</a></code> | <code>java.lang.String</code> | A display name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.s3Settings">s3Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | Settings in JSON format for the source and target Amazon S3 endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.serverName">serverName</a></code> | <code>java.lang.String</code> | The name of the server where the endpoint database resides. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is none. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.sybaseSettings">sybaseSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a></code> | Settings in JSON format for the source and target SAP ASE endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>></code> | One or more tags to be assigned to the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.username">username</a></code> | <code>java.lang.String</code> | The user name to be used to log in to the endpoint database. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

The type of endpoint. Valid values are source and target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.engineName"></a>

```java
public java.lang.String getEngineName();
```

- *Type:* java.lang.String

The type of engine for the endpoint, depending on the EndpointType value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#engine_name DmsEndpoint#engine_name}

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

The name of the endpoint database.

For a MySQL source or target endpoint, don't specify DatabaseName. To migrate to a specific database, use this setting and targetDbType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}

---

##### `docDbSettings`<sup>Optional</sup> <a name="docDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.docDbSettings"></a>

```java
public DmsEndpointDocDbSettings getDocDbSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a>

Settings in JSON format for the source and target DocumentDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#doc_db_settings DmsEndpoint#doc_db_settings}

---

##### `dynamoDbSettings`<sup>Optional</sup> <a name="dynamoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.dynamoDbSettings"></a>

```java
public DmsEndpointDynamoDbSettings getDynamoDbSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a>

Settings in JSON format for the target Amazon DynamoDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#dynamo_db_settings DmsEndpoint#dynamo_db_settings}

---

##### `elasticsearchSettings`<sup>Optional</sup> <a name="elasticsearchSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.elasticsearchSettings"></a>

```java
public DmsEndpointElasticsearchSettings getElasticsearchSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

Settings in JSON format for the target OpenSearch endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#elasticsearch_settings DmsEndpoint#elasticsearch_settings}

---

##### `endpointIdentifier`<sup>Optional</sup> <a name="endpointIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.endpointIdentifier"></a>

```java
public java.lang.String getEndpointIdentifier();
```

- *Type:* java.lang.String

The database endpoint identifier.

Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#endpoint_identifier DmsEndpoint#endpoint_identifier}

---

##### `extraConnectionAttributes`<sup>Optional</sup> <a name="extraConnectionAttributes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.extraConnectionAttributes"></a>

```java
public java.lang.String getExtraConnectionAttributes();
```

- *Type:* java.lang.String

Additional attributes associated with the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}

---

##### `gcpMySqlSettings`<sup>Optional</sup> <a name="gcpMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.gcpMySqlSettings"></a>

```java
public DmsEndpointGcpMySqlSettings getGcpMySqlSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a>

Settings in JSON format for the source GCP MySQL endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#gcp_my_sql_settings DmsEndpoint#gcp_my_sql_settings}

---

##### `ibmDb2Settings`<sup>Optional</sup> <a name="ibmDb2Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.ibmDb2Settings"></a>

```java
public DmsEndpointIbmDb2Settings getIbmDb2Settings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a>

Settings in JSON format for the source IBM Db2 LUW endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#ibm_db_2_settings DmsEndpoint#ibm_db_2_settings}

---

##### `kafkaSettings`<sup>Optional</sup> <a name="kafkaSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kafkaSettings"></a>

```java
public DmsEndpointKafkaSettings getKafkaSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

Settings in JSON format for the target Apache Kafka endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#kafka_settings DmsEndpoint#kafka_settings}

---

##### `kinesisSettings`<sup>Optional</sup> <a name="kinesisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kinesisSettings"></a>

```java
public DmsEndpointKinesisSettings getKinesisSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#kinesis_settings DmsEndpoint#kinesis_settings}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.If you don't specify a value for the KmsKeyId parameter, AWS DMS uses your default encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#kms_key_id DmsEndpoint#kms_key_id}

---

##### `microsoftSqlServerSettings`<sup>Optional</sup> <a name="microsoftSqlServerSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.microsoftSqlServerSettings"></a>

```java
public DmsEndpointMicrosoftSqlServerSettings getMicrosoftSqlServerSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a>

Settings in JSON format for the source and target Microsoft SQL Server endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#microsoft_sql_server_settings DmsEndpoint#microsoft_sql_server_settings}

---

##### `mongoDbSettings`<sup>Optional</sup> <a name="mongoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.mongoDbSettings"></a>

```java
public DmsEndpointMongoDbSettings getMongoDbSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a>

Settings in JSON format for the source MongoDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#mongo_db_settings DmsEndpoint#mongo_db_settings}

---

##### `mySqlSettings`<sup>Optional</sup> <a name="mySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.mySqlSettings"></a>

```java
public DmsEndpointMySqlSettings getMySqlSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a>

Settings in JSON format for the source and target MySQL endpoin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#my_sql_settings DmsEndpoint#my_sql_settings}

---

##### `neptuneSettings`<sup>Optional</sup> <a name="neptuneSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.neptuneSettings"></a>

```java
public DmsEndpointNeptuneSettings getNeptuneSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a>

Settings in JSON format for the target Amazon Neptune endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#neptune_settings DmsEndpoint#neptune_settings}

---

##### `oracleSettings`<sup>Optional</sup> <a name="oracleSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.oracleSettings"></a>

```java
public DmsEndpointOracleSettings getOracleSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

Settings in JSON format for the source and target Oracle endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#oracle_settings DmsEndpoint#oracle_settings}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password to be used to log in to the endpoint database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#password DmsEndpoint#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port used by the endpoint database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#port DmsEndpoint#port}

---

##### `postgreSqlSettings`<sup>Optional</sup> <a name="postgreSqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.postgreSqlSettings"></a>

```java
public DmsEndpointPostgreSqlSettings getPostgreSqlSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a>

Settings in JSON format for the source and target PostgreSQL endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#postgre_sql_settings DmsEndpoint#postgre_sql_settings}

---

##### `redisSettings`<sup>Optional</sup> <a name="redisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.redisSettings"></a>

```java
public DmsEndpointRedisSettings getRedisSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

Settings in JSON format for the target Redis endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#redis_settings DmsEndpoint#redis_settings}

---

##### `redshiftSettings`<sup>Optional</sup> <a name="redshiftSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.redshiftSettings"></a>

```java
public DmsEndpointRedshiftSettings getRedshiftSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

Settings in JSON format for the Amazon Redshift endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#redshift_settings DmsEndpoint#redshift_settings}

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.resourceIdentifier"></a>

```java
public java.lang.String getResourceIdentifier();
```

- *Type:* java.lang.String

A display name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#resource_identifier DmsEndpoint#resource_identifier}

---

##### `s3Settings`<sup>Optional</sup> <a name="s3Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.s3Settings"></a>

```java
public DmsEndpointS3Settings getS3Settings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

Settings in JSON format for the source and target Amazon S3 endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#s3_settings DmsEndpoint#s3_settings}

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

The name of the server where the endpoint database resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}

---

##### `sybaseSettings`<sup>Optional</sup> <a name="sybaseSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.sybaseSettings"></a>

```java
public DmsEndpointSybaseSettings getSybaseSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a>

Settings in JSON format for the source and target SAP ASE endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#sybase_settings DmsEndpoint#sybase_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DmsEndpointTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>>

One or more tags to be assigned to the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#tags DmsEndpoint#tags}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The user name to be used to log in to the endpoint database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#username DmsEndpoint#username}

---

### DmsEndpointDocDbSettings <a name="DmsEndpointDocDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointDocDbSettings;

DmsEndpointDocDbSettings.builder()
//  .docsToInvestigate(java.lang.Number)
//  .extractDocId(java.lang.Boolean|IResolvable)
//  .nestingLevel(java.lang.String)
//  .secretsManagerAccessRoleArn(java.lang.String)
//  .secretsManagerSecretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.docsToInvestigate">docsToInvestigate</a></code> | <code>java.lang.Number</code> | Indicates the number of documents to preview to determine the document organization. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.extractDocId">extractDocId</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies the document ID. Use this setting when NestingLevel is set to "none". |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.nestingLevel">nestingLevel</a></code> | <code>java.lang.String</code> | Specifies either document or table mode. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |

---

##### `docsToInvestigate`<sup>Optional</sup> <a name="docsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.docsToInvestigate"></a>

```java
public java.lang.Number getDocsToInvestigate();
```

- *Type:* java.lang.Number

Indicates the number of documents to preview to determine the document organization.

Use this setting when NestingLevel is set to "one".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}

---

##### `extractDocId`<sup>Optional</sup> <a name="extractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.extractDocId"></a>

```java
public java.lang.Boolean|IResolvable getExtractDocId();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies the document ID. Use this setting when NestingLevel is set to "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}

---

##### `nestingLevel`<sup>Optional</sup> <a name="nestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.nestingLevel"></a>

```java
public java.lang.String getNestingLevel();
```

- *Type:* java.lang.String

Specifies either document or table mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#nesting_level DmsEndpoint#nesting_level}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the AWS Secrets Manager secret that allows access to the DocumentDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the AWS Secrets Manager secret that allows access to the DocumentDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

### DmsEndpointDynamoDbSettings <a name="DmsEndpointDynamoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointDynamoDbSettings;

DmsEndpointDynamoDbSettings.builder()
//  .serviceAccessRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) used by the service to access the IAM role. |

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) used by the service to access the IAM role.

The role must allow the iam:PassRole action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

### DmsEndpointElasticsearchSettings <a name="DmsEndpointElasticsearchSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointElasticsearchSettings;

DmsEndpointElasticsearchSettings.builder()
//  .endpointUri(java.lang.String)
//  .errorRetryDuration(java.lang.Number)
//  .fullLoadErrorPercentage(java.lang.Number)
//  .serviceAccessRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.endpointUri">endpointUri</a></code> | <code>java.lang.String</code> | The endpoint for the OpenSearch cluster. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.errorRetryDuration">errorRetryDuration</a></code> | <code>java.lang.Number</code> | The maximum number of seconds for which DMS retries failed API requests to the OpenSearch cluster. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.fullLoadErrorPercentage">fullLoadErrorPercentage</a></code> | <code>java.lang.Number</code> | The maximum percentage of records that can fail to be written before a full load operation stops. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) used by the service to access the IAM role. |

---

##### `endpointUri`<sup>Optional</sup> <a name="endpointUri" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.endpointUri"></a>

```java
public java.lang.String getEndpointUri();
```

- *Type:* java.lang.String

The endpoint for the OpenSearch cluster.

AWS DMS uses HTTPS if a transport protocol (either HTTP or HTTPS) isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#endpoint_uri DmsEndpoint#endpoint_uri}

---

##### `errorRetryDuration`<sup>Optional</sup> <a name="errorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.errorRetryDuration"></a>

```java
public java.lang.Number getErrorRetryDuration();
```

- *Type:* java.lang.Number

The maximum number of seconds for which DMS retries failed API requests to the OpenSearch cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}

---

##### `fullLoadErrorPercentage`<sup>Optional</sup> <a name="fullLoadErrorPercentage" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.fullLoadErrorPercentage"></a>

```java
public java.lang.Number getFullLoadErrorPercentage();
```

- *Type:* java.lang.Number

The maximum percentage of records that can fail to be written before a full load operation stops.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#full_load_error_percentage DmsEndpoint#full_load_error_percentage}

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) used by the service to access the IAM role.

The role must allow the iam:PassRole action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

### DmsEndpointGcpMySqlSettings <a name="DmsEndpointGcpMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointGcpMySqlSettings;

DmsEndpointGcpMySqlSettings.builder()
//  .afterConnectScript(java.lang.String)
//  .cleanSourceMetadataOnMismatch(java.lang.Boolean|IResolvable)
//  .databaseName(java.lang.String)
//  .eventsPollInterval(java.lang.Number)
//  .maxFileSize(java.lang.Number)
//  .parallelLoadThreads(java.lang.Number)
//  .password(java.lang.String)
//  .port(java.lang.Number)
//  .secretsManagerAccessRoleArn(java.lang.String)
//  .secretsManagerSecretId(java.lang.String)
//  .serverName(java.lang.String)
//  .serverTimezone(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.afterConnectScript">afterConnectScript</a></code> | <code>java.lang.String</code> | Specifies a script to run immediately after AWS DMS connects to the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.cleanSourceMetadataOnMismatch">cleanSourceMetadataOnMismatch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Adjusts the behavior of AWS DMS when migrating from an SQL Server source database that is hosted as part of an Always On availability group cluster. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Database name for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.eventsPollInterval">eventsPollInterval</a></code> | <code>java.lang.Number</code> | Specifies how often to check the binary log for new changes/events when the database is idle. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.parallelLoadThreads">parallelLoadThreads</a></code> | <code>java.lang.Number</code> | Improves performance when loading data into the MySQL-compatible target database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.password">password</a></code> | <code>java.lang.String</code> | Endpoint connection password. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.port">port</a></code> | <code>java.lang.Number</code> | The port used by the endpoint database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MySQL endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.serverName">serverName</a></code> | <code>java.lang.String</code> | The MySQL host name. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.serverTimezone">serverTimezone</a></code> | <code>java.lang.String</code> | Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.username">username</a></code> | <code>java.lang.String</code> | Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks. |

---

##### `afterConnectScript`<sup>Optional</sup> <a name="afterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.afterConnectScript"></a>

```java
public java.lang.String getAfterConnectScript();
```

- *Type:* java.lang.String

Specifies a script to run immediately after AWS DMS connects to the endpoint.

The migration task continues running regardless if the SQL statement succeeds or fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}

---

##### `cleanSourceMetadataOnMismatch`<sup>Optional</sup> <a name="cleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.cleanSourceMetadataOnMismatch"></a>

```java
public java.lang.Boolean|IResolvable getCleanSourceMetadataOnMismatch();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Adjusts the behavior of AWS DMS when migrating from an SQL Server source database that is hosted as part of an Always On availability group cluster.

If you need AWS DMS to poll all the nodes in the Always On cluster for transaction backups, set this attribute to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#clean_source_metadata_on_mismatch DmsEndpoint#clean_source_metadata_on_mismatch}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Database name for the endpoint.

For a MySQL source or target endpoint, don't explicitly specify the database using the DatabaseName request parameter on either the CreateEndpoint or ModifyEndpoint API call. Specifying DatabaseName when you create or modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the AWS DMS task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}

---

##### `eventsPollInterval`<sup>Optional</sup> <a name="eventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.eventsPollInterval"></a>

```java
public java.lang.Number getEventsPollInterval();
```

- *Type:* java.lang.Number

Specifies how often to check the binary log for new changes/events when the database is idle.

The default is five seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#events_poll_interval DmsEndpoint#events_poll_interval}

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `parallelLoadThreads`<sup>Optional</sup> <a name="parallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.parallelLoadThreads"></a>

```java
public java.lang.Number getParallelLoadThreads();
```

- *Type:* java.lang.Number

Improves performance when loading data into the MySQL-compatible target database.

Specifies how many threads to use to load the data into the MySQL-compatible target database. Setting a large number of threads can have an adverse effect on database performance, because a separate connection is required for each thread. The default is one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#parallel_load_threads DmsEndpoint#parallel_load_threads}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Endpoint connection password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#password DmsEndpoint#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port used by the endpoint database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#port DmsEndpoint#port}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the AWS Secrets Manager secret that allows access to the MySQL endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MySQL endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

The MySQL host name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}

---

##### `serverTimezone`<sup>Optional</sup> <a name="serverTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.serverTimezone"></a>

```java
public java.lang.String getServerTimezone();
```

- *Type:* java.lang.String

Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#server_timezone DmsEndpoint#server_timezone}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#username DmsEndpoint#username}

---

### DmsEndpointIbmDb2Settings <a name="DmsEndpointIbmDb2Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointIbmDb2Settings;

DmsEndpointIbmDb2Settings.builder()
//  .currentLsn(java.lang.String)
//  .keepCsvFiles(java.lang.Boolean|IResolvable)
//  .loadTimeout(java.lang.Number)
//  .maxFileSize(java.lang.Number)
//  .maxKBytesPerRead(java.lang.Number)
//  .secretsManagerAccessRoleArn(java.lang.String)
//  .secretsManagerSecretId(java.lang.String)
//  .setDataCaptureChanges(java.lang.Boolean|IResolvable)
//  .writeBufferSize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.currentLsn">currentLsn</a></code> | <code>java.lang.String</code> | For ongoing replication (CDC), use CurrentLSN to specify a log sequence number (LSN) where you want the replication to start. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.keepCsvFiles">keepCsvFiles</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, AWS DMS saves any .csv files to the Db2 LUW target that were used to replicate data. DMS uses these files for analysis and troubleshooting. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.loadTimeout">loadTimeout</a></code> | <code>java.lang.Number</code> | The amount of time (in milliseconds) before AWS DMS times out operations performed by DMS on the Db2 target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | Specifies the maximum size (in KB) of .csv files used to transfer data to Db2 LUW. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.maxKBytesPerRead">maxKBytesPerRead</a></code> | <code>java.lang.Number</code> | Maximum number of bytes per read, as a NUMBER value. The default is 64 KB. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the IBMDB2 endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.setDataCaptureChanges">setDataCaptureChanges</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables ongoing replication (CDC) as a BOOLEAN value. The default is true. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.writeBufferSize">writeBufferSize</a></code> | <code>java.lang.Number</code> | The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk on the DMS replication instance. The default value is 1024 (1 MB). |

---

##### `currentLsn`<sup>Optional</sup> <a name="currentLsn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.currentLsn"></a>

```java
public java.lang.String getCurrentLsn();
```

- *Type:* java.lang.String

For ongoing replication (CDC), use CurrentLSN to specify a log sequence number (LSN) where you want the replication to start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#current_lsn DmsEndpoint#current_lsn}

---

##### `keepCsvFiles`<sup>Optional</sup> <a name="keepCsvFiles" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.keepCsvFiles"></a>

```java
public java.lang.Boolean|IResolvable getKeepCsvFiles();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, AWS DMS saves any .csv files to the Db2 LUW target that were used to replicate data. DMS uses these files for analysis and troubleshooting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#keep_csv_files DmsEndpoint#keep_csv_files}

---

##### `loadTimeout`<sup>Optional</sup> <a name="loadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.loadTimeout"></a>

```java
public java.lang.Number getLoadTimeout();
```

- *Type:* java.lang.Number

The amount of time (in milliseconds) before AWS DMS times out operations performed by DMS on the Db2 target.

The default value is 1200 (20 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#load_timeout DmsEndpoint#load_timeout}

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

Specifies the maximum size (in KB) of .csv files used to transfer data to Db2 LUW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `maxKBytesPerRead`<sup>Optional</sup> <a name="maxKBytesPerRead" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.maxKBytesPerRead"></a>

```java
public java.lang.Number getMaxKBytesPerRead();
```

- *Type:* java.lang.Number

Maximum number of bytes per read, as a NUMBER value. The default is 64 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#max_k_bytes_per_read DmsEndpoint#max_k_bytes_per_read}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

The role must allow the iam:PassRole action. SecretsManagerSecret has the value ofthe AWS Secrets Manager secret that allows access to the Db2 LUW endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the IBMDB2 endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `setDataCaptureChanges`<sup>Optional</sup> <a name="setDataCaptureChanges" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.setDataCaptureChanges"></a>

```java
public java.lang.Boolean|IResolvable getSetDataCaptureChanges();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables ongoing replication (CDC) as a BOOLEAN value. The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#set_data_capture_changes DmsEndpoint#set_data_capture_changes}

---

##### `writeBufferSize`<sup>Optional</sup> <a name="writeBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.writeBufferSize"></a>

```java
public java.lang.Number getWriteBufferSize();
```

- *Type:* java.lang.Number

The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk on the DMS replication instance. The default value is 1024 (1 MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#write_buffer_size DmsEndpoint#write_buffer_size}

---

### DmsEndpointKafkaSettings <a name="DmsEndpointKafkaSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointKafkaSettings;

DmsEndpointKafkaSettings.builder()
//  .broker(java.lang.String)
//  .includeControlDetails(java.lang.Boolean|IResolvable)
//  .includeNullAndEmpty(java.lang.Boolean|IResolvable)
//  .includePartitionValue(java.lang.Boolean|IResolvable)
//  .includeTableAlterOperations(java.lang.Boolean|IResolvable)
//  .includeTransactionDetails(java.lang.Boolean|IResolvable)
//  .messageFormat(java.lang.String)
//  .messageMaxBytes(java.lang.Number)
//  .noHexPrefix(java.lang.Boolean|IResolvable)
//  .partitionIncludeSchemaTable(java.lang.Boolean|IResolvable)
//  .saslPassword(java.lang.String)
//  .saslUserName(java.lang.String)
//  .securityProtocol(java.lang.String)
//  .sslCaCertificateArn(java.lang.String)
//  .sslClientCertificateArn(java.lang.String)
//  .sslClientKeyArn(java.lang.String)
//  .sslClientKeyPassword(java.lang.String)
//  .topic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.broker">broker</a></code> | <code>java.lang.String</code> | A comma-separated list of one or more broker locations in your Kafka cluster that host your Kafka instance. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeControlDetails">includeControlDetails</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Shows detailed control information for table definition, column definition, and table and column changes in the Kafka message output. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include NULL and empty columns for records migrated to the endpoint. The default is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includePartitionValue">includePartitionValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Shows the partition value within the Kafka message output unless the partition type is schema-table-type. The default is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Provides detailed transaction information from the source database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.messageFormat">messageFormat</a></code> | <code>java.lang.String</code> | The output format for the records created on the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.messageMaxBytes">messageMaxBytes</a></code> | <code>java.lang.Number</code> | The maximum size in bytes for records created on the endpoint The default is 1,000,000. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.noHexPrefix">noHexPrefix</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Prefixes schema and table names to partition values, when the partition type is primary-key-type. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.saslPassword">saslPassword</a></code> | <code>java.lang.String</code> | The secure password that you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.saslUserName">saslUserName</a></code> | <code>java.lang.String</code> | The secure user name you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.securityProtocol">securityProtocol</a></code> | <code>java.lang.String</code> | Set secure connection to a Kafka target endpoint using Transport Layer Security (TLS). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for the private certificate authority (CA) cert that AWS DMS uses to securely connect to your Kafka target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientCertificateArn">sslClientCertificateArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the client certificate used to securely connect to a Kafka target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyArn">sslClientKeyArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for the client private key used to securely connect to a Kafka target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyPassword">sslClientKeyPassword</a></code> | <code>java.lang.String</code> | The password for the client private key used to securely connect to a Kafka target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.topic">topic</a></code> | <code>java.lang.String</code> | The topic to which you migrate the data. |

---

##### `broker`<sup>Optional</sup> <a name="broker" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.broker"></a>

```java
public java.lang.String getBroker();
```

- *Type:* java.lang.String

A comma-separated list of one or more broker locations in your Kafka cluster that host your Kafka instance.

Specify each broker location in the form broker-hostname-or-ip:port

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#broker DmsEndpoint#broker}

---

##### `includeControlDetails`<sup>Optional</sup> <a name="includeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeControlDetails"></a>

```java
public java.lang.Boolean|IResolvable getIncludeControlDetails();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Shows detailed control information for table definition, column definition, and table and column changes in the Kafka message output.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}

---

##### `includeNullAndEmpty`<sup>Optional</sup> <a name="includeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeNullAndEmpty"></a>

```java
public java.lang.Boolean|IResolvable getIncludeNullAndEmpty();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include NULL and empty columns for records migrated to the endpoint. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}

---

##### `includePartitionValue`<sup>Optional</sup> <a name="includePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includePartitionValue"></a>

```java
public java.lang.Boolean|IResolvable getIncludePartitionValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Shows the partition value within the Kafka message output unless the partition type is schema-table-type. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}

---

##### `includeTableAlterOperations`<sup>Optional</sup> <a name="includeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTableAlterOperations"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTableAlterOperations();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}

---

##### `includeTransactionDetails`<sup>Optional</sup> <a name="includeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTransactionDetails"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTransactionDetails();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Provides detailed transaction information from the source database.

This information includes a commit timestamp, a log position, and values for transaction_id, previous transaction_id, and transaction_record_id (the record offset within a transaction). The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}

---

##### `messageFormat`<sup>Optional</sup> <a name="messageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.messageFormat"></a>

```java
public java.lang.String getMessageFormat();
```

- *Type:* java.lang.String

The output format for the records created on the endpoint.

The message format is JSON (default) or JSON_UNFORMATTED (a single line with no tab).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}

---

##### `messageMaxBytes`<sup>Optional</sup> <a name="messageMaxBytes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.messageMaxBytes"></a>

```java
public java.lang.Number getMessageMaxBytes();
```

- *Type:* java.lang.Number

The maximum size in bytes for records created on the endpoint The default is 1,000,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#message_max_bytes DmsEndpoint#message_max_bytes}

---

##### `noHexPrefix`<sup>Optional</sup> <a name="noHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.noHexPrefix"></a>

```java
public java.lang.Boolean|IResolvable getNoHexPrefix();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format.

For example, by default, AWS DMS adds a '0x' prefix to the LOB column type in hexadecimal format moving from an Oracle source to a Kafka target. Use the NoHexPrefix endpoint setting to enable migration of RAW data type columns without adding the '0x' prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}

---

##### `partitionIncludeSchemaTable`<sup>Optional</sup> <a name="partitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.partitionIncludeSchemaTable"></a>

```java
public java.lang.Boolean|IResolvable getPartitionIncludeSchemaTable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Prefixes schema and table names to partition values, when the partition type is primary-key-type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}

---

##### `saslPassword`<sup>Optional</sup> <a name="saslPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.saslPassword"></a>

```java
public java.lang.String getSaslPassword();
```

- *Type:* java.lang.String

The secure password that you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#sasl_password DmsEndpoint#sasl_password}

---

##### `saslUserName`<sup>Optional</sup> <a name="saslUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.saslUserName"></a>

```java
public java.lang.String getSaslUserName();
```

- *Type:* java.lang.String

The secure user name you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#sasl_user_name DmsEndpoint#sasl_user_name}

---

##### `securityProtocol`<sup>Optional</sup> <a name="securityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.securityProtocol"></a>

```java
public java.lang.String getSecurityProtocol();
```

- *Type:* java.lang.String

Set secure connection to a Kafka target endpoint using Transport Layer Security (TLS).

Options include ssl-encryption, ssl-authentication, and sasl-ssl. sasl-ssl requires SaslUsername and SaslPassword.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#security_protocol DmsEndpoint#security_protocol}

---

##### `sslCaCertificateArn`<sup>Optional</sup> <a name="sslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslCaCertificateArn"></a>

```java
public java.lang.String getSslCaCertificateArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for the private certificate authority (CA) cert that AWS DMS uses to securely connect to your Kafka target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}

---

##### `sslClientCertificateArn`<sup>Optional</sup> <a name="sslClientCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientCertificateArn"></a>

```java
public java.lang.String getSslClientCertificateArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the client certificate used to securely connect to a Kafka target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}

---

##### `sslClientKeyArn`<sup>Optional</sup> <a name="sslClientKeyArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyArn"></a>

```java
public java.lang.String getSslClientKeyArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for the client private key used to securely connect to a Kafka target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}

---

##### `sslClientKeyPassword`<sup>Optional</sup> <a name="sslClientKeyPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyPassword"></a>

```java
public java.lang.String getSslClientKeyPassword();
```

- *Type:* java.lang.String

The password for the client private key used to securely connect to a Kafka target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#ssl_client_key_password DmsEndpoint#ssl_client_key_password}

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

The topic to which you migrate the data.

If you don't specify a topic, AWS DMS specifies "kafka-default-topic" as the migration topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#topic DmsEndpoint#topic}

---

### DmsEndpointKinesisSettings <a name="DmsEndpointKinesisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointKinesisSettings;

DmsEndpointKinesisSettings.builder()
//  .includeControlDetails(java.lang.Boolean|IResolvable)
//  .includeNullAndEmpty(java.lang.Boolean|IResolvable)
//  .includePartitionValue(java.lang.Boolean|IResolvable)
//  .includeTableAlterOperations(java.lang.Boolean|IResolvable)
//  .includeTransactionDetails(java.lang.Boolean|IResolvable)
//  .messageFormat(java.lang.String)
//  .noHexPrefix(java.lang.Boolean|IResolvable)
//  .partitionIncludeSchemaTable(java.lang.Boolean|IResolvable)
//  .serviceAccessRoleArn(java.lang.String)
//  .streamArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeControlDetails">includeControlDetails</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Shows detailed control information for table definition, column definition, and table and column changes in the Kinesis message output. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include NULL and empty columns for records migrated to the endpoint. The default is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includePartitionValue">includePartitionValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Shows the partition value within the Kinesis message output, unless the partition type is schema-table-type. The default is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Provides detailed transaction information from the source database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.messageFormat">messageFormat</a></code> | <code>java.lang.String</code> | The output format for the records created on the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.noHexPrefix">noHexPrefix</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Prefixes schema and table names to partition values, when the partition type is primary-key-type. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for the IAM role that AWS DMS uses to write to the Kinesis data stream. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for the Amazon Kinesis Data Streams endpoint. |

---

##### `includeControlDetails`<sup>Optional</sup> <a name="includeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeControlDetails"></a>

```java
public java.lang.Boolean|IResolvable getIncludeControlDetails();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Shows detailed control information for table definition, column definition, and table and column changes in the Kinesis message output.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}

---

##### `includeNullAndEmpty`<sup>Optional</sup> <a name="includeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeNullAndEmpty"></a>

```java
public java.lang.Boolean|IResolvable getIncludeNullAndEmpty();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include NULL and empty columns for records migrated to the endpoint. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}

---

##### `includePartitionValue`<sup>Optional</sup> <a name="includePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includePartitionValue"></a>

```java
public java.lang.Boolean|IResolvable getIncludePartitionValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Shows the partition value within the Kinesis message output, unless the partition type is schema-table-type. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}

---

##### `includeTableAlterOperations`<sup>Optional</sup> <a name="includeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTableAlterOperations"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTableAlterOperations();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}

---

##### `includeTransactionDetails`<sup>Optional</sup> <a name="includeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTransactionDetails"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTransactionDetails();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Provides detailed transaction information from the source database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}

---

##### `messageFormat`<sup>Optional</sup> <a name="messageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.messageFormat"></a>

```java
public java.lang.String getMessageFormat();
```

- *Type:* java.lang.String

The output format for the records created on the endpoint.

The message format is JSON (default) or JSON_UNFORMATTED (a single line with no tab).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}

---

##### `noHexPrefix`<sup>Optional</sup> <a name="noHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.noHexPrefix"></a>

```java
public java.lang.Boolean|IResolvable getNoHexPrefix();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}

---

##### `partitionIncludeSchemaTable`<sup>Optional</sup> <a name="partitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.partitionIncludeSchemaTable"></a>

```java
public java.lang.Boolean|IResolvable getPartitionIncludeSchemaTable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Prefixes schema and table names to partition values, when the partition type is primary-key-type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for the IAM role that AWS DMS uses to write to the Kinesis data stream.

The role must allow the iam:PassRole action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

##### `streamArn`<sup>Optional</sup> <a name="streamArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for the Amazon Kinesis Data Streams endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#stream_arn DmsEndpoint#stream_arn}

---

### DmsEndpointMicrosoftSqlServerSettings <a name="DmsEndpointMicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointMicrosoftSqlServerSettings;

DmsEndpointMicrosoftSqlServerSettings.builder()
//  .bcpPacketSize(java.lang.Number)
//  .controlTablesFileGroup(java.lang.String)
//  .databaseName(java.lang.String)
//  .forceLobLookup(java.lang.Boolean|IResolvable)
//  .password(java.lang.String)
//  .port(java.lang.Number)
//  .querySingleAlwaysOnNode(java.lang.Boolean|IResolvable)
//  .readBackupOnly(java.lang.Boolean|IResolvable)
//  .safeguardPolicy(java.lang.String)
//  .secretsManagerAccessRoleArn(java.lang.String)
//  .secretsManagerSecretId(java.lang.String)
//  .serverName(java.lang.String)
//  .tlogAccessMode(java.lang.String)
//  .trimSpaceInChar(java.lang.Boolean|IResolvable)
//  .useBcpFullLoad(java.lang.Boolean|IResolvable)
//  .username(java.lang.String)
//  .useThirdPartyBackupDevice(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.bcpPacketSize">bcpPacketSize</a></code> | <code>java.lang.Number</code> | The maximum size of the packets (in bytes) used to transfer data using BCP. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.controlTablesFileGroup">controlTablesFileGroup</a></code> | <code>java.lang.String</code> | Specifies a file group for the AWS DMS internal tables. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Database name for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.forceLobLookup">forceLobLookup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Forces LOB lookup on inline LOB. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.password">password</a></code> | <code>java.lang.String</code> | Endpoint connection password. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.port">port</a></code> | <code>java.lang.Number</code> | Endpoint TCP port. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.querySingleAlwaysOnNode">querySingleAlwaysOnNode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Cleans and recreates table metadata information on the replication instance when a mismatch occurs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.readBackupOnly">readBackupOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When this attribute is set to Y, AWS DMS only reads changes from transaction log backups and doesn't read from the active transaction log file during ongoing replication. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.safeguardPolicy">safeguardPolicy</a></code> | <code>java.lang.String</code> | Use this attribute to minimize the need to access the backup log and enable AWS DMS to prevent truncation using one of the following two methods. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MicrosoftSQLServer endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Fully qualified domain name of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.tlogAccessMode">tlogAccessMode</a></code> | <code>java.lang.String</code> | Indicates the mode used to fetch CDC data. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.trimSpaceInChar">trimSpaceInChar</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use the TrimSpaceInChar source endpoint setting to right-trim data on CHAR and NCHAR data types during migration. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.useBcpFullLoad">useBcpFullLoad</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use this to attribute to transfer data for full-load operations using BCP. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.username">username</a></code> | <code>java.lang.String</code> | Endpoint connection user name. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.useThirdPartyBackupDevice">useThirdPartyBackupDevice</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When this attribute is set to Y, DMS processes third-party transaction log backups if they are created in native format. |

---

##### `bcpPacketSize`<sup>Optional</sup> <a name="bcpPacketSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.bcpPacketSize"></a>

```java
public java.lang.Number getBcpPacketSize();
```

- *Type:* java.lang.Number

The maximum size of the packets (in bytes) used to transfer data using BCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#bcp_packet_size DmsEndpoint#bcp_packet_size}

---

##### `controlTablesFileGroup`<sup>Optional</sup> <a name="controlTablesFileGroup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.controlTablesFileGroup"></a>

```java
public java.lang.String getControlTablesFileGroup();
```

- *Type:* java.lang.String

Specifies a file group for the AWS DMS internal tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#control_tables_file_group DmsEndpoint#control_tables_file_group}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Database name for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}

---

##### `forceLobLookup`<sup>Optional</sup> <a name="forceLobLookup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.forceLobLookup"></a>

```java
public java.lang.Boolean|IResolvable getForceLobLookup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Forces LOB lookup on inline LOB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#force_lob_lookup DmsEndpoint#force_lob_lookup}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Endpoint connection password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#password DmsEndpoint#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Endpoint TCP port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#port DmsEndpoint#port}

---

##### `querySingleAlwaysOnNode`<sup>Optional</sup> <a name="querySingleAlwaysOnNode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.querySingleAlwaysOnNode"></a>

```java
public java.lang.Boolean|IResolvable getQuerySingleAlwaysOnNode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Cleans and recreates table metadata information on the replication instance when a mismatch occurs.

An example is a situation where running an alter DDL statement on a table might result in different information about the table cached in the replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#query_single_always_on_node DmsEndpoint#query_single_always_on_node}

---

##### `readBackupOnly`<sup>Optional</sup> <a name="readBackupOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.readBackupOnly"></a>

```java
public java.lang.Boolean|IResolvable getReadBackupOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When this attribute is set to Y, AWS DMS only reads changes from transaction log backups and doesn't read from the active transaction log file during ongoing replication.

Setting this parameter to Y enables you to control active transaction log file growth during full load and ongoing replication tasks. However, it can add some source latency to ongoing replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#read_backup_only DmsEndpoint#read_backup_only}

---

##### `safeguardPolicy`<sup>Optional</sup> <a name="safeguardPolicy" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.safeguardPolicy"></a>

```java
public java.lang.String getSafeguardPolicy();
```

- *Type:* java.lang.String

Use this attribute to minimize the need to access the backup log and enable AWS DMS to prevent truncation using one of the following two methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#safeguard_policy DmsEndpoint#safeguard_policy}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MicrosoftSQLServer endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Fully qualified domain name of the endpoint.

For an Amazon RDS SQL Server instance, this is the output of DescribeDBInstances, in the Endpoint.Address field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}

---

##### `tlogAccessMode`<sup>Optional</sup> <a name="tlogAccessMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.tlogAccessMode"></a>

```java
public java.lang.String getTlogAccessMode();
```

- *Type:* java.lang.String

Indicates the mode used to fetch CDC data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#tlog_access_mode DmsEndpoint#tlog_access_mode}

---

##### `trimSpaceInChar`<sup>Optional</sup> <a name="trimSpaceInChar" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.trimSpaceInChar"></a>

```java
public java.lang.Boolean|IResolvable getTrimSpaceInChar();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use the TrimSpaceInChar source endpoint setting to right-trim data on CHAR and NCHAR data types during migration.

Setting TrimSpaceInChar does not left-trim data. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#trim_space_in_char DmsEndpoint#trim_space_in_char}

---

##### `useBcpFullLoad`<sup>Optional</sup> <a name="useBcpFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.useBcpFullLoad"></a>

```java
public java.lang.Boolean|IResolvable getUseBcpFullLoad();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use this to attribute to transfer data for full-load operations using BCP.

When the target table contains an identity column that does not exist in the source table, you must disable the use BCP for loading table option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#use_bcp_full_load DmsEndpoint#use_bcp_full_load}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Endpoint connection user name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#username DmsEndpoint#username}

---

##### `useThirdPartyBackupDevice`<sup>Optional</sup> <a name="useThirdPartyBackupDevice" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.useThirdPartyBackupDevice"></a>

```java
public java.lang.Boolean|IResolvable getUseThirdPartyBackupDevice();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When this attribute is set to Y, DMS processes third-party transaction log backups if they are created in native format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#use_third_party_backup_device DmsEndpoint#use_third_party_backup_device}

---

### DmsEndpointMongoDbSettings <a name="DmsEndpointMongoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointMongoDbSettings;

DmsEndpointMongoDbSettings.builder()
//  .authMechanism(java.lang.String)
//  .authSource(java.lang.String)
//  .authType(java.lang.String)
//  .databaseName(java.lang.String)
//  .docsToInvestigate(java.lang.String)
//  .extractDocId(java.lang.String)
//  .nestingLevel(java.lang.String)
//  .password(java.lang.String)
//  .port(java.lang.Number)
//  .secretsManagerAccessRoleArn(java.lang.String)
//  .secretsManagerSecretId(java.lang.String)
//  .serverName(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authMechanism">authMechanism</a></code> | <code>java.lang.String</code> | The authentication mechanism you use to access the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authSource">authSource</a></code> | <code>java.lang.String</code> | The MongoDB database name. This setting isn't used when AuthType is set to "no". |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authType">authType</a></code> | <code>java.lang.String</code> | The authentication type you use to access the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | The database name on the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.docsToInvestigate">docsToInvestigate</a></code> | <code>java.lang.String</code> | Indicates the number of documents to preview to determine the document organization. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.extractDocId">extractDocId</a></code> | <code>java.lang.String</code> | Specifies the document ID. Use this setting when NestingLevel is set to "none". |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.nestingLevel">nestingLevel</a></code> | <code>java.lang.String</code> | Specifies either document or table mode. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.password">password</a></code> | <code>java.lang.String</code> | The password for the user account you use to access the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.port">port</a></code> | <code>java.lang.Number</code> | The port value for the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MongoDB endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.serverName">serverName</a></code> | <code>java.lang.String</code> | The name of the server on the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.username">username</a></code> | <code>java.lang.String</code> | The user name you use to access the MongoDB source endpoint. |

---

##### `authMechanism`<sup>Optional</sup> <a name="authMechanism" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authMechanism"></a>

```java
public java.lang.String getAuthMechanism();
```

- *Type:* java.lang.String

The authentication mechanism you use to access the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#auth_mechanism DmsEndpoint#auth_mechanism}

---

##### `authSource`<sup>Optional</sup> <a name="authSource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authSource"></a>

```java
public java.lang.String getAuthSource();
```

- *Type:* java.lang.String

The MongoDB database name. This setting isn't used when AuthType is set to "no".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#auth_source DmsEndpoint#auth_source}

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

The authentication type you use to access the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

The database name on the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}

---

##### `docsToInvestigate`<sup>Optional</sup> <a name="docsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.docsToInvestigate"></a>

```java
public java.lang.String getDocsToInvestigate();
```

- *Type:* java.lang.String

Indicates the number of documents to preview to determine the document organization.

Use this setting when NestingLevel is set to "one".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}

---

##### `extractDocId`<sup>Optional</sup> <a name="extractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.extractDocId"></a>

```java
public java.lang.String getExtractDocId();
```

- *Type:* java.lang.String

Specifies the document ID. Use this setting when NestingLevel is set to "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}

---

##### `nestingLevel`<sup>Optional</sup> <a name="nestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.nestingLevel"></a>

```java
public java.lang.String getNestingLevel();
```

- *Type:* java.lang.String

Specifies either document or table mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#nesting_level DmsEndpoint#nesting_level}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password for the user account you use to access the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#password DmsEndpoint#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port value for the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#port DmsEndpoint#port}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MongoDB endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

The name of the server on the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The user name you use to access the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#username DmsEndpoint#username}

---

### DmsEndpointMySqlSettings <a name="DmsEndpointMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointMySqlSettings;

DmsEndpointMySqlSettings.builder()
//  .afterConnectScript(java.lang.String)
//  .cleanSourceMetadataOnMismatch(java.lang.Boolean|IResolvable)
//  .eventsPollInterval(java.lang.Number)
//  .maxFileSize(java.lang.Number)
//  .parallelLoadThreads(java.lang.Number)
//  .secretsManagerAccessRoleArn(java.lang.String)
//  .secretsManagerSecretId(java.lang.String)
//  .serverTimezone(java.lang.String)
//  .targetDbType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.afterConnectScript">afterConnectScript</a></code> | <code>java.lang.String</code> | Specifies a script to run immediately after AWS DMS connects to the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.cleanSourceMetadataOnMismatch">cleanSourceMetadataOnMismatch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Cleans and recreates table metadata information on the replication instance when a mismatch occurs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.eventsPollInterval">eventsPollInterval</a></code> | <code>java.lang.Number</code> | Specifies how often to check the binary log for new changes/events when the database is idle. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.parallelLoadThreads">parallelLoadThreads</a></code> | <code>java.lang.Number</code> | Improves performance when loading data into the MySQL-compatible target database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MySQL endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.serverTimezone">serverTimezone</a></code> | <code>java.lang.String</code> | Specifies the time zone for the source MySQL database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.targetDbType">targetDbType</a></code> | <code>java.lang.String</code> | Specifies where to migrate source tables on the target, either to a single database or multiple databases. |

---

##### `afterConnectScript`<sup>Optional</sup> <a name="afterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.afterConnectScript"></a>

```java
public java.lang.String getAfterConnectScript();
```

- *Type:* java.lang.String

Specifies a script to run immediately after AWS DMS connects to the endpoint.

The migration task continues running regardless if the SQL statement succeeds or fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}

---

##### `cleanSourceMetadataOnMismatch`<sup>Optional</sup> <a name="cleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.cleanSourceMetadataOnMismatch"></a>

```java
public java.lang.Boolean|IResolvable getCleanSourceMetadataOnMismatch();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Cleans and recreates table metadata information on the replication instance when a mismatch occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#clean_source_metadata_on_mismatch DmsEndpoint#clean_source_metadata_on_mismatch}

---

##### `eventsPollInterval`<sup>Optional</sup> <a name="eventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.eventsPollInterval"></a>

```java
public java.lang.Number getEventsPollInterval();
```

- *Type:* java.lang.Number

Specifies how often to check the binary log for new changes/events when the database is idle.

The default is five seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#events_poll_interval DmsEndpoint#events_poll_interval}

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `parallelLoadThreads`<sup>Optional</sup> <a name="parallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.parallelLoadThreads"></a>

```java
public java.lang.Number getParallelLoadThreads();
```

- *Type:* java.lang.Number

Improves performance when loading data into the MySQL-compatible target database.

Specifies how many threads to use to load the data into the MySQL-compatible target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#parallel_load_threads DmsEndpoint#parallel_load_threads}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MySQL endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `serverTimezone`<sup>Optional</sup> <a name="serverTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.serverTimezone"></a>

```java
public java.lang.String getServerTimezone();
```

- *Type:* java.lang.String

Specifies the time zone for the source MySQL database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#server_timezone DmsEndpoint#server_timezone}

---

##### `targetDbType`<sup>Optional</sup> <a name="targetDbType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.targetDbType"></a>

```java
public java.lang.String getTargetDbType();
```

- *Type:* java.lang.String

Specifies where to migrate source tables on the target, either to a single database or multiple databases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#target_db_type DmsEndpoint#target_db_type}

---

### DmsEndpointNeptuneSettings <a name="DmsEndpointNeptuneSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointNeptuneSettings;

DmsEndpointNeptuneSettings.builder()
//  .errorRetryDuration(java.lang.Number)
//  .iamAuthEnabled(java.lang.Boolean|IResolvable)
//  .maxFileSize(java.lang.Number)
//  .maxRetryCount(java.lang.Number)
//  .s3BucketFolder(java.lang.String)
//  .s3BucketName(java.lang.String)
//  .serviceAccessRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.errorRetryDuration">errorRetryDuration</a></code> | <code>java.lang.Number</code> | The number of milliseconds for AWS DMS to wait to retry a bulk-load of migrated graph data to the Neptune target database before raising an error. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.iamAuthEnabled">iamAuthEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If you want IAM authorization enabled for this endpoint, set this parameter to true. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | The maximum size in kilobytes of migrated graph data stored in a .csv file before AWS DMS bulk-loads the data to the Neptune target database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.maxRetryCount">maxRetryCount</a></code> | <code>java.lang.Number</code> | The number of times for AWS DMS to retry a bulk load of migrated graph data to the Neptune target database before raising an error. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.s3BucketFolder">s3BucketFolder</a></code> | <code>java.lang.String</code> | A folder path where you want AWS DMS to store migrated graph data in the S3 bucket specified by S3BucketName. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | The name of the Amazon S3 bucket where AWS DMS can temporarily store migrated graph data in .csv files before bulk-loading it to the Neptune target database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the service role that you created for the Neptune target endpoint. |

---

##### `errorRetryDuration`<sup>Optional</sup> <a name="errorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.errorRetryDuration"></a>

```java
public java.lang.Number getErrorRetryDuration();
```

- *Type:* java.lang.Number

The number of milliseconds for AWS DMS to wait to retry a bulk-load of migrated graph data to the Neptune target database before raising an error.

The default is 250.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}

---

##### `iamAuthEnabled`<sup>Optional</sup> <a name="iamAuthEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.iamAuthEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIamAuthEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If you want IAM authorization enabled for this endpoint, set this parameter to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#iam_auth_enabled DmsEndpoint#iam_auth_enabled}

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

The maximum size in kilobytes of migrated graph data stored in a .csv file before AWS DMS bulk-loads the data to the Neptune target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `maxRetryCount`<sup>Optional</sup> <a name="maxRetryCount" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.maxRetryCount"></a>

```java
public java.lang.Number getMaxRetryCount();
```

- *Type:* java.lang.Number

The number of times for AWS DMS to retry a bulk load of migrated graph data to the Neptune target database before raising an error.

The default is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#max_retry_count DmsEndpoint#max_retry_count}

---

##### `s3BucketFolder`<sup>Optional</sup> <a name="s3BucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.s3BucketFolder"></a>

```java
public java.lang.String getS3BucketFolder();
```

- *Type:* java.lang.String

A folder path where you want AWS DMS to store migrated graph data in the S3 bucket specified by S3BucketName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#s3_bucket_folder DmsEndpoint#s3_bucket_folder}

---

##### `s3BucketName`<sup>Optional</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

The name of the Amazon S3 bucket where AWS DMS can temporarily store migrated graph data in .csv files before bulk-loading it to the Neptune target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#s3_bucket_name DmsEndpoint#s3_bucket_name}

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the service role that you created for the Neptune target endpoint.

The role must allow the iam:PassRole action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

### DmsEndpointOracleSettings <a name="DmsEndpointOracleSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointOracleSettings;

DmsEndpointOracleSettings.builder()
//  .accessAlternateDirectly(java.lang.Boolean|IResolvable)
//  .additionalArchivedLogDestId(java.lang.Number)
//  .addSupplementalLogging(java.lang.Boolean|IResolvable)
//  .allowSelectNestedTables(java.lang.Boolean|IResolvable)
//  .archivedLogDestId(java.lang.Number)
//  .archivedLogsOnly(java.lang.Boolean|IResolvable)
//  .asmPassword(java.lang.String)
//  .asmServer(java.lang.String)
//  .asmUser(java.lang.String)
//  .charLengthSemantics(java.lang.String)
//  .directPathNoLog(java.lang.Boolean|IResolvable)
//  .directPathParallelLoad(java.lang.Boolean|IResolvable)
//  .enableHomogenousTablespace(java.lang.Boolean|IResolvable)
//  .extraArchivedLogDestIds(java.util.List<java.lang.Number>)
//  .failTasksOnLobTruncation(java.lang.Boolean|IResolvable)
//  .numberDatatypeScale(java.lang.Number)
//  .oraclePathPrefix(java.lang.String)
//  .parallelAsmReadThreads(java.lang.Number)
//  .readAheadBlocks(java.lang.Number)
//  .readTableSpaceName(java.lang.Boolean|IResolvable)
//  .replacePathPrefix(java.lang.Boolean|IResolvable)
//  .retryInterval(java.lang.Number)
//  .secretsManagerAccessRoleArn(java.lang.String)
//  .secretsManagerOracleAsmAccessRoleArn(java.lang.String)
//  .secretsManagerOracleAsmSecretId(java.lang.String)
//  .secretsManagerSecretId(java.lang.String)
//  .securityDbEncryption(java.lang.String)
//  .securityDbEncryptionName(java.lang.String)
//  .spatialDataOptionToGeoJsonFunctionName(java.lang.String)
//  .standbyDelayTime(java.lang.Number)
//  .useAlternateFolderForOnline(java.lang.Boolean|IResolvable)
//  .useBFile(java.lang.Boolean|IResolvable)
//  .useDirectPathFullLoad(java.lang.Boolean|IResolvable)
//  .useLogminerReader(java.lang.Boolean|IResolvable)
//  .usePathPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.accessAlternateDirectly">accessAlternateDirectly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set this attribute to false in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.additionalArchivedLogDestId">additionalArchivedLogDestId</a></code> | <code>java.lang.Number</code> | Set this attribute with ArchivedLogDestId in a primary/ standby setup. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.addSupplementalLogging">addSupplementalLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set this attribute to set up table-level supplemental logging for the Oracle database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.allowSelectNestedTables">allowSelectNestedTables</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set this attribute to true to enable replication of Oracle tables containing columns that are nested tables or defined types. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogDestId">archivedLogDestId</a></code> | <code>java.lang.Number</code> | Specifies the ID of the destination for the archived redo logs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogsOnly">archivedLogsOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When this field is set to True, AWS DMS only accesses the archived redo logs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmPassword">asmPassword</a></code> | <code>java.lang.String</code> | For an Oracle source endpoint, your Oracle Automatic Storage Management (ASM) password. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmServer">asmServer</a></code> | <code>java.lang.String</code> | For an Oracle source endpoint, your ASM server address. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmUser">asmUser</a></code> | <code>java.lang.String</code> | For an Oracle source endpoint, your ASM user name. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.charLengthSemantics">charLengthSemantics</a></code> | <code>java.lang.String</code> | Specifies whether the length of a character column is in bytes or in characters. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.directPathNoLog">directPathNoLog</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, this attribute helps to increase the commit rate on the Oracle target database by writing directly to tables and not writing a trail to database logs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.directPathParallelLoad">directPathParallelLoad</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, this attribute specifies a parallel load when useDirectPathFullLoad is set to Y. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.enableHomogenousTablespace">enableHomogenousTablespace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set this attribute to enable homogenous tablespace replication and create existing tables or indexes under the same tablespace on the target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.extraArchivedLogDestIds">extraArchivedLogDestIds</a></code> | <code>java.util.List<java.lang.Number></code> | Specifies the IDs of one more destinations for one or more archived redo logs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.failTasksOnLobTruncation">failTasksOnLobTruncation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, this attribute causes a task to fail if the actual size of an LOB column is greater than the specified LobMaxSize. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.numberDatatypeScale">numberDatatypeScale</a></code> | <code>java.lang.Number</code> | Specifies the number scale. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.oraclePathPrefix">oraclePathPrefix</a></code> | <code>java.lang.String</code> | Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.parallelAsmReadThreads">parallelAsmReadThreads</a></code> | <code>java.lang.Number</code> | Set this attribute to change the number of threads that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.readAheadBlocks">readAheadBlocks</a></code> | <code>java.lang.Number</code> | Set this attribute to change the number of read-ahead blocks that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.readTableSpaceName">readTableSpaceName</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, this attribute supports tablespace replication. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.replacePathPrefix">replacePathPrefix</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.retryInterval">retryInterval</a></code> | <code>java.lang.Number</code> | Specifies the number of seconds that the system waits before resending a query. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmAccessRoleArn">secretsManagerOracleAsmAccessRoleArn</a></code> | <code>java.lang.String</code> | Required only if your Oracle endpoint uses Advanced Storage Manager (ASM). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmSecretId">secretsManagerOracleAsmSecretId</a></code> | <code>java.lang.String</code> | Required only if your Oracle endpoint uses Advanced Storage Manager (ASM). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the Oracle endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryption">securityDbEncryption</a></code> | <code>java.lang.String</code> | For an Oracle source endpoint, the transparent data encryption (TDE) password required by AWM DMS to access Oracle redo logs encrypted by TDE using Binary Reader. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryptionName">securityDbEncryptionName</a></code> | <code>java.lang.String</code> | For an Oracle source endpoint, the name of a key used for the transparent data encryption (TDE) of the columns and tablespaces in an Oracle source database that is encrypted using TDE. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.spatialDataOptionToGeoJsonFunctionName">spatialDataOptionToGeoJsonFunctionName</a></code> | <code>java.lang.String</code> | Use this attribute to convert SDO_GEOMETRY to GEOJSON format. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.standbyDelayTime">standbyDelayTime</a></code> | <code>java.lang.Number</code> | Use this attribute to specify a time in minutes for the delay in standby sync. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useAlternateFolderForOnline">useAlternateFolderForOnline</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useBFile">useBFile</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set this attribute to True to capture change data using the Binary Reader utility. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useDirectPathFullLoad">useDirectPathFullLoad</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set this attribute to True to have AWS DMS use a direct path full load. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useLogminerReader">useLogminerReader</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set this attribute to True to capture change data using the Oracle LogMiner utility (the default). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.usePathPrefix">usePathPrefix</a></code> | <code>java.lang.String</code> | Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. |

---

##### `accessAlternateDirectly`<sup>Optional</sup> <a name="accessAlternateDirectly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.accessAlternateDirectly"></a>

```java
public java.lang.Boolean|IResolvable getAccessAlternateDirectly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set this attribute to false in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#access_alternate_directly DmsEndpoint#access_alternate_directly}

---

##### `additionalArchivedLogDestId`<sup>Optional</sup> <a name="additionalArchivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.additionalArchivedLogDestId"></a>

```java
public java.lang.Number getAdditionalArchivedLogDestId();
```

- *Type:* java.lang.Number

Set this attribute with ArchivedLogDestId in a primary/ standby setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#additional_archived_log_dest_id DmsEndpoint#additional_archived_log_dest_id}

---

##### `addSupplementalLogging`<sup>Optional</sup> <a name="addSupplementalLogging" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.addSupplementalLogging"></a>

```java
public java.lang.Boolean|IResolvable getAddSupplementalLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set this attribute to set up table-level supplemental logging for the Oracle database.

This attribute enables PRIMARY KEY supplemental logging on all tables selected for a migration task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#add_supplemental_logging DmsEndpoint#add_supplemental_logging}

---

##### `allowSelectNestedTables`<sup>Optional</sup> <a name="allowSelectNestedTables" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.allowSelectNestedTables"></a>

```java
public java.lang.Boolean|IResolvable getAllowSelectNestedTables();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set this attribute to true to enable replication of Oracle tables containing columns that are nested tables or defined types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#allow_select_nested_tables DmsEndpoint#allow_select_nested_tables}

---

##### `archivedLogDestId`<sup>Optional</sup> <a name="archivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogDestId"></a>

```java
public java.lang.Number getArchivedLogDestId();
```

- *Type:* java.lang.Number

Specifies the ID of the destination for the archived redo logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#archived_log_dest_id DmsEndpoint#archived_log_dest_id}

---

##### `archivedLogsOnly`<sup>Optional</sup> <a name="archivedLogsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogsOnly"></a>

```java
public java.lang.Boolean|IResolvable getArchivedLogsOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When this field is set to True, AWS DMS only accesses the archived redo logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#archived_logs_only DmsEndpoint#archived_logs_only}

---

##### `asmPassword`<sup>Optional</sup> <a name="asmPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmPassword"></a>

```java
public java.lang.String getAsmPassword();
```

- *Type:* java.lang.String

For an Oracle source endpoint, your Oracle Automatic Storage Management (ASM) password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#asm_password DmsEndpoint#asm_password}

---

##### `asmServer`<sup>Optional</sup> <a name="asmServer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmServer"></a>

```java
public java.lang.String getAsmServer();
```

- *Type:* java.lang.String

For an Oracle source endpoint, your ASM server address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#asm_server DmsEndpoint#asm_server}

---

##### `asmUser`<sup>Optional</sup> <a name="asmUser" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmUser"></a>

```java
public java.lang.String getAsmUser();
```

- *Type:* java.lang.String

For an Oracle source endpoint, your ASM user name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#asm_user DmsEndpoint#asm_user}

---

##### `charLengthSemantics`<sup>Optional</sup> <a name="charLengthSemantics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.charLengthSemantics"></a>

```java
public java.lang.String getCharLengthSemantics();
```

- *Type:* java.lang.String

Specifies whether the length of a character column is in bytes or in characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#char_length_semantics DmsEndpoint#char_length_semantics}

---

##### `directPathNoLog`<sup>Optional</sup> <a name="directPathNoLog" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.directPathNoLog"></a>

```java
public java.lang.Boolean|IResolvable getDirectPathNoLog();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, this attribute helps to increase the commit rate on the Oracle target database by writing directly to tables and not writing a trail to database logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#direct_path_no_log DmsEndpoint#direct_path_no_log}

---

##### `directPathParallelLoad`<sup>Optional</sup> <a name="directPathParallelLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.directPathParallelLoad"></a>

```java
public java.lang.Boolean|IResolvable getDirectPathParallelLoad();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, this attribute specifies a parallel load when useDirectPathFullLoad is set to Y.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#direct_path_parallel_load DmsEndpoint#direct_path_parallel_load}

---

##### `enableHomogenousTablespace`<sup>Optional</sup> <a name="enableHomogenousTablespace" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.enableHomogenousTablespace"></a>

```java
public java.lang.Boolean|IResolvable getEnableHomogenousTablespace();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set this attribute to enable homogenous tablespace replication and create existing tables or indexes under the same tablespace on the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#enable_homogenous_tablespace DmsEndpoint#enable_homogenous_tablespace}

---

##### `extraArchivedLogDestIds`<sup>Optional</sup> <a name="extraArchivedLogDestIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.extraArchivedLogDestIds"></a>

```java
public java.util.List<java.lang.Number> getExtraArchivedLogDestIds();
```

- *Type:* java.util.List<java.lang.Number>

Specifies the IDs of one more destinations for one or more archived redo logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#extra_archived_log_dest_ids DmsEndpoint#extra_archived_log_dest_ids}

---

##### `failTasksOnLobTruncation`<sup>Optional</sup> <a name="failTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.failTasksOnLobTruncation"></a>

```java
public java.lang.Boolean|IResolvable getFailTasksOnLobTruncation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, this attribute causes a task to fail if the actual size of an LOB column is greater than the specified LobMaxSize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#fail_tasks_on_lob_truncation DmsEndpoint#fail_tasks_on_lob_truncation}

---

##### `numberDatatypeScale`<sup>Optional</sup> <a name="numberDatatypeScale" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.numberDatatypeScale"></a>

```java
public java.lang.Number getNumberDatatypeScale();
```

- *Type:* java.lang.Number

Specifies the number scale.

You can select a scale up to 38, or you can select FLOAT. By default, the NUMBER data type is converted to precision 38, scale 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#number_datatype_scale DmsEndpoint#number_datatype_scale}

---

##### `oraclePathPrefix`<sup>Optional</sup> <a name="oraclePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.oraclePathPrefix"></a>

```java
public java.lang.String getOraclePathPrefix();
```

- *Type:* java.lang.String

Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#oracle_path_prefix DmsEndpoint#oracle_path_prefix}

---

##### `parallelAsmReadThreads`<sup>Optional</sup> <a name="parallelAsmReadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.parallelAsmReadThreads"></a>

```java
public java.lang.Number getParallelAsmReadThreads();
```

- *Type:* java.lang.Number

Set this attribute to change the number of threads that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#parallel_asm_read_threads DmsEndpoint#parallel_asm_read_threads}

---

##### `readAheadBlocks`<sup>Optional</sup> <a name="readAheadBlocks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.readAheadBlocks"></a>

```java
public java.lang.Number getReadAheadBlocks();
```

- *Type:* java.lang.Number

Set this attribute to change the number of read-ahead blocks that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#read_ahead_blocks DmsEndpoint#read_ahead_blocks}

---

##### `readTableSpaceName`<sup>Optional</sup> <a name="readTableSpaceName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.readTableSpaceName"></a>

```java
public java.lang.Boolean|IResolvable getReadTableSpaceName();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, this attribute supports tablespace replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#read_table_space_name DmsEndpoint#read_table_space_name}

---

##### `replacePathPrefix`<sup>Optional</sup> <a name="replacePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.replacePathPrefix"></a>

```java
public java.lang.Boolean|IResolvable getReplacePathPrefix();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#replace_path_prefix DmsEndpoint#replace_path_prefix}

---

##### `retryInterval`<sup>Optional</sup> <a name="retryInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.retryInterval"></a>

```java
public java.lang.Number getRetryInterval();
```

- *Type:* java.lang.Number

Specifies the number of seconds that the system waits before resending a query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#retry_interval DmsEndpoint#retry_interval}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `secretsManagerOracleAsmAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerOracleAsmAccessRoleArn();
```

- *Type:* java.lang.String

Required only if your Oracle endpoint uses Advanced Storage Manager (ASM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#secrets_manager_oracle_asm_access_role_arn DmsEndpoint#secrets_manager_oracle_asm_access_role_arn}

---

##### `secretsManagerOracleAsmSecretId`<sup>Optional</sup> <a name="secretsManagerOracleAsmSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmSecretId"></a>

```java
public java.lang.String getSecretsManagerOracleAsmSecretId();
```

- *Type:* java.lang.String

Required only if your Oracle endpoint uses Advanced Storage Manager (ASM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#secrets_manager_oracle_asm_secret_id DmsEndpoint#secrets_manager_oracle_asm_secret_id}

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the Oracle endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `securityDbEncryption`<sup>Optional</sup> <a name="securityDbEncryption" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryption"></a>

```java
public java.lang.String getSecurityDbEncryption();
```

- *Type:* java.lang.String

For an Oracle source endpoint, the transparent data encryption (TDE) password required by AWM DMS to access Oracle redo logs encrypted by TDE using Binary Reader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#security_db_encryption DmsEndpoint#security_db_encryption}

---

##### `securityDbEncryptionName`<sup>Optional</sup> <a name="securityDbEncryptionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryptionName"></a>

```java
public java.lang.String getSecurityDbEncryptionName();
```

- *Type:* java.lang.String

For an Oracle source endpoint, the name of a key used for the transparent data encryption (TDE) of the columns and tablespaces in an Oracle source database that is encrypted using TDE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#security_db_encryption_name DmsEndpoint#security_db_encryption_name}

---

##### `spatialDataOptionToGeoJsonFunctionName`<sup>Optional</sup> <a name="spatialDataOptionToGeoJsonFunctionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.spatialDataOptionToGeoJsonFunctionName"></a>

```java
public java.lang.String getSpatialDataOptionToGeoJsonFunctionName();
```

- *Type:* java.lang.String

Use this attribute to convert SDO_GEOMETRY to GEOJSON format.

By default, DMS calls the SDO2GEOJSON custom function if present and accessible. Or you can create your own custom function that mimics the operation of SDOGEOJSON and set SpatialDataOptionToGeoJsonFunctionName to call it instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#spatial_data_option_to_geo_json_function_name DmsEndpoint#spatial_data_option_to_geo_json_function_name}

---

##### `standbyDelayTime`<sup>Optional</sup> <a name="standbyDelayTime" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.standbyDelayTime"></a>

```java
public java.lang.Number getStandbyDelayTime();
```

- *Type:* java.lang.Number

Use this attribute to specify a time in minutes for the delay in standby sync.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#standby_delay_time DmsEndpoint#standby_delay_time}

---

##### `useAlternateFolderForOnline`<sup>Optional</sup> <a name="useAlternateFolderForOnline" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useAlternateFolderForOnline"></a>

```java
public java.lang.Boolean|IResolvable getUseAlternateFolderForOnline();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#use_alternate_folder_for_online DmsEndpoint#use_alternate_folder_for_online}

---

##### `useBFile`<sup>Optional</sup> <a name="useBFile" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useBFile"></a>

```java
public java.lang.Boolean|IResolvable getUseBFile();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set this attribute to True to capture change data using the Binary Reader utility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#use_b_file DmsEndpoint#use_b_file}

---

##### `useDirectPathFullLoad`<sup>Optional</sup> <a name="useDirectPathFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useDirectPathFullLoad"></a>

```java
public java.lang.Boolean|IResolvable getUseDirectPathFullLoad();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set this attribute to True to have AWS DMS use a direct path full load.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#use_direct_path_full_load DmsEndpoint#use_direct_path_full_load}

---

##### `useLogminerReader`<sup>Optional</sup> <a name="useLogminerReader" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useLogminerReader"></a>

```java
public java.lang.Boolean|IResolvable getUseLogminerReader();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set this attribute to True to capture change data using the Oracle LogMiner utility (the default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#use_logminer_reader DmsEndpoint#use_logminer_reader}

---

##### `usePathPrefix`<sup>Optional</sup> <a name="usePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.usePathPrefix"></a>

```java
public java.lang.String getUsePathPrefix();
```

- *Type:* java.lang.String

Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#use_path_prefix DmsEndpoint#use_path_prefix}

---

### DmsEndpointPostgreSqlSettings <a name="DmsEndpointPostgreSqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointPostgreSqlSettings;

DmsEndpointPostgreSqlSettings.builder()
//  .afterConnectScript(java.lang.String)
//  .babelfishDatabaseName(java.lang.String)
//  .captureDdls(java.lang.Boolean|IResolvable)
//  .databaseMode(java.lang.String)
//  .ddlArtifactsSchema(java.lang.String)
//  .executeTimeout(java.lang.Number)
//  .failTasksOnLobTruncation(java.lang.Boolean|IResolvable)
//  .heartbeatEnable(java.lang.Boolean|IResolvable)
//  .heartbeatFrequency(java.lang.Number)
//  .heartbeatSchema(java.lang.String)
//  .mapBooleanAsBoolean(java.lang.Boolean|IResolvable)
//  .maxFileSize(java.lang.Number)
//  .pluginName(java.lang.String)
//  .secretsManagerAccessRoleArn(java.lang.String)
//  .secretsManagerSecretId(java.lang.String)
//  .slotName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.afterConnectScript">afterConnectScript</a></code> | <code>java.lang.String</code> | For use with change data capture (CDC) only, this attribute has AWS DMS bypass foreign keys and user triggers to reduce the time it takes to bulk load data. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.babelfishDatabaseName">babelfishDatabaseName</a></code> | <code>java.lang.String</code> | The Babelfish for Aurora PostgreSQL database name for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.captureDdls">captureDdls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | To capture DDL events, AWS DMS creates various artifacts in the PostgreSQL database when the task starts. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.databaseMode">databaseMode</a></code> | <code>java.lang.String</code> | Specifies the default behavior of the replication's handling of PostgreSQL- compatible endpoints that require some additional configuration, such as Babelfish endpoints. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.ddlArtifactsSchema">ddlArtifactsSchema</a></code> | <code>java.lang.String</code> | The schema in which the operational DDL database artifacts are created. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.executeTimeout">executeTimeout</a></code> | <code>java.lang.Number</code> | Sets the client statement timeout for the PostgreSQL instance, in seconds. The default value is 60 seconds. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.failTasksOnLobTruncation">failTasksOnLobTruncation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, this value causes a task to fail if the actual size of a LOB column is greater than the specified LobMaxSize. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatEnable">heartbeatEnable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The write-ahead log (WAL) heartbeat feature mimics a dummy transaction. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatFrequency">heartbeatFrequency</a></code> | <code>java.lang.Number</code> | Sets the WAL heartbeat frequency (in minutes). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatSchema">heartbeatSchema</a></code> | <code>java.lang.String</code> | Sets the schema in which the heartbeat artifacts are created. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.mapBooleanAsBoolean">mapBooleanAsBoolean</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, lets PostgreSQL migrate the boolean type as boolean. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | Specifies the maximum size (in KB) of any .csv file used to transfer data to PostgreSQL. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.pluginName">pluginName</a></code> | <code>java.lang.String</code> | Specifies the plugin to use to create a replication slot. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the PostgreSQL endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.slotName">slotName</a></code> | <code>java.lang.String</code> | Sets the name of a previously created logical replication slot for a change data capture (CDC) load of the PostgreSQL source instance. |

---

##### `afterConnectScript`<sup>Optional</sup> <a name="afterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.afterConnectScript"></a>

```java
public java.lang.String getAfterConnectScript();
```

- *Type:* java.lang.String

For use with change data capture (CDC) only, this attribute has AWS DMS bypass foreign keys and user triggers to reduce the time it takes to bulk load data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}

---

##### `babelfishDatabaseName`<sup>Optional</sup> <a name="babelfishDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.babelfishDatabaseName"></a>

```java
public java.lang.String getBabelfishDatabaseName();
```

- *Type:* java.lang.String

The Babelfish for Aurora PostgreSQL database name for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#babelfish_database_name DmsEndpoint#babelfish_database_name}

---

##### `captureDdls`<sup>Optional</sup> <a name="captureDdls" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.captureDdls"></a>

```java
public java.lang.Boolean|IResolvable getCaptureDdls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

To capture DDL events, AWS DMS creates various artifacts in the PostgreSQL database when the task starts.

You can later remove these artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#capture_ddls DmsEndpoint#capture_ddls}

---

##### `databaseMode`<sup>Optional</sup> <a name="databaseMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.databaseMode"></a>

```java
public java.lang.String getDatabaseMode();
```

- *Type:* java.lang.String

Specifies the default behavior of the replication's handling of PostgreSQL- compatible endpoints that require some additional configuration, such as Babelfish endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#database_mode DmsEndpoint#database_mode}

---

##### `ddlArtifactsSchema`<sup>Optional</sup> <a name="ddlArtifactsSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.ddlArtifactsSchema"></a>

```java
public java.lang.String getDdlArtifactsSchema();
```

- *Type:* java.lang.String

The schema in which the operational DDL database artifacts are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#ddl_artifacts_schema DmsEndpoint#ddl_artifacts_schema}

---

##### `executeTimeout`<sup>Optional</sup> <a name="executeTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.executeTimeout"></a>

```java
public java.lang.Number getExecuteTimeout();
```

- *Type:* java.lang.Number

Sets the client statement timeout for the PostgreSQL instance, in seconds. The default value is 60 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#execute_timeout DmsEndpoint#execute_timeout}

---

##### `failTasksOnLobTruncation`<sup>Optional</sup> <a name="failTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.failTasksOnLobTruncation"></a>

```java
public java.lang.Boolean|IResolvable getFailTasksOnLobTruncation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, this value causes a task to fail if the actual size of a LOB column is greater than the specified LobMaxSize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#fail_tasks_on_lob_truncation DmsEndpoint#fail_tasks_on_lob_truncation}

---

##### `heartbeatEnable`<sup>Optional</sup> <a name="heartbeatEnable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatEnable"></a>

```java
public java.lang.Boolean|IResolvable getHeartbeatEnable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The write-ahead log (WAL) heartbeat feature mimics a dummy transaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#heartbeat_enable DmsEndpoint#heartbeat_enable}

---

##### `heartbeatFrequency`<sup>Optional</sup> <a name="heartbeatFrequency" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatFrequency"></a>

```java
public java.lang.Number getHeartbeatFrequency();
```

- *Type:* java.lang.Number

Sets the WAL heartbeat frequency (in minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#heartbeat_frequency DmsEndpoint#heartbeat_frequency}

---

##### `heartbeatSchema`<sup>Optional</sup> <a name="heartbeatSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatSchema"></a>

```java
public java.lang.String getHeartbeatSchema();
```

- *Type:* java.lang.String

Sets the schema in which the heartbeat artifacts are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#heartbeat_schema DmsEndpoint#heartbeat_schema}

---

##### `mapBooleanAsBoolean`<sup>Optional</sup> <a name="mapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.mapBooleanAsBoolean"></a>

```java
public java.lang.Boolean|IResolvable getMapBooleanAsBoolean();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, lets PostgreSQL migrate the boolean type as boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#map_boolean_as_boolean DmsEndpoint#map_boolean_as_boolean}

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

Specifies the maximum size (in KB) of any .csv file used to transfer data to PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.pluginName"></a>

```java
public java.lang.String getPluginName();
```

- *Type:* java.lang.String

Specifies the plugin to use to create a replication slot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#plugin_name DmsEndpoint#plugin_name}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the PostgreSQL endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `slotName`<sup>Optional</sup> <a name="slotName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.slotName"></a>

```java
public java.lang.String getSlotName();
```

- *Type:* java.lang.String

Sets the name of a previously created logical replication slot for a change data capture (CDC) load of the PostgreSQL source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#slot_name DmsEndpoint#slot_name}

---

### DmsEndpointRedisSettings <a name="DmsEndpointRedisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointRedisSettings;

DmsEndpointRedisSettings.builder()
//  .authPassword(java.lang.String)
//  .authType(java.lang.String)
//  .authUserName(java.lang.String)
//  .port(java.lang.Number)
//  .serverName(java.lang.String)
//  .sslCaCertificateArn(java.lang.String)
//  .sslSecurityProtocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authPassword">authPassword</a></code> | <code>java.lang.String</code> | The password provided with the auth-role and auth-token options of the AuthType setting for a Redis target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authType">authType</a></code> | <code>java.lang.String</code> | The type of authentication to perform when connecting to a Redis target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authUserName">authUserName</a></code> | <code>java.lang.String</code> | The user name provided with the auth-role option of the AuthType setting for a Redis target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.port">port</a></code> | <code>java.lang.Number</code> | Transmission Control Protocol (TCP) port for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Fully qualified domain name of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for the certificate authority (CA) that DMS uses to connect to your Redis target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.sslSecurityProtocol">sslSecurityProtocol</a></code> | <code>java.lang.String</code> | The connection to a Redis target endpoint using Transport Layer Security (TLS). Valid values include plaintext and ssl-encryption. |

---

##### `authPassword`<sup>Optional</sup> <a name="authPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authPassword"></a>

```java
public java.lang.String getAuthPassword();
```

- *Type:* java.lang.String

The password provided with the auth-role and auth-token options of the AuthType setting for a Redis target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#auth_password DmsEndpoint#auth_password}

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

The type of authentication to perform when connecting to a Redis target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}

---

##### `authUserName`<sup>Optional</sup> <a name="authUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authUserName"></a>

```java
public java.lang.String getAuthUserName();
```

- *Type:* java.lang.String

The user name provided with the auth-role option of the AuthType setting for a Redis target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#auth_user_name DmsEndpoint#auth_user_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Transmission Control Protocol (TCP) port for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#port DmsEndpoint#port}

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Fully qualified domain name of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}

---

##### `sslCaCertificateArn`<sup>Optional</sup> <a name="sslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.sslCaCertificateArn"></a>

```java
public java.lang.String getSslCaCertificateArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for the certificate authority (CA) that DMS uses to connect to your Redis target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}

---

##### `sslSecurityProtocol`<sup>Optional</sup> <a name="sslSecurityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.sslSecurityProtocol"></a>

```java
public java.lang.String getSslSecurityProtocol();
```

- *Type:* java.lang.String

The connection to a Redis target endpoint using Transport Layer Security (TLS). Valid values include plaintext and ssl-encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#ssl_security_protocol DmsEndpoint#ssl_security_protocol}

---

### DmsEndpointRedshiftSettings <a name="DmsEndpointRedshiftSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointRedshiftSettings;

DmsEndpointRedshiftSettings.builder()
//  .acceptAnyDate(java.lang.Boolean|IResolvable)
//  .afterConnectScript(java.lang.String)
//  .bucketFolder(java.lang.String)
//  .bucketName(java.lang.String)
//  .caseSensitiveNames(java.lang.Boolean|IResolvable)
//  .compUpdate(java.lang.Boolean|IResolvable)
//  .connectionTimeout(java.lang.Number)
//  .dateFormat(java.lang.String)
//  .emptyAsNull(java.lang.Boolean|IResolvable)
//  .encryptionMode(java.lang.String)
//  .explicitIds(java.lang.Boolean|IResolvable)
//  .fileTransferUploadStreams(java.lang.Number)
//  .loadTimeout(java.lang.Number)
//  .mapBooleanAsBoolean(java.lang.Boolean|IResolvable)
//  .maxFileSize(java.lang.Number)
//  .removeQuotes(java.lang.Boolean|IResolvable)
//  .replaceChars(java.lang.String)
//  .replaceInvalidChars(java.lang.String)
//  .secretsManagerAccessRoleArn(java.lang.String)
//  .secretsManagerSecretId(java.lang.String)
//  .serverSideEncryptionKmsKeyId(java.lang.String)
//  .serviceAccessRoleArn(java.lang.String)
//  .timeFormat(java.lang.String)
//  .trimBlanks(java.lang.Boolean|IResolvable)
//  .truncateColumns(java.lang.Boolean|IResolvable)
//  .writeBufferSize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.acceptAnyDate">acceptAnyDate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that indicates to allow any date format, including invalid formats such as 00/00/00 00:00:00, to be loaded without generating an error. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.afterConnectScript">afterConnectScript</a></code> | <code>java.lang.String</code> | Code to run after connecting. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketFolder">bucketFolder</a></code> | <code>java.lang.String</code> | An S3 folder where the comma-separated-value (.csv) files are stored before being uploaded to the target Redshift cluster. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The name of the intermediate S3 bucket used to store .csv files before uploading data to Redshift. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.caseSensitiveNames">caseSensitiveNames</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If Amazon Redshift is configured to support case sensitive schema names, set CaseSensitiveNames to true. The default is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.compUpdate">compUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If you set CompUpdate to true Amazon Redshift applies automatic compression if the table is empty. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.connectionTimeout">connectionTimeout</a></code> | <code>java.lang.Number</code> | A value that sets the amount of time to wait (in milliseconds) before timing out, beginning from when you initially establish a connection. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.dateFormat">dateFormat</a></code> | <code>java.lang.String</code> | The date format that you are using. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.emptyAsNull">emptyAsNull</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that specifies whether AWS DMS should migrate empty CHAR and VARCHAR fields as NULL. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.encryptionMode">encryptionMode</a></code> | <code>java.lang.String</code> | The type of server-side encryption that you want to use for your data. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.explicitIds">explicitIds</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This setting is only valid for a full-load migration task. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.fileTransferUploadStreams">fileTransferUploadStreams</a></code> | <code>java.lang.Number</code> | The number of threads used to upload a single file. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.loadTimeout">loadTimeout</a></code> | <code>java.lang.Number</code> | The amount of time to wait (in milliseconds) before timing out of operations performed by AWS DMS on a Redshift cluster, such as Redshift COPY, INSERT, DELETE, and UPDATE. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.mapBooleanAsBoolean">mapBooleanAsBoolean</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, lets Redshift migrate the boolean type as boolean. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | The maximum size (in KB) of any .csv file used to load data on an S3 bucket and transfer data to Amazon Redshift. It defaults to 1048576KB (1 GB). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.removeQuotes">removeQuotes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that specifies to remove surrounding quotation marks from strings in the incoming data. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.replaceChars">replaceChars</a></code> | <code>java.lang.String</code> | A value that specifies to replaces the invalid characters specified in ReplaceInvalidChars, substituting the specified characters instead. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.replaceInvalidChars">replaceInvalidChars</a></code> | <code>java.lang.String</code> | A list of characters that you want to replace. Use with ReplaceChars. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the Amazon Redshift endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>java.lang.String</code> | The AWS KMS key ID. If you are using SSE_KMS for the EncryptionMode, provide this key ID. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role that has access to the Amazon Redshift service. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.timeFormat">timeFormat</a></code> | <code>java.lang.String</code> | The time format that you want to use. Valid values are auto (case-sensitive), 'timeformat_string', 'epochsecs', or 'epochmillisecs'. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.trimBlanks">trimBlanks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that specifies to remove the trailing white space characters from a VARCHAR string. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.truncateColumns">truncateColumns</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that specifies to truncate data in columns to the appropriate number of characters, so that the data fits in the column. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.writeBufferSize">writeBufferSize</a></code> | <code>java.lang.Number</code> | The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk at the DMS replication instance. The default value is 1000 (buffer size is 1000KB). |

---

##### `acceptAnyDate`<sup>Optional</sup> <a name="acceptAnyDate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.acceptAnyDate"></a>

```java
public java.lang.Boolean|IResolvable getAcceptAnyDate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that indicates to allow any date format, including invalid formats such as 00/00/00 00:00:00, to be loaded without generating an error.

You can choose true or false (the default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#accept_any_date DmsEndpoint#accept_any_date}

---

##### `afterConnectScript`<sup>Optional</sup> <a name="afterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.afterConnectScript"></a>

```java
public java.lang.String getAfterConnectScript();
```

- *Type:* java.lang.String

Code to run after connecting.

This parameter should contain the code itself, not the name of a file containing the code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}

---

##### `bucketFolder`<sup>Optional</sup> <a name="bucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketFolder"></a>

```java
public java.lang.String getBucketFolder();
```

- *Type:* java.lang.String

An S3 folder where the comma-separated-value (.csv) files are stored before being uploaded to the target Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The name of the intermediate S3 bucket used to store .csv files before uploading data to Redshift.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#bucket_name DmsEndpoint#bucket_name}

---

##### `caseSensitiveNames`<sup>Optional</sup> <a name="caseSensitiveNames" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.caseSensitiveNames"></a>

```java
public java.lang.Boolean|IResolvable getCaseSensitiveNames();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If Amazon Redshift is configured to support case sensitive schema names, set CaseSensitiveNames to true. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#case_sensitive_names DmsEndpoint#case_sensitive_names}

---

##### `compUpdate`<sup>Optional</sup> <a name="compUpdate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.compUpdate"></a>

```java
public java.lang.Boolean|IResolvable getCompUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If you set CompUpdate to true Amazon Redshift applies automatic compression if the table is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#comp_update DmsEndpoint#comp_update}

---

##### `connectionTimeout`<sup>Optional</sup> <a name="connectionTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.connectionTimeout"></a>

```java
public java.lang.Number getConnectionTimeout();
```

- *Type:* java.lang.Number

A value that sets the amount of time to wait (in milliseconds) before timing out, beginning from when you initially establish a connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#connection_timeout DmsEndpoint#connection_timeout}

---

##### `dateFormat`<sup>Optional</sup> <a name="dateFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.dateFormat"></a>

```java
public java.lang.String getDateFormat();
```

- *Type:* java.lang.String

The date format that you are using.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#date_format DmsEndpoint#date_format}

---

##### `emptyAsNull`<sup>Optional</sup> <a name="emptyAsNull" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.emptyAsNull"></a>

```java
public java.lang.Boolean|IResolvable getEmptyAsNull();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that specifies whether AWS DMS should migrate empty CHAR and VARCHAR fields as NULL.

A value of true sets empty CHAR and VARCHAR fields to null. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#empty_as_null DmsEndpoint#empty_as_null}

---

##### `encryptionMode`<sup>Optional</sup> <a name="encryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.encryptionMode"></a>

```java
public java.lang.String getEncryptionMode();
```

- *Type:* java.lang.String

The type of server-side encryption that you want to use for your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}

---

##### `explicitIds`<sup>Optional</sup> <a name="explicitIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.explicitIds"></a>

```java
public java.lang.Boolean|IResolvable getExplicitIds();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This setting is only valid for a full-load migration task.

Set ExplicitIds to true to have tables with IDENTITY columns override their auto-generated values with explicit values loaded from the source data files used to populate the tables. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#explicit_ids DmsEndpoint#explicit_ids}

---

##### `fileTransferUploadStreams`<sup>Optional</sup> <a name="fileTransferUploadStreams" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.fileTransferUploadStreams"></a>

```java
public java.lang.Number getFileTransferUploadStreams();
```

- *Type:* java.lang.Number

The number of threads used to upload a single file.

This parameter accepts a value from 1 through 64. It defaults to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#file_transfer_upload_streams DmsEndpoint#file_transfer_upload_streams}

---

##### `loadTimeout`<sup>Optional</sup> <a name="loadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.loadTimeout"></a>

```java
public java.lang.Number getLoadTimeout();
```

- *Type:* java.lang.Number

The amount of time to wait (in milliseconds) before timing out of operations performed by AWS DMS on a Redshift cluster, such as Redshift COPY, INSERT, DELETE, and UPDATE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#load_timeout DmsEndpoint#load_timeout}

---

##### `mapBooleanAsBoolean`<sup>Optional</sup> <a name="mapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.mapBooleanAsBoolean"></a>

```java
public java.lang.Boolean|IResolvable getMapBooleanAsBoolean();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, lets Redshift migrate the boolean type as boolean.

By default, Redshift migrates booleans as varchar(1). You must set this setting on both the source and target endpoints for it to take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#map_boolean_as_boolean DmsEndpoint#map_boolean_as_boolean}

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

The maximum size (in KB) of any .csv file used to load data on an S3 bucket and transfer data to Amazon Redshift. It defaults to 1048576KB (1 GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `removeQuotes`<sup>Optional</sup> <a name="removeQuotes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.removeQuotes"></a>

```java
public java.lang.Boolean|IResolvable getRemoveQuotes();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that specifies to remove surrounding quotation marks from strings in the incoming data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#remove_quotes DmsEndpoint#remove_quotes}

---

##### `replaceChars`<sup>Optional</sup> <a name="replaceChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.replaceChars"></a>

```java
public java.lang.String getReplaceChars();
```

- *Type:* java.lang.String

A value that specifies to replaces the invalid characters specified in ReplaceInvalidChars, substituting the specified characters instead.

The default is "?".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#replace_chars DmsEndpoint#replace_chars}

---

##### `replaceInvalidChars`<sup>Optional</sup> <a name="replaceInvalidChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.replaceInvalidChars"></a>

```java
public java.lang.String getReplaceInvalidChars();
```

- *Type:* java.lang.String

A list of characters that you want to replace. Use with ReplaceChars.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#replace_invalid_chars DmsEndpoint#replace_invalid_chars}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the Amazon Redshift endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `serverSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId"></a>

```java
public java.lang.String getServerSideEncryptionKmsKeyId();
```

- *Type:* java.lang.String

The AWS KMS key ID. If you are using SSE_KMS for the EncryptionMode, provide this key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role that has access to the Amazon Redshift service.

The role must allow the iam:PassRole action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

##### `timeFormat`<sup>Optional</sup> <a name="timeFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.timeFormat"></a>

```java
public java.lang.String getTimeFormat();
```

- *Type:* java.lang.String

The time format that you want to use. Valid values are auto (case-sensitive), 'timeformat_string', 'epochsecs', or 'epochmillisecs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#time_format DmsEndpoint#time_format}

---

##### `trimBlanks`<sup>Optional</sup> <a name="trimBlanks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.trimBlanks"></a>

```java
public java.lang.Boolean|IResolvable getTrimBlanks();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that specifies to remove the trailing white space characters from a VARCHAR string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#trim_blanks DmsEndpoint#trim_blanks}

---

##### `truncateColumns`<sup>Optional</sup> <a name="truncateColumns" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.truncateColumns"></a>

```java
public java.lang.Boolean|IResolvable getTruncateColumns();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that specifies to truncate data in columns to the appropriate number of characters, so that the data fits in the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#truncate_columns DmsEndpoint#truncate_columns}

---

##### `writeBufferSize`<sup>Optional</sup> <a name="writeBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.writeBufferSize"></a>

```java
public java.lang.Number getWriteBufferSize();
```

- *Type:* java.lang.Number

The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk at the DMS replication instance. The default value is 1000 (buffer size is 1000KB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#write_buffer_size DmsEndpoint#write_buffer_size}

---

### DmsEndpointS3Settings <a name="DmsEndpointS3Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointS3Settings;

DmsEndpointS3Settings.builder()
//  .addColumnName(java.lang.Boolean|IResolvable)
//  .addTrailingPaddingCharacter(java.lang.Boolean|IResolvable)
//  .bucketFolder(java.lang.String)
//  .bucketName(java.lang.String)
//  .cannedAclForObjects(java.lang.String)
//  .cdcInsertsAndUpdates(java.lang.Boolean|IResolvable)
//  .cdcInsertsOnly(java.lang.Boolean|IResolvable)
//  .cdcMaxBatchInterval(java.lang.Number)
//  .cdcMinFileSize(java.lang.Number)
//  .cdcPath(java.lang.String)
//  .compressionType(java.lang.String)
//  .csvDelimiter(java.lang.String)
//  .csvNoSupValue(java.lang.String)
//  .csvNullValue(java.lang.String)
//  .csvRowDelimiter(java.lang.String)
//  .dataFormat(java.lang.String)
//  .dataPageSize(java.lang.Number)
//  .datePartitionDelimiter(java.lang.String)
//  .datePartitionEnabled(java.lang.Boolean|IResolvable)
//  .datePartitionSequence(java.lang.String)
//  .datePartitionTimezone(java.lang.String)
//  .dictPageSizeLimit(java.lang.Number)
//  .enableStatistics(java.lang.Boolean|IResolvable)
//  .encodingType(java.lang.String)
//  .encryptionMode(java.lang.String)
//  .expectedBucketOwner(java.lang.String)
//  .externalTableDefinition(java.lang.String)
//  .glueCatalogGeneration(java.lang.Boolean|IResolvable)
//  .ignoreHeaderRows(java.lang.Number)
//  .includeOpForFullLoad(java.lang.Boolean|IResolvable)
//  .maxFileSize(java.lang.Number)
//  .parquetTimestampInMillisecond(java.lang.Boolean|IResolvable)
//  .parquetVersion(java.lang.String)
//  .preserveTransactions(java.lang.Boolean|IResolvable)
//  .rfc4180(java.lang.Boolean|IResolvable)
//  .rowGroupLength(java.lang.Number)
//  .serverSideEncryptionKmsKeyId(java.lang.String)
//  .serviceAccessRoleArn(java.lang.String)
//  .timestampColumnName(java.lang.String)
//  .useCsvNoSupValue(java.lang.Boolean|IResolvable)
//  .useTaskStartTimeForFullLoadTimestamp(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.addColumnName">addColumnName</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | An optional parameter that, when set to true or y, you can use to add column name information to the .csv output file. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.addTrailingPaddingCharacter">addTrailingPaddingCharacter</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use the S3 target endpoint setting AddTrailingPaddingCharacter to add padding on string data. The default value is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.bucketFolder">bucketFolder</a></code> | <code>java.lang.String</code> | An optional parameter to set a folder name in the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The name of the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cannedAclForObjects">cannedAclForObjects</a></code> | <code>java.lang.String</code> | A value that enables AWS DMS to specify a predefined (canned) access control list (ACL) for objects created in an Amazon S3 bucket as .csv or .parquet files. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsAndUpdates">cdcInsertsAndUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that enables a change data capture (CDC) load to write INSERT and UPDATE operations to .csv or .parquet (columnar storage) output files. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsOnly">cdcInsertsOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that enables a change data capture (CDC) load to write only INSERT operations to .csv or columnar storage (.parquet) output files. By default (the false setting), the first field in a .csv or .parquet record contains the letter I (INSERT), U (UPDATE), or D (DELETE). These values indicate whether the row was inserted, updated, or deleted at the source database for a CDC load to the target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcMaxBatchInterval">cdcMaxBatchInterval</a></code> | <code>java.lang.Number</code> | Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcMinFileSize">cdcMinFileSize</a></code> | <code>java.lang.Number</code> | Minimum file size, defined in kilobytes, to reach for a file output to Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcPath">cdcPath</a></code> | <code>java.lang.String</code> | Specifies the folder path of CDC files. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.compressionType">compressionType</a></code> | <code>java.lang.String</code> | An optional parameter. When set to GZIP it enables the service to compress the target files. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvDelimiter">csvDelimiter</a></code> | <code>java.lang.String</code> | The delimiter used to separate columns in the .csv file for both source and target. The default is a comma. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvNoSupValue">csvNoSupValue</a></code> | <code>java.lang.String</code> | This setting only applies if your Amazon S3 output files during a change data capture (CDC) load are written in .csv format. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvNullValue">csvNullValue</a></code> | <code>java.lang.String</code> | An optional parameter that specifies how AWS DMS treats null values. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvRowDelimiter">csvRowDelimiter</a></code> | <code>java.lang.String</code> | The delimiter used to separate rows in the .csv file for both source and target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dataFormat">dataFormat</a></code> | <code>java.lang.String</code> | The format of the data that you want to use for output. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dataPageSize">dataPageSize</a></code> | <code>java.lang.Number</code> | The size of one data page in bytes. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionDelimiter">datePartitionDelimiter</a></code> | <code>java.lang.String</code> | Specifies a date separating delimiter to use during folder partitioning. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionEnabled">datePartitionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, this parameter partitions S3 bucket folders based on transaction commit dates. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionSequence">datePartitionSequence</a></code> | <code>java.lang.String</code> | Identifies the sequence of the date format to use during folder partitioning. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionTimezone">datePartitionTimezone</a></code> | <code>java.lang.String</code> | When creating an S3 target endpoint, set DatePartitionTimezone to convert the current UTC time into a specified time zone. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dictPageSizeLimit">dictPageSizeLimit</a></code> | <code>java.lang.Number</code> | The maximum size of an encoded dictionary page of a column. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.enableStatistics">enableStatistics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that enables statistics for Parquet pages and row groups. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.encodingType">encodingType</a></code> | <code>java.lang.String</code> | The type of encoding that you're using. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.encryptionMode">encryptionMode</a></code> | <code>java.lang.String</code> | The type of server-side encryption that you want to use for your data. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | To specify a bucket owner and prevent sniping, you can use the ExpectedBucketOwner endpoint setting. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.externalTableDefinition">externalTableDefinition</a></code> | <code>java.lang.String</code> | The external table definition. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.glueCatalogGeneration">glueCatalogGeneration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, allows AWS Glue to catalog your S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.ignoreHeaderRows">ignoreHeaderRows</a></code> | <code>java.lang.Number</code> | When this value is set to 1, AWS DMS ignores the first row header in a .csv file. A value of 1 turns on the feature; a value of 0 turns off the feature. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.includeOpForFullLoad">includeOpForFullLoad</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that enables a full load to write INSERT operations to the comma-separated value (.csv) output files only to indicate how the rows were added to the source database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | A value that specifies the maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.parquetTimestampInMillisecond">parquetTimestampInMillisecond</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that specifies the precision of any TIMESTAMP column values that are written to an Amazon S3 object file in .parquet format. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.parquetVersion">parquetVersion</a></code> | <code>java.lang.String</code> | The version of the Apache Parquet format that you want to use: parquet_1_0 (the default) or parquet_2_0. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.preserveTransactions">preserveTransactions</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If this setting is set to true, AWS DMS saves the transaction order for a change data capture (CDC) load on the Amazon S3 target specified by CdcPath. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.rfc4180">rfc4180</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | For an S3 source, when this value is set to true or y, each leading double quotation mark has to be followed by an ending double quotation mark. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.rowGroupLength">rowGroupLength</a></code> | <code>java.lang.Number</code> | The number of rows in a row group. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>java.lang.String</code> | If you are using SSE_KMS for the EncryptionMode, provide the AWS KMS key ID. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | A required parameter that specifies the Amazon Resource Name (ARN) used by the service to access the IAM role. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.timestampColumnName">timestampColumnName</a></code> | <code>java.lang.String</code> | A value that when nonblank causes AWS DMS to add a column with timestamp information to the endpoint data for an Amazon S3 target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.useCsvNoSupValue">useCsvNoSupValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This setting applies if the S3 output files during a change data capture (CDC) load are written in .csv format. If this setting is set to true for columns not included in the supplemental log, AWS DMS uses the value specified by CsvNoSupValue. If this setting isn't set or is set to false, AWS DMS uses the null value for these columns. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.useTaskStartTimeForFullLoadTimestamp">useTaskStartTimeForFullLoadTimestamp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, this parameter uses the task start time as the timestamp column value instead of the time data is written to target. |

---

##### `addColumnName`<sup>Optional</sup> <a name="addColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.addColumnName"></a>

```java
public java.lang.Boolean|IResolvable getAddColumnName();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

An optional parameter that, when set to true or y, you can use to add column name information to the .csv output file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#add_column_name DmsEndpoint#add_column_name}

---

##### `addTrailingPaddingCharacter`<sup>Optional</sup> <a name="addTrailingPaddingCharacter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.addTrailingPaddingCharacter"></a>

```java
public java.lang.Boolean|IResolvable getAddTrailingPaddingCharacter();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use the S3 target endpoint setting AddTrailingPaddingCharacter to add padding on string data. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#add_trailing_padding_character DmsEndpoint#add_trailing_padding_character}

---

##### `bucketFolder`<sup>Optional</sup> <a name="bucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.bucketFolder"></a>

```java
public java.lang.String getBucketFolder();
```

- *Type:* java.lang.String

An optional parameter to set a folder name in the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The name of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#bucket_name DmsEndpoint#bucket_name}

---

##### `cannedAclForObjects`<sup>Optional</sup> <a name="cannedAclForObjects" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cannedAclForObjects"></a>

```java
public java.lang.String getCannedAclForObjects();
```

- *Type:* java.lang.String

A value that enables AWS DMS to specify a predefined (canned) access control list (ACL) for objects created in an Amazon S3 bucket as .csv or .parquet files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#canned_acl_for_objects DmsEndpoint#canned_acl_for_objects}

---

##### `cdcInsertsAndUpdates`<sup>Optional</sup> <a name="cdcInsertsAndUpdates" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsAndUpdates"></a>

```java
public java.lang.Boolean|IResolvable getCdcInsertsAndUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that enables a change data capture (CDC) load to write INSERT and UPDATE operations to .csv or .parquet (columnar storage) output files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#cdc_inserts_and_updates DmsEndpoint#cdc_inserts_and_updates}

---

##### `cdcInsertsOnly`<sup>Optional</sup> <a name="cdcInsertsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsOnly"></a>

```java
public java.lang.Boolean|IResolvable getCdcInsertsOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that enables a change data capture (CDC) load to write only INSERT operations to .csv or columnar storage (.parquet) output files. By default (the false setting), the first field in a .csv or .parquet record contains the letter I (INSERT), U (UPDATE), or D (DELETE). These values indicate whether the row was inserted, updated, or deleted at the source database for a CDC load to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#cdc_inserts_only DmsEndpoint#cdc_inserts_only}

---

##### `cdcMaxBatchInterval`<sup>Optional</sup> <a name="cdcMaxBatchInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcMaxBatchInterval"></a>

```java
public java.lang.Number getCdcMaxBatchInterval();
```

- *Type:* java.lang.Number

Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#cdc_max_batch_interval DmsEndpoint#cdc_max_batch_interval}

---

##### `cdcMinFileSize`<sup>Optional</sup> <a name="cdcMinFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcMinFileSize"></a>

```java
public java.lang.Number getCdcMinFileSize();
```

- *Type:* java.lang.Number

Minimum file size, defined in kilobytes, to reach for a file output to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#cdc_min_file_size DmsEndpoint#cdc_min_file_size}

---

##### `cdcPath`<sup>Optional</sup> <a name="cdcPath" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcPath"></a>

```java
public java.lang.String getCdcPath();
```

- *Type:* java.lang.String

Specifies the folder path of CDC files.

For an S3 source, this setting is required if a task captures change data; otherwise, it's optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#cdc_path DmsEndpoint#cdc_path}

---

##### `compressionType`<sup>Optional</sup> <a name="compressionType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.compressionType"></a>

```java
public java.lang.String getCompressionType();
```

- *Type:* java.lang.String

An optional parameter. When set to GZIP it enables the service to compress the target files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#compression_type DmsEndpoint#compression_type}

---

##### `csvDelimiter`<sup>Optional</sup> <a name="csvDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvDelimiter"></a>

```java
public java.lang.String getCsvDelimiter();
```

- *Type:* java.lang.String

The delimiter used to separate columns in the .csv file for both source and target. The default is a comma.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#csv_delimiter DmsEndpoint#csv_delimiter}

---

##### `csvNoSupValue`<sup>Optional</sup> <a name="csvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvNoSupValue"></a>

```java
public java.lang.String getCsvNoSupValue();
```

- *Type:* java.lang.String

This setting only applies if your Amazon S3 output files during a change data capture (CDC) load are written in .csv format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#csv_no_sup_value DmsEndpoint#csv_no_sup_value}

---

##### `csvNullValue`<sup>Optional</sup> <a name="csvNullValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvNullValue"></a>

```java
public java.lang.String getCsvNullValue();
```

- *Type:* java.lang.String

An optional parameter that specifies how AWS DMS treats null values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#csv_null_value DmsEndpoint#csv_null_value}

---

##### `csvRowDelimiter`<sup>Optional</sup> <a name="csvRowDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvRowDelimiter"></a>

```java
public java.lang.String getCsvRowDelimiter();
```

- *Type:* java.lang.String

The delimiter used to separate rows in the .csv file for both source and target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#csv_row_delimiter DmsEndpoint#csv_row_delimiter}

---

##### `dataFormat`<sup>Optional</sup> <a name="dataFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dataFormat"></a>

```java
public java.lang.String getDataFormat();
```

- *Type:* java.lang.String

The format of the data that you want to use for output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#data_format DmsEndpoint#data_format}

---

##### `dataPageSize`<sup>Optional</sup> <a name="dataPageSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dataPageSize"></a>

```java
public java.lang.Number getDataPageSize();
```

- *Type:* java.lang.Number

The size of one data page in bytes.

This parameter defaults to 1024 * 1024 bytes (1 MiB). This number is used for .parquet file format only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#data_page_size DmsEndpoint#data_page_size}

---

##### `datePartitionDelimiter`<sup>Optional</sup> <a name="datePartitionDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionDelimiter"></a>

```java
public java.lang.String getDatePartitionDelimiter();
```

- *Type:* java.lang.String

Specifies a date separating delimiter to use during folder partitioning.

The default value is SLASH. Use this parameter when DatePartitionedEnabled is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#date_partition_delimiter DmsEndpoint#date_partition_delimiter}

---

##### `datePartitionEnabled`<sup>Optional</sup> <a name="datePartitionEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDatePartitionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, this parameter partitions S3 bucket folders based on transaction commit dates.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#date_partition_enabled DmsEndpoint#date_partition_enabled}

---

##### `datePartitionSequence`<sup>Optional</sup> <a name="datePartitionSequence" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionSequence"></a>

```java
public java.lang.String getDatePartitionSequence();
```

- *Type:* java.lang.String

Identifies the sequence of the date format to use during folder partitioning.

The default value is YYYYMMDD. Use this parameter when DatePartitionedEnabled is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#date_partition_sequence DmsEndpoint#date_partition_sequence}

---

##### `datePartitionTimezone`<sup>Optional</sup> <a name="datePartitionTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionTimezone"></a>

```java
public java.lang.String getDatePartitionTimezone();
```

- *Type:* java.lang.String

When creating an S3 target endpoint, set DatePartitionTimezone to convert the current UTC time into a specified time zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#date_partition_timezone DmsEndpoint#date_partition_timezone}

---

##### `dictPageSizeLimit`<sup>Optional</sup> <a name="dictPageSizeLimit" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dictPageSizeLimit"></a>

```java
public java.lang.Number getDictPageSizeLimit();
```

- *Type:* java.lang.Number

The maximum size of an encoded dictionary page of a column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#dict_page_size_limit DmsEndpoint#dict_page_size_limit}

---

##### `enableStatistics`<sup>Optional</sup> <a name="enableStatistics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.enableStatistics"></a>

```java
public java.lang.Boolean|IResolvable getEnableStatistics();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that enables statistics for Parquet pages and row groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#enable_statistics DmsEndpoint#enable_statistics}

---

##### `encodingType`<sup>Optional</sup> <a name="encodingType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.encodingType"></a>

```java
public java.lang.String getEncodingType();
```

- *Type:* java.lang.String

The type of encoding that you're using.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#encoding_type DmsEndpoint#encoding_type}

---

##### `encryptionMode`<sup>Optional</sup> <a name="encryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.encryptionMode"></a>

```java
public java.lang.String getEncryptionMode();
```

- *Type:* java.lang.String

The type of server-side encryption that you want to use for your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

To specify a bucket owner and prevent sniping, you can use the ExpectedBucketOwner endpoint setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#expected_bucket_owner DmsEndpoint#expected_bucket_owner}

---

##### `externalTableDefinition`<sup>Optional</sup> <a name="externalTableDefinition" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.externalTableDefinition"></a>

```java
public java.lang.String getExternalTableDefinition();
```

- *Type:* java.lang.String

The external table definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#external_table_definition DmsEndpoint#external_table_definition}

---

##### `glueCatalogGeneration`<sup>Optional</sup> <a name="glueCatalogGeneration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.glueCatalogGeneration"></a>

```java
public java.lang.Boolean|IResolvable getGlueCatalogGeneration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, allows AWS Glue to catalog your S3 bucket.

Creating an AWS Glue catalog lets you use Athena to query your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#glue_catalog_generation DmsEndpoint#glue_catalog_generation}

---

##### `ignoreHeaderRows`<sup>Optional</sup> <a name="ignoreHeaderRows" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.ignoreHeaderRows"></a>

```java
public java.lang.Number getIgnoreHeaderRows();
```

- *Type:* java.lang.Number

When this value is set to 1, AWS DMS ignores the first row header in a .csv file. A value of 1 turns on the feature; a value of 0 turns off the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#ignore_header_rows DmsEndpoint#ignore_header_rows}

---

##### `includeOpForFullLoad`<sup>Optional</sup> <a name="includeOpForFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.includeOpForFullLoad"></a>

```java
public java.lang.Boolean|IResolvable getIncludeOpForFullLoad();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that enables a full load to write INSERT operations to the comma-separated value (.csv) output files only to indicate how the rows were added to the source database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#include_op_for_full_load DmsEndpoint#include_op_for_full_load}

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

A value that specifies the maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `parquetTimestampInMillisecond`<sup>Optional</sup> <a name="parquetTimestampInMillisecond" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.parquetTimestampInMillisecond"></a>

```java
public java.lang.Boolean|IResolvable getParquetTimestampInMillisecond();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that specifies the precision of any TIMESTAMP column values that are written to an Amazon S3 object file in .parquet format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#parquet_timestamp_in_millisecond DmsEndpoint#parquet_timestamp_in_millisecond}

---

##### `parquetVersion`<sup>Optional</sup> <a name="parquetVersion" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.parquetVersion"></a>

```java
public java.lang.String getParquetVersion();
```

- *Type:* java.lang.String

The version of the Apache Parquet format that you want to use: parquet_1_0 (the default) or parquet_2_0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#parquet_version DmsEndpoint#parquet_version}

---

##### `preserveTransactions`<sup>Optional</sup> <a name="preserveTransactions" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.preserveTransactions"></a>

```java
public java.lang.Boolean|IResolvable getPreserveTransactions();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If this setting is set to true, AWS DMS saves the transaction order for a change data capture (CDC) load on the Amazon S3 target specified by CdcPath.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#preserve_transactions DmsEndpoint#preserve_transactions}

---

##### `rfc4180`<sup>Optional</sup> <a name="rfc4180" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.rfc4180"></a>

```java
public java.lang.Boolean|IResolvable getRfc4180();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

For an S3 source, when this value is set to true or y, each leading double quotation mark has to be followed by an ending double quotation mark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#rfc_4180 DmsEndpoint#rfc_4180}

---

##### `rowGroupLength`<sup>Optional</sup> <a name="rowGroupLength" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.rowGroupLength"></a>

```java
public java.lang.Number getRowGroupLength();
```

- *Type:* java.lang.Number

The number of rows in a row group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#row_group_length DmsEndpoint#row_group_length}

---

##### `serverSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.serverSideEncryptionKmsKeyId"></a>

```java
public java.lang.String getServerSideEncryptionKmsKeyId();
```

- *Type:* java.lang.String

If you are using SSE_KMS for the EncryptionMode, provide the AWS KMS key ID.

The key that you use needs an attached policy that enables IAM user permissions and allows use of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

A required parameter that specifies the Amazon Resource Name (ARN) used by the service to access the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

##### `timestampColumnName`<sup>Optional</sup> <a name="timestampColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.timestampColumnName"></a>

```java
public java.lang.String getTimestampColumnName();
```

- *Type:* java.lang.String

A value that when nonblank causes AWS DMS to add a column with timestamp information to the endpoint data for an Amazon S3 target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#timestamp_column_name DmsEndpoint#timestamp_column_name}

---

##### `useCsvNoSupValue`<sup>Optional</sup> <a name="useCsvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.useCsvNoSupValue"></a>

```java
public java.lang.Boolean|IResolvable getUseCsvNoSupValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This setting applies if the S3 output files during a change data capture (CDC) load are written in .csv format. If this setting is set to true for columns not included in the supplemental log, AWS DMS uses the value specified by CsvNoSupValue. If this setting isn't set or is set to false, AWS DMS uses the null value for these columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#use_csv_no_sup_value DmsEndpoint#use_csv_no_sup_value}

---

##### `useTaskStartTimeForFullLoadTimestamp`<sup>Optional</sup> <a name="useTaskStartTimeForFullLoadTimestamp" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.useTaskStartTimeForFullLoadTimestamp"></a>

```java
public java.lang.Boolean|IResolvable getUseTaskStartTimeForFullLoadTimestamp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, this parameter uses the task start time as the timestamp column value instead of the time data is written to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#use_task_start_time_for_full_load_timestamp DmsEndpoint#use_task_start_time_for_full_load_timestamp}

---

### DmsEndpointSybaseSettings <a name="DmsEndpointSybaseSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointSybaseSettings;

DmsEndpointSybaseSettings.builder()
//  .secretsManagerAccessRoleArn(java.lang.String)
//  .secretsManagerSecretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the SAP SAE endpoint connection details. |

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the SAP SAE endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

### DmsEndpointTags <a name="DmsEndpointTags" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointTags;

DmsEndpointTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags.property.key">key</a></code> | <code>java.lang.String</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags.property.value">value</a></code> | <code>java.lang.String</code> | A value is the optional value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A key is the required name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#key DmsEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A value is the optional value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dms_endpoint#value DmsEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DmsEndpointDocDbSettingsOutputReference <a name="DmsEndpointDocDbSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointDocDbSettingsOutputReference;

new DmsEndpointDocDbSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetDocsToInvestigate">resetDocsToInvestigate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetExtractDocId">resetExtractDocId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetNestingLevel">resetNestingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDocsToInvestigate` <a name="resetDocsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetDocsToInvestigate"></a>

```java
public void resetDocsToInvestigate()
```

##### `resetExtractDocId` <a name="resetExtractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetExtractDocId"></a>

```java
public void resetExtractDocId()
```

##### `resetNestingLevel` <a name="resetNestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetNestingLevel"></a>

```java
public void resetNestingLevel()
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```java
public void resetSecretsManagerAccessRoleArn()
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetSecretsManagerSecretId"></a>

```java
public void resetSecretsManagerSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.docsToInvestigateInput">docsToInvestigateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.extractDocIdInput">extractDocIdInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.nestingLevelInput">nestingLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.docsToInvestigate">docsToInvestigate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.extractDocId">extractDocId</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.nestingLevel">nestingLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `docsToInvestigateInput`<sup>Optional</sup> <a name="docsToInvestigateInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.docsToInvestigateInput"></a>

```java
public java.lang.Number getDocsToInvestigateInput();
```

- *Type:* java.lang.Number

---

##### `extractDocIdInput`<sup>Optional</sup> <a name="extractDocIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.extractDocIdInput"></a>

```java
public java.lang.Boolean|IResolvable getExtractDocIdInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nestingLevelInput`<sup>Optional</sup> <a name="nestingLevelInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.nestingLevelInput"></a>

```java
public java.lang.String getNestingLevelInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```java
public java.lang.String getSecretsManagerSecretIdInput();
```

- *Type:* java.lang.String

---

##### `docsToInvestigate`<sup>Required</sup> <a name="docsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.docsToInvestigate"></a>

```java
public java.lang.Number getDocsToInvestigate();
```

- *Type:* java.lang.Number

---

##### `extractDocId`<sup>Required</sup> <a name="extractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.extractDocId"></a>

```java
public java.lang.Boolean|IResolvable getExtractDocId();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nestingLevel`<sup>Required</sup> <a name="nestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.nestingLevel"></a>

```java
public java.lang.String getNestingLevel();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsEndpointDocDbSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a>

---


### DmsEndpointDynamoDbSettingsOutputReference <a name="DmsEndpointDynamoDbSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointDynamoDbSettingsOutputReference;

new DmsEndpointDynamoDbSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.resetServiceAccessRoleArn"></a>

```java
public void resetServiceAccessRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```java
public java.lang.String getServiceAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsEndpointDynamoDbSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a>

---


### DmsEndpointElasticsearchSettingsOutputReference <a name="DmsEndpointElasticsearchSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointElasticsearchSettingsOutputReference;

new DmsEndpointElasticsearchSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetEndpointUri">resetEndpointUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetErrorRetryDuration">resetErrorRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetFullLoadErrorPercentage">resetFullLoadErrorPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointUri` <a name="resetEndpointUri" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetEndpointUri"></a>

```java
public void resetEndpointUri()
```

##### `resetErrorRetryDuration` <a name="resetErrorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetErrorRetryDuration"></a>

```java
public void resetErrorRetryDuration()
```

##### `resetFullLoadErrorPercentage` <a name="resetFullLoadErrorPercentage" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetFullLoadErrorPercentage"></a>

```java
public void resetFullLoadErrorPercentage()
```

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetServiceAccessRoleArn"></a>

```java
public void resetServiceAccessRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUriInput">endpointUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDurationInput">errorRetryDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentageInput">fullLoadErrorPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUri">endpointUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration">errorRetryDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage">fullLoadErrorPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointUriInput`<sup>Optional</sup> <a name="endpointUriInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUriInput"></a>

```java
public java.lang.String getEndpointUriInput();
```

- *Type:* java.lang.String

---

##### `errorRetryDurationInput`<sup>Optional</sup> <a name="errorRetryDurationInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDurationInput"></a>

```java
public java.lang.Number getErrorRetryDurationInput();
```

- *Type:* java.lang.Number

---

##### `fullLoadErrorPercentageInput`<sup>Optional</sup> <a name="fullLoadErrorPercentageInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentageInput"></a>

```java
public java.lang.Number getFullLoadErrorPercentageInput();
```

- *Type:* java.lang.Number

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```java
public java.lang.String getServiceAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUri"></a>

```java
public java.lang.String getEndpointUri();
```

- *Type:* java.lang.String

---

##### `errorRetryDuration`<sup>Required</sup> <a name="errorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration"></a>

```java
public java.lang.Number getErrorRetryDuration();
```

- *Type:* java.lang.Number

---

##### `fullLoadErrorPercentage`<sup>Required</sup> <a name="fullLoadErrorPercentage" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage"></a>

```java
public java.lang.Number getFullLoadErrorPercentage();
```

- *Type:* java.lang.Number

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsEndpointElasticsearchSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---


### DmsEndpointGcpMySqlSettingsOutputReference <a name="DmsEndpointGcpMySqlSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointGcpMySqlSettingsOutputReference;

new DmsEndpointGcpMySqlSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetAfterConnectScript">resetAfterConnectScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetCleanSourceMetadataOnMismatch">resetCleanSourceMetadataOnMismatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetEventsPollInterval">resetEventsPollInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetParallelLoadThreads">resetParallelLoadThreads</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetServerTimezone">resetServerTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAfterConnectScript` <a name="resetAfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetAfterConnectScript"></a>

```java
public void resetAfterConnectScript()
```

##### `resetCleanSourceMetadataOnMismatch` <a name="resetCleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetCleanSourceMetadataOnMismatch"></a>

```java
public void resetCleanSourceMetadataOnMismatch()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetEventsPollInterval` <a name="resetEventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetEventsPollInterval"></a>

```java
public void resetEventsPollInterval()
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetMaxFileSize"></a>

```java
public void resetMaxFileSize()
```

##### `resetParallelLoadThreads` <a name="resetParallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetParallelLoadThreads"></a>

```java
public void resetParallelLoadThreads()
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```java
public void resetSecretsManagerAccessRoleArn()
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetSecretsManagerSecretId"></a>

```java
public void resetSecretsManagerSecretId()
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetServerName"></a>

```java
public void resetServerName()
```

##### `resetServerTimezone` <a name="resetServerTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetServerTimezone"></a>

```java
public void resetServerTimezone()
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScriptInput">afterConnectScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatchInput">cleanSourceMetadataOnMismatchInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollIntervalInput">eventsPollIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreadsInput">parallelLoadThreadsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezoneInput">serverTimezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScript">afterConnectScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch">cleanSourceMetadataOnMismatch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollInterval">eventsPollInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreads">parallelLoadThreads</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezone">serverTimezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `afterConnectScriptInput`<sup>Optional</sup> <a name="afterConnectScriptInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScriptInput"></a>

```java
public java.lang.String getAfterConnectScriptInput();
```

- *Type:* java.lang.String

---

##### `cleanSourceMetadataOnMismatchInput`<sup>Optional</sup> <a name="cleanSourceMetadataOnMismatchInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatchInput"></a>

```java
public java.lang.Boolean|IResolvable getCleanSourceMetadataOnMismatchInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `eventsPollIntervalInput`<sup>Optional</sup> <a name="eventsPollIntervalInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollIntervalInput"></a>

```java
public java.lang.Number getEventsPollIntervalInput();
```

- *Type:* java.lang.Number

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSizeInput"></a>

```java
public java.lang.Number getMaxFileSizeInput();
```

- *Type:* java.lang.Number

---

##### `parallelLoadThreadsInput`<sup>Optional</sup> <a name="parallelLoadThreadsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreadsInput"></a>

```java
public java.lang.Number getParallelLoadThreadsInput();
```

- *Type:* java.lang.Number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```java
public java.lang.String getSecretsManagerSecretIdInput();
```

- *Type:* java.lang.String

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `serverTimezoneInput`<sup>Optional</sup> <a name="serverTimezoneInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezoneInput"></a>

```java
public java.lang.String getServerTimezoneInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `afterConnectScript`<sup>Required</sup> <a name="afterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScript"></a>

```java
public java.lang.String getAfterConnectScript();
```

- *Type:* java.lang.String

---

##### `cleanSourceMetadataOnMismatch`<sup>Required</sup> <a name="cleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch"></a>

```java
public java.lang.Boolean|IResolvable getCleanSourceMetadataOnMismatch();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `eventsPollInterval`<sup>Required</sup> <a name="eventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollInterval"></a>

```java
public java.lang.Number getEventsPollInterval();
```

- *Type:* java.lang.Number

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

---

##### `parallelLoadThreads`<sup>Required</sup> <a name="parallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreads"></a>

```java
public java.lang.Number getParallelLoadThreads();
```

- *Type:* java.lang.Number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `serverTimezone`<sup>Required</sup> <a name="serverTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezone"></a>

```java
public java.lang.String getServerTimezone();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsEndpointGcpMySqlSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a>

---


### DmsEndpointIbmDb2SettingsOutputReference <a name="DmsEndpointIbmDb2SettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointIbmDb2SettingsOutputReference;

new DmsEndpointIbmDb2SettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetCurrentLsn">resetCurrentLsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetKeepCsvFiles">resetKeepCsvFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetLoadTimeout">resetLoadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetMaxKBytesPerRead">resetMaxKBytesPerRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetSetDataCaptureChanges">resetSetDataCaptureChanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetWriteBufferSize">resetWriteBufferSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCurrentLsn` <a name="resetCurrentLsn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetCurrentLsn"></a>

```java
public void resetCurrentLsn()
```

##### `resetKeepCsvFiles` <a name="resetKeepCsvFiles" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetKeepCsvFiles"></a>

```java
public void resetKeepCsvFiles()
```

##### `resetLoadTimeout` <a name="resetLoadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetLoadTimeout"></a>

```java
public void resetLoadTimeout()
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetMaxFileSize"></a>

```java
public void resetMaxFileSize()
```

##### `resetMaxKBytesPerRead` <a name="resetMaxKBytesPerRead" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetMaxKBytesPerRead"></a>

```java
public void resetMaxKBytesPerRead()
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```java
public void resetSecretsManagerAccessRoleArn()
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetSecretsManagerSecretId"></a>

```java
public void resetSecretsManagerSecretId()
```

##### `resetSetDataCaptureChanges` <a name="resetSetDataCaptureChanges" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetSetDataCaptureChanges"></a>

```java
public void resetSetDataCaptureChanges()
```

##### `resetWriteBufferSize` <a name="resetWriteBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetWriteBufferSize"></a>

```java
public void resetWriteBufferSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.currentLsnInput">currentLsnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFilesInput">keepCsvFilesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.loadTimeoutInput">loadTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerReadInput">maxKBytesPerReadInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChangesInput">setDataCaptureChangesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSizeInput">writeBufferSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.currentLsn">currentLsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFiles">keepCsvFiles</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.loadTimeout">loadTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerRead">maxKBytesPerRead</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChanges">setDataCaptureChanges</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSize">writeBufferSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentLsnInput`<sup>Optional</sup> <a name="currentLsnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.currentLsnInput"></a>

```java
public java.lang.String getCurrentLsnInput();
```

- *Type:* java.lang.String

---

##### `keepCsvFilesInput`<sup>Optional</sup> <a name="keepCsvFilesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFilesInput"></a>

```java
public java.lang.Boolean|IResolvable getKeepCsvFilesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `loadTimeoutInput`<sup>Optional</sup> <a name="loadTimeoutInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.loadTimeoutInput"></a>

```java
public java.lang.Number getLoadTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxFileSizeInput"></a>

```java
public java.lang.Number getMaxFileSizeInput();
```

- *Type:* java.lang.Number

---

##### `maxKBytesPerReadInput`<sup>Optional</sup> <a name="maxKBytesPerReadInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerReadInput"></a>

```java
public java.lang.Number getMaxKBytesPerReadInput();
```

- *Type:* java.lang.Number

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```java
public java.lang.String getSecretsManagerSecretIdInput();
```

- *Type:* java.lang.String

---

##### `setDataCaptureChangesInput`<sup>Optional</sup> <a name="setDataCaptureChangesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChangesInput"></a>

```java
public java.lang.Boolean|IResolvable getSetDataCaptureChangesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `writeBufferSizeInput`<sup>Optional</sup> <a name="writeBufferSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSizeInput"></a>

```java
public java.lang.Number getWriteBufferSizeInput();
```

- *Type:* java.lang.Number

---

##### `currentLsn`<sup>Required</sup> <a name="currentLsn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.currentLsn"></a>

```java
public java.lang.String getCurrentLsn();
```

- *Type:* java.lang.String

---

##### `keepCsvFiles`<sup>Required</sup> <a name="keepCsvFiles" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFiles"></a>

```java
public java.lang.Boolean|IResolvable getKeepCsvFiles();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `loadTimeout`<sup>Required</sup> <a name="loadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.loadTimeout"></a>

```java
public java.lang.Number getLoadTimeout();
```

- *Type:* java.lang.Number

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

---

##### `maxKBytesPerRead`<sup>Required</sup> <a name="maxKBytesPerRead" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerRead"></a>

```java
public java.lang.Number getMaxKBytesPerRead();
```

- *Type:* java.lang.Number

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `setDataCaptureChanges`<sup>Required</sup> <a name="setDataCaptureChanges" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChanges"></a>

```java
public java.lang.Boolean|IResolvable getSetDataCaptureChanges();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `writeBufferSize`<sup>Required</sup> <a name="writeBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSize"></a>

```java
public java.lang.Number getWriteBufferSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsEndpointIbmDb2Settings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a>

---


### DmsEndpointKafkaSettingsOutputReference <a name="DmsEndpointKafkaSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointKafkaSettingsOutputReference;

new DmsEndpointKafkaSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetBroker">resetBroker</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeControlDetails">resetIncludeControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeNullAndEmpty">resetIncludeNullAndEmpty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludePartitionValue">resetIncludePartitionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTableAlterOperations">resetIncludeTableAlterOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTransactionDetails">resetIncludeTransactionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageFormat">resetMessageFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageMaxBytes">resetMessageMaxBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetNoHexPrefix">resetNoHexPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetPartitionIncludeSchemaTable">resetPartitionIncludeSchemaTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslPassword">resetSaslPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslUserName">resetSaslUserName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSecurityProtocol">resetSecurityProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslCaCertificateArn">resetSslCaCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientCertificateArn">resetSslClientCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyArn">resetSslClientKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyPassword">resetSslClientKeyPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetTopic">resetTopic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBroker` <a name="resetBroker" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetBroker"></a>

```java
public void resetBroker()
```

##### `resetIncludeControlDetails` <a name="resetIncludeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeControlDetails"></a>

```java
public void resetIncludeControlDetails()
```

##### `resetIncludeNullAndEmpty` <a name="resetIncludeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeNullAndEmpty"></a>

```java
public void resetIncludeNullAndEmpty()
```

##### `resetIncludePartitionValue` <a name="resetIncludePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludePartitionValue"></a>

```java
public void resetIncludePartitionValue()
```

##### `resetIncludeTableAlterOperations` <a name="resetIncludeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTableAlterOperations"></a>

```java
public void resetIncludeTableAlterOperations()
```

##### `resetIncludeTransactionDetails` <a name="resetIncludeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTransactionDetails"></a>

```java
public void resetIncludeTransactionDetails()
```

##### `resetMessageFormat` <a name="resetMessageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageFormat"></a>

```java
public void resetMessageFormat()
```

##### `resetMessageMaxBytes` <a name="resetMessageMaxBytes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageMaxBytes"></a>

```java
public void resetMessageMaxBytes()
```

##### `resetNoHexPrefix` <a name="resetNoHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetNoHexPrefix"></a>

```java
public void resetNoHexPrefix()
```

##### `resetPartitionIncludeSchemaTable` <a name="resetPartitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetPartitionIncludeSchemaTable"></a>

```java
public void resetPartitionIncludeSchemaTable()
```

##### `resetSaslPassword` <a name="resetSaslPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslPassword"></a>

```java
public void resetSaslPassword()
```

##### `resetSaslUserName` <a name="resetSaslUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslUserName"></a>

```java
public void resetSaslUserName()
```

##### `resetSecurityProtocol` <a name="resetSecurityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSecurityProtocol"></a>

```java
public void resetSecurityProtocol()
```

##### `resetSslCaCertificateArn` <a name="resetSslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslCaCertificateArn"></a>

```java
public void resetSslCaCertificateArn()
```

##### `resetSslClientCertificateArn` <a name="resetSslClientCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientCertificateArn"></a>

```java
public void resetSslClientCertificateArn()
```

##### `resetSslClientKeyArn` <a name="resetSslClientKeyArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyArn"></a>

```java
public void resetSslClientKeyArn()
```

##### `resetSslClientKeyPassword` <a name="resetSslClientKeyPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyPassword"></a>

```java
public void resetSslClientKeyPassword()
```

##### `resetTopic` <a name="resetTopic" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetTopic"></a>

```java
public void resetTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.brokerInput">brokerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetailsInput">includeControlDetailsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmptyInput">includeNullAndEmptyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValueInput">includePartitionValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperationsInput">includeTableAlterOperationsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetailsInput">includeTransactionDetailsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormatInput">messageFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytesInput">messageMaxBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefixInput">noHexPrefixInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTableInput">partitionIncludeSchemaTableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPasswordInput">saslPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUserNameInput">saslUserNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocolInput">securityProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArnInput">sslCaCertificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArnInput">sslClientCertificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArnInput">sslClientKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPasswordInput">sslClientKeyPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topicInput">topicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.broker">broker</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetails">includeControlDetails</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValue">includePartitionValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormat">messageFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes">messageMaxBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefix">noHexPrefix</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPassword">saslPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUserName">saslUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocol">securityProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn">sslClientCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn">sslClientKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword">sslClientKeyPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `brokerInput`<sup>Optional</sup> <a name="brokerInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.brokerInput"></a>

```java
public java.lang.String getBrokerInput();
```

- *Type:* java.lang.String

---

##### `includeControlDetailsInput`<sup>Optional</sup> <a name="includeControlDetailsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetailsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeControlDetailsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeNullAndEmptyInput`<sup>Optional</sup> <a name="includeNullAndEmptyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmptyInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeNullAndEmptyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includePartitionValueInput`<sup>Optional</sup> <a name="includePartitionValueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValueInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludePartitionValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeTableAlterOperationsInput`<sup>Optional</sup> <a name="includeTableAlterOperationsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperationsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTableAlterOperationsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeTransactionDetailsInput`<sup>Optional</sup> <a name="includeTransactionDetailsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetailsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTransactionDetailsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `messageFormatInput`<sup>Optional</sup> <a name="messageFormatInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormatInput"></a>

```java
public java.lang.String getMessageFormatInput();
```

- *Type:* java.lang.String

---

##### `messageMaxBytesInput`<sup>Optional</sup> <a name="messageMaxBytesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytesInput"></a>

```java
public java.lang.Number getMessageMaxBytesInput();
```

- *Type:* java.lang.Number

---

##### `noHexPrefixInput`<sup>Optional</sup> <a name="noHexPrefixInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefixInput"></a>

```java
public java.lang.Boolean|IResolvable getNoHexPrefixInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `partitionIncludeSchemaTableInput`<sup>Optional</sup> <a name="partitionIncludeSchemaTableInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTableInput"></a>

```java
public java.lang.Boolean|IResolvable getPartitionIncludeSchemaTableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `saslPasswordInput`<sup>Optional</sup> <a name="saslPasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPasswordInput"></a>

```java
public java.lang.String getSaslPasswordInput();
```

- *Type:* java.lang.String

---

##### `saslUserNameInput`<sup>Optional</sup> <a name="saslUserNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUserNameInput"></a>

```java
public java.lang.String getSaslUserNameInput();
```

- *Type:* java.lang.String

---

##### `securityProtocolInput`<sup>Optional</sup> <a name="securityProtocolInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocolInput"></a>

```java
public java.lang.String getSecurityProtocolInput();
```

- *Type:* java.lang.String

---

##### `sslCaCertificateArnInput`<sup>Optional</sup> <a name="sslCaCertificateArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArnInput"></a>

```java
public java.lang.String getSslCaCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `sslClientCertificateArnInput`<sup>Optional</sup> <a name="sslClientCertificateArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArnInput"></a>

```java
public java.lang.String getSslClientCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `sslClientKeyArnInput`<sup>Optional</sup> <a name="sslClientKeyArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArnInput"></a>

```java
public java.lang.String getSslClientKeyArnInput();
```

- *Type:* java.lang.String

---

##### `sslClientKeyPasswordInput`<sup>Optional</sup> <a name="sslClientKeyPasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPasswordInput"></a>

```java
public java.lang.String getSslClientKeyPasswordInput();
```

- *Type:* java.lang.String

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topicInput"></a>

```java
public java.lang.String getTopicInput();
```

- *Type:* java.lang.String

---

##### `broker`<sup>Required</sup> <a name="broker" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.broker"></a>

```java
public java.lang.String getBroker();
```

- *Type:* java.lang.String

---

##### `includeControlDetails`<sup>Required</sup> <a name="includeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetails"></a>

```java
public java.lang.Boolean|IResolvable getIncludeControlDetails();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeNullAndEmpty`<sup>Required</sup> <a name="includeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty"></a>

```java
public java.lang.Boolean|IResolvable getIncludeNullAndEmpty();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includePartitionValue`<sup>Required</sup> <a name="includePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValue"></a>

```java
public java.lang.Boolean|IResolvable getIncludePartitionValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeTableAlterOperations`<sup>Required</sup> <a name="includeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTableAlterOperations();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeTransactionDetails`<sup>Required</sup> <a name="includeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTransactionDetails();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormat"></a>

```java
public java.lang.String getMessageFormat();
```

- *Type:* java.lang.String

---

##### `messageMaxBytes`<sup>Required</sup> <a name="messageMaxBytes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes"></a>

```java
public java.lang.Number getMessageMaxBytes();
```

- *Type:* java.lang.Number

---

##### `noHexPrefix`<sup>Required</sup> <a name="noHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefix"></a>

```java
public java.lang.Boolean|IResolvable getNoHexPrefix();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `partitionIncludeSchemaTable`<sup>Required</sup> <a name="partitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```java
public java.lang.Boolean|IResolvable getPartitionIncludeSchemaTable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `saslPassword`<sup>Required</sup> <a name="saslPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPassword"></a>

```java
public java.lang.String getSaslPassword();
```

- *Type:* java.lang.String

---

##### `saslUserName`<sup>Required</sup> <a name="saslUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUserName"></a>

```java
public java.lang.String getSaslUserName();
```

- *Type:* java.lang.String

---

##### `securityProtocol`<sup>Required</sup> <a name="securityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocol"></a>

```java
public java.lang.String getSecurityProtocol();
```

- *Type:* java.lang.String

---

##### `sslCaCertificateArn`<sup>Required</sup> <a name="sslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn"></a>

```java
public java.lang.String getSslCaCertificateArn();
```

- *Type:* java.lang.String

---

##### `sslClientCertificateArn`<sup>Required</sup> <a name="sslClientCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn"></a>

```java
public java.lang.String getSslClientCertificateArn();
```

- *Type:* java.lang.String

---

##### `sslClientKeyArn`<sup>Required</sup> <a name="sslClientKeyArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn"></a>

```java
public java.lang.String getSslClientKeyArn();
```

- *Type:* java.lang.String

---

##### `sslClientKeyPassword`<sup>Required</sup> <a name="sslClientKeyPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword"></a>

```java
public java.lang.String getSslClientKeyPassword();
```

- *Type:* java.lang.String

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsEndpointKafkaSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---


### DmsEndpointKinesisSettingsOutputReference <a name="DmsEndpointKinesisSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointKinesisSettingsOutputReference;

new DmsEndpointKinesisSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeControlDetails">resetIncludeControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeNullAndEmpty">resetIncludeNullAndEmpty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludePartitionValue">resetIncludePartitionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTableAlterOperations">resetIncludeTableAlterOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTransactionDetails">resetIncludeTransactionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetMessageFormat">resetMessageFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetNoHexPrefix">resetNoHexPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetPartitionIncludeSchemaTable">resetPartitionIncludeSchemaTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetStreamArn">resetStreamArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeControlDetails` <a name="resetIncludeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeControlDetails"></a>

```java
public void resetIncludeControlDetails()
```

##### `resetIncludeNullAndEmpty` <a name="resetIncludeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeNullAndEmpty"></a>

```java
public void resetIncludeNullAndEmpty()
```

##### `resetIncludePartitionValue` <a name="resetIncludePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludePartitionValue"></a>

```java
public void resetIncludePartitionValue()
```

##### `resetIncludeTableAlterOperations` <a name="resetIncludeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTableAlterOperations"></a>

```java
public void resetIncludeTableAlterOperations()
```

##### `resetIncludeTransactionDetails` <a name="resetIncludeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTransactionDetails"></a>

```java
public void resetIncludeTransactionDetails()
```

##### `resetMessageFormat` <a name="resetMessageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetMessageFormat"></a>

```java
public void resetMessageFormat()
```

##### `resetNoHexPrefix` <a name="resetNoHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetNoHexPrefix"></a>

```java
public void resetNoHexPrefix()
```

##### `resetPartitionIncludeSchemaTable` <a name="resetPartitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetPartitionIncludeSchemaTable"></a>

```java
public void resetPartitionIncludeSchemaTable()
```

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetServiceAccessRoleArn"></a>

```java
public void resetServiceAccessRoleArn()
```

##### `resetStreamArn` <a name="resetStreamArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetStreamArn"></a>

```java
public void resetStreamArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetailsInput">includeControlDetailsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmptyInput">includeNullAndEmptyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValueInput">includePartitionValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperationsInput">includeTableAlterOperationsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetailsInput">includeTransactionDetailsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormatInput">messageFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.noHexPrefixInput">noHexPrefixInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTableInput">partitionIncludeSchemaTableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetails">includeControlDetails</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValue">includePartitionValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormat">messageFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.noHexPrefix">noHexPrefix</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeControlDetailsInput`<sup>Optional</sup> <a name="includeControlDetailsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetailsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeControlDetailsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeNullAndEmptyInput`<sup>Optional</sup> <a name="includeNullAndEmptyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmptyInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeNullAndEmptyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includePartitionValueInput`<sup>Optional</sup> <a name="includePartitionValueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValueInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludePartitionValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeTableAlterOperationsInput`<sup>Optional</sup> <a name="includeTableAlterOperationsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperationsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTableAlterOperationsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeTransactionDetailsInput`<sup>Optional</sup> <a name="includeTransactionDetailsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetailsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTransactionDetailsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `messageFormatInput`<sup>Optional</sup> <a name="messageFormatInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormatInput"></a>

```java
public java.lang.String getMessageFormatInput();
```

- *Type:* java.lang.String

---

##### `noHexPrefixInput`<sup>Optional</sup> <a name="noHexPrefixInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.noHexPrefixInput"></a>

```java
public java.lang.Boolean|IResolvable getNoHexPrefixInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `partitionIncludeSchemaTableInput`<sup>Optional</sup> <a name="partitionIncludeSchemaTableInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTableInput"></a>

```java
public java.lang.Boolean|IResolvable getPartitionIncludeSchemaTableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```java
public java.lang.String getServiceAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArnInput"></a>

```java
public java.lang.String getStreamArnInput();
```

- *Type:* java.lang.String

---

##### `includeControlDetails`<sup>Required</sup> <a name="includeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetails"></a>

```java
public java.lang.Boolean|IResolvable getIncludeControlDetails();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeNullAndEmpty`<sup>Required</sup> <a name="includeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty"></a>

```java
public java.lang.Boolean|IResolvable getIncludeNullAndEmpty();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includePartitionValue`<sup>Required</sup> <a name="includePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValue"></a>

```java
public java.lang.Boolean|IResolvable getIncludePartitionValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeTableAlterOperations`<sup>Required</sup> <a name="includeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTableAlterOperations();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeTransactionDetails`<sup>Required</sup> <a name="includeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails"></a>

```java
public java.lang.Boolean|IResolvable getIncludeTransactionDetails();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormat"></a>

```java
public java.lang.String getMessageFormat();
```

- *Type:* java.lang.String

---

##### `noHexPrefix`<sup>Required</sup> <a name="noHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.noHexPrefix"></a>

```java
public java.lang.Boolean|IResolvable getNoHexPrefix();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `partitionIncludeSchemaTable`<sup>Required</sup> <a name="partitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```java
public java.lang.Boolean|IResolvable getPartitionIncludeSchemaTable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsEndpointKinesisSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---


### DmsEndpointMicrosoftSqlServerSettingsOutputReference <a name="DmsEndpointMicrosoftSqlServerSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference;

new DmsEndpointMicrosoftSqlServerSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetBcpPacketSize">resetBcpPacketSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetControlTablesFileGroup">resetControlTablesFileGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetForceLobLookup">resetForceLobLookup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetQuerySingleAlwaysOnNode">resetQuerySingleAlwaysOnNode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetReadBackupOnly">resetReadBackupOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetSafeguardPolicy">resetSafeguardPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetTlogAccessMode">resetTlogAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetTrimSpaceInChar">resetTrimSpaceInChar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetUseBcpFullLoad">resetUseBcpFullLoad</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetUseThirdPartyBackupDevice">resetUseThirdPartyBackupDevice</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBcpPacketSize` <a name="resetBcpPacketSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetBcpPacketSize"></a>

```java
public void resetBcpPacketSize()
```

##### `resetControlTablesFileGroup` <a name="resetControlTablesFileGroup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetControlTablesFileGroup"></a>

```java
public void resetControlTablesFileGroup()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetForceLobLookup` <a name="resetForceLobLookup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetForceLobLookup"></a>

```java
public void resetForceLobLookup()
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetQuerySingleAlwaysOnNode` <a name="resetQuerySingleAlwaysOnNode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetQuerySingleAlwaysOnNode"></a>

```java
public void resetQuerySingleAlwaysOnNode()
```

##### `resetReadBackupOnly` <a name="resetReadBackupOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetReadBackupOnly"></a>

```java
public void resetReadBackupOnly()
```

##### `resetSafeguardPolicy` <a name="resetSafeguardPolicy" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetSafeguardPolicy"></a>

```java
public void resetSafeguardPolicy()
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```java
public void resetSecretsManagerAccessRoleArn()
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetSecretsManagerSecretId"></a>

```java
public void resetSecretsManagerSecretId()
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetServerName"></a>

```java
public void resetServerName()
```

##### `resetTlogAccessMode` <a name="resetTlogAccessMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetTlogAccessMode"></a>

```java
public void resetTlogAccessMode()
```

##### `resetTrimSpaceInChar` <a name="resetTrimSpaceInChar" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetTrimSpaceInChar"></a>

```java
public void resetTrimSpaceInChar()
```

##### `resetUseBcpFullLoad` <a name="resetUseBcpFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetUseBcpFullLoad"></a>

```java
public void resetUseBcpFullLoad()
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetUsername"></a>

```java
public void resetUsername()
```

##### `resetUseThirdPartyBackupDevice` <a name="resetUseThirdPartyBackupDevice" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetUseThirdPartyBackupDevice"></a>

```java
public void resetUseThirdPartyBackupDevice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSizeInput">bcpPacketSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroupInput">controlTablesFileGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookupInput">forceLobLookupInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNodeInput">querySingleAlwaysOnNodeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnlyInput">readBackupOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicyInput">safeguardPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessModeInput">tlogAccessModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInCharInput">trimSpaceInCharInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoadInput">useBcpFullLoadInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDeviceInput">useThirdPartyBackupDeviceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSize">bcpPacketSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroup">controlTablesFileGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookup">forceLobLookup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNode">querySingleAlwaysOnNode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnly">readBackupOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicy">safeguardPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessMode">tlogAccessMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInChar">trimSpaceInChar</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoad">useBcpFullLoad</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDevice">useThirdPartyBackupDevice</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bcpPacketSizeInput`<sup>Optional</sup> <a name="bcpPacketSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSizeInput"></a>

```java
public java.lang.Number getBcpPacketSizeInput();
```

- *Type:* java.lang.Number

---

##### `controlTablesFileGroupInput`<sup>Optional</sup> <a name="controlTablesFileGroupInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroupInput"></a>

```java
public java.lang.String getControlTablesFileGroupInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `forceLobLookupInput`<sup>Optional</sup> <a name="forceLobLookupInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookupInput"></a>

```java
public java.lang.Boolean|IResolvable getForceLobLookupInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `querySingleAlwaysOnNodeInput`<sup>Optional</sup> <a name="querySingleAlwaysOnNodeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNodeInput"></a>

```java
public java.lang.Boolean|IResolvable getQuerySingleAlwaysOnNodeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `readBackupOnlyInput`<sup>Optional</sup> <a name="readBackupOnlyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getReadBackupOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `safeguardPolicyInput`<sup>Optional</sup> <a name="safeguardPolicyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicyInput"></a>

```java
public java.lang.String getSafeguardPolicyInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```java
public java.lang.String getSecretsManagerSecretIdInput();
```

- *Type:* java.lang.String

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `tlogAccessModeInput`<sup>Optional</sup> <a name="tlogAccessModeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessModeInput"></a>

```java
public java.lang.String getTlogAccessModeInput();
```

- *Type:* java.lang.String

---

##### `trimSpaceInCharInput`<sup>Optional</sup> <a name="trimSpaceInCharInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInCharInput"></a>

```java
public java.lang.Boolean|IResolvable getTrimSpaceInCharInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useBcpFullLoadInput`<sup>Optional</sup> <a name="useBcpFullLoadInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoadInput"></a>

```java
public java.lang.Boolean|IResolvable getUseBcpFullLoadInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `useThirdPartyBackupDeviceInput`<sup>Optional</sup> <a name="useThirdPartyBackupDeviceInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDeviceInput"></a>

```java
public java.lang.Boolean|IResolvable getUseThirdPartyBackupDeviceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bcpPacketSize`<sup>Required</sup> <a name="bcpPacketSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSize"></a>

```java
public java.lang.Number getBcpPacketSize();
```

- *Type:* java.lang.Number

---

##### `controlTablesFileGroup`<sup>Required</sup> <a name="controlTablesFileGroup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroup"></a>

```java
public java.lang.String getControlTablesFileGroup();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `forceLobLookup`<sup>Required</sup> <a name="forceLobLookup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookup"></a>

```java
public java.lang.Boolean|IResolvable getForceLobLookup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `querySingleAlwaysOnNode`<sup>Required</sup> <a name="querySingleAlwaysOnNode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNode"></a>

```java
public java.lang.Boolean|IResolvable getQuerySingleAlwaysOnNode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `readBackupOnly`<sup>Required</sup> <a name="readBackupOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnly"></a>

```java
public java.lang.Boolean|IResolvable getReadBackupOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `safeguardPolicy`<sup>Required</sup> <a name="safeguardPolicy" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicy"></a>

```java
public java.lang.String getSafeguardPolicy();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `tlogAccessMode`<sup>Required</sup> <a name="tlogAccessMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessMode"></a>

```java
public java.lang.String getTlogAccessMode();
```

- *Type:* java.lang.String

---

##### `trimSpaceInChar`<sup>Required</sup> <a name="trimSpaceInChar" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInChar"></a>

```java
public java.lang.Boolean|IResolvable getTrimSpaceInChar();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useBcpFullLoad`<sup>Required</sup> <a name="useBcpFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoad"></a>

```java
public java.lang.Boolean|IResolvable getUseBcpFullLoad();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `useThirdPartyBackupDevice`<sup>Required</sup> <a name="useThirdPartyBackupDevice" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDevice"></a>

```java
public java.lang.Boolean|IResolvable getUseThirdPartyBackupDevice();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsEndpointMicrosoftSqlServerSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a>

---


### DmsEndpointMongoDbSettingsOutputReference <a name="DmsEndpointMongoDbSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointMongoDbSettingsOutputReference;

new DmsEndpointMongoDbSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetAuthMechanism">resetAuthMechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetAuthSource">resetAuthSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetDocsToInvestigate">resetDocsToInvestigate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetExtractDocId">resetExtractDocId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetNestingLevel">resetNestingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthMechanism` <a name="resetAuthMechanism" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetAuthMechanism"></a>

```java
public void resetAuthMechanism()
```

##### `resetAuthSource` <a name="resetAuthSource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetAuthSource"></a>

```java
public void resetAuthSource()
```

##### `resetAuthType` <a name="resetAuthType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetAuthType"></a>

```java
public void resetAuthType()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetDocsToInvestigate` <a name="resetDocsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetDocsToInvestigate"></a>

```java
public void resetDocsToInvestigate()
```

##### `resetExtractDocId` <a name="resetExtractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetExtractDocId"></a>

```java
public void resetExtractDocId()
```

##### `resetNestingLevel` <a name="resetNestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetNestingLevel"></a>

```java
public void resetNestingLevel()
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```java
public void resetSecretsManagerAccessRoleArn()
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetSecretsManagerSecretId"></a>

```java
public void resetSecretsManagerSecretId()
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetServerName"></a>

```java
public void resetServerName()
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authMechanismInput">authMechanismInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authSourceInput">authSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigateInput">docsToInvestigateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.extractDocIdInput">extractDocIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.nestingLevelInput">nestingLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authMechanism">authMechanism</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authSource">authSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigate">docsToInvestigate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.extractDocId">extractDocId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.nestingLevel">nestingLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authMechanismInput`<sup>Optional</sup> <a name="authMechanismInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authMechanismInput"></a>

```java
public java.lang.String getAuthMechanismInput();
```

- *Type:* java.lang.String

---

##### `authSourceInput`<sup>Optional</sup> <a name="authSourceInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authSourceInput"></a>

```java
public java.lang.String getAuthSourceInput();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `docsToInvestigateInput`<sup>Optional</sup> <a name="docsToInvestigateInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigateInput"></a>

```java
public java.lang.String getDocsToInvestigateInput();
```

- *Type:* java.lang.String

---

##### `extractDocIdInput`<sup>Optional</sup> <a name="extractDocIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.extractDocIdInput"></a>

```java
public java.lang.String getExtractDocIdInput();
```

- *Type:* java.lang.String

---

##### `nestingLevelInput`<sup>Optional</sup> <a name="nestingLevelInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.nestingLevelInput"></a>

```java
public java.lang.String getNestingLevelInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```java
public java.lang.String getSecretsManagerSecretIdInput();
```

- *Type:* java.lang.String

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `authMechanism`<sup>Required</sup> <a name="authMechanism" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authMechanism"></a>

```java
public java.lang.String getAuthMechanism();
```

- *Type:* java.lang.String

---

##### `authSource`<sup>Required</sup> <a name="authSource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authSource"></a>

```java
public java.lang.String getAuthSource();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `docsToInvestigate`<sup>Required</sup> <a name="docsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigate"></a>

```java
public java.lang.String getDocsToInvestigate();
```

- *Type:* java.lang.String

---

##### `extractDocId`<sup>Required</sup> <a name="extractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.extractDocId"></a>

```java
public java.lang.String getExtractDocId();
```

- *Type:* java.lang.String

---

##### `nestingLevel`<sup>Required</sup> <a name="nestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.nestingLevel"></a>

```java
public java.lang.String getNestingLevel();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsEndpointMongoDbSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a>

---


### DmsEndpointMySqlSettingsOutputReference <a name="DmsEndpointMySqlSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointMySqlSettingsOutputReference;

new DmsEndpointMySqlSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetAfterConnectScript">resetAfterConnectScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetCleanSourceMetadataOnMismatch">resetCleanSourceMetadataOnMismatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetEventsPollInterval">resetEventsPollInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetParallelLoadThreads">resetParallelLoadThreads</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetServerTimezone">resetServerTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetTargetDbType">resetTargetDbType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAfterConnectScript` <a name="resetAfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetAfterConnectScript"></a>

```java
public void resetAfterConnectScript()
```

##### `resetCleanSourceMetadataOnMismatch` <a name="resetCleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetCleanSourceMetadataOnMismatch"></a>

```java
public void resetCleanSourceMetadataOnMismatch()
```

##### `resetEventsPollInterval` <a name="resetEventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetEventsPollInterval"></a>

```java
public void resetEventsPollInterval()
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetMaxFileSize"></a>

```java
public void resetMaxFileSize()
```

##### `resetParallelLoadThreads` <a name="resetParallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetParallelLoadThreads"></a>

```java
public void resetParallelLoadThreads()
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```java
public void resetSecretsManagerAccessRoleArn()
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetSecretsManagerSecretId"></a>

```java
public void resetSecretsManagerSecretId()
```

##### `resetServerTimezone` <a name="resetServerTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetServerTimezone"></a>

```java
public void resetServerTimezone()
```

##### `resetTargetDbType` <a name="resetTargetDbType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetTargetDbType"></a>

```java
public void resetTargetDbType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.afterConnectScriptInput">afterConnectScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatchInput">cleanSourceMetadataOnMismatchInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.eventsPollIntervalInput">eventsPollIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreadsInput">parallelLoadThreadsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.serverTimezoneInput">serverTimezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.targetDbTypeInput">targetDbTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.afterConnectScript">afterConnectScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch">cleanSourceMetadataOnMismatch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.eventsPollInterval">eventsPollInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreads">parallelLoadThreads</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.serverTimezone">serverTimezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.targetDbType">targetDbType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `afterConnectScriptInput`<sup>Optional</sup> <a name="afterConnectScriptInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.afterConnectScriptInput"></a>

```java
public java.lang.String getAfterConnectScriptInput();
```

- *Type:* java.lang.String

---

##### `cleanSourceMetadataOnMismatchInput`<sup>Optional</sup> <a name="cleanSourceMetadataOnMismatchInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatchInput"></a>

```java
public java.lang.Boolean|IResolvable getCleanSourceMetadataOnMismatchInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventsPollIntervalInput`<sup>Optional</sup> <a name="eventsPollIntervalInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.eventsPollIntervalInput"></a>

```java
public java.lang.Number getEventsPollIntervalInput();
```

- *Type:* java.lang.Number

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.maxFileSizeInput"></a>

```java
public java.lang.Number getMaxFileSizeInput();
```

- *Type:* java.lang.Number

---

##### `parallelLoadThreadsInput`<sup>Optional</sup> <a name="parallelLoadThreadsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreadsInput"></a>

```java
public java.lang.Number getParallelLoadThreadsInput();
```

- *Type:* java.lang.Number

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```java
public java.lang.String getSecretsManagerSecretIdInput();
```

- *Type:* java.lang.String

---

##### `serverTimezoneInput`<sup>Optional</sup> <a name="serverTimezoneInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.serverTimezoneInput"></a>

```java
public java.lang.String getServerTimezoneInput();
```

- *Type:* java.lang.String

---

##### `targetDbTypeInput`<sup>Optional</sup> <a name="targetDbTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.targetDbTypeInput"></a>

```java
public java.lang.String getTargetDbTypeInput();
```

- *Type:* java.lang.String

---

##### `afterConnectScript`<sup>Required</sup> <a name="afterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.afterConnectScript"></a>

```java
public java.lang.String getAfterConnectScript();
```

- *Type:* java.lang.String

---

##### `cleanSourceMetadataOnMismatch`<sup>Required</sup> <a name="cleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch"></a>

```java
public java.lang.Boolean|IResolvable getCleanSourceMetadataOnMismatch();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventsPollInterval`<sup>Required</sup> <a name="eventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.eventsPollInterval"></a>

```java
public java.lang.Number getEventsPollInterval();
```

- *Type:* java.lang.Number

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

---

##### `parallelLoadThreads`<sup>Required</sup> <a name="parallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreads"></a>

```java
public java.lang.Number getParallelLoadThreads();
```

- *Type:* java.lang.Number

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `serverTimezone`<sup>Required</sup> <a name="serverTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.serverTimezone"></a>

```java
public java.lang.String getServerTimezone();
```

- *Type:* java.lang.String

---

##### `targetDbType`<sup>Required</sup> <a name="targetDbType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.targetDbType"></a>

```java
public java.lang.String getTargetDbType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsEndpointMySqlSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a>

---


### DmsEndpointNeptuneSettingsOutputReference <a name="DmsEndpointNeptuneSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointNeptuneSettingsOutputReference;

new DmsEndpointNeptuneSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetErrorRetryDuration">resetErrorRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetIamAuthEnabled">resetIamAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetMaxRetryCount">resetMaxRetryCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetS3BucketFolder">resetS3BucketFolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetS3BucketName">resetS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetErrorRetryDuration` <a name="resetErrorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetErrorRetryDuration"></a>

```java
public void resetErrorRetryDuration()
```

##### `resetIamAuthEnabled` <a name="resetIamAuthEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetIamAuthEnabled"></a>

```java
public void resetIamAuthEnabled()
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetMaxFileSize"></a>

```java
public void resetMaxFileSize()
```

##### `resetMaxRetryCount` <a name="resetMaxRetryCount" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetMaxRetryCount"></a>

```java
public void resetMaxRetryCount()
```

##### `resetS3BucketFolder` <a name="resetS3BucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetS3BucketFolder"></a>

```java
public void resetS3BucketFolder()
```

##### `resetS3BucketName` <a name="resetS3BucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetS3BucketName"></a>

```java
public void resetS3BucketName()
```

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetServiceAccessRoleArn"></a>

```java
public void resetServiceAccessRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.errorRetryDurationInput">errorRetryDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabledInput">iamAuthEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxRetryCountInput">maxRetryCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolderInput">s3BucketFolderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.errorRetryDuration">errorRetryDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabled">iamAuthEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxRetryCount">maxRetryCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolder">s3BucketFolder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorRetryDurationInput`<sup>Optional</sup> <a name="errorRetryDurationInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.errorRetryDurationInput"></a>

```java
public java.lang.Number getErrorRetryDurationInput();
```

- *Type:* java.lang.Number

---

##### `iamAuthEnabledInput`<sup>Optional</sup> <a name="iamAuthEnabledInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIamAuthEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxFileSizeInput"></a>

```java
public java.lang.Number getMaxFileSizeInput();
```

- *Type:* java.lang.Number

---

##### `maxRetryCountInput`<sup>Optional</sup> <a name="maxRetryCountInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxRetryCountInput"></a>

```java
public java.lang.Number getMaxRetryCountInput();
```

- *Type:* java.lang.Number

---

##### `s3BucketFolderInput`<sup>Optional</sup> <a name="s3BucketFolderInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolderInput"></a>

```java
public java.lang.String getS3BucketFolderInput();
```

- *Type:* java.lang.String

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketNameInput"></a>

```java
public java.lang.String getS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```java
public java.lang.String getServiceAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `errorRetryDuration`<sup>Required</sup> <a name="errorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.errorRetryDuration"></a>

```java
public java.lang.Number getErrorRetryDuration();
```

- *Type:* java.lang.Number

---

##### `iamAuthEnabled`<sup>Required</sup> <a name="iamAuthEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIamAuthEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

---

##### `maxRetryCount`<sup>Required</sup> <a name="maxRetryCount" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxRetryCount"></a>

```java
public java.lang.Number getMaxRetryCount();
```

- *Type:* java.lang.Number

---

##### `s3BucketFolder`<sup>Required</sup> <a name="s3BucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolder"></a>

```java
public java.lang.String getS3BucketFolder();
```

- *Type:* java.lang.String

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsEndpointNeptuneSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a>

---


### DmsEndpointOracleSettingsOutputReference <a name="DmsEndpointOracleSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointOracleSettingsOutputReference;

new DmsEndpointOracleSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAccessAlternateDirectly">resetAccessAlternateDirectly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAdditionalArchivedLogDestId">resetAdditionalArchivedLogDestId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAddSupplementalLogging">resetAddSupplementalLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAllowSelectNestedTables">resetAllowSelectNestedTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetArchivedLogDestId">resetArchivedLogDestId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetArchivedLogsOnly">resetArchivedLogsOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmPassword">resetAsmPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmServer">resetAsmServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmUser">resetAsmUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetCharLengthSemantics">resetCharLengthSemantics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetDirectPathNoLog">resetDirectPathNoLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetDirectPathParallelLoad">resetDirectPathParallelLoad</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetEnableHomogenousTablespace">resetEnableHomogenousTablespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetExtraArchivedLogDestIds">resetExtraArchivedLogDestIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetFailTasksOnLobTruncation">resetFailTasksOnLobTruncation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetNumberDatatypeScale">resetNumberDatatypeScale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetOraclePathPrefix">resetOraclePathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetParallelAsmReadThreads">resetParallelAsmReadThreads</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReadAheadBlocks">resetReadAheadBlocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReadTableSpaceName">resetReadTableSpaceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReplacePathPrefix">resetReplacePathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetRetryInterval">resetRetryInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn">resetSecretsManagerOracleAsmAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId">resetSecretsManagerOracleAsmSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecurityDbEncryption">resetSecurityDbEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecurityDbEncryptionName">resetSecurityDbEncryptionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSpatialDataOptionToGeoJsonFunctionName">resetSpatialDataOptionToGeoJsonFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetStandbyDelayTime">resetStandbyDelayTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseAlternateFolderForOnline">resetUseAlternateFolderForOnline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseBFile">resetUseBFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseDirectPathFullLoad">resetUseDirectPathFullLoad</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseLogminerReader">resetUseLogminerReader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUsePathPrefix">resetUsePathPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessAlternateDirectly` <a name="resetAccessAlternateDirectly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAccessAlternateDirectly"></a>

```java
public void resetAccessAlternateDirectly()
```

##### `resetAdditionalArchivedLogDestId` <a name="resetAdditionalArchivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAdditionalArchivedLogDestId"></a>

```java
public void resetAdditionalArchivedLogDestId()
```

##### `resetAddSupplementalLogging` <a name="resetAddSupplementalLogging" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAddSupplementalLogging"></a>

```java
public void resetAddSupplementalLogging()
```

##### `resetAllowSelectNestedTables` <a name="resetAllowSelectNestedTables" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAllowSelectNestedTables"></a>

```java
public void resetAllowSelectNestedTables()
```

##### `resetArchivedLogDestId` <a name="resetArchivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetArchivedLogDestId"></a>

```java
public void resetArchivedLogDestId()
```

##### `resetArchivedLogsOnly` <a name="resetArchivedLogsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetArchivedLogsOnly"></a>

```java
public void resetArchivedLogsOnly()
```

##### `resetAsmPassword` <a name="resetAsmPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmPassword"></a>

```java
public void resetAsmPassword()
```

##### `resetAsmServer` <a name="resetAsmServer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmServer"></a>

```java
public void resetAsmServer()
```

##### `resetAsmUser` <a name="resetAsmUser" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmUser"></a>

```java
public void resetAsmUser()
```

##### `resetCharLengthSemantics` <a name="resetCharLengthSemantics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetCharLengthSemantics"></a>

```java
public void resetCharLengthSemantics()
```

##### `resetDirectPathNoLog` <a name="resetDirectPathNoLog" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetDirectPathNoLog"></a>

```java
public void resetDirectPathNoLog()
```

##### `resetDirectPathParallelLoad` <a name="resetDirectPathParallelLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetDirectPathParallelLoad"></a>

```java
public void resetDirectPathParallelLoad()
```

##### `resetEnableHomogenousTablespace` <a name="resetEnableHomogenousTablespace" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetEnableHomogenousTablespace"></a>

```java
public void resetEnableHomogenousTablespace()
```

##### `resetExtraArchivedLogDestIds` <a name="resetExtraArchivedLogDestIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetExtraArchivedLogDestIds"></a>

```java
public void resetExtraArchivedLogDestIds()
```

##### `resetFailTasksOnLobTruncation` <a name="resetFailTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetFailTasksOnLobTruncation"></a>

```java
public void resetFailTasksOnLobTruncation()
```

##### `resetNumberDatatypeScale` <a name="resetNumberDatatypeScale" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetNumberDatatypeScale"></a>

```java
public void resetNumberDatatypeScale()
```

##### `resetOraclePathPrefix` <a name="resetOraclePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetOraclePathPrefix"></a>

```java
public void resetOraclePathPrefix()
```

##### `resetParallelAsmReadThreads` <a name="resetParallelAsmReadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetParallelAsmReadThreads"></a>

```java
public void resetParallelAsmReadThreads()
```

##### `resetReadAheadBlocks` <a name="resetReadAheadBlocks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReadAheadBlocks"></a>

```java
public void resetReadAheadBlocks()
```

##### `resetReadTableSpaceName` <a name="resetReadTableSpaceName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReadTableSpaceName"></a>

```java
public void resetReadTableSpaceName()
```

##### `resetReplacePathPrefix` <a name="resetReplacePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReplacePathPrefix"></a>

```java
public void resetReplacePathPrefix()
```

##### `resetRetryInterval` <a name="resetRetryInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetRetryInterval"></a>

```java
public void resetRetryInterval()
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```java
public void resetSecretsManagerAccessRoleArn()
```

##### `resetSecretsManagerOracleAsmAccessRoleArn` <a name="resetSecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn"></a>

```java
public void resetSecretsManagerOracleAsmAccessRoleArn()
```

##### `resetSecretsManagerOracleAsmSecretId` <a name="resetSecretsManagerOracleAsmSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId"></a>

```java
public void resetSecretsManagerOracleAsmSecretId()
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerSecretId"></a>

```java
public void resetSecretsManagerSecretId()
```

##### `resetSecurityDbEncryption` <a name="resetSecurityDbEncryption" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecurityDbEncryption"></a>

```java
public void resetSecurityDbEncryption()
```

##### `resetSecurityDbEncryptionName` <a name="resetSecurityDbEncryptionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecurityDbEncryptionName"></a>

```java
public void resetSecurityDbEncryptionName()
```

##### `resetSpatialDataOptionToGeoJsonFunctionName` <a name="resetSpatialDataOptionToGeoJsonFunctionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSpatialDataOptionToGeoJsonFunctionName"></a>

```java
public void resetSpatialDataOptionToGeoJsonFunctionName()
```

##### `resetStandbyDelayTime` <a name="resetStandbyDelayTime" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetStandbyDelayTime"></a>

```java
public void resetStandbyDelayTime()
```

##### `resetUseAlternateFolderForOnline` <a name="resetUseAlternateFolderForOnline" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseAlternateFolderForOnline"></a>

```java
public void resetUseAlternateFolderForOnline()
```

##### `resetUseBFile` <a name="resetUseBFile" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseBFile"></a>

```java
public void resetUseBFile()
```

##### `resetUseDirectPathFullLoad` <a name="resetUseDirectPathFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseDirectPathFullLoad"></a>

```java
public void resetUseDirectPathFullLoad()
```

##### `resetUseLogminerReader` <a name="resetUseLogminerReader" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseLogminerReader"></a>

```java
public void resetUseLogminerReader()
```

##### `resetUsePathPrefix` <a name="resetUsePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUsePathPrefix"></a>

```java
public void resetUsePathPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectlyInput">accessAlternateDirectlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestIdInput">additionalArchivedLogDestIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLoggingInput">addSupplementalLoggingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTablesInput">allowSelectNestedTablesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestIdInput">archivedLogDestIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnlyInput">archivedLogsOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPasswordInput">asmPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServerInput">asmServerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUserInput">asmUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemanticsInput">charLengthSemanticsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLogInput">directPathNoLogInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoadInput">directPathParallelLoadInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespaceInput">enableHomogenousTablespaceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIdsInput">extraArchivedLogDestIdsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncationInput">failTasksOnLobTruncationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScaleInput">numberDatatypeScaleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefixInput">oraclePathPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreadsInput">parallelAsmReadThreadsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocksInput">readAheadBlocksInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceNameInput">readTableSpaceNameInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefixInput">replacePathPrefixInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryIntervalInput">retryIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput">secretsManagerOracleAsmAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput">secretsManagerOracleAsmSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionInput">securityDbEncryptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionNameInput">securityDbEncryptionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionNameInput">spatialDataOptionToGeoJsonFunctionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTimeInput">standbyDelayTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnlineInput">useAlternateFolderForOnlineInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBFileInput">useBFileInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoadInput">useDirectPathFullLoadInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReaderInput">useLogminerReaderInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefixInput">usePathPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectly">accessAlternateDirectly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestId">additionalArchivedLogDestId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLogging">addSupplementalLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTables">allowSelectNestedTables</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestId">archivedLogDestId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnly">archivedLogsOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPassword">asmPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServer">asmServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUser">asmUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemantics">charLengthSemantics</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLog">directPathNoLog</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoad">directPathParallelLoad</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespace">enableHomogenousTablespace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIds">extraArchivedLogDestIds</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncation">failTasksOnLobTruncation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScale">numberDatatypeScale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefix">oraclePathPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreads">parallelAsmReadThreads</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocks">readAheadBlocks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceName">readTableSpaceName</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefix">replacePathPrefix</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryInterval">retryInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn">secretsManagerOracleAsmAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId">secretsManagerOracleAsmSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryption">securityDbEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionName">securityDbEncryptionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionName">spatialDataOptionToGeoJsonFunctionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTime">standbyDelayTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnline">useAlternateFolderForOnline</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBFile">useBFile</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoad">useDirectPathFullLoad</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReader">useLogminerReader</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefix">usePathPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessAlternateDirectlyInput`<sup>Optional</sup> <a name="accessAlternateDirectlyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectlyInput"></a>

```java
public java.lang.Boolean|IResolvable getAccessAlternateDirectlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `additionalArchivedLogDestIdInput`<sup>Optional</sup> <a name="additionalArchivedLogDestIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestIdInput"></a>

```java
public java.lang.Number getAdditionalArchivedLogDestIdInput();
```

- *Type:* java.lang.Number

---

##### `addSupplementalLoggingInput`<sup>Optional</sup> <a name="addSupplementalLoggingInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLoggingInput"></a>

```java
public java.lang.Boolean|IResolvable getAddSupplementalLoggingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowSelectNestedTablesInput`<sup>Optional</sup> <a name="allowSelectNestedTablesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTablesInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowSelectNestedTablesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `archivedLogDestIdInput`<sup>Optional</sup> <a name="archivedLogDestIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestIdInput"></a>

```java
public java.lang.Number getArchivedLogDestIdInput();
```

- *Type:* java.lang.Number

---

##### `archivedLogsOnlyInput`<sup>Optional</sup> <a name="archivedLogsOnlyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getArchivedLogsOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `asmPasswordInput`<sup>Optional</sup> <a name="asmPasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPasswordInput"></a>

```java
public java.lang.String getAsmPasswordInput();
```

- *Type:* java.lang.String

---

##### `asmServerInput`<sup>Optional</sup> <a name="asmServerInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServerInput"></a>

```java
public java.lang.String getAsmServerInput();
```

- *Type:* java.lang.String

---

##### `asmUserInput`<sup>Optional</sup> <a name="asmUserInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUserInput"></a>

```java
public java.lang.String getAsmUserInput();
```

- *Type:* java.lang.String

---

##### `charLengthSemanticsInput`<sup>Optional</sup> <a name="charLengthSemanticsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemanticsInput"></a>

```java
public java.lang.String getCharLengthSemanticsInput();
```

- *Type:* java.lang.String

---

##### `directPathNoLogInput`<sup>Optional</sup> <a name="directPathNoLogInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLogInput"></a>

```java
public java.lang.Boolean|IResolvable getDirectPathNoLogInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `directPathParallelLoadInput`<sup>Optional</sup> <a name="directPathParallelLoadInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoadInput"></a>

```java
public java.lang.Boolean|IResolvable getDirectPathParallelLoadInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableHomogenousTablespaceInput`<sup>Optional</sup> <a name="enableHomogenousTablespaceInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespaceInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableHomogenousTablespaceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `extraArchivedLogDestIdsInput`<sup>Optional</sup> <a name="extraArchivedLogDestIdsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIdsInput"></a>

```java
public java.util.List<java.lang.Number> getExtraArchivedLogDestIdsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `failTasksOnLobTruncationInput`<sup>Optional</sup> <a name="failTasksOnLobTruncationInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncationInput"></a>

```java
public java.lang.Boolean|IResolvable getFailTasksOnLobTruncationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numberDatatypeScaleInput`<sup>Optional</sup> <a name="numberDatatypeScaleInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScaleInput"></a>

```java
public java.lang.Number getNumberDatatypeScaleInput();
```

- *Type:* java.lang.Number

---

##### `oraclePathPrefixInput`<sup>Optional</sup> <a name="oraclePathPrefixInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefixInput"></a>

```java
public java.lang.String getOraclePathPrefixInput();
```

- *Type:* java.lang.String

---

##### `parallelAsmReadThreadsInput`<sup>Optional</sup> <a name="parallelAsmReadThreadsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreadsInput"></a>

```java
public java.lang.Number getParallelAsmReadThreadsInput();
```

- *Type:* java.lang.Number

---

##### `readAheadBlocksInput`<sup>Optional</sup> <a name="readAheadBlocksInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocksInput"></a>

```java
public java.lang.Number getReadAheadBlocksInput();
```

- *Type:* java.lang.Number

---

##### `readTableSpaceNameInput`<sup>Optional</sup> <a name="readTableSpaceNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceNameInput"></a>

```java
public java.lang.Boolean|IResolvable getReadTableSpaceNameInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `replacePathPrefixInput`<sup>Optional</sup> <a name="replacePathPrefixInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefixInput"></a>

```java
public java.lang.Boolean|IResolvable getReplacePathPrefixInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retryIntervalInput`<sup>Optional</sup> <a name="retryIntervalInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryIntervalInput"></a>

```java
public java.lang.Number getRetryIntervalInput();
```

- *Type:* java.lang.Number

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerOracleAsmAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerOracleAsmAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput"></a>

```java
public java.lang.String getSecretsManagerOracleAsmAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerOracleAsmSecretIdInput`<sup>Optional</sup> <a name="secretsManagerOracleAsmSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput"></a>

```java
public java.lang.String getSecretsManagerOracleAsmSecretIdInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```java
public java.lang.String getSecretsManagerSecretIdInput();
```

- *Type:* java.lang.String

---

##### `securityDbEncryptionInput`<sup>Optional</sup> <a name="securityDbEncryptionInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionInput"></a>

```java
public java.lang.String getSecurityDbEncryptionInput();
```

- *Type:* java.lang.String

---

##### `securityDbEncryptionNameInput`<sup>Optional</sup> <a name="securityDbEncryptionNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionNameInput"></a>

```java
public java.lang.String getSecurityDbEncryptionNameInput();
```

- *Type:* java.lang.String

---

##### `spatialDataOptionToGeoJsonFunctionNameInput`<sup>Optional</sup> <a name="spatialDataOptionToGeoJsonFunctionNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionNameInput"></a>

```java
public java.lang.String getSpatialDataOptionToGeoJsonFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `standbyDelayTimeInput`<sup>Optional</sup> <a name="standbyDelayTimeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTimeInput"></a>

```java
public java.lang.Number getStandbyDelayTimeInput();
```

- *Type:* java.lang.Number

---

##### `useAlternateFolderForOnlineInput`<sup>Optional</sup> <a name="useAlternateFolderForOnlineInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnlineInput"></a>

```java
public java.lang.Boolean|IResolvable getUseAlternateFolderForOnlineInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useBFileInput`<sup>Optional</sup> <a name="useBFileInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBFileInput"></a>

```java
public java.lang.Boolean|IResolvable getUseBFileInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useDirectPathFullLoadInput`<sup>Optional</sup> <a name="useDirectPathFullLoadInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoadInput"></a>

```java
public java.lang.Boolean|IResolvable getUseDirectPathFullLoadInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useLogminerReaderInput`<sup>Optional</sup> <a name="useLogminerReaderInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReaderInput"></a>

```java
public java.lang.Boolean|IResolvable getUseLogminerReaderInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `usePathPrefixInput`<sup>Optional</sup> <a name="usePathPrefixInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefixInput"></a>

```java
public java.lang.String getUsePathPrefixInput();
```

- *Type:* java.lang.String

---

##### `accessAlternateDirectly`<sup>Required</sup> <a name="accessAlternateDirectly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectly"></a>

```java
public java.lang.Boolean|IResolvable getAccessAlternateDirectly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `additionalArchivedLogDestId`<sup>Required</sup> <a name="additionalArchivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestId"></a>

```java
public java.lang.Number getAdditionalArchivedLogDestId();
```

- *Type:* java.lang.Number

---

##### `addSupplementalLogging`<sup>Required</sup> <a name="addSupplementalLogging" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLogging"></a>

```java
public java.lang.Boolean|IResolvable getAddSupplementalLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowSelectNestedTables`<sup>Required</sup> <a name="allowSelectNestedTables" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTables"></a>

```java
public java.lang.Boolean|IResolvable getAllowSelectNestedTables();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `archivedLogDestId`<sup>Required</sup> <a name="archivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestId"></a>

```java
public java.lang.Number getArchivedLogDestId();
```

- *Type:* java.lang.Number

---

##### `archivedLogsOnly`<sup>Required</sup> <a name="archivedLogsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnly"></a>

```java
public java.lang.Boolean|IResolvable getArchivedLogsOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `asmPassword`<sup>Required</sup> <a name="asmPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPassword"></a>

```java
public java.lang.String getAsmPassword();
```

- *Type:* java.lang.String

---

##### `asmServer`<sup>Required</sup> <a name="asmServer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServer"></a>

```java
public java.lang.String getAsmServer();
```

- *Type:* java.lang.String

---

##### `asmUser`<sup>Required</sup> <a name="asmUser" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUser"></a>

```java
public java.lang.String getAsmUser();
```

- *Type:* java.lang.String

---

##### `charLengthSemantics`<sup>Required</sup> <a name="charLengthSemantics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemantics"></a>

```java
public java.lang.String getCharLengthSemantics();
```

- *Type:* java.lang.String

---

##### `directPathNoLog`<sup>Required</sup> <a name="directPathNoLog" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLog"></a>

```java
public java.lang.Boolean|IResolvable getDirectPathNoLog();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `directPathParallelLoad`<sup>Required</sup> <a name="directPathParallelLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoad"></a>

```java
public java.lang.Boolean|IResolvable getDirectPathParallelLoad();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableHomogenousTablespace`<sup>Required</sup> <a name="enableHomogenousTablespace" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespace"></a>

```java
public java.lang.Boolean|IResolvable getEnableHomogenousTablespace();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `extraArchivedLogDestIds`<sup>Required</sup> <a name="extraArchivedLogDestIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIds"></a>

```java
public java.util.List<java.lang.Number> getExtraArchivedLogDestIds();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `failTasksOnLobTruncation`<sup>Required</sup> <a name="failTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncation"></a>

```java
public java.lang.Boolean|IResolvable getFailTasksOnLobTruncation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numberDatatypeScale`<sup>Required</sup> <a name="numberDatatypeScale" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScale"></a>

```java
public java.lang.Number getNumberDatatypeScale();
```

- *Type:* java.lang.Number

---

##### `oraclePathPrefix`<sup>Required</sup> <a name="oraclePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefix"></a>

```java
public java.lang.String getOraclePathPrefix();
```

- *Type:* java.lang.String

---

##### `parallelAsmReadThreads`<sup>Required</sup> <a name="parallelAsmReadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreads"></a>

```java
public java.lang.Number getParallelAsmReadThreads();
```

- *Type:* java.lang.Number

---

##### `readAheadBlocks`<sup>Required</sup> <a name="readAheadBlocks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocks"></a>

```java
public java.lang.Number getReadAheadBlocks();
```

- *Type:* java.lang.Number

---

##### `readTableSpaceName`<sup>Required</sup> <a name="readTableSpaceName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceName"></a>

```java
public java.lang.Boolean|IResolvable getReadTableSpaceName();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `replacePathPrefix`<sup>Required</sup> <a name="replacePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefix"></a>

```java
public java.lang.Boolean|IResolvable getReplacePathPrefix();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retryInterval`<sup>Required</sup> <a name="retryInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryInterval"></a>

```java
public java.lang.Number getRetryInterval();
```

- *Type:* java.lang.Number

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerOracleAsmAccessRoleArn`<sup>Required</sup> <a name="secretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerOracleAsmAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerOracleAsmSecretId`<sup>Required</sup> <a name="secretsManagerOracleAsmSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId"></a>

```java
public java.lang.String getSecretsManagerOracleAsmSecretId();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `securityDbEncryption`<sup>Required</sup> <a name="securityDbEncryption" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryption"></a>

```java
public java.lang.String getSecurityDbEncryption();
```

- *Type:* java.lang.String

---

##### `securityDbEncryptionName`<sup>Required</sup> <a name="securityDbEncryptionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionName"></a>

```java
public java.lang.String getSecurityDbEncryptionName();
```

- *Type:* java.lang.String

---

##### `spatialDataOptionToGeoJsonFunctionName`<sup>Required</sup> <a name="spatialDataOptionToGeoJsonFunctionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionName"></a>

```java
public java.lang.String getSpatialDataOptionToGeoJsonFunctionName();
```

- *Type:* java.lang.String

---

##### `standbyDelayTime`<sup>Required</sup> <a name="standbyDelayTime" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTime"></a>

```java
public java.lang.Number getStandbyDelayTime();
```

- *Type:* java.lang.Number

---

##### `useAlternateFolderForOnline`<sup>Required</sup> <a name="useAlternateFolderForOnline" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnline"></a>

```java
public java.lang.Boolean|IResolvable getUseAlternateFolderForOnline();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useBFile`<sup>Required</sup> <a name="useBFile" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBFile"></a>

```java
public java.lang.Boolean|IResolvable getUseBFile();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useDirectPathFullLoad`<sup>Required</sup> <a name="useDirectPathFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoad"></a>

```java
public java.lang.Boolean|IResolvable getUseDirectPathFullLoad();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useLogminerReader`<sup>Required</sup> <a name="useLogminerReader" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReader"></a>

```java
public java.lang.Boolean|IResolvable getUseLogminerReader();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `usePathPrefix`<sup>Required</sup> <a name="usePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefix"></a>

```java
public java.lang.String getUsePathPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsEndpointOracleSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

---


### DmsEndpointPostgreSqlSettingsOutputReference <a name="DmsEndpointPostgreSqlSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointPostgreSqlSettingsOutputReference;

new DmsEndpointPostgreSqlSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetAfterConnectScript">resetAfterConnectScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetBabelfishDatabaseName">resetBabelfishDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetCaptureDdls">resetCaptureDdls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetDatabaseMode">resetDatabaseMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetDdlArtifactsSchema">resetDdlArtifactsSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetExecuteTimeout">resetExecuteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetFailTasksOnLobTruncation">resetFailTasksOnLobTruncation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetHeartbeatEnable">resetHeartbeatEnable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetHeartbeatFrequency">resetHeartbeatFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetHeartbeatSchema">resetHeartbeatSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetMapBooleanAsBoolean">resetMapBooleanAsBoolean</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetSlotName">resetSlotName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAfterConnectScript` <a name="resetAfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetAfterConnectScript"></a>

```java
public void resetAfterConnectScript()
```

##### `resetBabelfishDatabaseName` <a name="resetBabelfishDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetBabelfishDatabaseName"></a>

```java
public void resetBabelfishDatabaseName()
```

##### `resetCaptureDdls` <a name="resetCaptureDdls" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetCaptureDdls"></a>

```java
public void resetCaptureDdls()
```

##### `resetDatabaseMode` <a name="resetDatabaseMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetDatabaseMode"></a>

```java
public void resetDatabaseMode()
```

##### `resetDdlArtifactsSchema` <a name="resetDdlArtifactsSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetDdlArtifactsSchema"></a>

```java
public void resetDdlArtifactsSchema()
```

##### `resetExecuteTimeout` <a name="resetExecuteTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetExecuteTimeout"></a>

```java
public void resetExecuteTimeout()
```

##### `resetFailTasksOnLobTruncation` <a name="resetFailTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetFailTasksOnLobTruncation"></a>

```java
public void resetFailTasksOnLobTruncation()
```

##### `resetHeartbeatEnable` <a name="resetHeartbeatEnable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetHeartbeatEnable"></a>

```java
public void resetHeartbeatEnable()
```

##### `resetHeartbeatFrequency` <a name="resetHeartbeatFrequency" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetHeartbeatFrequency"></a>

```java
public void resetHeartbeatFrequency()
```

##### `resetHeartbeatSchema` <a name="resetHeartbeatSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetHeartbeatSchema"></a>

```java
public void resetHeartbeatSchema()
```

##### `resetMapBooleanAsBoolean` <a name="resetMapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetMapBooleanAsBoolean"></a>

```java
public void resetMapBooleanAsBoolean()
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetMaxFileSize"></a>

```java
public void resetMaxFileSize()
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetPluginName"></a>

```java
public void resetPluginName()
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```java
public void resetSecretsManagerAccessRoleArn()
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetSecretsManagerSecretId"></a>

```java
public void resetSecretsManagerSecretId()
```

##### `resetSlotName` <a name="resetSlotName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetSlotName"></a>

```java
public void resetSlotName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScriptInput">afterConnectScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseNameInput">babelfishDatabaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.captureDdlsInput">captureDdlsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.databaseModeInput">databaseModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchemaInput">ddlArtifactsSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeoutInput">executeTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncationInput">failTasksOnLobTruncationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnableInput">heartbeatEnableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequencyInput">heartbeatFrequencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchemaInput">heartbeatSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBooleanInput">mapBooleanAsBooleanInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.slotNameInput">slotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScript">afterConnectScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseName">babelfishDatabaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.captureDdls">captureDdls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.databaseMode">databaseMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchema">ddlArtifactsSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeout">executeTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncation">failTasksOnLobTruncation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnable">heartbeatEnable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequency">heartbeatFrequency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchema">heartbeatSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBoolean">mapBooleanAsBoolean</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.pluginName">pluginName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.slotName">slotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `afterConnectScriptInput`<sup>Optional</sup> <a name="afterConnectScriptInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScriptInput"></a>

```java
public java.lang.String getAfterConnectScriptInput();
```

- *Type:* java.lang.String

---

##### `babelfishDatabaseNameInput`<sup>Optional</sup> <a name="babelfishDatabaseNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseNameInput"></a>

```java
public java.lang.String getBabelfishDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `captureDdlsInput`<sup>Optional</sup> <a name="captureDdlsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.captureDdlsInput"></a>

```java
public java.lang.Boolean|IResolvable getCaptureDdlsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `databaseModeInput`<sup>Optional</sup> <a name="databaseModeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.databaseModeInput"></a>

```java
public java.lang.String getDatabaseModeInput();
```

- *Type:* java.lang.String

---

##### `ddlArtifactsSchemaInput`<sup>Optional</sup> <a name="ddlArtifactsSchemaInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchemaInput"></a>

```java
public java.lang.String getDdlArtifactsSchemaInput();
```

- *Type:* java.lang.String

---

##### `executeTimeoutInput`<sup>Optional</sup> <a name="executeTimeoutInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeoutInput"></a>

```java
public java.lang.Number getExecuteTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `failTasksOnLobTruncationInput`<sup>Optional</sup> <a name="failTasksOnLobTruncationInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncationInput"></a>

```java
public java.lang.Boolean|IResolvable getFailTasksOnLobTruncationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `heartbeatEnableInput`<sup>Optional</sup> <a name="heartbeatEnableInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnableInput"></a>

```java
public java.lang.Boolean|IResolvable getHeartbeatEnableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `heartbeatFrequencyInput`<sup>Optional</sup> <a name="heartbeatFrequencyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequencyInput"></a>

```java
public java.lang.Number getHeartbeatFrequencyInput();
```

- *Type:* java.lang.Number

---

##### `heartbeatSchemaInput`<sup>Optional</sup> <a name="heartbeatSchemaInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchemaInput"></a>

```java
public java.lang.String getHeartbeatSchemaInput();
```

- *Type:* java.lang.String

---

##### `mapBooleanAsBooleanInput`<sup>Optional</sup> <a name="mapBooleanAsBooleanInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBooleanInput"></a>

```java
public java.lang.Boolean|IResolvable getMapBooleanAsBooleanInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSizeInput"></a>

```java
public java.lang.Number getMaxFileSizeInput();
```

- *Type:* java.lang.Number

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.pluginNameInput"></a>

```java
public java.lang.String getPluginNameInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```java
public java.lang.String getSecretsManagerSecretIdInput();
```

- *Type:* java.lang.String

---

##### `slotNameInput`<sup>Optional</sup> <a name="slotNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.slotNameInput"></a>

```java
public java.lang.String getSlotNameInput();
```

- *Type:* java.lang.String

---

##### `afterConnectScript`<sup>Required</sup> <a name="afterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScript"></a>

```java
public java.lang.String getAfterConnectScript();
```

- *Type:* java.lang.String

---

##### `babelfishDatabaseName`<sup>Required</sup> <a name="babelfishDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseName"></a>

```java
public java.lang.String getBabelfishDatabaseName();
```

- *Type:* java.lang.String

---

##### `captureDdls`<sup>Required</sup> <a name="captureDdls" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.captureDdls"></a>

```java
public java.lang.Boolean|IResolvable getCaptureDdls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `databaseMode`<sup>Required</sup> <a name="databaseMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.databaseMode"></a>

```java
public java.lang.String getDatabaseMode();
```

- *Type:* java.lang.String

---

##### `ddlArtifactsSchema`<sup>Required</sup> <a name="ddlArtifactsSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchema"></a>

```java
public java.lang.String getDdlArtifactsSchema();
```

- *Type:* java.lang.String

---

##### `executeTimeout`<sup>Required</sup> <a name="executeTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeout"></a>

```java
public java.lang.Number getExecuteTimeout();
```

- *Type:* java.lang.Number

---

##### `failTasksOnLobTruncation`<sup>Required</sup> <a name="failTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncation"></a>

```java
public java.lang.Boolean|IResolvable getFailTasksOnLobTruncation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `heartbeatEnable`<sup>Required</sup> <a name="heartbeatEnable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnable"></a>

```java
public java.lang.Boolean|IResolvable getHeartbeatEnable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `heartbeatFrequency`<sup>Required</sup> <a name="heartbeatFrequency" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequency"></a>

```java
public java.lang.Number getHeartbeatFrequency();
```

- *Type:* java.lang.Number

---

##### `heartbeatSchema`<sup>Required</sup> <a name="heartbeatSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchema"></a>

```java
public java.lang.String getHeartbeatSchema();
```

- *Type:* java.lang.String

---

##### `mapBooleanAsBoolean`<sup>Required</sup> <a name="mapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBoolean"></a>

```java
public java.lang.Boolean|IResolvable getMapBooleanAsBoolean();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.pluginName"></a>

```java
public java.lang.String getPluginName();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `slotName`<sup>Required</sup> <a name="slotName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.slotName"></a>

```java
public java.lang.String getSlotName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsEndpointPostgreSqlSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a>

---


### DmsEndpointRedisSettingsOutputReference <a name="DmsEndpointRedisSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointRedisSettingsOutputReference;

new DmsEndpointRedisSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthPassword">resetAuthPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthUserName">resetAuthUserName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslCaCertificateArn">resetSslCaCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslSecurityProtocol">resetSslSecurityProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthPassword` <a name="resetAuthPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthPassword"></a>

```java
public void resetAuthPassword()
```

##### `resetAuthType` <a name="resetAuthType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthType"></a>

```java
public void resetAuthType()
```

##### `resetAuthUserName` <a name="resetAuthUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthUserName"></a>

```java
public void resetAuthUserName()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetServerName"></a>

```java
public void resetServerName()
```

##### `resetSslCaCertificateArn` <a name="resetSslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslCaCertificateArn"></a>

```java
public void resetSslCaCertificateArn()
```

##### `resetSslSecurityProtocol` <a name="resetSslSecurityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslSecurityProtocol"></a>

```java
public void resetSslSecurityProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPasswordInput">authPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserNameInput">authUserNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArnInput">sslCaCertificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocolInput">sslSecurityProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPassword">authPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserName">authUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol">sslSecurityProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authPasswordInput`<sup>Optional</sup> <a name="authPasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPasswordInput"></a>

```java
public java.lang.String getAuthPasswordInput();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `authUserNameInput`<sup>Optional</sup> <a name="authUserNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserNameInput"></a>

```java
public java.lang.String getAuthUserNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `sslCaCertificateArnInput`<sup>Optional</sup> <a name="sslCaCertificateArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArnInput"></a>

```java
public java.lang.String getSslCaCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `sslSecurityProtocolInput`<sup>Optional</sup> <a name="sslSecurityProtocolInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocolInput"></a>

```java
public java.lang.String getSslSecurityProtocolInput();
```

- *Type:* java.lang.String

---

##### `authPassword`<sup>Required</sup> <a name="authPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPassword"></a>

```java
public java.lang.String getAuthPassword();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `authUserName`<sup>Required</sup> <a name="authUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserName"></a>

```java
public java.lang.String getAuthUserName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `sslCaCertificateArn`<sup>Required</sup> <a name="sslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn"></a>

```java
public java.lang.String getSslCaCertificateArn();
```

- *Type:* java.lang.String

---

##### `sslSecurityProtocol`<sup>Required</sup> <a name="sslSecurityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol"></a>

```java
public java.lang.String getSslSecurityProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsEndpointRedisSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---


### DmsEndpointRedshiftSettingsOutputReference <a name="DmsEndpointRedshiftSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointRedshiftSettingsOutputReference;

new DmsEndpointRedshiftSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetAcceptAnyDate">resetAcceptAnyDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetAfterConnectScript">resetAfterConnectScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketFolder">resetBucketFolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetCaseSensitiveNames">resetCaseSensitiveNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetCompUpdate">resetCompUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetConnectionTimeout">resetConnectionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetDateFormat">resetDateFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEmptyAsNull">resetEmptyAsNull</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEncryptionMode">resetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetExplicitIds">resetExplicitIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetFileTransferUploadStreams">resetFileTransferUploadStreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetLoadTimeout">resetLoadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetMapBooleanAsBoolean">resetMapBooleanAsBoolean</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetRemoveQuotes">resetRemoveQuotes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetReplaceChars">resetReplaceChars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetReplaceInvalidChars">resetReplaceInvalidChars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServerSideEncryptionKmsKeyId">resetServerSideEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetTimeFormat">resetTimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetTrimBlanks">resetTrimBlanks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetTruncateColumns">resetTruncateColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetWriteBufferSize">resetWriteBufferSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceptAnyDate` <a name="resetAcceptAnyDate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetAcceptAnyDate"></a>

```java
public void resetAcceptAnyDate()
```

##### `resetAfterConnectScript` <a name="resetAfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetAfterConnectScript"></a>

```java
public void resetAfterConnectScript()
```

##### `resetBucketFolder` <a name="resetBucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketFolder"></a>

```java
public void resetBucketFolder()
```

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetCaseSensitiveNames` <a name="resetCaseSensitiveNames" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetCaseSensitiveNames"></a>

```java
public void resetCaseSensitiveNames()
```

##### `resetCompUpdate` <a name="resetCompUpdate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetCompUpdate"></a>

```java
public void resetCompUpdate()
```

##### `resetConnectionTimeout` <a name="resetConnectionTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetConnectionTimeout"></a>

```java
public void resetConnectionTimeout()
```

##### `resetDateFormat` <a name="resetDateFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetDateFormat"></a>

```java
public void resetDateFormat()
```

##### `resetEmptyAsNull` <a name="resetEmptyAsNull" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEmptyAsNull"></a>

```java
public void resetEmptyAsNull()
```

##### `resetEncryptionMode` <a name="resetEncryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEncryptionMode"></a>

```java
public void resetEncryptionMode()
```

##### `resetExplicitIds` <a name="resetExplicitIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetExplicitIds"></a>

```java
public void resetExplicitIds()
```

##### `resetFileTransferUploadStreams` <a name="resetFileTransferUploadStreams" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetFileTransferUploadStreams"></a>

```java
public void resetFileTransferUploadStreams()
```

##### `resetLoadTimeout` <a name="resetLoadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetLoadTimeout"></a>

```java
public void resetLoadTimeout()
```

##### `resetMapBooleanAsBoolean` <a name="resetMapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetMapBooleanAsBoolean"></a>

```java
public void resetMapBooleanAsBoolean()
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetMaxFileSize"></a>

```java
public void resetMaxFileSize()
```

##### `resetRemoveQuotes` <a name="resetRemoveQuotes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetRemoveQuotes"></a>

```java
public void resetRemoveQuotes()
```

##### `resetReplaceChars` <a name="resetReplaceChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetReplaceChars"></a>

```java
public void resetReplaceChars()
```

##### `resetReplaceInvalidChars` <a name="resetReplaceInvalidChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetReplaceInvalidChars"></a>

```java
public void resetReplaceInvalidChars()
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```java
public void resetSecretsManagerAccessRoleArn()
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetSecretsManagerSecretId"></a>

```java
public void resetSecretsManagerSecretId()
```

##### `resetServerSideEncryptionKmsKeyId` <a name="resetServerSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServerSideEncryptionKmsKeyId"></a>

```java
public void resetServerSideEncryptionKmsKeyId()
```

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServiceAccessRoleArn"></a>

```java
public void resetServiceAccessRoleArn()
```

##### `resetTimeFormat` <a name="resetTimeFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetTimeFormat"></a>

```java
public void resetTimeFormat()
```

##### `resetTrimBlanks` <a name="resetTrimBlanks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetTrimBlanks"></a>

```java
public void resetTrimBlanks()
```

##### `resetTruncateColumns` <a name="resetTruncateColumns" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetTruncateColumns"></a>

```java
public void resetTruncateColumns()
```

##### `resetWriteBufferSize` <a name="resetWriteBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetWriteBufferSize"></a>

```java
public void resetWriteBufferSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDateInput">acceptAnyDateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.afterConnectScriptInput">afterConnectScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolderInput">bucketFolderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNamesInput">caseSensitiveNamesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.compUpdateInput">compUpdateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.connectionTimeoutInput">connectionTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.dateFormatInput">dateFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.emptyAsNullInput">emptyAsNullInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionModeInput">encryptionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.explicitIdsInput">explicitIdsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreamsInput">fileTransferUploadStreamsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.loadTimeoutInput">loadTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBooleanInput">mapBooleanAsBooleanInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.removeQuotesInput">removeQuotesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceCharsInput">replaceCharsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidCharsInput">replaceInvalidCharsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput">serverSideEncryptionKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.timeFormatInput">timeFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.trimBlanksInput">trimBlanksInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.truncateColumnsInput">truncateColumnsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.writeBufferSizeInput">writeBufferSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDate">acceptAnyDate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.afterConnectScript">afterConnectScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolder">bucketFolder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNames">caseSensitiveNames</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.compUpdate">compUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.connectionTimeout">connectionTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.dateFormat">dateFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.emptyAsNull">emptyAsNull</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionMode">encryptionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.explicitIds">explicitIds</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreams">fileTransferUploadStreams</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.loadTimeout">loadTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBoolean">mapBooleanAsBoolean</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.removeQuotes">removeQuotes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceChars">replaceChars</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidChars">replaceInvalidChars</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.timeFormat">timeFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.trimBlanks">trimBlanks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.truncateColumns">truncateColumns</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.writeBufferSize">writeBufferSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceptAnyDateInput`<sup>Optional</sup> <a name="acceptAnyDateInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDateInput"></a>

```java
public java.lang.Boolean|IResolvable getAcceptAnyDateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `afterConnectScriptInput`<sup>Optional</sup> <a name="afterConnectScriptInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.afterConnectScriptInput"></a>

```java
public java.lang.String getAfterConnectScriptInput();
```

- *Type:* java.lang.String

---

##### `bucketFolderInput`<sup>Optional</sup> <a name="bucketFolderInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolderInput"></a>

```java
public java.lang.String getBucketFolderInput();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `caseSensitiveNamesInput`<sup>Optional</sup> <a name="caseSensitiveNamesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNamesInput"></a>

```java
public java.lang.Boolean|IResolvable getCaseSensitiveNamesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `compUpdateInput`<sup>Optional</sup> <a name="compUpdateInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.compUpdateInput"></a>

```java
public java.lang.Boolean|IResolvable getCompUpdateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `connectionTimeoutInput`<sup>Optional</sup> <a name="connectionTimeoutInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.connectionTimeoutInput"></a>

```java
public java.lang.Number getConnectionTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `dateFormatInput`<sup>Optional</sup> <a name="dateFormatInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.dateFormatInput"></a>

```java
public java.lang.String getDateFormatInput();
```

- *Type:* java.lang.String

---

##### `emptyAsNullInput`<sup>Optional</sup> <a name="emptyAsNullInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.emptyAsNullInput"></a>

```java
public java.lang.Boolean|IResolvable getEmptyAsNullInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encryptionModeInput`<sup>Optional</sup> <a name="encryptionModeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionModeInput"></a>

```java
public java.lang.String getEncryptionModeInput();
```

- *Type:* java.lang.String

---

##### `explicitIdsInput`<sup>Optional</sup> <a name="explicitIdsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.explicitIdsInput"></a>

```java
public java.lang.Boolean|IResolvable getExplicitIdsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fileTransferUploadStreamsInput`<sup>Optional</sup> <a name="fileTransferUploadStreamsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreamsInput"></a>

```java
public java.lang.Number getFileTransferUploadStreamsInput();
```

- *Type:* java.lang.Number

---

##### `loadTimeoutInput`<sup>Optional</sup> <a name="loadTimeoutInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.loadTimeoutInput"></a>

```java
public java.lang.Number getLoadTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `mapBooleanAsBooleanInput`<sup>Optional</sup> <a name="mapBooleanAsBooleanInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBooleanInput"></a>

```java
public java.lang.Boolean|IResolvable getMapBooleanAsBooleanInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.maxFileSizeInput"></a>

```java
public java.lang.Number getMaxFileSizeInput();
```

- *Type:* java.lang.Number

---

##### `removeQuotesInput`<sup>Optional</sup> <a name="removeQuotesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.removeQuotesInput"></a>

```java
public java.lang.Boolean|IResolvable getRemoveQuotesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `replaceCharsInput`<sup>Optional</sup> <a name="replaceCharsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceCharsInput"></a>

```java
public java.lang.String getReplaceCharsInput();
```

- *Type:* java.lang.String

---

##### `replaceInvalidCharsInput`<sup>Optional</sup> <a name="replaceInvalidCharsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidCharsInput"></a>

```java
public java.lang.String getReplaceInvalidCharsInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```java
public java.lang.String getSecretsManagerSecretIdInput();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput"></a>

```java
public java.lang.String getServerSideEncryptionKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```java
public java.lang.String getServiceAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `timeFormatInput`<sup>Optional</sup> <a name="timeFormatInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.timeFormatInput"></a>

```java
public java.lang.String getTimeFormatInput();
```

- *Type:* java.lang.String

---

##### `trimBlanksInput`<sup>Optional</sup> <a name="trimBlanksInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.trimBlanksInput"></a>

```java
public java.lang.Boolean|IResolvable getTrimBlanksInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `truncateColumnsInput`<sup>Optional</sup> <a name="truncateColumnsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.truncateColumnsInput"></a>

```java
public java.lang.Boolean|IResolvable getTruncateColumnsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `writeBufferSizeInput`<sup>Optional</sup> <a name="writeBufferSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.writeBufferSizeInput"></a>

```java
public java.lang.Number getWriteBufferSizeInput();
```

- *Type:* java.lang.Number

---

##### `acceptAnyDate`<sup>Required</sup> <a name="acceptAnyDate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDate"></a>

```java
public java.lang.Boolean|IResolvable getAcceptAnyDate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `afterConnectScript`<sup>Required</sup> <a name="afterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.afterConnectScript"></a>

```java
public java.lang.String getAfterConnectScript();
```

- *Type:* java.lang.String

---

##### `bucketFolder`<sup>Required</sup> <a name="bucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolder"></a>

```java
public java.lang.String getBucketFolder();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `caseSensitiveNames`<sup>Required</sup> <a name="caseSensitiveNames" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNames"></a>

```java
public java.lang.Boolean|IResolvable getCaseSensitiveNames();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `compUpdate`<sup>Required</sup> <a name="compUpdate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.compUpdate"></a>

```java
public java.lang.Boolean|IResolvable getCompUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `connectionTimeout`<sup>Required</sup> <a name="connectionTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.connectionTimeout"></a>

```java
public java.lang.Number getConnectionTimeout();
```

- *Type:* java.lang.Number

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.dateFormat"></a>

```java
public java.lang.String getDateFormat();
```

- *Type:* java.lang.String

---

##### `emptyAsNull`<sup>Required</sup> <a name="emptyAsNull" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.emptyAsNull"></a>

```java
public java.lang.Boolean|IResolvable getEmptyAsNull();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encryptionMode`<sup>Required</sup> <a name="encryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionMode"></a>

```java
public java.lang.String getEncryptionMode();
```

- *Type:* java.lang.String

---

##### `explicitIds`<sup>Required</sup> <a name="explicitIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.explicitIds"></a>

```java
public java.lang.Boolean|IResolvable getExplicitIds();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fileTransferUploadStreams`<sup>Required</sup> <a name="fileTransferUploadStreams" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreams"></a>

```java
public java.lang.Number getFileTransferUploadStreams();
```

- *Type:* java.lang.Number

---

##### `loadTimeout`<sup>Required</sup> <a name="loadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.loadTimeout"></a>

```java
public java.lang.Number getLoadTimeout();
```

- *Type:* java.lang.Number

---

##### `mapBooleanAsBoolean`<sup>Required</sup> <a name="mapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBoolean"></a>

```java
public java.lang.Boolean|IResolvable getMapBooleanAsBoolean();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

---

##### `removeQuotes`<sup>Required</sup> <a name="removeQuotes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.removeQuotes"></a>

```java
public java.lang.Boolean|IResolvable getRemoveQuotes();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `replaceChars`<sup>Required</sup> <a name="replaceChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceChars"></a>

```java
public java.lang.String getReplaceChars();
```

- *Type:* java.lang.String

---

##### `replaceInvalidChars`<sup>Required</sup> <a name="replaceInvalidChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidChars"></a>

```java
public java.lang.String getReplaceInvalidChars();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionKmsKeyId`<sup>Required</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```java
public java.lang.String getServerSideEncryptionKmsKeyId();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.timeFormat"></a>

```java
public java.lang.String getTimeFormat();
```

- *Type:* java.lang.String

---

##### `trimBlanks`<sup>Required</sup> <a name="trimBlanks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.trimBlanks"></a>

```java
public java.lang.Boolean|IResolvable getTrimBlanks();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `truncateColumns`<sup>Required</sup> <a name="truncateColumns" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.truncateColumns"></a>

```java
public java.lang.Boolean|IResolvable getTruncateColumns();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `writeBufferSize`<sup>Required</sup> <a name="writeBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.writeBufferSize"></a>

```java
public java.lang.Number getWriteBufferSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsEndpointRedshiftSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---


### DmsEndpointS3SettingsOutputReference <a name="DmsEndpointS3SettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointS3SettingsOutputReference;

new DmsEndpointS3SettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetAddColumnName">resetAddColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetAddTrailingPaddingCharacter">resetAddTrailingPaddingCharacter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketFolder">resetBucketFolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCannedAclForObjects">resetCannedAclForObjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsAndUpdates">resetCdcInsertsAndUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsOnly">resetCdcInsertsOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMaxBatchInterval">resetCdcMaxBatchInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMinFileSize">resetCdcMinFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcPath">resetCdcPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCompressionType">resetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvDelimiter">resetCsvDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNoSupValue">resetCsvNoSupValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNullValue">resetCsvNullValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvRowDelimiter">resetCsvRowDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataFormat">resetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataPageSize">resetDataPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionDelimiter">resetDatePartitionDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionEnabled">resetDatePartitionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionSequence">resetDatePartitionSequence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionTimezone">resetDatePartitionTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDictPageSizeLimit">resetDictPageSizeLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEnableStatistics">resetEnableStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncodingType">resetEncodingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncryptionMode">resetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetExternalTableDefinition">resetExternalTableDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetGlueCatalogGeneration">resetGlueCatalogGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIgnoreHeaderRows">resetIgnoreHeaderRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIncludeOpForFullLoad">resetIncludeOpForFullLoad</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetTimestampInMillisecond">resetParquetTimestampInMillisecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetVersion">resetParquetVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetPreserveTransactions">resetPreserveTransactions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRfc4180">resetRfc4180</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRowGroupLength">resetRowGroupLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServerSideEncryptionKmsKeyId">resetServerSideEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetTimestampColumnName">resetTimestampColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseCsvNoSupValue">resetUseCsvNoSupValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseTaskStartTimeForFullLoadTimestamp">resetUseTaskStartTimeForFullLoadTimestamp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddColumnName` <a name="resetAddColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetAddColumnName"></a>

```java
public void resetAddColumnName()
```

##### `resetAddTrailingPaddingCharacter` <a name="resetAddTrailingPaddingCharacter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetAddTrailingPaddingCharacter"></a>

```java
public void resetAddTrailingPaddingCharacter()
```

##### `resetBucketFolder` <a name="resetBucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketFolder"></a>

```java
public void resetBucketFolder()
```

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetCannedAclForObjects` <a name="resetCannedAclForObjects" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCannedAclForObjects"></a>

```java
public void resetCannedAclForObjects()
```

##### `resetCdcInsertsAndUpdates` <a name="resetCdcInsertsAndUpdates" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsAndUpdates"></a>

```java
public void resetCdcInsertsAndUpdates()
```

##### `resetCdcInsertsOnly` <a name="resetCdcInsertsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsOnly"></a>

```java
public void resetCdcInsertsOnly()
```

##### `resetCdcMaxBatchInterval` <a name="resetCdcMaxBatchInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMaxBatchInterval"></a>

```java
public void resetCdcMaxBatchInterval()
```

##### `resetCdcMinFileSize` <a name="resetCdcMinFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMinFileSize"></a>

```java
public void resetCdcMinFileSize()
```

##### `resetCdcPath` <a name="resetCdcPath" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcPath"></a>

```java
public void resetCdcPath()
```

##### `resetCompressionType` <a name="resetCompressionType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCompressionType"></a>

```java
public void resetCompressionType()
```

##### `resetCsvDelimiter` <a name="resetCsvDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvDelimiter"></a>

```java
public void resetCsvDelimiter()
```

##### `resetCsvNoSupValue` <a name="resetCsvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNoSupValue"></a>

```java
public void resetCsvNoSupValue()
```

##### `resetCsvNullValue` <a name="resetCsvNullValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNullValue"></a>

```java
public void resetCsvNullValue()
```

##### `resetCsvRowDelimiter` <a name="resetCsvRowDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvRowDelimiter"></a>

```java
public void resetCsvRowDelimiter()
```

##### `resetDataFormat` <a name="resetDataFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataFormat"></a>

```java
public void resetDataFormat()
```

##### `resetDataPageSize` <a name="resetDataPageSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataPageSize"></a>

```java
public void resetDataPageSize()
```

##### `resetDatePartitionDelimiter` <a name="resetDatePartitionDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionDelimiter"></a>

```java
public void resetDatePartitionDelimiter()
```

##### `resetDatePartitionEnabled` <a name="resetDatePartitionEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionEnabled"></a>

```java
public void resetDatePartitionEnabled()
```

##### `resetDatePartitionSequence` <a name="resetDatePartitionSequence" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionSequence"></a>

```java
public void resetDatePartitionSequence()
```

##### `resetDatePartitionTimezone` <a name="resetDatePartitionTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionTimezone"></a>

```java
public void resetDatePartitionTimezone()
```

##### `resetDictPageSizeLimit` <a name="resetDictPageSizeLimit" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDictPageSizeLimit"></a>

```java
public void resetDictPageSizeLimit()
```

##### `resetEnableStatistics` <a name="resetEnableStatistics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEnableStatistics"></a>

```java
public void resetEnableStatistics()
```

##### `resetEncodingType` <a name="resetEncodingType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncodingType"></a>

```java
public void resetEncodingType()
```

##### `resetEncryptionMode` <a name="resetEncryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncryptionMode"></a>

```java
public void resetEncryptionMode()
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetExpectedBucketOwner"></a>

```java
public void resetExpectedBucketOwner()
```

##### `resetExternalTableDefinition` <a name="resetExternalTableDefinition" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetExternalTableDefinition"></a>

```java
public void resetExternalTableDefinition()
```

##### `resetGlueCatalogGeneration` <a name="resetGlueCatalogGeneration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetGlueCatalogGeneration"></a>

```java
public void resetGlueCatalogGeneration()
```

##### `resetIgnoreHeaderRows` <a name="resetIgnoreHeaderRows" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIgnoreHeaderRows"></a>

```java
public void resetIgnoreHeaderRows()
```

##### `resetIncludeOpForFullLoad` <a name="resetIncludeOpForFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIncludeOpForFullLoad"></a>

```java
public void resetIncludeOpForFullLoad()
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetMaxFileSize"></a>

```java
public void resetMaxFileSize()
```

##### `resetParquetTimestampInMillisecond` <a name="resetParquetTimestampInMillisecond" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetTimestampInMillisecond"></a>

```java
public void resetParquetTimestampInMillisecond()
```

##### `resetParquetVersion` <a name="resetParquetVersion" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetVersion"></a>

```java
public void resetParquetVersion()
```

##### `resetPreserveTransactions` <a name="resetPreserveTransactions" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetPreserveTransactions"></a>

```java
public void resetPreserveTransactions()
```

##### `resetRfc4180` <a name="resetRfc4180" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRfc4180"></a>

```java
public void resetRfc4180()
```

##### `resetRowGroupLength` <a name="resetRowGroupLength" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRowGroupLength"></a>

```java
public void resetRowGroupLength()
```

##### `resetServerSideEncryptionKmsKeyId` <a name="resetServerSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServerSideEncryptionKmsKeyId"></a>

```java
public void resetServerSideEncryptionKmsKeyId()
```

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServiceAccessRoleArn"></a>

```java
public void resetServiceAccessRoleArn()
```

##### `resetTimestampColumnName` <a name="resetTimestampColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetTimestampColumnName"></a>

```java
public void resetTimestampColumnName()
```

##### `resetUseCsvNoSupValue` <a name="resetUseCsvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseCsvNoSupValue"></a>

```java
public void resetUseCsvNoSupValue()
```

##### `resetUseTaskStartTimeForFullLoadTimestamp` <a name="resetUseTaskStartTimeForFullLoadTimestamp" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseTaskStartTimeForFullLoadTimestamp"></a>

```java
public void resetUseTaskStartTimeForFullLoadTimestamp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnNameInput">addColumnNameInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacterInput">addTrailingPaddingCharacterInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolderInput">bucketFolderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjectsInput">cannedAclForObjectsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdatesInput">cdcInsertsAndUpdatesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnlyInput">cdcInsertsOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchIntervalInput">cdcMaxBatchIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSizeInput">cdcMinFileSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPathInput">cdcPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionTypeInput">compressionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiterInput">csvDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValueInput">csvNoSupValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValueInput">csvNullValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiterInput">csvRowDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormatInput">dataFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSizeInput">dataPageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiterInput">datePartitionDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabledInput">datePartitionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequenceInput">datePartitionSequenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionTimezoneInput">datePartitionTimezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimitInput">dictPageSizeLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatisticsInput">enableStatisticsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingTypeInput">encodingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionModeInput">encryptionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinitionInput">externalTableDefinitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.glueCatalogGenerationInput">glueCatalogGenerationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRowsInput">ignoreHeaderRowsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoadInput">includeOpForFullLoadInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecondInput">parquetTimestampInMillisecondInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersionInput">parquetVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactionsInput">preserveTransactionsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180Input">rfc4180Input</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLengthInput">rowGroupLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput">serverSideEncryptionKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnNameInput">timestampColumnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValueInput">useCsvNoSupValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestampInput">useTaskStartTimeForFullLoadTimestampInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnName">addColumnName</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacter">addTrailingPaddingCharacter</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolder">bucketFolder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjects">cannedAclForObjects</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates">cdcInsertsAndUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly">cdcInsertsOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval">cdcMaxBatchInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSize">cdcMinFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPath">cdcPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionType">compressionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiter">csvDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValue">csvNoSupValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValue">csvNullValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiter">csvRowDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormat">dataFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSize">dataPageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter">datePartitionDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabled">datePartitionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequence">datePartitionSequence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionTimezone">datePartitionTimezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit">dictPageSizeLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatistics">enableStatistics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingType">encodingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionMode">encryptionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinition">externalTableDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.glueCatalogGeneration">glueCatalogGeneration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows">ignoreHeaderRows</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad">includeOpForFullLoad</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond">parquetTimestampInMillisecond</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersion">parquetVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactions">preserveTransactions</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180">rfc4180</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLength">rowGroupLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnName">timestampColumnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue">useCsvNoSupValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp">useTaskStartTimeForFullLoadTimestamp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addColumnNameInput`<sup>Optional</sup> <a name="addColumnNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnNameInput"></a>

```java
public java.lang.Boolean|IResolvable getAddColumnNameInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `addTrailingPaddingCharacterInput`<sup>Optional</sup> <a name="addTrailingPaddingCharacterInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacterInput"></a>

```java
public java.lang.Boolean|IResolvable getAddTrailingPaddingCharacterInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bucketFolderInput`<sup>Optional</sup> <a name="bucketFolderInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolderInput"></a>

```java
public java.lang.String getBucketFolderInput();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `cannedAclForObjectsInput`<sup>Optional</sup> <a name="cannedAclForObjectsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjectsInput"></a>

```java
public java.lang.String getCannedAclForObjectsInput();
```

- *Type:* java.lang.String

---

##### `cdcInsertsAndUpdatesInput`<sup>Optional</sup> <a name="cdcInsertsAndUpdatesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdatesInput"></a>

```java
public java.lang.Boolean|IResolvable getCdcInsertsAndUpdatesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cdcInsertsOnlyInput`<sup>Optional</sup> <a name="cdcInsertsOnlyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getCdcInsertsOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cdcMaxBatchIntervalInput`<sup>Optional</sup> <a name="cdcMaxBatchIntervalInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchIntervalInput"></a>

```java
public java.lang.Number getCdcMaxBatchIntervalInput();
```

- *Type:* java.lang.Number

---

##### `cdcMinFileSizeInput`<sup>Optional</sup> <a name="cdcMinFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSizeInput"></a>

```java
public java.lang.Number getCdcMinFileSizeInput();
```

- *Type:* java.lang.Number

---

##### `cdcPathInput`<sup>Optional</sup> <a name="cdcPathInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPathInput"></a>

```java
public java.lang.String getCdcPathInput();
```

- *Type:* java.lang.String

---

##### `compressionTypeInput`<sup>Optional</sup> <a name="compressionTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionTypeInput"></a>

```java
public java.lang.String getCompressionTypeInput();
```

- *Type:* java.lang.String

---

##### `csvDelimiterInput`<sup>Optional</sup> <a name="csvDelimiterInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiterInput"></a>

```java
public java.lang.String getCsvDelimiterInput();
```

- *Type:* java.lang.String

---

##### `csvNoSupValueInput`<sup>Optional</sup> <a name="csvNoSupValueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValueInput"></a>

```java
public java.lang.String getCsvNoSupValueInput();
```

- *Type:* java.lang.String

---

##### `csvNullValueInput`<sup>Optional</sup> <a name="csvNullValueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValueInput"></a>

```java
public java.lang.String getCsvNullValueInput();
```

- *Type:* java.lang.String

---

##### `csvRowDelimiterInput`<sup>Optional</sup> <a name="csvRowDelimiterInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiterInput"></a>

```java
public java.lang.String getCsvRowDelimiterInput();
```

- *Type:* java.lang.String

---

##### `dataFormatInput`<sup>Optional</sup> <a name="dataFormatInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormatInput"></a>

```java
public java.lang.String getDataFormatInput();
```

- *Type:* java.lang.String

---

##### `dataPageSizeInput`<sup>Optional</sup> <a name="dataPageSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSizeInput"></a>

```java
public java.lang.Number getDataPageSizeInput();
```

- *Type:* java.lang.Number

---

##### `datePartitionDelimiterInput`<sup>Optional</sup> <a name="datePartitionDelimiterInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiterInput"></a>

```java
public java.lang.String getDatePartitionDelimiterInput();
```

- *Type:* java.lang.String

---

##### `datePartitionEnabledInput`<sup>Optional</sup> <a name="datePartitionEnabledInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDatePartitionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `datePartitionSequenceInput`<sup>Optional</sup> <a name="datePartitionSequenceInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequenceInput"></a>

```java
public java.lang.String getDatePartitionSequenceInput();
```

- *Type:* java.lang.String

---

##### `datePartitionTimezoneInput`<sup>Optional</sup> <a name="datePartitionTimezoneInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionTimezoneInput"></a>

```java
public java.lang.String getDatePartitionTimezoneInput();
```

- *Type:* java.lang.String

---

##### `dictPageSizeLimitInput`<sup>Optional</sup> <a name="dictPageSizeLimitInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimitInput"></a>

```java
public java.lang.Number getDictPageSizeLimitInput();
```

- *Type:* java.lang.Number

---

##### `enableStatisticsInput`<sup>Optional</sup> <a name="enableStatisticsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatisticsInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableStatisticsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encodingTypeInput`<sup>Optional</sup> <a name="encodingTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingTypeInput"></a>

```java
public java.lang.String getEncodingTypeInput();
```

- *Type:* java.lang.String

---

##### `encryptionModeInput`<sup>Optional</sup> <a name="encryptionModeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionModeInput"></a>

```java
public java.lang.String getEncryptionModeInput();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.expectedBucketOwnerInput"></a>

```java
public java.lang.String getExpectedBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `externalTableDefinitionInput`<sup>Optional</sup> <a name="externalTableDefinitionInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinitionInput"></a>

```java
public java.lang.String getExternalTableDefinitionInput();
```

- *Type:* java.lang.String

---

##### `glueCatalogGenerationInput`<sup>Optional</sup> <a name="glueCatalogGenerationInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.glueCatalogGenerationInput"></a>

```java
public java.lang.Boolean|IResolvable getGlueCatalogGenerationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ignoreHeaderRowsInput`<sup>Optional</sup> <a name="ignoreHeaderRowsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRowsInput"></a>

```java
public java.lang.Number getIgnoreHeaderRowsInput();
```

- *Type:* java.lang.Number

---

##### `includeOpForFullLoadInput`<sup>Optional</sup> <a name="includeOpForFullLoadInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoadInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeOpForFullLoadInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSizeInput"></a>

```java
public java.lang.Number getMaxFileSizeInput();
```

- *Type:* java.lang.Number

---

##### `parquetTimestampInMillisecondInput`<sup>Optional</sup> <a name="parquetTimestampInMillisecondInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecondInput"></a>

```java
public java.lang.Boolean|IResolvable getParquetTimestampInMillisecondInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `parquetVersionInput`<sup>Optional</sup> <a name="parquetVersionInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersionInput"></a>

```java
public java.lang.String getParquetVersionInput();
```

- *Type:* java.lang.String

---

##### `preserveTransactionsInput`<sup>Optional</sup> <a name="preserveTransactionsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactionsInput"></a>

```java
public java.lang.Boolean|IResolvable getPreserveTransactionsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rfc4180Input`<sup>Optional</sup> <a name="rfc4180Input" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180Input"></a>

```java
public java.lang.Boolean|IResolvable getRfc4180Input();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rowGroupLengthInput`<sup>Optional</sup> <a name="rowGroupLengthInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLengthInput"></a>

```java
public java.lang.Number getRowGroupLengthInput();
```

- *Type:* java.lang.Number

---

##### `serverSideEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput"></a>

```java
public java.lang.String getServerSideEncryptionKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```java
public java.lang.String getServiceAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `timestampColumnNameInput`<sup>Optional</sup> <a name="timestampColumnNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnNameInput"></a>

```java
public java.lang.String getTimestampColumnNameInput();
```

- *Type:* java.lang.String

---

##### `useCsvNoSupValueInput`<sup>Optional</sup> <a name="useCsvNoSupValueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValueInput"></a>

```java
public java.lang.Boolean|IResolvable getUseCsvNoSupValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useTaskStartTimeForFullLoadTimestampInput`<sup>Optional</sup> <a name="useTaskStartTimeForFullLoadTimestampInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestampInput"></a>

```java
public java.lang.Boolean|IResolvable getUseTaskStartTimeForFullLoadTimestampInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `addColumnName`<sup>Required</sup> <a name="addColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnName"></a>

```java
public java.lang.Boolean|IResolvable getAddColumnName();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `addTrailingPaddingCharacter`<sup>Required</sup> <a name="addTrailingPaddingCharacter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacter"></a>

```java
public java.lang.Boolean|IResolvable getAddTrailingPaddingCharacter();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bucketFolder`<sup>Required</sup> <a name="bucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolder"></a>

```java
public java.lang.String getBucketFolder();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `cannedAclForObjects`<sup>Required</sup> <a name="cannedAclForObjects" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjects"></a>

```java
public java.lang.String getCannedAclForObjects();
```

- *Type:* java.lang.String

---

##### `cdcInsertsAndUpdates`<sup>Required</sup> <a name="cdcInsertsAndUpdates" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates"></a>

```java
public java.lang.Boolean|IResolvable getCdcInsertsAndUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cdcInsertsOnly`<sup>Required</sup> <a name="cdcInsertsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly"></a>

```java
public java.lang.Boolean|IResolvable getCdcInsertsOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cdcMaxBatchInterval`<sup>Required</sup> <a name="cdcMaxBatchInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval"></a>

```java
public java.lang.Number getCdcMaxBatchInterval();
```

- *Type:* java.lang.Number

---

##### `cdcMinFileSize`<sup>Required</sup> <a name="cdcMinFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSize"></a>

```java
public java.lang.Number getCdcMinFileSize();
```

- *Type:* java.lang.Number

---

##### `cdcPath`<sup>Required</sup> <a name="cdcPath" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPath"></a>

```java
public java.lang.String getCdcPath();
```

- *Type:* java.lang.String

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionType"></a>

```java
public java.lang.String getCompressionType();
```

- *Type:* java.lang.String

---

##### `csvDelimiter`<sup>Required</sup> <a name="csvDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiter"></a>

```java
public java.lang.String getCsvDelimiter();
```

- *Type:* java.lang.String

---

##### `csvNoSupValue`<sup>Required</sup> <a name="csvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValue"></a>

```java
public java.lang.String getCsvNoSupValue();
```

- *Type:* java.lang.String

---

##### `csvNullValue`<sup>Required</sup> <a name="csvNullValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValue"></a>

```java
public java.lang.String getCsvNullValue();
```

- *Type:* java.lang.String

---

##### `csvRowDelimiter`<sup>Required</sup> <a name="csvRowDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiter"></a>

```java
public java.lang.String getCsvRowDelimiter();
```

- *Type:* java.lang.String

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormat"></a>

```java
public java.lang.String getDataFormat();
```

- *Type:* java.lang.String

---

##### `dataPageSize`<sup>Required</sup> <a name="dataPageSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSize"></a>

```java
public java.lang.Number getDataPageSize();
```

- *Type:* java.lang.Number

---

##### `datePartitionDelimiter`<sup>Required</sup> <a name="datePartitionDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter"></a>

```java
public java.lang.String getDatePartitionDelimiter();
```

- *Type:* java.lang.String

---

##### `datePartitionEnabled`<sup>Required</sup> <a name="datePartitionEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDatePartitionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `datePartitionSequence`<sup>Required</sup> <a name="datePartitionSequence" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequence"></a>

```java
public java.lang.String getDatePartitionSequence();
```

- *Type:* java.lang.String

---

##### `datePartitionTimezone`<sup>Required</sup> <a name="datePartitionTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionTimezone"></a>

```java
public java.lang.String getDatePartitionTimezone();
```

- *Type:* java.lang.String

---

##### `dictPageSizeLimit`<sup>Required</sup> <a name="dictPageSizeLimit" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit"></a>

```java
public java.lang.Number getDictPageSizeLimit();
```

- *Type:* java.lang.Number

---

##### `enableStatistics`<sup>Required</sup> <a name="enableStatistics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatistics"></a>

```java
public java.lang.Boolean|IResolvable getEnableStatistics();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encodingType`<sup>Required</sup> <a name="encodingType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingType"></a>

```java
public java.lang.String getEncodingType();
```

- *Type:* java.lang.String

---

##### `encryptionMode`<sup>Required</sup> <a name="encryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionMode"></a>

```java
public java.lang.String getEncryptionMode();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

---

##### `externalTableDefinition`<sup>Required</sup> <a name="externalTableDefinition" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinition"></a>

```java
public java.lang.String getExternalTableDefinition();
```

- *Type:* java.lang.String

---

##### `glueCatalogGeneration`<sup>Required</sup> <a name="glueCatalogGeneration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.glueCatalogGeneration"></a>

```java
public java.lang.Boolean|IResolvable getGlueCatalogGeneration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ignoreHeaderRows`<sup>Required</sup> <a name="ignoreHeaderRows" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows"></a>

```java
public java.lang.Number getIgnoreHeaderRows();
```

- *Type:* java.lang.Number

---

##### `includeOpForFullLoad`<sup>Required</sup> <a name="includeOpForFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad"></a>

```java
public java.lang.Boolean|IResolvable getIncludeOpForFullLoad();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

---

##### `parquetTimestampInMillisecond`<sup>Required</sup> <a name="parquetTimestampInMillisecond" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond"></a>

```java
public java.lang.Boolean|IResolvable getParquetTimestampInMillisecond();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `parquetVersion`<sup>Required</sup> <a name="parquetVersion" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersion"></a>

```java
public java.lang.String getParquetVersion();
```

- *Type:* java.lang.String

---

##### `preserveTransactions`<sup>Required</sup> <a name="preserveTransactions" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactions"></a>

```java
public java.lang.Boolean|IResolvable getPreserveTransactions();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rfc4180`<sup>Required</sup> <a name="rfc4180" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180"></a>

```java
public java.lang.Boolean|IResolvable getRfc4180();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rowGroupLength`<sup>Required</sup> <a name="rowGroupLength" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLength"></a>

```java
public java.lang.Number getRowGroupLength();
```

- *Type:* java.lang.Number

---

##### `serverSideEncryptionKmsKeyId`<sup>Required</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```java
public java.lang.String getServerSideEncryptionKmsKeyId();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `timestampColumnName`<sup>Required</sup> <a name="timestampColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnName"></a>

```java
public java.lang.String getTimestampColumnName();
```

- *Type:* java.lang.String

---

##### `useCsvNoSupValue`<sup>Required</sup> <a name="useCsvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue"></a>

```java
public java.lang.Boolean|IResolvable getUseCsvNoSupValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useTaskStartTimeForFullLoadTimestamp`<sup>Required</sup> <a name="useTaskStartTimeForFullLoadTimestamp" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp"></a>

```java
public java.lang.Boolean|IResolvable getUseTaskStartTimeForFullLoadTimestamp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsEndpointS3Settings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

---


### DmsEndpointSybaseSettingsOutputReference <a name="DmsEndpointSybaseSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointSybaseSettingsOutputReference;

new DmsEndpointSybaseSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```java
public void resetSecretsManagerAccessRoleArn()
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resetSecretsManagerSecretId"></a>

```java
public void resetSecretsManagerSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```java
public java.lang.String getSecretsManagerSecretIdInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsEndpointSybaseSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a>

---


### DmsEndpointTagsList <a name="DmsEndpointTagsList" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointTagsList;

new DmsEndpointTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.get"></a>

```java
public DmsEndpointTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DmsEndpointTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>>

---


### DmsEndpointTagsOutputReference <a name="DmsEndpointTagsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dms_endpoint.DmsEndpointTagsOutputReference;

new DmsEndpointTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsEndpointTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>

---



