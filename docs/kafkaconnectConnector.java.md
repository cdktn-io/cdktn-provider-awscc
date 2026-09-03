# `kafkaconnectConnector` Submodule <a name="`kafkaconnectConnector` Submodule" id="@cdktn/provider-awscc.kafkaconnectConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KafkaconnectConnector <a name="KafkaconnectConnector" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector awscc_kafkaconnect_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnector;

KafkaconnectConnector.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .capacity(KafkaconnectConnectorCapacity)
    .connectorConfiguration(java.util.Map<java.lang.String, java.lang.String>)
    .connectorName(java.lang.String)
    .kafkaCluster(KafkaconnectConnectorKafkaCluster)
    .kafkaClusterClientAuthentication(KafkaconnectConnectorKafkaClusterClientAuthentication)
    .kafkaClusterEncryptionInTransit(KafkaconnectConnectorKafkaClusterEncryptionInTransit)
    .kafkaConnectVersion(java.lang.String)
    .plugins(IResolvable|java.util.List<KafkaconnectConnectorPlugins>)
    .serviceExecutionRoleArn(java.lang.String)
//  .connectorDescription(java.lang.String)
//  .logDelivery(KafkaconnectConnectorLogDelivery)
//  .networkType(java.lang.String)
//  .tags(IResolvable|java.util.List<KafkaconnectConnectorTags>)
//  .workerConfiguration(KafkaconnectConnectorWorkerConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.capacity">capacity</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a></code> | Information about the capacity allocated to the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.connectorConfiguration">connectorConfiguration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The configuration for the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.connectorName">connectorName</a></code> | <code>java.lang.String</code> | The name of the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.kafkaCluster">kafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a></code> | Details of how to connect to the Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.kafkaClusterClientAuthentication">kafkaClusterClientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a></code> | Details of the client authentication used by the Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.kafkaClusterEncryptionInTransit">kafkaClusterEncryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a></code> | Details of encryption in transit to the Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.kafkaConnectVersion">kafkaConnectVersion</a></code> | <code>java.lang.String</code> | The version of Kafka Connect. It has to be compatible with both the Kafka cluster's version and the plugins. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.plugins">plugins</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>></code> | List of plugins to use with the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon S3 objects and other external resources. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.connectorDescription">connectorDescription</a></code> | <code>java.lang.String</code> | A summary description of the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.logDelivery">logDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a></code> | Details of what logs are delivered and where they are delivered. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.networkType">networkType</a></code> | <code>java.lang.String</code> | The network type of the Connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>></code> | A collection of tags associated with a resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.workerConfiguration">workerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a></code> | Specifies the worker configuration to use with the connector. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.capacity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a>

Information about the capacity allocated to the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#capacity KafkaconnectConnector#capacity}

---

##### `connectorConfiguration`<sup>Required</sup> <a name="connectorConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.connectorConfiguration"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The configuration for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#connector_configuration KafkaconnectConnector#connector_configuration}

---

##### `connectorName`<sup>Required</sup> <a name="connectorName" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.connectorName"></a>

- *Type:* java.lang.String

The name of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#connector_name KafkaconnectConnector#connector_name}

---

##### `kafkaCluster`<sup>Required</sup> <a name="kafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.kafkaCluster"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a>

Details of how to connect to the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#kafka_cluster KafkaconnectConnector#kafka_cluster}

---

##### `kafkaClusterClientAuthentication`<sup>Required</sup> <a name="kafkaClusterClientAuthentication" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.kafkaClusterClientAuthentication"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a>

Details of the client authentication used by the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#kafka_cluster_client_authentication KafkaconnectConnector#kafka_cluster_client_authentication}

---

##### `kafkaClusterEncryptionInTransit`<sup>Required</sup> <a name="kafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.kafkaClusterEncryptionInTransit"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a>

Details of encryption in transit to the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#kafka_cluster_encryption_in_transit KafkaconnectConnector#kafka_cluster_encryption_in_transit}

---

##### `kafkaConnectVersion`<sup>Required</sup> <a name="kafkaConnectVersion" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.kafkaConnectVersion"></a>

- *Type:* java.lang.String

The version of Kafka Connect. It has to be compatible with both the Kafka cluster's version and the plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#kafka_connect_version KafkaconnectConnector#kafka_connect_version}

---

##### `plugins`<sup>Required</sup> <a name="plugins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.plugins"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>>

List of plugins to use with the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#plugins KafkaconnectConnector#plugins}

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.serviceExecutionRoleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon S3 objects and other external resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#service_execution_role_arn KafkaconnectConnector#service_execution_role_arn}

---

##### `connectorDescription`<sup>Optional</sup> <a name="connectorDescription" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.connectorDescription"></a>

- *Type:* java.lang.String

A summary description of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#connector_description KafkaconnectConnector#connector_description}

---

##### `logDelivery`<sup>Optional</sup> <a name="logDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.logDelivery"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a>

Details of what logs are delivered and where they are delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#log_delivery KafkaconnectConnector#log_delivery}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.networkType"></a>

- *Type:* java.lang.String

The network type of the Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#network_type KafkaconnectConnector#network_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>>

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#tags KafkaconnectConnector#tags}

---

##### `workerConfiguration`<sup>Optional</sup> <a name="workerConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.workerConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a>

Specifies the worker configuration to use with the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#worker_configuration KafkaconnectConnector#worker_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putCapacity">putCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaCluster">putKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterClientAuthentication">putKafkaClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterEncryptionInTransit">putKafkaClusterEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putLogDelivery">putLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putPlugins">putPlugins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putWorkerConfiguration">putWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetConnectorDescription">resetConnectorDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetLogDelivery">resetLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetWorkerConfiguration">resetWorkerConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapacity` <a name="putCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putCapacity"></a>

```java
public void putCapacity(KafkaconnectConnectorCapacity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a>

---

##### `putKafkaCluster` <a name="putKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaCluster"></a>

```java
public void putKafkaCluster(KafkaconnectConnectorKafkaCluster value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a>

---

##### `putKafkaClusterClientAuthentication` <a name="putKafkaClusterClientAuthentication" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterClientAuthentication"></a>

```java
public void putKafkaClusterClientAuthentication(KafkaconnectConnectorKafkaClusterClientAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterClientAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a>

---

##### `putKafkaClusterEncryptionInTransit` <a name="putKafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterEncryptionInTransit"></a>

```java
public void putKafkaClusterEncryptionInTransit(KafkaconnectConnectorKafkaClusterEncryptionInTransit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterEncryptionInTransit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a>

---

##### `putLogDelivery` <a name="putLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putLogDelivery"></a>

```java
public void putLogDelivery(KafkaconnectConnectorLogDelivery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a>

---

##### `putPlugins` <a name="putPlugins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putPlugins"></a>

```java
public void putPlugins(IResolvable|java.util.List<KafkaconnectConnectorPlugins> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putPlugins.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<KafkaconnectConnectorTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>>

---

##### `putWorkerConfiguration` <a name="putWorkerConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putWorkerConfiguration"></a>

```java
public void putWorkerConfiguration(KafkaconnectConnectorWorkerConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putWorkerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a>

---

##### `resetConnectorDescription` <a name="resetConnectorDescription" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetConnectorDescription"></a>

```java
public void resetConnectorDescription()
```

##### `resetLogDelivery` <a name="resetLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetLogDelivery"></a>

```java
public void resetLogDelivery()
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetNetworkType"></a>

```java
public void resetNetworkType()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetTags"></a>

```java
public void resetTags()
```

##### `resetWorkerConfiguration` <a name="resetWorkerConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetWorkerConfiguration"></a>

```java
public void resetWorkerConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KafkaconnectConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isConstruct"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnector;

KafkaconnectConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnector;

KafkaconnectConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnector;

KafkaconnectConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnector;

KafkaconnectConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KafkaconnectConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KafkaconnectConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KafkaconnectConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KafkaconnectConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KafkaconnectConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.capacity">capacity</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference">KafkaconnectConnectorCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorArn">connectorArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaCluster">kafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference">KafkaconnectConnectorKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterClientAuthentication">kafkaClusterClientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference">KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterEncryptionInTransit">kafkaClusterEncryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference">KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.logDelivery">logDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference">KafkaconnectConnectorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.plugins">plugins</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList">KafkaconnectConnectorPluginsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList">KafkaconnectConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.workerConfiguration">workerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference">KafkaconnectConnectorWorkerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.capacityInput">capacityInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorConfigurationInput">connectorConfigurationInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorDescriptionInput">connectorDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorNameInput">connectorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterClientAuthenticationInput">kafkaClusterClientAuthenticationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterEncryptionInTransitInput">kafkaClusterEncryptionInTransitInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterInput">kafkaClusterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaConnectVersionInput">kafkaConnectVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.logDeliveryInput">logDeliveryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.networkTypeInput">networkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.pluginsInput">pluginsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.serviceExecutionRoleArnInput">serviceExecutionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.workerConfigurationInput">workerConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorConfiguration">connectorConfiguration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorDescription">connectorDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorName">connectorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaConnectVersion">kafkaConnectVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.capacity"></a>

```java
public KafkaconnectConnectorCapacityOutputReference getCapacity();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference">KafkaconnectConnectorCapacityOutputReference</a>

---

##### `connectorArn`<sup>Required</sup> <a name="connectorArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorArn"></a>

```java
public java.lang.String getConnectorArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kafkaCluster`<sup>Required</sup> <a name="kafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaCluster"></a>

```java
public KafkaconnectConnectorKafkaClusterOutputReference getKafkaCluster();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference">KafkaconnectConnectorKafkaClusterOutputReference</a>

---

##### `kafkaClusterClientAuthentication`<sup>Required</sup> <a name="kafkaClusterClientAuthentication" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterClientAuthentication"></a>

```java
public KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference getKafkaClusterClientAuthentication();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference">KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference</a>

---

##### `kafkaClusterEncryptionInTransit`<sup>Required</sup> <a name="kafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterEncryptionInTransit"></a>

```java
public KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference getKafkaClusterEncryptionInTransit();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference">KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a>

---

##### `logDelivery`<sup>Required</sup> <a name="logDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.logDelivery"></a>

```java
public KafkaconnectConnectorLogDeliveryOutputReference getLogDelivery();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference">KafkaconnectConnectorLogDeliveryOutputReference</a>

---

##### `plugins`<sup>Required</sup> <a name="plugins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.plugins"></a>

```java
public KafkaconnectConnectorPluginsList getPlugins();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList">KafkaconnectConnectorPluginsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tags"></a>

```java
public KafkaconnectConnectorTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList">KafkaconnectConnectorTagsList</a>

---

##### `workerConfiguration`<sup>Required</sup> <a name="workerConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.workerConfiguration"></a>

```java
public KafkaconnectConnectorWorkerConfigurationOutputReference getWorkerConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference">KafkaconnectConnectorWorkerConfigurationOutputReference</a>

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.capacityInput"></a>

```java
public IResolvable|KafkaconnectConnectorCapacity getCapacityInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a>

---

##### `connectorConfigurationInput`<sup>Optional</sup> <a name="connectorConfigurationInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorConfigurationInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConnectorConfigurationInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connectorDescriptionInput`<sup>Optional</sup> <a name="connectorDescriptionInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorDescriptionInput"></a>

```java
public java.lang.String getConnectorDescriptionInput();
```

- *Type:* java.lang.String

---

##### `connectorNameInput`<sup>Optional</sup> <a name="connectorNameInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorNameInput"></a>

```java
public java.lang.String getConnectorNameInput();
```

- *Type:* java.lang.String

---

##### `kafkaClusterClientAuthenticationInput`<sup>Optional</sup> <a name="kafkaClusterClientAuthenticationInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterClientAuthenticationInput"></a>

```java
public IResolvable|KafkaconnectConnectorKafkaClusterClientAuthentication getKafkaClusterClientAuthenticationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a>

---

##### `kafkaClusterEncryptionInTransitInput`<sup>Optional</sup> <a name="kafkaClusterEncryptionInTransitInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterEncryptionInTransitInput"></a>

```java
public IResolvable|KafkaconnectConnectorKafkaClusterEncryptionInTransit getKafkaClusterEncryptionInTransitInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a>

---

##### `kafkaClusterInput`<sup>Optional</sup> <a name="kafkaClusterInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterInput"></a>

```java
public IResolvable|KafkaconnectConnectorKafkaCluster getKafkaClusterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a>

---

##### `kafkaConnectVersionInput`<sup>Optional</sup> <a name="kafkaConnectVersionInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaConnectVersionInput"></a>

```java
public java.lang.String getKafkaConnectVersionInput();
```

- *Type:* java.lang.String

---

##### `logDeliveryInput`<sup>Optional</sup> <a name="logDeliveryInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.logDeliveryInput"></a>

```java
public IResolvable|KafkaconnectConnectorLogDelivery getLogDeliveryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a>

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.networkTypeInput"></a>

```java
public java.lang.String getNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `pluginsInput`<sup>Optional</sup> <a name="pluginsInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.pluginsInput"></a>

```java
public IResolvable|java.util.List<KafkaconnectConnectorPlugins> getPluginsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>>

---

##### `serviceExecutionRoleArnInput`<sup>Optional</sup> <a name="serviceExecutionRoleArnInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.serviceExecutionRoleArnInput"></a>

```java
public java.lang.String getServiceExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tagsInput"></a>

```java
public IResolvable|java.util.List<KafkaconnectConnectorTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>>

---

##### `workerConfigurationInput`<sup>Optional</sup> <a name="workerConfigurationInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.workerConfigurationInput"></a>

```java
public IResolvable|KafkaconnectConnectorWorkerConfiguration getWorkerConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a>

---

##### `connectorConfiguration`<sup>Required</sup> <a name="connectorConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorConfiguration"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConnectorConfiguration();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connectorDescription`<sup>Required</sup> <a name="connectorDescription" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorDescription"></a>

```java
public java.lang.String getConnectorDescription();
```

- *Type:* java.lang.String

---

##### `connectorName`<sup>Required</sup> <a name="connectorName" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorName"></a>

```java
public java.lang.String getConnectorName();
```

- *Type:* java.lang.String

---

##### `kafkaConnectVersion`<sup>Required</sup> <a name="kafkaConnectVersion" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaConnectVersion"></a>

```java
public java.lang.String getKafkaConnectVersion();
```

- *Type:* java.lang.String

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.serviceExecutionRoleArn"></a>

```java
public java.lang.String getServiceExecutionRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KafkaconnectConnectorCapacity <a name="KafkaconnectConnectorCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorCapacity;

KafkaconnectConnectorCapacity.builder()
//  .autoScaling(KafkaconnectConnectorCapacityAutoScaling)
//  .provisionedCapacity(KafkaconnectConnectorCapacityProvisionedCapacity)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a></code> | Details about auto scaling of a connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.property.provisionedCapacity">provisionedCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a></code> | Details about a fixed capacity allocated to a connector. |

---

##### `autoScaling`<sup>Optional</sup> <a name="autoScaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.property.autoScaling"></a>

```java
public KafkaconnectConnectorCapacityAutoScaling getAutoScaling();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a>

Details about auto scaling of a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#auto_scaling KafkaconnectConnector#auto_scaling}

---

##### `provisionedCapacity`<sup>Optional</sup> <a name="provisionedCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.property.provisionedCapacity"></a>

```java
public KafkaconnectConnectorCapacityProvisionedCapacity getProvisionedCapacity();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a>

Details about a fixed capacity allocated to a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#provisioned_capacity KafkaconnectConnector#provisioned_capacity}

---

### KafkaconnectConnectorCapacityAutoScaling <a name="KafkaconnectConnectorCapacityAutoScaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorCapacityAutoScaling;

KafkaconnectConnectorCapacityAutoScaling.builder()
//  .maxAutoscalingTaskCount(java.lang.Number)
//  .maxWorkerCount(java.lang.Number)
//  .mcuCount(java.lang.Number)
//  .minWorkerCount(java.lang.Number)
//  .scaleInPolicy(KafkaconnectConnectorCapacityAutoScalingScaleInPolicy)
//  .scaleOutPolicy(KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.maxAutoscalingTaskCount">maxAutoscalingTaskCount</a></code> | <code>java.lang.Number</code> | The maximum number of tasks allocated to the connector during autoscaling operations. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.maxWorkerCount">maxWorkerCount</a></code> | <code>java.lang.Number</code> | The maximum number of workers for a connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.mcuCount">mcuCount</a></code> | <code>java.lang.Number</code> | Specifies how many MSK Connect Units (MCU) as the minimum scaling unit. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.minWorkerCount">minWorkerCount</a></code> | <code>java.lang.Number</code> | The minimum number of workers for a connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.scaleInPolicy">scaleInPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a></code> | Information about the scale in policy of the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.scaleOutPolicy">scaleOutPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a></code> | Information about the scale out policy of the connector. |

---

##### `maxAutoscalingTaskCount`<sup>Optional</sup> <a name="maxAutoscalingTaskCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.maxAutoscalingTaskCount"></a>

```java
public java.lang.Number getMaxAutoscalingTaskCount();
```

- *Type:* java.lang.Number

The maximum number of tasks allocated to the connector during autoscaling operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#max_autoscaling_task_count KafkaconnectConnector#max_autoscaling_task_count}

---

##### `maxWorkerCount`<sup>Optional</sup> <a name="maxWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.maxWorkerCount"></a>

```java
public java.lang.Number getMaxWorkerCount();
```

- *Type:* java.lang.Number

The maximum number of workers for a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#max_worker_count KafkaconnectConnector#max_worker_count}

---

##### `mcuCount`<sup>Optional</sup> <a name="mcuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.mcuCount"></a>

```java
public java.lang.Number getMcuCount();
```

- *Type:* java.lang.Number

Specifies how many MSK Connect Units (MCU) as the minimum scaling unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#mcu_count KafkaconnectConnector#mcu_count}

---

##### `minWorkerCount`<sup>Optional</sup> <a name="minWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.minWorkerCount"></a>

```java
public java.lang.Number getMinWorkerCount();
```

- *Type:* java.lang.Number

The minimum number of workers for a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#min_worker_count KafkaconnectConnector#min_worker_count}

---

##### `scaleInPolicy`<sup>Optional</sup> <a name="scaleInPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.scaleInPolicy"></a>

```java
public KafkaconnectConnectorCapacityAutoScalingScaleInPolicy getScaleInPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a>

Information about the scale in policy of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#scale_in_policy KafkaconnectConnector#scale_in_policy}

---

##### `scaleOutPolicy`<sup>Optional</sup> <a name="scaleOutPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.scaleOutPolicy"></a>

```java
public KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy getScaleOutPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a>

Information about the scale out policy of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#scale_out_policy KafkaconnectConnector#scale_out_policy}

---

### KafkaconnectConnectorCapacityAutoScalingScaleInPolicy <a name="KafkaconnectConnectorCapacityAutoScalingScaleInPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy;

KafkaconnectConnectorCapacityAutoScalingScaleInPolicy.builder()
//  .cpuUtilizationPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy.property.cpuUtilizationPercentage">cpuUtilizationPercentage</a></code> | <code>java.lang.Number</code> | Specifies the CPU utilization percentage threshold at which connector scale in should trigger. |

---

##### `cpuUtilizationPercentage`<sup>Optional</sup> <a name="cpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy.property.cpuUtilizationPercentage"></a>

```java
public java.lang.Number getCpuUtilizationPercentage();
```

- *Type:* java.lang.Number

Specifies the CPU utilization percentage threshold at which connector scale in should trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#cpu_utilization_percentage KafkaconnectConnector#cpu_utilization_percentage}

---

### KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy <a name="KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy;

KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy.builder()
//  .cpuUtilizationPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy.property.cpuUtilizationPercentage">cpuUtilizationPercentage</a></code> | <code>java.lang.Number</code> | Specifies the CPU utilization percentage threshold at which connector scale out should trigger. |

---

##### `cpuUtilizationPercentage`<sup>Optional</sup> <a name="cpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy.property.cpuUtilizationPercentage"></a>

```java
public java.lang.Number getCpuUtilizationPercentage();
```

- *Type:* java.lang.Number

Specifies the CPU utilization percentage threshold at which connector scale out should trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#cpu_utilization_percentage KafkaconnectConnector#cpu_utilization_percentage}

---

### KafkaconnectConnectorCapacityProvisionedCapacity <a name="KafkaconnectConnectorCapacityProvisionedCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorCapacityProvisionedCapacity;

KafkaconnectConnectorCapacityProvisionedCapacity.builder()
//  .mcuCount(java.lang.Number)
//  .workerCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.property.mcuCount">mcuCount</a></code> | <code>java.lang.Number</code> | Specifies how many MSK Connect Units (MCU) are allocated to the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.property.workerCount">workerCount</a></code> | <code>java.lang.Number</code> | Number of workers for a connector. |

---

##### `mcuCount`<sup>Optional</sup> <a name="mcuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.property.mcuCount"></a>

```java
public java.lang.Number getMcuCount();
```

- *Type:* java.lang.Number

Specifies how many MSK Connect Units (MCU) are allocated to the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#mcu_count KafkaconnectConnector#mcu_count}

---

##### `workerCount`<sup>Optional</sup> <a name="workerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.property.workerCount"></a>

```java
public java.lang.Number getWorkerCount();
```

- *Type:* java.lang.Number

Number of workers for a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#worker_count KafkaconnectConnector#worker_count}

---

### KafkaconnectConnectorConfig <a name="KafkaconnectConnectorConfig" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorConfig;

KafkaconnectConnectorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .capacity(KafkaconnectConnectorCapacity)
    .connectorConfiguration(java.util.Map<java.lang.String, java.lang.String>)
    .connectorName(java.lang.String)
    .kafkaCluster(KafkaconnectConnectorKafkaCluster)
    .kafkaClusterClientAuthentication(KafkaconnectConnectorKafkaClusterClientAuthentication)
    .kafkaClusterEncryptionInTransit(KafkaconnectConnectorKafkaClusterEncryptionInTransit)
    .kafkaConnectVersion(java.lang.String)
    .plugins(IResolvable|java.util.List<KafkaconnectConnectorPlugins>)
    .serviceExecutionRoleArn(java.lang.String)
//  .connectorDescription(java.lang.String)
//  .logDelivery(KafkaconnectConnectorLogDelivery)
//  .networkType(java.lang.String)
//  .tags(IResolvable|java.util.List<KafkaconnectConnectorTags>)
//  .workerConfiguration(KafkaconnectConnectorWorkerConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.capacity">capacity</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a></code> | Information about the capacity allocated to the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorConfiguration">connectorConfiguration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The configuration for the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorName">connectorName</a></code> | <code>java.lang.String</code> | The name of the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaCluster">kafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a></code> | Details of how to connect to the Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaClusterClientAuthentication">kafkaClusterClientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a></code> | Details of the client authentication used by the Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaClusterEncryptionInTransit">kafkaClusterEncryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a></code> | Details of encryption in transit to the Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaConnectVersion">kafkaConnectVersion</a></code> | <code>java.lang.String</code> | The version of Kafka Connect. It has to be compatible with both the Kafka cluster's version and the plugins. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.plugins">plugins</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>></code> | List of plugins to use with the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon S3 objects and other external resources. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorDescription">connectorDescription</a></code> | <code>java.lang.String</code> | A summary description of the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.logDelivery">logDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a></code> | Details of what logs are delivered and where they are delivered. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.networkType">networkType</a></code> | <code>java.lang.String</code> | The network type of the Connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>></code> | A collection of tags associated with a resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.workerConfiguration">workerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a></code> | Specifies the worker configuration to use with the connector. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.capacity"></a>

```java
public KafkaconnectConnectorCapacity getCapacity();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a>

Information about the capacity allocated to the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#capacity KafkaconnectConnector#capacity}

---

##### `connectorConfiguration`<sup>Required</sup> <a name="connectorConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorConfiguration"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConnectorConfiguration();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The configuration for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#connector_configuration KafkaconnectConnector#connector_configuration}

---

##### `connectorName`<sup>Required</sup> <a name="connectorName" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorName"></a>

```java
public java.lang.String getConnectorName();
```

- *Type:* java.lang.String

The name of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#connector_name KafkaconnectConnector#connector_name}

---

##### `kafkaCluster`<sup>Required</sup> <a name="kafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaCluster"></a>

```java
public KafkaconnectConnectorKafkaCluster getKafkaCluster();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a>

Details of how to connect to the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#kafka_cluster KafkaconnectConnector#kafka_cluster}

---

##### `kafkaClusterClientAuthentication`<sup>Required</sup> <a name="kafkaClusterClientAuthentication" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaClusterClientAuthentication"></a>

```java
public KafkaconnectConnectorKafkaClusterClientAuthentication getKafkaClusterClientAuthentication();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a>

Details of the client authentication used by the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#kafka_cluster_client_authentication KafkaconnectConnector#kafka_cluster_client_authentication}

---

##### `kafkaClusterEncryptionInTransit`<sup>Required</sup> <a name="kafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaClusterEncryptionInTransit"></a>

```java
public KafkaconnectConnectorKafkaClusterEncryptionInTransit getKafkaClusterEncryptionInTransit();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a>

Details of encryption in transit to the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#kafka_cluster_encryption_in_transit KafkaconnectConnector#kafka_cluster_encryption_in_transit}

---

##### `kafkaConnectVersion`<sup>Required</sup> <a name="kafkaConnectVersion" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaConnectVersion"></a>

```java
public java.lang.String getKafkaConnectVersion();
```

- *Type:* java.lang.String

The version of Kafka Connect. It has to be compatible with both the Kafka cluster's version and the plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#kafka_connect_version KafkaconnectConnector#kafka_connect_version}

---

##### `plugins`<sup>Required</sup> <a name="plugins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.plugins"></a>

```java
public IResolvable|java.util.List<KafkaconnectConnectorPlugins> getPlugins();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>>

List of plugins to use with the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#plugins KafkaconnectConnector#plugins}

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.serviceExecutionRoleArn"></a>

```java
public java.lang.String getServiceExecutionRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon S3 objects and other external resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#service_execution_role_arn KafkaconnectConnector#service_execution_role_arn}

---

##### `connectorDescription`<sup>Optional</sup> <a name="connectorDescription" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorDescription"></a>

```java
public java.lang.String getConnectorDescription();
```

- *Type:* java.lang.String

A summary description of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#connector_description KafkaconnectConnector#connector_description}

---

##### `logDelivery`<sup>Optional</sup> <a name="logDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.logDelivery"></a>

```java
public KafkaconnectConnectorLogDelivery getLogDelivery();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a>

Details of what logs are delivered and where they are delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#log_delivery KafkaconnectConnector#log_delivery}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

The network type of the Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#network_type KafkaconnectConnector#network_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.tags"></a>

```java
public IResolvable|java.util.List<KafkaconnectConnectorTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>>

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#tags KafkaconnectConnector#tags}

---

##### `workerConfiguration`<sup>Optional</sup> <a name="workerConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.workerConfiguration"></a>

```java
public KafkaconnectConnectorWorkerConfiguration getWorkerConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a>

Specifies the worker configuration to use with the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#worker_configuration KafkaconnectConnector#worker_configuration}

---

### KafkaconnectConnectorKafkaCluster <a name="KafkaconnectConnectorKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorKafkaCluster;

KafkaconnectConnectorKafkaCluster.builder()
    .apacheKafkaCluster(KafkaconnectConnectorKafkaClusterApacheKafkaCluster)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster.property.apacheKafkaCluster">apacheKafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | Details of how to connect to an Apache Kafka cluster. |

---

##### `apacheKafkaCluster`<sup>Required</sup> <a name="apacheKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster.property.apacheKafkaCluster"></a>

```java
public KafkaconnectConnectorKafkaClusterApacheKafkaCluster getApacheKafkaCluster();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a>

Details of how to connect to an Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#apache_kafka_cluster KafkaconnectConnector#apache_kafka_cluster}

---

### KafkaconnectConnectorKafkaClusterApacheKafkaCluster <a name="KafkaconnectConnectorKafkaClusterApacheKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster;

KafkaconnectConnectorKafkaClusterApacheKafkaCluster.builder()
    .bootstrapServers(java.lang.String)
    .vpc(KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.property.bootstrapServers">bootstrapServers</a></code> | <code>java.lang.String</code> | The bootstrap servers string of the Apache Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | Information about a VPC used with the connector. |

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.property.bootstrapServers"></a>

```java
public java.lang.String getBootstrapServers();
```

- *Type:* java.lang.String

The bootstrap servers string of the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#bootstrap_servers KafkaconnectConnector#bootstrap_servers}

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.property.vpc"></a>

```java
public KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc getVpc();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

Information about a VPC used with the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#vpc KafkaconnectConnector#vpc}

---

### KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc <a name="KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc;

KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.builder()
    .securityGroups(java.util.List<java.lang.String>)
    .subnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | The AWS security groups to associate with the elastic network interfaces in order to specify what the connector has access to. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | The list of subnets to connect to in the virtual private cloud (VPC). |

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

The AWS security groups to associate with the elastic network interfaces in order to specify what the connector has access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#security_groups KafkaconnectConnector#security_groups}

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

The list of subnets to connect to in the virtual private cloud (VPC).

AWS creates elastic network interfaces inside these subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#subnets KafkaconnectConnector#subnets}

---

### KafkaconnectConnectorKafkaClusterClientAuthentication <a name="KafkaconnectConnectorKafkaClusterClientAuthentication" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorKafkaClusterClientAuthentication;

KafkaconnectConnectorKafkaClusterClientAuthentication.builder()
    .authenticationType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | The type of client authentication used to connect to the Kafka cluster. |

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

The type of client authentication used to connect to the Kafka cluster.

Value NONE means that no client authentication is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#authentication_type KafkaconnectConnector#authentication_type}

---

### KafkaconnectConnectorKafkaClusterEncryptionInTransit <a name="KafkaconnectConnectorKafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorKafkaClusterEncryptionInTransit;

KafkaconnectConnectorKafkaClusterEncryptionInTransit.builder()
    .encryptionType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | The type of encryption in transit to the Kafka cluster. |

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

The type of encryption in transit to the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#encryption_type KafkaconnectConnector#encryption_type}

---

### KafkaconnectConnectorLogDelivery <a name="KafkaconnectConnectorLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorLogDelivery;

KafkaconnectConnectorLogDelivery.builder()
//  .workerLogDelivery(KafkaconnectConnectorLogDeliveryWorkerLogDelivery)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery.property.workerLogDelivery">workerLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | Specifies where worker logs are delivered. |

---

##### `workerLogDelivery`<sup>Optional</sup> <a name="workerLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery.property.workerLogDelivery"></a>

```java
public KafkaconnectConnectorLogDeliveryWorkerLogDelivery getWorkerLogDelivery();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a>

Specifies where worker logs are delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#worker_log_delivery KafkaconnectConnector#worker_log_delivery}

---

### KafkaconnectConnectorLogDeliveryWorkerLogDelivery <a name="KafkaconnectConnectorLogDeliveryWorkerLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery;

KafkaconnectConnectorLogDeliveryWorkerLogDelivery.builder()
//  .cloudwatchLogs(KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs)
//  .firehose(KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose)
//  .s3(KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | Details about delivering logs to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | Details about delivering logs to Amazon Kinesis Data Firehose. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | Details about delivering logs to Amazon S3. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.cloudwatchLogs"></a>

```java
public KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs getCloudwatchLogs();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

Details about delivering logs to Amazon CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#cloudwatch_logs KafkaconnectConnector#cloudwatch_logs}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.firehose"></a>

```java
public KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose getFirehose();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

Details about delivering logs to Amazon Kinesis Data Firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#firehose KafkaconnectConnector#firehose}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.s3"></a>

```java
public KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

Details about delivering logs to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#s3 KafkaconnectConnector#s3}

---

### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs;

KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .logGroup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the logs get sent to the specified CloudWatch Logs destination. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | The CloudWatch log group that is the destination for log delivery. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the logs get sent to the specified CloudWatch Logs destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#enabled KafkaconnectConnector#enabled}

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

The CloudWatch log group that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#log_group KafkaconnectConnector#log_group}

---

### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose;

KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.builder()
//  .deliveryStream(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.deliveryStream">deliveryStream</a></code> | <code>java.lang.String</code> | The Kinesis Data Firehose delivery stream that is the destination for log delivery. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the logs get sent to the specified Kinesis Data Firehose delivery stream. |

---

##### `deliveryStream`<sup>Optional</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.deliveryStream"></a>

```java
public java.lang.String getDeliveryStream();
```

- *Type:* java.lang.String

The Kinesis Data Firehose delivery stream that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#delivery_stream KafkaconnectConnector#delivery_stream}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the logs get sent to the specified Kinesis Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#enabled KafkaconnectConnector#enabled}

---

### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3;

KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.builder()
//  .bucket(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the S3 bucket that is the destination for log delivery. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the logs get sent to the specified Amazon S3 destination. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.prefix">prefix</a></code> | <code>java.lang.String</code> | The S3 prefix that is the destination for log delivery. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The name of the S3 bucket that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#bucket KafkaconnectConnector#bucket}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the logs get sent to the specified Amazon S3 destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#enabled KafkaconnectConnector#enabled}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

The S3 prefix that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#prefix KafkaconnectConnector#prefix}

---

### KafkaconnectConnectorPlugins <a name="KafkaconnectConnectorPlugins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorPlugins;

KafkaconnectConnectorPlugins.builder()
    .customPlugin(KafkaconnectConnectorPluginsCustomPlugin)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins.property.customPlugin">customPlugin</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a></code> | Details about a custom plugin. |

---

##### `customPlugin`<sup>Required</sup> <a name="customPlugin" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins.property.customPlugin"></a>

```java
public KafkaconnectConnectorPluginsCustomPlugin getCustomPlugin();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a>

Details about a custom plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#custom_plugin KafkaconnectConnector#custom_plugin}

---

### KafkaconnectConnectorPluginsCustomPlugin <a name="KafkaconnectConnectorPluginsCustomPlugin" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorPluginsCustomPlugin;

KafkaconnectConnectorPluginsCustomPlugin.builder()
    .customPluginArn(java.lang.String)
    .revision(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.property.customPluginArn">customPluginArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the custom plugin to use. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.property.revision">revision</a></code> | <code>java.lang.Number</code> | The revision of the custom plugin to use. |

---

##### `customPluginArn`<sup>Required</sup> <a name="customPluginArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.property.customPluginArn"></a>

```java
public java.lang.String getCustomPluginArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the custom plugin to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#custom_plugin_arn KafkaconnectConnector#custom_plugin_arn}

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.property.revision"></a>

```java
public java.lang.Number getRevision();
```

- *Type:* java.lang.Number

The revision of the custom plugin to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#revision KafkaconnectConnector#revision}

---

### KafkaconnectConnectorTags <a name="KafkaconnectConnectorTags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorTags;

KafkaconnectConnectorTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#key KafkaconnectConnector#key}. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#value KafkaconnectConnector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#key KafkaconnectConnector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#value KafkaconnectConnector#value}.

---

### KafkaconnectConnectorWorkerConfiguration <a name="KafkaconnectConnectorWorkerConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorWorkerConfiguration;

KafkaconnectConnectorWorkerConfiguration.builder()
//  .revision(java.lang.Number)
//  .workerConfigurationArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.property.revision">revision</a></code> | <code>java.lang.Number</code> | The revision of the worker configuration to use. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.property.workerConfigurationArn">workerConfigurationArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the worker configuration to use. |

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.property.revision"></a>

```java
public java.lang.Number getRevision();
```

- *Type:* java.lang.Number

The revision of the worker configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#revision KafkaconnectConnector#revision}

---

##### `workerConfigurationArn`<sup>Optional</sup> <a name="workerConfigurationArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.property.workerConfigurationArn"></a>

```java
public java.lang.String getWorkerConfigurationArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the worker configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kafkaconnect_connector#worker_configuration_arn KafkaconnectConnector#worker_configuration_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### KafkaconnectConnectorCapacityAutoScalingOutputReference <a name="KafkaconnectConnectorCapacityAutoScalingOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorCapacityAutoScalingOutputReference;

new KafkaconnectConnectorCapacityAutoScalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleInPolicy">putScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleOutPolicy">putScaleOutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMaxAutoscalingTaskCount">resetMaxAutoscalingTaskCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMaxWorkerCount">resetMaxWorkerCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMcuCount">resetMcuCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMinWorkerCount">resetMinWorkerCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetScaleInPolicy">resetScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetScaleOutPolicy">resetScaleOutPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScaleInPolicy` <a name="putScaleInPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleInPolicy"></a>

```java
public void putScaleInPolicy(KafkaconnectConnectorCapacityAutoScalingScaleInPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleInPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a>

---

##### `putScaleOutPolicy` <a name="putScaleOutPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleOutPolicy"></a>

```java
public void putScaleOutPolicy(KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleOutPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a>

---

##### `resetMaxAutoscalingTaskCount` <a name="resetMaxAutoscalingTaskCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMaxAutoscalingTaskCount"></a>

```java
public void resetMaxAutoscalingTaskCount()
```

##### `resetMaxWorkerCount` <a name="resetMaxWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMaxWorkerCount"></a>

```java
public void resetMaxWorkerCount()
```

##### `resetMcuCount` <a name="resetMcuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMcuCount"></a>

```java
public void resetMcuCount()
```

##### `resetMinWorkerCount` <a name="resetMinWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMinWorkerCount"></a>

```java
public void resetMinWorkerCount()
```

##### `resetScaleInPolicy` <a name="resetScaleInPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetScaleInPolicy"></a>

```java
public void resetScaleInPolicy()
```

##### `resetScaleOutPolicy` <a name="resetScaleOutPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetScaleOutPolicy"></a>

```java
public void resetScaleOutPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicy">scaleInPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference">KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicy">scaleOutPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCountInput">maxAutoscalingTaskCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCountInput">maxWorkerCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCountInput">mcuCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCountInput">minWorkerCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicyInput">scaleInPolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicyInput">scaleOutPolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCount">maxAutoscalingTaskCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCount">maxWorkerCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCount">mcuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCount">minWorkerCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scaleInPolicy`<sup>Required</sup> <a name="scaleInPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicy"></a>

```java
public KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference getScaleInPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference">KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference</a>

---

##### `scaleOutPolicy`<sup>Required</sup> <a name="scaleOutPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicy"></a>

```java
public KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference getScaleOutPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference</a>

---

##### `maxAutoscalingTaskCountInput`<sup>Optional</sup> <a name="maxAutoscalingTaskCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCountInput"></a>

```java
public java.lang.Number getMaxAutoscalingTaskCountInput();
```

- *Type:* java.lang.Number

---

##### `maxWorkerCountInput`<sup>Optional</sup> <a name="maxWorkerCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCountInput"></a>

```java
public java.lang.Number getMaxWorkerCountInput();
```

- *Type:* java.lang.Number

---

##### `mcuCountInput`<sup>Optional</sup> <a name="mcuCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCountInput"></a>

```java
public java.lang.Number getMcuCountInput();
```

- *Type:* java.lang.Number

---

##### `minWorkerCountInput`<sup>Optional</sup> <a name="minWorkerCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCountInput"></a>

```java
public java.lang.Number getMinWorkerCountInput();
```

- *Type:* java.lang.Number

---

##### `scaleInPolicyInput`<sup>Optional</sup> <a name="scaleInPolicyInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicyInput"></a>

```java
public IResolvable|KafkaconnectConnectorCapacityAutoScalingScaleInPolicy getScaleInPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a>

---

##### `scaleOutPolicyInput`<sup>Optional</sup> <a name="scaleOutPolicyInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicyInput"></a>

```java
public IResolvable|KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy getScaleOutPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a>

---

##### `maxAutoscalingTaskCount`<sup>Required</sup> <a name="maxAutoscalingTaskCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCount"></a>

```java
public java.lang.Number getMaxAutoscalingTaskCount();
```

- *Type:* java.lang.Number

---

##### `maxWorkerCount`<sup>Required</sup> <a name="maxWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCount"></a>

```java
public java.lang.Number getMaxWorkerCount();
```

- *Type:* java.lang.Number

---

##### `mcuCount`<sup>Required</sup> <a name="mcuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCount"></a>

```java
public java.lang.Number getMcuCount();
```

- *Type:* java.lang.Number

---

##### `minWorkerCount`<sup>Required</sup> <a name="minWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCount"></a>

```java
public java.lang.Number getMinWorkerCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.internalValue"></a>

```java
public IResolvable|KafkaconnectConnectorCapacityAutoScaling getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a>

---


### KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference <a name="KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference;

new KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resetCpuUtilizationPercentage">resetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuUtilizationPercentage` <a name="resetCpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resetCpuUtilizationPercentage"></a>

```java
public void resetCpuUtilizationPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentageInput">cpuUtilizationPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage">cpuUtilizationPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuUtilizationPercentageInput`<sup>Optional</sup> <a name="cpuUtilizationPercentageInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentageInput"></a>

```java
public java.lang.Number getCpuUtilizationPercentageInput();
```

- *Type:* java.lang.Number

---

##### `cpuUtilizationPercentage`<sup>Required</sup> <a name="cpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```java
public java.lang.Number getCpuUtilizationPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|KafkaconnectConnectorCapacityAutoScalingScaleInPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a>

---


### KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference <a name="KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference;

new KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resetCpuUtilizationPercentage">resetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuUtilizationPercentage` <a name="resetCpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resetCpuUtilizationPercentage"></a>

```java
public void resetCpuUtilizationPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentageInput">cpuUtilizationPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage">cpuUtilizationPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuUtilizationPercentageInput`<sup>Optional</sup> <a name="cpuUtilizationPercentageInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentageInput"></a>

```java
public java.lang.Number getCpuUtilizationPercentageInput();
```

- *Type:* java.lang.Number

---

##### `cpuUtilizationPercentage`<sup>Required</sup> <a name="cpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```java
public java.lang.Number getCpuUtilizationPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a>

---


### KafkaconnectConnectorCapacityOutputReference <a name="KafkaconnectConnectorCapacityOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorCapacityOutputReference;

new KafkaconnectConnectorCapacityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putAutoScaling">putAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putProvisionedCapacity">putProvisionedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resetAutoScaling">resetAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resetProvisionedCapacity">resetProvisionedCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoScaling` <a name="putAutoScaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putAutoScaling"></a>

```java
public void putAutoScaling(KafkaconnectConnectorCapacityAutoScaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a>

---

##### `putProvisionedCapacity` <a name="putProvisionedCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putProvisionedCapacity"></a>

```java
public void putProvisionedCapacity(KafkaconnectConnectorCapacityProvisionedCapacity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putProvisionedCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a>

---

##### `resetAutoScaling` <a name="resetAutoScaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resetAutoScaling"></a>

```java
public void resetAutoScaling()
```

##### `resetProvisionedCapacity` <a name="resetProvisionedCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resetProvisionedCapacity"></a>

```java
public void resetProvisionedCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference">KafkaconnectConnectorCapacityAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.provisionedCapacity">provisionedCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference">KafkaconnectConnectorCapacityProvisionedCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.autoScalingInput">autoScalingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.provisionedCapacityInput">provisionedCapacityInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoScaling`<sup>Required</sup> <a name="autoScaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.autoScaling"></a>

```java
public KafkaconnectConnectorCapacityAutoScalingOutputReference getAutoScaling();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference">KafkaconnectConnectorCapacityAutoScalingOutputReference</a>

---

##### `provisionedCapacity`<sup>Required</sup> <a name="provisionedCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.provisionedCapacity"></a>

```java
public KafkaconnectConnectorCapacityProvisionedCapacityOutputReference getProvisionedCapacity();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference">KafkaconnectConnectorCapacityProvisionedCapacityOutputReference</a>

---

##### `autoScalingInput`<sup>Optional</sup> <a name="autoScalingInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.autoScalingInput"></a>

```java
public IResolvable|KafkaconnectConnectorCapacityAutoScaling getAutoScalingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a>

---

##### `provisionedCapacityInput`<sup>Optional</sup> <a name="provisionedCapacityInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.provisionedCapacityInput"></a>

```java
public IResolvable|KafkaconnectConnectorCapacityProvisionedCapacity getProvisionedCapacityInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.internalValue"></a>

```java
public IResolvable|KafkaconnectConnectorCapacity getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a>

---


### KafkaconnectConnectorCapacityProvisionedCapacityOutputReference <a name="KafkaconnectConnectorCapacityProvisionedCapacityOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference;

new KafkaconnectConnectorCapacityProvisionedCapacityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resetMcuCount">resetMcuCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resetWorkerCount">resetWorkerCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMcuCount` <a name="resetMcuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resetMcuCount"></a>

```java
public void resetMcuCount()
```

##### `resetWorkerCount` <a name="resetWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resetWorkerCount"></a>

```java
public void resetWorkerCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCountInput">mcuCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCountInput">workerCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount">mcuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount">workerCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mcuCountInput`<sup>Optional</sup> <a name="mcuCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCountInput"></a>

```java
public java.lang.Number getMcuCountInput();
```

- *Type:* java.lang.Number

---

##### `workerCountInput`<sup>Optional</sup> <a name="workerCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCountInput"></a>

```java
public java.lang.Number getWorkerCountInput();
```

- *Type:* java.lang.Number

---

##### `mcuCount`<sup>Required</sup> <a name="mcuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount"></a>

```java
public java.lang.Number getMcuCount();
```

- *Type:* java.lang.Number

---

##### `workerCount`<sup>Required</sup> <a name="workerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount"></a>

```java
public java.lang.Number getWorkerCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue"></a>

```java
public IResolvable|KafkaconnectConnectorCapacityProvisionedCapacity getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a>

---


### KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference <a name="KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference;

new KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc">putVpc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpc` <a name="putVpc" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc"></a>

```java
public void putVpc(KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServersInput">bootstrapServersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpcInput">vpcInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers">bootstrapServers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc"></a>

```java
public KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference getVpc();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a>

---

##### `bootstrapServersInput`<sup>Optional</sup> <a name="bootstrapServersInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServersInput"></a>

```java
public java.lang.String getBootstrapServersInput();
```

- *Type:* java.lang.String

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpcInput"></a>

```java
public IResolvable|KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc getVpcInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers"></a>

```java
public java.lang.String getBootstrapServers();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue"></a>

```java
public IResolvable|KafkaconnectConnectorKafkaClusterApacheKafkaCluster getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a>

---


### KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference <a name="KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference;

new KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue"></a>

```java
public IResolvable|KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---


### KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference <a name="KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference;

new KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationTypeInput"></a>

```java
public java.lang.String getAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue"></a>

```java
public IResolvable|KafkaconnectConnectorKafkaClusterClientAuthentication getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a>

---


### KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference <a name="KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference;

new KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionTypeInput"></a>

```java
public java.lang.String getEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue"></a>

```java
public IResolvable|KafkaconnectConnectorKafkaClusterEncryptionInTransit getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a>

---


### KafkaconnectConnectorKafkaClusterOutputReference <a name="KafkaconnectConnectorKafkaClusterOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorKafkaClusterOutputReference;

new KafkaconnectConnectorKafkaClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster">putApacheKafkaCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApacheKafkaCluster` <a name="putApacheKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster"></a>

```java
public void putApacheKafkaCluster(KafkaconnectConnectorKafkaClusterApacheKafkaCluster value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster">apacheKafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaClusterInput">apacheKafkaClusterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apacheKafkaCluster`<sup>Required</sup> <a name="apacheKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster"></a>

```java
public KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference getApacheKafkaCluster();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a>

---

##### `apacheKafkaClusterInput`<sup>Optional</sup> <a name="apacheKafkaClusterInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaClusterInput"></a>

```java
public IResolvable|KafkaconnectConnectorKafkaClusterApacheKafkaCluster getApacheKafkaClusterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.internalValue"></a>

```java
public IResolvable|KafkaconnectConnectorKafkaCluster getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a>

---


### KafkaconnectConnectorLogDeliveryOutputReference <a name="KafkaconnectConnectorLogDeliveryOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorLogDeliveryOutputReference;

new KafkaconnectConnectorLogDeliveryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery">putWorkerLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resetWorkerLogDelivery">resetWorkerLogDelivery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWorkerLogDelivery` <a name="putWorkerLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery"></a>

```java
public void putWorkerLogDelivery(KafkaconnectConnectorLogDeliveryWorkerLogDelivery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a>

---

##### `resetWorkerLogDelivery` <a name="resetWorkerLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resetWorkerLogDelivery"></a>

```java
public void resetWorkerLogDelivery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery">workerLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDeliveryInput">workerLogDeliveryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workerLogDelivery`<sup>Required</sup> <a name="workerLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery"></a>

```java
public KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference getWorkerLogDelivery();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a>

---

##### `workerLogDeliveryInput`<sup>Optional</sup> <a name="workerLogDeliveryInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDeliveryInput"></a>

```java
public IResolvable|KafkaconnectConnectorLogDeliveryWorkerLogDelivery getWorkerLogDeliveryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.internalValue"></a>

```java
public IResolvable|KafkaconnectConnectorLogDelivery getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a>

---


### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference;

new KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetLogGroup"></a>

```java
public void resetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput"></a>

```java
public java.lang.String getLogGroupInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue"></a>

```java
public IResolvable|KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---


### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference;

new KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetDeliveryStream">resetDeliveryStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryStream` <a name="resetDeliveryStream" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetDeliveryStream"></a>

```java
public void resetDeliveryStream()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStreamInput">deliveryStreamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream">deliveryStream</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deliveryStreamInput`<sup>Optional</sup> <a name="deliveryStreamInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStreamInput"></a>

```java
public java.lang.String getDeliveryStreamInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream"></a>

```java
public java.lang.String getDeliveryStream();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue"></a>

```java
public IResolvable|KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---


### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference;

new KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose">putFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetFirehose">resetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs"></a>

```java
public void putCloudwatchLogs(KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---

##### `putFirehose` <a name="putFirehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose"></a>

```java
public void putFirehose(KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3"></a>

```java
public void putS3(KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetCloudwatchLogs"></a>

```java
public void resetCloudwatchLogs()
```

##### `resetFirehose` <a name="resetFirehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetFirehose"></a>

```java
public void resetFirehose()
```

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetS3"></a>

```java
public void resetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehoseInput">firehoseInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3Input">s3Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs"></a>

```java
public KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference getCloudwatchLogs();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose"></a>

```java
public KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference getFirehose();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3"></a>

```java
public KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogsInput"></a>

```java
public IResolvable|KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs getCloudwatchLogsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---

##### `firehoseInput`<sup>Optional</sup> <a name="firehoseInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehoseInput"></a>

```java
public IResolvable|KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose getFirehoseInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3Input"></a>

```java
public IResolvable|KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 getS3Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue"></a>

```java
public IResolvable|KafkaconnectConnectorLogDeliveryWorkerLogDelivery getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a>

---


### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference;

new KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue"></a>

```java
public IResolvable|KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---


### KafkaconnectConnectorPluginsCustomPluginOutputReference <a name="KafkaconnectConnectorPluginsCustomPluginOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorPluginsCustomPluginOutputReference;

new KafkaconnectConnectorPluginsCustomPluginOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArnInput">customPluginArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.revisionInput">revisionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArn">customPluginArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.revision">revision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customPluginArnInput`<sup>Optional</sup> <a name="customPluginArnInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArnInput"></a>

```java
public java.lang.String getCustomPluginArnInput();
```

- *Type:* java.lang.String

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.revisionInput"></a>

```java
public java.lang.Number getRevisionInput();
```

- *Type:* java.lang.Number

---

##### `customPluginArn`<sup>Required</sup> <a name="customPluginArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArn"></a>

```java
public java.lang.String getCustomPluginArn();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.revision"></a>

```java
public java.lang.Number getRevision();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.internalValue"></a>

```java
public IResolvable|KafkaconnectConnectorPluginsCustomPlugin getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a>

---


### KafkaconnectConnectorPluginsList <a name="KafkaconnectConnectorPluginsList" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorPluginsList;

new KafkaconnectConnectorPluginsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.get"></a>

```java
public KafkaconnectConnectorPluginsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<KafkaconnectConnectorPlugins> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>>

---


### KafkaconnectConnectorPluginsOutputReference <a name="KafkaconnectConnectorPluginsOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorPluginsOutputReference;

new KafkaconnectConnectorPluginsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.putCustomPlugin">putCustomPlugin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomPlugin` <a name="putCustomPlugin" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.putCustomPlugin"></a>

```java
public void putCustomPlugin(KafkaconnectConnectorPluginsCustomPlugin value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.putCustomPlugin.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.customPlugin">customPlugin</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference">KafkaconnectConnectorPluginsCustomPluginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.customPluginInput">customPluginInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customPlugin`<sup>Required</sup> <a name="customPlugin" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.customPlugin"></a>

```java
public KafkaconnectConnectorPluginsCustomPluginOutputReference getCustomPlugin();
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference">KafkaconnectConnectorPluginsCustomPluginOutputReference</a>

---

##### `customPluginInput`<sup>Optional</sup> <a name="customPluginInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.customPluginInput"></a>

```java
public IResolvable|KafkaconnectConnectorPluginsCustomPlugin getCustomPluginInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.internalValue"></a>

```java
public IResolvable|KafkaconnectConnectorPlugins getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>

---


### KafkaconnectConnectorTagsList <a name="KafkaconnectConnectorTagsList" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorTagsList;

new KafkaconnectConnectorTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.get"></a>

```java
public KafkaconnectConnectorTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<KafkaconnectConnectorTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>>

---


### KafkaconnectConnectorTagsOutputReference <a name="KafkaconnectConnectorTagsOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorTagsOutputReference;

new KafkaconnectConnectorTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|KafkaconnectConnectorTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>

---


### KafkaconnectConnectorWorkerConfigurationOutputReference <a name="KafkaconnectConnectorWorkerConfigurationOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kafkaconnect_connector.KafkaconnectConnectorWorkerConfigurationOutputReference;

new KafkaconnectConnectorWorkerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resetRevision">resetRevision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resetWorkerConfigurationArn">resetWorkerConfigurationArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRevision` <a name="resetRevision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resetRevision"></a>

```java
public void resetRevision()
```

##### `resetWorkerConfigurationArn` <a name="resetWorkerConfigurationArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resetWorkerConfigurationArn"></a>

```java
public void resetWorkerConfigurationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.revisionInput">revisionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArnInput">workerConfigurationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.revision">revision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArn">workerConfigurationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.revisionInput"></a>

```java
public java.lang.Number getRevisionInput();
```

- *Type:* java.lang.Number

---

##### `workerConfigurationArnInput`<sup>Optional</sup> <a name="workerConfigurationArnInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArnInput"></a>

```java
public java.lang.String getWorkerConfigurationArnInput();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.revision"></a>

```java
public java.lang.Number getRevision();
```

- *Type:* java.lang.Number

---

##### `workerConfigurationArn`<sup>Required</sup> <a name="workerConfigurationArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArn"></a>

```java
public java.lang.String getWorkerConfigurationArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|KafkaconnectConnectorWorkerConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a>

---



